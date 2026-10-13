// All content and links work without JavaScript. This only narrows the library.
const input = document.querySelector('#rule-search');
const groups = [...document.querySelectorAll('[data-group]')];
const links = [...document.querySelectorAll('[data-shape]')];
const status = document.querySelector('.search-status');
const empty = document.querySelector('.no-results');
let shape = links.find(link => link.hash === location.hash)?.dataset.shape ?? 'Lines';
document.querySelector('.search-control').hidden = false;
function filter() {
  const query = input.value.trim().toLowerCase();
  let count = 0;
  for (const group of groups) {
    let visible = 0;
    for (const row of group.querySelectorAll('[data-rule]')) {
      row.hidden = query ? !row.dataset.search.includes(query) : group.dataset.group !== shape;
      if (!row.hidden) visible++;
    }
    group.hidden = visible === 0; count += visible;
  }
  for (const link of links) {
    if (!query && link.dataset.shape === shape) link.setAttribute('aria-current', 'true');
    else link.removeAttribute('aria-current');
  }
  status.textContent = query ? `${count} ${count === 1 ? 'rule matches' : 'rules match'} “${input.value.trim()}” across all shapes.` : `${count} rules in ${shape.toLowerCase()}.`;
  empty.hidden = count > 0;
}
input.addEventListener('input', filter);
for (const link of links) link.addEventListener('click', event => {
  event.preventDefault(); shape = link.dataset.shape; input.value = '';
  history.replaceState(null, '', link.hash); filter();
});
window.addEventListener('hashchange', () => {
  const link = links.find(link => link.hash === location.hash);
  if (link) { shape = link.dataset.shape; input.value = ''; filter(); }
});
filter();
