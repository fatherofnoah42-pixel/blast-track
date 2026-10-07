import json, re
exec(open('trans.py').read())
cfg = json.load(open('cfg_default.json'))
for k in ['globalDesc', 'bossParams']: cfg.pop(k, None)
for c in cfg['cards']: c.pop('note', None)
for a in cfg.get('art', []): [a.pop(k, None) for k in ('kind', 'desc', 'prio')]
s = open('script.js').read()
s = re.sub(r'const DEFAULT_CFG = .*?;\n', lambda m: 'const DEFAULT_CFG = ' + json.dumps(cfg, ensure_ascii=False) + ';\n', s, count=1, flags=re.S)
en = {k: v[0] for k, v in T.items()}; fr = {k: v[1] for k, v in T.items()}
s = re.sub(r'const I18N = .*?;\n', lambda m: 'const I18N = ' + json.dumps({'zh': {}, 'en': en, 'fr': fr}, ensure_ascii=False) + ';\n', s, count=1, flags=re.S)
open('script.js', 'w').write(s)
# coverage check: every tr()/tf() literal must have en+fr
keys = set(re.findall(r"\btr\('([^']+)'\)", s)) | set(re.findall(r"\btf\('([^']+)'", s))
h = open('head.html').read(); keys |= set(re.findall(r'data-i18n(?:-aria)?="([^"]+)"', h))
miss = [k for k in keys if re.search(r'[一-鿿]', k) and k not in T]
print('missing translations:', miss)
