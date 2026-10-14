# 20-wave tables for chapter 1, written into script.js
import json, re, sys
AFX = ['swift', 'regen', 'shield', 'split']
LV = {
 # gold, n0, nk, armStart, armK, hpScale, specials {kind: (from, base, per)}, bosses {wave: (id, hp mult of normal hp)}
 'c1l1': dict(gold=250, n0=8,  nk=1.15, a0=7, ak=.45, hs=1.00, sp={}, boss={20:('yawn', 12)}),
 'c1l2': dict(gold=320, n0=9,  nk=1.25, a0=6, ak=.5,  hs=1.06, sp={}, boss={20:('king', 12)}),
 'c1l3': dict(gold=330, n0=10, nk=1.35, a0=5, ak=.55, hs=1.10, sp={}, boss={20:('gilg', 12)}),
 'c1l4': dict(gold=340, n0=10, nk=1.4,  a0=5, ak=.6,  hs=1.16, sp={'rain':(4, 2, .25), 'hop':(9, 2, .3)}, boss={20:('lucas', 13)}),
 'c1l5': dict(gold=420, n0=11, nk=1.45, a0=4, ak=.6,  hs=1.22, sp={'rain':(3, 2, .2), 'phones':(4, 2, .3), 'hop':(7, 2, .25), 'whale':(10, 1, .12)}, boss={10:('yawn', 8), 20:('pizza', 13)}),
 'c1l6': dict(gold=460, n0=12, nk=1.5,  a0=3, ak=.65, hs=1.30, sp={'rain':(2, 2, .25), 'hop':(3, 2, .25), 'phones':(5, 2, .25), 'whale':(8, 1, .15)}, boss={10:('shiti', 8), 20:('overflow', 12)}),
}
BEATS = {'c1l1':{3:6}, 'c1l2':{3:5}, 'c1l3':{3:5}, 'c1l4':{2:4, 3:6, 4:9}, 'c1l5':{2:4, 3:6, 4:10}, 'c1l6':{6:20}}
scale = json.loads(sys.argv[1]) if len(sys.argv) > 1 else {}
def rows(lid):
    p = LV[lid]; hs = p['hs'] * scale.get(lid, 1); out = []
    for w in range(1, 21):
        n = round(p['n0'] + p['nk'] * (w - 1))
        a = round((w - p['a0'] + 1) * p['ak']) + (1 if w >= p['a0'] else 0) if w >= p['a0'] else 0
        nh = round(2.4 * hs * (1 + .16 * (w - 1) + .009 * (w - 1) ** 2), 1)
        ah = round(nh * 2.3, 1)
        boss, bh = (None, 0)
        if w in p['boss']: bid, m = p['boss'][w]; boss, bh = bid, round(nh * m * 2.3)
        pool = AFX[:2] if lid == 'c1l1' else AFX[:3] if lid == 'c1l2' else AFX
        aff = [pool[((w - 8) // 3) % len(pool)]] if w >= 8 and w % 3 == 2 and w not in p['boss'] else []
        sp = {k: round(b + per * (w - f)) for k, (f, b, per) in p['sp'].items() if w >= f}
        r = [n, a, nh, ah, boss, bh, aff]
        if sp: r.append(sp)
        out.append(r)
    return out
s = open('script.js').read()
for lid, p in LV.items():
    i = s.index("id:'%s'" % lid); j = s.index('waves:', i); k = s.index('\n', j)
    s = s[:j] + 'waves:' + json.dumps(rows(lid), ensure_ascii=False, separators=(',', ':')).replace('"', "'") + ',' + s[k:]
    s = re.sub(r"(id:'%s'[^\n]*?gold:)\d+" % lid, lambda m: m.group(1) + str(p['gold']), s, count=1)
    if '--beats' in sys.argv:
        bi = s.index('beats:{', i); oi = s.index('outro:', bi); seg = s[bi:oi]
        seg = re.sub(r'(?<=[{\n ])(\d+):\[', lambda m: str(BEATS[lid].get(int(m.group(1)), int(m.group(1)))) + ':[', seg)
        s = s[:bi] + seg + s[oi:]
open('script.js', 'w').write(s)
print('ok')
