import {expect,test} from 'bun:test';
import {compilePublicLibrary,publicPages} from '../helpers/library';
import {checkCaseReferences,migrateCase} from '../../src';
import {fragmentVerdict,type Fragment} from './finite-fragment';
const library=compilePublicLibrary(publicPages).value!;
const a='r1c1',b='r1c2',c='r1c3';
function verdict(kind:string,parameters:Record<string,unknown>,faces:Record<string,number>,extra:Partial<Fragment>={}){
 const page=library.rules.get(kind)!;
 const defaults=Object.fromEntries(Object.entries(library.registry.parameters!.get(`https://rules.sudoku-sleuth.com/${kind}.md`)!.parameters).filter(([,p])=>Object.hasOwn(p,'default')).map(([k,p])=>[k,p.default]));
 return fragmentVerdict(page.formulas[0].ast,library.prelude,page.parameters,{faces,parameters:{...defaults,...parameters},...extra});
}
const relations={x:{op:'sum',value:10},v:{op:'sum',value:5},white:{op:'difference',value:1},black:{op:'ratio',value:2}};
const samples={x:[4,6,3],v:[1,4,3],white:[3,4,6],black:[2,4,7]};
for(const kind of ['x','v','white','black'] as const)test(`all ${kind} given accepts marks and refuses its unmarked relation`,()=>{
 const [left,right,other]=samples[kind];
 const p={[kind]:[[a,b]],allGiven:[kind]};
 expect(verdict('marked-pairs',p,{[a]:left,[b]:right,[c]:other})).toBe(true);
 expect(verdict('marked-pairs',p,{[a]:left,[b]:right,[c]:left})).toBe(false);
 expect(verdict('marked-pairs',p,{[a]:left,[b]:other})).toBe(false);
 expect(verdict('marked-pairs',{allGiven:[kind]},{[a]:left,[b]:right})).toBe(false);
 expect(verdict('marked-pairs',{allGiven:[kind]},{[a]:left,[c]:right})).toBe(true); // Non-neighbours.
 expect(verdict('marked-pairs',{[kind]:[[b,a]],allGiven:[kind]},{[a]:left,[b]:right})).toBe(true);
});
test('all Xs and Vs and all dots each have satisfying and breaking assignments',()=>{
 const xv={x:[[a,b]],v:[[b,c]],allGiven:['x','v']};
 expect(verdict('marked-pairs',xv,{[a]:6,[b]:4,[c]:1})).toBe(true);
 expect(verdict('marked-pairs',xv,{[a]:6,[b]:4,[c]:2})).toBe(false);
 const dots={white:[[a,b]],black:[[b,c]],allGiven:['white','black']};
 expect(verdict('marked-pairs',dots,{[a]:2,[b]:3,[c]:6})).toBe(true);
 expect(verdict('marked-pairs',dots,{[a]:1,[b]:2,[c]:4})).toBe(false); // White 1–2 also needs its own black mark.
 expect(verdict('marked-pairs',{...dots,black:[[a,b],[b,c]]},{[a]:1,[b]:2,[c]:4})).toBe(true);
});
test('only one kind given leaves the other kind unconstrained on unmarked edges',()=>{
 for(const [kind,faces]of [['x',[2,3]],['v',[4,6]],['white',[3,6]],['black',[3,4]]] as const){
  expect(verdict('marked-pairs',{allGiven:[kind]},{[a]:faces[0],[b]:faces[1]})).toBe(true);
 }
 expect(verdict('marked-pairs',{}, {[a]:2,[b]:3})).toBe(true);
});
test('marks exempt only their own relation, including across XV and Kropki',()=>{
 expect(verdict('marked-pairs',{black:[[a,b]],allGiven:['white']},{[a]:1,[b]:2})).toBe(false);
 expect(verdict('marked-pairs',{white:[[a,b]],allGiven:['black']},{[a]:1,[b]:2})).toBe(false);
 expect(verdict('marked-pairs',{white:[[a,b]],allGiven:['x']},{[a]:4,[b]:6},{values:{[a]:4,[b]:5}})).toBe(false);
 expect(verdict('marked-pairs',{x:[[a,b]],allGiven:['white']},{[a]:2,[b]:3},{values:{[a]:4,[b]:6}})).toBe(false);
 expect(verdict('marked-pairs',{x:[[a,b]],allGiven:['v']},{[a]:2,[b]:3},{values:{[a]:4,[b]:6}})).toBe(false);
});
test('V marked 2+3 still fails independent global nonconsecutive; X needs no not-5 exemption',()=>{
 const v=verdict('marked-pairs',{v:[[a,b]],allGiven:['v']},{[a]:2,[b]:3});
 const nonconsecutive=verdict('negative',{relations:[relations.white],except:[]},{[a]:2,[b]:3});
 expect(v).toBe(true);expect(v&&nonconsecutive).toBe(false);
 const x=verdict('marked-pairs',{x:[[a,b]],allGiven:['x','v']},{[a]:4,[b]:6});
 expect(x).toBe(true);
 expect(verdict('negative',{relations:[relations.v],except:[]},{[a]:4,[b]:6})).toBe(true);
 expect(verdict('negative',{relations:[relations.v],except:[]},{[a]:2,[b]:3})).toBe(false);
});
function source(lines:string){return {file:'example.rules.md',text:`---\nformat: open-rules\ntitle: Example\nsetter: Example\nsource: ""\ncase: ""\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n---\n\n\`\`\`rules\nsudoku 9x9\n${lines}\n\`\`\`\n`};}
const markLine=(kind:keyof typeof relations,pair=`${a}-${b}`)=>kind==='x'||kind==='v'?`pair ${pair} sum ${relations[kind].value} channel "V"`:`kropki ${pair} ${kind}`;
const negative=(kinds:(keyof typeof relations)[],except:unknown=[[a,b]],suffix='')=>`negative relations ${JSON.stringify(kinds.map(k=>relations[k]))} except ${JSON.stringify(except)}${suffix}`;
for(const kind of ['x','v','white','black'] as const)test(`migration infers ${kind} from its own complete exception set`,()=>{
 const page=source(`${markLine(kind)}\n${negative([kind],[[b,a],[a,b]])}`),before=page.text;
 const result=migrateCase(page);expect(result.diagnostics).toEqual([]);
 expect(result.value!.text).toContain(`allGiven ["${kind}"]`);
 expect(result.value!.text).not.toContain('negative relations');
 expect(checkCaseReferences(result.value!,library.registry).diagnostics).toEqual([]);
 expect(page.text).toBe(before);
 expect(migrateCase(result.value!).value!.text).toBe(result.value!.text);
});
test('migration combines separate exact negatives and splits combined exceptions by kind',()=>{
 const marks=`${markLine('x')}\n${markLine('v',`${b}-${c}`)}`;
 for(const negatives of [`${negative(['x'])}\n${negative(['v'],[[b,c]])}`,negative(['x','v'],[[a,b],[b,c]])]){
  const result=migrateCase(source(`${marks}\n${negatives}`));expect(result.diagnostics).toEqual([]);
  expect(result.value!.text).toContain('x [r1c1-r1c2] v [r1c2-r1c3] allGiven ["x","v"]');
  expect(checkCaseReferences(result.value!,library.registry).diagnostics).toEqual([]);
 }
 const dots=migrateCase(source(`${markLine('white')}\n${markLine('black',`${b}-${c}`)}\n${negative(['white','black'],[[a,b],[b,c]])}`));
 expect(dots.value!.text).toContain('allGiven ["white","black"]');
});
test('migration flags combined exceptions for relations without their own marks',()=>{
 const result=migrateCase(source(`${markLine('v')}\n${negative(['v','white'])}`));
 expect(result.value).toBeUndefined();expect(result.diagnostics[0].message).toContain('no marks of its own');
 const extra=negative(['x','v'],[[a,b],[b,c]]).replace('] except',',{"op":"at-least","value":4}] except');
 expect(migrateCase(source(`${markLine('x')}\n${markLine('v',`${b}-${c}`)}\n${extra}`)).value).toBeUndefined();
});
test('other negatives and annotated marks retain their meaning',()=>{
 for(const line of [negative(['x'],[]),negative(['x'],[[a,c]]),negative(['x'],[[a,b]],' direction "horizontal"'),negative(['x'],[[a,b]],' within [["r1c1","r1c2"]]'),`named: ${negative(['x'])}`,`not ${negative(['x'])}`]){
  const result=migrateCase(source(`${markLine('x')}\n${line}`));expect(result.diagnostics).toEqual([]);expect(result.value!.text).toContain('negative relations');expect(result.value!.text).not.toContain('xv x');
 }
 const independent=migrateCase(source(`${markLine('v')}\n${negative(['v'])}\n${negative(['white'],[])}`));
 expect(independent.value!.text).toContain('allGiven ["v"]');expect(independent.value!.text).toContain('negative relations [{"op":"difference","value":1}]');
 const annotated=migrateCase(source(`named: ${markLine('x')}\n${negative(['x'])}`));expect(annotated.value!.text).not.toContain('xv x');
});

test('grouping preserves comments on marks and negatives',()=>{
 const result=migrateCase(source(`${markLine('x')} # marked pair\n${negative(['x'])} # all Xs`));
 expect(result.diagnostics).toEqual([]);expect(result.value!.text).toContain('xv x');
 expect(result.value!.text).toContain('# marked pair');expect(result.value!.text).toContain('# all Xs');
 expect(checkCaseReferences(result.value!,library.registry).diagnostics).toEqual([]);
});

for(const number of [2,13])test(`Colorado ${number} migrates to the reviewed compact fixture`,async()=>{
 const base=`tests/fixtures/migration-all-given/colorado-${number}`;
 const input=await Bun.file(`${base}.input.md`).text();
 const expected=await Bun.file(`${base}.expected.md`).text();
 const page=source('').text.replace(/```rules\n[\s\S]*?```\n/,input);
 const result=migrateCase({file:`${base}.input.md`,text:page});
 expect(result.diagnostics).toEqual([]);
 expect(result.value!.text.match(/```rules\n[\s\S]*?```/)![0]+'\n').toBe(expected);
 expect(checkCaseReferences(result.value!,library.registry).diagnostics).toEqual([]);
 expect(migrateCase(result.value!).value!.text).toBe(result.value!.text);
 expect(expected.match(/^xv /gm)).toHaveLength(1);
 expect(expected).not.toMatch(/(?:pair-\d+:|negative|sudoku board)/);
 const marks=expected.match(/^xv x (.+) v (.+) allGiven/m)!;
 expect(marks[1].slice(1,-1).split(',')).toHaveLength(number===2?12:6);
 expect(marks[2].slice(1,-1).split(',')).toHaveLength(number===2?12:9);
});

test('generated IDs fold only when unreferenced, including across blocks',()=>{
 for(const quoted of [false,true]){
  const id=(name:string)=>quoted?JSON.stringify(name):name;
  const page=source(`${id('pair-1')}: ${markLine('x')}\n${id('negative-5')}: ${negative(['x'])}`);
  expect(migrateCase(page).value!.text).toContain('xv x');
  for(const name of ['pair-1','negative-5']){
   const referenced={...page,text:page.text+`\nReference: ${name}\n`};
   const output=migrateCase(referenced).value!.text;
   expect(output).not.toContain('xv x');
   expect(output).toContain(`${id(name)}:`);
  }
 }
 const separate=source(`pair-1: ${markLine('x')}\n\`\`\`\n\n\`\`\`rules\nnegative-1: ${negative(['x'])}`);
 expect(migrateCase(separate).value!.text).toContain('xv x');
});

test('migration retains authored bare and quoted meaningful labels',()=>{
 for(const id of ['special-clue','"special-clue"','"if"']){
  const result=migrateCase(source(`${id}: ${markLine('x')}\n${negative(['x'])}`));
  expect(result.diagnostics).toEqual([]);
  expect(result.value!.text).toContain(`${id}: xv`);
  expect(result.value!.text).not.toContain('xv x');
  expect(checkCaseReferences(result.value!,library.registry).diagnostics).toEqual([]);
 }
});

for(const kind of ['xv','kropki'] as const)test(`${kind} grouped syntax retains shared block meaning`,()=>{
 const marks=kind==='xv'?{x:[[a,b]],v:[[b,c]],allGiven:['x','v']}:{white:[[a,b]],black:[[b,c]],allGiven:['white','black']};
 const line=kind==='xv'?`xv x [${a}-${b}] v [${b}-${c}] allGiven ["x","v"]`:`kropki white [${a}-${b}] black [${b}-${c}] allGiven ["white","black"]`;
 const page=source(line);
 expect(checkCaseReferences(page,library.registry).diagnostics).toEqual([]);
 const migrated=migrateCase(page);expect(migrated.diagnostics).toEqual([]);expect(migrated.value!.text).toBe(page.text);
 for(let left=1;left<=6;left++)for(let middle=1;middle<=6;middle++)for(let right=1;right<=6;right++){
  const faces={[a]:left,[b]:middle,[c]:right};
  expect(verdict(kind,marks,faces)).toBe(verdict('marked-pairs',marks,faces));
 }
});

test('mixed all-given families retain Marked Pairs and compact pairs',()=>{
 const result=migrateCase(source(`${markLine('x')}\n${markLine('white',`${b}-${c}`)}\n${negative(['x'])}\n${negative(['white'],[[b,c]])}`));
 expect(result.diagnostics).toEqual([]);
 expect(result.value!.text).toContain('marked-pairs x [r1c1-r1c2] white [r1c2-r1c3] allGiven ["x","white"]');
 expect(checkCaseReferences(result.value!,library.registry).diagnostics).toEqual([]);
 expect(migrateCase(result.value!).value!.text).toBe(result.value!.text);
});

test('generated labels drop on ordinary rules while authored and referenced labels survive',()=>{
 for(const [id,line]of [['sudoku-1','sudoku 9x9'],['anti-knight-1','anti-knight'],['arrow-1','arrow line r1c1-r1c2 bulb [r2c1] partial false']]){
  for(const label of [id,JSON.stringify(id)]){
   const page=source(`${label}: not not ${line}`);
   const result=migrateCase(page);expect(result.diagnostics).toEqual([]);
   expect(result.value!.text).not.toContain(`${label}:`);
   expect(result.value!.text).toContain('not not '+line.split(' ')[0]);
   expect(result.value!.text).not.toContain('partial false');
   expect(migrateCase({...page,text:page.text+`\nReference: ${id}\n`}).value!.text).toContain(`${label}:`);
  }
  expect(migrateCase(source(`authored: ${line}`)).value!.text).toContain('authored:');
 }
 expect(migrateCase(source('arrow line r1c1-r1c2 bulb [r2c1] partial true')).value!.text).toContain('partial true');
});

test('existing shared-block declarations print their family names',()=>{
 for(const [parameters,expected]of [
  ['x [["r1c1","r1c2"]] allGiven ["x","v"]','xv x [r1c1-r1c2] allGiven ["x","v"]'],
  ['white [["r1c1","r1c2"]] allGiven ["white"]','kropki white [r1c1-r1c2] allGiven ["white"]'],
  ['x [["r1c1","r1c2"]] black [["r2c1","r2c2"]]','marked-pairs x [r1c1-r1c2] black [r2c1-r2c2]'],
 ]){
  const result=migrateCase(source(`authored: marked-pairs ${parameters}`));
  expect(result.diagnostics).toEqual([]);expect(result.value!.text).toContain(`authored: ${expected}`);
  expect(checkCaseReferences(result.value!,library.registry).diagnostics).toEqual([]);
  expect(migrateCase(result.value!).value!.text).toBe(result.value!.text);
 }
});

test('compact nested pairs preserve diagnostic cell spans and quoted strings',()=>{
 const page=source('xv x [r1c1-r10c1]');
 const error=checkCaseReferences(page,library.registry).diagnostics[0];
 expect(page.text.slice(error.span.start.offset,error.span.end.offset)).toBe('r10c1');
 for(const line of ['xv x [r1c1-r1c2,,r2c1-r2c2]','xv x [r1c1-]'])expect(checkCaseReferences(source(line),library.registry).diagnostics.length).toBeGreaterThan(0);
 const quoted=source('xv x [r1c1-r1c2] element "r1c1-r1c2"');
 expect(checkCaseReferences(quoted,library.registry).diagnostics).toEqual([]);
 expect(migrateCase(quoted).value!.text).toContain('element "r1c1-r1c2"');
});
