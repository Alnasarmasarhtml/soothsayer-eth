/* ==============================================================
   $SOOTH · the soothsayer files · v3
   minimal: CA copy · scroll reveal · social links
   ============================================================== */
(() => {
  'use strict';

  const CFG = window.SOOTH_CFG || {
    contract: '',
    chain: 'ethereum',
    socials: {
      x:  'https://x.com/iamasoothsayer/status/1535494638391664641',
      tg: '',
    },
  };

  const $  = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  /* ---------- CA + buttons ---------- */
  const ca = (CFG.contract || '').trim();
  const caBig = $('#caBig');
  if (caBig) caBig.textContent = ca || 'CA · pending publication';

  const copyBtn = $('#copyCa');
  if (copyBtn) copyBtn.addEventListener('click', () => {
    if (!ca) {
      copyBtn.textContent = 'Pending';
      setTimeout(() => (copyBtn.textContent = 'Copy'), 1200);
      return;
    }
    navigator.clipboard.writeText(ca).then(() => {
      const t = copyBtn.textContent;
      copyBtn.textContent = 'Copied ✓';
      setTimeout(() => (copyBtn.textContent = t), 1400);
    });
  });

  const uniswap = $('#uniswapBig'), chart = $('#chartBig');
  if (ca) {
    if (uniswap) uniswap.href = `https://app.uniswap.org/swap?outputCurrency=${ca}`;
    if (chart)   chart.href   = `https://dexscreener.com/${CFG.chain}/${ca}`;
  }

  /* ---------- socials ---------- */
  ['#navX', '#navTg', '#footerTg'].forEach((id) => {
    const el = $(id);
    if (!el) return;
    if (id.includes('X') && CFG.socials.x)  el.href = CFG.socials.x;
    if (id.includes('Tg') && CFG.socials.tg) el.href = CFG.socials.tg;
  });


})();
