import {expect,test} from 'bun:test';
import {readdir} from 'node:fs/promises';
import {compilePublicLibrary,readHeader,checkCaseReferences,libraryLayers,migrationTable,type PageSource} from '../../src';
import {assertMigratedEquivalent} from './migration-equivalence';
const pages:PageSource[]=await Promise.all((await readdir('rules')).filter(f=>f.endsWith('.md')).map(async f=>({file:`rules/${f}`,text:await Bun.file(`rules/${f}`).text()})));
const library=compilePublicLibrary(pages).value!;
const a='r1c1',b='r1c3',c='r1c2';
const empty={rows:1,cols:3,alphabet:[1,2,3],regions:[[a,c],[b]]};
const samples:{kind:string;parameters:Record<string,unknown>}[]=[];
const sample=(kind:string,parameters:Record<string,unknown>)=>samples.push({kind,parameters});
for(const line of [[a],[a,c],[a,c,b]])for(const loop of [false,true])sample('summit',{line,loop});
for(const edges of [[[a,c],[c,b]],[[a,c],[c,b],[b,a]]])sample('summit',{line:[],edges});
sample('between',{ends:[a,b],line:[c]});
for(const gap of [0,2,4])sample('lockout',{ends:[a,b],line:[c],gap});
sample('palindrome',{line:[a,c,b]});
for(const centre of ['when-odd','ignore','required'])for(const line of [[a,c,b],[a,b]])sample('zipper',{line,centre});
sample('rotational-sums',{sums:[2,4,6]});
for(const endpointOccurrences of ['none','exactly-one','at-most-one'])for(const crusts of [undefined,[1,3],[2]])for(const sum of [0,2,4])sample('sandwich',{cells:[a,c,b,a],sum,endpointOccurrences,...(crusts?{crusts}:{})});
for(const count of [undefined,1,2,3])sample('x-sum',{cells:[a,c,b],sum:4,...(count?{count}:{})});
for(const sums of [[],[2],[3],[4],[2,4]])sample('doll-sum',{cells:[a,c,b],sums});
for(const sum of [0,2,4,6])sample('run-sum',{cells:[a,c,b,a],sum});
sample('tardis',{cell:c,neighbours:[a,b],channel:'V'});
for(const type of ['min','max'])for(const boundary of [false,true])for(const exhaustive of [false,true])sample('extremum',{cells:[a,c],type,boundary,exhaustive,neighbourhood:'orthogonal',channel:'V'});
for(const visible of [1,2,3,4])sample('skyscraper',{cells:[a,c,b,a],visible,channel:'V'});
for(const modulus of [1,2,3])for(const remainder of [0,1,2])for(const distinct of [false,true])sample('remainder-cage',{cells:[a,b,c],modulus,remainder,distinct});
for(const modulus of [2,3,4,10])sample('sum-free-cage',{cells:[a,b],modulus});
sample('equality-cage',{cells:[a,b]});
for(const line of [[a],[a,c],[a,c,b]])for(const loop of [false,true])sample('primality',{line,loop});
for(const parity of ['odd','even'])sample('parity-cells',{cells:[a,c],parity});
for(const target of ['greater','less','source','first-five'])for(const source of [undefined,a])sample('pointing-arrow',{cell:c,ray:[a,b],target,...(source?{source}:{})});
sample('pointing-thermo',{line:[a,c],ray:[b,a,c]});
for(const combine of [false,true])for(const channel of ['D','V'])sample('region-sum',{line:[a,c,b,a],segments:[[a,c],[b],[a]],combine,channel});
for(const {kind,parameters} of samples)test(`folded block preserves ${kind}: ${JSON.stringify(parameters)}`,()=>{
 for(const x of [1,2,3])for(const y of [1,2,3])for(const z of [1,2,3])for(const modified of [false,true]){
  const faces={[a]:x,[b]:y,[c]:z};
  const fragment={...empty,faces,values:modified?{[a]:x/2,[b]:-y,[c]:z/2}:faces,parameters};
  assertMigratedEquivalent(library,kind,fragment);
  // Compare whole-instance negation, not a distribution over individual clauses.
  assertMigratedEquivalent(library,kind,fragment,true);
 }
});
test('all public declarations have a layer and migration prefers named rules',()=>{
 expect(Object.keys(libraryLayers).sort()).toEqual([...library.rules.keys()].sort());
 for(const [oldKind,target]of Object.entries({whisper:'whispers',killer:'cage',unique:'extra-regions'})){
  expect(library.namedRules.has(oldKind)).toBe(false);
  expect(library.registry.kindByUrl!.get(`https://rules.sudoku-sleuth.com/${oldKind}.md`)).toBe(target);
 }
 for(const entry of migrationTable){expect(libraryLayers[entry.target]).toBe(entry.form);expect(library.rules.has(entry.canonical)).toBe(true);if(libraryLayers[entry.kind]==='rule')expect(entry.target).toBe(entry.kind);}
});
test('predicates cannot be declared as case constraints',()=>{
 const text='---\nformat: open-rules\ntitle: Vocabulary\nsetter: Example\nsource: ""\ncase: ""\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n---\n\n```rules\nsudoku 9x9\npredicates\n```\n';
 expect(checkCaseReferences({file:'vocabulary.rules.md',text},library.registry).diagnostics.map(d=>d.code)).toContain('E_KIND_UNKNOWN');
});

test('extra regions and the Sudoku rule supply house constraints to the case checker',()=>{
 for(const rules of ['extra-regions r1c1-r1c2','sudoku 9x9']){
  const text=`---\nformat: open-rules\ntitle: Houses\nsetter: Example\nsource: ""\ncase: ""\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\nboard: {rows: 9, cols: 9, symbols: [1,2,3,4,5,6,7,8,9], regions: [[r1c1,r1c2]]}\n---\n\n\`\`\`rules\n${rules}\n\`\`\`\n`;
  expect(checkCaseReferences({file:'houses.rules.md',text},library.registry).diagnostics.map(d=>d.code)).not.toContain('W_CASE_HOUSES');
 }
});

test('blocks own shared formulas or declare a general composition purpose',()=>{
 const headers=pages.map(p=>readHeader(p).value!.metadata);
 for(const m of headers){if(m.layer!=='block')continue;
  expect(m.alias_of).toBeUndefined();
  const users=headers.filter(rule=>rule.layer==='rule'&&rule.alias_of===m.kind);
  if(users.length<2)expect(String(m.composition??'').length).toBeGreaterThan(20);
 }
 const disguised=pages.map(p=>p.file==='rules/parity-cells.md'?{...p,text:p.text.replace('layer: rule','layer: block')}:p);
 expect(compilePublicLibrary(disguised).diagnostics.some(d=>d.code==='E_ALIAS_TARGET'&&d.message.includes('owns a formula'))).toBe(true);
});
