(() => {
  const root = document.documentElement;
  const key = 'open-rules-theme';
  const valid = value => ['light', 'dark', 'system'].includes(value);
  let theme = 'system';
  try {
    const saved = localStorage.getItem(key);
    if (valid(saved)) theme = saved;
  } catch {}
  root.dataset.theme = theme;
  document.addEventListener('DOMContentLoaded', () => {
    const controls = document.querySelector('.theme-control');
    const buttons = [...controls.querySelectorAll('[data-theme-choice]')];
    const apply = value => {
      theme = valid(value) ? value : 'system';
      root.dataset.theme = theme;
      for (const button of buttons) {
        button.setAttribute('aria-pressed', String(button.dataset.themeChoice === theme));
      }
    };
    apply(theme);
    controls.hidden = false;
    for (const button of buttons) button.addEventListener('click', () => {
      apply(button.dataset.themeChoice);
      try { localStorage.setItem(key, theme); } catch {}
    });
    window.addEventListener('storage', event => {
      if (event.key === key || event.key === null) apply(event.newValue);
    });
  });
})();
