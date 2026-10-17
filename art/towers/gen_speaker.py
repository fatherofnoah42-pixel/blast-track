# 广场舞音响 (tower.tesla): cut from the concept sheet, mirrored to face right; idle = gentle bounce + cone pulse, fire = bass thump.
import math, os, sys
import numpy as np
from PIL import Image, ImageDraw, ImageFont, ImageOps
from cutout import cutout
from common import *

GAME_W = 40          # in-game width of the speaker body
PXU = 4.4            # sheet pixels per game unit
NOTE_FONT = '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'

def build():
    cut, _ = cutout(os.path.join(os.path.dirname(__file__), 'ref', 'speaker.png'), (40, 125, 880, 1000))
    cut = ImageOps.mirror(cut); cw, ch = cut.size                      # woofer now faces right
    PADL, PADR, PADT, PADB = 60, 380, 240, 30
    W, H = cw + PADL + PADR, ch + PADT + PADB
    base = Image.new('RGBA', (W, H), (0, 0, 0, 0)); base.alpha_composite(cut, (PADL, PADT))
    woofer = (PADL + cw - 322, PADT + 488); CONE_R = 118
    foot = (PADL + cw * .5, PADT + ch - 34)
    shadow = ground_shadow((W, H), (foot[0], foot[1] + 4), cw * .46, 40)

    def note(d, x, y, s, col, ch_='♪'):
        f = ImageFont.truetype(NOTE_FONT, s)
        d.text((x, y), ch_, font=f, fill=col, stroke_width=max(3, s // 12), stroke_fill=(30, 22, 18, 255), anchor='mm')

    def rings(img, phase, alpha=1.0):
        lay = Image.new('RGBA', (W, H), (0, 0, 0, 0)); d = ImageDraw.Draw(lay)
        for k, col in enumerate(((255, 143, 208), (255, 207, 58))):
            p = phase - k * .22
            if p < 0 or p > 1: continue
            r = 165 + p * 210; a = int(235 * (1 - p) ** 1.3 * alpha)
            box = (woofer[0] - r * .86, woofer[1] - r, woofer[0] + r * .86, woofer[1] + r)
            d.ellipse(box, outline=(30, 22, 18, int(a * .8)), width=24); d.ellipse((box[0] + 4, box[1] + 4, box[2] - 4, box[3] - 4), outline=col + (a,), width=14)
        img.alpha_composite(lay)

    def frame(sy=1.0, cone=1.0, ring=None, notes=(), dy=0):
        f = Image.new('RGBA', (W, H), (0, 0, 0, 0)); f.alpha_composite(shadow)
        body = radial_scale(base, woofer, CONE_R, cone, feather=5)
        body = squash(body, 1 / math.sqrt(sy), sy, foot)
        if dy: body = shift(body, 0, dy)
        f.alpha_composite(body)
        if ring is not None: rings(f, ring)
        d = ImageDraw.Draw(f)
        for (x, y, s, col, c_) in notes: note(d, x, y, s, col, c_)
        return f

    frames, durs = [], []
    for i in range(6):                                   # idle: sway to the beat
        t = i / 6 * 2 * math.pi
        frames.append(frame(sy=1 - .012 * (1 + math.sin(t)), cone=1 + .035 * max(0, math.sin(t)))); durs.append(120)
    N_IDLE = len(frames)
    nx, ny = woofer[0] + 300, woofer[1] - 300
    FIRE = [  # ms, sy, cone, ring phase, notes [(dx, dy, size, colour, glyph)]
        (45, .93, .95, None, []),
        (40, 1.07, 1.16, .0, [(0, 40, 126, (255, 90, 70, 255), '♪')]),
        (45, 1.03, 1.08, .3, [(20, 0, 147, (255, 90, 70, 255), '♪'), (-90, 90, 108, (255, 200, 50, 255), '♫')]),
        (50, .98, 1.03, .6, [(40, -40, 154, (255, 90, 70, 230), '♪'), (-80, 50, 126, (255, 200, 50, 255), '♫'), (60, 140, 100, (90, 170, 255, 255), '♪')]),
        (55, 1.01, 1.0, .9, [(60, -80, 151, (255, 90, 70, 150), '♪'), (-70, 10, 129, (255, 200, 50, 190), '♫'), (90, 110, 108, (90, 170, 255, 220), '♪')]),
        (60, 1.0, 1.0, None, [(-60, -30, 126, (255, 200, 50, 110), '♫'), (110, 80, 108, (90, 170, 255, 130), '♪')]),
    ]
    for ms, sy, cone, ph, ns in FIRE:
        frames.append(frame(sy, cone, ph, [(nx + a, ny + b, s, c, g) for a, b, s, c, g in ns])); durs.append(ms)
    k = PXU * GAME_W / cw
    frames = down(frames, k)
    FW, FH = frames[0].size
    pv = (foot[0] * k, foot[1] * k)
    write_sheet('tower.tesla', frames, durs, {'idle': (0, N_IDLE - 1), 'fire': (N_IDLE, len(frames) - 1), 'release': (N_IDLE + 1, N_IDLE + 1)},
                pv, muzzle=[(woofer[0] * k, woofer[1] * k)] * len(frames))
    return {'tower.tesla': {'w': round(FW / PXU, 1), 'h': round(FH / PXU, 1), 'frame': [FW, FH]}}, frames

if __name__ == '__main__':
    sz, frames = build(); print(sz)
    cs = Image.new('RGBA', (frames[0].width * len(frames), frames[0].height), (236, 228, 210, 255))
    for i, f in enumerate(frames): cs.alpha_composite(f, (i * f.width, 0))
    cs.convert('RGB').save('/home/claude/scratch/speaker_frames.png')
