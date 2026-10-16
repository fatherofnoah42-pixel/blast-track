# Hand-drawn (in code) ammo for the Can Tosser's upgrades: spiked steel can, grenade, meteor boulder.
# Each returns (RGBA image, anchor) where anchor is the item's middle, the point that sits at rig.CAN_CENTER in the scoop.
import math, random
import numpy as np
from PIL import Image, ImageDraw, ImageFilter
import rig
import variants as V

INK = (24, 17, 14, 255)
SS = 2

def _down(img): return img.resize((img.width // SS, img.height // SS), Image.LANCZOS)

def _ol_poly(d, pts, fill, w):
    d.polygon(pts, fill=fill); d.line(pts + [pts[0]], fill=INK, width=w, joint='curve')

def spiked_can():
    """Steel can with identical cone spikes rooted on both sides and identical studs on the face."""
    can = V.steel(V.BASE_CAN, (.62, .66, .78), .02)
    PAD = 46
    W, H = (can.width + 2 * PAD) * SS, (can.height + 8) * SS
    im = Image.new('RGBA', (W, H), (0, 0, 0, 0)); d = ImageDraw.Draw(im)
    def P(x, y): return ((x + PAD) * SS, (y + 4) * SS)
    L, R = 1, 280                                  # can body silhouette (x) from y 100 to 370
    for y in (150, 235, 320):                      # side spikes, rooted 10 px inside the body so they visibly attach
        for side in (-1, 1):
            ex = L if side < 0 else R
            base_in = ex - side * 10
            tip = (ex + side * 40, y)
            pts = [P(base_in, y - 22), P(*tip), P(base_in, y + 22)]
            _ol_poly(d, pts, (150, 158, 174, 255), 7 * SS // 2)
            d.polygon([P(base_in, y - 22), P(*tip), P(base_in, y)], fill=(196, 202, 214, 255))
    can_big = can.resize((can.width * SS, can.height * SS), Image.LANCZOS)
    im.alpha_composite(can_big, (PAD * SS, 4 * SS))
    d = ImageDraw.Draw(im)
    for y in (128, 352):                           # riveted bands
        d.rectangle([P(L + 2, y - 8), P(R - 2, y + 8)], fill=(96, 102, 118, 255)); d.line([P(L + 2, y - 8), P(R - 2, y - 8)], fill=INK, width=3 * SS); d.line([P(L + 2, y + 8), P(R - 2, y + 8)], fill=INK, width=3 * SS)
        for x in (30, 95, 141, 187, 252):
            cx, cy = P(x, y); r = 5 * SS; d.ellipse((cx - r, cy - r, cx + r, cy + r), fill=(215, 220, 230, 255), outline=INK, width=SS * 2)
    for y in (190, 290):                           # face studs: same size everywhere, narrower toward the edges (the can is round)
        for x, sx in ((62, .62), (141, 1.0), (220, .62)):
            cx, cy = P(x, y); rx, ry = 17 * SS * sx, 17 * SS
            d.ellipse((cx - rx - 3 * SS, cy - ry - 3 * SS, cx + rx + 3 * SS, cy + ry + 3 * SS), fill=INK)
            d.ellipse((cx - rx, cy - ry, cx + rx, cy + ry), fill=(140, 148, 164, 255))
            d.polygon([(cx - rx * .75, cy + ry * .1), (cx, cy - ry * .85), (cx + rx * .2, cy + ry * .15)], fill=(220, 226, 236, 255))
            d.ellipse((cx - 3 * SS, cy - 3 * SS, cx + 3 * SS, cy + 3 * SS), fill=(250, 252, 255, 255))
    return _down(im), (141 + PAD, 215 + 4)

def grenade():
    W, H = 300, 440
    im = Image.new('RGBA', (W * SS, H * SS), (0, 0, 0, 0)); d = ImageDraw.Draw(im)
    def s(*v): return tuple(x * SS for x in v)
    cx, cy, rx, ry = 150, 272, 122, 148
    OW = 8 * SS
    # spoon lever (behind the body's right edge) and body
    d.ellipse(s(cx - rx, cy - ry, cx + rx, cy + ry), fill=INK)
    d.ellipse(s(cx - rx + 8, cy - ry + 8, cx + rx - 8, cy + ry - 8), fill=(70, 90, 44, 255))
    d.ellipse(s(cx - rx + 14, cy - ry + 12, cx + rx - 30, cy + ry - 34), fill=(104, 130, 62, 255))
    d.ellipse(s(cx - 78, cy - 112, cx - 10, cy - 30), fill=(146, 172, 96, 255))
    # pineapple grooves
    for dy in (-74, -8, 58):
        k = math.sqrt(max(0, 1 - (dy / ry) ** 2)); hw = rx * k - 10
        d.arc(s(cx - hw, cy + dy - 22, cx + hw, cy + dy + 22), 10, 170, fill=(44, 58, 26, 255), width=6 * SS)
    for dx in (-62, 0, 62):
        k = math.sqrt(max(0, 1 - (dx / rx) ** 2)); hh = ry * k - 14
        d.arc(s(cx + dx - 26, cy - hh, cx + dx + 26, cy + hh), 100 if dx >= 0 else 80, 260 if dx >= 0 else 280, fill=(44, 58, 26, 255), width=6 * SS) if dx else d.line(s(cx, cy - hh, cx, cy + hh), fill=(44, 58, 26, 255), width=6 * SS)
    # bumps highlights
    for bx, by in ((-92, -40), (-30, -40), (-92, 26), (-30, 26), (32, -40), (32, 26), (-60, 90), (0, 90)):
        d.ellipse(s(cx + bx + 6, cy + by - 2, cx + bx + 22, cy + by + 10), fill=(150, 176, 104, 160))
    # fuze neck + cap
    for box, col in (((116, 104, 184, 138), (150, 158, 172, 255)), ((104, 78, 196, 108), (178, 186, 198, 255))):
        d.rounded_rectangle(s(*box), radius=6 * SS, fill=col, outline=INK, width=OW)
    d.rectangle(s(110, 82, 128, 104), fill=(222, 228, 236, 255))
    # spoon lever down the right side
    lever = [(190, 84), (214, 90), (262, 150), (276, 236), (256, 238), (244, 160), (192, 106)]
    d.polygon(s(*sum(lever, ())), fill=(186, 192, 204, 255)); d.line([s(*p) for p in lever + [lever[0]]], fill=INK, width=OW, joint='curve')
    # pull ring + pin
    d.line(s(108, 92, 76, 96), fill=INK, width=12 * SS); d.line(s(108, 92, 76, 96), fill=(200, 205, 215, 255), width=5 * SS)
    d.ellipse(s(26, 66, 86, 126), outline=INK, width=16 * SS); d.ellipse(s(31, 71, 81, 121), outline=(236, 196, 72, 255), width=6 * SS)
    return _down(im), (150, 272)

def meteor(seed=7, R=150, cracks=5):
    rnd = random.Random(seed)
    C = R + 30; W = 2 * C
    im = Image.new('RGBA', (W * SS, W * SS), (0, 0, 0, 0)); d = ImageDraw.Draw(im)
    n = 22; ph = [rnd.uniform(0, 6.28) for _ in range(3)]
    def rad(a): return R * (1 + .06 * math.sin(3 * a + ph[0]) + .05 * math.sin(5 * a + ph[1]) + .03 * math.sin(7 * a + ph[2]))
    ring = lambda k, dx=0, dy=0, sx=1, sy=.95: [((C + dx + (rad(a) - k) * sx * math.cos(a)) * SS, (C + dy + (rad(a) - k) * sy * math.sin(a)) * SS) for a in np.linspace(0, 2 * math.pi, n, endpoint=False)]
    pts = ring(0)
    d.polygon(pts, fill=INK)
    d.polygon(ring(9), fill=(52, 40, 44, 255))                         # shadow side
    d.polygon(ring(26, -14, -16, .92, .86), fill=(84, 66, 66, 255))     # mid tone
    d.polygon(ring(62, -40, -48, .72, .6), fill=(122, 98, 90, 255))     # lit top-left
    d.polygon(ring(110, -62, -74, .45, .34), fill=(160, 134, 116, 255)) # highlight
    # heated underside: orange rim light on the lower right
    hot = Image.new('RGBA', im.size, (0, 0, 0, 0)); hd = ImageDraw.Draw(hot)
    hd.polygon(ring(10, 18, 22, 1, .95), fill=(255, 110, 30, 255))
    hd.polygon(ring(30, 2, 2, 1, .95), fill=(0, 0, 0, 0))
    hot = hot.filter(ImageFilter.GaussianBlur(5 * SS))
    # craters
    for (x, y, r) in [(-55, 30, 30), (50, -45, 22), (10, 72, 18), (-70, -60, 15), (78, 40, 13)]:
        x, y = C + x * R / 150, C + y * R / 150; r = r * R / 150
        d.ellipse(((x - r - 3) * SS, (y - r * .8 - 3) * SS, (x + r + 3) * SS, (y + r * .8 + 3) * SS), fill=(30, 22, 24, 255))
        d.ellipse(((x - r) * SS, (y - r * .8) * SS, (x + r) * SS, (y + r * .8) * SS), fill=(44, 34, 36, 255))
        d.arc(((x - r) * SS, (y - r * .8) * SS, (x + r) * SS, (y + r * .8) * SS), 20, 160, fill=(176, 150, 128, 255), width=5 * SS)
    # glowing lava cracks (branching)
    paths = []
    for k in range(cracks):
        a = k * 6.28 / cracks + rnd.uniform(-.6, .6); r = rnd.uniform(.15, .42) * R; a0 = rnd.uniform(0, 6.28); p = [(C + r * math.cos(a0), C + r * math.sin(a0))]
        for _ in range(7):
            a += rnd.uniform(-.55, .55); step = rnd.uniform(.13, .19) * R
            q = (p[-1][0] + step * math.cos(a), p[-1][1] + step * math.sin(a))
            if math.hypot(q[0] - C, (q[1] - C) / .95) > R - 14: break
            p.append(q)
        paths.append([(x * SS, y * SS) for x, y in p])
        if len(p) > 3:
            j = rnd.randrange(1, len(p) - 1); b = a + rnd.choice((-1, 1)) * 1.1; q = p[j]; br = [q]
            for _ in range(3):
                q = (q[0] + .14 * R * math.cos(b), q[1] + .14 * R * math.sin(b))
                if math.hypot(q[0] - C, (q[1] - C) / .95) > R - 14: break
                br.append(q); b += rnd.uniform(-.5, .5)
            if len(br) > 1: paths.append([(x * SS, y * SS) for x, y in br])
    glow = Image.new('RGBA', im.size, (0, 0, 0, 0)); gd = ImageDraw.Draw(glow)
    for p in paths: gd.line(p, fill=(255, 90, 10, 255), width=30 * SS, joint='curve')
    im.alpha_composite(glow.filter(ImageFilter.GaussianBlur(9 * SS)))
    im.alpha_composite(hot)
    d = ImageDraw.Draw(im)
    for p in paths: d.line(p, fill=(30, 14, 12, 255), width=17 * SS, joint='curve')
    for p in paths: d.line(p, fill=(255, 100, 20, 255), width=12 * SS, joint='curve')
    for p in paths: d.line(p, fill=(255, 200, 70, 255), width=6 * SS, joint='curve')
    for p in paths: d.line(p, fill=(255, 250, 200, 255), width=2 * SS, joint='curve')
    m = Image.new('L', im.size, 0); ImageDraw.Draw(m).polygon(pts, fill=255)
    a = np.array(im); a[..., 3] = np.minimum(a[..., 3], np.array(m)); im = Image.fromarray(a)
    ol = Image.new('RGBA', im.size, (0, 0, 0, 0)); ImageDraw.Draw(ol).line(pts + [pts[0]], fill=INK, width=9 * SS, joint='curve')
    im.alpha_composite(ol)
    return _down(im), (C, C)

def put(base, item, anchor, scale, centers):
    """paste scaled copies of item with their anchor at each centre (base-image px)"""
    it = item.resize((max(1, round(item.width * scale)), max(1, round(item.height * scale))), Image.LANCZOS)
    for cx, cy in centers:
        base.alpha_composite(it, (round(cx - anchor[0] * scale), round(cy - anchor[1] * scale)))

def restock_crate(base, item, anchor, scale, centers, glow=None):
    """Replace the three spare cans painted in base.png with copies of the item (same look as the one in the scoop)."""
    b0 = base.copy(); b = base.copy()
    strip = b0.crop((184, 200, 444, 222)).resize((260, 64), Image.LANCZOS)          # crate-face wood above the cans, stretched down
    b.paste(strip, (184, 200))
    d = ImageDraw.Draw(b)
    for y in range(262, 338):                                                       # dark slot the spares stand in
        t = (y - 262) / 76; d.line((184, y, 444, y), fill=(int(70 - 30 * t), int(42 - 18 * t), int(24 - 10 * t), 255))
    d.line((184, 262, 444, 262), fill=INK, width=3)
    if glow:
        g = Image.new('RGBA', b.size, (0, 0, 0, 0)); gd = ImageDraw.Draw(g)
        for cx, cy in centers: gd.ellipse((cx - 60, cy - 60, cx + 60, cy + 60), fill=glow + (150,))
        b.alpha_composite(g.filter(ImageFilter.GaussianBlur(18)))
    if isinstance(item, list):
        for (im, an, sc), c in zip(item, centers): put(b, im, an, sc, [c])
    else: put(b, item, anchor, scale, centers)
    # board + slot posts back in front
    m = Image.new('L', b.size, 0); md = ImageDraw.Draw(m)
    md.rectangle((148, 336, 474, 415), fill=255); md.rectangle((148, 252, 185, 340), fill=255); md.rectangle((443, 252, 474, 340), fill=255)
    a0 = np.array(b0); keep = (np.array(m) > 0) & (a0[..., 3] > 0)
    out = np.array(b); out[keep] = a0[keep]
    return Image.fromarray(out)
