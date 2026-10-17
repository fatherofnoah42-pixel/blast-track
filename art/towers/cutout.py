# Cut a concept-sheet illustration out of its cream background -> RGBA with a clean alpha edge.
import numpy as np
from PIL import Image, ImageFilter
from scipy import ndimage as ndi

def cutout(path, box, bg=None, lum_min=165, sat_max=0.22, enclosed_tol=8, enclosed_min=1500, keep="largest", extra_remove=None):
    im = Image.open(path).convert('RGB').crop(box)
    a = np.asarray(im).astype(np.float32)
    if bg is None: bg = np.median(np.concatenate([a[0], a[-1], a[:, 0], a[:, -1]]), axis=0)
    mx, mn = a.max(-1), a.min(-1); lum = a @ np.array([.3, .59, .11]); sat = (mx - mn) / (mx + 1e-6)
    bgish = (lum > lum_min) & (sat < sat_max)
    lab, n = ndi.label(bgish)
    border = set(np.unique(np.concatenate([lab[0], lab[-1], lab[:, 0], lab[:, -1]]))) - {0}
    bgmask = np.isin(lab, list(border))
    # enclosed background pockets (inside handles etc.): nearly exactly the paper colour
    close = np.linalg.norm(a - bg, axis=-1) < enclosed_tol
    lab2, n2 = ndi.label(close & ~bgmask)
    if n2:
        sizes = ndi.sum(np.ones_like(lab2), lab2, range(1, n2 + 1))
        for i, s in enumerate(sizes, 1):
            if s > enclosed_min: bgmask |= lab2 == i
    fg = ~bgmask
    if extra_remove is not None: fg &= ~extra_remove(a, lum, sat)
    fg = ndi.binary_opening(fg, iterations=1)
    lab3, n3 = ndi.label(fg)
    if n3 and keep == 'largest':
        sizes = ndi.sum(np.ones_like(lab3), lab3, range(1, n3 + 1)); fg = lab3 == (1 + int(np.argmax(sizes)))
    elif n3 and isinstance(keep, int):
        sizes = ndi.sum(np.ones_like(lab3), lab3, range(1, n3 + 1)); fg = np.isin(lab3, [i + 1 for i, s in enumerate(sizes) if s >= keep])
    fg = ndi.binary_fill_holes(fg) if keep == 'largest' and False else fg
    # soft edge: choke 1px, then feather
    core = ndi.binary_erosion(fg, iterations=1)
    alpha = Image.fromarray((core * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(0.7))
    out = im.convert('RGBA'); out.putalpha(alpha)
    bb = out.getbbox(); return out.crop(bb), (box[0] + bb[0], box[1] + bb[1])
