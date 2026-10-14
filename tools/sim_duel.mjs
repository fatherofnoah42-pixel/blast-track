// Equal-gold duels: one upgraded tower vs several base towers, on the classic map, same test wave.
// Usage: npm i playwright && node tools/sim_duel.mjs [kinds] [out.json]   (run from the repo root after build.sh)
import { chromium } from 'playwright';
import fs from 'fs';
const kinds = (process.argv[2] || 'dart,bomb,frost,tesla,sniper,gem').split(',');
const out = process.argv[3] || new URL('balance_sim.json', import.meta.url).pathname;
const b = await chromium.launch();
const results = [];
await Promise.all(kinds.map(async kind => {
  const p = await b.newPage({viewport:{width:420,height:900}});
  const errs = []; p.on('pageerror', e => errs.push(e.message)); await p.route(/fonts/, r => r.abort());
  await p.addInitScript(() => localStorage.setItem('bd-lang', 'zh'));
  await p.goto('file://' + new URL('../index.html', import.meta.url).pathname); await p.waitForTimeout(300);
  const r = await p.evaluate(async kind => {
    const B = window.__bd, q = s => document.querySelector(s), sleep = ms => new Promise(r => setTimeout(r, ms));
    q('[data-start]').click(); await sleep(100); q('[data-level="c1l1"]').click(); await sleep(100);
    while (B.S.state === 'story') { q('[data-story]').click(); await sleep(20); }
    for (let i = 0; i < 80 && B.S.state !== 'ready'; i++) await sleep(100);
    const S = B.S;
    const cov = B.PADS.map(([px, py]) => { let c = 0; for (const r of B.ROUTES) for (const g of r.seg) for (let u = 0; u < g.l; u += 5) { const x = g.x1 + (g.x2 - g.x1) * u / g.l, y = g.y1 + (g.y2 - g.y1) * u / g.l; if (Math.hypot(x - px, y - py) < 95) c++; } return c; });
    const order = B.PADS.map((_, i) => i).sort((a, b) => cov[b] - cov[a]);
    const cost = (k, p) => B.TOW[k].cost + [0, 1, 2].reduce((s, i) => s + B.PATHS[k][i].tiers.slice(0, p[i]).reduce((a, t) => a + t[1], 0), 0);
    async function trial(towers, hp, n){
      S.towers.length = 0; S.enemies.length = 0; S.shots.length = 0; S.drops.length = 0; S.delay.length = 0; S.fires.length = 0;
      towers.forEach(([k, p], j) => { const i = order[j], [x, y] = B.PADS[i]; const t = {pad:i, kind:k, p:p.slice(), x, y, cd:0, ang:0, recoil:0, spent:0, bRate:1, bDmg:1}; t.s = B.computeStats(t); S.towers.push(t); });
      S.cur = {affix:[], type:'normal'}; S.lives = 99999; S.state = 'wave'; S.spawnQ = []; S.wave = 1; S.speed = 4; S.frenzy = 0; S.combo = 0; S.frenzyNeed = 1e9;
      const refs = [];
      for (let k = 0; k < n; k++) { B.spawnEnemy(k % 6 === 5 ? 'arm' : 'norm', 0, false, k % 6 === 5 ? hp * 2.2 : hp, 0); refs.push(S.enemies.at(-1)); await sleep(500 / 4); }
      for (let g = 0; g < 400 && S.enemies.length; g++) await sleep(50);
      const tot = refs.reduce((s, e) => s + e.max, 0), done = refs.reduce((s, e) => s + Math.min(e.max, e.max - Math.max(0, e.hp)), 0);
      return +(done / tot).toFixed(3);
    }
    const base = B.TOW[kind].cost, rows = [];
    const HP = {dart:6, bomb:22, frost:12, tesla:16, sniper:12, gem:7}[kind];
    for (const n of [1, 2, 3, 4, 6]) rows.push({cfg:'base×' + n, cost: base * n, frac: await trial(Array.from({length:n}, () => [kind, [0,0,0]]), HP, 30)});
    for (let path = 0; path < 3; path++) for (const tier of [1, 2, 3, 4]) {
      const p = [0,0,0]; p[path] = tier; const c = cost(kind, p);
      rows.push({cfg:`p${path + 1}t${tier}`, path: path + 1, tier, cost: c, frac: await trial([[kind, p]], HP, 30)});
    }
    return {kind, base, HP, rows};
  }, kind);
  results.push(r); console.log(kind, 'done', errs.length ? errs[0] : '');
  await p.close();
}));
fs.writeFileSync(out, JSON.stringify(results, null, 1));
await b.close();
