import {expect, test} from 'bun:test';
import {checkCaseReferences, normalise, compare} from '../../src';
import {declarationLibrary} from '../../src/declaration-library';
const fixture = (name: string) => Bun.file(`tests/fixtures/custom-${name}.rules.md`).text();
for (const name of ['local','published','url']) test(`custom ${name} references resolve without fetching`, async () => {
  const text = await fixture(name);
  const result = checkCaseReferences({file:'case.rules.md',text},declarationLibrary);
  expect(result.diagnostics).toEqual([]);
  expect(result.value!.deferred).toEqual([]);
  expect(result.value!.references[1].custom).toBe(true);
});
test('adding a publication URL preserves local identity, and that URL is also usable',async()=>{
  const before = checkCaseReferences({file:'case.rules.md',text:await fixture('local')},declarationLibrary).value!;
  const text = await fixture('published');
  const after = checkCaseReferences({file:'case.rules.md',text},declarationLibrary).value!;
  expect(after.references).toEqual(before.references);
  const url = checkCaseReferences({file:'case.rules.md',text:text.replace('weighted_1: #weighted-triple','weighted_1: https://example.com/rules/weighted-triple.md')},declarationLibrary);
  expect(url.diagnostics).toEqual([]);
  expect(url.value!.references[1].url).toBe('#weighted-triple');
});
test('local names never resolve through library root or publication address',async()=>{
  const text = (await fixture('published')).replace('weighted_1: #weighted-triple','weighted_1: weighted-triple');
  expect(checkCaseReferences({file:'case.rules.md',text},declarationLibrary).diagnostics.map(d=>d.code)).toContain('E_KIND_UNKNOWN');
});
test('custom formula checks apply to escaped and multiline YAML, and unused definitions',async()=>{
  const text=await fixture('local');
  for(const maths of ['"|cells| = 16 ∧ ∧"', '"|cells| = 16 \\u2227 \\u2227"', '|\n    |cells| = 16 ∧ ∧', '>\n    |cells| = 16\n    ∧ ∧']) {
    const input=text.replace(/maths: .*\n/,`maths: ${maths}\n`).replace('weighted_1: #weighted-triple r1c1-r1c2-r1c3','');
    const result=checkCaseReferences({file:'case.rules.md',text:input},declarationLibrary);
    const error=result.diagnostics.find(d=>d.code==='E_NAME_UNDEFINED')!;
    expect(error).toBeDefined();
    expect(error.span.file).toBe('case.rules.md');
    expect(input.slice(error.span.start.offset,error.span.end.offset)).toMatch(/∧|\\u2227/);
  }
});

test('matching local names retain file scope and never prove semantic equivalence', async () => {
  const text=await fixture('local');
  const activeCells=Array.from({length:81},(_,i)=>`r${Math.floor(i/9)+1}c${i%9+1}` as `r${number}c${number}`);
  const board={rows:9,cols:9,alphabet:[1,2,3,4,5,6,7,8,9],activeCells};
  const forms=['a.rules.md','b.rules.md'].map(file=>normalise({file,text},board));
  for(const [i,form] of forms.entries()) {
    expect(form.issues).toEqual([]);
    expect(form.status).toBe('partial');
    expect(form.normalForm!.coverage.find(c=>c.kind==='#weighted-triple')!.source.custom).toBe(true);
    expect(form.normalForm!.coverage.find(c=>c.kind==='#weighted-triple')!.source.scope).toBe(i ? 'b.rules.md' : 'a.rules.md');
  }
  expect(compare(forms[0],forms[1]).status).toBe('unresolved');
});
test('local declarations are independent of headings and placement',async()=>{
  const text=(await fixture('local')).replace(/## Definitions\n\n### Arbitrary heading\n\n/,'');
  expect(checkCaseReferences({file:'case.rules.md',text},declarationLibrary).diagnostics).toEqual([]);
});
test('custom scalar contents cannot create Markdown compiler blocks',async()=>{
  const text=(await fixture('local')).replace(/maths: .*\n/,'maths: "true\\n```\\nthis is invalid"\n');
  expect(checkCaseReferences({file:'case.rules.md',text},declarationLibrary).diagnostics.length).toBeGreaterThan(0);
});
test('custom types check supplied values',async()=>{
  const text=(await fixture('local')).replace('path<cell>','list<cell>');
  expect(checkCaseReferences({file:'case.rules.md',text},declarationLibrary).diagnostics).toEqual([]);
});

test('the CLI checks custom maths with an explicit prelude too',async()=>{
  const {lintFiles}=await import('../../src/cli');
  const result=await lintFiles('tests/invalid/cases/custom-broken-formula.rules.md','rules/predicates.md');
  expect(result.diagnostics.map(d=>d.code)).toContain('E_NAME_UNDEFINED');
  expect(result.pending).not.toContain('custom formula execution');
});
