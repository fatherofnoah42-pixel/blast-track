<script>
// ---------- PixiJS (WebGL) effects overlay ----------
// The game draws the map, units and UI with Canvas 2D into #cv exactly as before. PixiJS draws only the glow
// effects (flashes, sparks, shockwaves) into a transparent WebGL canvas stacked on top of #cv; the browser adds it
// onto the scene as light (CSS mix-blend-mode: plus-lighter). Nothing is copied between them, so the overlay costs almost nothing per frame.
// If PixiJS is missing, WebGL is unavailable or slow, the context is lost, or the URL has #canvas, the overlay stays off.
window.BTFX = (() => {
const FX = { on: false, why: '' };
const P = window.PIXI;
let app, world, glowLayer, srcCanvas = null, drawn = false;
let pw = 0, ph = 0, fieldScale = 1, fieldW = 360, fieldH = 600;
const TEX = {};
const live = [], pool = [];
const MAX = 520;
const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;

function hex(c, d = 0xffffff){
  if (typeof c !== 'string') return d;
  let m = c.match(/^#([0-9a-f]{6})$/i); if (m) return parseInt(m[1], 16);
  m = c.match(/^#([0-9a-f]{3})$/i); if (m) return parseInt(m[1].split('').map(x => x + x).join(''), 16);
  m = c.match(/rgba?\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)/i); if (m) return (+m[1] << 16) | (+m[2] << 8) | +m[3];
  return d;
}
const rnd = (a, b) => a + Math.random() * (b - a);

// procedural particle textures (white, tinted at runtime)
function mk(w, h, paint){ const c = document.createElement('canvas'); c.width = w; c.height = h; paint(c.getContext('2d'), w, h); return P.Texture.from(c); }
function makeTextures(){
  TEX.glow = mk(64, 64, (g, w) => { const r = g.createRadialGradient(w/2, w/2, 0, w/2, w/2, w/2); r.addColorStop(0, 'rgba(255,255,255,1)'); r.addColorStop(.25, 'rgba(255,255,255,.75)'); r.addColorStop(.6, 'rgba(255,255,255,.18)'); r.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = r; g.fillRect(0, 0, w, w); });
  TEX.spark = mk(48, 12, (g, w, h) => { const r = g.createLinearGradient(0, 0, w, 0); r.addColorStop(0, 'rgba(255,255,255,0)'); r.addColorStop(.7, 'rgba(255,255,255,.9)'); r.addColorStop(1, 'rgba(255,255,255,1)'); g.fillStyle = r; g.beginPath(); g.ellipse(w/2, h/2, w/2, h/2 - 1, 0, 0, Math.PI*2); g.fill(); });
  TEX.ring = mk(128, 128, (g, w) => { const r = g.createRadialGradient(w/2, w/2, w*.3, w/2, w/2, w/2); r.addColorStop(0, 'rgba(255,255,255,0)'); r.addColorStop(.72, 'rgba(255,255,255,.15)'); r.addColorStop(.86, 'rgba(255,255,255,1)'); r.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = r; g.fillRect(0, 0, w, w); });
}

// ---------- particles ----------
function spawn(layer, tex, o){
  if (live.length >= MAX) return null;
  let sp = pool.pop();
  if (!sp) sp = new P.Sprite(tex); else sp.texture = tex;
  sp.anchor.set(o.ax ?? .5, .5);
  sp.blendMode = o.add === false ? 'normal' : 'add';
  sp.tint = o.tint ?? 0xffffff; sp.alpha = o.a0 ?? 1; sp.rotation = o.rot || 0;
  sp.position.set(o.x, o.y); sp.visible = true;
  layer.addChild(sp);
  const p = Object.assign({ sp, vx: 0, vy: 0, life: .3, t: 0, s0: 1, s1: 1, sy: 1, a0: 1, a1: 0, drag: 0, grav: 0, ease: 1, layer }, o);
  p.max = p.life;
  live.push(p); return p;
}
function step(dt){
  for (let i = live.length - 1; i >= 0; i--) {
    const p = live[i];
    p.t += dt;
    const k = Math.min(1, p.t / p.max);
    if (k >= 1) { p.sp.visible = false; p.layer.removeChild(p.sp); pool.push(p.sp); live[i] = live[live.length - 1]; live.pop(); continue; }
    if (p.drag) { const f = Math.pow(1 - p.drag, dt * 60); p.vx *= f; p.vy *= f; }
    p.vy += p.grav * dt;
    p.sp.x += p.vx * dt; p.sp.y += p.vy * dt;
    const e = p.ease === 1 ? 1 - (1 - k) * (1 - k) : k;            // ease-out growth
    const s = p.s0 + (p.s1 - p.s0) * e;
    if (p.streak) { const v = Math.hypot(p.vx, p.vy); p.sp.rotation = Math.atan2(p.vy, p.vx); p.sp.scale.set(Math.max(.25, v / 260) * s, s * .9); }
    else p.sp.scale.set(s, s * p.sy);
    p.sp.alpha = p.a0 + (p.a1 - p.a0) * (p.fade === 'late' ? Math.max(0, (k - .45) / .55) : k);
  }
}

// ---------- public effects (field units: 360 × 600 portrait / 600 × 360 landscape) ----------
FX.boom = (x, y, rad, lv = 1, main = true, fire = false) => {
  if (!FX.on) return;
  // texture sizes: glow 64 (radius 32), ring 128 (radius ~55) — scales below map them onto the blast radius
  const big = main ? 1 + lv * .08 : .7, R = rad * big, hot = fire ? 0xff6a2a : 0xffb43a;
  spawn(glowLayer, TEX.glow, { x, y, tint: 0xfff0c8, s0: R * .2 / 32, s1: R * .55 / 32, a0: .85, life: .1 });               // white-hot core
  spawn(glowLayer, TEX.glow, { x, y, tint: hot, s0: R * .4 / 32, s1: R * 1.05 / 32, a0: .42, life: .3, fade: 'late' });      // coloured bloom
  spawn(glowLayer, TEX.ring, { x, y, tint: hot, s0: R * .15 / 55, s1: R / 55, a0: .7, life: main ? .28 : .2 });               // shockwave
  const n = main ? 10 + lv * 2 : 5;
  for (let i = 0; i < n; i++) {
    const a = Math.random() * Math.PI * 2, v = rnd(130, 300) * (main ? 1 : .7);
    spawn(glowLayer, TEX.spark, { x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v - 40, drag: .09, grav: 420, streak: true, tint: i % 3 ? hot : 0xfff2c0, s0: .32, s1: .2, a0: .95, life: rnd(.2, .4), ax: 1 });
  }
};
FX.impact = (x, y, col) => {
  if (!FX.on) return;
  const c = hex(col, 0xffcf5a);
  spawn(glowLayer, TEX.glow, { x, y, tint: 0xfff6dc, s0: .16, s1: .42, a0: .85, life: .1 });
  spawn(glowLayer, TEX.glow, { x, y, tint: c, s0: .25, s1: .7, a0: .5, life: .18 });
  for (let i = 0; i < 4; i++) { const a = Math.random() * Math.PI * 2, v = rnd(80, 170); spawn(glowLayer, TEX.spark, { x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v - 30, drag: .1, grav: 320, streak: true, tint: c, s0: .22, s1: .14, life: rnd(.12, .24), ax: 1 }); }
};
// the game's burst(x, y, col, n, spd): a flash sized by particle count plus coloured sparks
FX.flash = (x, y, col, n, spd = 120) => {
  if (!FX.on || n < 6) return;
  const c = hex(col, 0xffe27a), k = Math.max(.6, Math.min(3.4, n / 12));
  spawn(glowLayer, TEX.glow, { x, y, tint: 0xffffff, s0: .2 * k, s1: .6 * k, a0: .9, life: .1 });
  spawn(glowLayer, TEX.glow, { x, y, tint: c, s0: .35 * k, s1: 1.15 * k, a0: .7, life: .28, fade: 'late' });
  const m = Math.min(26, Math.round(n * .8));
  for (let i = 0; i < m; i++) {
    const a = Math.random() * Math.PI * 2, v = spd * rnd(.9, 2);
    spawn(glowLayer, TEX.spark, { x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v - spd * .3, drag: .08, grav: 380, streak: true, tint: i % 3 ? c : 0xffffff, s0: .34, s1: .2, a0: 1, life: rnd(.2, .42), ax: 1 });
  }
};
// the game's ring(x, y, R, col, life): a glowing shockwave of radius R
FX.ring = (x, y, R, col, life = .3) => {
  if (!FX.on || !(R > 0)) return;
  spawn(glowLayer, TEX.ring, { x, y, tint: hex(col, 0xffd84a), s0: R * .25 / 55, s1: R / 55, a0: .85, life: Math.min(.7, life * 1.15) });
};
FX.clear = () => {
  for (const p of live) { p.layer.removeChild(p.sp); pool.push(p.sp); } live.length = 0;
};
// watchdog: if WebGL turns out slow on this device during play, drop to Canvas 2D and remember it
let wdT = 0, wdN = 0, wdLast = 0;
FX.watch = (realDt, playing) => {
  const now = performance.now(), gap = wdLast ? (now - wdLast) / 1000 : 0; wdLast = now;
  if (!FX.on || FX.forced || !playing || FX.watched || gap > .5) return;   // gaps over 0.5 s are pauses/tab switches, not slowness
  wdT += gap; wdN++;
  if (wdT < 5) return;
  FX.watched = true; const fps = wdN / wdT;
  FX.fps = Math.round(fps);
  if (fps < 38) { try { localStorage.setItem('bd-renderer', 'auto-canvas'); } catch (e) {} FX.stop('slow WebGL on this device (' + Math.round(fps) + ' fps), using Canvas 2D'); }
};
FX.count = () => ({ particles: live.length });

// ---------- host ----------
FX.start = async (cv, field) => {
  // renderer switch for testing: ?r=canvas or #canvas (remembered on this device), ?r=webgl or #webgl to go back
  let pref = ''; try { pref = localStorage.getItem('bd-renderer') || ''; } catch (e) {}
  const want = location.search.match(/[?&]r=(canvas|webgl)\b/) || location.hash.match(/(?:#|-)(canvas|webgl)\b/);
  if (want) { pref = want[1]; try { localStorage.setItem('bd-renderer', pref); } catch (e) {} }
  if (pref === 'canvas') { FX.why = 'forced canvas'; return false; }
  if (pref === 'auto-canvas') { FX.why = 'slow WebGL on this device (#webgl to retry)'; return false; }
  FX.forced = pref === 'webgl';
  if (!P || !P.Application) { FX.why = 'PixiJS not loaded'; return false; }
  try {
    srcCanvas = cv; fieldW = field.W; fieldH = field.H;
    const el = document.createElement('canvas'); el.className = 'pxl'; el.setAttribute('aria-hidden', 'true');
    app = new P.Application();
    await app.init({ canvas: el, width: Math.max(1, cv.width), height: Math.max(1, cv.height), resolution: 1, autoDensity: false, antialias: false,
      autoStart: false, sharedTicker: false, preference: 'webgl', powerPreference: 'default', backgroundAlpha: 0, premultipliedAlpha: true, hello: false });
    if (app.ticker) app.ticker.stop();
    world = new P.Container(); glowLayer = new P.Container();
    world.addChild(glowLayer); app.stage.addChild(world);
    makeTextures();
    // the overlay is composited onto the game with CSS mix-blend-mode: plus-lighter (true additive light);
    // browsers without it fall back to normal layering, which is dimmer but still visible
    el.addEventListener('webglcontextlost', e => { e.preventDefault(); FX.stop('WebGL context lost'); });
    cv.after(el);
    FX.el = el; FX.app = app; FX.on = true; FX.why = 'webgl';
    return true;
  } catch (e) { FX.why = 'init failed: ' + (e && e.message || e); FX.stop(FX.why); return false; }
};
FX.stop = why => {
  FX.on = false; if (why) FX.why = why;
  if (FX.el) FX.el.remove();
  if (FX.onStop) FX.onStop(FX.why);
};
FX.resize = (w, h, sc) => {
  if (!FX.on) return;
  pw = w; ph = h; fieldScale = sc;
  app.renderer.resize(w, h); drawn = true;
};
// once per frame, after the Canvas 2D pass. dt = game time (0 while paused / hit-stop);
// sx, sy, z, rot = the same shake / punch-in the 2D pass used, so effects stay glued to the scene
FX.frame = (dt, sx, sy, z = 1, rot = 0) => {
  if (!FX.on) return;
  try {
    step(dt);
    if (!live.length && !drawn) return;                    // nothing on screen and already cleared: skip the GPU entirely
    drawn = live.length > 0;
    world.pivot.set(fieldW / 2, fieldH / 2);
    world.position.set((fieldW / 2 + sx) * fieldScale, (fieldH / 2 + sy) * fieldScale);
    world.scale.set(fieldScale * z); world.rotation = rot;
    app.renderer.render(app.stage);
  } catch (e) { FX.stop('render failed: ' + (e && e.message || e)); }
};
return FX;
})();
</script>
