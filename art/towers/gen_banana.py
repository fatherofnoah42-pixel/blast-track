# 香蕉皮投手 (tower.bomb + shot.bomb + fx.peel): the Can Tosser's catapult rig loaded with banana peels,
# spare peels in a wicker basket in the crate and a banana badge on the front board.
import os, sys, json
import numpy as np
from PIL import Image, ImageDraw, ImageOps
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(HERE, '..', 'can-tosser'))
import rig, items as IT, tiers as T
import gen_can_anim as G
from cutout import cutout
from common import write_sheet

PEEL, _ = cutout(os.path.join(HERE, 'ref', 'banana.png'), (1110, 750, 1510, 975))
PEEL_ANCHOR = (PEEL.width / 2, PEEL.height * .55)
INK = (24, 17, 14, 255)

def basket(base):
    b = base.copy(); d = ImageDraw.Draw(b)
    x0, x1, y0, y1 = 186, 442, 308, 340
    d.rounded_rectangle((x0, y0, x1, y1), radius=8, fill=(176, 116, 52, 255), outline=INK, width=4)
    d.rounded_rectangle((x0 + 4, y0 + 4, x1 - 4, y0 + 12), radius=4, fill=(214, 156, 84, 255))
    for x in range(x0 + 10, x1 - 4, 16):                           # weave
        d.line((x, y0 + 14, x, y1 - 4), fill=(120, 74, 30, 255), width=3)
    for y in range(y0 + 18, y1 - 2, 9):
        for x in range(x0 + 10 + (8 if (y // 9) % 2 else 0), x1 - 10, 16):
            d.line((x, y, x + 8, y), fill=(222, 166, 92, 255), width=4)
    badge = PEEL.resize((72, round(72 * PEEL.height / PEEL.width)), Image.LANCZOS)   # banana badge on the board
    b.alpha_composite(badge, (310 - badge.width // 2, 372 - badge.height // 2))
    return b

class BananaVariant:
    def __init__(self, levels=None):
        self.base = basket(IT.restock_crate(T.ORIG['base'], PEEL, PEEL_ANCHOR, .33, [(236, 282), (393, 284), (314, 272)]))
        rig.P['base'] = self.base; rig.P['can'] = PEEL; rig.CAN_ANCHOR = PEEL_ANCHOR; rig.CAN_SC = .5; rig.REST_LEN = rig._rest_lengths()
        self.item_img, self.item_anchor = PEEL, PEEL_ANCHOR
    def pose(self, arm=-34, can=True, slide=0, wobble=0.0, base_dx=0, base_sx=1, base_sy=1, can_dy=0, smear=None):
        return rig.render(arm_deg=arm, can=can, can_slide=slide - 34, can_dy=can_dy, wobble=wobble, base_dx=base_dx, base_sx=base_sx, base_sy=base_sy,
                          extra=(lambda cv: smear(cv)) if smear else None)
    def close(self):
        for k in ('base', 'arm', 'cap', 'can'): rig.P[k] = T.ORIG[k]
        rig.CAN_ANCHOR = (141, 215); rig.CAN_SC = T.BASE_CAN_SC; rig.REST_LEN = rig._rest_lengths()

def build(out=os.path.join(HERE, '..')):
    G.OUT = out
    T.Variant = BananaVariant
    sz, (img, anchor, csc), frames = G.build_tower('tower.bomb', None)
    ssz, sframes = G.build_shot('shot.bomb', img, anchor, csc)
    # peel lying on the track (static)
    k = G.DOWN * 0.5 * G.GAME_W_PER_PX / 18 * PEEL.width   # not used; size set by game w
    fx = PEEL.resize((96, round(96 * PEEL.height / PEEL.width)), Image.LANCZOS)
    c = Image.new('RGBA', (100, 100), (0, 0, 0, 0)); c.alpha_composite(fx, (2, 50 - fx.height // 2)); c.save(os.path.join(out, 'fx.peel.png'), optimize=True)
    return {'tower.bomb': sz, 'shot.bomb': ssz, 'fx.peel': {'w': 18, 'h': 18, 'frame': [100, 100], 'static': True}}, frames, sframes

if __name__ == '__main__':
    sz, frames, sframes = build(); print(sz)
    W = max(f.width for f in frames); H = max(f.height for f in frames)
    cs = Image.new('RGBA', (W * 8, H + sframes[0].height), (236, 228, 210, 255))
    for c, i in enumerate((0, 4, 6, 8, 9, 11, 12, 14)): cs.alpha_composite(frames[i], (c * W, 0))
    for i, f in enumerate(sframes): cs.alpha_composite(f, (i * f.width, H))
    cs.convert('RGB').save('/home/claude/scratch/banana_frames.png')
