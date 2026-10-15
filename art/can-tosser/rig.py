# Can Tosser skeletal rig: composes the 4 hand-painted parts into frames.
import math, numpy as np
from PIL import Image, ImageDraw

import os
HERE = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'parts')
P = {k: Image.open(f'{HERE}/{k}.png').convert('RGBA') for k in ('base', 'arm', 'can', 'cap', 'bracket')}

# --- rig constants (source-pixel units; base crop is 620x429) ---
BASE_PIVOT_HOLE = (320, 134)      # axle hole on the base bracket
BASE_FOOT = (310, 421)            # bottom-centre of the base (stands on the pad here)
ARM_HOLE = (68, 85)               # axle hole at the arm's round end
ARM_SC = 0.74
CAN_SC = 0.49
CAP_SC = 0.41
SCOOP_LOCAL = (440, 62)           # bowl centre in arm-crop coords
CAN_LOCAL_ROT = 70                # can axis relative to the arm (deg, + = clockwise on screen)

POST_ANCHOR = (150, 108)          # where the rubber band wraps round the rear post (base coords)
POST_STRAP = (92, 94, 162, 120)   # strap drawn across the post: x0, y0, x1, y1
ARM_ANCHOR = (40, 118)            # band hooks onto the back of the arm's hub (arm coords), so pulling the arm back stretches it
BAND_COL, BAND_OUT, BAND_HI = (24, 24, 30), (8, 8, 12), (84, 86, 100)

S = 0.5                           # world -> output px
SS = 2                            # supersample
WX0, WY0, WX1, WY1 = -10, -310, 720, 440
FW, FH = round((WX1 - WX0) * S), round((WY1 - WY0) * S)
K = S * SS
K_ = K; rig_x0, rig_y0 = WX0, WY0

def _M(anchor_local, anchor_world, rot_deg, scale, sx=1.0, sy=1.0):
    """PIL AFFINE coeffs mapping output px -> input px."""
    th = math.radians(rot_deg); c, s = math.cos(th), math.sin(th)
    # world = aw + R * D * (local - al),  D = scale*diag(sx,sy)
    D = np.array([[scale * sx, 0], [0, scale * sy]])
    R = np.array([[c, -s], [s, c]])
    A = R @ D                           # local->world linear
    Ai = np.linalg.inv(A)
    # output px (u,v) -> world: w = (u/K + WX0, v/K + WY0)
    # local = al + Ai (w - aw)
    al = np.array(anchor_local, float); aw = np.array(anchor_world, float)
    lin = Ai / K                        # d local / d(u,v)
    off = al + Ai @ (np.array([WX0, WY0], float) - aw)
    return (lin[0, 0], lin[0, 1], off[0], lin[1, 0], lin[1, 1], off[1])

def place(canvas, key, anchor_local, anchor_world, rot=0, scale=1, sx=1, sy=1, alpha=1.0, img=None):
    im = (img or P[key]).convert('RGBa')
    out = im.transform(canvas.size, Image.AFFINE, _M(anchor_local, anchor_world, rot, scale, sx, sy), resample=Image.BICUBIC)
    out = out.convert('RGBA')
    if alpha < 1:
        a = np.array(out); a[..., 3] = (a[..., 3] * alpha).astype(np.uint8); out = Image.fromarray(a)
    canvas.alpha_composite(out)

def world_of(local, anchor_local, anchor_world, rot, scale, sx=1, sy=1):
    th = math.radians(rot); c, s = math.cos(th), math.sin(th)
    d = np.array([(local[0] - anchor_local[0]) * scale * sx, (local[1] - anchor_local[1]) * scale * sy])
    return (anchor_world[0] + c * d[0] - s * d[1], anchor_world[1] + s * d[0] + c * d[1])

def to_px(w):  # world -> output px (not supersampled)
    return ((w[0] - WX0) * S, (w[1] - WY0) * S)

def _band(cv, a_w, b_w, tension, wobble):
    """Black elastic from the post to the arm.  tension 0 = slack and sagging, 1 = taut and thin; wobble = snap-back ripple."""
    K, n = K_, 40
    ax, ay = a_w; bx, by = b_w
    L = math.hypot(bx - ax, by - ay) or 1
    nx, ny = -(by - ay) / L, (bx - ax) / L
    if ny < 0: nx, ny = -nx, -ny                          # sag downwards
    sag = (1 - tension) * 46 + 4
    pts = []
    for i in range(n + 1):
        u = i / n
        off = 4 * u * (1 - u) * sag + wobble * 26 * math.sin(u * math.pi * 2) * (1 - tension * .6)
        pts.append(((ax + (bx - ax) * u + nx * off - rig_x0) * K, (ay + (by - ay) * u + ny * off - rig_y0) * K))
    w = (36 - 16 * tension) * K / 2
    lay = Image.new('RGBA', cv.size, (0, 0, 0, 0)); d = ImageDraw.Draw(lay)
    for px, py in pts: d.ellipse((px - w - 4 * K, py - w - 4 * K, px + w + 4 * K, py + w + 4 * K), fill=BAND_OUT + (255,))
    for px, py in pts: d.ellipse((px - w, py - w, px + w, py + w), fill=BAND_COL + (255,))
    for px, py in pts: d.ellipse((px - w * .28, py - w * .62 - w * .28, px + w * .28, py - w * .62 + w * .28), fill=BAND_HI + (255,))
    cv.alpha_composite(lay)

def _strap(cv, foot_w, sx, sy):
    x0, y0, x1, y1 = POST_STRAP
    c = [world_of(p, BASE_FOOT, foot_w, 0, 1, sx, sy) for p in ((x0, y0), (x1, y0), (x1, y1), (x0, y1))]
    pc = [((x - rig_x0) * K_, (y - rig_y0) * K_) for x, y in c]
    lay = Image.new('RGBA', cv.size, (0, 0, 0, 0)); d = ImageDraw.Draw(lay)
    d.rounded_rectangle((pc[0][0] - 4 * K_, pc[0][1] - 4 * K_, pc[2][0] + 4 * K_, pc[2][1] + 4 * K_), radius=10 * K_, fill=BAND_OUT + (255,))
    d.rounded_rectangle((pc[0][0], pc[0][1], pc[2][0], pc[2][1]), radius=7 * K_, fill=BAND_COL + (255,))
    d.rounded_rectangle((pc[0][0] + 6 * K_, pc[0][1] + 4 * K_, pc[2][0] - 6 * K_, pc[0][1] + 11 * K_), radius=3 * K_, fill=BAND_HI + (255,))
    cv.alpha_composite(lay)

def render(arm_deg=-38, base_dx=0, base_dy=0, base_sx=1, base_sy=1, can=True, can_sc=1.0, can_dy=0,
           cap_extra=0, extra=None, band=(.45, 0.0)):
    cv = Image.new('RGBA', (FW * SS, FH * SS), (0, 0, 0, 0))
    # base squashes about its feet
    foot_w = (BASE_FOOT[0] + base_dx, BASE_FOOT[1] + base_dy)
    place(cv, 'base', BASE_FOOT, foot_w, 0, 1, base_sx, base_sy)
    # axle follows the squashed base
    hole_w = world_of(BASE_PIVOT_HOLE, BASE_FOOT, foot_w, 0, 1, base_sx, base_sy)
    # rubber band: post -> behind the pivot bracket -> hooked under the arm
    _strap(cv, foot_w, base_sx, base_sy)
    a_w = world_of(POST_ANCHOR, BASE_FOOT, foot_w, 0, 1, base_sx, base_sy)
    b_w = world_of(ARM_ANCHOR, ARM_HOLE, hole_w, arm_deg, ARM_SC)
    _band(cv, a_w, b_w, band[0], band[1])
    place(cv, 'bracket', BASE_FOOT, foot_w, 0, 1, base_sx, base_sy)       # bracket hides the middle of the band
    place(cv, 'arm', ARM_HOLE, hole_w, arm_deg, ARM_SC)
    scoop_w = world_of(SCOOP_LOCAL, ARM_HOLE, hole_w, arm_deg, ARM_SC)
    can_w = None
    if can:
        can_w = (scoop_w[0], scoop_w[1] + can_dy)
        cl = Image.new('RGBA', cv.size, (0, 0, 0, 0))
        place(cl, 'can', (141, 215), can_w, arm_deg + CAN_LOCAL_ROT, CAN_SC * can_sc)
        # the can may stick out of the bowl's open side, but never through its outer shell
        ml = Image.new('RGBA', cv.size, (0, 0, 0, 0))
        place(ml, None, ARM_HOLE, hole_w, arm_deg, ARM_SC, img=_arm_mask())
        a = np.array(cl); m = np.array(ml)[..., 3].astype(np.float32) / 255
        a[..., 3] = (a[..., 3] * m).astype(np.uint8); a[..., :3] = (a[..., :3] * m[..., None]).astype(np.uint8) if False else a[..., :3]
        cv.alpha_composite(Image.fromarray(a))
        # bowl's near wall hides the can's lower part: redraw the arm's outer scoop on top
        mask_arm_front(cv, hole_w, arm_deg)
    place(cv, 'cap', (136, 137), hole_w, arm_deg * 0.0 + cap_extra, CAP_SC)
    if extra: extra(cv)
    fr = cv.resize((FW, FH), Image.LANCZOS)
    info = dict(foot=to_px(foot_w), scoop=to_px(scoop_w), hole=to_px(hole_w))
    return fr, info

_ARM_MASK = None
def _arm_mask():
    global _ARM_MASK
    if _ARM_MASK is None:
        a = np.array(P['arm']); h, w = a.shape[:2]
        yy = np.mgrid[0:h, 0:w][0]
        xx = np.mgrid[0:h, 0:w][1]; m = np.where((a[..., 3] > 8) | (yy < 76) | ((xx > 565) & (yy < 125)), 255, 0).astype(np.uint8)
        out = np.zeros((h, w, 4), np.uint8); out[..., :3] = 255; out[..., 3] = m
        _ARM_MASK = Image.fromarray(out)
    return _ARM_MASK

_ARM_FRONT = None
def mask_arm_front(cv, hole_w, arm_deg):
    global _ARM_FRONT
    if _ARM_FRONT is None:
        a = np.array(P['arm']).copy()
        h, w = a.shape[:2]
        yy, xx = np.mgrid[0:h, 0:w]
        # outer (lower) shell of the scoop: below a curve running along the bowl's near rim
        keep = (xx > 300) & (yy > 92 - (xx - 300) * 0.02)
        a[..., 3] = np.where(keep, a[..., 3], 0)
        _ARM_FRONT = Image.fromarray(a)
    place(cv, None, ARM_HOLE, hole_w, arm_deg, ARM_SC, img=_ARM_FRONT)

if __name__ == '__main__':
    fr, info = render()
    bg = Image.new('RGBA', fr.size, (236, 228, 210, 255)); bg.alpha_composite(fr); bg.convert('RGB').save('test_idle.png'); print(info, fr.size)
