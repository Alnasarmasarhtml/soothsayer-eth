/* ==============================================================
   $SOOTH · CASE FILE 599
   boot · breaking ticker · red string cursor · counters ·
   reveals · ambient drone
   ============================================================== */

(() => {

const CONFIG = {
  ca: 'CA · pending publication',
  links: {
    x: '#', tg: '#', dex: '#', dext: '#', uni: '#', chart: '#'
  }
};

// apply links
['sx','stg','sdex','sdext','uniswapBig','chartBig'].forEach(id => {
  const el = document.getElementById(id);
  if (!el) return;
  if (id === 'sx') el.href = CONFIG.links.x;
  if (id === 'stg') el.href = CONFIG.links.tg;
  if (id === 'sdex') el.href = CONFIG.links.dex;
  if (id === 'sdext') el.href = CONFIG.links.dext;
  if (id === 'uniswapBig') el.href = CONFIG.links.uni;
  if (id === 'chartBig') el.href = CONFIG.links.chart;
});
document.querySelectorAll('#caValue, #caValueBig').forEach(el => { if (el) el.textContent = CONFIG.ca; });

// ============ BOOT TERMINAL ============
const bootStream = document.getElementById('bootStream');
const bootEnter = document.getElementById('bootEnter');
const bootEl = document.getElementById('boot');

const BOOT_LINES = [
  { t: '> case file 599 · classified · decrypting...', d: 220, cls: 'glow' },
  { t: '> source: x.com/iamasoothsayer/status/1535494638391664641', d: 200, cls: 'dim' },
  { t: '> verifying edit history...', d: 280 },
  { t: '> grok in-thread: <span class="hot">UNEDITED SINCE 2022</span>', d: 600, raw: true },
  { t: '', d: 100 },
  { t: '> retrieving artifact...', d: 200, cls: 'dim' },
  { t: '> [tablet I]   10 jun 2022 · "everyone is happy today and weep tomorrow."', d: 240 },
  { t: '> [tablet II]  10 jun 2022 · "love is jealous with limitations."', d: 240 },
  { t: '> <span class="blood">[tablet III] 11 jun 2022 · "2023: corona ended / 2026: hantavirus."</span>', d: 600, raw: true },
  { t: '> [tablet IV]  17 jun 2022 · "...can make you cry real tears too."', d: 240 },
  { t: '> account silent since.', d: 320, cls: 'dim' },
  { t: '', d: 120 },
  { t: '> cross-reference scan: rest of internet...', d: 240 },
  { t: '> substack pre-may 2026 · <span class="err">no hits</span>', d: 200, raw: true },
  { t: '> polymarket pre-may 4 2026 · <span class="err">no hits</span>', d: 200, raw: true },
  { t: '> anglo astrology press · <span class="err">no hits</span>', d: 200, raw: true },
  { t: '> mainstream journalism · <span class="err">no hits</span>', d: 200, raw: true },
  { t: '> @iamasoothsayer · <span class="hot">SOLE PUBLIC MARKER</span>', d: 600, raw: true },
  { t: '', d: 120 },
  { t: '> wall scan: other voices, other languages...', d: 240, cls: 'dim' },
  { t: '> [II]  Pavel Globa · russia · 2020 · <span class="hot">match</span>', d: 200, raw: true },
  { t: '> [III] Mehdi · iran/russia · 2022 · <span class="hot">match</span>', d: 200, raw: true },
  { t: '> [IV]  Tamara Globa · russia · 2024 · <span class="hot">match</span>', d: 200, raw: true },
  { t: '> [V]   Baba Vanga · bulgaria · pre-1996 · <span class="hot">match</span>', d: 200, raw: true },
  { t: '> [VI]  Zeng Shiqiang · taiwan · 2018 · <span class="hot">match</span>', d: 200, raw: true },
  { t: '> [VII] 赊刀人 · china folk · feb 2026 · <span class="hot">match</span>', d: 200, raw: true },
  { t: '> [VIII] 推背圖 · tang dynasty · <span class="hot">match</span>', d: 200, raw: true },
  { t: '> [IX]  红马年 red horse · sino-russian · 2025 · <span class="hot">match</span>', d: 280, raw: true },
  { t: '', d: 120 },
  { t: '> 9 voices · 3 continents · 1 year named.', d: 320, cls: 'glow' },
  { t: '> file integrity: <span class="hot">OK</span>', d: 280, raw: true },
  { t: '> clearance granted.', d: 320, cls: 'dim' },
  { t: '', d: 100 },
  { t: '> opening case file 599...', d: 280, cls: 'blood' },
];

let bootIdx = 0;
function bootStep(){
  if (bootIdx >= BOOT_LINES.length) {
    bootEnter.classList.add('show');
    return;
  }
  const ln = BOOT_LINES[bootIdx++];
  const div = document.createElement('div');
  if (ln.cls) div.className = ln.cls;
  if (ln.raw) div.innerHTML = ln.t || '&nbsp;';
  else div.textContent = ln.t || ' ';
  bootStream.appendChild(div);
  bootStream.scrollTop = bootStream.scrollHeight;
  setTimeout(bootStep, ln.d);
}

bootEnter.addEventListener('click', () => {
  bootEl.style.transition = 'opacity .6s';
  bootEl.style.opacity = '0';
  // unmute and start ambient drone (user gesture)
  if (typeof AUDIO !== 'undefined') {
    AUDIO.muted = false;
    AUDIO.start();
    const mb = document.getElementById('muteBtn');
    if (mb) { mb.textContent = 'Ⅱ'; mb.classList.add('playing'); }
  }
  setTimeout(() => {
    bootEl.style.display = 'none';
    document.body.classList.remove('no-scroll');
  }, 600);
});
setTimeout(bootStep, 300);

// ============ BREAKING TICKER ============
const BREAK_ITEMS = [
  'CASE 599 · open',
  'WHO DON 599 · 2 May 2026',
  'MV Hondius · 146 souls · 23 nationalities · 3 dead',
  '@iamasoothsayer · silent since 17 Jun 2022',
  'Polymarket · pandemic 2026 · $960K volume',
  'Grok · unedited since 2022',
  'voices on the wall: 9 · 3 continents',
  'we did not foretell · we recorded',
  'pavel globa · 2020 · "spanish flu 1918-1919"',
  'tamara globa · 2024 · "may 2026 will overturn everything"',
  'mehdi · 2022 · "more powerful than COVID-19"',
  'baba vanga · pre-1996 · "frozen virus from glaciers"',
  'zeng shiqiang · 2018 · "heaven\'s first tool is plague"',
  '丙午 · the year of the red fire horse',
];
const breakTrack = document.getElementById('breakTrack');
if (breakTrack) {
  const items = BREAK_ITEMS.map(x => `<span>${x}</span><span class="sep">●</span>`).join(' ');
  breakTrack.innerHTML = `<div class="break-track-inner">${items}${items}</div>`;
}

// ============ COPY BUTTONS ============
async function copy(text){
  try { await navigator.clipboard.writeText(text); return true; }
  catch {
    const ta = document.createElement('textarea');
    ta.value = text; ta.style.position='fixed'; ta.style.opacity='0';
    document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); } finally { document.body.removeChild(ta); }
    return true;
  }
}
function flash(btn, label='COPIED'){
  const o = btn.textContent;
  btn.textContent = '✓ ' + label;
  btn.classList.add('copied');
  setTimeout(() => { btn.textContent = o; btn.classList.remove('copied'); }, 1400);
}
['copyCa','copyCaBig'].forEach(id => {
  const b = document.getElementById(id);
  if (!b) return;
  b.addEventListener('click', async () => { await copy(CONFIG.ca); flash(b); });
});

// ============ ENGAGEMENT COUNTERS (animate when into view) ============
function animateCounter(el, target, duration = 2200){
  const start = performance.now();
  const startVal = 0;
  function tick(now){
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - t, 3);
    const v = Math.floor(startVal + (target - startVal) * eased);
    el.textContent = v.toLocaleString();
    if (t < 1) requestAnimationFrame(tick);
    else el.textContent = target.toLocaleString();
  }
  requestAnimationFrame(tick);
}
const counterIO = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    const target = parseInt(el.dataset.target, 10);
    if (!isNaN(target)) animateCounter(el, target);
    counterIO.unobserve(el);
  });
}, { threshold: .4 });
document.querySelectorAll('.eng-num[data-target]').forEach(el => counterIO.observe(el));

// ============ ABSENCE ROWS REVEAL ============
const absIO = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (!e.isIntersecting) return;
    setTimeout(() => e.target.classList.add('in'), i * 220);
    absIO.unobserve(e.target);
  });
}, { threshold: .3 });
document.querySelectorAll('.abs-row').forEach(el => absIO.observe(el));

// ============ WALL STRINGS DRAW ============
const wallIO = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const paths = e.target.querySelectorAll('.wall-strings path');
    paths.forEach((p, i) => {
      setTimeout(() => {
        p.style.transition = `stroke-dashoffset 2.4s ease-out`;
        p.style.strokeDashoffset = '0';
      }, i * 220);
    });
    wallIO.unobserve(e.target);
  });
}, { threshold: .15 });
const wallBoard = document.getElementById('wallBoard');
if (wallBoard) wallIO.observe(wallBoard);

// ============ AUDIO — ambient newsroom drone (Web Audio, no file needed) ============
const AUDIO = {
  ctx: null, gain: null, oscs: [], filter: null,
  muted: true, started: false,
  start(){
    if (this.started) { if (this.gain) this.gain.gain.linearRampToValueAtTime(this.muted ? 0 : .25, this.ctx.currentTime + .8); return; }
    try {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
      this.gain = this.ctx.createGain();
      this.gain.gain.value = 0;
      this.filter = this.ctx.createBiquadFilter();
      this.filter.type = 'lowpass';
      this.filter.frequency.value = 280;
      this.filter.Q.value = 1.2;
      this.gain.connect(this.ctx.destination);
      this.filter.connect(this.gain);
      // Three sustained low oscillators forming a minor chord drone
      [55, 65.4, 82.4].forEach((freq, i) => {
        const o = this.ctx.createOscillator();
        o.type = 'sawtooth';
        o.frequency.value = freq;
        const og = this.ctx.createGain();
        og.gain.value = .25;
        // Slow LFO for subtle breathing
        const lfo = this.ctx.createOscillator();
        lfo.frequency.value = .08 + i * .02;
        const lfoGain = this.ctx.createGain();
        lfoGain.gain.value = .08;
        lfo.connect(lfoGain);
        lfoGain.connect(og.gain);
        o.connect(og);
        og.connect(this.filter);
        o.start();
        lfo.start();
        this.oscs.push(o, lfo);
      });
      // Pink noise channel for tape hiss
      const buf = this.ctx.createBuffer(1, this.ctx.sampleRate * 4, this.ctx.sampleRate);
      const data = buf.getChannelData(0);
      let b0=0,b1=0,b2=0;
      for (let i = 0; i < data.length; i++) {
        const w = Math.random() * 2 - 1;
        b0 = .997 * b0 + w * .029591;
        b1 = .985 * b1 + w * .032534;
        b2 = .950 * b2 + w * .04425;
        data[i] = (b0 + b1 + b2) * .12;
      }
      const noise = this.ctx.createBufferSource();
      noise.buffer = buf; noise.loop = true;
      const ng = this.ctx.createGain();
      ng.gain.value = .35;
      noise.connect(ng); ng.connect(this.filter);
      noise.start();
      this.oscs.push(noise);
      this.started = true;
      // ramp in
      this.gain.gain.linearRampToValueAtTime(this.muted ? 0 : .25, this.ctx.currentTime + 2);
    } catch(e) { console.error('audio init', e); }
  },
  setMuted(m){
    this.muted = m;
    if (!this.started) return;
    this.gain.gain.linearRampToValueAtTime(m ? 0 : .25, this.ctx.currentTime + .6);
  }
};

const muteBtn = document.getElementById('muteBtn');
muteBtn.addEventListener('click', () => {
  AUDIO.setMuted(!AUDIO.muted);
  if (!AUDIO.started) AUDIO.start();
  muteBtn.textContent = AUDIO.muted ? '♪' : 'Ⅱ';
  muteBtn.classList.toggle('playing', !AUDIO.muted);
});

// ============ RED STRING CURSOR ============
(() => {
  const canvas = document.getElementById('strings');
  if (!canvas) return;
  if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) { canvas.style.display = 'none'; return; }
  const ctx = canvas.getContext('2d', { alpha: true });
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  let W = 0, H = 0;
  function resize(){
    W = window.innerWidth; H = window.innerHeight;
    canvas.width = W * dpr; canvas.height = H * dpr;
    canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
    ctx.setTransform(dpr,0,0,dpr,0,0);
  }
  resize();
  window.addEventListener('resize', resize);

  const points = [];
  const MAX = 60;
  let lastX = -1, lastY = -1, lastT = 0;
  window.addEventListener('mousemove', e => {
    const now = performance.now();
    if (now - lastT < 18) return;
    points.push({ x: e.clientX, y: e.clientY, t: now, life: 1 });
    if (points.length > MAX) points.shift();
    lastX = e.clientX; lastY = e.clientY; lastT = now;
  }, { passive: true });

  // click drops a "pin" (small red dot that fades)
  const pins = [];
  window.addEventListener('pointerdown', e => {
    pins.push({ x: e.clientX, y: e.clientY, life: 1 });
    if (pins.length > 12) pins.shift();
  });

  function frame(){
    ctx.clearRect(0, 0, W, H);
    const now = performance.now();

    // age points
    for (let i = points.length - 1; i >= 0; i--) {
      points[i].life = Math.max(0, 1 - (now - points[i].t) / 1400);
      if (points[i].life <= 0) points.splice(i, 1);
    }

    // draw red string (curved through points)
    if (points.length > 1) {
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      // shadow underneath
      ctx.strokeStyle = 'rgba(60,8,12,.55)';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(points[0].x + 1, points[0].y + 2);
      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x + 1, points[i].y + 2);
      }
      ctx.stroke();
      // main red yarn — segmented for fading
      for (let i = 1; i < points.length; i++) {
        const p1 = points[i-1], p2 = points[i];
        const a = Math.min(p1.life, p2.life);
        if (a <= 0) continue;
        ctx.strokeStyle = `rgba(209,26,42,${a})`;
        ctx.lineWidth = 2.4;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }
    }

    // draw pins
    for (let i = pins.length - 1; i >= 0; i--) {
      const p = pins[i];
      p.life -= .015;
      if (p.life <= 0) { pins.splice(i, 1); continue; }
      const r = 5 + (1 - p.life) * 10;
      const a = p.life;
      ctx.fillStyle = `rgba(209,26,42,${a})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = `rgba(255,90,108,${a})`;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
      ctx.stroke();
    }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();

// ============ GENTLE REVEAL ON SCROLL (cards fade-up as they enter) ============
const revealIO = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
      revealIO.unobserve(e.target);
    }
  });
}, { threshold: .15 });
document.querySelectorAll('.tablet, .voice-card, .sigil-card, .late-card, .qt-card, .lit-card, .tl-card, .callout-cell, .cm-stat').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(28px)';
  el.style.transition = 'opacity .9s ease, transform .9s ease';
  revealIO.observe(el);
});

})();
