# Static concept art for the Can Tosser's 3 paths x 6 tiers, built from the same hand-painted parts (rig.py) + code-drawn add-ons.
# Run:  python3 variants.py [out_dir]     -> writes path1.png path2.png path3.png (6 tiers each, facing right like the game sprites)
import sys, os, math, colorsys
import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageOps, ImageFont
import rig
from rig import K, WX0, WY0, FW, FH

OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(os.path.dirname(os.path.abspath(__file__)), '_variants')
INK = (24, 17, 14, 255)
ORIG = {k: v.copy() for k, v in rig.P.items()}
BASE_CAN = rig.P['can'].copy(); BASE_CAN_SC = rig.CAN_SC; BASE_ARM_SC = rig.ARM_SC

def px(p): return ((p[0] - WX0) * K, (p[1] - WY0) * K)
def lay(cv): return Image.new('RGBA', cv.size, (0, 0, 0, 0))

class Pen:
    """Cartoon drawing on the supersampled canvas in world units: every shape gets a dark outline."""
    def __init__(self, cv): self.cv = cv; self.l = lay(cv); self.d = ImageDraw.Draw(self.l)
    def poly(self, pts, fill, ol=3.0): 
        P = [px(p) for p in pts]; self.d.polygon(P, fill=fill, outline=None)
        self.d.line(P + [P[0]], fill=INK, width=max(1, round(ol * K)), joint='curve')
        self.d.polygon(P, fill=fill)
        self.d.line(P + [P[0]], fill=INK, width=max(1, round(ol * K)), joint='curve')
    def ell(self, c, rx, ry, fill, ol=3.0, rot=0):
        if rot:
            pts = [(c[0] + rx * math.cos(a) * math.cos(rot) - ry * math.sin(a) * math.sin(rot), c[1] + rx * math.cos(a) * math.sin(rot) + ry * math.sin(a) * math.cos(rot)) for a in np.linspace(0, 2 * math.pi, 48)]
            return self.poly(pts, fill, ol)
        x, y = px(c); o = ol * K
        self.d.ellipse((x - rx * K - o, y - ry * K - o, x + rx * K + o, y + ry * K + o), fill=INK)
        self.d.ellipse((x - rx * K, y - ry * K, x + rx * K, y + ry * K), fill=fill)
    def line(self, a, b, col, w, ol=2.0):
        self.d.line([px(a), px(b)], fill=INK, width=round((w + 2 * ol) * K)); self.d.line([px(a), px(b)], fill=col, width=round(w * K))
    def glow(self, c, r, col, a=150):
        g = lay(self.cv); gd = ImageDraw.Draw(g); x, y = px(c)
        for i in range(8, 0, -1):
            rr = r * K * i / 8; gd.ellipse((x - rr, y - rr, x + rr, y + rr), fill=col + (int(a * (1 - i / 9) / 3),))
        self.cv.alpha_composite(g.filter(ImageFilter.GaussianBlur(r * K * .12)))
    def done(self): self.cv.alpha_composite(self.l)

def recolor(img, fn):
    a = np.array(img).astype(np.float32); rgb = a[..., :3] / 255
    out = fn(rgb); a[..., :3] = np.clip(out, 0, 1) * 255
    return Image.fromarray(a.astype(np.uint8))

def hsv_shift(rgb, h=0.0, s=1.0, v=1.0):
    mx = rgb.max(-1); mn = rgb.min(-1); d = mx - mn
    r, g, b = rgb[..., 0], rgb[..., 1], rgb[..., 2]
    hh = np.where(d == 0, 0, np.where(mx == r, ((g - b) / (d + 1e-9)) % 6, np.where(mx == g, (b - r) / (d + 1e-9) + 2, (r - g) / (d + 1e-9) + 4))) / 6
    ss = np.where(mx == 0, 0, d / (mx + 1e-9)); vv = mx
    hh = (hh + h) % 1; ss = np.clip(ss * s, 0, 1); vv = np.clip(vv * v, 0, 1)
    i = np.floor(hh * 6); f = hh * 6 - i; p = vv * (1 - ss); q = vv * (1 - f * ss); t = vv * (1 - (1 - f) * ss); i = i.astype(int) % 6
    R = np.choose(i, [vv, q, p, p, t, vv]); G = np.choose(i, [t, vv, vv, q, p, p]); B = np.choose(i, [p, p, t, vv, vv, q])
    return np.stack([R, G, B], -1)

def tint_teal(img, h=0.0, s=1.0, v=1.0, grey=False):
    """re-colours only the teal metal (hue 0.40-0.62) of a part"""
    a = np.array(img).astype(np.float32); rgb = a[..., :3] / 255
    mx = rgb.max(-1); mn = rgb.min(-1); d = mx - mn
    r, g, b = rgb[..., 0], rgb[..., 1], rgb[..., 2]
    hh = np.where(d == 0, 0, np.where(mx == g, (b - r) / (d + 1e-9) + 2, np.where(mx == b, (r - g) / (d + 1e-9) + 4, ((g - b) / (d + 1e-9)) % 6))) / 6
    m = ((hh > .40) & (hh < .62) & (d > .08))[..., None]
    if grey:
        lum = (rgb @ np.array([.3, .59, .11]))[..., None]; new = np.clip(lum * np.array(grey) * v + (1 - v) * 0, 0, 1)
    else:
        new = hsv_shift(rgb, h, s, v)
    a[..., :3] = np.where(m, new, rgb) * 255
    return Image.fromarray(a.astype(np.uint8))

def steel(img, tint=(0.80, 0.86, 1.0), lift=0.06):
    def f(rgb):
        lum = (rgb @ np.array([.3, .59, .11]))[..., None]
        return np.clip(lum * np.array(tint) * 1.15 + lift, 0, 1)
    return recolor(img, f)

# --- geometry helpers for add-ons that ride on the arm ---
def arm_frame(arm_deg, arm_sc):
    hole = rig.BASE_PIVOT_HOLE
    th = math.radians(arm_deg)
    def at(local):  # arm-crop coords -> world
        return rig.world_of(local, rig.ARM_HOLE, hole, arm_deg, arm_sc)
    ax = (math.cos(th), math.sin(th)); up = (math.sin(th), -math.cos(th))   # along the arm / the scoop's mouth direction
    return at, ax, up

PIPS = {1: (205, 140, 90), 2: (205, 140, 90), 3: (200, 205, 215), 4: (200, 205, 215), 5: (255, 205, 70), 6: (255, 205, 70)}
def tier_pips(pen, n, col):
    cx, cy = 310, 366; gap = 22
    for i in range(n):
        x = cx + (i - (n - 1) / 2) * gap
        pen.ell((x, cy), 7.5, 7.5, col + (255,), 2.2)
        pen.ell((x - 2, cy - 2.5), 2.4, 2.4, (255, 255, 255, 190), 0)

def render_tier(spec):
    """spec: dict(arm, can_sc, arm_sc, can_img, can_slide, base_fx, arm_fx, top_fx, tier, stage)"""
    for k in ('base', 'arm', 'cap'): rig.P[k] = spec['teal'](ORIG[k]) if 'teal' in spec else ORIG[k]
    rig.P['can'] = spec.get('can_img', BASE_CAN); rig.CAN_SC = spec.get('can_sc', BASE_CAN_SC); rig.ARM_SC = spec.get('arm_sc', BASE_ARM_SC)
    rig.REST_LEN = rig._rest_lengths()
    arm = spec.get('arm', -34)
    def extra(cv):
        pen = Pen(cv)
        for f in spec.get('fx', []): f(pen, arm)
        tier_pips(pen, spec['tier'], PIPS[spec['tier']])
        pen.done()
    fr, info = rig.render(arm_deg=arm, can=spec.get('can', True), can_slide=spec.get('slide', 0), extra=extra, wobble=0)
    for k in ('base', 'arm', 'cap'): rig.P[k] = ORIG[k]
    rig.P['can'] = BASE_CAN; rig.CAN_SC = BASE_CAN_SC; rig.ARM_SC = BASE_ARM_SC; rig.REST_LEN = rig._rest_lengths()
    return ImageOps.mirror(fr)

def sheet(name, title, specs, labels):
    n = len(specs); cw, ch = FW, FH
    S = Image.new('RGBA', (cw * 3, ch * 2 + 70), (244, 236, 218, 255)); d = ImageDraw.Draw(S)
    try: f1 = ImageFont.truetype('/usr/share/fonts/opentype/noto/NotoSerifCJK-Bold.ttc', 22); f2 = ImageFont.truetype('/usr/share/fonts/opentype/noto/NotoSerifCJK-Bold.ttc', 15)
    except Exception: f1 = f2 = ImageFont.load_default()
    d.text((14, 10), title, fill=(40, 30, 24), font=f1)
    for i, sp in enumerate(specs):
        fr = render_tier(sp); x, y = (i % 3) * cw, 50 + (i // 3) * ch
        S.alpha_composite(fr, (x, y)); d.text((x + 14, y + 4), labels[i], fill=(40, 30, 24), font=f2)
        fr.save(os.path.join(OUT, f'{name}_t{i + 1}.png'))
    S.convert('RGB').save(os.path.join(OUT, f'{name}.png'))
