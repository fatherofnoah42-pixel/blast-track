# Skinning warp used by gen_runners.py: bends a cut-out runner (RGBA, ref-sheet coordinates offset by `origin`) into one run-cycle frame.
import math
import numpy as np
from PIL import Image, ImageDraw
from scipy import ndimage

def smooth(e0, e1, v):
    t = np.clip((v - e0) / (e1 - e0), 0, 1); return t * t * (3 - 2 * t)

def poly_mask(shape, poly, origin):
    m = Image.new('L', (shape[1], shape[0]), 0)
    ImageDraw.Draw(m).polygon([(x - origin[0], y - origin[1]) for x, y in poly], fill=255)
    return np.asarray(m) > 0

class Rig:
    """weights of each limb over the sprite (source coordinates)"""
    def __init__(self, cfg, shape, origin):
        H, W = shape; self.c = cfg; self.o = origin
        yy, xx = np.mgrid[0:H, 0:W].astype(float); X = xx + origin[0]; Y = yy + origin[1]
        top = smooth(cfg['hip_y'] - 26, cfg['hip_y'] - 14, Y)      # nothing above the waistband moves
        L0, L1 = cfg.get('leg_r', (18, 48))
        legw_b = top * smooth(L0, L1, np.hypot(X - cfg['bl'][0], Y - cfg['bl'][1]))   # bend grows with distance from the hip
        legw_f = top * smooth(L0, L1, np.hypot(X - cfg['fl'][0], Y - cfg['fl'][1]))
        keep = np.zeros(shape, bool)
        for p in cfg.get('keep', []): keep |= poly_mask(shape, p, origin)
        self.w = {}
        self.w['bl'] = np.where(X < cfg['split'], legw_b, 0)
        self.w['fl'] = np.where(X >= cfg['split'], legw_f, 0)
        for k in ('ba', 'fa'):
            a = cfg.get(k)
            if not a: self.w[k] = np.zeros(shape); continue
            r = np.hypot(X - a['pivot'][0], Y - a['pivot'][1])
            self.w[k] = np.where(poly_mask(shape, a['poly'], origin) & ~keep, smooth(a['r0'], a['r1'], r), 0)
        arms = np.zeros(shape, bool)
        for k in ('ba', 'fa'):
            if cfg.get(k): arms |= poly_mask(shape, cfg[k]['poly'], origin)
        for k in ('bl', 'fl'): self.w[k] = np.where(keep | arms, 0, self.w[k])   # a fist hanging low is still arm, not leg
        self.piv = {'bl': cfg['bl'], 'fl': cfg['fl'], 'ba': cfg['ba']['pivot'] if cfg.get('ba') else (0, 0), 'fa': cfg['fa']['pivot'] if cfg.get('fa') else (0, 0)}

def sample(img, sx, sy):
    """bilinear sample of an RGBA float array (premultiplied) at float coords; outside = transparent"""
    H, W = img.shape[:2]
    x0 = np.floor(sx).astype(int); y0 = np.floor(sy).astype(int); fx = sx - x0; fy = sy - y0
    out = np.zeros(sx.shape + (4,))
    for dy, wy in ((0, 1 - fy), (1, fy)):
        for dx, wx in ((0, 1 - fx), (1, fx)):
            xi = x0 + dx; yi = y0 + dy; ok = (xi >= 0) & (xi < W) & (yi >= 0) & (yi < H)
            v = np.zeros(sx.shape + (4,)); v[ok] = img[yi[ok], xi[ok]]
            out += v * (wx * wy)[..., None]
    return out

def sample_w(wm, sx, sy):
    H, W = wm.shape; x = np.clip(np.round(sx).astype(int), 0, W - 1); y = np.clip(np.round(sy).astype(int), 0, H - 1)
    inside = (sx >= 0) & (sx < W) & (sy >= 0) & (sy < H)
    return np.where(inside, wm[y, x], 0)

def frame(rgba, rig, angles, pad=0):
    """rgba: HxWx4 uint8 cut-out, angles: degrees per limb ('bl','fl','ba','fa'), positive = clockwise on screen.
       Returns the bent frame (same size). Layers back to front: back arm, back leg, body, front leg, front arm."""
    a = rgba.astype(float) / 255; pm = a.copy(); pm[..., :3] *= pm[..., 3:4]
    H, W = a.shape[:2]
    yy, xx = np.mgrid[0:H, 0:W].astype(float)
    o = rig.o
    layers = {}
    for k in ('ba', 'bl', 'fl', 'fa'):
        th = math.radians(angles.get(k, 0))
        if th == 0 or not rig.w[k].any(): layers[k] = None; continue
        px, py = rig.piv[k][0] - o[0], rig.piv[k][1] - o[1]
        # inverse map with the weight looked up at the source point (2 fixed-point passes)
        # start from the fully rotated limb, then let the weight at the source point pull the joint zone back (fixed point)
        dx, dy = xx - px, yy - py
        w = np.ones((H, W))
        for _ in range(5):
            t = -th * w; c = np.cos(t); s = np.sin(t)
            sx = px + dx * c - dy * s; sy = py + dx * s + dy * c
            w = sample_w(rig.w[k], sx, sy)
        smp = sample(pm, sx, sy)
        smp *= (w > 0.001)[..., None]                        # only pixels that belong to this limb
        layers[k] = smp
    moving = sum(rig.w[k] for k in ('ba', 'bl', 'fl', 'fa') if layers.get(k) is not None) if any(layers[k] is not None for k in layers) else np.zeros((H, W))
    body = pm * (moving <= 0.001)[..., None]                   # the part that never moves
    # under everything: the joint zones as painted, so a wedge that opens between the legs shows cloth, not a hole
    joint = pm * ((moving > 0.001) & (moving < .5))[..., None]
    out = np.zeros_like(pm)
    def over(dst, src): return src + dst * (1 - src[..., 3:4])
    out = over(out, joint)
    for k in ('ba', 'bl'):
        if layers[k] is not None: out = over(out, layers[k])
    out = over(out, body)
    for k in ('fl', 'fa'):
        if layers[k] is not None: out = over(out, layers[k])
    al = out[..., 3:4]; rgb = np.where(al > 0, out[..., :3] / np.maximum(al, 1e-6), 0)
    return (np.dstack([rgb, al]) * 255).round().clip(0, 255).astype(np.uint8)

def cycle_angles(i, n, leg, arm, arm_k=1):
    """frame i of n: 0 = the painted pose. Forward limbs swing back, back limbs come forward, and return."""
    s = (1 - math.cos(2 * math.pi * i / n)) / 2; arm *= arm_k
    return {'fl': leg * 2 * s, 'bl': -leg * 2 * s, 'fa': arm * 2 * s, 'ba': -arm * 2 * s}
