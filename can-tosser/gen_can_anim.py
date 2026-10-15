# Generates tower.dart.png/.json and shot.dart.png/.json (Aseprite-style sheet + JSON) for the Can Tosser
# from the four hand-painted parts in ./parts.  Run:  python3 gen_can_anim.py [out_dir]   (default: ../, i.e. art/)
# Needs Pillow + numpy.  Tweak the FIRE / IDLE tables below to change the motion, then re-run and rebuild.
import sys, json, math, os
import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageOps
import rig
from rig import FW, FH

OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')

# Motion.  The machine is built facing LEFT (rig.py) and every frame is mirrored at the end, because the game wants sprites
# that face RIGHT.  Angles are native (screen degrees, clockwise positive).  Sequence = the reference GIF:
#   pull the arm back (cords stretch, thin and taut) -> release: the cords snap the arm forward and the standing can leaves
#   along the scoop's mouth -> arm overshoots, cords go slack and ripple -> returns, a new can rises into the cup.
# IDLE : (arm_deg, can_dy, base_sy)
IDLE = [(-42.0, 0, 1.000), (-43.2, -1, 1.004), (-42.0, 0, 1.000), (-40.8, 1, 0.996)]
# FIRE : ms, arm_deg, base_dx, base_sx, base_sy, can_in_cup, can_slide, smear_from_deg, cord_wobble
FIRE = [
  (45,  -33,  0, 1.006, 0.994, True,   0, None, 0.0),    # pull back, cords stretch
  (45,  -26,  1, 1.012, 0.986, True,   0, None, 0.0),
  (55,  -25,  2, 1.016, 0.980, True,   0, None, 0.0),    # fully drawn, cords taut and thin
  (30,  -26,  2, 1.014, 0.982, True,   0, None, 0.0),    # hold
  (30,  -58, -3, 0.985, 1.030, False,  0, -30, 0.4),     # RELEASE: cords snap the arm, can leaves along the mouth
  (35,  -86, -5, 0.980, 1.034, False,  0, -58, 0.7),
  (40,  -97, -3, 0.992, 1.012, False,  0, None, 1.0),    # overshoot, cords slack and rippling
  (40,  -84,  0, 1.000, 1.000, False,  0, None, -0.7),
  (45,  -64,  0, 1.000, 1.000, True, 215, None, 0.5),    # new can rises into the cup at constant size
  (45,  -50,  0, 1.000, 1.000, True,  75, None, -0.25),
  (50,  -42,  0, 1.000, 1.000, True,   0, None, 0.0),
]
RELEASE = 4

def smear(a0, a1):
    def f(cv):
        hole = rig.world_of(rig.BASE_PIVOT_HOLE, rig.BASE_FOOT, rig.BASE_FOOT, 0, 1)
        K = rig.K
        cx, cy = (hole[0] - rig.WX0) * K, (hole[1] - rig.WY0) * K
        lay = Image.new('RGBA', cv.size, (0, 0, 0, 0)); ld = ImageDraw.Draw(lay)
        r0, r1 = 200 * K, 410 * K
        n = 12
        for i in range(n):   # trailing wedge: faint at the start angle, stronger at the arm
            t0, t1 = i / n, (i + 1) / n
            A0 = math.radians(a0 + (a1 - a0) * t0); A1 = math.radians(a0 + (a1 - a0) * t1)
            pts = [(cx + r1 * math.cos(A0), cy + r1 * math.sin(A0)), (cx + r1 * math.cos(A1), cy + r1 * math.sin(A1)),
                   (cx + r0 * math.cos(A1), cy + r0 * math.sin(A1)), (cx + r0 * math.cos(A0), cy + r0 * math.sin(A0))]
            ld.polygon(pts, fill=(255, 250, 225, int(10 + 120 * t1 ** 2)))
        lay = lay.filter(ImageFilter.GaussianBlur(7 * K))
        cv.alpha_composite(lay)
    return f

def pose(arm, dx=0, sx=1, sy=1, can=True, slide=0, sm=None, can_dy=0, wob=0.0):
    ex = smear(sm, arm) if sm is not None else None
    fr, info = rig.render(arm_deg=arm, base_dx=dx, base_sx=sx, base_sy=sy, can=can, can_slide=slide, can_dy=can_dy, extra=ex, wobble=wob)
    fr = ImageOps.mirror(fr)                                   # native left-facing -> game's right-facing
    mz = (FW - info['muzzle'][0], info['muzzle'][1])
    return fr, mz

frames, durs, muz, names = [], [], [], []
for arm, cdy, sy in IDLE:
    fr, mz = pose(arm, sy=sy, can_dy=cdy); frames.append(fr); durs.append(170); muz.append(mz); names.append('idle')
for ms, arm, dx, sx, sy, can, sl, sm, wb in FIRE:
    fr, mz = pose(arm, dx, sx, sy, can, sl, sm, wob=wb); frames.append(fr); durs.append(ms); muz.append(mz); names.append('fire')
ft = rig.to_px(rig.BASE_FOOT)
foot = (FW - ft[0], ft[1])

# ---- sheet (grid) ----
COLS = 5
rows = math.ceil(len(frames) / COLS)
sheet = Image.new('RGBA', (COLS * FW, rows * FH), (0, 0, 0, 0))
jf = []
for i, fr in enumerate(frames):
    x, y = (i % COLS) * FW, (i // COLS) * FH
    sheet.paste(fr, (x, y))
    jf.append({'filename': f'tower.dart {i}.aseprite', 'frame': {'x': x, 'y': y, 'w': FW, 'h': FH}, 'rotated': False, 'trimmed': False,
               'spriteSourceSize': {'x': 0, 'y': 0, 'w': FW, 'h': FH}, 'sourceSize': {'w': FW, 'h': FH}, 'duration': durs[i]})
n_idle = len(IDLE)
meta = {'app': 'gen_can_anim.py', 'version': '1', 'image': 'tower.dart.png', 'format': 'RGBA8888', 'size': {'w': sheet.width, 'h': sheet.height}, 'scale': '1',
        'frameTags': [{'name': 'idle', 'from': 0, 'to': n_idle - 1, 'direction': 'forward'},
                      {'name': 'fire', 'from': n_idle, 'to': len(frames) - 1, 'direction': 'forward'},
                      {'name': 'release', 'from': n_idle + RELEASE, 'to': n_idle + RELEASE, 'direction': 'forward'}],
        'slices': [{'name': 'pivot', 'color': '#0000ffff', 'keys': [{'frame': 0, 'bounds': {'x': round(foot[0]) - 4, 'y': round(foot[1]) - 4, 'w': 8, 'h': 8}}]},
                   {'name': 'muzzle', 'color': '#ff0000ff', 'keys': [{'frame': i, 'bounds': {'x': round(m[0]) - 4, 'y': round(m[1]) - 4, 'w': 8, 'h': 8}} for i, m in enumerate(muz)]}]}
os.makedirs(OUT, exist_ok=True)
sheet.save(os.path.join(OUT, 'tower.dart.png'), optimize=True)
json.dump({'frames': jf, 'meta': meta}, open(os.path.join(OUT, 'tower.dart.json'), 'w'), indent=1)

# ---- shot: flying can + hit splat ----
SW = 120
can = rig.P['can']
# Same on-screen size as the can sitting in the cup: the tower sheet is drawn at 46/365 px per px, this sheet at 13/SW.
FLY_K = (46 / FW) / (13 / SW)
FLY_SQUASH = 1.0   # a can is taller than wide; only a hint of the cartoon squash so it never looks flattened in flight
cs = rig.CAN_SC * rig.S * FLY_K
can_s = can.resize((round(can.width * cs), round(can.height * cs * FLY_SQUASH)), Image.LANCZOS).rotate(-90, expand=True, resample=Image.BICUBIC)  # lid points right (+x)

def on_canvas(img, rot=0, sx=1, sy=1, alpha=1.0, dx=0, dy=0, size=SW):
    c = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    im = img.resize((max(1, round(img.width * sx)), max(1, round(img.height * sy))), Image.LANCZOS).rotate(rot, expand=True, resample=Image.BICUBIC)
    if alpha < 1:
        a = np.array(im); a[..., 3] = (a[..., 3] * alpha).astype(np.uint8); im = Image.fromarray(a)
    c.alpha_composite(im, (round(size / 2 - im.width / 2 + dx), round(size / 2 - im.height / 2 + dy)))
    return c

def star(size, r_out, r_in, pts, col, ink, alpha=1.0, rot=0):
    S4 = 4
    c = Image.new('RGBA', (size * S4, size * S4), (0, 0, 0, 0)); d = ImageDraw.Draw(c)
    cx = cy = size * S4 / 2
    P_ = []
    for i in range(pts * 2):
        r = (r_out if i % 2 == 0 else r_in) * S4; a = math.radians(rot) + math.pi * i / pts
        P_.append((cx + r * math.cos(a), cy + r * math.sin(a)))
    d.polygon(P_, fill=ink + (int(255 * alpha),))
    P2 = []
    for i in range(pts * 2):
        r = (r_out if i % 2 == 0 else r_in) * S4 * 0.82; a = math.radians(rot) + math.pi * i / pts
        P2.append((cx + r * math.cos(a), cy + r * math.sin(a)))
    d.polygon(P2, fill=col + (int(255 * alpha),))
    return c.resize((size, size), Image.LANCZOS)

INK = (43, 30, 24)
shot_frames, shot_dur, shot_tag = [], [], []
for rot, sx, sy in [(0, 1, 1), (2, 1, 1), (0, 1, 1), (-2, 1, 1)]:
    shot_frames.append(on_canvas(can_s, rot, sx, sy)); shot_dur.append(90); shot_tag.append('fly')
hit = [  # (star r_out, alpha, can sx, sy, can alpha)
    (24, 1.0, 1.0, 1.0, 1.0), (40, 1.0, 1.15, .75, 1.0), (50, .85, 1.3, .55, .9), (54, .55, 1.4, .45, .55), (56, .25, 1.45, .4, .25)]
for r, al, sx, sy, ca in hit:
    base = star(SW, r, r * .55, 9, (255, 226, 110), INK, al, rot=12)
    base.alpha_composite(on_canvas(can_s, 20, sx, sy, ca))
    shot_frames.append(base); shot_dur.append(55); shot_tag.append('hit')
sheet2 = Image.new('RGBA', (len(shot_frames) * SW, SW), (0, 0, 0, 0)); jf2 = []
for i, f in enumerate(shot_frames):
    sheet2.paste(f, (i * SW, 0))
    jf2.append({'filename': f'shot.dart {i}.aseprite', 'frame': {'x': i * SW, 'y': 0, 'w': SW, 'h': SW}, 'rotated': False, 'trimmed': False,
                'spriteSourceSize': {'x': 0, 'y': 0, 'w': SW, 'h': SW}, 'sourceSize': {'w': SW, 'h': SW}, 'duration': shot_dur[i]})
meta2 = {'app': 'gen_can_anim.py', 'version': '1', 'image': 'shot.dart.png', 'format': 'RGBA8888', 'size': {'w': sheet2.width, 'h': sheet2.height}, 'scale': '1',
         'frameTags': [{'name': 'fly', 'from': 0, 'to': 3, 'direction': 'forward'}, {'name': 'hit', 'from': 4, 'to': 8, 'direction': 'forward'}],
         'slices': [{'name': 'pivot', 'color': '#0000ffff', 'keys': [{'frame': 0, 'bounds': {'x': SW // 2 - 4, 'y': SW // 2 - 4, 'w': 8, 'h': 8}}]}]}
sheet2.save(os.path.join(OUT, 'shot.dart.png'), optimize=True)
json.dump({'frames': jf2, 'meta': meta2}, open(os.path.join(OUT, 'shot.dart.json'), 'w'), indent=1)

# ---- contact sheet for review ----
cs_ = Image.new('RGBA', (COLS * FW, rows * FH + SW + 10), (236, 228, 210, 255)); cs_.alpha_composite(sheet, (0, 0)); cs_.alpha_composite(sheet2, (0, rows * FH + 5))
if os.environ.get('CONTACT'): cs_.convert('RGB').save(os.path.join(OUT, '_contact.png'))
print('frames', len(frames), 'frame size', FW, FH, 'pivot', foot, 'sheet', sheet.size, 'sizes KB', os.path.getsize(os.path.join(OUT, 'tower.dart.png')) // 1024, os.path.getsize(os.path.join(OUT, 'shot.dart.png')) // 1024)
