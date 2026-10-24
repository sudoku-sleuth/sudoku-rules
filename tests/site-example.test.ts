import {expect,test} from 'bun:test';
import {checkCaseReferences,compileCase,evaluate,checkAnswer,type Cell} from '../src';
import {declarationLibrary} from '../src/declaration-library';
import {customExample} from '../scripts/site-pages';

test('the displayed Balanced triple is a complete lintable custom rule and both grids evaluate from its source formula',async()=>{
 const syntax=await Bun.file('SYNTAX.md').text();
 const header=/````markdown\n(---[\s\S]*?---)\n/.exec(syntax)![1];
 const worked=syntax.split('### 3. Name a custom rule and supply its parameters')[1];
 const blocks=/````markdown\n([\s\S]*?)\n````/.exec(worked)![1];
 const text=header+'\n\n'+blocks+'\n';
 expect(checkCaseReferences({file:'balanced-triple.rules.md',text},declarationLibrary).diagnostics).toEqual([]);
 const compile=(source:string)=>{
  const result=compileCase({file:'balanced-triple.rules.md',text:source});
  expect(result.diagnostics).toEqual([]);
  expect(result.value).toBeDefined();
  return result.value!;
 };
 const compiled=compile(text);
 const rule=compiled.rules.find(rule=>rule.id==='balance-1')!;
 expect(rule).toBeDefined();
 const cells:Cell[]=['r4c1','r4c2','r4c3'];
 // Permute a valid Sudoku so row four begins with the displayed digits.
 // This lets checkAnswer validate the complete case, including Sudoku houses.
 const answer=(triple:number[])=>{
  const rest=[1,2,3,4,5,6,7,8,9].filter(d=>!triple.includes(d));
  const permutation=new Map([2,3,4,...[1,5,6,7,8,9]].map((d,i)=>[d,[...triple,...rest][i]]));
  return {digits:Object.fromEntries(compiled.board.activeCells.map(cell=>{
   const [,r,c]=/^r(\d+)c(\d+)$/.exec(cell)!;
   const row=Number(r)-1,col=Number(c)-1;
   return [cell,permutation.get((row*3+Math.floor(row/3)+col)%9+1)!];
  }))};
 };
 for(const [digits,status] of [[[1,6,8],'holds'],[[4,5,6],'broken'],[[2,6,8],'broken']] as const){
  const assignment=answer([...digits]);
  expect(cells.map(c=>assignment.digits[c])).toEqual([...digits]);
  expect(evaluate(rule,assignment).status).toBe(status);
  const checked=checkAnswer(compiled,assignment);
  expect(checked.holds).toBe(status==='holds');
  expect(checked.broken.map(b=>b.rule.id)).toEqual(status==='holds'?[]:['balance-1']);
 }
 // Correct sum and threshold count, but the wrong number of cells.
 const short=compile(text.replace('r4c1-r4c2-r4c3','r4c1-r4c2'));
 const shortRule=short.rules.find(rule=>rule.id==='balance-1')!;
 const shortAnswer=answer([7,8,1]);
 expect(evaluate(shortRule,shortAnswer).status).toBe('broken');
 expect(checkAnswer(short,shortAnswer).broken.map(b=>b.rule.id)).toEqual(['balance-1']);
 const html=customExample();
 expect(html).toContain('balance-1: #balanced-triple r4c1-r4c2-r4c3 target 15');
 expect(html).toContain('<td>1</td><td>6</td><td>8</td>');
 expect(html).toContain('<td>4</td><td>5</td><td>6</td>');
});
