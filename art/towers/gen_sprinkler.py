# 洒水器 (tower.frost): the head turns round and round; idle = slow turn with a few drips, fire = fast spin flinging a spiral of droplets.
# The painted nozzles are removed from the cut-out and the head (dome + two nozzles) is redrawn in code at any angle.
import math, os
import numpy as np
from PIL import Image, ImageDraw, ImageFilter
from cutout import cutout
from common import *

GAME_W = 46
PXU = 4.4
TEAL, TEAL_LO, TEAL_HI = (56, 137, 137, 255), (34, 88, 90, 255), (110, 190, 184, 255)
BRASS, BRASS_LO, BRASS_HI = (226, 160, 66, 255), (160, 100, 34, 255), (255, 214, 130, 255)
STEEL, STEEL_LO, STEEL_HI = (196, 200, 206, 255), (120, 124, 134, 255), (244, 246, 250, 255)
WATER, WATER_LO, WATER_HI = (130, 205, 248, 240), (40, 110, 175, 255), (240, 252, 255, 255)
# head geometry in cut-out px
C = (513, 98)          # dome centre = arm axis
K = 0.30               # how flat the ground plane looks (screen y per unit of depth)
DOME = (118, 84)
R_COLLAR, R_TUBE, R_TIP, TUBE_W = 98, 146, 262, 40

def water_cut(a, lum, sat):   # drop the painted splashes but keep the dark-blue hose (lower middle of the crop)
    H, W = lum.shape
    yy, xx = np.mgrid[0:H, 0:W]
    hose = (yy > 245) & (xx > 170) & (xx < 470)
    return (a[..., 2] - a[..., 1] > 22) & (a[..., 2] > 150) & (a[..., 0] > 85) & (lum > 140) & ~hose

def strip_head(cut):
    """remove the painted nozzles and dome; keep the brass band, neck and the nut for re-pasting"""
    a = np.array(cut); H, W = a.shape[:2]
    m = Image.new('L', (W, H), 0); d = ImageDraw.Draw(m)
    d.polygon([(250, 0), (410, 0), (410, 128), (250, 128)], fill=255)          # left nozzle
    d.polygon([(580, 70), (760, 70), (760, 178), (580, 178)], fill=255)        # right nozzle
    d.ellipse((C[0] - DOME[0] - 6, C[1] - DOME[1] - 6, C[0] + DOME[0] + 6, C[1] + DOME[1] + 6), fill=255)
    band = Image.new('L', (W, H), 0); ImageDraw.Draw(band).ellipse((420, 128, 618, 196), fill=255)
    nut = Image.new('L', (W, H), 0); ImageDraw.Draw(nut).polygon([(446, 20), (470, 2), (548, 2), (574, 20), (574, 62), (548, 76), (470, 76), (446, 62)], fill=255)
    mm = np.array(m) > 0
    keep = (np.array(band) > 0) & (np.arange(H)[:, None] > 136)
    body = a.copy(); body[..., 3] = np.where(mm & ~keep, 0, body[..., 3])
    band_img = a.copy(); band_img[..., 3] = np.where(np.array(band) > 0, band_img[..., 3], 0)
    nut_img = a.copy(); nut_img[..., 3] = np.where(np.array(nut) > 0, nut_img[..., 3], 0)
    return Image.fromarray(body), Image.fromarray(band_img), Image.fromarray(nut_img)

def P(ox, oy, r, th, z=0.0):
    return (ox + C[0] + r * math.cos(th), oy + C[1] + K * r * math.sin(th) - z)

def draw_dome(d, ox, oy):
    cx, cy = ox + C[0], oy + C[1]; rx, ry = DOME
    d.ellipse((cx - rx - 6, cy - ry - 6, cx + rx + 6, cy + ry + 6), fill=INK)
    d.ellipse((cx - rx, cy - ry, cx + rx, cy + ry), fill=TEAL_LO)
    d.ellipse((cx - rx + 8, cy - ry + 4, cx + rx - 24, cy + ry - 22), fill=TEAL)
    d.ellipse((cx - rx + 22, cy - ry + 14, cx - 6, cy + 4), fill=TEAL_HI)
    for (x, y, r) in ((-60, 30, 5), (40, 40, 4), (70, -10, 3), (-20, 55, 3)):          # rust specks
        d.ellipse((cx + x - r, cy + y - r, cx + x + r, cy + y + r), fill=(196, 120, 60, 255))

def draw_nozzle(d, ox, oy, th):
    s = math.sin(th)
    face = .25 + .75 * abs(s)                                       # how much of the round end we see
    def seg(r0, r1, w, col, lo, hi):
        a, b = P(ox, oy, r0, th), P(ox, oy, r1, th)
        dx, dy = b[0] - a[0], b[1] - a[1]; L = math.hypot(dx, dy) or 1; nx, ny = -dy / L, dx / L
        if ny > 0: nx, ny = -nx, -ny                                # n points up the screen
        quad = [(a[0] + nx * w, a[1] + ny * w), (b[0] + nx * w, b[1] + ny * w), (b[0] - nx * w, b[1] - ny * w), (a[0] - nx * w, a[1] - ny * w)]
        d.polygon(quad, fill=col, outline=None)
        d.polygon([quad[0], quad[1], (b[0] + nx * w * .25, b[1] + ny * w * .25), (a[0] + nx * w * .25, a[1] + ny * w * .25)], fill=hi)
        d.polygon([(a[0] - nx * w * .55, a[1] - ny * w * .55), (b[0] - nx * w * .55, b[1] - ny * w * .55), quad[2], quad[3]], fill=lo)
        d.line(quad[:2], fill=INK, width=6); d.line(quad[2:], fill=INK, width=6)
        return b, w
    def cap(p, w, col, hole=False):
        rx = w * face
        d.ellipse((p[0] - rx - 3, p[1] - w - 3, p[0] + rx + 3, p[1] + w + 3), fill=INK)
        d.ellipse((p[0] - rx, p[1] - w, p[0] + rx, p[1] + w), fill=col)
        if hole and face > .4: d.ellipse((p[0] - rx * .5, p[1] - w * .5, p[0] + rx * .5, p[1] + w * .5), fill=(40, 34, 36, 255))
    toward_tip_visible = math.cos(th) * 0 + 1
    seg(R_COLLAR - 20, R_COLLAR + 6, TUBE_W * .62, TEAL, TEAL_LO, TEAL_HI)
    b, w = seg(R_COLLAR, R_TUBE, TUBE_W * 1.05, BRASS, BRASS_LO, BRASS_HI)
    cap(b, TUBE_W * 1.05, BRASS)
    b, w = seg(R_TUBE, R_TIP, TUBE_W, STEEL, STEEL_LO, STEEL_HI)
    for rr in (R_TUBE + 32, R_TUBE + 62):                           # spray holes on the top of the tube
        h = P(ox, oy, rr, th); d.ellipse((h[0] - 7 * face - 2, h[1] - TUBE_W * .45 - 6, h[0] + 7 * face + 2, h[1] - TUBE_W * .45 + 6), fill=(40, 34, 36, 255))
    cap(b, TUBE_W, STEEL_HI if s > 0 else STEEL, hole=s > 0)

def head_layers(ox, oy, th):
    """return (behind, front) drawings for nozzle pair at angle th"""
    back = Image.new('RGBA', SIZE, (0, 0, 0, 0)); front = Image.new('RGBA', SIZE, (0, 0, 0, 0))
    for t in (th, th + math.pi):
        tgt = front if math.sin(t) > 0 else back
        draw_nozzle(ImageDraw.Draw(tgt), ox, oy, t)
    return back, front

def droplets_img(drops, ox, oy):
    lay = Image.new('RGBA', SIZE, (0, 0, 0, 0)); d = ImageDraw.Draw(lay)
    for (x, y, z, r, al) in drops:
        sx, sy = ox + C[0] + x, oy + C[1] + K * y - z
        a = int(255 * al)
        d.ellipse((sx - r - 3, sy - r - 3, sx + r + 3, sy + r + 3), fill=WATER_LO[:3] + (a,))
        d.ellipse((sx - r, sy - r, sx + r, sy + r), fill=WATER[:3] + (int(a * .95),))
        d.ellipse((sx - r * .55, sy - r * .6, sx - r * .05, sy - r * .1), fill=WATER_HI[:3] + (a,))
    return lay

SIZE = None
def build():
    global SIZE
    cut, _ = cutout(os.path.join(os.path.dirname(__file__), 'ref', 'sprinkler.png'), (15, 220, 960, 960), extra_remove=water_cut)
    body, band, nut = strip_head(cut)
    cw, ch = cut.size
    PADL, PADR, PADT, PADB = 260, 260, 280, 40
    W, H = cw + PADL + PADR, ch + PADT + PADB; SIZE = (W, H)
    ox, oy = PADL, PADT
    base = Image.new('RGBA', SIZE, (0, 0, 0, 0)); base.alpha_composite(body, (ox, oy))
    foot = (ox + cw * .52, oy + ch - 30)
    shadow = ground_shadow(SIZE, (foot[0], foot[1] - 10), cw * .5, 46)
    dome = Image.new('RGBA', SIZE, (0, 0, 0, 0)); draw_dome(ImageDraw.Draw(dome), ox, oy)
    dome.alpha_composite(shift(Image.new('RGBA', SIZE), 0, 0)); bandL = Image.new('RGBA', SIZE, (0, 0, 0, 0)); bandL.alpha_composite(band, (ox, oy))
    nutL = Image.new('RGBA', SIZE, (0, 0, 0, 0)); nutL.alpha_composite(nut, (ox, oy))

    def frame(th, drops=(), sy=1.0):
        f = Image.new('RGBA', SIZE, (0, 0, 0, 0)); f.alpha_composite(shadow)
        m = Image.new('RGBA', SIZE, (0, 0, 0, 0)); m.alpha_composite(base)
        back, front = head_layers(ox, oy, th)
        behind = [d_ for d_ in drops if d_[1] < 0]; ahead = [d_ for d_ in drops if d_[1] >= 0]
        m.alpha_composite(droplets_img(behind, ox, oy))
        m.alpha_composite(back); m.alpha_composite(dome); m.alpha_composite(bandL); m.alpha_composite(nutL); m.alpha_composite(front)
        if sy != 1: m = squash(m, 1 / math.sqrt(sy), sy, foot)
        f.alpha_composite(m); f.alpha_composite(droplets_img(ahead, ox, oy))
        return f

    TH0 = math.radians(25)
    frames, durs = [], []
    N = 8
    for i in range(N):                                         # idle: slow turn (two nozzles -> half a turn loops)
        th = TH0 + math.pi * i / N
        drops = []
        if i in (2, 3, 6, 7):                                  # a drip falling off each tip now and then
            age = (i % 4) - 2
            for t in (th - .25, th + math.pi - .25):
                drops.append((R_TIP * math.cos(t), R_TIP * math.sin(t), 10 - 45 * age, 12, 1.0))
        frames.append(frame(th, drops)); durs.append(120)
    N_IDLE = len(frames)
    # fire: fast spin, droplets thrown out of both nozzles, simulated frame by frame
    live = []; th = TH0; spin = math.radians(38); F = 10
    for i in range(F):
        if i < 7:
            for t in (th, th + math.pi):
                for j in range(3):
                    v = 44 + 12 * j; lag = .25 + .12 * j
                    live.append([R_TIP * math.cos(t), R_TIP * math.sin(t), 22.0, v * math.cos(t - lag), v * math.sin(t - lag), 12.0 + 7 * j, 20.0 - 3 * j])
        drops = []
        for p_ in live:
            p_[0] += p_[3]; p_[1] += p_[4]; p_[2] += p_[5]; p_[5] -= 7.5
            if p_[2] < -60: continue
            drops.append((p_[0], p_[1], p_[2], max(7, p_[6]), 1.0))
            p_[6] *= .94
        live = [p_ for p_ in live if p_[2] >= -60]
        frames.append(frame(th, drops, sy=.97 if i == 0 else 1.0)); durs.append(45)
        th += spin * (1.0 if i < 7 else .5)
    k = PXU * GAME_W / cw
    frames = down(frames, k); FW, FH = frames[0].size
    write_sheet('tower.frost', frames, durs, {'idle': (0, N_IDLE - 1), 'fire': (N_IDLE, len(frames) - 1), 'release': (N_IDLE + 1, N_IDLE + 1)},
                (foot[0] * k, foot[1] * k), muzzle=[((ox + C[0]) * k, (oy + C[1]) * k)] * len(frames))
    return {'tower.frost': {'w': round(FW / PXU, 1), 'h': round(FH / PXU, 1), 'frame': [FW, FH]}}, frames

if __name__ == '__main__':
    sz, frames = build(); print(sz)
    cols = 6; rows = math.ceil(len(frames) / cols)
    cs = Image.new('RGBA', (frames[0].width * cols, frames[0].height * rows), (236, 228, 210, 255))
    for i, f in enumerate(frames): cs.alpha_composite(f, ((i % cols) * f.width, (i // cols) * f.height))
    cs.convert('RGB').save('/home/claude/scratch/sprinkler_frames.png')
