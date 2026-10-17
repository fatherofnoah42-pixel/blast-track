# 鞋盒无人机 (tower.sniper hovering over its spot, fx.drone for the delivery flight, shot.sniper = the dropped box).
import math, os
import numpy as np
from PIL import Image, ImageDraw, ImageFilter
from cutout import cutout
from common import *

GAME_W = 46
PXU = 4.4
# rotor discs in cut-out px: inner ellipse (cx, cy, rx, ry) and hub (x, y)
ROTORS = [((170, 140, 138, 44), (178, 133)), ((566, 44, 124, 34), (553, 33)), ((800, 224, 128, 40), (787, 208)), ((266, 330, 140, 44), (275, 313))]

def spin_rotors(img, ang, ox=0, oy=0):
    """replace the painted (static) blades with a translucent spinning disc, keeping hub and motor"""
    out = img.copy(); W, H = out.size
    a = np.array(out)
    m = Image.new('L', (W, H), 0); md = ImageDraw.Draw(m)
    for (cx, cy, rx, ry), _ in ROTORS: md.ellipse((ox + cx - rx, oy + cy - ry, ox + cx + rx, oy + cy + ry), fill=255)
    a[..., 3] = np.where(np.array(m) > 0, 0, a[..., 3]); out = Image.fromarray(a)
    lay = Image.new('RGBA', (W, H), (0, 0, 0, 0)); d = ImageDraw.Draw(lay)
    for (cx, cy, rx, ry), (hx, hy) in ROTORS:
        cx += ox; cy += oy; hx += ox; hy += oy
        d.ellipse((cx - rx, cy - ry, cx + rx, cy + ry), fill=(225, 236, 240, 95))
        for k in (0, 1):                                            # two blurred blades
            t = math.radians(ang + k * 180)
            ex, ey = cx + rx * .95 * math.cos(t), cy + ry * .95 * math.sin(t)
            for w, col in ((26, (40, 40, 46, 110)), (12, (245, 240, 230, 90))):
                d.line((hx, hy + 6, ex, ey), fill=col, width=w)
        d.arc((cx - rx * .92, cy - ry * .92, cx + rx * .92, cy + ry * .92), 0, 360, fill=(255, 255, 255, 120), width=5)
    lay = lay.filter(ImageFilter.GaussianBlur(3))
    out.alpha_composite(lay)
    hub = Image.new('L', (W, H), 0); hd = ImageDraw.Draw(hub)
    for _, (hx, hy) in ROTORS: hd.ellipse((ox + hx - 30, oy + hy - 22, ox + hx + 30, oy + hy + 46), fill=255)
    hubimg = Image.composite(img, Image.new('RGBA', (W, H), (0, 0, 0, 0)), hub)
    out.alpha_composite(hubimg)
    return out

def build():
    cut, _ = cutout(os.path.join(os.path.dirname(__file__), 'ref', 'drone.png'), (20, 200, 990, 960))
    cw, ch = cut.size
    HOVER = 120
    PAD = 30
    W, H = cw + 2 * PAD, ch + HOVER + 2 * PAD + 30
    ground = (PAD + cw * .52, H - PAD - 10)
    frames, durs, fly = [], [], []
    for i in range(8):
        t = i / 8 * 2 * math.pi; bob = 10 * math.sin(t)
        body = Image.new('RGBA', (W, H), (0, 0, 0, 0)); body.alpha_composite(cut, (PAD, PAD + int(bob)))
        body = spin_rotors(body, i * 47, PAD, PAD + int(bob))
        f = Image.new('RGBA', (W, H), (0, 0, 0, 0))
        f.alpha_composite(ground_shadow((W, H), ground, cw * (.40 - .015 * math.sin(t)), 34, 85))
        f.alpha_composite(body); frames.append(f); durs.append(90)
        fl = Image.new('RGBA', (cw + 2 * PAD, ch + 2 * PAD), (0, 0, 0, 0)); fl.alpha_composite(cut, (PAD, PAD)); fly.append(spin_rotors(fl, i * 47, PAD, PAD))
    k = PXU * GAME_W / cw
    frames = down(frames, k); fly = down(fly, k)
    FW, FH = frames[0].size
    write_sheet('tower.sniper', frames, durs, {'idle': (0, len(frames) - 1)}, (ground[0] * k, ground[1] * k))
    write_sheet('fx.drone', fly, [70] * len(fly), {'fly': (0, len(fly) - 1)}, (fly[0].width / 2, fly[0].height * .55))
    sizes = {'tower.sniper': {'w': round(FW / PXU, 1), 'h': round(FH / PXU, 1), 'frame': [FW, FH]},
             'fx.drone': {'w': round(fly[0].width / PXU, 1), 'h': round(fly[0].height / PXU, 1), 'frame': list(fly[0].size)}}
    # ---- the parcel it drops ----
    box, _ = cutout(os.path.join(os.path.dirname(__file__), 'ref', 'drone.png'), (1150, 760, 1470, 990))   # the 空投挂载 inset
    a = np.array(box); a[:44, :, 3] = 0; a[:58, 168:, 3] = 0; a[:58, :88, 3] = 0; box = Image.fromarray(a)                                               # drop the drone's floor plate
    box = box.crop(box.getbbox()); box = box.resize((round(box.width * .82), round(box.height * .82)), Image.LANCZOS)
    SW = int(max(box.size) * 1.9)
    def on(img, sx=1, sy=1, rot=0, alpha=1.0):
        c = Image.new('RGBA', (SW, SW), (0, 0, 0, 0))
        im = img.resize((max(1, round(img.width * sx)), max(1, round(img.height * sy))), Image.LANCZOS).rotate(rot, expand=True, resample=Image.BICUBIC)
        if alpha < 1: a = np.array(im); a[..., 3] = (a[..., 3] * alpha).astype(np.uint8); im = Image.fromarray(a)
        c.alpha_composite(im, (round(SW / 2 - im.width / 2), round(SW * .78 - im.height))); return c
    sf, sd = [], []
    for r in (0, 3, 0, -3): sf.append(on(box, rot=r)); sd.append(90)
    import random; rnd = random.Random(2)
    for i, (sx, sy, al) in enumerate(((1.08, .9, 1), (1.18, .78, 1), (1.12, .86, .8), (1.05, .95, .5), (1.0, 1.0, .25))):
        f = on(box, sx, sy, 0, al); d = ImageDraw.Draw(f)
        for j in range(10):                                         # dust puffs + cardboard bits
            a_ = j / 10 * math.pi + rnd.uniform(-.2, .2); rr = (40 + i * 38) * (SW / 400)
            x, y = SW / 2 + math.cos(a_) * rr * 1.4, SW * .78 - math.sin(a_) * rr * .5
            s = (16 - i * 2.5) * (SW / 400)
            if s > 1: d.ellipse((x - s, y - s, x + s, y + s), fill=(214, 196, 168, int(220 * (1 - i / 5))), outline=(40, 30, 24, int(200 * (1 - i / 5))), width=max(1, int(3 * SW / 400)))
        sf.append(f); sd.append(60)
    ks = PXU * GAME_W / cw
    sf = down(sf, ks); S2 = sf[0].width
    write_sheet('shot.sniper', sf, sd, {'fly': (0, 3), 'hit': (4, 8)}, (S2 / 2, S2 * .78))
    sizes['shot.sniper'] = {'w': round(S2 / PXU, 1), 'h': round(S2 / PXU, 1), 'frame': [S2, S2]}
    return sizes, frames + fly + sf

if __name__ == '__main__':
    sz, fr = build(); print(sz)
    W = max(f.width for f in fr); H = max(f.height for f in fr)
    cs = Image.new('RGBA', (W * 8, H * 3), (236, 228, 210, 255))
    for i, f in enumerate(fr[:8]): cs.alpha_composite(f, (i * W, 0))
    for i, f in enumerate(fr[8:16]): cs.alpha_composite(f, (i * W, H))
    for i, f in enumerate(fr[16:]): cs.alpha_composite(f, (i * W, 2 * H))
    cs.convert('RGB').save('/home/claude/scratch/drone_frames.png')
