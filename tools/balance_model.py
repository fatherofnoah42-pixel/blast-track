# Estimated output of every device / path / tier, mirroring the game's effect syntax.
# Used by xlsx_build.py for the 「装置性价比」 sheet. Assumptions are listed in ASSUME and shown in the sheet.
import json, re

ASSUME = {
    'spacing': 26,      # px between runners in a dense wave
    'cover': 1.6,       # track length inside a tower's range ≈ cover × range
    'maxTargets': 8,    # cap on runners inside one range
    'chainCap': 12,
}
FUNC = {  # stats that do not add raw damage; shown as "功能" so the ratio is read with care
    'slow': '减速', 'slowDur': '减速', 'freeze': '冻结', 'stun': '眩晕', 'mark': '标记增伤', 'vulnSlow': '易伤', 'vulnFreeze': '易伤',
    'strip': '破甲', 'auraRate': '光环', 'auraDmg': '光环', 'gpw': '经济', 'hash': '挖矿', 'blockBonus': '挖矿', 'iceAge': '全场冻结',
    'globalDmg': '全局增伤', 'decap': '处决', 'exec25': '处决', 'shieldMul': '破盾', 'bossMul': '对 Boss', 'armor': '破甲',
    'bossSlowFull': '对 Boss', 'heat': None, 'inferno': '连锁爆燃'}

def parse(src):
    ops = []
    for st in re.split(r'[;；\n]', str(src or '')):
        st = st.strip()
        if not st: continue
        m = re.match(r'^([A-Za-z0-9]+)\s*(\+=|\*=|>=|=)\s*(-?\d*\.?\d+)$', st)
        ops.append((m.group(1), m.group(2), float(m.group(3))))
    return ops

def apply(s, ops):
    for k, op, v in ops:
        if op == '+=': s[k] = s.get(k, 0) + v
        elif op == '*=': s[k] = s.get(k, 0) * v
        elif op == '>=': s[k] = max(s.get(k, 0), v)
        else: s[k] = v

def base_stats(t, g):
    return {'dmg': t['dmg'], 'rate': t['rate'], 'range': t['range'], 'rad': t.get('rad') or 0, 'slow': t.get('slow') or 0, 'slowDur': t.get('slowDur'),
            'chain': t.get('chain') or 0, 'decay': t.get('decay'), 'multi': 1, 'crit': 0, 'critMul': g['critMul'], 'armor': t['armor'], 'bossMul': t['bossMul'],
            'starts': 1, 'shieldMul': 1, 'bombs': 1, 'hash': 1 if t['id'] == 'miner' else 0}

def eff(kind, s, g):
    A = ASSUME
    crit = 1 + (g['critBase'] + s.get('crit', 0)) * (s.get('critMul', g['critMul']) - 1)
    rng = min(s['range'], 400)
    N = max(1, min(A['maxTargets'], A['cover'] * rng / A['spacing']))
    rate = max(.05, s['rate'])
    if kind in ('dart', 'gem'):
        v = s['dmg'] * crit * min(s.get('multi', 1), N) / rate
        v *= 1 + s.get('execChance', 0) * 2
        return v
    if kind == 'bomb':
        hits = min(N, 1 + 2 * s['rad'] / A['spacing'])
        per = s['dmg'] * crit * hits * s.get('bombs', 1)
        per += s.get('shrapnel', 0) * .3 * s['dmg']
        if s.get('cluster'): per += s['cluster'] * 3 * g.get('clusterPct', .4) * s['dmg'] * max(1, hits * .55)
        if s.get('burnDur'): per += s['dmg'] * s.get('burnPct', 0) * s['burnDur'] * hits * s.get('bombs', 1)
        if s.get('firePatch'): per += g.get('firePatchDps', .5) * s['dmg'] * s['firePatch'] * hits * .6
        return per / rate
    if kind == 'frost':
        return s['dmg'] * crit * N / rate
    if kind == 'tesla':
        n = int(min(s['chain'], A['chainCap'], N + 4)); d = s.get('decay', 1) or 1
        chain = sum(d ** c for c in range(max(1, n)))
        over = 1 + (s['overMul'] - 1) / s['overN'] if s.get('overN') else 1
        return s['dmg'] * crit * chain * s.get('starts', 1) * over / rate + s.get('staticDps', 0) * N
    if kind == 'sniper':
        return s['dmg'] * crit * (1 + s.get('ricochet', 0) * g.get('ricochetPct', .5)) / rate
    if kind == 'miner':
        return s.get('heat', 0) * N
    return 0

def table(cfg):
    g = cfg['global']; out = []
    paths = {}
    for p in cfg['paths']: paths.setdefault(p['tower'], {})[p['path']] = p
    for t in cfg['towers']:
        k = t['id']; b = base_stats(t, g); e0 = eff(k, b, g); c0 = t['cost']
        out.append({'tower': k, 'path': 0, 'tier': 0, 'name': '基础', 'cost': c0, 'cum': c0, 'eff': e0, 'ratio': 1.0, 'marg': 1.0, 'func': ''})
        for pi in sorted(paths.get(k, {})):
            p = paths[k][pi]; s = dict(b); cum = c0; prev = e0
            for tr in sorted(p['tiers'], key=lambda x: x['tier']):
                ops = parse(tr['effect']); apply(s, ops); cum += tr['cost']
                e = eff(k, s, g)
                base_per = e0 / c0 if e0 else 0
                ratio = (e / cum) / base_per if base_per else None
                marg = ((e - prev) / tr['cost']) / base_per if base_per else None
                func = '、'.join(sorted({FUNC[o[0]] for o in ops if FUNC.get(o[0])}))
                out.append({'tower': k, 'path': pi, 'tier': tr['tier'], 'name': tr['name']['zh'], 'cost': tr['cost'], 'cum': cum, 'eff': e, 'ratio': ratio, 'marg': marg, 'func': func})
                prev = e
    return out

if __name__ == '__main__':
    cfg = json.load(open('cfg_default.json'))
    for r in table(cfg):
        print(f"{r['tower']:7}{r['path']}-{r['tier']} {r['name']:8} cum {r['cum']:5} eff {r['eff']:6.2f} ratio {r['ratio'] if r['ratio'] is None else round(r['ratio'],2)} marg {r['marg'] if r['marg'] is None else round(r['marg'],2)} {r['func']}")
