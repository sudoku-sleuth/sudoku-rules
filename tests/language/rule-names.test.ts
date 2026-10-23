import {expect,test} from 'bun:test';
import {compilePublicLibrary,publicPages} from '../helpers/library';
import {checkCaseReferences,migrateDeclaration,normalise} from '../../src';
import {fragmentVerdict} from './finite-fragment';
const library=compilePublicLibrary(publicPages).value!;
const a='r1c1',b='r1c2',c='r1c3';
const page=(line:string,standard=true)=>({file:'names.rules.md',text:`---
format: open-rules
title: Named rules
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

\`\`\`rules
${standard?'sudoku 9x9\n':''}${line}
\`\`\`
`});
test('Diagonal Sum keeps the Little Killer contract, route and migration',()=>{
 expect(library.aliases.get('little-killer')).toBe('diagonal-sum');
 expect(library.registry.parameters!.get('https://rules.sudoku-sleuth.com/little-killer.md')).toEqual(library.registry.parameters!.get('https://rules.sudoku-sleuth.com/diagonal-sum.md'));
 for(const spelling of ['diagonal-sum','little-killer','https://rules.sudoku-sleuth.com/little-killer.md'])
  expect(checkCaseReferences(page(`${spelling} r1c1-r2c2 sum 10`),library.registry).diagnostics).toEqual([]);
 expect(migrateDeclaration({kind:'little-killer',parameters:{cells:[a,b,a],sum:10,channel:'V',repeats:false}})).toEqual([{kind:'diagonal-sum',parameters:{cells:[a,b,a],sum:10,channel:'V',repeats:false}}]);
});
for(const gap of [4,5])test(`Whispers ${gap} fixes the general gap for paths, loops and networks`,()=>{
 const kind=`whispers-${gap}`,rule=library.rules.get(kind)!,general=library.rules.get('whispers')!;
 expect(library.shorthands.get(kind)!.target).toBe('difference-line');
 expect(library.shorthands.get(kind)!.bindings.gap).toBe(String(gap));
 expect(rule.parameters.some(p=>p.name==='gap')).toBe(false);
 expect(checkCaseReferences(page(`${kind} ${a}-${b}`),library.registry).diagnostics).toEqual([]);
 expect(checkCaseReferences(page(`${kind} ${a}-${b} gap ${gap}`),library.registry).diagnostics.length).toBeGreaterThan(0);
 for(const parameters of [{line:[a,b],loop:false},{line:[a,b,c],loop:true},{line:[],edges:[[a,b],[b,c]],loop:false}]){
  for(const y of [gap,gap+1]){
   const fragment={faces:{[a]:1,[b]:y,[c]:2},parameters};
   const named=fragmentVerdict(rule.formulas[0].ast,library.prelude,rule.parameters,fragment);
   const old=fragmentVerdict(general.formulas[0].ast,library.prelude,general.parameters,{...fragment,parameters:{...parameters,gap}});
   expect(named).toBe(old);
   if(parameters.line.length===2)expect(named).toBe(y===gap+1);
  }
 }
 expect(migrateDeclaration({kind:'whispers',parameters:{line:[a,b],gap}})[0].kind).toBe('whispers');
 const board={rows:1,cols:2,alphabet:[1,2,3,4,5,6,7,8,9],activeCells:[a,b] as `r${number}c${number}`[],regions:[]};
 const named=normalise(page(`${kind} ${a}-${b} loop false`,false),board);
 const generalForm=normalise(page(`whispers ${a}-${b} gap ${gap} loop false`,false),board);
 expect(named.issues).toEqual([]);
 expect(generalForm.issues).toEqual([]);
 expect(named.status).toBe("complete");
 expect(generalForm.status).toBe("complete");
 expect(named.normalForm!.solution).toEqual(generalForm.normalForm!.solution);
 const modified=normalise(page(`value-modifier factor 2 offset 0 exactly [["${a}"]] count 1 atMostOne [] distinct false
${kind} ${a}-${b} loop false`,false),board);
 expect(modified.issues).toEqual([]);
 expect(modified.normalForm!.coverage.find(c=>c.kind===kind)!.status).toBe('unsupported');
});
