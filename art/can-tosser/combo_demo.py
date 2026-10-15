# Demo of the composition rule: look = main path (highest tier, >=3) + a small socket module for the secondary path (tier 1-2).
import path1 as P1, variants as V, os
from variants import *
def sec_flag(level):
    def fx(pen, arm):
        pen.line((470, 160), (470, 60), (90, 60, 40, 255), 5, 2)                      # pole on the crate's rear corner
        pen.poly([(472, 62), (540, 76), (472, 96)], (225, 55, 45, 255), 3)             # pennant (secondary path 3: weak-point marking)
        if level >= 2:
            pen.ell((500, 79), 11, 11, (247, 240, 222, 255), 2); pen.ell((500, 79), 4, 4, (225, 55, 45, 255), 0)
    return fx
def sec_pips(pen, arm, n=2):
    for i in range(n): pen.ell((255 + i * 18, 336), 5, 5, (90, 190, 255, 255), 2)
main = dict(P1.specs[4])                          # main path 1 tier 5 look
combo = dict(main); combo['fx'] = list(main['fx']) + [sec_flag(2), sec_pips]
os.makedirs(V.OUT, exist_ok=True)
fa = V.render_tier(main); fb = V.render_tier(combo)
S = Image.new('RGBA', (fa.width * 2, fa.height + 40), (244, 236, 218, 255)); d = ImageDraw.Draw(S)
f = ImageFont.truetype('/usr/share/fonts/opentype/noto/NotoSerifCJK-Bold.ttc', 17)
d.text((12, 8), '主路线 T5（无副路线）', fill=(40, 30, 24), font=f); d.text((fa.width + 12, 8), '主路线 T5 + 副路线 T2（旗杆挂件 + 蓝色副路线圆点）', fill=(40, 30, 24), font=f)
S.alpha_composite(fa, (0, 40)); S.alpha_composite(fb, (fa.width, 40)); S.convert('RGB').save(os.path.join(V.OUT, 'combo_demo.png'))
