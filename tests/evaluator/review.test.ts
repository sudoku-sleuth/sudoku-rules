import {expect,test,spyOn} from 'bun:test';
import {stringify} from 'yaml';
import {allowed,checkAnswer,compileCase,evaluate,type Assignment,type CompiledRule,type Cell} from '../../src';
import {compile,file} from './api.test';
import {declarationLibrary} from '../../src/declaration-library';
import * as documents from '../../src/documents';
import {evaluatorLibrary} from '../../src/evaluator-library';

const verdict=(rule:CompiledRule,assignment:Assignment)=>{const result=evaluate(rule,assignment);return {...result,...result.cells?{cells:new Set(result.cells)}:{}};};
const a:Cell='r1c1',b:Cell='r1c2',c:Cell='r1c3';
const custom=(maths:string)=>'```custom-rules\n'+stringify([{id:'review',name:'Review',parameters:{cells:{type:'path<cell>',description:'Cells.'}},definition:'Review formula.',maths,example:'Review assignments.'}])+'```';
test('review 1: unknown auxiliaries support candidates',()=>{
 const r=compile('thermo r1c1-r1c2 if uniform').rules[0];
 expect(allowed(r,{digits:{[a]:3},shading:{[a]:true}},new Map())).toEqual(new Map([[b,new Set([1,2,3])]]));
});
test('review 2: collect separate clashes and all members of a clash',()=>{
 const r=compile('sudoku 9x9','','').rules[0];
 const digits={r1c1:1,r1c2:1,r4c4:2,r4c5:2,r7c7:3,r7c8:3};
 expect(new Set(evaluate(r,{digits}).cells)).toEqual(new Set(Object.keys(digits)));
 const unique=compile('unique r1c1-r1c2-r1c3').rules[0];
 expect(new Set(evaluate(unique,{digits:{[a]:1,[b]:1,[c]:1}}).cells)).toEqual(new Set([a,b,c]));
});
test('review 2: general conjunctions and universal occurrences collect conflicts',()=>{
 const r=compile('#review r1c1-r1c2-r1c3',custom('∀c∈cells:D(c)=1')).rules[0];
 expect(new Set(evaluate(r,{digits:{[a]:2,[b]:1,[c]:3}}).cells)).toEqual(new Set([a,c]));
 const conjunction=compile('#review r1c1-r1c2',custom('|cells|=2 ∧ (D(cells[0])=1 ∧ D(cells[1])=1)')).rules[0];
 expect(new Set(evaluate(conjunction,{digits:{[a]:2,[b]:3}}).cells)).toEqual(new Set([a,b]));
});
test('review 2: missing formula answers do not hide other broken formulas',()=>{
 const first=compile('#review r1c1-r1c2',custom('|cells|=2 ∧ D(cells[0])=1')).rules[0];
 const second=compile('#review r1c1-r1c2',custom('|cells|=2 ∧ D(cells[1])=1')).rules[0];
 const r={...first,page:{...first.page,formulas:[...first.page.formulas,...second.page.formulas]}};
 expect(verdict(r,{digits:{[b]:2}})).toEqual({status:'broken',cells:new Set([b])});
});
test('review 3: partial conflicts contain filled culprits',()=>{
 const r=compile('whisper r1c1-r1c2-r1c3 gap 5 loop false','','board: {rows: 1, cols: 3, symbols: [1,2,3,4,5,6,7,8,9]}\n').rules[0];
 expect(verdict(r,{digits:{[a]:5,[c]:5}})).toEqual({status:'broken',cells:new Set([a,c])});
 expect(verdict(compile('not anti-knight').rules[0],{digits:{}})).toEqual({status:'broken',cells:new Set([])});
 const neg=compile('not thermo r1c1-r1c2').rules[0];
 expect(new Set(evaluate(neg,{digits:{[a]:1,[b]:2}}).cells)).toEqual(new Set([a,b]));
});
test('review 4: aggregate aliases read local cells',()=>{
 for(const name of ['killer','cage','little-killer']){
 const r=compile(`${name} r1c1-r1c2-r1c3 ${name==='little-killer'?'sum':'total'} 6`,'','board: {rows: 9, cols: 9, symbols: [1,2,3,4,5,6,7,8,9]}\n').rules[0];
 expect(new Set(r.scope)).toEqual(new Set([a,b,c]));
 expect(verdict(r,{digits:{[a]:9}})).toEqual({status:'broken',cells:new Set([a])});
 expect(allowed(r,{digits:{[a]:9}},new Map())).toEqual(new Map([[b,new Set()],[c,new Set()]]));
 }
});
test('review 5: invalid digits and resource refusals return verdicts',()=>{
 const r=compile('thermo r1c1-r1c2').rules[0];
 expect(verdict(r,{digits:{[a]:99}})).toEqual({status:'broken',cells:new Set([a])});
 const unbounded=compile('#review r1c1',custom('∃n∈ℤ:n*n=2')).rules[0];
 expect(evaluate(unbounded,{digits:{}}).status).toBe('undecided');
});
test('review 7: invalid and missing answers return holds false',()=>{
 const compiled=compile('thermo r1c1-r1c2 if uniform');
 expect(checkAnswer(compiled,{digits:{[a]:99,[b]:2,[c]:3}}).holds).toBe(false);
 expect(checkAnswer(compiled,{digits:{[a]:3,[b]:2,[c]:1}}).holds).toBe(false);
 expect(checkAnswer(compiled,{digits:{}}).holds).toBe(false);
});
test('review 6: one shared expression budget bounds nested quantifiers',()=>{
 const r=compile('#review r1c1',custom('∀a:cell:∀b:cell:∀c:cell:D(a)=D(b) ∧ D(b)=D(c)'),'board: {rows: 9, cols: 9, symbols: [1,2,3]}\n').rules[0];
 const digits=Object.fromEntries(r.board.activeCells.map(c=>[c,1]));
 const start=performance.now(),result=evaluate(r,{digits}),evaluated=performance.now();
 const candidates=allowed(r,{digits},new Map()),finished=performance.now();
 expect(result.status).toBe('undecided');expect(candidates).toBe('too-large');
 console.log(`nested quantifier budget: evaluate=${(evaluated-start).toFixed(3)} ms; allowed=${(finished-evaluated).toFixed(3)} ms`);
});
test('review 6: candidate completions spend one budget together',()=>{
 const r=compile('#review r1c1',custom('∀a:cell:∀b:cell:D(a)=D(b)'),'board: {rows: 9, cols: 9, symbols: [1,2,3]}\n').rules[0];
 const digits=Object.fromEntries(r.board.activeCells.map(c=>[c,1]));
 expect(evaluate(r,{digits}).status).toBe('holds');
 delete digits[a];
 expect(allowed(r,{digits},new Map([[a,new Set([1,2,3])]]))).toBe('too-large');
});
test('review 8: returned witnesses never alias compiled scope',()=>{
 const r=compile('not thermo r1c1-r1c2').rules[0],scope=[...r.scope];
 evaluate(r,{digits:{[a]:1,[b]:2}}).cells?.splice(0);
 expect(r.scope).toEqual(scope);
 const answer=checkAnswer({rules:[r],board:r.board},{digits:{[a]:1,[b]:2,[c]:3}});
 answer.broken[0].cells.splice(0);expect(r.scope).toEqual(scope);
});
test('review 9: missing executable definitions emit diagnostics',()=>{
 const page=evaluatorLibrary().rules.get('cage')!;const formulas=page.formulas;
 try{
  page.formulas=[];
  const result=compileCase(file('cage r1c1-r1c2 total 3','','board: {rows: 9, cols: 9, symbols: [1,2,3,4,5,6,7,8,9]}\n'));
  expect(result.value).toBeUndefined();
  expect(result.diagnostics.some(d=>d.code==='E_CUSTOM_DEFINITION')).toBe(true);
 }finally{page.formulas=formulas;}
});
test('review 9: a declaration without its resolved reference is diagnosed',()=>{
 const source=file('thermo r1c1-r1c2');
 const checked=documents.checkCaseReferences(source,declarationLibrary);
 expect(checked.value).toBeDefined();
 const spy=spyOn(documents,'checkCaseReferences').mockReturnValue({...checked,value:{...checked.value!,references:[]}});
 try{
  const result=compileCase(source);expect(result.value).toBeUndefined();
  expect(result.diagnostics.some(d=>d.message.includes('No resolved reference'))).toBe(true);
 }finally{spy.mockRestore();}
});
test('review 10: local H membership reads only the requested shade',()=>{
 const r=compile('#review r1c1',custom('∀c∈cells:c∈H')).rules[0];
 expect(evaluate(r,{digits:{},shading:{[a]:true}}).status).toBe('holds');
 expect(evaluate(r,{digits:{},shading:{[a]:false}}).status).toBe('broken');
});
test('review 10: bounded whole-set shading refinement',()=>{
 const tautology=compile('#review r1c1',custom('|H|=0 ∨ |H|>0')).rules[0];
 expect(evaluate(tautology,{digits:{}}).status).toBe('holds');
});
// Independent truth functions: every digit and shade completion of every partial pair.
test('review 11: exhaustive small-board oracle for verdicts, witnesses and support',()=>{
 const cases:[string,(x:number,y:number,s:boolean,t:boolean)=>boolean][]=[
 ['thermo r1c1-r1c2',(x,y)=>x<y],
 ['cage r1c1-r1c2 total 4 repeats false channel \"D\"',(x,y)=>x+y===4&&x!==y],
 ['little-killer r1c1-r1c2 sum 4 repeats true channel \"D\"',(x,y)=>x+y===4],
 ['marking-relation selectionRef \"H\" pairs [[\"r1c1\",\"r1c2\"]]',(_x,_y,s,t)=>s!==t],
 ['not thermo r1c1-r1c2',(x,y)=>x>=y],
 ['not quadruple r1c1-r1c2 digits [1]',(x,y)=>x!==1&&y!==1],
 ['thermo r1c1-r1c2 if uniform',(x,y,s,t)=>s!==t||x<y],
 ['not thermo r1c1-r1c2 unless uniform',(x,y,s,t)=>s===t||x>=y],
 ['#review r1c1-r1c2',(_x,_y,s,t)=>s!==t],
 ['not #review r1c1-r1c2',(_x,_y,s,t)=>s===t],
 ['#whole r1c1-r1c2',(_x,_y,s,t)=>Number(s)+Number(t)===1],
 ];
 const shades=custom('|cells|=2 ∧ ((cells[0]∈H) != (cells[1]∈H))');
 let grids=0;
 for(const [text,truth] of cases){
 const r=compile(text,text.includes('#whole')?custom('|H|=1').replaceAll('review','whole'):text.includes('#review')?shades:'','board: {rows: 1, cols: 2, symbols: [1,2,3]}\n').rules[0];
 for(const x of [undefined,1,2,3])for(const y of [undefined,1,2,3])for(const s of [undefined,false,true])for(const t of [undefined,false,true]){
  const digits:Partial<Record<Cell,number>>={},shading:Partial<Record<Cell,boolean>>={};
  if(x!==undefined)digits[a]=x;if(y!==undefined)digits[b]=y;if(s!==undefined)shading[a]=s;if(t!==undefined)shading[b]=t;
  const completions:{x:number;y:number;holds:boolean}[]=[];
  for(const u of [1,2,3])for(const v of [1,2,3])for(const p of [false,true])for(const q of [false,true])if((x===undefined||u===x)&&(y===undefined||v===y)&&(s===undefined||p===s)&&(t===undefined||q===t))completions.push({x:u,y:v,holds:truth(u,v,p,q)});
  const verdict=evaluate(r,{digits,shading});
  const expected=completions.every(c=>c.holds)?'holds':completions.every(c=>!c.holds)?'broken':'undecided';
  expect(verdict.status).toBe(expected);
  if(verdict.status==='broken'){
   for(const cell of verdict.cells??[])expect(digits[cell]!==undefined||shading[cell]!==undefined).toBe(true);
   const witnessDigits=Object.fromEntries((verdict.cells??[]).filter(c=>digits[c]!==undefined).map(c=>[c,digits[c]]));
   const witnessShading=Object.fromEntries((verdict.cells??[]).filter(c=>shading[c]!==undefined).map(c=>[c,shading[c]]));
   const witness=evaluate(r,{digits:witnessDigits,shading:witnessShading});expect(witness.status).toBe('broken');
  }
  const got=allowed(r,{digits,shading},new Map());expect(got).not.toBe('too-large');
  for(const cell of [a,b].filter(c=>digits[c]===undefined))expect((got as Map<Cell,Set<number>>).get(cell)).toEqual(new Set(completions.filter(c=>c.holds).map(c=>cell===a?c.x:c.y)));
  grids++;
 }
 }
 console.log(`oracle: ${grids} partial grids, all digit/shade completions`);
});
