# Builds the sprite sheets for the speaker, sprinkler, shoebox drone and banana tosser into art/, and art/towers/sizes.json
# (in-game widths, read by tools/cfg_build.py).   Run:  python3 gen_towers.py
import json, os, sys
HERE = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, HERE)
import gen_speaker, gen_sprinkler, gen_drone, gen_banana
sizes = {}
for m in (gen_speaker, gen_sprinkler, gen_drone, gen_banana):
    r = m.build(); sizes.update(r[0]); print(m.__name__, list(r[0]))
json.dump(sizes, open(os.path.join(HERE, 'sizes.json'), 'w'), indent=1)
