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
    'slow': '减速', 'slowDur': '减速', 'frostStack': '减速', 'freeze': '冻结', 'iceNova': '全场冻结', 'noFreeze': '减速', 'stun': '眩晕', 'slip': '滑倒',
    'mark': '标记', 'markPct': '标记增伤', 'markPull': '集火', 'focus': '集火', 'heavyFirst': '优先重型', 'keepStreak': '连击',
    'vulnSlow': '易伤', 'vulnFreeze': '易伤', 'strip': '破甲', 'auraRate': '光环', 'auraDmg': '光环', 'gpw': '经济', 'hash': '挖矿', 'blockBonus': '挖矿',
    'globalDmg': '全局增伤', 'shieldMul': '破盾', 'bossMul': '对 Boss', 'armor': '破甲', 'heavyMul': '对重型', 'knock': '击退', 'slideBack': '击退',
    'peelLife': '布阵', 'peelMax': '布阵', 'autoPeel': '布阵', 'stock': '布阵', 'aimR': '投递区', 'homing': '必中', 'segment': '布阵',
    'supply': '补给', 'supplyN': '补给', 'hq': '补给', 'hop': '传播', 'dizzyDur': '发懵', 'wormCap': '耳虫', 'wormLock': '耳虫',
    'cap': '停留', 'stay': '停留', 'seats': '停留', 'cleanse': '净化', 'lureHeavy': '停留', 'launch': '净化', 'noSwift': '净化', 'heat': None, 'patrol': '活动范围', 'drive': '车速'}

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
    s = {'dmg': t['dmg'], 'rate': t['rate'], 'range': t['range'], 'rad': t.get('rad') or 0, 'slow': t.get('slow') or 0, 'slowDur': t.get('slowDur'),
         'chain': t.get('chain') or 0, 'decay': t.get('decay'), 'multi': 1, 'crit': 0, 'critMul': g['critMul'], 'armor': t['armor'], 'bossMul': t['bossMul'],
         'starts': 1, 'shieldMul': 1, 'bombs': 1, 'hash': 1 if t['id'] == 'miner' else 0, 'shots': 1, 'hitCap': 3, 'slip': .5, 'peelMax': 3, 'peelLife': 8,
         'spread': 14, 'frostNeed': 4, 'freezeCap': 99, 'aimR': 46, 'load': 1, 'hop': g.get('teslaHop', 70), 'dizzyDur': 1.6, 'cap': 2, 'stay': 1, 'patrol': 0, 'drive': 0}
    apply(s, parse(t.get('extra', '')))
    return s

def eff(kind, s, g):
    A = ASSUME
    crit = 1 + (g['critBase'] + s.get('crit', 0)) * (s.get('critMul', g['critMul']) - 1)
    rng = min(s['range'], 400)
    N = max(1, min(A['maxTargets'], A['cover'] * rng / A['spacing']))
    rate = max(.05, s['rate'])
    if kind == 'dart':
        v = s['dmg'] * crit * s.get('shots', 1) / rate
        if s.get('streak'): v *= 1 + s['streak'] * s.get('streakMax', 3) * (.5 + .5 * s.get('keepStreak', 0))
        if s.get('storm'): v *= 16 / s['storm']
        return v
    if kind == 'bomb':
        hits = min(s.get('hitCap', 3), 1 + 2 * s['rad'] / A['spacing'])
        per = s['dmg'] * crit * hits + (s.get('slideDmg', 0) * hits) + min(s.get('bowl', 0), 6) * (s.get('slideDmg', 0) or s['dmg'] * .5)
        n = s.get('carpet') or s.get('bombs', 1)
        return per * n / rate
    if kind == 'frost':
        # the truck drives to the runners: its spray covers about range + half its patrol of track
        rng = min(s['range'] + .5 * s.get('patrol', 0), 400); N = max(1, min(A['maxTargets'], A['cover'] * rng / A['spacing']))
        n = min(6, rng / A['spacing']) if s.get('beam') else N
        return s['dmg'] * crit * n / rate
    if kind == 'tesla':
        n = int(min(s['chain'], A['chainCap'], N + 4)); d = s.get('decay', 1) or 1
        chain = sum(d ** c for c in range(max(1, n)))
        v = s['dmg'] * crit * chain * (1 + s.get('reso', 0) * 1.5) / rate
        if s.get('burst'): v += s['dmg'] * s['burst'] * min(s.get('notes', 0), 4) * min(n, 6) / (4 * rate)
        if s.get('worm'): v += s['worm'] * min(s.get('wormCap', 99), n)
        return v
    if kind == 'sniper':
        if s.get('hq'): return 0
        return s['dmg'] * crit * s.get('load', 1) * (1 + .6 * max(0, min(3, 1 + 2 * s['rad'] / A['spacing']) - 1)) / rate
    if kind == 'lure':
        return s.get('spicy', 0) * s.get('cap', 2) * (s.get('stay', 1) + 2) / rate
    if kind == 'miner':
        return s.get('heat', 0) * N
    return 0

def table(cfg):
    g = cfg['global']; out = []
    paths = {}
    for p in cfg['paths']: paths.setdefault(p['tower'], {})[p['path']] = p
    for t in cfg['towers']:
        k = t['id']; b = base_stats(t, g); e0 = eff(k, b, g) or 1e-9; c0 = t['cost']
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
