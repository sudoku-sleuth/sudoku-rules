import {expect,test} from 'bun:test';
import {stringify} from 'yaml';
import {allowed,allowedWithWork,compileCase,ALLOWED_WORK_LIMIT,type Cell} from '../../src';

const board='board: {rows: 3, cols: 3, symbols: [1,2,3,4,5,6,7,8,9]}\n';
const file=(rules:string,extra:string)=>({file:'example.md',text:`---\nformat: open-rules\ntitle: Example\nsetter: Example\nsource: ""\ncase: ""\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n${board}---\n\n\`\`\`rules\n${rules}\n\`\`\`\n${extra}`});
const custom=(maths:string)=>'```custom-rules\n'+stringify([{id:'probe',name:'Probe',parameters:{cells:{type:'path<cell>',description:'Ordered cells.'}},definition:'A probe.',class:/allCells|\||\{/.test(maths)?'with aggregates':'first-order',maths,example:'A probe.'}])+'```';
const compile=(maths:string,line='r1c1-r1c2')=>{const result=compileCase(file(`#probe ${line}`,custom(maths)));expect(result.diagnostics).toEqual([]);return result.value!;};
const gs='⟨cells:i∈[0,1)⟩';
const pair=['r1c1','r1c2'] as Cell[];

test('a formula that mentions the board only to filter its own cells gets those cells as scope',()=>{
 // allCells keeps the cells of C that belong to the given groups: the formula never reads another cell.
 const c=compile('∀c∈allCells(⟨cells:i∈[0,1)⟩):D(c)<3');
 expect(c.rules[0].finite).toBeUndefined();
 expect(c.rules[0].scope).toEqual(pair);
});
test('a formula that ranges over the board keeps the board as scope',()=>{
 for(const maths of ['∀c∈cells:∀d∈C:D(c)≠D(d)∨c=d','∀c∈cells:∃d∈C:D(d)=D(c)']){
  const c=compile(maths);expect(c.rules[0].scope).toEqual(c.board.activeCells);
 }
});
test('a small scope prunes candidates a board scope could not',()=>{
 const rule=compile('∀c∈allCells(⟨cells:i∈[0,1)⟩):D(c)<3').rules[0];
 const result=allowed(rule,{digits:{}},new Map());
 expect(result).not.toBe('too-large');
 for(const cell of pair)expect([...(result as Map<Cell,Set<number>>).get(cell)!].sort()).toEqual([1,2]);
});
test('allowedWithWork reports the steps spent beside the result and allowed agrees with it',()=>{
 const rule=compile('∀c∈allCells(⟨cells:i∈[0,1)⟩):D(c)<3').rules[0];
 const candidates=new Map<Cell,ReadonlySet<number>>([['r1c1',new Set([1,2,3])],['r1c2',new Set([1,2])]]);
 const first=allowedWithWork(rule,{digits:{}},candidates),again=allowedWithWork(rule,{digits:{}},candidates);
 expect(first.work).toBeGreaterThan(0);
 expect(first.work).toBeLessThan(ALLOWED_WORK_LIMIT);
 expect(again.work).toBe(first.work);
 expect(allowed(rule,{digits:{}},candidates)).toEqual(first.result);
 // Fewer completions cost fewer steps.
 const narrow=allowedWithWork(rule,{digits:{}},new Map([['r1c1',new Set([1])],['r1c2',new Set([1])]]));
 expect(narrow.work).toBeLessThan(first.work);
});
test('refusals report the work they spent',()=>{
 const rule=compile('∀c∈allCells(⟨cells:i∈[0,1)⟩):D(c)<3').rules[0];
 expect(allowedWithWork(rule,{digits:{}},new Map([['r1c1',new Set<number>()]]))).toMatchObject({work:0});
 const board=compile('∀c∈cells:∀d∈C:D(c)≠D(d)∨c=d').rules[0];
 expect(allowedWithWork(board,{digits:{}},new Map())).toEqual({result:'too-large',work:0});
});

test('only a positive membership filter narrows: other filters over C keep the board',()=>{
 const unbounded=[
  `¬(∃G∈${gs}: c∈G)`,`(∃G∈${gs}: c∈G) ∨ D(c)=1`,`(∃G∈${gs}: c∈G) → D(c)=1`,`∀G∈${gs}: c∈G`,`¬(∃G∈${gs}: ¬(c∈G))`,
 ];
 for(const filter of unbounded){
  const rule=compile(`∀x∈{c∈C: ${filter}}: D(x)<3`).rules[0];
  expect([filter,rule.scope]).toEqual([filter,rule.board.activeCells]);
 }
});
test('a mapped image body is not a filter and keeps the board',()=>{
 const rule=compile(`|{ (∃G∈${gs}: c∈G) : c∈C }|>0`).rules[0];
 expect(rule.scope).toEqual(rule.board.activeCells);
});
test('a domain-less binder, annotated with a cell or not, keeps the board',()=>{
 for(const maths of ['∀c:cell: D(c)<10','∀c: D(c)<10']){
  const result=compileCase(file('#probe r1c1-r1c2',custom(maths)));
  if(!result.value)continue; // a formula the checker refuses has no scope to test
  expect([maths,result.value.rules[0].scope]).toEqual([maths,result.value.board.activeCells]);
 }
});
test('a narrowed rule that reads a cell outside its scope stays undecided and prunes nothing',()=>{
 const rule=compile(`∃x∈allCells(${gs}): D(x)<3`).rules[0];
 const narrowed={...rule,scope:['r1c1'] as Cell[]};
 const result=allowed(narrowed,{digits:{}},new Map()) as Map<Cell,Set<number>>;
 expect([...result.get('r1c1')!].sort()).toEqual([1,2,3,4,5,6,7,8,9]);
});
test('work equals the limit when the budget runs out',()=>{
 const rule=compile('∀a,b,c,d,e∈cells: D(a)+D(b)+D(c)+D(d)+D(e)>0','r1c1-r1c2-r1c3').rules[0];
 const out=allowedWithWork(rule,{digits:{}},new Map());
 expect(out.result).toBe('too-large');
 expect(out.work).toBe(ALLOWED_WORK_LIMIT);
});
