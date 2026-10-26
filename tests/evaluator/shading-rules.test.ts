import {expect,test} from 'bun:test';
import {compileCase,evaluate,type Assignment,type Cell} from '../../src';

function compile(line:string,rows=1,cols=4){
 const result=compileCase({file:'rule-example.md',text:`---
format: open-rules
title: Example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
board: ${JSON.stringify({rows,cols,symbols:[0,1,2,3,4,5,6,7,8,9]})}
---
\`\`\`rules
${line}
\`\`\``});
 expect(result.diagnostics).toEqual([]);
 return result.value!.rules[0];
}
const row=['r1c1','r1c2','r1c3','r1c4'];
const shade=(cells:string[],selected:string[])=>Object.fromEntries(cells.map(c=>[c,selected.includes(c)]));
const verdict=(line:string,assignment:Assignment,rows=1,cols=4)=>evaluate(compile(line,rows,cols),assignment).status;

test('Minesweeper counts diagonal neighbours, excludes itself and requires unshaded circles',()=>{
 const line='minesweeper cells ["r1c1"]';
 const cells=['r1c1','r1c2','r2c1','r2c2'];
 const a={digits:{r1c1:1,r1c2:9,r2c1:9,r2c2:9},shading:shade(cells,['r2c2'])};
 expect(verdict(line,a,2,2)).toBe('holds');
 expect(verdict(line,{...a,digits:{...a.digits,r1c1:2}},2,2)).toBe('broken');
 expect(verdict(line,{...a,shading:shade(cells,['r1c1','r2c2'])},2,2)).toBe('broken');
 expect(verdict(line,{...a,digits:{...a.digits,r1c1:0},shading:shade(cells,[])},2,2)).toBe('holds');
});

test('Cave Layout requires maximal walls, edge contact, connected cave and unshaded clues',()=>{
 const line='cave-layout name "walls" clues ["r2c2"]';
 const cells=Array.from({length:9},(_,i)=>`r${Math.floor(i/3)+1}c${i%3+1}`);
 const digits=Object.fromEntries(cells.map(c=>[c,1]));
 const check=(selected:string[],walls:Cell[][])=>verdict(line,{digits,shading:shade(cells,selected),partitionAnswers:{walls}},3,3);
 expect(check(['r1c1','r1c2'],[['r1c1','r1c2']])).toBe('holds');
 expect(check(['r1c1','r1c2'],[['r1c1'],['r1c2']])).toBe('broken');
 expect(check(['r2c2'],[['r2c2']])).toBe('broken');
 // The interior wall fails independently of the clue condition.
 expect(verdict('cave-layout name "walls"',{digits,shading:shade(cells,['r2c2']),partitionAnswers:{walls:[['r2c2']]}},3,3)).toBe('broken');
 // Deriving the same components alone does not impose Cave Layout's edge condition.
 expect(verdict('shade-components selectionRef "H" name "walls" scope '+JSON.stringify(cells),{
  digits,shading:shade(cells,['r2c2']),partitionAnswers:{walls:[['r2c2']]}
 },3,3)).toBe('holds');
 expect(check(['r1c2','r2c2','r3c2'],[['r1c2','r2c2','r3c2']])).toBe('broken');
 expect(check([],[])).toBe('holds');
 // A shaded 2x2 block is allowed when the cave remains connected.
 expect(verdict('cave-layout name "walls"',{digits,shading:shade(cells,['r1c1','r1c2','r2c1','r2c2']),partitionAnswers:{walls:[['r1c1','r1c2','r2c1','r2c2']]}},3,3)).toBe('holds');
});

test('Shade Run Sums joins loop ends and treats a uniform loop as one run',()=>{
 const base='shade-run-sums cells ["r1c1","r1c2","r1c3","r1c4"] total 5';
 const a={digits:{r1c1:2,r1c2:2,r1c3:3,r1c4:3},shading:shade(row,['r1c1','r1c4'])};
 expect(verdict(base+' loop true',a)).toBe('holds');
 expect(verdict(base+' loop false',a)).toBe('broken');
 const uniform={digits:{r1c1:1,r1c2:1,r1c3:1,r1c4:2},shading:shade(row,row)};
 expect(verdict(base+' loop true',uniform)).toBe('holds');
 expect(verdict(base+' loop false',uniform)).toBe('holds');
 expect(verdict(base+' loop true',{...uniform,digits:{...uniform.digits,r1c4:3}})).toBe('broken');
 // Repeated cells are occurrences along the supplied walk.
 expect(verdict('shade-run-sums cells ["r1c1","r1c2","r1c1"] total 5',{
  digits:{r1c1:1,r1c2:3,r1c3:1,r1c4:1},shading:shade(row,[])
 })).toBe('holds');
});

test('Parity Bridge counts only interior occurrences and allows endpoint roles to swap',()=>{
 const line='parity-bridge cells ["r1c2","r1c3","r1c4"] ends ["r1c1","r1c5"]';
 const digits={r1c1:1,r1c2:1,r1c3:2,r1c4:4,r1c5:2};
 expect(verdict(line,{digits},1,5)).toBe('holds');
 expect(verdict(line,{digits:{...digits,r1c1:2,r1c5:1}},1,5)).toBe('holds');
 expect(verdict(line,{digits:{...digits,r1c4:3}},1,5)).toBe('broken');
 expect(verdict(line.replace('"r1c2","r1c3","r1c4"','"r1c1","r1c3","r1c4"'),{digits},1,5)).toBe('broken');
 expect(verdict(line.replace('"r1c1","r1c5"','"r1c1","r1c1"'),{digits},1,5)).toBe('broken');
});

test('Helping Cages assigns each different cage total as help exactly once',()=>{
 const base='helping-cages groups [["r1c1"],["r1c2"],["r1c3"]]';
 const digits={r1c1:1,r1c2:2,r1c3:3,r1c4:4};
 expect(verdict(base+' clues [3,5,4]',{digits})).toBe('holds');
 // Each clue has one possible helper, but the first cage helps twice.
 expect(verdict(base+' clues [3,3,4]',{digits})).toBe('broken');
 expect(verdict(base+' clues [2,5,4]',{digits})).toBe('broken');
 expect(verdict(base+' clues [3,5]',{digits})).toBe('broken');
 expect(verdict(base+' clues [3,5,4]',{digits:{...digits,r1c3:2}})).toBe('broken');
 expect(verdict('helping-cages groups [["r1c1","r1c2"],["r1c3"]] clues [5,5]',{digits:{...digits,r1c1:1,r1c2:1}})).toBe('broken');
});

test('Signed Shading Cage keeps the empty-subset choice required and enforces connectivity and distinctness',()=>{
 const line='signed-shading-cage cells ["r1c1","r1c2","r1c3"]';
 const digits={r1c1:1,r1c2:2,r1c3:3,r1c4:4};
 const full={digits,shading:shade(row,row)};
 expect(verdict(line+' total 6 unshadedRequired false',full)).toBe('holds');
 expect(verdict(line+' total 6 unshadedRequired true',full)).toBe('broken');
 const disconnected={digits,shading:shade(row,['r1c2'])};
 for(const policy of ['true','false'])expect(verdict(line+' total -2 unshadedRequired '+policy,disconnected)).toBe('broken');
 expect(verdict(line+' total -4 unshadedRequired true',{digits,shading:shade(row,['r1c1'])})).toBe('holds');
 expect(verdict(line+' total -6 unshadedRequired true',{digits,shading:shade(row,[])})).toBe('holds');
 expect(verdict(line+' total 5 unshadedRequired false',{digits:{...digits,r1c3:2},shading:shade(row,row)})).toBe('broken');
 const missing=compileCase({file:'example.md',text:'---\nformat: open-rules\ntitle: Example\nsetter: Example\nsource: ""\ncase: ""\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n---\n```rules\nsudoku 9x9\nsigned-shading-cage cells ["r1c1"] total 1\n```'});
 expect(missing.diagnostics.some(d=>d.message.includes('unshadedRequired'))).toBe(true);
});


test('Signed Shading Cage and Minmax Cages have different totals on the same distinct digits',()=>{
 const digits={r1c1:1,r1c2:2,r1c3:3,r1c4:4};
 const assignment={digits,shading:shade(row,row)};
 const cells='cells ["r1c1","r1c2","r1c3"]';
 expect(verdict('minmax-cages '+cells+' total 4',assignment)).toBe('holds');
 expect(verdict('signed-shading-cage '+cells+' total 4 unshadedRequired false',assignment)).toBe('broken');
 expect(verdict('minmax-cages '+cells+' total 6',assignment)).toBe('broken');
 expect(verdict('signed-shading-cage '+cells+' total 6 unshadedRequired false',assignment)).toBe('holds');
});
