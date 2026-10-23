import {expect,test,afterAll} from 'bun:test';
import {readdir} from 'node:fs/promises';
import {compilePublicLibrary,readHeader,type Expr} from '../../src';
import {formulaInventory,overlapPairs,similarity,formulaNotation} from '../../src/formula-similarity';
import {overlapAllowlist} from '../../src/overlap-allowlist';
import {parseFormula} from '../../src';

const pages=await Promise.all((await readdir('rules')).filter(f=>f.endsWith('.md')).map(async f=>({file:`rules/${f}`,text:await Bun.file(`rules/${f}`).text()})));
const library=compilePublicLibrary(pages).value!;
const rows=formulaInventory(pages,3,library.rules,true);

test('all layers reject exact and near duplicates without a current semantic reason',()=>{
 const pairs=overlapPairs(rows),used=new Set<string>();
 for(const pair of pairs){
  expect(pair.exact,`Identical instantiated formula: ${pair.key}`).toBe(false);
  if(pair.sameBlock){expect(Object.keys(pair.settings!).length).toBeGreaterThan(0);continue;}
  expect(overlapAllowlist[pair.key],`${pair.exact?'Exact duplicate':pair.wrapper?'Predicate wrapper':'Near duplicate'}: ${pair.key} (${pair.score})`).toBeTruthy();
  expect(pair.wrapper,`A block must own its meaning: ${pair.key}`).toBe(false);
  used.add(pair.key);
  expect(pair.shared.length,`Missing shared formula: ${pair.key}`).toBeGreaterThan(0);
 }
 expect([...used].sort()).toEqual(Object.keys(overlapAllowlist).sort());
},60000);

test('the guard detects injected exact and altered near duplicates in each layer',()=>{
 for(const layer of ['block','rule','predicate'] as const){
  const a=rows.find(r=>r.layer===layer)!;
  const b={...a,kind:'injected',name:'Injected'};
  expect(overlapPairs([a,b]).some(p=>p.exact)).toBe(true);
  const near={...b,normal:b.normal+' altered',subtrees:new Set([...b.subtrees,'altered'])};
  expect(overlapPairs([a,near]).some(p=>!p.exact&&p.score>=0.35)).toBe(true);
 }
 const sample=pages.find(p=>p.file==='rules/endpoint-range.md')!;
 const copy={file:'rules/injected.md',text:sample.text.replace('kind: endpoint-range','kind: injected').replace('|ends|=2','|ends|=3')};
 const altered=formulaInventory([...pages,copy]).find(r=>r.kind==='injected')!;
 const a=rows.find(r=>r.kind==='endpoint-range')!;
 expect(altered.normal).not.toBe(a.normal);
 expect(similarity(a.subtrees,altered.subtrees)).toBeGreaterThanOrEqual(0.35);
 // Cross-layer ownership is checked; binding a block is already reuse.
 const block=rows.find(r=>r.layer==='block')!;
 for(const layer of ['predicate','rule'] as const)expect(overlapPairs([block,{...block,layer,kind:'injected'}]).some(p=>p.exact)).toBe(true);
 const predicate=rows.find(r=>r.layer==='predicate')!;
 expect(overlapPairs([predicate,{...block,wrapper:predicate.kind}]).some(p=>p.wrapper)).toBe(true);
});

test('every block owns a formula and has two named users or a composition purpose',()=>{
 for(const page of pages){
  const m=readHeader(page).value!.metadata;
  if(m.layer==='block'){
   expect(m.alias_of).toBeUndefined();
   expect(library.blocks.get(String(m.kind))!.formulas.length).toBeGreaterThan(0);
   const users=pages.filter(p=>readHeader(p).value!.metadata.layer==='rule'&&readHeader(p).value!.metadata.alias_of===m.kind);
   expect(users.length>=2||typeof m.composition==='string'&&m.composition.trim().length>0,`Unshared block needs a composition purpose: ${m.kind}`).toBe(true);
  }
  if(m.layer==='rule'){
   if(m.alias_of){expect(m.alias_bind).toBeDefined();expect(library.blocks.has(String(m.alias_of))).toBe(true);}
   else expect(library.rules.get(String(m.kind))!.formulas.length).toBeGreaterThan(0);
  }
 }
});

test('every callable prelude name is reachable from a rule, feature or documented formula API',()=>{
 const used=new Set(['uniform','reified','conditionalMeaning','prefixSelection']);
 const visit=(n:Expr)=>{if(n.kind==='name')used.add(n.value!);n.children.forEach(visit);};
 for(const rule of library.rules.values())rule.formulas.forEach(f=>visit(f.ast));
 for(const feature of library.features){visit(feature.formula.ast);feature.requires.forEach(r=>visit(r.formula));}
 let changed=true;while(changed){const count=used.size;for(const [name,term]of Object.entries(library.prelude.environment.terms))if(used.has(name)){if(term.body)visit(term.body);if(term.requires)visit(term.requires);}changed=used.size!==count;}
 expect(Object.keys(library.prelude.environment.terms).filter(n=>!used.has(n))).toEqual([]);
});

test('normalisation retains the identities of board inputs and primitive operations',()=>{
 for(const [a,b]of [['D','V'],['rowHouse','columnHouse'],['given','placed'],['givenValue','entered']]){
  expect(rows.find(r=>r.layer==='predicate'&&r.kind===a)!.normal).not.toBe(rows.find(r=>r.layer==='predicate'&&r.kind===b)!.normal);
 }
});

test('formula rendering preserves list images, intervals, arithmetic and binders',()=>{
 for(const text of ['⟨D(c):c∈C⟩','{D(c):c∈C}','{c∈C:D(c)>1}','∀a,b∈C: D(a)!=D(b)','let x=2; ⌊x⌋+|C|','λc:cell:D(c)']){
  const ast=parseFormula(text).value!;
  expect(parseFormula(formulaNotation(ast)).diagnostics,text).toEqual([]);
 }
});

afterAll(()=>{rows.length=0;});


test('same-block settings are reported but identical instantiated rules still fail',()=>{
 const a=rows.find(r=>r.kind==='thermo')!;
 const b=rows.find(r=>r.kind==='slow-thermo')!;
 const related=overlapPairs([a,b])[0];
 expect(related.sameBlock).toBe(true);
 expect(related.block).toBe('monotone-line');
 expect(related.settings!.strict).toEqual({a:'strict',b:'false'});
 const identical=overlapPairs([a,{...a,kind:'copied-rule',name:'Copied rule'}])[0];
 expect(identical.exact).toBe(true);
 expect(identical.sameBlock).toBe(false);
});
