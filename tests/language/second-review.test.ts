import {compilePublicLibrary,publicPages} from '../helpers/library';
import {expect,test} from 'bun:test';
import {checkCaseReferences,checkFormula,parseFormula} from '../../src';
import {formulaBlocks} from '../../src/library';
import {declarationLibrary} from '../../src/declaration-library';
import {chosenAnswerPrimitives} from '../../src/shared-primitives';
import {fragmentVerdict,type Fragment} from './finite-fragment';
const sources = publicPages;
const library=compilePublicLibrary(sources).value!;
const a='r1c1',b='r1c2',c='r1c3';
const faces={[a]:1,[b]:2,[c]:3};
function verdict(kind:string,parameters:Record<string,unknown>,extra:Partial<Fragment>={}){
 const page=library.rules.get(kind)!;
 const contract=library.registry.parameters!.get(`https://rules.sudoku-sleuth.com/${kind}.md`)!;
 const defaults=Object.fromEntries(Object.entries(contract.parameters).filter(([,p])=>Object.hasOwn(p,'default')).map(([n,p])=>[n,p.default]));
 return fragmentVerdict(page.formulas[0].ast,library.prelude,page.parameters,{faces,parameters:{...defaults,...parameters},...extra});
}
function source(lines:string,definitions=''){
 return {file:'review.rules.md',text:`---\nformat: open-rules\ntitle: Review\nsetter: Example\nsource: ""\ncase: ""\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n---\n\`\`\`rules\nsudoku 9x9\n${lines}\n\`\`\`\n${definitions}`};
}
const check=(lines:string)=>checkCaseReferences(source(lines),library.registry).diagnostics;
test('A: the three specialised pages only bind their general definition',()=>{
 for(const [kind,target] of [['counting-circles','digit-profile'],['constructed-regions','region-partition']]){
  expect(library.shorthands.get(kind)!.target).toBe(target);
  expect(formulaBlocks(sources.find(p=>p.file===`rules/${kind}.md`)!)).toHaveLength(0);
 }
 expect(library.shorthands.get('constructed-regions')!.bindings.separation).toBe('absent("orthogonal")');
 expect(library.prelude.environment.terms.truthCount).toBeUndefined();
 expect(library.prelude.environment.terms.symbolFrequency).toBeUndefined();
});
test('B/F: shared-name contracts are page-derived, exported, and keyed by kind',()=>{
 expect(declarationLibrary.kindByUrl).toEqual(library.registry.kindByUrl);
 expect(declarationLibrary.sharedNames).toEqual(library.registry.sharedNames);
 for(const [kind,params] of library.registry.sharedNames!){
  for(const [name,shared] of Object.entries(params)){
   if(shared.role==='construct')expect(name).toBe('name');
   if(shared.role==='read')expect(name).not.toBe('name');
  }
 }
 expect(library.registry.sharedNames!.get('network-clue')).toEqual({network:{role:'read',type:'network'},route:{role:'read',type:'route'}});
 expect(library.registry.sharedNames!.get('paired-roles')!.name).toEqual({role:'construct',type:'network'});
 for(const old of ['network-clue name "x"','route-clue name "x"','symbol-house name "D" houses [] digits [] counts []','mapped-values name "H" scope []'])expect(check(old).some(d=>d.message.includes('Unknown parameter'))).toBe(true);
 // The URL basename and source filename need not match the declared kind.
 const remapped=compilePublicLibrary(sources.map(p=>p.file==='rules/route.md'?{file:'elsewhere/custom.md',text:p.text.replace('https://rules.sudoku-sleuth.com/route.md','https://rules.sudoku-sleuth.com/different.md')}:p)).value!;
 expect(checkCaseReferences(source('https://rules.sudoku-sleuth.com/different.md name "trail" scope ["r1c1"]\nroute-clue route "trail"'),remapped.registry).diagnostics).toEqual([]);
 expect(chosenAnswerPrimitives.routeClosed).toBeUndefined();
 expect(checkFormula(parseFormula('routeClosed("trail")').value!,library.prelude.environment).value!.logicClass).toBe('first-order');
});
test('C: V and named channels conjoin with free outside by default',()=>{
 for(const channel of ['V','other']){
  const lines=`map-1: mapped-values selectionRef "H" values "${channel}" scope ["${a}"] factor 2\nmap-2: mapped-values selectionRef "H" values "${channel}" scope ["${b}"] factor 3`;
  expect(check(lines)).toEqual([]);
  expect(check(lines.replace('map-2: mapped-values','map-2: not mapped-values'))).toEqual([]);
  const values={...faces,[a]:2,[b]:6};
  const extra={shaded:[a,b],...(channel==='V'?{values}:{valueAnswers:{other:values}})};
  const p={selectionRef:'H',values:channel,scope:[a],factor:2},q={selectionRef:'H',values:channel,scope:[b],factor:3};
  expect(verdict('mapped-values',p,extra)).toBe(true);
  expect(verdict('mapped-values',q,extra)).toBe(true);
  expect(verdict('mapped-values',{...p,outside:'identity'},extra)).toBe(false);
  expect(verdict('mapped-values',{...p,factor:3},extra)).toBe(false);
 }
 expect(library.registry.parameters!.get('https://rules.sudoku-sleuth.com/mapped-values.md')!.parameters.outside.default).toBe('free');
 expect(readerCase('channelValue("other",boardCell(0,0))=2').diagnostics.map(d=>d.message)).toEqual(['value "other" needs at least one Mapped Values declaration; found none.']);
});
test('D: a singleton Maze and Network Clue share an empty edge list',()=>{
 const extra={networkAnswers:{one:[]},routeAnswers:{point:[a]}};
 expect(check(`maze name "one" scope ["${a}"]\nroute name "point" scope ["${a}"]\nnetwork-clue network "one" route "point" degrees [{"cell":"${a}","degree":0}]`)).toEqual([]);
 expect(verdict('maze',{name:'one',scope:[a]},extra)).toBe(true);
 expect(verdict('network-clue',{network:'one',route:'point',degrees:[{cell:a,degree:0}]},extra)).toBe(true);
 expect(verdict('network-clue',{network:'one',degrees:[{cell:a,degree:1}]},extra)).toBe(false);
});
function readerCase(maths:string,names=['trail'],registry=library.registry){
 const doc=source(`route name "trail" scope ["${a}"]\n#reader refs ${JSON.stringify(names)}`,`\`\`\`custom-rules\n- id: reader\n  name: Reader\n  class: existential\n  parameters:\n    refs:\n      type: list<string>\n      description: Fixed route names.\n  definition: Read fixed routes.\n  maths: '${maths}'\n  example: Read the chosen route.\n\`\`\``);
 return {doc,diagnostics:checkCaseReferences(doc,registry).diagnostics};
}
test('E: countWhere lambdas, quantifiers and prelude wrappers resolve fixed names at parameter spans',()=>{
 const wrapper=compilePublicLibrary(sources.map(p=>p.file==='rules/predicates.md'?{...p,text:p.text.replace('primitive routeAnswer(name:string):list<cell>;', 'primitive routeAnswer(name:string):list<cell>;\nterm routeVotes(xs:list<string>):position = countWhere(xs,λs:string:|routeAnswer(s)|>0);\nterm applyNames(xs:list<string>,f:fn(string)->boolean):position = countWhere(xs,f);')}:p)).value!;
 for(const maths of ['countWhere(refs,λs:string:|routeAnswer(s)|>0)=1','∀s∈refs:|routeAnswer(s)|>0','routeVotes(refs)=1','applyNames(refs,λs:string:|routeAnswer(s)|>0)=1','countWhere(⟨s:s∈refs⟩,λs:string:|routeAnswer(s)|>0)=1','countWhere([0,|refs|),λi:position:0<=i ∧ i<|refs| ∧ |routeAnswer(refs[i])|>0)=1']){
  expect(readerCase(maths,['trail'],wrapper.registry).diagnostics).toEqual([]);
  const {doc,diagnostics}=readerCase(maths,['ghost'],wrapper.registry);
  const missing=diagnostics.filter(d=>d.message.includes('found none'));
  expect(missing).toHaveLength(1);
  expect(doc.text.slice(missing[0].span.start.offset,missing[0].span.end.offset)).toBe('["ghost"]');
 }
});
test('H: the rule index lists all thirty additions',()=>{
 const kinds=['coordinate-count','relation-scope','local-sequence','lookup','aggregate-equation','subset-total','digit-profile','profile-relation','number-property','derived-count','neighbour-count','route','route-group','route-clue','maze','network-clue','region-partition','region-shape','region-clue','selection','marking-relation','battenburg','shade-components','japanese-sums','mapped-values','paired-roles','choice-count','assignment','cell-entries','symbol-house'];
 expect(kinds).toHaveLength(30);
 const index=sources.find(p=>p.file==='rules/README.md')!.text;
 for(const kind of kinds)expect(index).toContain(`](https://rules.sudoku-sleuth.com/${kind}.md)`);
});
test('I: invalid shared names, domains and incompatible parameters fail at their values',()=>{
 const operand='{"cells":[],"channel":"D","operation":"sum","repeats":true}';
 expect(check(`derived-count quantities [{"left":${operand},"right":${operand},"operation":"sum"}] mode "distinct" total 1`)).toEqual([]);
 for(const [line,parameter] of [
  ['cell-entries name "D" scope ["r1c1"]','"D"'],
  ['cell-entries name "V" scope ["r1c1"]','"V"'],
  ['mapped-values selectionRef "H" values "D" scope ["r1c1"]','"D"'],
  ['paired-roles left "H" right "H" name "links" scope ["r1c1"] relation {"op":"less"}','"H"'],
  ['region-partition name "areas" scope ["r1c1"] sizes [0]','[0]'],
  ['route name "one" scope ["r1c1"]\nroute-group routes ["one"]','["one"]'],
  ['route name "one" scope ["r1c1"]\nroute-group routes ["one","one"]','["one","one"]'],
  [`derived-count quantities [{"left":${operand},"right":${operand},"operation":"sum"}] mode "distinct" target 0 total 1`,'0'],
  [`derived-count quantities [{"left":${operand},"right":${operand},"operation":"sum"}] mode "distinct" relation {"op":"less"} total 1`,'{"op":"less"}'],
 ]){
  const doc=source(line),errors=checkCaseReferences(doc,library.registry).diagnostics;
  expect(errors).toHaveLength(1);
  expect(errors[0].code).toBe('E_CASE_PARAMETERS');
  expect(doc.text.slice(errors[0].span.start.offset,errors[0].span.end.offset)).toBe(parameter);
 }
});
test('J: passing through a visited endpoint is allowed; proper interior crossings are forbidden',()=>{
 // The first bishop step passes through middle; the route visits it later.
 const r='r5c5',s='r7c3',t='r5c1',middle='r3c3';
 const extra={faces:{[a]:1,[r]:2,[s]:3,[t]:4,[middle]:5},routeAnswers:{trail:[a,r,s,t,middle]}};
 expect(verdict('route',{name:'trail',scope:[a,r,s,t,middle],move:'bishop',crossings:false},extra)).toBe(true);
 const endpointContact={faces:{[a]:1,[r]:2,[s]:3,[middle]:4},routeAnswers:{one:[a,r],two:[middle,s]}};
 expect(verdict('route-group',{routes:['one','two'],crossings:false},endpointContact)).toBe(true);
 const cross={faces:{[a]:1,r3c3:2,r1c3:3,r3c1:4},routeAnswers:{one:[a,'r3c3'],two:['r1c3','r3c1']}};
 expect(verdict('route-group',{routes:['one','two'],crossings:false},cross)).toBe(false);
 expect(verdict('route-group',{routes:['one','two'],crossings:true},cross)).toBe(true);
});
test('K: the changelog describes public behaviour without phase labels',async()=>{
 expect(await Bun.file('CHANGELOG.md').text()).not.toMatch(/Phase [AB]|published-default.*fixture|synthetic|unsupported-instance|finite executable/i);
});

test('shared references preserve published parameter types',()=>{
 const parameters=(kind:string)=>library.registry.parameters!.get(`https://rules.sudoku-sleuth.com/${kind}.md`)!.parameters;
 for(const kind of ['mapped-values','marking-relation','japanese-sums','shade-components','battenburg']){
  expect(parameters(kind).selectionRef.type).toEqual({name:'string'});
  expect(parameters(kind).selection).toBeUndefined();
 }
 for(const kind of ['nabner','bremban','renban'])expect(parameters(kind).selection.type).toEqual({name:'optional',args:[{name:'PrefixSelection'}]});
 for(const [kind,key] of [['mapped-values','values'],['symbol-house','symbols']]){
  expect(parameters(kind)[key].type).toEqual({name:'string'});
  expect(parameters(kind).channel).toBeUndefined();
 }
 expect(parameters('thermo').channel.type).toEqual({name:'Channel'});
 expect(check('cell-entries name "pencil" scope ["r1c1"]')).toEqual([]);
 expect(check('route name "one" scope ["r1c1"]\nroute name "two" scope ["r1c2"]\nroute-group routes ["one","two"]')).toEqual([]);
});
