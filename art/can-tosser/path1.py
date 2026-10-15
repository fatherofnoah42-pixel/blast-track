# Path 1 "重罐点名 / Heavy Can": heavier and heavier cans, ending with a referee's mega can.
import math, numpy as np
from PIL import Image, ImageDraw
import variants as V, rig
from variants import *

def can_fx(off=(0, 0)):
    def center(arm, arm_sc, sc):
        at, ax, up = arm_frame(arm, arm_sc); return at(rig.CAN_CENTER), ax, up
    return center

def bubbles(pen, arm):
    at, ax, up = arm_frame(arm, rig.ARM_SC); c = at(rig.CAN_CENTER)
    for dx, dy, r in [(-0.2, 1.25, 7), (0.55, 1.5, 5), (-0.75, 1.0, 4.5), (0.15, 1.9, 4), (0.95, 1.15, 3.5)]:
        p = (c[0] + up[0] * 100 * dy + ax[0] * 55 * dx, c[1] + up[1] * 100 * dy + ax[1] * 55 * dx)
        pen.ell(p, r, r, (230, 248, 255, 215), 1.6); pen.ell((p[0] - r * .3, p[1] - r * .3), r * .3, r * .3, (255, 255, 255, 255), 0)

def plate_rivets(pen, arm):   # steel reinforcement on the scoop
    at, ax, up = arm_frame(arm, rig.ARM_SC)
    for l in [(420, 118), (470, 120), (520, 108)]:
        p = at(l); pen.ell(p, 5.5, 5.5, (205, 212, 222, 255), 1.8); pen.ell((p[0] - 1.5, p[1] - 1.5), 1.6, 1.6, (255, 255, 255, 220), 0)

def gauge(pen, arm):          # pressure gauge on the crate top (T3)
    c = (545, 150); pen.ell(c, 34, 34, (205, 212, 222, 255), 3.5); pen.ell(c, 26, 26, (247, 240, 222, 255), 2)
    for i in range(7):
        a = math.radians(200 + i * 23); pen.d.line([px((c[0] + 17 * math.cos(a), c[1] + 17 * math.sin(a))), px((c[0] + 24 * math.cos(a), c[1] + 24 * math.sin(a)))], fill=INK, width=round(1.4 * K))
    a = math.radians(200 + 5 * 23); pen.line(c, (c[0] + 21 * math.cos(a), c[1] + 21 * math.sin(a)), (220, 50, 40, 255), 3.4, 1.4); pen.ell(c, 3.5, 3.5, INK, 0)
    pen.poly([(515, 180), (575, 180), (582, 196), (508, 196)], (205, 140, 70, 255), 2.4)

def spikes(pen, arm):         # T4: studs on the can + drill cone at the lid
    at, ax, up = arm_frame(arm, rig.ARM_SC * 1.0); c = at((rig.CAN_CENTER[0], rig.CAN_CENTER[1]))
    tip = (c[0] + up[0] * 190, c[1] + up[1] * 190)
    base_l = (c[0] + up[0] * 105 + ax[0] * 42, c[1] + up[1] * 105 + ax[1] * 42); base_r = (c[0] + up[0] * 105 - ax[0] * 42, c[1] + up[1] * 105 - ax[1] * 42)
    pen.poly([base_l, tip, base_r], (160, 168, 182, 255), 3.4)
    pen.poly([base_l, tip, (c[0] + up[0] * 105, c[1] + up[1] * 105)], (205, 212, 224, 255), 0)
    for s in (-1, 1):
        for k in (0.2, 0.55):
            p = (c[0] + up[0] * 100 * k + ax[0] * 52 * s, c[1] + up[1] * 100 * k + ax[1] * 52 * s)
            q = (p[0] + ax[0] * 16 * s, p[1] + ax[1] * 16 * s)
            pen.poly([(p[0] + up[0] * 8, p[1] + up[1] * 8), q, (p[0] - up[0] * 8, p[1] - up[1] * 8)], (190, 196, 208, 255), 2.2)

def scope(pen, arm):          # T5: crosshair sign + scope on the arm
    c = (118, 6); pen.ell(c, 30, 30, (247, 240, 222, 255), 4); pen.ell(c, 20, 20, (247, 240, 222, 255), 2.4); pen.ell(c, 9, 9, (225, 55, 45, 255), 2)
    pen.line((c[0] - 38, c[1]), (c[0] + 38, c[1]), (40, 34, 30, 255), 3, 0); pen.line((c[0], c[1] - 38), (c[0], c[1] + 38), (40, 34, 30, 255), 3, 0)
    pen.ell(c, 5, 5, (225, 55, 45, 255), 0)
    at, ax, up = arm_frame(arm, rig.ARM_SC); a = at((250, 40)); b = at((330, 40))
    pen.poly([(a[0] + up[0] * 16, a[1] + up[1] * 16), (b[0] + up[0] * 16, b[1] + up[1] * 16), (b[0] - up[0] * 4, b[1] - up[1] * 4), (a[0] - up[0] * 4, a[1] - up[1] * 4)], (60, 66, 80, 255), 3)
    pen.ell((b[0] + up[0] * 6, b[1] + up[1] * 6), 11, 11, (80, 200, 255, 255), 3); pen.ell((b[0] + up[0] * 3, b[1] + up[1] * 3), 4, 4, (255, 255, 255, 255), 0)

def referee(pen, arm):        # T6: whistle, gold trim, banner
    pen.line((124, 40), (150, 120), (30, 26, 24, 255), 2.4, 1.2)
    pen.poly([(138, 108), (178, 108), (190, 120), (190, 136), (138, 136)], (255, 205, 70, 255), 3); pen.ell((170, 122), 6.5, 6.5, (80, 50, 20, 255), 1.5)
    for xx in (60, 560):
        pen.poly([(xx, 205), (xx + 38, 205), (xx + 38, 232), (xx, 232)], (255, 205, 70, 255), 3)

def stripes(img, bands=3):    # referee stripes on the can
    a = np.array(img); h = a.shape[0]
    for i in range(bands):
        y0 = int(h * (0.28 + i * 0.2)); y1 = y0 + int(h * 0.07)
        sel = a[y0:y1, :, 3] > 200; a[y0:y1][sel, :3] = (30, 30, 36)
    return Image.fromarray(a)

def gold(img):
    return recolor(img, lambda rgb: np.clip(hsv_shift(rgb, h=0.115 - 0.0, s=1.0, v=1.05), 0, 1))

specs = []
red = BASE_CAN
specs.append(dict(tier=1, arm=-34, fx=[bubbles]))
specs.append(dict(tier=2, arm=-34, teal=lambda i: tint_teal(i, grey=(.78, .84, .95), v=1.2), can_img=steel(red), fx=[plate_rivets]))
specs.append(dict(tier=3, arm=-34, teal=lambda i: tint_teal(i, grey=(.78, .84, .95), v=1.2), can_img=steel(red, (1.0, .62, .46), .04), can_sc=.58, fx=[gauge]))
specs.append(dict(tier=4, arm=-34, teal=lambda i: tint_teal(i, grey=(.52, .56, .68), v=1.0), can_img=steel(red, (.62, .66, .78), .0), can_sc=.58, fx=[plate_rivets, spikes]))
specs.append(dict(tier=5, arm=-34, teal=lambda i: tint_teal(i, grey=(.36, .40, .50), v=1.0), can_img=steel(red, (.42, .46, .56), .0), can_sc=.55, fx=[scope, plate_rivets]))
specs.append(dict(tier=6, arm=-34, teal=lambda i: tint_teal(i, grey=(1.0, .80, .38), v=1.35), can_img=stripes(gold(red)), can_sc=.7, arm_sc=.82, fx=[referee, plate_rivets]))
labels = ['T1 加料汽水罐  效果+1', 'T2 铁皮罐  重型目标+40%', 'T3 蓄力重罐  效果+3', 'T4 破防重罐  无视耐力', 'T5 点杀专家  优先砸重型', 'T6 巨罐裁判  效果×7']
if __name__ == '__main__':
    os.makedirs(V.OUT, exist_ok=True); sheet('path1', '路线一 · 重罐点名 Heavy Can', specs, labels); print('ok')
