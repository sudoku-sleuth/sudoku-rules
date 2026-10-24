const notice = message => {
  let status = document.querySelector('.copy-status');
  if (status) status.textContent = message;
};
for (const button of document.querySelectorAll('[data-copy], [data-copy-link]')) button.addEventListener('click', async () => {
  const target = document.getElementById(button.dataset.copy);
  const text = button.hasAttribute('data-copy-link') ? location.href : target.querySelector('code')?.textContent ?? target.textContent;
  try { await navigator.clipboard.writeText(text); notice('Copied.'); }
  catch { notice('Select the wording or declaration and copy it with your keyboard.'); }
});
const tabs = [...document.querySelectorAll('[data-audience]')];
const panels = [...document.querySelectorAll('#audience-panel [role="tabpanel"]')];
function selectAudience(tab) {
  for (const item of tabs) { item.setAttribute('aria-selected', String(item === tab)); item.tabIndex = item === tab ? 0 : -1; }
  for (const panel of panels) {
    const selected = panel.id === tab.getAttribute('aria-controls');
    panel.setAttribute('aria-hidden', String(!selected));
    panel.inert = !selected;
  }
}
for (const [i,tab] of tabs.entries()) {
  tab.addEventListener('click',()=>selectAudience(tab));
  tab.addEventListener('keydown',event=>{
    let n = event.key === 'ArrowRight' ? (i+1)%tabs.length : event.key === 'ArrowLeft' ? (i+tabs.length-1)%tabs.length : event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length-1 : -1;
    if(n>=0) {event.preventDefault();selectAudience(tabs[n]);tabs[n].focus();}
  });
}
const root = document.querySelector('[data-whispers]');
if(root) {
  let choice = '5';
  const update = () => {
    const gap = choice === 'custom' ? Number(document.querySelector('#custom-gap').value) : Number(choice);
    const valid = choice !== 'custom' || (document.querySelector('#custom-gap').value !== '' && Number.isFinite(gap) && gap>=0);
    root.querySelector('[data-copy="standard-wording"]').disabled = !valid;
    root.querySelector('[data-copy="declaration"]').disabled = !valid;
    document.querySelector('#standard-wording').textContent = valid ? `Neighbouring values along the line differ by at least ${gap}.` : 'Enter a gap to get the wording and declaration.';
    root.querySelector('#declaration code').textContent = valid ? (choice==='custom' ? `whispers r1c1-r1c2 gap ${gap}` : `whispers-${gap} r1c1-r1c2`) : 'Choose a gap first.';
    const examples = root.querySelector('#whispers-examples');
    examples.hidden = choice==='custom';
    if(choice!=='custom') {
      const values = examples.querySelectorAll('td'); values[1].textContent = gap+1; values[3].textContent = gap;
      const captions = examples.querySelectorAll('figcaption'); captions[0].textContent = `Satisfies: 1 and ${gap+1} differ by ${gap}.`; captions[1].textContent = `Breaks: 1 and ${gap} differ by only ${gap-1}.`;
      examples.querySelectorAll("table").forEach((table,i)=>table.setAttribute("aria-label",captions[i].textContent));
    }
  };
  for(const button of root.querySelectorAll('[data-gap]')) button.addEventListener('click',()=>{
    const next=button.dataset.gap;
    if(next !== 'custom' && location.pathname !== `/whispers-${next}/`) { location.assign(`/whispers-${next}/`); return; }
    if(next === 'custom' && root.dataset.whispers !== 'whispers') { location.assign('/whispers/?custom=1'); return; }
    choice=next;
    for(const item of root.querySelectorAll('[data-gap]')) item.setAttribute('aria-pressed',String(item===button));
    root.querySelector('.custom-gap').hidden=choice!=='custom';update();
  });
  document.querySelector('#custom-gap').addEventListener('input',update);
  if(new URLSearchParams(location.search).has('custom')) root.querySelector('[data-gap=custom]').click();
  if(matchMedia('(max-width: 760px)').matches) root.querySelector('.rule-settings details').open=false;
}
// Old heading links still reach their full reference inside disclosures.
function revealFragment() {
  const id = decodeURIComponent(location.hash.slice(1));
  const target = id && document.getElementById(id);
  if(!target) return;
  for(let parent=target.parentElement;parent;parent=parent.parentElement) if(parent.tagName==='DETAILS') parent.open=true;
  target.scrollIntoView();
}
revealFragment();
window.addEventListener('hashchange',revealFragment);
