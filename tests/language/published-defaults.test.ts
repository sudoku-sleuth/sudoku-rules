import {expect,test} from 'bun:test';
import {readdir} from 'node:fs/promises';
import {compilePublicLibrary,type PageSource} from '../../src';
import {fragmentVerdict,type Fragment} from './finite-fragment';
interface Example {kind:string;canonical:string;source:PageSource;parameters:Record<string,unknown>;assignments:{expected:boolean;faces:Record<string,number>}[];board?:{rows:number;cols:number;symbols:number[]}}
// Formula/header snapshots and example assignments from main at the recorded revision.
// Keeping the baseline in the fixture makes this independent of local refs and network access.
const fixture: {revision:string;prelude:PageSource;pages:Example[]}=await Bun.file('tests/fixtures/published-defaults.json').json();
const old=compilePublicLibrary([fixture.prelude,...fixture.pages.map(p=>p.source)]);
if(!old.value)throw Error(JSON.stringify(old.diagnostics));
const current=compilePublicLibrary(await Promise.all((await readdir('rules')).filter(n=>n.endsWith('.md')).map(async n=>({file:`rules/${n}`,text:await Bun.file(`rules/${n}`).text()})))).value!;
const defaults=(kind:string)=>Object.fromEntries(Object.entries(current.registry.parameters!.get(`https://rules.sudoku-sleuth.com/${kind}.md`)!.parameters).filter(([,p])=>Object.hasOwn(p,'default')).map(([name,p])=>[name,p.default]));
for(const example of fixture.pages)test(`published defaults: ${example.kind} matches main examples or the recorded Region Sum correction`,()=>{
 const before=old.value!.rules.get(example.canonical)!;
 const after=current.rules.get(current.aliases.get(example.kind)??example.kind)!;
 expect(example.assignments.length).toBe(2);
 for(const assignment of example.assignments){
  const cells=Object.keys(assignment.faces);
 const primaryRegions=[...new Set(cells.map(c=>{const [,r,k]=/r(\d+)c(\d+)/.exec(c)!;return `${Math.floor((Number(r)-1)/3)},${Math.floor((Number(k)-1)/3)}`;}))].map(box=>cells.filter(c=>{const [,r,k]=/r(\d+)c(\d+)/.exec(c)!;return `${Math.floor((Number(r)-1)/3)},${Math.floor((Number(k)-1)/3)}`===box;}));
  const fragment:Fragment={faces:assignment.faces,alphabet:example.board?.symbols,regions:primaryRegions,parameters:example.parameters,
   rows:example.board?.rows,cols:example.board?.cols};
 if(example.kind==='cage-expressions')fragment.witnesses={letterValues:[[1],[2]]};
 if(example.kind==='cage-shapes')fragment.witnesses={chosen:[[cells]]};
 if(example.kind==='constructed-regions')fragment.witnesses={P:[[cells]]};
 function routes(prefix:string[],remaining:string[]):string[][] {return [prefix,...remaining.flatMap((c,i)=>routes([...prefix,c],remaining.filter((_,j)=>j!==i)))];}
 if(['cage-shapes','constructed-regions','yin-yang'].includes(example.kind))fragment.witnesses={...fragment.witnesses,route:routes([],cells).filter(r=>r.length)};
 if(example.kind==='diagonal-lines') {
   fragment.faces={...Object.fromEntries(Array.from({length:9},(_,i)=>[`r${Math.floor(i/3)+1}c${i%3+1}`,1])),...assignment.faces};
 }
 if(example.kind==='window-classes'){fragment.rows=2;fragment.cols=2;}
 if(example.kind==='scoped-move')fragment.parameters={scope:cells,...example.parameters};
 if(example.kind==='value-modifier')fragment.values=Object.fromEntries(Object.entries(assignment.faces).map(([c,n])=>[c,2*n]));
 if(example.kind==='yin-yang')fragment.shaded=assignment.expected?['r1c1','r1c2']:['r1c1','r2c2'];


  const baseline=fragmentVerdict(before.formulas[0].ast,old.value!.prelude,before.parameters,fragment);
  const actual=fragmentVerdict(after.formulas[0].ast,current.prelude,after.parameters,{...fragment,parameters:{...defaults(example.kind),...fragment.parameters}});
  expect(baseline).toBe(assignment.expected);
  // Main's Region Sum example split r1c1-r1c2-r1c3 inside one box.
  // The documented formula tightening now rejects that non-maximal split,
  // matching the pre-existing lowering. The corrected page example crosses c3-c4.
  expect(actual).toBe(example.kind==='region-sum' ? false : baseline);
 }
});
test('baseline inventory covers every pre-change kind, including exact aliases',()=>{
 expect(fixture.revision).toMatch(/^[a-f0-9]{40}$/);
 expect(fixture.pages.length).toBe(83);
 expect(new Set(fixture.pages.map(p=>p.kind)).size).toBe(83);
});
