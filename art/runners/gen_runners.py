# Runner sprites: 6 runners x 3 skin tones x 3 bibs, cut from the concept sheet ref/runners_ref.png.
# Writes ../runners.webp (the in-game atlas). With --png also writes the full-size sprites to out/.
# Needs: pip install pillow numpy scipy scikit-image
#
# Atlas layout (the game relies on it, see RUNNER_SPRITE in tools/script.js):
#   cell CELL x CELL px, 18 columns, one row per runner in KINDS order,
#   column = skin * 3 + bib  (SKINS / BIBS order below) facing right, +9 for the same runner facing left
#   (mirrored body, bib number still readable),
#   every sprite is drawn at the same scale SCALE, centred, feet on the cell's bottom edge.
import os, sys
import numpy as np
from PIL import Image, ImageDraw, ImageFont
from skimage import color
from scipy import ndimage

HERE = os.path.dirname(os.path.abspath(__file__))
REF = os.path.join(HERE, 'ref', 'runners_ref.png')
OUT_ATLAS = os.path.join(HERE, '..', 'runners.webp')
CELL, SCALE = 200, 0.45
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

def bib_sprite(size, fill, ink, num, angle):
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
    im = im.rotate(-angle, resample=Image.BICUBIC, expand=True)
    return im.resize((im.width // S, im.height // S), Image.LANCZOS)

def cutout(rgb, box):
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
    return Image.fromarray((out * 255).round().astype(np.uint8), 'RGBA')

def main():
    dump = '--png' in sys.argv
    if dump: os.makedirs(os.path.join(HERE, 'out'), exist_ok=True)
    ref = np.asarray(Image.open(REF).convert('RGB')).astype(float) / 255
    atlas = Image.new('RGBA', (CELL * 18, CELL * len(KINDS)), (0, 0, 0, 0))
    SW = ref.shape[1]
    for si, (skin, target, kL) in enumerate(SKINS):
        base = recolor_shirts(ref if target is None else recolor_skin(ref, target, kL))
        base_im = Image.fromarray((base * 255).round().astype(np.uint8)).convert('RGBA')
        for side, sheet in ((0, base_im), (1, base_im.transpose(Image.FLIP_LEFT_RIGHT))):
          for bi, (bib, fill, ink) in enumerate(BIBS):
            im = sheet.copy()
            for key, box, c, size, ang, num in KINDS:
                cx = SW - 1 - c[0] if side else c[0]
                b = bib_sprite(size, fill, ink, num, -ang if side else ang); im.alpha_composite(b, (cx - b.width // 2, c[1] - b.height // 2))
            rgb = np.asarray(im.convert('RGB')).astype(float) / 255
            for ki, (key, box, *_r) in enumerate(KINDS):
                bx = (SW - box[2], box[1], SW - box[0], box[3]) if side else box
                sp = cutout(rgb, bx)
                if dump: sp.save(os.path.join(HERE, 'out', f'{key}_{skin}_{bib}{"_left" if side else ""}.png'))
                sm = sp.resize((round(sp.width * SCALE), round(sp.height * SCALE)), Image.LANCZOS)
                assert sm.width <= CELL and sm.height <= CELL, (key, sm.size)
                atlas.alpha_composite(sm, ((side * 9 + si * 3 + bi) * CELL + (CELL - sm.width) // 2, ki * CELL + CELL - sm.height))
    atlas.save(OUT_ATLAS, 'WEBP', quality=90, method=6)
    print('wrote', os.path.normpath(OUT_ATLAS), atlas.size)

if __name__ == '__main__':
    main()
