# Can Tosser skeletal rig: composes the 4 hand-painted parts into frames.
#
# The machine is built FACING LEFT (as in the reference): the rear post with the rubber-band anchor is on the launch
# side, the arm points up and back (right) when it is "ready", the cords pull it forward and the can leaves along the
# scoop's mouth.  gen_can_anim.py mirrors the finished frames, because the game expects sprites that face right.
import math, os
import numpy as np
from PIL import Image, ImageDraw

HERE = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'parts')
P = {k: Image.open(f'{HERE}/{k}.png').convert('RGBA') for k in ('base', 'arm', 'can', 'cap')}

# --- rig constants (source-pixel units; base crop is 620x429) ---
BASE_PIVOT_HOLE = (320, 134)      # axle hole on the base bracket
BASE_FOOT = (310, 421)            # bottom-centre of the base (stands on the pad here)
ARM_HOLE = (68, 85)               # axle hole at the arm's round end
ARM_SC = 0.74
CAN_SC = 0.52
CAP_SC = 0.41

# The can STANDS in the cup: its axis is the scoop's mouth direction (arm-local "up"), lid outward, bottom behind the near rim.
CAN_CENTER = (455, 48)            # arm-crop coords: centre of the can when it sits in the cup
CAN_LOCAL_ROT = 0                 # can image already has its lid "up" = the mouth direction
CAN_SQUASH = 1.0                 # reference can is short and fat; the part sheet's can is tall
MUZZLE_PUSH = 100                  # arm-crop px along the mouth direction: where the can is when it leaves the cup
# outline of everything that stands IN FRONT of the can (bowl's end wall + the near rim and shell), arm-crop coords
FRONT_POLY = [(280, 0), (344, 0), (346, 55), (361, 66), (367, 90), (380, 94), (410, 101), (450, 102), (490, 94), (530, 82),
              (552, 58), (566, 32), (580, 8), (600, 8), (600, 200), (280, 200)]

# Two rubber cords from the rear post's knob: one to the rivet on the arm, one to the pivot hub.
CORD_UP = dict(post=(124, 58), arm=(158, 82))       # post: base coords, arm: arm-crop coords
CORD_LO = dict(post=(124, 82), arm=ARM_HOLE)
CORD_COL, CORD_OUT, CORD_HI = (52, 54, 64), (14, 14, 20), (130, 134, 150)
REST_DEG = -42.0                  # "ready" pose; the cords are exactly taut here

S = 0.5                           # world -> output px
SS = 2                            # supersample
WX0, WY0, WX1, WY1 = -10, -310, 720, 440
FW, FH = round((WX1 - WX0) * S), round((WY1 - WY0) * S)
K = S * SS

def _M(anchor_local, anchor_world, rot_deg, scale, sx=1.0, sy=1.0):
    """PIL AFFINE coeffs mapping output px -> input px."""
    th = math.radians(rot_deg); c, s = math.cos(th), math.sin(th)
    D = np.array([[scale * sx, 0], [0, scale * sy]])
    R = np.array([[c, -s], [s, c]])
    A = R @ D                           # local->world linear
    Ai = np.linalg.inv(A)
    al = np.array(anchor_local, float); aw = np.array(anchor_world, float)
    lin = Ai / K                        # d local / d(u,v)
    off = al + Ai @ (np.array([WX0, WY0], float) - aw)
    return (lin[0, 0], lin[0, 1], off[0], lin[1, 0], lin[1, 1], off[1])

def place(canvas, key, anchor_local, anchor_world, rot=0, scale=1, sx=1, sy=1, img=None):
    im = (img or P[key]).convert('RGBa')
    out = im.transform(canvas.size, Image.AFFINE, _M(anchor_local, anchor_world, rot, scale, sx, sy), resample=Image.BICUBIC)
    canvas.alpha_composite(out.convert('RGBA'))

def world_of(local, anchor_local, anchor_world, rot, scale, sx=1, sy=1):
    th = math.radians(rot); c, s = math.cos(th), math.sin(th)
    d = np.array([(local[0] - anchor_local[0]) * scale * sx, (local[1] - anchor_local[1]) * scale * sy])
    return (anchor_world[0] + c * d[0] - s * d[1], anchor_world[1] + s * d[0] + c * d[1])

def to_px(w):  # world -> output px (not supersampled)
    return ((w[0] - WX0) * S, (w[1] - WY0) * S)

_FRONT = None
def _front_mask():
    """Arm-crop-sized image whose alpha is 255 where something in front of the can is (bowl end wall, near rim, shell)."""
    global _FRONT
    if _FRONT is None:
        arm = P['arm']; poly = Image.new('L', arm.size, 0)
        ImageDraw.Draw(poly).polygon(FRONT_POLY, fill=255)
        aa = np.array(arm)[..., 3]
        a = np.minimum(np.array(poly), aa)                          # only where the arm part is actually opaque
        # the can must never show outside the bowl's outer shell: hide everything below the shell's lowest opaque pixel per column
        H, W = aa.shape; below = np.zeros((H, W), np.uint8)
        for x in range(280, W):
            ys = np.nonzero(aa[:, x] > 40)[0]
            below[(ys.max() if len(ys) else 0):, x] = 255
        a = np.maximum(a, below)
        PADX, PADY = 500, 400                                       # beyond the arm crop's right/bottom edge everything hides the can too
        full = np.zeros((H + PADY, W + PADX), np.uint8); full[:H, :W] = a; full[:, W:] = 255; full[H:, :] = 255
        a = full
        out = np.zeros(a.shape + (4,), np.uint8); out[..., :3] = 255; out[..., 3] = a
        _FRONT = Image.fromarray(out)
    return _FRONT

def _cord_pts(a_w, b_w, rest_len, wobble, n=36):
    """Points along a cord of length ~rest_len between a_w and b_w: straight when taut, sagging when the ends come closer."""
    ax, ay = a_w; bx, by = b_w
    L = math.hypot(bx - ax, by - ay) or 1
    stretch = L / rest_len - 1                      # > 0: stretched, < 0: slack
    sag = math.sqrt(max(0.0, .375 * rest_len * max(0.0, rest_len - L))) if stretch < 0 else 0.0
    sag = min(sag, 90)
    nx, ny = -(by - ay) / L, (bx - ax) / L
    if ny < 0: nx, ny = -nx, -ny                    # sag downwards
    pts = []
    for i in range(n + 1):
        u = i / n
        off = 4 * u * (1 - u) * sag + wobble * 20 * math.sin(u * math.pi * 3) * (1 - abs(2 * u - 1) ** 2)
        pts.append((ax + (bx - ax) * u + nx * off, ay + (by - ay) * u + ny * off))
    return pts, stretch

def _draw_cord(cv, a_w, b_w, rest_len, wobble):
    pts, stretch = _cord_pts(a_w, b_w, rest_len, wobble)
    w = max(3.2, 5.2 - 22 * max(0, stretch)) * K / 2           # a stretched cord gets thinner
    px = [((x - WX0) * K, (y - WY0) * K) for x, y in pts]
    lay = Image.new('RGBA', cv.size, (0, 0, 0, 0)); d = ImageDraw.Draw(lay)
    for x, y in px: d.ellipse((x - w - 2 * K, y - w - 2 * K, x + w + 2 * K, y + w + 2 * K), fill=CORD_OUT + (255,))
    for x, y in px: d.ellipse((x - w, y - w, x + w, y + w), fill=CORD_COL + (255,))
    for x, y in px: d.ellipse((x - w * .3, y - w * .45 - w * .3, x + w * .3, y - w * .45 + w * .3), fill=CORD_HI + (255,))
    for (x, y) in (px[0], px[-1]):                               # knots at both ends
        r = w * 1.9
        d.ellipse((x - r - K, y - r - K, x + r + K, y + r + K), fill=CORD_OUT + (255,)); d.ellipse((x - r, y - r, x + r, y + r), fill=CORD_COL + (255,))
    cv.alpha_composite(lay)

def _rest_lengths():
    foot_w = BASE_FOOT; hole_w = BASE_PIVOT_HOLE
    out = []
    for c in (CORD_UP, CORD_LO):
        a = world_of(c['post'], BASE_FOOT, foot_w, 0, 1)
        b = world_of(c['arm'], ARM_HOLE, hole_w, REST_DEG, ARM_SC)
        out.append(math.hypot(b[0] - a[0], b[1] - a[1]))
    return out
REST_LEN = _rest_lengths()

def draw_arm(cv, hole_w, arm_deg, can=True, can_slide=0, can_dy=0):
    place(cv, 'arm', ARM_HOLE, hole_w, arm_deg, ARM_SC)
    if can:
        cx, cy = CAN_CENTER[0], CAN_CENTER[1] + can_slide
        can_w = world_of((cx, cy), ARM_HOLE, hole_w, arm_deg, ARM_SC)
        cl = Image.new('RGBA', cv.size, (0, 0, 0, 0))
        place(cl, 'can', (141, 215), (can_w[0], can_w[1] + can_dy), arm_deg + CAN_LOCAL_ROT, CAN_SC, 1.0, CAN_SQUASH)
        # the bowl's end wall and near rim hide the part of the can that stands inside the bowl
        ml = Image.new('RGBA', cv.size, (0, 0, 0, 0))
        place(ml, None, ARM_HOLE, hole_w, arm_deg, ARM_SC, img=_front_mask())
        a = np.array(cl); m = np.array(ml)[..., 3].astype(np.float32) / 255
        a[..., 3] = (a[..., 3] * (1 - m)).astype(np.uint8)
        cv.alpha_composite(Image.fromarray(a))

def render(arm_deg=REST_DEG, base_dx=0, base_dy=0, base_sx=1, base_sy=1, can=True, can_slide=0, can_dy=0,
           extra=None, wobble=0.0, under=None):
    """can_slide: arm-crop px the can is displaced along the mouth direction (negative = out of the cup, positive = down into it)."""
    cv = Image.new('RGBA', (FW * SS, FH * SS), (0, 0, 0, 0))
    foot_w = (BASE_FOOT[0] + base_dx, BASE_FOOT[1] + base_dy)          # base squashes about its feet
    place(cv, 'base', BASE_FOOT, foot_w, 0, 1, base_sx, base_sy)
    hole_w = world_of(BASE_PIVOT_HOLE, BASE_FOOT, foot_w, 0, 1, base_sx, base_sy)   # axle follows the squashed base
    if under: under(cv, hole_w, lambda deg, c=True, sl=0: draw_arm(cv, hole_w, deg, c, sl, 0))
    draw_arm(cv, hole_w, arm_deg, can, can_slide, can_dy)
    place(cv, 'cap', (136, 137), hole_w, 0, CAP_SC)
    # the two cords sit on top of everything: post knob -> arm rivet, post knob -> pivot hub
    for c, rl in zip((CORD_UP, CORD_LO), REST_LEN):
        a_w = world_of(c['post'], BASE_FOOT, foot_w, 0, 1, base_sx, base_sy)
        b_w = world_of(c['arm'], ARM_HOLE, hole_w, arm_deg, ARM_SC)
        _draw_cord(cv, a_w, b_w, rl, wobble)
    if extra: extra(cv)
    fr = cv.resize((FW, FH), Image.LANCZOS)
    muzzle_w = world_of((CAN_CENTER[0], CAN_CENTER[1] - MUZZLE_PUSH), ARM_HOLE, hole_w, arm_deg, ARM_SC)
    info = dict(foot=to_px(foot_w), muzzle=to_px(muzzle_w), hole=to_px(hole_w))
    return fr, info

if __name__ == '__main__':
    fr, info = render()
    bg = Image.new('RGBA', fr.size, (236, 228, 210, 255)); bg.alpha_composite(fr); bg.convert('RGB').save('test_idle.png'); print(info, fr.size)
