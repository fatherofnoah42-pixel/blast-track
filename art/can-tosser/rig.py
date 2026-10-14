# Can Tosser skeletal rig: composes the 4 hand-painted parts into frames.
import math, numpy as np
from PIL import Image

import os
HERE = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'parts')
P = {k: Image.open(f'{HERE}/{k}.png').convert('RGBA') for k in ('base', 'arm', 'can', 'cap')}

# --- rig constants (source-pixel units; base crop is 620x429) ---
BASE_PIVOT_HOLE = (320, 134)      # axle hole on the base bracket
BASE_FOOT = (310, 421)            # bottom-centre of the base (stands on the pad here)
ARM_HOLE = (68, 85)               # axle hole at the arm's round end
ARM_SC = 0.74
CAN_SC = 0.49
CAP_SC = 0.41
SCOOP_LOCAL = (440, 62)           # bowl centre in arm-crop coords
CAN_LOCAL_ROT = 70                # can axis relative to the arm (deg, + = clockwise on screen)

S = 0.5                           # world -> output px
SS = 2                            # supersample
WX0, WY0, WX1, WY1 = -10, -310, 720, 440
FW, FH = round((WX1 - WX0) * S), round((WY1 - WY0) * S)
K = S * SS

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

def render(arm_deg=-38, base_dx=0, base_dy=0, base_sx=1, base_sy=1, can=True, can_sc=1.0, can_dy=0,
           cap_extra=0, extra=None):
    cv = Image.new('RGBA', (FW * SS, FH * SS), (0, 0, 0, 0))
    # base squashes about its feet
    foot_w = (BASE_FOOT[0] + base_dx, BASE_FOOT[1] + base_dy)
    place(cv, 'base', BASE_FOOT, foot_w, 0, 1, base_sx, base_sy)
    # axle follows the squashed base
    hole_w = world_of(BASE_PIVOT_HOLE, BASE_FOOT, foot_w, 0, 1, base_sx, base_sy)
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
