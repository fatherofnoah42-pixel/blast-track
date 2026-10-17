# Build-menu icons (icon.tower.<kind>.png) from the tower art in ../
#   python3 make_icons.py        (needs Pillow)
# Each icon is the tower's first idle frame as a "sticker": white outline + navy rim + soft shadow, 128 × 128.
# The Chill Spot and the Miner have no tower art yet; their icons are assembled from the sprinkler's platform and the
# speaker's cabinet, with a sofa / a ₿ coin and fan painted on top, so the whole set shares one look.
import json, os
from PIL import Image, ImageDraw, ImageFilter, ImageChops

HERE = os.path.dirname(os.path.abspath(__file__)); ART = os.path.join(HERE, '..')
SIZE, PAD = 128, 9
INK = (59, 42, 30, 255); NAVY = (14, 42, 74, 255)

def frame(key, tag='idle', idx=0):
    im = Image.open(os.path.join(ART, key + '.png')).convert('RGBA')
    jp = os.path.join(ART, key + '.json')
    if not os.path.exists(jp): return im.crop(im.getbbox())
    j = json.load(open(jp)); fr = j['frames']; fr = list(fr.values()) if isinstance(fr, dict) else fr
    tags = {t['name']: t for t in j['meta'].get('frameTags', [])}
    f = fr[(tags[tag]['from'] if tag in tags else 0) + idx]['frame']
    c = im.crop((f['x'], f['y'], f['x'] + f['w'], f['y'] + f['h']))
    return c.crop(c.getbbox())

def no_shadow(im):
    """drop the soft ground shadow painted under some sprites (semi-transparent dark pixels)"""
    px = im.load(); w, h = im.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            if a < 200 and max(r, g, b) < 110: px[x, y] = (0, 0, 0, 0)
    return im.crop(im.getbbox())

def sticker(sprite):
    S = 4; big = SIZE * S
    sp = sprite.copy(); box = big - 2 * PAD * S
    k = min(box / sp.width, box / sp.height); sp = sp.resize((max(1, round(sp.width * k)), max(1, round(sp.height * k))), Image.LANCZOS)
    layer = Image.new('RGBA', (big, big)); ox, oy = (big - sp.width) // 2, (big - sp.height) // 2; layer.alpha_composite(sp, (ox, oy))
    a = layer.getchannel('A').point(lambda v: 255 if v > 40 else 0)
    white = a.filter(ImageFilter.MaxFilter(4 * S + 1)).filter(ImageFilter.GaussianBlur(S * .6)).point(lambda v: 255 if v > 110 else 0)
    rim = white.filter(ImageFilter.MaxFilter(2 * S + 1)).filter(ImageFilter.GaussianBlur(S * .5)).point(lambda v: 255 if v > 110 else 0)
    shadow = rim.filter(ImageFilter.GaussianBlur(S * 2.5))
    out = Image.new('RGBA', (big, big))
    sh = Image.new('RGBA', (big, big), (8, 24, 48, 0)); sh.putalpha(shadow.point(lambda v: v * .45)); out.alpha_composite(sh, (0, 3 * S))
    out.alpha_composite(Image.composite(Image.new('RGBA', (big, big), NAVY), Image.new('RGBA', (big, big)), rim))
    out.alpha_composite(Image.composite(Image.new('RGBA', (big, big), (255, 255, 255, 255)), Image.new('RGBA', (big, big)), white))
    out.alpha_composite(layer)
    return out.resize((SIZE, SIZE), Image.LANCZOS)

# ---------- painted add-ons (drawn at 4× then scaled down, so the edges stay soft) ----------
def grad_ellipse(d, box, top, bot, steps=24):
    x0, y0, x1, y1 = box
    for i in range(steps):
        t = i / (steps - 1); c = tuple(round(top[j] + (bot[j] - top[j]) * t) for j in range(3)) + (255,)
        yy = y0 + (y1 - y0) * t * .55
        d.ellipse((x0 + (x1 - x0) * t * .12, yy, x1 - (x1 - x0) * t * .12, y1 - (y1 - y0) * (1 - t) * .05), fill=c)

def rrect(d, box, r, fill, w=10):
    d.rounded_rectangle(box, r, fill=fill, outline=INK, width=w)

def miner():
    base = frame('tower.tesla').copy(); S = 4
    W, H = base.size; im = base.resize((W * S, H * S), Image.LANCZOS); d = ImageDraw.Draw(im)
    # big cone -> a ₿ coin
    cx, cy, r = 106.5 * S, 111 * S, 31 * S
    d.ellipse((cx - r, cy - r, cx + r, cy + r), fill=(180, 92, 10, 255), outline=INK, width=10)
    r2 = r - 7 * S; d.ellipse((cx - r2, cy - r2, cx + r2, cy + r2), fill=(247, 147, 26, 255))
    d.ellipse((cx - r2 + 6 * S, cy - r2 + 4 * S, cx + r2 - 14 * S, cy - 2 * S), fill=(255, 196, 92, 255))
    # the ₿ sign: two bowls + a spine + the ticks
    lw = 5 * S; x0, y0, y1 = cx - 9 * S, cy - 14 * S, cy + 14 * S
    for (a, b) in ((y0, cy + 1 * S), (cy - 1 * S, y1)):
        d.rounded_rectangle((x0, a, cx + (9 if a == y0 else 11) * S, b), 7 * S, outline=(255, 255, 255, 255), width=lw)
    d.line((x0 + lw // 2, y0, x0 + lw // 2, y1), fill=(255, 255, 255, 255), width=lw)
    for xx in (cx - 4 * S, cx + 2 * S):
        d.line((xx, y0 - 5 * S, xx, y0 + 2 * S), fill=(255, 255, 255, 255), width=3 * S); d.line((xx, y1 - 2 * S, xx, y1 + 5 * S), fill=(255, 255, 255, 255), width=3 * S)
    # tweeter -> a cooling fan
    fx, fy, fr = 106.5 * S, 67.5 * S, 13 * S
    d.ellipse((fx - fr, fy - fr, fx + fr, fy + fr), fill=(46, 48, 58, 255), outline=INK, width=8)
    import math
    for k in range(5):
        a0 = k * 2 * math.pi / 5; pts = [(fx, fy)] + [(fx + math.cos(a0 + t) * (fr - 3 * S), fy + math.sin(a0 + t) * (fr - 3 * S)) for t in (0, .35, .7)]
        d.polygon(pts, fill=(150, 160, 178, 255))
    d.ellipse((fx - 3.5 * S, fy - 3.5 * S, fx + 3.5 * S, fy + 3.5 * S), fill=(230, 232, 238, 255), outline=INK, width=4)
    # music badge -> a small panel with status LEDs
    d.rounded_rectangle((68 * S, 59 * S, 94 * S, 79 * S), 3 * S, fill=(58, 122, 124, 255), outline=INK, width=6)
    for i, col in enumerate(((0, 255, 156, 255), (247, 147, 26, 255))):
        x = 72 * S + i * 11 * S; d.rounded_rectangle((x, 65 * S, x + 7 * S, 72 * S), 2 * S, fill=col, outline=INK, width=4)
    return im.resize((W, H), Image.LANCZOS)

def chill():
    base = frame('tower.frost').copy(); S = 4
    W, H = base.size; im = base.resize((W * S, H * S), Image.LANCZOS)
    # wipe the sprinkler head, tank and valve: keep the platform (lower part)
    cut = Image.new('L', im.size, 0); ImageDraw.Draw(cut).polygon([(0, 0), (W * S, 0), (W * S, 70 * S), (150 * S, 78 * S), (60 * S, 80 * S), (0, 70 * S)], fill=255)
    im.putalpha(ImageChops.subtract(im.getchannel('A'), cut))
    d = ImageDraw.Draw(im)
    # sofa (orange, like the Chill Spot's colour) seen at the same three-quarter angle as the platform
    ORG, ORG_D, ORG_L, CREAM, CREAM_D = (255, 140, 52, 255), (196, 88, 30, 255), (255, 190, 120, 255), (255, 236, 200, 255), (226, 190, 140, 255)
    w = 14
    rrect(d, (40 * S, 14 * S, 176 * S, 70 * S), 16 * S, ORG_D, w)            # back rest
    rrect(d, (44 * S, 16 * S, 172 * S, 50 * S), 14 * S, ORG, w)              # back cushion face
    d.rounded_rectangle((54 * S, 20 * S, 162 * S, 28 * S), 4 * S, fill=ORG_L)  # highlight
    d.line((108 * S, 20 * S, 108 * S, 48 * S), fill=ORG_D, width=6)           # cushion split
    rrect(d, (50 * S, 52 * S, 166 * S, 86 * S), 12 * S, CREAM_D, w)          # seat
    rrect(d, (54 * S, 50 * S, 162 * S, 72 * S), 10 * S, CREAM, w)            # seat cushion top
    d.line((108 * S, 52 * S, 108 * S, 70 * S), fill=CREAM_D, width=6)
    for x0 in (26, 158):                                                       # arms
        rrect(d, (x0 * S, 38 * S, (x0 + 32) * S, 92 * S), 12 * S, ORG_D, w)
        rrect(d, (x0 * S, 36 * S, (x0 + 32) * S, 56 * S), 10 * S, ORG, w)
        d.rounded_rectangle(((x0 + 6) * S, 40 * S, (x0 + 26) * S, 45 * S), 3 * S, fill=ORG_L)
    for x0 in (36, 170):                                                       # feet
        rrect(d, (x0 * S, 90 * S, (x0 + 12) * S, 100 * S), 3 * S, (90, 60, 40, 255), 8)
    # a drink with a straw on the right arm, steam from a snack box on the left
    rrect(d, (164 * S, 18 * S, 180 * S, 38 * S), 4 * S, (95, 200, 240, 255), 8)
    d.line((176 * S, 6 * S, 172 * S, 20 * S), fill=(230, 60, 80, 255), width=12)
    rrect(d, (28 * S, 22 * S, 50 * S, 38 * S), 4 * S, (230, 70, 60, 255), 8)
    d.rectangle((28 * S + 6, 22 * S + 6, 50 * S - 6, 27 * S), fill=(255, 210, 63, 255))
    return im.resize((W, H), Image.LANCZOS)

SOURCES = {
    'dart': lambda: frame('tower.dart'), 'bomb': lambda: frame('tower.bomb'), 'frost': lambda: frame('tower.frost'),
    'truck': lambda: frame('tower.truck'), 'sniper': lambda: no_shadow(frame('tower.sniper')), 'tesla': lambda: frame('tower.tesla'),
    'lure': chill, 'miner': miner,
}
if __name__ == '__main__':
    for k, fn in SOURCES.items():
        sticker(no_shadow(fn())).save(os.path.join(ART, f'icon.tower.{k}.png'), optimize=True); print('icon.tower.' + k)
