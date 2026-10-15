# Can Tosser appearance system.   look = BODY (the path that reached tier 3+, else the plain base)  +  MODULES (tier 1-2 of the other paths).
# compose((a, b, c)) renders any legal upgrade combination, e.g. (2, 5, 0) = path-2 tier-5 body + path-1 tier-2 module.
# Sockets (native left-facing world coords; the sprite is mirrored at the end):  S1 crate top (545,150) | S2 left pillar (55,285) | S3 post top (140,-10)
import math, os, sys
import numpy as np
from PIL import Image, ImageDraw, ImageFont, ImageOps
import rig, variants as V
from variants import *

def at_arm(arm):  return arm_frame(arm, rig.ARM_SC)
def P(c, ax, up, a, u): return (c[0] + ax[0] * a + up[0] * u, c[1] + ax[1] * a + up[1] * u)
GREY = (205, 212, 222, 255); STEEL = (150, 158, 172, 255); RED = (225, 55, 45, 255); CREAM = (247, 240, 222, 255); GOLD = (255, 205, 70, 255); ORANGE = (255, 150, 40, 255)

def rivet(pen, p, r=4.5): pen.ell(p, r, r, GREY, 1.6); pen.ell((p[0] - r * .3, p[1] - r * .3), r * .3, r * .3, (255, 255, 255, 220), 0)

# ================= MODULES (tier 1-2 of a path that is NOT the body) =================
def mod1_1(pen, arm):   # soda booster: green bottle with fizz, strapped to the left pillar
    pen.poly([(38, 330), (74, 330), (74, 262), (64, 250), (64, 232), (48, 232), (48, 250), (38, 262)], (70, 175, 110, 255), 3)
    pen.poly([(44, 300), (68, 300), (68, 266), (44, 266)], CREAM, 0); pen.ell((56, 283), 6, 6, RED, 1.6)
    pen.poly([(46, 230), (66, 230), (66, 222), (46, 222)], GOLD, 2.4)
    for dx, dy, r in [(-4, -14, 5), (8, -28, 4), (-2, -40, 3.2)]: pen.ell((56 + dx, 222 + dy), r, r, (230, 248, 255, 220), 1.4)
def mod1_2(pen, arm):   # + steel plate shield
    mod1_1(pen, arm)
    pen.poly([(78, 338), (118, 338), (118, 252), (78, 252)], STEEL, 3); pen.poly([(78, 252), (98, 252), (98, 338), (78, 338)], GREY, 0)
    for y in (264, 326): rivet(pen, (108, y), 4)
def mod2_1(pen, arm):   # stopwatch on the crate top
    c = (545, 148); pen.ell(c, 30, 30, GREY, 3.4); pen.ell(c, 22, 22, CREAM, 2)
    pen.poly([(538, 112), (552, 112), (552, 106), (538, 106)], GREY, 2)
    for i in range(12):
        a = math.radians(i * 30); pen.d.line([px((c[0] + 17 * math.cos(a), c[1] + 17 * math.sin(a))), px((c[0] + 21 * math.cos(a), c[1] + 21 * math.sin(a)))], fill=INK, width=round(1.4 * K))
    pen.line(c, (c[0] + 4, c[1] - 17), RED, 2.6, 1.2); pen.ell(c, 3.4, 3.4, INK, 0)
def mod2_2(pen, arm):   # + combo plate with stacked chevrons
    mod2_1(pen, arm)
    pen.poly([(488, 176), (584, 176), (584, 206), (488, 206)], (40, 40, 52, 255), 3)
    for i in range(3): pen.poly([(498 + i * 22, 182), (512 + i * 22, 191), (498 + i * 22, 200), (503 + i * 22, 191)], ORANGE, 1.4)
    pen.poly([(558, 183), (578, 183), (578, 199), (558, 199)], GOLD, 0)
def mod3_1(pen, arm):   # pennant on a pole at the post's top
    pen.line((140, 48), (140, -62), (90, 60, 40, 255), 5, 2); pen.ell((140, -66), 6, 6, GOLD, 2)
    pen.poly([(143, -58), (208, -44), (143, -28)], RED, 3)
def mod3_2(pen, arm):   # bigger flag with a crosshair
    pen.line((140, 48), (140, -90), (90, 60, 40, 255), 5, 2); pen.ell((140, -94), 6, 6, GOLD, 2)
    pen.poly([(143, -86), (232, -86), (232, -26), (143, -26)], RED, 3)
    c = (188, -56); pen.ell(c, 19, 19, CREAM, 2.2); pen.ell(c, 11, 11, RED, 2); pen.ell(c, 4, 4, CREAM, 0)
    pen.line((c[0] - 26, c[1]), (c[0] + 26, c[1]), CREAM, 2.2, 0); pen.line((c[0], c[1] - 26), (c[0], c[1] + 26), CREAM, 2.2, 0)
MODS = {(1, 1): mod1_1, (1, 2): mod1_2, (2, 1): mod2_1, (2, 2): mod2_2, (3, 1): mod3_1, (3, 2): mod3_2}

# ================= BODY decorations =================
def charge_ring(pen, arm):          # P1 T3: glowing pressure ring round the axle hub
    c = rig.BASE_PIVOT_HOLE; pen.glow(c, 120, ORANGE[:3], 170)
    for r, col in ((74, STEEL), (62, (255, 170, 60, 255))): pen.ell(c, r, r, col, 3)
    pen.ell(c, 56, 56, (0, 0, 0, 0), 0)
def plates(pen, arm):
    at, ax, up = at_arm(arm)
    for l in [(420, 118), (470, 120), (520, 108)]: rivet(pen, at(l), 5.5)
def spikes(pen, arm):               # P1 T4: drill cone + studs
    at, ax, up = at_arm(arm); c = at(rig.CAN_CENTER)
    tip = P(c, ax, up, 0, 215); l = P(c, ax, up, 46, 118); r = P(c, ax, up, -46, 118)
    pen.poly([l, tip, r], (160, 168, 182, 255), 3.4); pen.poly([l, tip, P(c, ax, up, 0, 118)], GREY, 0)
    for s in (-1, 1):
        for k in (-20, 30):
            p = P(c, ax, up, 58 * s, k); pen.poly([P(p, ax, up, 0, 9), P(p, ax, up, 18 * s, 0), P(p, ax, up, 0, -9)], (190, 196, 208, 255), 2.2)
    plates(pen, arm)
def scope_laser(pen, arm):          # P1 T5 & P3 T3: scope tube on the arm + laser dot
    at, ax, up = at_arm(arm); a = at((220, 50)); b = at((340, 50))
    pen.poly([P(a, ax, up, 0, 18), P(b, ax, up, 0, 18), P(b, ax, up, 0, -4), P(a, ax, up, 0, -4)], (60, 66, 80, 255), 3)
    pen.ell(P(b, ax, up, 6, 7), 12, 12, (80, 200, 255, 255), 3); pen.ell(P(b, ax, up, 4, 4), 4, 4, (255, 255, 255, 255), 0)
    e = P(b, ax, up, 12, 7); f = P(b, ax, up, 12 + 0, 7 + 0)
    t = (e[0] + up[0] * 0 + 0, e[1])
def laser(pen, arm):
    at, ax, up = at_arm(arm); b = at((340, 50)); u = up
    for i in range(1, 22):
        p = (b[0] + u[0] * (10 + i * 22), b[1] + u[1] * (10 + i * 22)); pen.ell(p, 2.4, 2.4, (255, 70, 60, 230), 0)
    p = (b[0] + u[0] * 520, b[1] + u[1] * 520); pen.ell(p, 11, 11, (255, 70, 60, 120), 0); pen.ell(p, 5, 5, (255, 90, 80, 255), 0)
def can_ring(pen, arm, n=1):        # P3: target ring painted on the can
    at, ax, up = at_arm(arm); c = at((rig.CAN_CENTER[0], rig.CAN_CENTER[1] - 6))
    for i, r in enumerate([26, 15][:n + 1]):
        pen.ell(c, r, r, (0, 0, 0, 0), 0)
        pen.d.ellipse((px(c)[0] - r * K, px(c)[1] - r * K, px(c)[0] + r * K, px(c)[1] + r * K), outline=CREAM, width=round(3.2 * K))
    pen.ell(c, 5, 5, CREAM, 0)
def whistle_gold(pen, arm):         # P1 T6
    for xx in (45, 560): pen.poly([(xx, 205), (xx + 38, 205), (xx + 38, 232), (xx, 232)], GOLD, 3)
    c = rig.BASE_PIVOT_HOLE; pen.ell(c, 14, 14, GOLD, 3)
def chute(pen, arm, cans=2):        # P2 T3+: feed chute from the crate to the scoop's side
    pen.poly([(330, 200), (470, 128), (500, 146), (360, 224)], (150, 112, 70, 255), 3)
    pen.poly([(330, 200), (470, 128), (474, 138), (336, 210)], (190, 150, 100, 255), 0)
    for i in range(cans):
        c = (385 + i * 50, 182 - i * 25); pen.poly([(c[0] - 14, c[1] - 14), (c[0] + 22, c[1] - 32), (c[0] + 30, c[1] - 14), (c[0] - 6, c[1] + 4)], RED, 2.6)
        pen.ell((c[0] + 26, c[1] - 23), 6, 9, GREY, 1.8, rot=-0.5)
def beat_bars(pen, arm, n=5):       # P2 T4+: rhythm LED bars on the front board
    for i in range(n):
        h = 12 + (i % 3) * 8; x = 215 + i * 18
        pen.poly([(x, 372), (x + 11, 372), (x + 11, 372 - h), (x, 372 - h)], ORANGE if i % 2 else GOLD, 2)
def second_arm_fx(deg):             # P2 T5/T6: a second arm on the same axle (drawn UNDER the main arm via rig's under hook)
    return deg
def storm(pen, arm):                # P2 T6: orbiting cans, speed arcs, heat glow
    c = rig.BASE_PIVOT_HOLE; pen.glow((c[0] + 160, c[1] - 130), 230, (255, 120, 30), 190)
    for i, ang in enumerate((-100, -40, 20)):
        r = 330; p = (c[0] + 120 + r * math.cos(math.radians(ang)) * .55, c[1] - 120 + r * math.sin(math.radians(ang)) * .6)
        pen.poly([(p[0] - 14, p[1] - 10), (p[0] + 18, p[1] - 22), (p[0] + 26, p[1] - 6), (p[0] - 6, p[1] + 8)], RED, 2.4)
    for k in range(3):
        pen.d.arc((px((c[0] - 60 + k * 14, c[1] - 330 + k * 18)) + px((c[0] + 380 - k * 14, c[1] + 40 - k * 18))), 200, 290, fill=(255, 235, 170, 200 - k * 50), width=round((7 - k * 2) * K))
def dish(pen, arm, big=False):      # P3 T4+: radar dish on the right pillar
    c = (570, 175); pen.poly([(558, 205), (582, 205), (576, 170), (564, 170)], STEEL, 2.6)
    pen.poly([(540, 150), (606, 150), (594, 178), (552, 178)], GREY, 3); pen.ell((573, 148), 33, 12, CREAM, 2.4)
    pen.line((573, 148), (573, 118), STEEL, 3.2, 1.6); pen.ell((573, 114), 6, 6, RED, 2)
def beacon(pen, arm, big=False):    # P3 T5/T6: signal beacon / command mast
    dish(pen, arm); pen.glow((573, 114), 90 if not big else 150, (255, 70, 60), 210)
    if big:
        pen.poly([(488, 200), (560, 200), (560, 120), (488, 120)], (40, 44, 58, 255), 3); pen.poly([(496, 128), (552, 128), (552, 170), (496, 170)], (60, 200, 230, 255), 2)
        pen.line((502, 160), (518, 142), CREAM, 2.4, 0); pen.line((518, 142), (532, 152), CREAM, 2.4, 0); pen.line((532, 152), (546, 134), CREAM, 2.4, 0)

# ================= BODIES: (teal tint, can tint, can scale, arm scale, fx list) =================
def can_p1(t): return {3: steel(BASE_CAN, (1.0, .62, .46), .04), 4: steel(BASE_CAN, (.62, .66, .78)), 5: steel(BASE_CAN, (.42, .46, .56)), 6: None}[t]
def stripes(img, bands=3):
    a = np.array(img); h = a.shape[0]
    for i in range(bands):
        y0 = int(h * (0.28 + i * 0.2)); y1 = y0 + int(h * 0.07); sel = a[y0:y1, :, 3] > 200; a[y0:y1][sel, :3] = (30, 30, 36)
    return Image.fromarray(a)
def gold_can(): return stripes(recolor(BASE_CAN, lambda rgb: hsv_shift(rgb, h=0.115, s=1.0, v=1.05)))
grey = lambda g, v=1.0: (lambda i: tint_teal(i, grey=g, v=v))
BODY = {
 (1, 3): dict(teal=grey((.78, .84, .95), 1.2), can_img=can_p1(3), can_sc=.58, fx=[charge_ring]),
 (1, 4): dict(teal=grey((.52, .56, .68)), can_img=can_p1(4), can_sc=.58, fx=[spikes]),
 (1, 5): dict(teal=grey((.36, .40, .50)), can_img=can_p1(5), can_sc=.55, fx=[scope_laser, laser, plates]),
 (1, 6): dict(teal=grey((1.0, .80, .38), 1.35), can_img=gold_can(), can_sc=.7, arm_sc=.82, fx=[whistle_gold, plates]),
 (2, 3): dict(teal=grey((1.0, .78, .52), 1.15), fx=[lambda p, a: chute(p, a, 2)]),
 (2, 4): dict(teal=grey((1.0, .70, .40), 1.15), fx=[lambda p, a: chute(p, a, 3), beat_bars]),
 (2, 5): dict(teal=grey((1.0, .62, .30), 1.15), fx=[lambda p, a: chute(p, a, 3), beat_bars], arm2=-8),
 (2, 6): dict(teal=grey((1.0, .50, .22), 1.2), fx=[storm, lambda p, a: chute(p, a, 3), beat_bars], arm2=-8),
 (3, 3): dict(teal=grey((.74, .60, .98), 1.1), fx=[scope_laser, laser, lambda p, a: can_ring(p, a, 0)]),
 (3, 4): dict(teal=grey((.68, .52, .98), 1.05), fx=[scope_laser, laser, lambda p, a: can_ring(p, a, 1), dish]),
 (3, 5): dict(teal=grey((.62, .42, .98), 1.05), fx=[scope_laser, laser, lambda p, a: can_ring(p, a, 1), beacon]),
 (3, 6): dict(teal=grey((.55, .36, .95), 1.0), can_sc=.5, fx=[scope_laser, laser, lambda p, a: can_ring(p, a, 1), lambda p, a: beacon(p, a, True)]),
}
PIPCOL = {3: (200, 205, 215), 4: (200, 205, 215), 5: GOLD[:3], 6: GOLD[:3]}

def compose(levels, arm=-34):
    """levels = (a, b, c): tier of path 1/2/3.  Legal combos only (<=2 paths; one body, the other <= 2)."""
    body_p = next((i + 1 for i, t in enumerate(levels) if t >= 3), None)
    spec = dict(BODY[(body_p, levels[body_p - 1])]) if body_p else {}
    fx = list(spec.get('fx', []))
    if not body_p:
        hi = max(range(3), key=lambda i: levels[i])
    for i, t in enumerate(levels):
        if t in (1, 2) and (body_p is None or i + 1 != body_p): fx.append(MODS[(i + 1, t)])
    def under(cv, hole_w, draw):
        if spec.get('arm2') is not None: draw(spec['arm2'], True, 0)
    rig.P['can'] = spec.get('can_img') or BASE_CAN
    for k in ('base', 'arm', 'cap'): rig.P[k] = spec['teal'](ORIG[k]) if 'teal' in spec else ORIG[k]
    rig.CAN_SC = spec.get('can_sc', BASE_CAN_SC); rig.ARM_SC = spec.get('arm_sc', BASE_ARM_SC); rig.REST_LEN = rig._rest_lengths()
    def extra(cv):
        pen = Pen(cv)
        for f in fx: f(pen, arm)
        if body_p:
            n = levels[body_p - 1]
            for i in range(n):
                x = 310 + (i - (n - 1) / 2) * 22; pen.ell((x, 366), 7.5, 7.5, PIPCOL[n] + (255,), 2.2); pen.ell((x - 2, 363.5), 2.4, 2.4, (255, 255, 255, 190), 0)
        pen.done()
    fr, info = rig.render(arm_deg=arm, can=True, extra=extra, under=under if spec.get('arm2') is not None else None)
    for k in ('base', 'arm', 'cap'): rig.P[k] = ORIG[k]
    rig.P['can'] = BASE_CAN; rig.CAN_SC = BASE_CAN_SC; rig.ARM_SC = BASE_ARM_SC; rig.REST_LEN = rig._rest_lengths()
    return ImageOps.mirror(fr)

def legal(levels):
    nz = [t for t in levels if t > 0]
    return len(nz) <= 2 and (max(levels) < 3 or sorted(levels)[1] <= 2)

FONT = '/usr/share/fonts/opentype/noto/NotoSerifCJK-Bold.ttc'
def grid(items, cols, title, path):
    cw, ch = FW, FH; rows = math.ceil(len(items) / cols)
    S = Image.new('RGBA', (cw * cols, ch * rows + 56), (244, 236, 218, 255)); d = ImageDraw.Draw(S)
    f1 = ImageFont.truetype(FONT, 22); f2 = ImageFont.truetype(FONT, 15); d.text((14, 12), title, fill=(40, 30, 24), font=f1)
    for i, (lv, label) in enumerate(items):
        x, y = (i % cols) * cw, 56 + (i // cols) * ch; S.alpha_composite(compose(lv), (x, y)); d.text((x + 14, y + 4), label, fill=(40, 30, 24), font=f2)
    S.convert('RGB').save(path)

if __name__ == '__main__':
    out = V.OUT; os.makedirs(out, exist_ok=True)
    names = {1: '重罐点名', 2: '连罐速投', 3: '弱点点名'}
    for p in (1, 2, 3):
        items = []
        for t in range(1, 7):
            lv = [0, 0, 0]; lv[p - 1] = t
            items.append((tuple(lv), f'路线{p} T{t}' + (' （挂件）' if t <= 2 else ' （主体）')))
        grid(items, 3, f'路线{p} · {names[p]}', os.path.join(out, f'route{p}.png'))
    print('ok')
