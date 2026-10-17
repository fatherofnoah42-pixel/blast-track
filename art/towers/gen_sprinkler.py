# 洒水器 (tower.frost): idle = drips from the nozzles, fire = both nozzles spray.
import math, os
import numpy as np
from PIL import Image, ImageDraw, ImageFilter
from cutout import cutout
from common import *

GAME_W = 46
PXU = 4.4
WATER, WATER_LO, WATER_HI = (120, 200, 245, 235), (40, 110, 175, 255), (235, 250, 255, 255)

def water_cut(a, lum, sat):   # drop the painted splashes, keep the dark blue hose
    return (a[..., 2] - a[..., 1] > 22) & (a[..., 2] > 150) & (a[..., 0] > 85) & (lum > 140)

def jet(img, tip, dirv, length, w0, drops=(), alpha=1.0, seed=0):
    """a widening spray fan with streaks and droplets"""
    if length <= 0 and not drops: return
    import random; rnd = random.Random(seed)
    lay = Image.new('RGBA', img.size, (0, 0, 0, 0)); d = ImageDraw.Draw(lay)
    ux, uy = dirv; nx, ny = -uy, ux; g = 0.0009
    P = lambda s, off: (tip[0] + ux * s + nx * off, tip[1] + uy * s + ny * off + g * s * s)
    if length > 0:
        wf = lambda s: w0 * (0.45 + 2.0 * s / length)
        ss = np.linspace(0, length, 26)
        L = [P(s_, wf(s_)) for s_ in ss]; R = [P(s_, -wf(s_)) for s_ in ss]
        end = [P(length + wf(length) * .6 * math.sin(t), wf(length) * math.cos(t)) for t in np.linspace(0, math.pi, 12)]
        poly = L + end[::-1][1:-1] + R[::-1] if False else L + [P(length + wf(length) * .5 * math.sin(t), wf(length) * math.cos(t)) for t in np.linspace(0, math.pi, 12)][1:-1] + R[::-1]
        d.polygon(poly, fill=(150, 215, 250, 170)); d.line(poly + [poly[0]], fill=(60, 130, 190, 200), width=5, joint='curve')
        for k in (-.55, 0, .55):                       # streaks
            pts = [P(s_, wf(s_) * k) for s_ in ss[2:-2]]
            d.line(pts, fill=WATER_HI, width=max(3, int(w0 * .25)), joint='curve')
        for _ in range(int(length / 18)):              # droplets at the fan's edge
            s_ = rnd.uniform(.55, 1.05) * length; off = rnd.uniform(-1.15, 1.15) * wf(min(s_, length)); r = rnd.uniform(5, 10)
            cx, cy = P(s_, off); d.ellipse((cx - r - 3, cy - r - 3, cx + r + 3, cy + r + 3), fill=WATER_LO); d.ellipse((cx - r, cy - r, cx + r, cy + r), fill=WATER)
    for (s_, off, r) in drops:
        cx, cy = P(s_, off)
        d.ellipse((cx - r - 3, cy - r - 3, cx + r + 3, cy + r + 3), fill=WATER_LO); d.ellipse((cx - r, cy - r, cx + r, cy + r), fill=WATER)
        d.ellipse((cx - r * .5, cy - r * .55, cx - r * .05, cy - r * .1), fill=WATER_HI)
    if alpha < 1:
        a = np.array(lay); a[..., 3] = (a[..., 3] * alpha).astype(np.uint8); lay = Image.fromarray(a)
    img.alpha_composite(lay)

def build():
    cut, _ = cutout(os.path.join(os.path.dirname(__file__), 'ref', 'sprinkler.png'), (15, 220, 960, 960), extra_remove=water_cut)
    cw, ch = cut.size
    PADL, PADR, PADT, PADB = 300, 300, 150, 30
    W, H = cw + PADL + PADR, ch + PADT + PADB
    base = Image.new('RGBA', (W, H), (0, 0, 0, 0)); base.alpha_composite(cut, (PADL, PADT))
    tipL, dirL = (PADL + 266, PADT + 46), (-0.96, -0.28)
    tipR, dirR = (PADL + 738, PADT + 136), (0.97, 0.24)
    foot = (PADL + cw * .52, PADT + ch - 30)
    shadow = ground_shadow((W, H), (foot[0], foot[1] - 10), cw * .5, 46)

    def frame(sy=1.0, L=0, wid=26, drops=(), drip=None, alpha=1.0):
        f = Image.new('RGBA', (W, H), (0, 0, 0, 0)); f.alpha_composite(shadow)
        f.alpha_composite(squash(base, 1 / math.sqrt(sy), sy, foot))
        hy = (1 - sy) * (foot[1] - tipL[1])                  # nozzles follow the squash
        for tip, dv in ((tipL, dirL), (tipR, dirR)):
            t = (tip[0], tip[1] + hy)
            jet(f, t, dv, L, wid, drops, alpha)
            if drip is not None:
                dx, dy, r = drip; jet(f, (t[0] + dv[0] * 6, t[1] + 10), (0, 1), 0, 0, [(dy, dx * (1 if dv[0] > 0 else -1), r)])
        return f

    frames, durs = [], []
    for i, dr in enumerate([(0, 4, 7), (0, 14, 8), (0, 30, 8), (0, 52, 7), (0, 76, 6), None]):   # idle: a drip forms and falls
        frames.append(frame(drip=dr)); durs.append(140)
    N_IDLE = len(frames)
    FIRE = [  # ms, sy, jet length, width, droplets [(s, off, r)], alpha
        (40, .97, 80, 20, [], 1.0),
        (40, 1.02, 200, 26, [], 1.0),
        (45, 1.0, 250, 28, [(280, -40, 10), (300, 50, 8)], 1.0),
        (50, 1.0, 220, 26, [(300, -60, 10), (330, 70, 9), (260, 90, 7)], .9),
        (55, 1.0, 110, 20, [(330, -70, 9), (360, 80, 8), (300, 110, 6)], .8),
        (60, 1.0, 0, 0, [(360, -80, 8), (390, 90, 6)], .55),
    ]
    for ms, sy, Ln, wd, dr, al in FIRE:
        frames.append(frame(sy, Ln, wd, dr, alpha=al)); durs.append(ms)
    k = PXU * GAME_W / cw
    frames = down(frames, k); FW, FH = frames[0].size
    write_sheet('tower.frost', frames, durs, {'idle': (0, N_IDLE - 1), 'fire': (N_IDLE, len(frames) - 1), 'release': (N_IDLE + 1, N_IDLE + 1)},
                (foot[0] * k, foot[1] * k), muzzle=[(tipR[0] * k, tipR[1] * k)] * len(frames))
    return {'tower.frost': {'w': round(FW / PXU, 1), 'h': round(FH / PXU, 1), 'frame': [FW, FH]}}, frames

if __name__ == '__main__':
    sz, frames = build(); print(sz)
    cs = Image.new('RGBA', (frames[0].width * 6, frames[0].height * 2), (236, 228, 210, 255))
    for i, f in enumerate(frames): cs.alpha_composite(f, ((i % 6) * f.width, (i // 6) * f.height))
    cs.convert('RGB').save('/home/claude/scratch/sprinkler_frames.png')
