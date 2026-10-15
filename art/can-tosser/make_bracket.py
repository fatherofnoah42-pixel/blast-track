# One-off helper: cuts the pivot bracket (teal arch + its outline) out of parts/base.png into parts/bracket.png.
# The rig redraws it over the rubber band so the band appears to pass behind the bracket.  Needs Pillow, numpy, scipy, matplotlib.
import os, numpy as np
from PIL import Image
from scipy import ndimage as ndi
import matplotlib.colors as mc
D = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'parts')
a = np.array(Image.open(f'{D}/base.png').convert('RGBA'))
hsv = mc.rgb_to_hsv(a[..., :3].astype(float) / 255); al = a[..., 3] > 20
teal = al & (hsv[..., 0] > .40) & (hsv[..., 0] < .62) & (hsv[..., 1] > .15) & (hsv[..., 2] > .22)
lab, _ = ndi.label(ndi.binary_closing(teal, iterations=2))
blob = lab == lab[130, 285]                                  # seed pixel inside the arch
dark = al & (hsv[..., 2] < .28)
mask = blob | (ndi.binary_dilation(blob, iterations=11) & dark)
mask = ndi.binary_fill_holes(ndi.binary_closing(mask, iterations=3)) & al
mask |= ndi.binary_dilation(mask, iterations=2) & dark       # make sure the black outline is fully included
a[..., 3] = np.where(mask, a[..., 3], 0)
Image.fromarray(a).save(f'{D}/bracket.png', optimize=True)
