# Generates the Can Tosser sprite sheets (Aseprite-style PNG + JSON) for the base look and every path-A (重罐点名) tier:
#   tower.dart, tower.dart.A1 … A6   (idle + fire, release frame, pivot + muzzle slices)
#   shot.dart,  shot.dart.A3 … A6    (fly + hit; A1/A2 throw the plain can, so the game falls back to shot.dart)
# and art/can-tosser/sizes.json with the in-game width of every sheet (tools/cfg_build.py reads it).
# Run:  python3 gen_can_anim.py [out_dir]   (default: art/).   Needs Pillow + numpy.
import sys, json, math, os
import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageOps
import rig
import tiers as T
import variants as V

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(HERE, '..')
ONLY = os.environ.get('ONLY')                 # e.g. ONLY=tower.dart.A6 to regenerate one sheet

# Motion (native = facing left; every frame is mirrored for the game, which wants sprites facing right).
# IDLE : (arm_deg, can_dy, base_sy)
IDLE = [(-42.0, 0, 1.000), (-43.2, -1, 1.004), (-42.0, 0, 1.000), (-40.8, 1, 0.996)]
# FIRE : ms, arm_deg, base_dx, base_sx, base_sy, ammo_in_cup, ammo_slide, smear_from_deg, cord_wobble
FIRE = [
  (45,  -33,  0, 1.006, 0.994, True,   0, None, 0.0),    # pull back, cords stretch
  (45,  -26,  1, 1.012, 0.986, True,   0, None, 0.0),
  (55,  -25,  2, 1.016, 0.980, True,   0, None, 0.0),    # fully drawn
  (30,  -26,  2, 1.014, 0.982, True,   0, None, 0.0),    # hold
  (30,  -58, -3, 0.985, 1.030, False,  0, -30, 0.4),     # RELEASE: cords snap the arm, ammo leaves along the mouth
  (35,  -86, -5, 0.980, 1.034, False,  0, -58, 0.7),
  (40,  -97, -3, 0.992, 1.012, False,  0, None, 1.0),    # overshoot, cords slack and rippling
  (40,  -84,  0, 1.000, 1.000, False,  0, None, -0.7),
  (45,  -64,  0, 1.000, 1.000, True, 215, None, 0.5),    # next round rises into the cup
  (45,  -50,  0, 1.000, 1.000, True,  75, None, -0.25),
  (50,  -42,  0, 1.000, 1.000, True,   0, None, 0.0),
]
RELEASE = 4
DOWN = 0.5                        # sheets are stored at half the render resolution (still ~4x the in-game size on a 2x screen)
GAME_W_PER_PX = 46 / 365          # in-game units per sheet pixel (the base tower is 46 wide for a 365 px frame)
SHOT_W_PER_PX = 13 / 120          # same for projectiles (base shot: 13 wide for a 120 px frame)

VARIANTS = [  # sheet key, upgrade levels, shot key (None = uses shot.dart)
    ('tower.dart',    (0, 0, 0), 'shot.dart'),
    ('tower.dart.A1', (1, 0, 0), None),
    ('tower.dart.A2', (2, 0, 0), None),
    ('tower.dart.A3', (3, 0, 0), 'shot.dart.A3'),
    ('tower.dart.A4', (4, 0, 0), 'shot.dart.A4'),
    ('tower.dart.A5', (5, 0, 0), 'shot.dart.A5'),
    ('tower.dart.A6', (6, 0, 0), 'shot.dart.A6'),
]

def smear(a0, a1):
    def f(cv):
        hole = (rig.BASE_PIVOT_HOLE[0], rig.BASE_PIVOT_HOLE[1] + V.HOLE_DY)
        K = rig.K; k = rig.ARM_SC / 0.74
        cx, cy = (hole[0] - rig.WX0) * K, (hole[1] - rig.WY0) * K
        lay = Image.new('RGBA', cv.size, (0, 0, 0, 0)); ld = ImageDraw.Draw(lay)
        r0, r1 = 200 * K * k, 410 * K * k
        n = 12
        for i in range(n):
            t0, t1 = i / n, (i + 1) / n
            A0 = math.radians(a0 + (a1 - a0) * t0); A1 = math.radians(a0 + (a1 - a0) * t1)
            pts = [(cx + r1 * math.cos(A0), cy + r1 * math.sin(A0)), (cx + r1 * math.cos(A1), cy + r1 * math.sin(A1)),
                   (cx + r0 * math.cos(A1), cy + r0 * math.sin(A1)), (cx + r0 * math.cos(A0), cy + r0 * math.sin(A0))]
            ld.polygon(pts, fill=(255, 250, 225, int(10 + 120 * t1 ** 2)))
        cv.alpha_composite(lay.filter(ImageFilter.GaussianBlur(7 * K)))
    return f

def build_tower(key, levels):
    T.set_window(-660, -120, 860)                   # generous window, cropped to the union of all frames below
    v = T.Variant(levels)
    raw, durs, muz, tags = [], [], [], []
    try:
        for arm, cdy, sy in IDLE:
            fr, info = v.pose(arm, base_sy=sy, can_dy=cdy); raw.append(fr); durs.append(170); muz.append(info['muzzle']); tags.append('idle')
        for ms, arm, dx, sx, sy, can, sl, sm, wb in FIRE:
            fr, info = v.pose(arm, can=can, slide=sl, wobble=wb, base_dx=dx, base_sx=sx, base_sy=sy, smear=smear(sm, arm) if sm is not None else None)
            raw.append(fr); durs.append(ms); muz.append(info['muzzle']); tags.append('fire')
        foot = rig.to_px(rig.BASE_FOOT)
        item_img, item_anchor, can_sc = v.item_img, v.item_anchor, rig.CAN_SC
    finally:
        v.close()
    bb = [f.getbbox() for f in raw]
    x0 = min(b[0] for b in bb) - 4; y0 = min(b[1] for b in bb) - 4; x1 = max(b[2] for b in bb) + 4; y1 = max(b[3] for b in bb) + 2
    x0 -= (x0 % 2); FW, FH = x1 - x0, y1 - y0
    frames = [ImageOps.mirror(f.crop((x0, y0, x1, y1))) for f in raw]      # native left-facing -> game's right-facing
    mz = [(FW - (m[0] - x0), m[1] - y0) for m in muz]
    pv = (FW - (foot[0] - x0), foot[1] - y0)
    gw, gh = FW * GAME_W_PER_PX, FH * GAME_W_PER_PX
    fw2, fh2 = round(FW * DOWN), round(FH * DOWN); kx, ky = fw2 / FW, fh2 / FH
    frames = [f.resize((fw2, fh2), Image.LANCZOS) for f in frames]
    mz = [(m[0] * kx, m[1] * ky) for m in mz]; pv = (pv[0] * kx, pv[1] * ky); FW, FH = fw2, fh2
    COLS = 5; rows = math.ceil(len(frames) / COLS)
    sheet = Image.new('RGBA', (COLS * FW, rows * FH), (0, 0, 0, 0)); jf = []
    for i, fr in enumerate(frames):
        x, y = (i % COLS) * FW, (i // COLS) * FH; sheet.paste(fr, (x, y))
        jf.append({'filename': f'{key} {i}.aseprite', 'frame': {'x': x, 'y': y, 'w': FW, 'h': FH}, 'rotated': False, 'trimmed': False,
                   'spriteSourceSize': {'x': 0, 'y': 0, 'w': FW, 'h': FH}, 'sourceSize': {'w': FW, 'h': FH}, 'duration': durs[i]})
    n_idle = len(IDLE)
    meta = {'app': 'gen_can_anim.py', 'version': '2', 'image': f'{key}.png', 'format': 'RGBA8888', 'size': {'w': sheet.width, 'h': sheet.height}, 'scale': '1',
            'frameTags': [{'name': 'idle', 'from': 0, 'to': n_idle - 1, 'direction': 'forward'},
                          {'name': 'fire', 'from': n_idle, 'to': len(frames) - 1, 'direction': 'forward'},
                          {'name': 'release', 'from': n_idle + RELEASE, 'to': n_idle + RELEASE, 'direction': 'forward'}],
            'slices': [{'name': 'pivot', 'color': '#0000ffff', 'keys': [{'frame': 0, 'bounds': {'x': round(pv[0]) - 4, 'y': round(pv[1]) - 4, 'w': 8, 'h': 8}}]},
                       {'name': 'muzzle', 'color': '#ff0000ff', 'keys': [{'frame': i, 'bounds': {'x': round(m[0]) - 4, 'y': round(m[1]) - 4, 'w': 8, 'h': 8}} for i, m in enumerate(mz)]}]}
    sheet.save(os.path.join(OUT, f'{key}.png'), optimize=True)
    json.dump({'frames': jf, 'meta': meta}, open(os.path.join(OUT, f'{key}.json'), 'w'), indent=1)
    return dict(w=round(gw, 1), h=round(gh, 1), frame=[FW, FH]), (item_img, item_anchor, can_sc), frames

# ---------------- projectiles ----------------
INK = (43, 30, 24)
def star(size, r_out, r_in, pts, col, ink, alpha=1.0, rot=0):
    S4 = 4
    c = Image.new('RGBA', (size * S4, size * S4), (0, 0, 0, 0)); d = ImageDraw.Draw(c)
    cx = cy = size * S4 / 2
    for k, sc, fill in ((0, 1.0, ink), (1, .82, col)):
        P_ = []
        for i in range(pts * 2):
            r = (r_out if i % 2 == 0 else r_in) * S4 * sc; a = math.radians(rot) + math.pi * i / pts
            P_.append((cx + r * math.cos(a), cy + r * math.sin(a)))
        d.polygon(P_, fill=fill + (int(255 * alpha),))
    return c.resize((size, size), Image.LANCZOS)

def flame_trail(size, length, width):
    """fire streaming out behind (to -x of) a burning projectile at the canvas centre"""
    S4 = 3; c = Image.new('RGBA', (size * S4, size * S4), (0, 0, 0, 0)); d = ImageDraw.Draw(c); cx = cy = size * S4 / 2
    for col, k in (((255, 110, 30, 230), 1.0), ((255, 214, 84, 255), .6)):
        L, W = length * k * S4, width * k * S4
        pts = [(cx - L * t, cy + W * (1 - t) ** 1.2 * math.sin(math.pi * min(1, .25 + t * 1.5))) for t in np.linspace(0, 1, 16)]
        pts += [(cx - L * t, cy - W * (1 - t) ** 1.2 * math.sin(math.pi * min(1, .25 + t * 1.5))) for t in np.linspace(1, 0, 16)]
        d.polygon(pts, fill=col)
    return c.resize((size, size), Image.LANCZOS).filter(ImageFilter.GaussianBlur(.6))

def build_shot(key, item_img, item_anchor, can_sc, burning=False):
    sc = can_sc * rig.S * GAME_W_PER_PX / SHOT_W_PER_PX
    it = item_img.resize((max(1, round(item_img.width * sc)), max(1, round(item_img.height * sc))), Image.LANCZOS).rotate(-90, expand=True, resample=Image.BICUBIC)
    SW = max(120, int(math.ceil(max(it.size) * (2.1 if burning else 1.35) / 2)) * 2)
    def on_canvas(img, rot=0, sx=1, sy=1, alpha=1.0):
        c = Image.new('RGBA', (SW, SW), (0, 0, 0, 0))
        im = img.resize((max(1, round(img.width * sx)), max(1, round(img.height * sy))), Image.LANCZOS).rotate(rot, expand=True, resample=Image.BICUBIC)
        if alpha < 1:
            a = np.array(im); a[..., 3] = (a[..., 3] * alpha).astype(np.uint8); im = Image.fromarray(a)
        c.alpha_composite(im, (round(SW / 2 - im.width / 2), round(SW / 2 - im.height / 2)))
        return c
    frames, durs = [], []
    for i, rot in enumerate((0, 2, 0, -2)):
        f = Image.new('RGBA', (SW, SW), (0, 0, 0, 0))
        if burning: f.alpha_composite(flame_trail(SW, SW * (.46 + .04 * (i % 2)), it.size[1] * (.42 + .05 * ((i + 1) % 2))))
        f.alpha_composite(on_canvas(it, rot)); frames.append(f); durs.append(90)
    k = SW / 120
    for r, al, sx, sy, ca in [(24, 1.0, 1.0, 1.0, 1.0), (40, 1.0, 1.15, .75, 1.0), (50, .85, 1.3, .55, .9), (54, .55, 1.4, .45, .55), (56, .25, 1.45, .4, .25)]:
        base = star(SW, r * k, r * k * .55, 9, (255, 226, 110) if not burning else (255, 150, 50), INK, al, rot=12)
        base.alpha_composite(on_canvas(it, 20, sx, sy, ca)); frames.append(base); durs.append(55)
    gw = SW * SHOT_W_PER_PX; SW = round(SW * DOWN); frames = [f.resize((SW, SW), Image.LANCZOS) for f in frames]
    sheet = Image.new('RGBA', (len(frames) * SW, SW), (0, 0, 0, 0)); jf = []
    for i, f in enumerate(frames):
        sheet.paste(f, (i * SW, 0))
        jf.append({'filename': f'{key} {i}.aseprite', 'frame': {'x': i * SW, 'y': 0, 'w': SW, 'h': SW}, 'rotated': False, 'trimmed': False,
                   'spriteSourceSize': {'x': 0, 'y': 0, 'w': SW, 'h': SW}, 'sourceSize': {'w': SW, 'h': SW}, 'duration': durs[i]})
    meta = {'app': 'gen_can_anim.py', 'version': '2', 'image': f'{key}.png', 'format': 'RGBA8888', 'size': {'w': sheet.width, 'h': sheet.height}, 'scale': '1',
            'frameTags': [{'name': 'fly', 'from': 0, 'to': 3, 'direction': 'forward'}, {'name': 'hit', 'from': 4, 'to': 8, 'direction': 'forward'}],
            'slices': [{'name': 'pivot', 'color': '#0000ffff', 'keys': [{'frame': 0, 'bounds': {'x': SW // 2 - 4, 'y': SW // 2 - 4, 'w': 8, 'h': 8}}]}]}
    sheet.save(os.path.join(OUT, f'{key}.png'), optimize=True)
    json.dump({'frames': jf, 'meta': meta}, open(os.path.join(OUT, f'{key}.json'), 'w'), indent=1)
    return dict(w=round(gw, 1), h=round(gw, 1), frame=[SW, SW]), frames

if __name__ == '__main__':
    os.makedirs(OUT, exist_ok=True)
    sizes_path = os.path.join(HERE, 'sizes.json')
    sizes = json.load(open(sizes_path)) if os.path.exists(sizes_path) else {}
    contact = []
    for key, levels, skey in VARIANTS:
        if ONLY and ONLY not in (key, skey): continue
        sz, (img, anchor, csc), frames = build_tower(key, levels); sizes[key] = sz; contact.append(frames)
        if skey:
            ssz, sframes = build_shot(skey, img, anchor, csc, burning=(levels[0] == 6)); sizes[skey] = ssz
        print(key, sz, skey, sizes.get(skey))
    json.dump(sizes, open(sizes_path, 'w'), indent=1)
    if os.environ.get('CONTACT'):
        H = max(f[0].height for f in contact); W = max(f[0].width for f in contact)
        cs = Image.new('RGBA', (W * 8, H * len(contact)), (236, 228, 210, 255))
        for r, fr in enumerate(contact):
            for c, i in enumerate((0, 4, 6, 8, 9, 11, 12, 14)): cs.alpha_composite(fr[i], (c * W, r * H + H - fr[i].height))
        cs.convert('RGB').save(os.path.join(HERE, '_contact.png'))
