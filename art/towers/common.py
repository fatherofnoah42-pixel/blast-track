# Shared helpers for the tower sprite generators: Aseprite-style sheet + JSON writer, squash/stretch, soft paste.
import json, math, os
import numpy as np
from PIL import Image, ImageDraw, ImageFilter

INK = (24, 17, 14, 255)
ART = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')

def write_sheet(key, frames, durs, tags, pivot, muzzle=None, cols=5, out=ART):
    """frames: equal-size RGBA images. tags: {'idle': (a, b), 'fire': (a, b), 'release': (i, i)}. pivot/muzzle in frame px."""
    FW, FH = frames[0].size; rows = math.ceil(len(frames) / cols)
    sheet = Image.new('RGBA', (min(cols, len(frames)) * FW, rows * FH), (0, 0, 0, 0)); jf = []
    for i, fr in enumerate(frames):
        x, y = (i % cols) * FW, (i // cols) * FH; sheet.paste(fr, (x, y))
        jf.append({'filename': f'{key} {i}.aseprite', 'frame': {'x': x, 'y': y, 'w': FW, 'h': FH}, 'rotated': False, 'trimmed': False,
                   'spriteSourceSize': {'x': 0, 'y': 0, 'w': FW, 'h': FH}, 'sourceSize': {'w': FW, 'h': FH}, 'duration': durs[i]})
    slices = [{'name': 'pivot', 'color': '#0000ffff', 'keys': [{'frame': 0, 'bounds': {'x': round(pivot[0]) - 4, 'y': round(pivot[1]) - 4, 'w': 8, 'h': 8}}]}]
    if muzzle:
        slices.append({'name': 'muzzle', 'color': '#ff0000ff', 'keys': [{'frame': i, 'bounds': {'x': round(m[0]) - 4, 'y': round(m[1]) - 4, 'w': 8, 'h': 8}} for i, m in enumerate(muzzle)]})
    meta = {'app': 'art/towers', 'version': '1', 'image': f'{key}.png', 'format': 'RGBA8888', 'size': {'w': sheet.width, 'h': sheet.height}, 'scale': '1',
            'frameTags': [{'name': n, 'from': a, 'to': b, 'direction': 'forward'} for n, (a, b) in tags.items()], 'slices': slices}
    sheet.save(os.path.join(out, f'{key}.png'), optimize=True)
    json.dump({'frames': jf, 'meta': meta}, open(os.path.join(out, f'{key}.json'), 'w'), indent=1)
    return sheet

def squash(img, sx, sy, anchor):
    """scale img about anchor (x, y) keeping the canvas size"""
    W, H = img.size; ax, ay = anchor
    return img.transform((W, H), Image.AFFINE, (1 / sx, 0, ax - ax / sx, 0, 1 / sy, ay - ay / sy), resample=Image.BICUBIC)

def shift(img, dx, dy):
    W, H = img.size
    return img.transform((W, H), Image.AFFINE, (1, 0, -dx, 0, 1, -dy), resample=Image.BICUBIC)

def rotate_about(img, deg, c):
    return img.rotate(deg, resample=Image.BICUBIC, center=c)

def radial_scale(img, c, r, k, feather=6):
    """scale the disc of radius r around c by k (speaker cone pulse), blended back with a soft edge"""
    W, H = img.size
    sc = squash(img, k, k, c)
    m = Image.new('L', (W, H), 0); ImageDraw.Draw(m).ellipse((c[0] - r, c[1] - r, c[0] + r, c[1] + r), fill=255)
    m = m.filter(ImageFilter.GaussianBlur(feather))
    out = img.copy(); out.paste(sc, (0, 0), m)
    return out

def ground_shadow(size, c, rx, ry, alpha=70):
    lay = Image.new('RGBA', size, (0, 0, 0, 0)); d = ImageDraw.Draw(lay)
    d.ellipse((c[0] - rx, c[1] - ry, c[0] + rx, c[1] + ry), fill=(30, 40, 20, alpha))
    return lay.filter(ImageFilter.GaussianBlur(ry * .35))

def down(frames, k):
    return [f.resize((round(f.width * k), round(f.height * k)), Image.LANCZOS) for f in frames]
