/* ==============================================================
   $SOOTH · CASE FILE 599 — script v2
   folder cover open · CA copy · ambient drone · scroll reveal
   no boot terminal · no red string cursor
   ============================================================== */
(() => {
  'use strict';

  /* ---------- CONFIG ---------- */
  const CFG = window.SOOTH_CFG || {
    contract: '',
    chain: 'ethereum',
    socials: {
      x: 'https://x.com/iamasoothsayer/status/1535494638391664641',
      tg: '',
    },
  };

  const $  = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  /* ============== FOLDER COVER OPEN ============== */
  const cover = $('#cover');
  const openBtn = $('#openFile');
  const body = document.body;

  function openFile() {
    if (!cover) return;
    body.classList.add('folder-open');
    body.classList.remove('folder-closed');
    setTimeout(() => {
      cover && cover.setAttribute('aria-hidden', 'true');
      cover && (cover.style.display = 'none');
      startAmbient();
    }, 1200);
  }
  openBtn && openBtn.addEventListener('click', openFile);
  document.addEventListener('keydown', (e) => {
    if (body.classList.contains('folder-closed') && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault(); openFile();
    }
  });

  /* ============== CA + SOCIALS ============== */
  function fillCA() {
    const ca = (CFG.contract || '').trim();
    const display = ca ? ca : 'CA · pending publication';
    $$('#caValue, #caValueBig').forEach((n) => (n.textContent = display));
  }
  fillCA();

  function copyCA(btn) {
    const ca = (CFG.contract || '').trim();
    if (!ca) {
      btn.textContent = 'PENDING';
      setTimeout(() => (btn.textContent = 'COPY'), 1200);
      return;
    }
    navigator.clipboard.writeText(ca).then(() => {
      const orig = btn.textContent;
      btn.textContent = 'COPIED ✓';
      btn.classList.add('copied');
      setTimeout(() => { btn.textContent = orig; btn.classList.remove('copied'); }, 1400);
    });
  }
  $('#copyCa')    && $('#copyCa').addEventListener('click', (e) => copyCA(e.currentTarget));
  $('#copyCaBig') && $('#copyCaBig').addEventListener('click', (e) => copyCA(e.currentTarget));

  if (CFG.socials.x)  { const a = $('#sx');  a && (a.href = CFG.socials.x); }
  if (CFG.socials.tg) { const a = $('#stg'); a && (a.href = CFG.socials.tg); }

  const ca = (CFG.contract || '').trim();
  const uniswapBig = $('#uniswapBig'), chartBig = $('#chartBig');
  if (ca) {
    if (uniswapBig) uniswapBig.href = `https://app.uniswap.org/swap?outputCurrency=${ca}`;
    if (chartBig)   chartBig.href   = `https://dexscreener.com/${CFG.chain}/${ca}`;
  }

  /* ============== AMBIENT DRONE ============== */
  let ambStarted = false;
  function startAmbient() {
    if (ambStarted) return;
    ambStarted = true;
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      const ctx = new AC();
      ctx.resume && ctx.resume();

      const master = ctx.createGain();
      master.gain.value = 0.018;
      master.connect(ctx.destination);

      [55, 55 * 1.5, 55 * 2.0066].forEach((f, i) => {
        const osc = ctx.createOscillator();
        osc.type = 'sawtooth';
        osc.frequency.value = f;
        osc.detune.value = (i - 1) * 4;
        const lp = ctx.createBiquadFilter();
        lp.type = 'lowpass';
        lp.frequency.value = 360 + i * 90;
        lp.Q.value = 4;
        const g = ctx.createGain();
        g.gain.value = 0.5;
        osc.connect(lp).connect(g).connect(master);
        osc.start();

        const lfo = ctx.createOscillator();
        lfo.frequency.value = 0.05 + i * 0.02;
        const lfoG = ctx.createGain();
        lfoG.gain.value = 0.25;
        lfo.connect(lfoG).connect(g.gain);
        lfo.start();
      });
    } catch (_) { /* no-op */ }
  }

  /* ============== SCROLL REVEAL ============== */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('inview');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  $$('.chapter, .interlude, .wall-spread, .submit-block, .buy-block, .biblio, .triad-row, .pullquote').forEach((n) => io.observe(n));

})();
