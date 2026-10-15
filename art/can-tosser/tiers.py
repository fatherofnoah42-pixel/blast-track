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
def steelyard_weight(pen, cx, top=196, s=1.3):
    """秤砣: an iron steelyard weight hanging from a hook bolted to the pillar"""
    IRON, IRON_HI, IRON_LO, BRASS = (70, 72, 84, 255), (138, 142, 158, 255), (44, 44, 54, 255), (226, 176, 70, 255)
    Q = lambda x, y: (cx + x * s, top + y * s)
    pen.poly([Q(-12, -6), Q(12, -6), Q(12, 8), Q(-12, 8)], IRON, 2.6); rivet(pen, Q(0, 1), 3.6 * s)        # bolt plate
    for i in range(2):                                                                                        # chain
        x0, y0 = Q(-5, 13 + i * 13); x1, y1 = Q(5, 27 + i * 13)
        if i % 2 == 0: pen.d.ellipse((px((x0, y0)) + px((x1, y1))), outline=INK, width=round(4.6 * K)); pen.d.ellipse((px((x0, y0)) + px((x1, y1))), outline=IRON_HI, width=round(2 * K))
        else: pen.line(Q(0, 14 + i * 13), Q(0, 28 + i * 13), IRON_HI, 3, 1.6)
    y0 = 44
    a, b = Q(-10, y0 - 10), Q(10, y0 + 6)
    pen.d.ellipse((px(a) + px(b)), outline=INK, width=round(6 * K)); pen.d.ellipse((px(a) + px(b)), outline=BRASS, width=round(2.6 * K))
    body = [(-9, 4), (9, 4), (11, 14), (30, 30), (38, 52), (36, 68), (28, 76), (-28, 76), (-36, 68), (-38, 52), (-30, 30), (-11, 14)]
    pen.poly([Q(x, y0 + y) for x, y in body], IRON, 3.4)
    pen.poly([Q(x, y0 + y) for x, y in [(-24, 30), (-10, 18), (-4, 22), (-18, 40), (-26, 62), (-32, 54)]], IRON_HI, 0)
    pen.poly([Q(x, y0 + y) for x, y in [(20, 36), (32, 52), (30, 68), (22, 72), (24, 54)]], IRON_LO, 0)
    pen.poly([Q(x, y0 + y) for x, y in [(-37, 60), (37, 60), (36, 68), (-36, 68)]], BRASS, 2.2)
    pen.ell(Q(0, y0 + 42), 9 * s, 9 * s, BRASS, 2.2); pen.ell(Q(-2, y0 + 40), 3 * s, 3 * s, (255, 240, 190, 255), 0)
def mod1_1(pen, arm): steelyard_weight(pen, 76)       # left pillar (native) = where the soda bottle was
def mod1_2(pen, arm): steelyard_weight(pen, 76); steelyard_weight(pen, 535)   # + a matching one on the other pillar
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

def pedestal(pen, dy):
    """T6: a second, heavier storey under the machine: basalt plinth, gold-framed meteor vault, gold-capped towers with braziers."""
    top = 421 + dy                                   # where the machine's feet stand
    STONE, STONE_HI, STONE_LO, MORTAR = (80, 70, 84, 255), (124, 110, 126, 255), (52, 46, 58, 255), (34, 28, 36, 255)
    G, G_LO, G_HI = (250, 200, 74, 255), (186, 128, 38, 255), (255, 240, 170, 255)
    pen.poly([(-40, top - 4), (660, top - 4), (668, top + 20), (-48, top + 20)], STONE_HI, 3.4)                # deck
    pen.poly([(-48, top + 20), (668, top + 20), (668, top + 32), (-48, top + 32)], G, 2.6)                      # gold lip
    pen.poly([(-30, top + 32), (650, top + 32), (668, 412), (-48, 412)], STONE, 3.4)                            # tapered body
    for r, y in enumerate(range(top + 32, 410, 36)):                                                          # block courses
        x0 = -30 - (y - top - 32) * 18 / (412 - top - 32); x1 = 650 + (y - top - 32) * 18 / (412 - top - 32)
        pen.d.line([px((x0, y)), px((x1, y))], fill=MORTAR, width=round(3 * K)); pen.d.line([px((x0 + 2, y + 3)), px((x1 - 2, y + 3))], fill=STONE_HI, width=round(1.6 * K))
        for x in range(-20 + (46 if r % 2 else 0), 650, 92):
            pen.d.line([px((x, y)), px((x, min(y + 36, 410)))], fill=MORTAR, width=round(3 * K))
    for (x0, y0, x1) in ((60, top + 68, 150), (440, top + 104, 540), (110, top + 140, 190), (480, top + 176, 560)):   # glowing lava seams
        pen.d.line([px((x0, y0)), px((x1, y0))], fill=(255, 110, 30, 255), width=round(4.5 * K)); pen.d.line([px((x0 + 6, y0)), px((x1 - 6, y0))], fill=(255, 220, 120, 255), width=round(1.6 * K))
    # gold-framed vault with spare meteors
    vy0 = top + 60; R = 104
    pen.glow((310, 380), 170, (255, 110, 30), 230)
    arch = lambda r: [(310 - r, 412)] + [(310 + r * math.cos(a), vy0 + R - r * math.sin(a)) for a in np.linspace(math.pi, 0, 22)] + [(310 + r, 412)]
    pen.poly(arch(R + 16), G, 3.4); pen.poly(arch(R), (34, 20, 22, 255), 3)
    for x, y, r, s in ((256, 392, 38, 3), (366, 394, 40, 11), (312, 380, 46, 5)):
        im, an = IT.meteor(s, 120); sc = 2 * r / 240
        it = im.resize((round(im.width * sc * K), round(im.height * sc * K)), Image.LANCZOS)
        cx, cy = px((x, y)); pen.l.alpha_composite(it, (round(cx - an[0] * sc * K), round(cy - an[1] * sc * K)))
    pen.poly([(292, vy0 - 26), (328, vy0 - 26), (336, vy0 + 2), (284, vy0 + 2)], G, 3); pen.ell((310, vy0 - 12), 8, 8, (220, 40, 40, 255), 2); pen.ell((307, vy0 - 15), 2.6, 2.6, (255, 220, 220, 255), 0)
    pen.poly([(-60, 410), (680, 410), (686, 434), (-66, 434)], STONE_LO, 3.4)                                 # plinth
    for xx in (-62, 616):                                                                                       # corner towers outside the machine's footprint
        tt = top - 70
        pen.poly([(xx, tt), (xx + 66, tt), (xx + 70, 414), (xx - 4, 414)], (64, 64, 80, 255), 3.4)
        pen.poly([(xx + 2, tt + 4), (xx + 20, tt + 4), (xx + 18, 410), (xx, 410)], (98, 100, 118, 255), 0)
        for yy in range(tt + 40, 400, 40): rivet(pen, (xx + 33, yy), 5.5)
        pen.poly([(xx - 8, tt - 6), (xx + 74, tt - 6), (xx + 74, tt + 18), (xx - 8, tt + 18)], G, 3)
        pen.poly([(xx - 10, 392), (xx + 76, 392), (xx + 80, 420), (xx - 14, 420)], G_LO, 3)
        bx = xx + 33                                                                                            # brazier
        pen.glow((bx, tt - 60), 90, (255, 120, 30), 220)
        pen.poly([(bx - 40, tt - 34), (bx + 40, tt - 34), (bx + 26, tt - 6), (bx - 26, tt - 6)], G, 3)
        pen.poly([(bx - 34, tt - 30), (bx - 14, tt - 30), (bx - 10, tt - 10), (bx - 22, tt - 10)], G_HI, 0)
        flame(pen, (bx - 6, tt - 34), 86, 32, .12); flame(pen, (bx + 16, tt - 34), 56, 20, .3)

def meteor_heat(pen, arm):        # heat haze behind the boulder in the scoop
    at, ax, up = at_arm(arm); c = at(rig.CAN_CENTER)
    pen.glow((c[0] + up[0] * 30, c[1] + up[1] * 30), 210, (255, 120, 30), 220)

def flame(pen, base, h, w, lean=0.0):
    def shape(h, w):
        pts = []
        for t_ in np.linspace(0, 1, 14):            # right side, base -> tip
            hw = w * (1 - t_) ** 1.1 * (0.75 + 0.25 * math.sin(math.pi * min(1, t_ * 1.6)))
            pts.append((base[0] + hw + lean * h * t_ * t_, base[1] - h * t_))
        for t_ in np.linspace(1, 0, 14):            # left side, tip -> base
            hw = w * (1 - t_) ** 1.1 * (0.75 + 0.25 * math.sin(math.pi * min(1, t_ * 1.6)))
            pts.append((base[0] - hw + lean * h * t_ * t_, base[1] - h * t_))
        pts += [(base[0] - w * math.cos(a), base[1] + w * .7 * math.sin(a)) for a in np.linspace(0, math.pi, 10)][::-1][1:-1][::-1] if False else [(base[0] + w * math.cos(a), base[1] + w * .6 * math.sin(a)) for a in np.linspace(math.pi, 0, 10)][1:-1]
        return pts
    pen.poly(shape(h, w), (255, 106, 28, 240), 2.6)
    pen.poly(shape(h * .62, w * .55), (255, 214, 84, 255), 0)
def flames(pen, arm):             # T6: the boulder in the scoop is burning
    at, ax, up = at_arm(arm); c = at(rig.CAN_CENTER)
    for k, (o, h, w, l) in enumerate(((-44, 92, 34, -.35), (4, 132, 44, -.22), (50, 98, 32, -.08))):
        b = (c[0] + ax[0] * o + up[0] * 70, c[1] + ax[1] * o + up[1] * 70)
        flame(pen, b, h, w, l)

# ================= BODIES: (teal tint, can tint, can scale, arm scale, fx list) =================
def can_p1(t): return {3: steel(BASE_CAN, (1.0, .62, .46), .04), 4: steel(BASE_CAN, (.62, .66, .78)), 5: steel(BASE_CAN, (.42, .46, .56)), 6: None}[t]
def stripes(img, bands=3):
    a = np.array(img); h = a.shape[0]
    for i in range(bands):
        y0 = int(h * (0.28 + i * 0.2)); y1 = y0 + int(h * 0.07); sel = a[y0:y1, :, 3] > 200; a[y0:y1][sel, :3] = (30, 30, 36)
    return Image.fromarray(a)
def gold_can(): return stripes(recolor(BASE_CAN, lambda rgb: hsv_shift(rgb, h=0.115, s=1.0, v=1.05)))
grey = lambda g, v=1.0: (lambda i: tint_teal(i, grey=g, v=v))
def gold_tint(img):
    a = np.array(img).astype(np.float32); rgb = a[..., :3] / 255
    mx = rgb.max(-1); mn = rgb.min(-1); d = mx - mn; r, g, b = rgb[..., 0], rgb[..., 1], rgb[..., 2]
    hh = np.where(d == 0, 0, np.where(mx == g, (b - r) / (d + 1e-9) + 2, np.where(mx == b, (r - g) / (d + 1e-9) + 4, ((g - b) / (d + 1e-9)) % 6))) / 6
    m = ((hh > .40) & (hh < .62) & (d > .08))[..., None]
    lum = (rgb @ np.array([.3, .59, .11]))[..., None]
    new = np.clip(lum * np.array([1.75, 1.32, .5]) + np.array([.08, .04, 0]), 0, 1)
    a[..., :3] = np.where(m, new, rgb) * 255
    return Image.fromarray(a.astype(np.uint8))
BODY = {
 (1, 3): dict(teal=grey((.78, .84, .95), 1.2), can_img=can_p1(3), can_sc=.58, fx=[charge_ring], crate='same'),
 (1, 4): dict(teal=grey((.52, .56, .68)), item='spiked', can_sc=.56, fx=[plates], crate='same'),
 (1, 5): dict(teal=grey((.36, .40, .50)), item='grenade', can_sc=.62, slide=6, fx=[scope_laser, laser, plates], crate='same'),
 (1, 6): dict(teal=gold_tint, item='meteor', can_sc=.9, slide=14, arm_sc=.98, base_dy=-190, pre=lambda pen: pedestal(pen, -190),
              under_fx=[meteor_heat], fx=[plates, flames], crate='meteors'),
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

import items as IT
_ITEM_CACHE = {}
def item(kind):
    if kind not in _ITEM_CACHE:
        _ITEM_CACHE[kind] = {'spiked': IT.spiked_can, 'grenade': IT.grenade, 'meteor': lambda: IT.meteor(7, 150)}[kind]()
    return _ITEM_CACHE[kind]

CRATE_X = (229, 314, 399)
def restock(base, spec, can_img):
    """spare ammo in the crate = whatever sits in the scoop"""
    if spec.get('crate') == 'meteors':
        rocks = [IT.meteor(s, r) for s, r in ((3, 110), (11, 120), (5, 105))]
        lst = [(im, an, 92 / (2 * r)) for (im, an), r in zip(rocks, (110, 120, 105))]
        return IT.restock_crate(base, lst, None, None, [(232, 302), (395, 304), (314, 290)], glow=(255, 110, 30))
    if 'item' in spec:
        im, an = item(spec['item'])
        if spec['item'] == 'spiked': return IT.restock_crate(base, im, an, .26, [(x, 291) for x in CRATE_X])
        if spec['item'] == 'grenade': return IT.restock_crate(base, im, an, .33, [(x, 300) for x in CRATE_X])
    return IT.restock_crate(base, can_img, (141, 215), .284, [(x, 291) for x in CRATE_X])

def set_window(wy0, wx0=-10, wx1=720):
    import variants as VV
    rig.WY0, rig.WX0, rig.WX1 = wy0, wx0, wx1; rig.FH = round((rig.WY1 - wy0) * rig.S); rig.FW = round((wx1 - wx0) * rig.S)
    for m in (VV, sys.modules[__name__]): m.WY0, m.WX0, m.FH, m.FW = wy0, wx0, rig.FH, rig.FW

def compose(levels, arm=-34):
    """levels = (a, b, c): tier of path 1/2/3.  Legal combos only (<=2 paths; one body, the other <= 2)."""
    import variants as VV
    body_p = next((i + 1 for i, t in enumerate(levels) if t >= 3), None)
    spec = dict(BODY[(body_p, levels[body_p - 1])]) if body_p else {}
    fx = list(spec.get('fx', [])); mods = []
    for i, t in enumerate(levels):
        if t in (1, 2) and (body_p is None or i + 1 != body_p): mods.append(MODS[(i + 1, t)])
    dy = spec.get('base_dy', 0); VV.HOLE_DY = dy
    def under(cv, hole_w, draw):
        if spec.get('under_fx'):
            pen = Pen(cv)
            for f in spec['under_fx']: f(pen, arm)
            pen.done()
        if spec.get('arm2') is not None: draw(spec['arm2'], True, 0)
    if 'item' in spec: rig.P['can'], rig.CAN_ANCHOR = item(spec['item'])
    else: rig.P['can'] = spec.get('can_img') or BASE_CAN; rig.CAN_ANCHOR = (141, 215)
    for k in ('base', 'arm', 'cap'): rig.P[k] = spec['teal'](ORIG[k]) if 'teal' in spec else ORIG[k]
    if spec.get('crate'): rig.P['base'] = restock(rig.P['base'], spec, rig.P['can'])
    rig.CAN_SC = spec.get('can_sc', BASE_CAN_SC); rig.ARM_SC = spec.get('arm_sc', BASE_ARM_SC); rig.REST_LEN = rig._rest_lengths()
    def extra(cv):
        if mods:                                   # modules ride on the (possibly raised) base
            ml = Image.new('RGBA', cv.size, (0, 0, 0, 0)); mp = Pen(ml)
            for f in mods: f(mp, arm)
            mp.done(); cv.alpha_composite(ml.transform(ml.size, Image.AFFINE, (1, 0, 0, 0, 1, -dy * K)))
        pen = Pen(cv)
        for f in fx: f(pen, arm)
        if body_p:
            n = levels[body_p - 1]
            for i in range(n):
                x = 310 + (i - (n - 1) / 2) * 22; y = 366 + dy
                pen.ell((x, y), 7.5, 7.5, PIPCOL[n] + (255,), 2.2); pen.ell((x - 2, y - 2.5), 2.4, 2.4, (255, 255, 255, 190), 0)
        pen.done()
    pre = (lambda cv: (lambda pen: (spec['pre'](pen), pen.done()))(Pen(cv))) if spec.get('pre') else None
    fr, info = rig.render(arm_deg=arm, can=True, can_slide=spec.get('slide', 0), base_dy=dy, extra=extra, pre=pre,
                          under=under if (spec.get('arm2') is not None or spec.get('under_fx')) else None)
    for k in ('base', 'arm', 'cap'): rig.P[k] = ORIG[k]
    rig.P['can'] = BASE_CAN; rig.CAN_ANCHOR = (141, 215); rig.CAN_SC = BASE_CAN_SC; rig.ARM_SC = BASE_ARM_SC; rig.REST_LEN = rig._rest_lengths(); VV.HOLE_DY = 0
    return ImageOps.mirror(fr)

def legal(levels):
    nz = [t for t in levels if t > 0]
    return len(nz) <= 2 and (max(levels) < 3 or sorted(levels)[1] <= 2)

FONT = '/usr/share/fonts/opentype/noto/NotoSerifCJK-Bold.ttc'
def grid(items, cols, title, path):
    frames = [compose(lv) for lv, _ in items]
    bb = [f.getbbox() for f in frames]; x0 = min(b[0] for b in bb) - 8; y0 = min(b[1] for b in bb) - 30; x1 = max(b[2] for b in bb) + 8; y1 = max(b[3] for b in bb) + 4
    frames = [f.crop((x0, y0, x1, y1)) for f in frames]
    cw, ch = x1 - x0, y1 - y0; rows = math.ceil(len(items) / cols)
    S = Image.new('RGBA', (cw * cols, ch * rows + 56), (244, 236, 218, 255)); d = ImageDraw.Draw(S)
    f1 = ImageFont.truetype(FONT, 22); f2 = ImageFont.truetype(FONT, 15); d.text((14, 12), title, fill=(40, 30, 24), font=f1)
    for i, (lv, label) in enumerate(items):
        x, y = (i % cols) * cw, 56 + (i // cols) * ch; S.alpha_composite(frames[i], (x, y)); d.text((x + 14, y + 4), label, fill=(40, 30, 24), font=f2)
    S.convert('RGB').save(path)

if __name__ == '__main__':
    out = V.OUT; os.makedirs(out, exist_ok=True); set_window(-470)
    names = {1: '重罐点名', 2: '连罐速投', 3: '弱点点名'}
    for p in (1, 2, 3):
        items = []
        for t in range(1, 7):
            lv = [0, 0, 0]; lv[p - 1] = t
            items.append((tuple(lv), f'路线{p} T{t}' + (' （挂件）' if t <= 2 else ' （主体）')))
        grid(items, 3, f'路线{p} · {names[p]}', os.path.join(out, f'route{p}.png'))
    print('ok')
