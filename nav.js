(function () {
  const variants = [
    'index.html',
    'index_v0.html',
    'index_v1.html',
    'index_v2.html',
    'index_v3.html',
    'index_v4.html',
    'index_v5.html',
    'index_v6.html',
    'index_v7.html',
    'index_v8.html',
    'index_v9.html',
    'index_v10.html',
    'index_v11.html',
    'index_v12.html',
    'index_v13.html',
    'index_v14.html',
    'index_v15.html',
    'index_v16.html',
    'index_v18.html',
    'index_v19.html',
  ];

  let path = location.pathname.split('/').pop() || '';
  if (path === '') path = 'index.html';
  const idx = variants.indexOf(path);
  if (idx === -1) return;

  function go(delta) {
    const next = (idx + delta + variants.length) % variants.length;
    location.href = variants[next];
  }

  document.addEventListener('keydown', (e) => {
    if (e.target && /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)) return;
    if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === 'l') {
      e.preventDefault();
      go(1);
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp' || e.key === 'h') {
      e.preventDefault();
      go(-1);
    }
  });

  function mountIndicator() {
    if (!document.body) return;
    const ind = document.createElement('div');
    ind.setAttribute('data-nav-indicator', '');
    ind.style.cssText = [
      'position:fixed',
      'top:12px',
      'left:50%',
      'transform:translateX(-50%)',
      'font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace',
      'font-size:10px',
      'letter-spacing:0.22em',
      'text-transform:uppercase',
      'color:rgba(140,140,140,0.55)',
      'mix-blend-mode:difference',
      'z-index:99999',
      'pointer-events:none',
      'user-select:none',
    ].join(';');
    const num = String(idx + 1).padStart(2, '0');
    const total = String(variants.length).padStart(2, '0');
    ind.textContent = `←  ${num} / ${total}  →`;
    document.body.appendChild(ind);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mountIndicator);
  } else {
    mountIndicator();
  }
})();
