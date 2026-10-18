# Runner sprites with a run cycle: 6 runners x 3 skin tones, bent into FRAMES poses by the rig in rig.py / warp.py,
# plus the bib numbers as separate little images (drawn on the chest at run time, so they stay readable when a runner faces left).
# Cut from the concept sheet ref/runners_ref.png. Writes ../runners.webp and the matching RUNNER_RIG table into ../../tools/script.js
# (between the "<runner-rig>" markers), then run tools/build.sh. With --png also dumps the frames to out/.
# Needs: pip install pillow numpy scipy scikit-image
#
# Atlas layout: one row per runner x skin (KINDS order, then SKINS), one column per frame (0 = the painted pose,
# 1..FRAMES/2 bend further; the game plays 0,1,..,n,..,1 back and forth). Every cell is CW x CH px at the same scale,
# feet on the bottom edge, the runner's anchor at RUNNER_RIG.k.ax. Below the frames: one row of bibs (KINDS x BIBS).
import os, sys, json, math, re
import numpy as np
from PIL import Image, ImageDraw, ImageFont
from skimage import color
from scipy import ndimage

HERE = os.path.dirname(os.path.abspath(__file__))
REF = os.path.join(HERE, 'ref', 'runners_ref.png')
OUT_ATLAS = os.path.join(HERE, '..', 'runners.webp')
SCALE = 0.45
PAD = 60          # room around a cut-out for limbs that swing past its outline (ref px)
INK = (53, 20, 3)
FONT_CANDIDATES = ['/usr/share/fonts/opentype/noto/NotoSansCJK-Black.ttc', '/System/Library/Fonts/Supplemental/Arial Black.ttf',
                   'C:/Windows/Fonts/ariblk.ttf', '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf']

# key, cell box on the ref sheet, bib centre, bib size, bib tilt (deg), bib number
KINDS = [
    ('jogger',    (30, 0, 515, 432),     (258, 224), (60, 46), -6, '08'),
    ('endurance', (525, 0, 1008, 432),   (760, 212), (60, 46), -6, '24'),
    ('rain',      (1018, 0, 1530, 432),  (1255, 250), (60, 46), -4, '17'),
    ('spring',    (30, 508, 515, 935),   (262, 698), (60, 46), -8, '33'),
    ('headphone', (525, 508, 1008, 935), (745, 730), (60, 46), -5, '46'),
    ('whale',     (1018, 508, 1530, 935), (1196, 744), (72, 54), -4, '99'),
]
SKINS = [('light', None, 1.0), ('medium', (228, 166, 112), .95), ('deep', (150, 94, 60), .8)]
BIBS = [('standard', (250, 250, 244), INK), ('light', (104, 212, 146), (14, 66, 38)), ('race', (228, 58, 50), (255, 255, 255))]
BASE_SKIN = (254, 196, 142)

def f01(rgb): return np.array(rgb, float) / 255
def lab1(rgb): return color.rgb2lab(f01(rgb).reshape(1, 1, 3))[0, 0]

def edge_blend(src, out, m, base, target, iters, tol):
    """anti-aliased pixels between a recoloured area and the dark outline: re-mix with the new colour"""
    band = ndimage.binary_dilation(m, iterations=iters) & ~m
    ol, b, t = f01(INK), f01(base), f01(target)
    seg = b - ol; p = src[band] - ol
    a = np.clip((p @ seg) / (seg @ seg), 0, 1); resid = np.linalg.norm(p - a[:, None] * seg, axis=1)
    bp = out[band].copy(); ok = resid < tol; bp[ok] = (a[:, None] * t + (1 - a[:, None]) * ol)[ok]; out[band] = bp

def shift_lab(src, m, base, target, kL, kab):
    lab = color.rgb2lab(src); b, t = lab1(base), lab1(target); d = lab - b
    nl = np.stack([t[0] + d[..., 0] * kL, t[1] + d[..., 1] * kab, t[2] + d[..., 2] * kab], -1)
    out = src.copy(); out[m] = np.clip(color.lab2rgb(nl), 0, 1)[m]; return out

def skin_mask(src):
    hsv = color.rgb2hsv(src); H, S, V = hsv[..., 0] * 360, hsv[..., 1], hsv[..., 2]
    m = (H > 12) & (H < 40) & (S > .22) & (S < .7) & (V > .55)
    near = ndimage.binary_dilation(m, iterations=4)
    m |= near & ((H < 45) | (H > 345)) & (S > .25) & (V > .3)   # warm inner lines on fingers / ears
    m[430:500, :] = False; m[930:, :] = False                       # name labels
    return m

def recolor_skin(src, target, kL):
    m = skin_mask(src); out = shift_lab(src, m, BASE_SKIN, target, kL, .8)
    edge_blend(src, out, m, BASE_SKIN, target, 3, .12); return out

def shirt_mask(src, seed, box):
    hsv = color.rgb2hsv(src); H, S, V = hsv[..., 0] * 360, hsv[..., 1], hsv[..., 2]
    blue = (H > 195) & (H < 235) & (S > .45) & (V > .5)
    x0, y0, x1, y1 = box; sub = np.zeros_like(blue); sub[y0:y1, x0:x1] = blue[y0:y1, x0:x1]
    lab, _ = ndimage.label(sub); m = lab == lab[seed[1], seed[0]]
    near = ndimage.binary_dilation(m, iterations=3)
    return m | (near & (H > 190) & (H < 245) & (S > .3) & (V > .25))

def recolor_shirts(src):
    for seed, box, target in [((760, 190), (560, 110, 960, 300), (244, 132, 30)),     # endurance: blue -> orange
                              ((1200, 780), (1040, 600, 1500, 900), (96, 86, 200))]:  # whale: blue -> blue-violet
        m = shirt_mask(src, seed, box); out = shift_lab(src, m, (40, 144, 248), target, 1, .6)
        edge_blend(src, out, m, (40, 144, 248), target, 2, .15); src = out
    return src

def font(size):
    for p in FONT_CANDIDATES:
        if os.path.exists(p):
            try: return ImageFont.truetype(p, size, index=2) if p.endswith('.ttc') else ImageFont.truetype(p, size)
            except Exception: pass
    return ImageFont.load_default()

def bib_sprite(size, fill, ink, num, angle=0):
    S = 4; w, h = size; pad = 12
    im = Image.new('RGBA', ((w + pad * 2) * S, (h + pad * 2) * S), (0, 0, 0, 0)); d = ImageDraw.Draw(im)
    x0, y0, x1, y1 = pad * S, pad * S, (pad + w) * S, (pad + h) * S; lw = int(3.6 * S)
    d.rounded_rectangle([x0, y0, x1, y1], radius=7 * S, fill=fill + (255,), outline=INK + (255,), width=lw)
    d.rounded_rectangle([x0 + lw, y1 - lw - int(h * .2 * S), x1 - lw, y1 - lw], radius=4 * S, fill=tuple(int(c * .82) for c in fill) + (255,))
    for px in (x0 + int(w * .16 * S), x1 - int(w * .16 * S)):
        r = int(3.2 * S); cy = y0 + int(h * .2 * S)
        d.ellipse([px - r, cy - r, px + r, cy + r], fill=(200, 205, 212, 255), outline=INK + (255,), width=int(1.6 * S))
    f = font(int(h * .62 * S)); tb = d.textbbox((0, 0), num, font=f)
    d.text(((x0 + x1) / 2 - (tb[2] - tb[0]) / 2 - tb[0], (y0 + y1) / 2 - (tb[3] - tb[1]) / 2 - tb[1] + int(1.5 * S)), num, font=f, fill=ink + (255,))
    if angle: im = im.rotate(-angle, resample=Image.BICUBIC, expand=True)
    return im.resize((im.width // S, im.height // S), Image.LANCZOS)

def cutout(rgb, box, with_origin=False):
    x0, y0, x1, y1 = box; c = rgb[y0:y1, x0:x1]
    hsv = color.rgb2hsv(c); bgl = (hsv[..., 1] < .2) & (hsv[..., 2] > .72)
    lab, _ = ndimage.label(bgl)
    border = set(np.unique(np.concatenate([lab[0], lab[-1], lab[:, 0], lab[:, -1]]))) - {0}
    bg = np.isin(lab, list(border))
    paper = np.median(c[bg], axis=0)                                  # enclosed pockets of paper colour (between arm and body)
    pocket, n = ndimage.label((np.linalg.norm(c - paper, axis=-1) < .03) & ~bg)
    if n:
        sizes = ndimage.sum(np.ones_like(pocket), pocket, range(1, n + 1))
        bg |= np.isin(pocket, [i + 1 for i, s in enumerate(sizes) if s > 150])
    fg = ndimage.binary_opening(~bg, iterations=1)
    l2, n = ndimage.label(fg); sizes = ndimage.sum(fg, l2, range(1, n + 1))
    fg = np.isin(l2, [i + 1 for i, s in enumerate(sizes) if s > 40])
    a = ndimage.gaussian_filter(fg.astype(float), .6)
    a = np.where(fg, np.clip(a * 1.4, 0, 1), np.clip(a - .35, 0, 1))   # slight feather on both sides of the edge
    out = np.dstack([c, a]); ys, xs = np.where(a > .05)
    out = out[ys.min():ys.max() + 1, xs.min():xs.max() + 1]
    img = Image.fromarray((out * 255).round().astype(np.uint8), 'RGBA')
    return (img, (x0 + xs.min(), y0 + ys.min())) if with_origin else img

def main():
    sys.path.insert(0, HERE)
    import rig, warp
    dump = '--png' in sys.argv
    if dump: os.makedirs(os.path.join(HERE, 'out'), exist_ok=True)
    ref = np.asarray(Image.open(REF).convert('RGB')).astype(float) / 255
    skins = [recolor_shirts(ref if t is None else recolor_skin(ref, t, kL)) for _, t, kL in SKINS]
    nF = rig.FRAMES // 2 + 1
    frames, meta = {}, {}
    for key, box, bc, bsize, bang, num in KINDS:
        sp, org = cutout(skins[0], box, with_origin=True)          # silhouette from the light skin; every skin uses the same one
        alpha = np.asarray(sp)[..., 3]; h, w = alpha.shape
        cfg = rig.RIG[key]
        H, W = h + 2 * PAD, w + 2 * PAD; o = (org[0] - PAD, org[1] - PAD)
        R = warp.Rig(cfg, (H, W), o)
        anchor_x = PAD + w / 2                                       # feet centre of the painted pose, in padded px
        per = []
        for si, sk in enumerate(skins):
            A = np.zeros((H, W, 4), np.uint8)
            A[PAD:PAD + h, PAD:PAD + w, :3] = (sk[org[1]:org[1] + h, org[0]:org[0] + w] * 255).round().astype(np.uint8)
            A[PAD:PAD + h, PAD:PAD + w, 3] = alpha
            fs = [warp.frame(A, R, warp.cycle_angles(i, rig.FRAMES, rig.LEG_SWING, rig.ARM_SWING, cfg.get('arm_k', 1))) for i in range(nF)]
            per.append(fs)
            if dump:
                for i, f in enumerate(fs): Image.fromarray(f).save(os.path.join(HERE, 'out', f'{key}_{SKINS[si][0]}_{i}.png'))
        # feet stay on the ground: each frame is lifted so its lowest pixel sits on the cell floor
        bottoms = [int(np.where(f[..., 3].max(1) > 40)[0].max()) for f in per[0]]
        cols = np.where(np.max([f[..., 3].max(0) for f in per[0]], 0) > 10)[0]; rows = np.where(np.max([f[..., 3].max(1) for f in per[0]], 0) > 10)[0]
        x0, x1 = int(cols.min()), int(cols.max()) + 1
        top = int(rows.min())
        frames[key] = (per, bottoms, x0, x1, top)
        meta[key] = {'bib': (bc[0] - o[0], bc[1] - o[1]), 'bang': bang, 'anchor_x': anchor_x}
    # one cell size for everybody (scaled), so sizes stay comparable
    sc = SCALE
    CW = max(math.ceil((x1 - x0) * sc) for _, _, x0, x1, _ in frames.values()) + 2
    CH = max(math.ceil((max(bt) - top) * sc) for _, bt, _, _, top in frames.values()) + 2
    nrows = len(KINDS) * len(SKINS)
    # bibs
    bibs = {}
    for key, box, bc, bsize, bang, num in KINDS:
        for bib, fill, ink in BIBS:
            b = bib_sprite(bsize, fill, ink, num); bibs[(key, bib)] = b.resize((round(b.width * sc), round(b.height * sc)), Image.LANCZOS)
    BW = max(b.width for b in bibs.values()); BH = max(b.height for b in bibs.values())
    atlas = Image.new('RGBA', (max(CW * nF, BW * len(bibs)), CH * nrows + BH), (0, 0, 0, 0))
    out = {'cw': CW, 'ch': CH, 'frames': nF, 'bw': BW, 'bh': BH, 'bibY': CH * nrows, 'skins': len(SKINS), 'bibs': [b[0] for b in BIBS], 'kinds': {}}
    for ki, (key, *_r) in enumerate(KINDS):
        per, bottoms, x0, x1, top = frames[key]; m = meta[key]
        lift = []
        for si in range(len(SKINS)):
            for fi, f in enumerate(per[si]):
                crop = Image.fromarray(f[:, x0:x1])
                crop = crop.resize((round(crop.width * sc), round(crop.height * sc)), Image.LANCZOS)
                yb = round(bottoms[fi] * sc)                       # this frame's feet line, scaled
                atlas.alpha_composite(crop, (fi * CW + 1, (ki * len(SKINS) + si) * CH + CH - 1 - yb))
        rise = [round((bottoms[0] - b) * sc, 1) for b in bottoms]   # how far the body is lifted in each frame (px)
        out['kinds'][key] = {'row': ki * len(SKINS), 'ax': round((m['anchor_x'] - x0) * sc + 1, 1),
                             'bib': [round((m['bib'][0] - m['anchor_x']) * sc, 1), round((m['bib'][1] - bottoms[0]) * sc, 1)], 'bang': m['bang'], 'rise': rise}
    for i, (key, bib) in enumerate(bibs):
        b = bibs[(key, bib)]; atlas.alpha_composite(b, (i * BW + (BW - b.width) // 2, CH * nrows + (BH - b.height) // 2))
    out['bibOrder'] = [f'{k}.{b}' for k, b in bibs]
    atlas.save(OUT_ATLAS, 'WEBP', quality=90, method=6)
    js = 'const RUNNER_RIG = ' + json.dumps(out, separators=(',', ':')) + ';'
    sp = os.path.join(HERE, '..', '..', 'tools', 'script.js'); src = open(sp, encoding='utf-8').read()
    new = re.sub(r'(// <runner-rig>\n).*?(\n// </runner-rig>)', lambda mm: mm.group(1) + js + mm.group(2), src, flags=re.S)
    if new == src and js not in src: print('!! markers <runner-rig> not found in tools/script.js')
    open(sp, 'w', encoding='utf-8').write(new)
    print('wrote', os.path.normpath(OUT_ATLAS), atlas.size, 'cell', CW, CH)

if __name__ == '__main__':
    main()
