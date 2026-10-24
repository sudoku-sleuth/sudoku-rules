import {expect,test} from 'bun:test';
import {newRuleExamples} from '../helpers/new-rule-examples';
import {evaluatorLibrary} from '../../src/evaluator-library';
import {publicPages} from '../helpers/library';
import {caseExamples} from '../../scripts/lint-skill';
import {compileCase,evaluate,type Assignment,type Cell} from '../../src';
// Assignments are read from the public examples; auxiliary channels are explicit
// below because their prose describes shapes and chosen shared answers.
const overrides:Record<string, [{digits?:Record<string,number>} & Partial<Assignment>, {digits?:Record<string,number>} & Partial<Assignment>]>={
 'aggregate-equation':[{digits:{r1c1:3,r1c2:6}},{digits:{r1c1:3,r1c2:7}}],
 'assignment':[{assignmentAnswers:{colours:[1,0]}},{assignmentAnswers:{colours:[1,1]}}],
 'battenburg':[{digits:{r1c1:1,r1c2:2,r2c1:4,r2c2:3}},{digits:{r1c1:1,r1c2:3,r2c1:2,r2c2:4}}],
 'blocked-sight':[{digits:{r1c1:1}},{digits:{r1c1:2}}],
 'cell-entries':[{digits:{r1c1:3},symbolAnswers:{pencil:{r1c1:[1,2]}}},{digits:{r1c1:2},symbolAnswers:{pencil:{r1c1:[1,1]}}}],
 'clue-count':[{digits:{r1c1:1,r1c2:2,r2c1:3,r2c2:5}},{digits:{r1c1:1,r1c2:2,r2c1:3,r2c2:6}}],
 'derived-count':[{digits:{r1c1:3,r1c2:5}},{digits:{r1c1:3,r1c2:6}}],
 'difference-line':[{digits:{r1c1:2,r1c2:4,r1c3:2}},{digits:{r1c1:2,r1c2:4,r1c3:7}}],
 'digit-profile':[{digits:{r1c1:1,r1c2:3,r1c3:4}},{digits:{r1c1:1,r1c2:2,r1c3:4}}],
 'local-sequence':[{digits:{r1c1:2,r1c2:3,r1c3:5}},{digits:{r1c1:2,r1c2:3,r1c3:6}}],
 'mapped-values':[{digits:{r1c1:3,r1c2:2},shading:{r1c1:true,r1c2:false},values:{r1c1:6,r1c2:2}},{digits:{r1c1:3,r1c2:2},shading:{r1c1:true,r1c2:false},values:{r1c1:3,r1c2:2}}],
 'marked-pairs':[{digits:{r1c1:4,r1c2:6,r2c1:1,r2c2:2,r3c1:8,r3c2:6,r4c1:6}},{digits:{r1c1:4,r1c2:6,r2c1:1,r2c2:2,r3c1:3,r3c2:7}}],
 'marking-relation':[{shading:{r1c1:true,r1c2:false}},{shading:{r1c1:true,r1c2:true}}],
 'maze':[{networkAnswers:{passages:[['r1c1','r1c2'],['r1c1','r2c1'],['r2c1','r2c2']]}},{networkAnswers:{passages:[['r1c1','r1c2'],['r1c1','r2c1'],['r2c1','r2c2'],['r1c2','r2c2']]}}],
 'neighbour-count':[{digits:{r1c1:3,r1c2:4,r2c1:6}},{digits:{r1c1:3,r1c2:4,r2c1:2}}],
 'network-clue':[{networkAnswers:{passages:[['r1c1','r1c2'],['r1c1','r2c1']]}},{networkAnswers:{passages:[['r1c1','r1c2'],['r1c1','r2c1'],['r1c1','r2c2']]}}],
 'number-property':[{digits:{r1c1:4,r1c2:9}},{digits:{r1c1:4,r1c2:8}}],
 'paired-roles':[{digits:{r1c1:2,r1c2:3},selectionAnswers:{hot:['r1c1'],cold:['r1c2']},networkAnswers:{partners:[['r1c1','r1c2']]}},{digits:{r1c1:2,r1c2:3},selectionAnswers:{hot:['r1c1'],cold:['r1c2']},networkAnswers:{partners:[]}}],
 'prefix-sum':[{digits:{r1c1:1,r1c2:2,r1c3:9}},{digits:{r1c1:1,r1c2:3,r1c3:9}}],
 'profile-relation':[{digits:{r1c1:2,r1c2:5,r1c3:5,r1c4:2}},{digits:{r1c1:2,r1c2:5,r1c3:2,r1c4:2}}],
 'region-clue':[{digits:{r1c1:2},partitionAnswers:{areas:[['r1c1','r1c2']]}},{digits:{r1c1:3},partitionAnswers:{areas:[['r1c1','r1c2']]}}],
 'region-partition':[{partitionAnswers:{areas:[['r1c1','r1c2'],['r2c1','r2c2']]}},{partitionAnswers:{areas:[['r1c1','r2c2'],['r1c2','r2c1']]}}],
 'region-shape':[{partitionAnswers:{areas:[['r1c1','r1c2'],['r2c1','r2c2']]}},{partitionAnswers:{areas:[['r1c1','r1c2','r2c1']]}}],
 'relation-scope':[{digits:{r1c1:3,r1c2:7}},{digits:{r1c1:3,r1c2:5}}],
 'route-clue':[{digits:{r1c1:1,r1c2:2,r1c3:3},routeAnswers:{trail:['r1c1','r1c2','r1c3']},routeClosures:{trail:false}},{digits:{r1c1:1,r1c2:3,r1c3:2},routeAnswers:{trail:['r1c1','r1c2','r1c3']},routeClosures:{trail:false}}],
 'route-group':[{routeAnswers:{upper:['r1c1','r1c2'],lower:['r2c1','r2c2']},routeClosures:{upper:false,lower:false}},{routeAnswers:{upper:['r1c1','r1c2'],lower:['r1c2','r2c2']},routeClosures:{upper:false,lower:false}}],
 'route':[{routeAnswers:{trail:['r1c1','r1c2','r1c3']},routeClosures:{trail:false}},{routeAnswers:{trail:['r1c1','r1c3','r1c2']},routeClosures:{trail:false}}],
 'selection':[{selectionAnswers:{ink:['r1c1']}},{selectionAnswers:{ink:['r1c1','r1c2']}}],
 'shade-components':[{shading:{r1c1:true,r1c2:false,r1c3:true},partitionAnswers:{islands:[['r1c1'],['r1c3']]}},{shading:{r1c1:true,r1c2:true,r1c3:true},partitionAnswers:{islands:[['r1c1','r1c2','r1c3']]}}],
 'split-pea':[{digits:{r1c1:1,r1c2:3,r1c3:4,r1c4:6,r1c5:3}},{digits:{r1c1:1,r1c2:3,r1c3:4,r1c4:5,r1c5:3}}],
 'subset-total':[{digits:{r1c1:2,r1c2:3,r1c3:8}},{digits:{r1c1:2,r1c2:4,r1c3:8}}],
 'sum-partition':[{digits:{r1c1:2,r1c2:3,r1c3:2}},{digits:{r1c1:2,r1c2:2,r1c3:2}}],
 'symbol-house':[{symbolAnswers:{pencil:{r1c1:[1,2],r1c2:[1]}}},{symbolAnswers:{pencil:{r1c1:[1,2],r1c2:[3]}}}],
 'choice-count':[{choiceAnswers:{first:true,second:false}},{choiceAnswers:{first:true,second:true}}],
 'japanese-sums':[{shading:{r1c1:true,r1c2:true,r1c3:false}},{shading:{r1c1:true,r1c2:false,r1c3:false}}],
 'yin-yang':[{shading:{r1c1:true,r1c2:true,r2c1:false,r2c2:false}},{shading:{r1c1:true,r1c2:false,r2c1:false,r2c2:true}}],
};
Object.assign(overrides,newRuleExamples);
const registered=new Set<string>();
for(const source of publicPages){
 const kind=/^kind: (.+)$/m.exec(source.text)?.[1];if(!kind)continue;
 const positive=/^Satisfies the rule: (.+)$/m.exec(source.text)?.[1];
 const target=evaluatorLibrary().aliases.get(kind)??kind;
 if(!overrides[kind]&&overrides[target])overrides[kind]=overrides[target];
 const negative=/^Breaks the rule: (.+)$/m.exec(source.text)?.[1];
 if(!positive||!negative)continue;
 const parse=(text:string)=>Object.fromEntries([...text.matchAll(/(r\d+c\d+)=(-?\d+(?:\.\d+)?)/g)].map(m=>[m[1],Number(m[2])]));
 const assignments=[parse(positive),parse(negative)];
 if(assignments.some(a=>!Object.keys(a).length)&&!overrides[kind])continue;
 registered.add(kind);
 test(`documented evaluator example: ${kind}`,()=>{
  const examples=caseExamples(source.text);expect(examples.length).toBeGreaterThan(0);
  const compiled=compileCase({file:source.file,text:examples[0]});expect(compiled.diagnostics).toEqual([]);
  const rule=compiled.value!.rules.find(r=>r.name===kind)??compiled.value!.rules.filter(r=>r.name!=='sudoku')[0]!;expect(rule).toBeDefined();
  for(let i=0;i<2;i++){
   const digits=Object.fromEntries(rule.board.activeCells.map(c=>[c,1])) as Partial<Record<Cell,number>>;
   if(['anti-knight','anti-king','scoped-move'].includes(kind))for(const c of rule.board.activeCells){const [r,k]=c.slice(1).split('c').map(x=>Number(x)-1);digits[c]=(3*r+Math.floor(r/3)+k)%9+1;}
   if(['kropki','xv','marked-pairs'].includes(kind))for(const c of rule.board.activeCells)digits[c]=9;
   if(kind==='rotational-sums')for(const c of rule.board.activeCells)digits[c]=5;
   if(kind==='window-classes')for(const c of rule.board.activeCells){const [r,k]=c.slice(1).split('c').map(Number);digits[c]=(r+k)%2+1;}
   Object.assign(digits,assignments[0],assignments[i]);
   const extra=overrides[kind]?.[i]??{};
   if(kind==='value-modifier')extra.values=Object.fromEntries(Object.entries(digits).map(([c,d])=>[c,2*d!]));
   expect(evaluate(rule,{...extra,digits:{...digits,...extra.digits}}).status).toBe(i===0?'holds':'broken');
  }
 });
}

test('documented Sudoku row examples extend to a full satisfying and breaking grid',()=>{
 const source=publicPages.find(p=>p.file==='rules/sudoku.md')!;
 const compiled=compileCase({file:source.file,text:caseExamples(source.text)[0]}).value!;
 const digits=Object.fromEntries(compiled.board.activeCells.map(c=>{const [r,k]=c.slice(1).split('c').map(x=>Number(x)-1);return [c,(3*r+Math.floor(r/3)+k)%9+1];}));
 expect(evaluate(compiled.rules[0],{digits}).status).toBe('holds');digits.r1c9=8;
 expect(evaluate(compiled.rules[0],{digits}).status).toBe('broken');
});registered.add('sudoku');
test('documented Liar Cells shared face and real-value assignment',()=>{
 const source=publicPages.find(p=>p.file==='rules/liar-cells.md')!;
 const compiled=compileCase({file:source.file,text:caseExamples(source.text)[0]}).value!;
 const digits=Object.fromEntries(compiled.board.activeCells.map(c=>{const [r,k]=c.slice(1).split('c').map(x=>Number(x)-1);return [c,(3*r+Math.floor(r/3)+k)%9+1];}));
 const values={...digits,r1c1:7,r2c4:4,r3c7:5,r4c2:1,r5c5:2,r6c8:9,r7c3:3,r8c6:8,r9c9:6};
 const rule=compiled.rules.find(r=>r.name==='liar-cells')!;
 expect(evaluate(rule,{digits,values}).status).toBe('holds');values.r1c1=1;
 expect(evaluate(rule,{digits,values}).status).toBe('broken');
});registered.add('liar-cells');
test('Decoration accepts both documented assignments',()=>{
 const result=compileCase({file:'decoration.md',text:'---\nformat: open-rules\ntitle: Example\nsetter: Example\nsource: ""\ncase: ""\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n---\n```rules\nsudoku 9x9\ndecoration r1c1-r1c2-r2c2\n```'});
 expect(result.diagnostics).toEqual([]);const rule=result.value!.rules.find(r=>r.name==='decoration')!;
 for(const digits of [{r1c1:1,r1c2:2,r2c2:3},{r1c1:9,r1c2:1,r2c2:7}])expect(evaluate(rule,{digits}).status).toBe('holds');
});registered.add('decoration');
test('every public rule page has executable example assignments',()=>{
 for(const source of publicPages){const kind=/^kind: (.+)$/m.exec(source.text)?.[1];if(kind)expect(registered.has(kind),kind).toBe(true);}
});
