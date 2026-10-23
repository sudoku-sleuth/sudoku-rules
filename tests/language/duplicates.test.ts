import {expect,test,afterAll,setDefaultTimeout} from 'bun:test';
import {readdir} from 'node:fs/promises';
import {compilePublicLibrary,readHeader,type Expr} from '../../src';
import {formulaInventory,overlapPairs,formulaNotation} from '../../src/formula-similarity';
import {overlapAllowlist} from '../../src/overlap-allowlist';
import {parseFormula} from '../../src';

setDefaultTimeout(60000);

const pages=await Promise.all((await readdir('rules')).filter(f=>f.endsWith('.md')).map(async f=>({file:`rules/${f}`,text:await Bun.file(`rules/${f}`).text()})));
const library=compilePublicLibrary(pages).value!;
const rows=formulaInventory(pages,3,library.rules,true);

function guard(inventory: typeof rows,allowlist:Record<string,string>=overlapAllowlist){
 const pairs=overlapPairs(inventory),used=new Set<string>();
 for(const pair of pairs){
  expect(pair.exact,`Identical instantiated formula: ${pair.key}`).toBe(false);
  if(pair.sameBlock){expect(Object.keys(pair.settings!).length,`Identical block settings: ${pair.key}`).toBeGreaterThan(0);continue;}
  expect(allowlist[pair.key],`Near duplicate: ${pair.key} (${pair.score})`).toBeTruthy();
  expect(pair.wrapper,`A block must own its meaning: ${pair.key}`).toBe(false);
  used.add(pair.key);
  expect(pair.shared.length,`Missing shared formula: ${pair.key}`).toBeGreaterThan(0);
 }
 expect([...used].sort()).toEqual(Object.keys(allowlist).sort());
}
test('all layers reject exact and near duplicates without a current semantic reason',()=>guard(rows),60000);

test('the guard rejects real page copies with renamed parameters and altered comparisons',()=>{
 const original=pages.find(p=>p.file==='rules/endpoint-range.md')!;
 const fixturePages=[pages.find(p=>p.file==='rules/predicates.md')!,original];
 const rename=(text:string)=>text.replaceAll('endpoint-range','injected').replace(/\bends\b/g,'tips').replace(/\bline\b/g,'interior');
 for(const changed of [false,true]){
  const copy={file:'rules/injected.md',text:rename(original.text).replace('|tips|=2',changed?'|tips|=3':'|tips|=2')};
  const checked=compilePublicLibrary([...fixturePages,copy]);
  expect(checked.diagnostics).toEqual([]);
  const inventory=formulaInventory([...fixturePages,copy],3,checked.value!.rules).filter(r=>['endpoint-range','injected'].includes(r.kind));
  const pair=overlapPairs(inventory)[0];
  expect(pair.exact).toBe(!changed);
  expect(pair.score).toBeGreaterThanOrEqual(0.35);
  expect(()=>guard(inventory,{})).toThrow();
 }
});

test('the guard detects exact copies in every layer and cross-layer wrappers',()=>{
 for(const layer of ['block','rule','predicate'] as const){
  const a=rows.find(r=>r.layer===layer)!;
  expect(()=>guard([a,{...a,kind:'injected',name:'Injected'}],{})).toThrow();
 }
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

test('parameter types cannot hide exact copies and separate same-typed inputs remain distinct',()=>{
 const prelude=pages.find(p=>p.file==='rules/predicates.md')!;
 const source=pages.find(p=>p.file==='rules/outside.md')!;
 const fixturePages=[prelude,pages.find(p=>p.file==='rules/digit-profile.md')!,source];
 // Use the real bound rule with collection/list/set contracts, not fabricated rows.
 for(const type of ['list<cell>','set<cell>']){
  const copy={file:'rules/injected.md',text:source.text.replaceAll('kind: outside','kind: injected').replace('type: collection<cell>',`type: ${type}`)};
  const checked=compilePublicLibrary([...fixturePages,copy]);
  expect(checked.diagnostics).toEqual([]);
  const inventory=formulaInventory([...fixturePages,copy],3,checked.value!.rules).filter(r=>['outside','injected'].includes(r.kind));
  expect(overlapPairs(inventory)[0].exact).toBe(true);
  expect(()=>guard(inventory,{})).toThrow();
 }
 // Endpoint Range has separate parameters; using one twice must not match two inputs.
 const original=pages.find(p=>p.file==='rules/endpoint-range.md')!;
 const sameTypes=original.text.replace('type: path<cell>','type: list<cell>');
 const merged=sameTypes.replaceAll('kind: endpoint-range','kind: injected').replace('∀c∈line:', '∀c∈ends:');
 const inventory=formulaInventory([prelude,{...original,text:sameTypes},{file:'rules/injected.md',text:merged}]);
 expect(inventory[0].normal).not.toBe(inventory[1].normal);
});

test('same-block copies simplified through let bindings fail even with renamed inputs',()=>{
 const original=pages.find(p=>p.file==='rules/thermo.md')!;
 const fixturePages=[pages.find(p=>p.file==='rules/predicates.md')!,pages.find(p=>p.file==='rules/monotone-line.md')!,original];
 const copy={file:'rules/injected.md',text:original.text.replaceAll('kind: thermo','kind: injected').replace(/\bstrict\b/g,'steep').replace('  steep: steep','  strict: let value=steep; true ∧ value')};
 const checked=compilePublicLibrary([...fixturePages,copy]);
 expect(checked.diagnostics).toEqual([]);
 const inventory=formulaInventory([...fixturePages,copy],3,checked.value!.rules).filter(r=>['thermo','injected'].includes(r.kind));
 expect(overlapPairs(inventory)[0].exact).toBe(true);
 expect(()=>guard(inventory,{})).toThrow();
});
