import {expect,test} from 'bun:test';
import {stringify} from 'yaml';
import {allowed,allowedWithWork,compileCase,ALLOWED_WORK_LIMIT,type Cell} from '../../src';

const board='board: {rows: 3, cols: 3, symbols: [1,2,3,4,5,6,7,8,9]}\n';
const file=(rules:string,extra:string)=>({file:'example.md',text:`---\nformat: open-rules\ntitle: Example\nsetter: Example\nsource: ""\ncase: ""\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n${board}---\n\n\`\`\`rules\n${rules}\n\`\`\`\n${extra}`});
const custom=(maths:string)=>'```custom-rules\n'+stringify([{id:'probe',name:'Probe',parameters:{cells:{type:'path<cell>',description:'Ordered cells.'}},definition:'A probe.',class:maths.includes('allCells')?'with aggregates':'first-order',maths,example:'A probe.'}])+'```';
const compile=(maths:string)=>{const result=compileCase(file('#probe r1c1-r1c2',custom(maths)));expect(result.diagnostics).toEqual([]);return result.value!;};
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
