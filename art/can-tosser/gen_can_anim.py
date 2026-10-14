# Generates tower.dart.png/.json and shot.dart.png/.json (Aseprite-style sheet + JSON) for the Can Tosser
# from the four hand-painted parts in ./parts.  Run:  python3 gen_can_anim.py [out_dir]   (default: ../, i.e. art/)
# Needs Pillow + numpy.  Tweak the FIRE / IDLE tables below to change the motion, then re-run and rebuild.
import sys, json, math, os
import numpy as np
from PIL import Image, ImageDraw, ImageFilter
import rig
from rig import FW, FH

OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')

# (name, ms, arm_deg, base_dx, base_sx, base_sy, can_in_scoop, can_scale, can_dy, smear_from)
IDLE = [(-40.0, 0, 1.000), (-41.4, -2, 1.004), (-40.0, 0, 1.000), (-38.6, 1, 0.996)]
FIRE = [
  # ms,  arm,  dx,  sx,   sy,   can, can_sc, smear_from
  (40,  -28,   0, 1.010, 0.985, True, 1.0, None),    # tiny pull-back
  (45,   -8,   3, 1.030, 0.960, True, 1.0, None),    # crouch / wind-up
  (35,  -50,  -6, 0.990, 1.020, True, 1.0, -8),      # snap
  (35,  -76, -11, 0.975, 1.045, False, 1.0, -50),    # RELEASE: can leaves the scoop
  (45,  -97,  -7, 0.990, 1.015, False, 1.0, -76),    # overshoot
  (55,  -78,  -3, 1.000, 0.995, False, 1.0, None),
  (60,  -50,   0, 1.000, 1.000, False, 1.0, None),
  (60,  -33,   0, 1.000, 1.000, True, 0.55, None),   # next can pops in
  (55,  -44,   0, 1.000, 1.000, True, 1.12, None),
  (45,  -40,   0, 1.000, 1.000, True, 1.0, None),
]
RELEASE = 3

def smear(a0, a1):
    def f(cv):
        hole = rig.world_of(rig.BASE_PIVOT_HOLE, rig.BASE_FOOT, rig.BASE_FOOT, 0, 1)
        K = rig.K
        cx, cy = (hole[0] - rig.WX0) * K, (hole[1] - rig.WY0) * K
        lay = Image.new('RGBA', cv.size, (0, 0, 0, 0)); ld = ImageDraw.Draw(lay)
        r0, r1 = 200 * K, 410 * K
        n = 12
        for i in range(n):   # trailing wedge: faint at the start angle, stronger near the scoop
            t0, t1 = i / n, (i + 1) / n
            A0 = math.radians(a0 + (a1 - a0) * t0); A1 = math.radians(a0 + (a1 - a0) * t1)
            pts = [(cx + r1 * math.cos(A0), cy + r1 * math.sin(A0)), (cx + r1 * math.cos(A1), cy + r1 * math.sin(A1)),
                   (cx + r0 * math.cos(A1), cy + r0 * math.sin(A1)), (cx + r0 * math.cos(A0), cy + r0 * math.sin(A0))]
            ld.polygon(pts, fill=(255, 250, 225, int(10 + 120 * t1 ** 2)))
        lay = lay.filter(ImageFilter.GaussianBlur(7 * K))
        cv.alpha_composite(lay)
    return f

def pose(arm, dx=0, sx=1, sy=1, can=True, can_sc=1.0, sm=None, can_dy=0):
    ex = smear(sm, arm) if sm is not None else None
    return rig.render(arm_deg=arm, base_dx=dx, base_sx=sx, base_sy=sy, can=can, can_sc=can_sc, can_dy=can_dy, extra=ex)

frames, durs, muz, names = [], [], [], []
for arm, cdy, sy in IDLE:
    fr, info = pose(arm, sy=sy, can_dy=cdy); frames.append(fr); durs.append(170); muz.append(info['scoop']); names.append('idle')
for ms, arm, dx, sx, sy, can, csc, sm in FIRE:
    fr, info = pose(arm, dx, sx, sy, can, csc, sm); frames.append(fr); durs.append(ms); muz.append(info['scoop']); names.append('fire')
foot = info['foot']  # fixed ground point (unsquashed foot)
foot = rig.to_px(rig.BASE_FOOT)

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
cs = rig.CAN_SC * rig.S  # same px scale as in the tower frames
can_s = can.resize((round(can.width * cs), round(can.height * cs)), Image.LANCZOS).rotate(-90, expand=True, resample=Image.BICUBIC)  # lid points right (+x)

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
for rot, sx, sy in [(0, 1, 1), (5, .98, 1.03), (0, 1, 1), (-5, .98, 1.03)]:
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
