import {expect,test} from 'bun:test';
import {publicPages} from '../helpers/library';
import {caseExamples} from '../../scripts/lint-skill';
import {compileCase,evaluate,readHeader,type Assignment} from '../../src';
import {stringify} from 'yaml';

test('report evaluate cost per public rule on a 9x9 board',()=>{
 const rows:{rule:string;milliseconds:number;result:string}[]=[];
 for(const source of publicPages){
  const kind=/^kind: (.+)$/m.exec(source.text)?.[1];if(!kind)continue;
  const raw=/```rules\n([\s\S]*?)```/.exec(source.text)?.[1];
  const example=caseExamples(source.text)[0]??(raw?'---\nformat: open-rules\ntitle: Example\nsetter: Example\nsource: ""\ncase: ""\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n---\n```rules\n'+raw+'```':undefined);
  expect(example).toBeDefined();if(!example)continue;
  const page={file:source.file,text:example},header=readHeader(page).value!;
  // Keep each documented declaration and evaluate it in the same board size.
  const metadata={...header.metadata,board:{rows:9,cols:9,symbols:[1,2,3,4,5,6,7,8,9]}};
  const compiled=compileCase({...page,text:'---\n'+stringify(metadata)+'---\n'+example.slice(header.offset)});
  expect(compiled.diagnostics).toEqual([]);
  const rule=compiled.value!.rules.find(r=>r.name===kind)??compiled.value!.rules.find(r=>r.name!=='sudoku')!;
  const digits=Object.fromEntries(rule.board.activeCells.map(c=>{const [r,k]=c.slice(1).split('c').map(x=>Number(x)-1);return [c,(3*r+Math.floor(r/3)+k)%9+1];}));
  const assignment:Assignment={digits};
  let result='';const start=performance.now();
  for(let i=0;i<5;i++){
   result=evaluate(rule,assignment).status;
  }
  rows.push({rule:kind,milliseconds:(performance.now()-start)/5,result});
 }
 for(const row of rows)console.log(`evaluate 9x9 ${row.rule}: ${row.milliseconds.toFixed(4)} ms (${row.result})`);
 const measured=rows.map(r=>r.milliseconds).sort((a,b)=>a-b);
 console.log(`evaluate 9x9 median=${measured[Math.floor(measured.length/2)].toFixed(4)} ms max=${measured.at(-1)!.toFixed(4)} ms`);
});
