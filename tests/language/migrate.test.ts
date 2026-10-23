import {compilePublicLibrary,publicPages} from '../helpers/library';
import {expect,test} from 'bun:test';
import {readdir} from 'node:fs/promises';
import {checkCaseReferences,migrateCase,migrateDeclaration,migrateParsedDeclaration,printMigratedDeclaration,migrationTable,readHeader,type PageSource} from '../../src';
import {readCustomDefinitions} from '../../src/custom-definitions';
import {markdownBlocks} from '../../src/rules-blocks';
import {caseExamples} from '../../scripts/lint-skill';
import {fragmentVerdict,type Fragment} from './finite-fragment';
const baseline:{revision:string;pages:PageSource[]}=await Bun.file('tests/fixtures/library-6d9e954.json').json();
const old=compilePublicLibrary(baseline.pages).value!;
const sources = publicPages;
const current=compilePublicLibrary(sources).value!;
const defaults=(kind:string,lib=current)=>Object.fromEntries(Object.entries(lib.registry.parameters!.get(`https://rules.sudoku-sleuth.com/${kind}.md`)!.parameters).filter(([,p])=>Object.hasOwn(p,'default')).map(([n,p])=>[n,p.default]));
const exampleCase=(line:string)=>`---\nformat: open-rules\ntitle: Migration\nsetter: Example\nsource: ""\ncase: ""\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\nboard: {rows: 9, cols: 9, symbols:[1,2,3,4,5,6,7,8,9]}\n---\n\n\`\`\`rules\n${line}\n\`\`\`\n`;
test('migration table covers every legacy kind and supported spelling',()=>{
 expect(baseline.revision).toBe('6d9e954');
 expect(migrationTable.map(r=>r.kind).sort()).toEqual([...old.registry.kinds].sort());
 expect(migrationTable.every(r=>r.meaning==='identical')).toBe(true);
 expect(()=>migrateDeclaration({kind:'not-published',parameters:{}})).toThrow();
});

test('every kind published at 6d9e954 still has a route',async()=>{
 // The site suite verifies generated routes; this guards its complete published input set.
 for(const page of baseline.pages){
  const metadata=readHeader(page).value!.metadata;
  if(typeof metadata.kind!=='string')continue;
  const route=sources.find(p=>p.file===`rules/${metadata.kind}.md`);
  expect(route,`Missing published route: ${metadata.kind}`).toBeDefined();
  expect(readHeader(route!).value!.metadata.url).toBe(metadata.url);
 }
});

for(const source of baseline.pages){
 const kind=/^kind: (.+)$/m.exec(source.text)?.[1];if(!kind)continue;
 test(`0.3 published example migrates, parses and checks: ${kind}`,()=>{
  // Exact alias pages inherit the target's example and contract.
  const exampleSource=caseExamples(source.text).length?source:old.aliases.has(kind)?baseline.pages.find(p=>p.file===`rules/${old.aliases.get(kind)}.md`)!:{...source,text:'```markdown\n'+exampleCase('sudoku 9x9\ndecoration r1c1 note "grey"')+'```\n'};
  const examples=kind==='decoration'?[exampleCase(/```rules\n([\s\S]*?)```/.exec(source.text)![1])]:caseExamples(exampleSource.text).map(text=>old.aliases.has(kind)?text.replace(new RegExp('^'+old.aliases.get(kind)+'(?=\\s)','gm'),kind):text);expect(examples.length).toBeGreaterThan(0);
  for(const text of examples){
   const page={file:source.file+'#migration',text};
   const baselineDiagnostics=checkCaseReferences(page,old.registry).diagnostics;
   expect(baselineDiagnostics.map(d=>d.message)).toEqual(({ 'constructed-regions':['borders must not be empty.'], 'cage-shapes':['free must not be empty.'],negative:['except must not be empty.']} as Record<string,string[]>)[kind]??[]);
   const migrated=migrateCase(page);expect(migrated.diagnostics).toEqual([]);
   expect(checkCaseReferences(migrated.value!,current.registry).diagnostics).toEqual([]);
  }
 });
}
// The original finite example ledger covers 83 published kinds, with witnesses,
// channels, primary regions and both satisfying and breaking assignments.
interface Example{kind:string;canonical:string;parameters:Record<string,unknown>;assignments:{expected:boolean;faces:Record<string,number>}[];board?:{rows:number;cols:number;symbols:number[]}}
const ledger:{pages:Example[]}=await Bun.file('tests/fixtures/published-defaults.json').json();
for(const example of ledger.pages)test(`finite baseline equivalence through migration: ${example.kind}`,()=>{
 const before=old.rules.get(old.aliases.get(example.kind)??example.kind)!;
 const migrated=migrateDeclaration({kind:example.kind,parameters:example.parameters});expect(migrated.length).toBe(1);
 const declaration=migrated[0],after=current.rules.get(declaration.kind)!;
 for(const assignment of example.assignments){
  const cells=Object.keys(assignment.faces);
  const region=(c:string)=>{const [,r,k]=/r(\d+)c(\d+)/.exec(c)!;return `${Math.floor((+r-1)/3)},${Math.floor((+k-1)/3)}`;};
  const fragment:Fragment={faces:assignment.faces,parameters:{...defaults(example.kind,old),...example.parameters},regions:[...new Set(cells.map(region))].map(r=>cells.filter(c=>region(c)===r)),alphabet:example.board?.symbols,rows:example.board?.rows,cols:example.board?.cols};
  if(example.kind==='cage-expressions')fragment.witnesses={letterValues:[[1],[2]]};
  if(example.kind==='cage-shapes')fragment.witnesses={chosen:[[cells]]};
  if(example.kind==='constructed-regions')fragment.witnesses={P:[[cells]]};
  if(example.kind==='diagonal-lines')fragment.faces={...Object.fromEntries(Array.from({length:9},(_,i)=>[`r${Math.floor(i/3)+1}c${i%3+1}`,1])),...assignment.faces};
  if(example.kind==='window-classes'){fragment.rows=2;fragment.cols=2;}
  if(example.kind==='scoped-move')fragment.parameters={scope:cells,...fragment.parameters};
  if(example.kind==='value-modifier')fragment.values=Object.fromEntries(Object.entries(assignment.faces).map(([c,n])=>[c,n*2]));
  if(example.kind==='yin-yang')fragment.shaded=assignment.expected?['r1c1','r1c2']:['r1c1','r2c2'];
  function routes(prefix:string[],remaining:string[]):string[][]{return [prefix,...remaining.flatMap((c,i)=>routes([...prefix,c],remaining.filter((_,j)=>j!==i)))];}
  if(['cage-shapes','constructed-regions','yin-yang'].includes(example.kind))fragment.witnesses={...fragment.witnesses,route:routes([],cells).filter(p=>p.length)};
  const oldValue=fragmentVerdict(before.formulas[0].ast,old.prelude,before.parameters,fragment);
  const actual=fragmentVerdict(after.formulas[0].ast,current.prelude,after.parameters,{...fragment,parameters:{...defaults(declaration.kind),...declaration.parameters,...(example.kind==='scoped-move'?{scope:cells}:{})}});
  expect(actual).toBe(oldValue);
 }
});
test('migration preserves IDs, repeated negation, conditions, comments, drawings and big integers',()=>{
 const source=exampleCase('"pair-a": not not pair r1c1-r1c2 sum 9007199254740993 if uniform # comment\npaint: decoration cells ["r1c1"] note "blue"');
 const migrated=migrateCase({file:'case.rules.md',text:source});expect(migrated.diagnostics).toEqual([]);
 expect(migrated.value!.text).toContain('9007199254740993');
 expect(migrated.value!.text).toContain('"pair-a": not not pair');expect(migrated.value!.text).toContain(' if uniform #');expect(migrated.value!.text).toContain('blue');
 expect(checkCaseReferences(migrated.value!,current.registry).diagnostics).toEqual([]);
 const input={kind:'cage',parameters:{cells:['r1c2','r1c1','r1c1'],total:5}};const frozen=JSON.stringify(input);migrateDeclaration(input);expect(JSON.stringify(input)).toBe(frozen);
 const foreign=source.replace('https://rules.sudoku-sleuth.com/','https://another.example/');expect(migrateCase({file:'foreign',text:foreign}).value!.text).toBe(foreign);
 const explicit=foreign.replace('pair r1c1','https://rules.sudoku-sleuth.com/pair.md r1c1');
 const publicMigration=migrateCase({file:'public-reference',text:explicit});expect(publicMigration.diagnostics).toEqual([]);
 expect(publicMigration.value!.text).toContain('https://rules.sudoku-sleuth.com/pair.md');
 expect(checkCaseReferences(publicMigration.value!,current.registry).diagnostics).toEqual([]);
});
test('old valid case fixtures migrate and check under the current library',async()=>{
 for(const directory of ['tests/valid/cases','tests/valid/lines','tests/fixtures/cases','tests/fixtures'])for(const file of await readdir(directory)){
  if(!file.endsWith('.rules.md'))continue;const page={file:`${directory}/${file}`,text:await Bun.file(`${directory}/${file}`).text()};
  if(/\bliar-cells\b/.test(page.text))continue; // Added after the frozen legacy library.
  expect(checkCaseReferences(page,old.registry).diagnostics,`Baseline fixture ${file}`).toEqual([]);
  const migrated=migrateCase(page);expect(migrated.diagnostics,file).toEqual([]);expect(checkCaseReferences(migrated.value!,current.registry).diagnostics,file).toEqual([]);
 }
});
const a='r1c1',b='r1c2',c='r1c3';
const families:{kind:string;p:Record<string,unknown>;extra?:Partial<Fragment>}[]=[
 {kind:'absent-digits',p:{cells:[a,b],digits:[1,1]}},
 {kind:'allowed-digits',p:{line:[a,b,a],digits:[1,2]}},
 {kind:'look-and-say',p:{cells:[a,b],counts:[{digit:1,count:1},{digit:1,count:2}]}},
 {kind:'unique',p:{cells:[a,b,a]}},{kind:'clone',p:{cells:[a,b,a]}},
 {kind:'outside',p:{cells:[a,b,a],digits:[1,1]}},{kind:'quadruple',p:{cells:[a,b,a],digits:[1,1]}},
 {kind:'counting-circles',p:{cells:[a,b]}},{kind:'limited-digits',p:{line:[a,b,a],max:1.5}},
 {kind:'cage',p:{cells:[a,b],total:3,repeats:false,channel:'V'}},
 {kind:'cage',p:{cells:[a,b],repeats:false,channel:'V'}},
 {kind:'killer',p:{cells:[a,b],total:3,repeats:true,channel:'D'}},
 {kind:'little-killer',p:{cells:[a,b,a],sum:3,repeats:false,channel:'V'}},
 {kind:'product-cage',p:{cells:[a,b],product:2,distinct:true}},
 {kind:'cage-pair',p:{cages:[[a,b],[c]],relation:{op:'less'}}},
 {kind:'cage-pair',p:{cages:[[a,b]],relation:{op:'difference',value:0}}},
 {kind:'pair',p:{cells:[a,b],relation:{op:'less'},channel:'V'}},
 {kind:'pair',p:{cells:[a],relation:{op:'difference',value:0},channel:'V'}},
 {kind:'kropki',p:{cells:[a,b],colour:'white'}},{kind:'kropki',p:{cells:[a,b],colour:'black'}},
 {kind:'double-arrow',p:{ends:[a,b],line:[c],repeats:false,channel:'V'}},
 {kind:'double-arrow',p:{ends:[a],line:[b,c],repeats:true,channel:'V'}},
 {kind:'prefix-sum',p:{cells:[a,b,c],stop:'target',target:2,include:false,total:1}},
 {kind:'prefix-sum',p:{cells:[a,b,c],stop:'given',include:true,total:3},extra:{givens:{[b]:2}}},
 {kind:'prefix-sum',p:{cells:[a,b,c],stop:'crust',crusts:[2],include:true,total:3}},
 {kind:'whispers',p:{line:[a,b,c],gap:1,loop:true}},
 {kind:'close-whispers',p:{line:[],edges:[[a,b],[b,c]],gap:1,channel:'V'}},
 {kind:'difference-line',p:{line:[a,b,c],mode:'signed-step'}},
 {kind:'modular',p:{line:[],edges:[[a,b],[b,c]],modulus:4,length:3}},
 {kind:'modular',p:{line:[a,b],modulus:3,length:3,loop:true}},
 {kind:'entropic',p:{line:[a,b]}},{kind:'parity',p:{line:[a,b,a],loop:true}},
 {kind:'same-class',p:{cells:[a,b],classes:'entropy'}},
 {kind:'renban',p:{line:[a,b,a],repeats:true,channel:'V'}},
 {kind:'renban',p:{line:[],edges:[[a,b],[b,c]],repeats:false,channel:'D'}},
 {kind:'bremban',p:{line:[a,b,a]}},
 {kind:'nabner',p:{line:[a,b,a],channel:'V',distinct:false,separated:true}},
 {kind:'renban',p:{line:[a,b,c],selection:{stop:'target',target:2,crusts:[],include:true},channel:'D',repeats:true}},
 {kind:'equal-sums',p:{groups:[[a,b],[c]],channel:'V',repeats:false}},
 {kind:'mean-lines',p:{lines:[[],[a,b],[c]]}},
 {kind:'scoped-move',p:{scope:[a,b,c],move:'orthogonal',relation:'same',digits:[1],channel:'V'}},
 {kind:'negative',p:{relations:[{op:'less'}],except:[[a]],within:[[a,b]],direction:'horizontal'}},
 {kind:'index-count',p:{sources:[a,a,b],cells:[b,c],target:2,total:1,indexChannel:'V',channel:'D',offset:0}},
 {kind:'lookup',p:{cell:a,cells:[b,c],target:2,targetCell:c,relation:{op:'less'},indexChannel:'V',offset:0}},
 {kind:'numbered-room',p:{cells:[a,b,c],digit:2}},
 {kind:'index-line',p:{line:[a,b,a]}},
 {kind:'index',p:{cells:[a,b],axis:'column',strips:[]},extra:{rows:1,cols:3}},
];
for(const [i,sample]of families.entries())test(`bounded equivalence ${sample.kind} parameter set ${i+1}`,()=>{
 const before=old.rules.get(old.aliases.get(sample.kind)??sample.kind)!;
 const migrated=migrateDeclaration({kind:sample.kind,parameters:sample.p})[0];
 const after=current.rules.get(migrated.kind)!;
 for(const x of [1,2,5])for(const y of [1,2,5])for(const z of [1,2,5])for(const modified of [false,true]){
  const faces={[a]:x,[b]:y,[c]:z},values=modified?{[a]:x/2,[b]:-y,[c]:z/2}:faces;
  const fragment:Fragment={faces,values,parameters:{...defaults(sample.kind,old),...sample.p},regions:[[a,b],[c]],...sample.extra};
  const expected=fragmentVerdict(before.formulas[0].ast,old.prelude,before.parameters,fragment);
  expect(fragmentVerdict(after.formulas[0].ast,current.prelude,after.parameters,{...fragment,parameters:{...defaults(migrated.kind),...migrated.parameters}})).toBe(expected);
 }
});

test('drawing overlap diagnostics survive source migration',async()=>{
 for(const file of await readdir('tests/decoration'))if(file.endsWith('.rules.md')){
  const page={file:`tests/decoration/${file}`,text:await Bun.file(`tests/decoration/${file}`).text()};
  const before=checkCaseReferences(page,old.registry).diagnostics.map(d=>d.code);
  const migrated=migrateCase(page);expect(migrated.diagnostics).toEqual([]);
  expect(checkCaseReferences(migrated.value!,current.registry).diagnostics.map(d=>d.code)).toEqual(before);
 }
});
test('inert legacy parameters are removed from data and conditional source forms',()=>{
 const input={kind:'value-modifier',parameters:{name:'negator',factor:2,offset:0,exactly:[['r1c1']],count:1,atMostOne:[],distinct:false}};
 expect(migrateDeclaration(input)[0].parameters).not.toHaveProperty('name');
 expect(migrationTable.find(r=>r.kind==='value-modifier')!.parameterChanges).toEqual(['drop unused name']);
 const text=exampleCase('index r1c1-r1c2 axis "column" strips [] if distinct');
 const migrated=migrateCase({file:'index-condition',text});expect(migrated.diagnostics).toEqual([]);
 expect(migrated.value!.text).not.toContain('strips');expect(checkCaseReferences(migrated.value!,current.registry).diagnostics).toEqual([]);
});
test('large keyword integers keep an exact keyword declaration after migration',()=>{
 const page={file:'large-pair',text:exampleCase('pair r1c1-r1c2 sum 9007199254740993')};
 const migrated=migrateCase(page);expect(migrated.diagnostics).toEqual([]);
 const checked=checkCaseReferences(migrated.value!,current.registry);expect(checked.diagnostics).toEqual([]);
 expect(checked.value!.declarations[0].kind.value).toBe('pair');
 expect(checked.value!.declarations[0].parameters.find(p=>p.name.value==='relation')!.value.fields!.find(f=>f.name.value==='value')!.value.raw).toBe('9007199254740993');
});
test('all valid historical case readings migrate and check',async()=>{
 const readings:{file:string;text:string}[]=await Bun.file('tests/declarations/legacy-readings.json').json();let checked=0;
 for(const page of readings){
  if(checkCaseReferences(page,old.registry).diagnostics.length)continue;
  const migrated=migrateCase(page);expect(migrated.diagnostics,page.file).toEqual([]);
  expect(checkCaseReferences(migrated.value!,current.registry).diagnostics,page.file).toEqual([]);checked++;
 }
 expect(checked).toBeGreaterThan(50);
});

test('removed Index Count migrates under conditions with its original primary scope',()=>{
 const text=exampleCase('sudoku 9x9\ncount: not index-count sources ["r1c1","r1c1"] cells ["r1c2","r1c3"] target 3 total 1 if distinct');
 const migrated=migrateCase({file:'removed-count.rules.md',text});
 expect(migrated.diagnostics).toEqual([]);
 expect(migrated.value!.text).toContain('lookup');expect(migrated.value!.text).not.toContain('index-count');
 expect(migrated.value!.text).toContain('if distinct');expect(migrated.value!.text).toContain('not lookup');
 const checked=checkCaseReferences(migrated.value!,current.registry);expect(checked.diagnostics).toEqual([]);
 const declaration=checked.value!.declarations.find(d=>d.kind.value==='lookup')!;
 expect(declaration.parameters.find(p=>p.name.value==='cells')!.value.value).toEqual(['r1c2','r1c3']);
});

test('removed rule aliases migrate to their retained names in plain and scoped source forms',()=>{
 for(const [kind,target,parameters,line]of [
  ['whisper','whispers',{line:[a,b],gap:5},'r1c1-r1c2 gap 5'],
  ['killer','cage',{cells:[a,b],total:3},'r1c1-r1c2 total 3'],
  ['killer-cage','cage',{cells:[a,b],total:3},'r1c1-r1c2 total 3'],
  ['unique','extra-regions',{cells:[a,b]},'r1c1-r1c2'],
 ] as const){
  expect(current.namedRules.has(kind)).toBe(false);
  expect(migrationTable.find(r=>r.kind===kind)?.target).toBe(target);
  expect(migrateDeclaration({kind,parameters})[0].kind).toBe(target);
  for(const spelling of [kind,`https://rules.sudoku-sleuth.com/${kind}.md`])for(const suffix of ['', ' if distinct', ' element "paint"']){
   const source=exampleCase(`sudoku 9x9\nold: not ${spelling} ${line}${suffix} # retain`);
   expect(checkCaseReferences({file:'legacy-alias.rules.md',text:source},current.registry).diagnostics).toEqual([]);
   const migrated=migrateCase({file:'removed-alias.rules.md',text:source});
   expect(migrated.diagnostics).toEqual([]);
   expect(migrated.value!.text).toContain('"old": not ');
   expect(migrated.value!.text).toContain(target);
   expect(migrated.value!.text).toContain('# retain');
   expect(checkCaseReferences(migrated.value!,current.registry).diagnostics).toEqual([]);
  }
 }
});

test('embedded legacy helper migration avoids capturing a custom parameter named like a helper binder',()=>{
 const choice=baseline.pages.find(p=>p.file==='rules/choice-count.md')!;
 const text=caseExamples(choice.text)[0].replaceAll('firstLine','i');
 expect(checkCaseReferences({file:'legacy-custom.rules.md',text},old.registry).diagnostics).toEqual([]);
 const migrated=migrateCase({file:'legacy-custom.rules.md',text});
 expect(migrated.diagnostics).toEqual([]);
 expect(migrated.value!.text).not.toContain('monotonic(');
 expect(checkCaseReferences(migrated.value!,current.registry).diagnostics).toEqual([]);
});

test('explicit required inputs reject omission and accept supplied empty collections',()=>{
 for(const [kind,args,required] of [
  ['digit-profile',{cells:['r1c1'],classes:[],counts:[]},['classes','counts']],
  ['constructed-regions',{size:1,borders:[],joins:[]},['borders','joins']],
  ['cage-shapes',{size:1,hidden:[{clue:'r1c1',sum:1,known:['r1c1']}],free:[]},['free']],
  ['negative',{relations:[{op:'difference',value:1}],except:[]},['except']],
 ] as [string,Record<string,unknown>,string[]][]){
  const line=(p:Record<string,unknown>)=>kind+' '+Object.entries(p).map(([k,v])=>`${k} ${JSON.stringify(v)}`).join(' ');
  expect(checkCaseReferences({file:'required.rules.md',text:exampleCase(line(args))},current.registry).diagnostics).toEqual([]);
  for(const parameter of required){
   const missing={...args};delete missing[parameter];
   const result=checkCaseReferences({file:'required.rules.md',text:exampleCase(line(missing))},current.registry);
   expect(result.diagnostics.some(d=>d.code==='E_CASE_PARAMETERS'&&d.message.includes(parameter))).toBe(true);
  }
 }
});

test('lookup has no implicit origin and guards single-mode use',()=>{
 const lookup=current.rules.get('lookup')!;
 expect(defaults('lookup')).not.toHaveProperty('cell');
 const args={...defaults('lookup'),cells:['r1c2'],total:0};
 expect(fragmentVerdict(lookup.formulas[0].ast,current.prelude,lookup.parameters,{faces:{r1c1:1,r1c2:2},parameters:args})).toBe(false);
});

const customCase=(definition:unknown,lines='sudoku 9x9')=>exampleCase(lines)+`\n\`\`\`custom-rules\n${JSON.stringify([definition],null,2)}\n\`\`\`\n`;
const customSnippets:{file:string;names:string[];definition:unknown}[]=await Bun.file('tests/fixtures/migration-custom-definitions.json').json();
for(const snippet of customSnippets)test(`real custom formula migration: ${snippet.file} ${snippet.names.join(',')}`,()=>{
 const page={file:snippet.file,text:customCase(snippet.definition)};
 expect(readCustomDefinitions(page,markdownBlocks(page.text),old.registry.kinds,old.prelude).diagnostics).toEqual([]);
 const migrated=migrateCase(page);expect(migrated.diagnostics).toEqual([]);
 expect(readCustomDefinitions(migrated.value!,markdownBlocks(migrated.value!.text),current.registry.kinds,current.prelude).diagnostics).toEqual([]);
 expect(migrateCase(migrated.value!).value!.text).toBe(migrated.value!.text);
});
test('removed term table covers the archived vocabulary and transitive bodies',async()=>{
 const {legacyFormulaTerms}=await import('../../src/migration-data');
 for(const term of old.prelude.declarations.filter(d=>d.body&&!current.prelude.environment.terms[d.name]))expect(legacyFormulaTerms).toHaveProperty(term.name);
 const names=new Set(customSnippets.flatMap(s=>s.names));
 for(const name of ['sum_D','distinct_D','distinctAt','shaded','faceDigits','valueSum','distinct_V','min_D','product_D'])expect(names.has(name)).toBe(true);
});
const localCollisions:{file:string;id:string;parameters:Record<string,unknown>;maths:string}[]=await Bun.file('tests/fixtures/migration-local-collisions.json').json();
for(const definition of localCollisions)test(`real local collision migration: ${definition.file}`,()=>{
 const {file,...metadata}=definition;
 const extra=Object.keys(metadata.parameters).filter(p=>p!=='cells').map(p=>`${p} ${p==='ends'||p==='bulbs'?'["r1c1","r1c5"]':p==='marks'?'[{"r":0,"k":0}]':p==='strips'?'[["r1c1"]]':'[[{"colour":1,"total":1}]]'}`).join(' ');
 const line=`owned: not not #${metadata.id} ${metadata.parameters.cells?'r1c2-r1c3-r1c4 ':''}${extra} # retained comment`;
 const page={file,text:customCase(metadata,`sudoku 9x9\n${line}`)};
 const migrated=migrateCase(page);expect(migrated.diagnostics).toEqual([]);
 if(metadata.id==='split-pea'){
  expect(migrated.value!.text).not.toContain('#split-pea');
  expect(migrated.value!.text).toContain('"owned": not not split-pea');
 }else expect(migrated.value!.text).toContain(`#local-${metadata.id}`);
 expect(migrated.value!.text).toContain('# retained comment');
 expect(checkCaseReferences(migrated.value!,current.registry).diagnostics).toEqual([]);
 expect(migrateCase(migrated.value!).value!.text).toBe(migrated.value!.text);
});
test('unknown collision meanings and nondecimal alphabets keep their local formulas',()=>{
 const definition={id:'split-pea',name:'Different pea',parameters:{cells:{type:'path<cell>',description:'Ordered cells.'}},definition:'Every cell is one.',maths:'∀c∈cells:D(c)=1',example:'One satisfies; two breaks.'};
 const migrated=migrateCase({file:'different-pea',text:customCase(definition,'sudoku 9x9\n#split-pea r1c1-r1c2')});
 expect(migrated.value!.text).toContain('#local-split-pea');
 expect(checkCaseReferences(migrated.value!,current.registry).diagnostics).toEqual([]);
 const matching=localCollisions.find(d=>d.id==='split-pea')!;
 const nondecimal=customCase(matching,'sudoku 9x9').replace('symbols:[1,2,3,4,5,6,7,8,9]','symbols:[1,2,3,4,5,6,7,8,10]');
 expect(migrateCase({file:'nondecimal',text:nondecimal}).value!.text).toContain('local-split-pea');
});
test('removed helpers passed as function values retain typed local bodies',()=>{
 const definition={id:'prime-count',name:'Prime count',parameters:{cells:{type:'path<cell>',description:'Ordered cells.'}},definition:'At least one prime face digit.',maths:'countWhere({D(c)/1:c∈cells},prime)>0',class:'with aggregates',example:'Two satisfies; one breaks.'};
 const page={file:'function-reference',text:customCase(definition,'sudoku 9x9\n#prime-count r1c1-r1c2')};
 expect(checkCaseReferences(page,old.registry).diagnostics).toEqual([]);
 const migrated=migrateCase(page);expect(migrated.diagnostics).toEqual([]);
 expect(checkCaseReferences(migrated.value!,current.registry).diagnostics).toEqual([]);
 expect(migrated.value!.text).toContain('numericProperty');
});

test('formula printing retains binder types and expression scope',async()=>{
 const {parseFormula}=await import('../../src/language/parser');
 const {expressionKey}=await import('../../src/language/checker');
 const {formulaNotation}=await import('../../src/formula-notation');
 for(const formula of ['(if row(a)<row(b) then col(a) else col(b))<=col(c)', '(forall i∈[0,3): D(L[i])>0) and D(c)=1', '(let s:position=⌊aggregate(cells,"D","sum")⌋; s) mod 10=0', '(λc:cell:D(c))(a)=1']){
  const ast=parseFormula(formula).value!;
  const printed=parseFormula(formulaNotation(ast));expect(printed.diagnostics).toEqual([]);
  expect(expressionKey(printed.value!)).toBe(expressionKey(ast));
 }
});
test('legacy fragment collisions gain an explicit local id while retaining headings',()=>{
 const definition={url:'#battenburg',name:'Custom square',parameters:{cells:{type:'path<cell>',description:'Ordered cells.'}},definition:'Every face digit is one.',maths:'∀c∈cells:D(c)=1',example:'One satisfies; two breaks.'};
 const page={file:'legacy-fragment',text:exampleCase('#battenburg r1c1-r1c2')+'\n## Battenburg\n\n```custom-rules\n'+JSON.stringify([definition])+'\n```\n'};
 const migrated=migrateCase(page);expect(migrated.diagnostics).toEqual([]);
 expect(migrated.value!.text).toContain('## Battenburg');
 expect(checkCaseReferences(migrated.value!,current.registry).diagnostics).toEqual([]);
});
