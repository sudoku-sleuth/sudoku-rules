import {formulaNotation} from "../../src/formula-notation";
import {substituteFormula,foldFormula} from "../../src/formula-substitution";
import {assertMigratedEquivalent,replayedKinds} from './migration-equivalence';
import {expect,test,afterAll} from 'bun:test';
import {readdir} from 'node:fs/promises';
import {compilePublicLibrary,normalise,checkCaseReferences,parseFormula,checkFormula} from '../../src';
import {caseExamples} from '../../scripts/lint-skill';
import {declaredDefault} from '../../src/case-values';
import {fragmentVerdict,type Fragment} from './finite-fragment';
const sources=await Promise.all((await readdir('rules')).filter(n=>n.endsWith('.md')).map(async n=>({file:`rules/${n}`,text:await Bun.file(`rules/${n}`).text()})));
const compiled=compilePublicLibrary(sources);
if(!compiled.value)throw Error(JSON.stringify(compiled.diagnostics));
const library=compiled.value;
const assignmentMath=formulaNotation(foldFormula(substituteFormula(library.blocks.get('assignment')!.formulas[0].ast,new Map(Object.entries({name:'"colours"',size:'2',labels:'2',bijective:'true'}).map(([name,text])=>[name,parseFormula(text).value!]))))).replaceAll('assignmentAnswer("colours")','xs');
const a='r1c1',b='r1c2',c='r1c3',d='r2c1',e='r2c2';
const faces={[a]:1,[b]:2,[c]:3,[d]:4,[e]:5};
function verdict(kind:string,parameters:Record<string,unknown>,extra:Partial<Fragment>={},negated=false){
 const page=library.rules.get(kind)!;
 const defaults=Object.fromEntries(Object.entries(library.registry.parameters!.get(`https://rules.sudoku-sleuth.com/${kind}.md`)!.parameters).filter(([,p])=>Object.hasOwn(p,'default')).map(([n,p])=>[n,p.default]));
 const ast=page.formulas[0].ast;
 const fragment={faces,parameters:{...defaults,...parameters},...extra};
 assertMigratedEquivalent(library,kind,fragment,negated);
 return fragmentVerdict(negated?{kind:'unary',value:'not',span:ast.span,children:[ast]}:ast,library.prelude,page.parameters,fragment);
}
function formula(text:string,extra:Partial<Fragment>={}){
 const parsed=parseFormula(text);expect(parsed.diagnostics).toEqual([]);
 const checked=checkFormula(parsed.value!,library.prelude.environment);expect(checked.diagnostics).toEqual([]);
 return fragmentVerdict(checked.value!.ast,library.prelude,[],{faces,parameters:{},...extra});
}
const additions=['selection','marking-relation','battenburg','shade-components','japanese-sums','mapped-values','paired-roles','choice-count','assignment','cell-entries','symbol-house'];
for(const kind of additions)test(`${kind}: public examples have valid portable declarations`,()=>{
 const source=sources.find(s=>s.file===`rules/${kind}.md`)!;
 const examples=caseExamples(source.text);expect(examples.length).toBeGreaterThan(0);
 for(const text of examples)expect(checkCaseReferences({file:source.file,text},library.registry).diagnostics).toEqual([]);
});
test('selection has explicit empty, singleton, scope and group semantics',()=>{
 const p={name:'ink',scope:[a,b]};const x={selectionAnswers:{ink:[a]}};
 expect(verdict('selection',p,x)).toBe(true);
 expect(verdict('selection',{...p,include:[b]},x)).toBe(false);
 expect(verdict('selection',{...p,exclude:[a]},x)).toBe(false);
 expect(verdict('selection',{...p,scope:[b]},x)).toBe(false);
 expect(verdict('selection',{...p,minimum:2},x)).toBe(false);
 expect(verdict('selection',{...p,minimum:1,maximum:0},x)).toBe(false);
 expect(verdict('selection',{...p,groups:[[a,b]],count:1},x)).toBe(true);
 expect(verdict('selection',{...p,groups:[[c]],count:0},x)).toBe(false);
 expect(verdict('selection',{name:'ink',scope:[]},{selectionAnswers:{ink:[]}})).toBe(true);
 expect(verdict('selection',{name:'H',scope:[a],minimum:1},{shaded:[a]})).toBe(true);
 expect(()=>verdict('selection',p)).toThrow('Missing shared selection');
});
test('marking pairs preserve direction, self-pairs and occurrence transition counts',()=>{
 const p={selectionRef:'H',pairs:[[a,b]],relation:'implies'};const x={shaded:[a]};
 expect(verdict('marking-relation',p,x)).toBe(false);
 expect(verdict('marking-relation',{...p,pairs:[[b,a]]},x)).toBe(true);
 expect(verdict('marking-relation',{...p,pairs:[[a,a]],relation:'different'},x)).toBe(false);
 expect(verdict('marking-relation',{...p,pairs:[[a]]},x)).toBe(false);
 expect(verdict('marking-relation',{selectionRef:'H',line:[a,b,a],transitions:2},x)).toBe(true);
 expect(verdict('marking-relation',{selectionRef:'H',line:[],transitions:0},x)).toBe(true);
 expect(verdict('marking-relation',{selectionRef:'H',line:[a],transitions:0},x)).toBe(true);
});
test('Battenburg separates positive marks, exhaustive absence and selection from parity',()=>{
 const p={marks:[{r:0,k:0}],scope:[a,b,d,e]};
 const x={faces:{[a]:1,[b]:2,[d]:4,[e]:3},rows:2,cols:2};
 expect(verdict('battenburg',p,x)).toBe(true);
 expect(verdict('battenburg',{...p,marks:[],exhaustive:true},x)).toBe(false);
 expect(verdict('battenburg',{...p,marks:[]},x)).toBe(true);
 expect(verdict('battenburg',{...p,positive:false,exhaustive:true},{...x,faces:{[a]:1,[b]:1,[d]:1,[e]:1}})).toBe(true);
 expect(verdict('battenburg',{...p,positive:false,exhaustive:true,marks:[]},x)).toBe(false);
 expect(verdict('battenburg',{...p,scope:[a,b,d]},x)).toBe(false);
 expect(verdict('battenburg',{marks:[{r:0,k:0}],scope:[a]},{rows:1,cols:1})).toBe(false);
 expect(verdict('battenburg',{...p,mode:'selection',selectionRef:'ink'},{...x,selectionAnswers:{ink:[a,e]}})).toBe(true);
 expect(verdict('battenburg',{...p,mode:'selection',selectionRef:'ink'},{...x,selectionAnswers:{ink:[a,b]}})).toBe(false);
});
function paths(prefix:string[],remaining:string[]):string[][]{return [prefix,...remaining.flatMap((c,i)=>paths([...prefix,c],remaining.filter((_,j)=>j!==i)))];}
test('components are maximal, scoped and share the named partition',()=>{
 const p={selectionRef:'H',name:'islands',scope:[a,b,c]};
 const x={shaded:[a,c],partitionAnswers:{islands:[[a],[c]]},witnesses:{route:paths([],[a,b,c]).filter(p=>p.length)}};
 expect(verdict('shade-components',{...p,count:2},x)).toBe(true);
 expect(verdict('shade-components',p,{...x,shaded:[a,b,c]})).toBe(false);
 expect(verdict('shade-components',p,{...x,partitionAnswers:{islands:[[a,c]]}})).toBe(false);
 expect(verdict('shade-components',{...p,selected:false,count:1},{...x,partitionAnswers:{islands:[[b]]}})).toBe(true);
 expect(verdict('shade-components',{...p,count:0},{shaded:[],partitionAnswers:{islands:[]}})).toBe(true);
 expect(verdict('shade-components',{...p,scope:[a],count:1},{shaded:[a],partitionAnswers:{islands:[[a]]},witnesses:{route:[[a]]}})).toBe(true);
 // Splitting adjacent selected cells must fail even if each piece is connected.
 expect(verdict('shade-components',{...p,scope:[a,b]},{...x,shaded:[a,b],partitionAnswers:{islands:[[a],[b]]}})).toBe(false);
});
test('Japanese sums require all maximal runs, their order, channels and zero totals',()=>{
 const p={line:[a,b,c,d,e],totals:[3,5]};const x={shaded:[a,b,e]};
 expect(verdict('japanese-sums',p,x)).toBe(true);
 expect(verdict('japanese-sums',{...p,totals:[5,3]},x)).toBe(false);
 expect(verdict('japanese-sums',{...p,totals:[1,2,5]},x)).toBe(false);
 expect(verdict('japanese-sums',{...p,line:[a,a],totals:[2]},{shaded:[a]})).toBe(false);
 expect(verdict('japanese-sums',{line:[],totals:[]})).toBe(true);
 expect(verdict('japanese-sums',{line:[a],totals:[]},{shaded:[]})).toBe(true);
 expect(verdict('japanese-sums',{line:[a],totals:[0]},{shaded:[a],faces:{...faces,[a]:0}})).toBe(true);
 expect(verdict('japanese-sums',{line:[a],totals:[]},{shaded:[a],faces:{...faces,[a]:0}})).toBe(false);
 expect(verdict('japanese-sums',{line:[a,b],totals:[1],channel:'V'},{shaded:[a,b],values:{...faces,[a]:0.5,[b]:0.5}})).toBe(true);
 expect(verdict('japanese-sums',{line:[a,b],totals:[1],channel:'V',repeats:false},{shaded:[a,b],values:{...faces,[a]:0.5,[b]:0.5}})).toBe(false);
});
test('value maps share exact channels and reject ambiguity, missing entries and accidental identities',()=>{
 const p={selectionRef:'H',scope:[a,b],factor:2};const x={shaded:[a],values:{...faces,[a]:2}};
 expect(verdict('mapped-values',p,x)).toBe(true);
 expect(verdict('mapped-values',p,{...x,values:faces})).toBe(false);
 expect(verdict('mapped-values',{...p,mode:'map',mapping:[{digit:1,value:2}]},x)).toBe(true);
 expect(verdict('mapped-values',{...p,mode:'map',mapping:[]},x)).toBe(false);
 expect(verdict('mapped-values',{...p,mapping:[{digit:1,value:2},{digit:1,value:3}]},x)).toBe(false);
 expect(verdict('mapped-values',{...p,mode:'free',allowed:[2,3],different:true},x)).toBe(true);
 expect(verdict('mapped-values',{...p,mode:'free',allowed:[1],different:true},{...x,values:faces})).toBe(false);
 expect(verdict('mapped-values',{...p,values:'D'},x)).toBe(false);
 const y={...x,valueAnswers:{other:{...faces,[a]:0.5}}};
 expect(verdict('mapped-values',{...p,values:'other',factor:0.5,outside:'free'},y)).toBe(true);
 expect(()=>verdict('mapped-values',{...p,values:'other'},x)).toThrow('Missing shared value');
 expect(verdict('mapped-values',{selectionRef:'H',scope:[],factor:9},{shaded:[a],values:faces})).toBe(true);
});
test('paired roles require a bijection, disjoint coverage, role direction and one shared pairing',()=>{
 const p={left:'hot',right:'cold',name:'partners',scope:[a,b],relation:{op:'sum',value:3}};
 const x={selectionAnswers:{hot:[a],cold:[b]},networkAnswers:{partners:[[a,b]]}};
 expect(verdict('paired-roles',p,x)).toBe(true);
 expect(verdict('paired-roles',p,{...x,networkAnswers:{partners:[[b,a]]}})).toBe(true);
 expect(verdict('paired-roles',{...p,relation:{op:'less'}},{...x,networkAnswers:{partners:[[b,a]]}})).toBe(true);
 expect(verdict('paired-roles',{...p,relation:{op:'less'}},{...x,faces:{...faces,[a]:3}})).toBe(false);
 expect(verdict('paired-roles',p,{...x,networkAnswers:{partners:[[a,b],[a,b]]}})).toBe(false);
 expect(verdict('paired-roles',p,{...x,selectionAnswers:{hot:[a,b],cold:[b]}})).toBe(false);
 expect(verdict('paired-roles',p,{...x,networkAnswers:{partners:[]}})).toBe(false);
 expect(verdict('paired-roles',{...p,scope:[]},{selectionAnswers:{hot:[],cold:[]},networkAnswers:{partners:[]}})).toBe(true);
});
test('truth counts, full reification and explicit inversions preserve one assignment under negation',()=>{
 const x={choiceAnswers:{one:true,two:false}};const p={choices:['one','two'],minimum:1,maximum:1};
 expect(verdict('choice-count',p,x)).toBe(true);
 expect(verdict('choice-count',{...p,choices:['one','one']},x)).toBe(false);
 expect(verdict('choice-count',{choices:[],minimum:0,maximum:0})).toBe(true);
 expect(verdict('choice-count',p,x,true)).toBe(false);
 expect(formula('reified(choiceAnswer("one"),D(boardCell(0,0))=1)',x)).toBe(true);
 expect(formula('reified(choiceAnswer("two"),D(boardCell(0,0))=1)',x)).toBe(false);
 expect(formula('reified(choiceAnswer("two"),D(boardCell(0,0))=2 ∧ D(boardCell(0,1))=2)',x)).toBe(true);
 expect(formula('conditionalMeaning(choiceAnswer("two"),D(boardCell(0,0))<D(boardCell(0,1)),D(boardCell(0,0))>D(boardCell(0,1)))',x)).toBe(false);
 expect(formula('countWhere(⟨i=0:i∈[0,2)⟩,λb:boolean:b)=1',x)).toBe(true);
 expect(()=>verdict('choice-count',p)).toThrow('Missing shared choice');
});
test('assignments guard size, bounds, injectivity and tiny bijections',()=>{
 const p={name:'colours',size:2,labels:2,bijective:true};
 expect(verdict('assignment',p,{assignmentAnswers:{colours:[1,0]}})).toBe(true);
 for(const xs of [[1,1],[0],[0,2],[-1,0]])expect(verdict('assignment',p,{assignmentAnswers:{colours:xs}})).toBe(false);
 expect(verdict('assignment',{...p,size:0,labels:0},{assignmentAnswers:{colours:[]}})).toBe(true);
 expect(verdict('assignment',{...p,size:1,labels:1},{assignmentAnswers:{colours:[0]}})).toBe(true);
 expect(verdict('assignment',{...p,size:1},{assignmentAnswers:{colours:[0]}})).toBe(false);
 expect(formula(`let xs=assignmentAnswer("colours"); (${assignmentMath}) ∧ xs[0]=1 ∧ xs[1]=0`,{assignmentAnswers:{colours:[1,0]}})).toBe(true);
});
test('multiple entries preserve alphabet, occurrences, empty cells and independent faces',()=>{
 const p={name:'pencil',scope:[a],minimum:2,maximum:2};
 const x={symbolAnswers:{pencil:{[a]:[1,2]}}};
 expect(verdict('cell-entries',p,x)).toBe(true);
 expect(verdict('cell-entries',{...p,faceMode:'sum'},x)).toBe(false);
 expect(verdict('cell-entries',{...p,faceMode:'sum'},{...x,faces:{...faces,[a]:3}})).toBe(true);
 expect(verdict('cell-entries',{...p,faceMode:'first'},x)).toBe(true);
 expect(verdict('cell-entries',p,{symbolAnswers:{pencil:{[a]:[1,1]}}})).toBe(false);
 expect(verdict('cell-entries',{...p,distinct:false},{symbolAnswers:{pencil:{[a]:[1,1]}}})).toBe(true);
 expect(verdict('cell-entries',p,{symbolAnswers:{pencil:{[a]:[1,10]}}})).toBe(false);
 const empty={symbolAnswers:{pencil:{[a]:[]}}};
 expect(verdict('cell-entries',{...p,minimum:0,maximum:0},empty)).toBe(true);
 expect(verdict('cell-entries',{...p,minimum:0,maximum:0,faceMode:'first'},empty)).toBe(false);
});
test('symbol houses count every entry and reject unlisted or duplicate symbol keys',()=>{
 const p={symbols:'pencil',houses:[[a,b]],digits:[1,2,3],counts:[2,1,0]};
 const x={symbolAnswers:{pencil:{[a]:[1,2],[b]:[1]}}};
 expect(verdict('symbol-house',p,x)).toBe(true);
 expect(verdict('symbol-house',{...p,counts:[1,1,0]},x)).toBe(false);
 expect(verdict('symbol-house',{...p,digits:[1,1,2],counts:[2,2,1]},x)).toBe(false);
 expect(verdict('symbol-house',{...p,counts:[2]},x)).toBe(false);
 expect(verdict('symbol-house',p,{symbolAnswers:{pencil:{[a]:[1,2],[b]:[3]}}})).toBe(false);
 expect(verdict('symbol-house',{...p,houses:[[]],counts:[0,0,0]})).toBe(true);
 expect(verdict('symbol-house',{houses:[[a,b]],digits:[1,2,3],counts:[1,1,0]})).toBe(true);
 expect(verdict('symbol-house',{houses:[[a,b]],digits:[1,2,3],counts:[2,0,0]})).toBe(false);
});
const board={rows:9,cols:9,alphabet:[1,2,3,4,5,6,7,8,9],activeCells:Array.from({length:81},(_,i)=>`r${Math.floor(i/9)+1}c${i%9+1}` as `r${number}c${number}`)};
for(const kind of additions)test(`${kind}: unsupported coverage encloses the complete negated instance`,()=>{
 const text=caseExamples(sources.find(s=>s.file===`rules/${kind}.md`)!.text)[0].replace(`\n${kind} `,`\nnot ${kind} `);
 const result=normalise({file:'synthetic.rules.md',text},board);
 expect(result.issues).toEqual([]);expect(result.status).toBe('partial');
 expect(result.normalForm!.coverage.some(c=>c.kind===kind&&c.status==='unsupported')).toBe(true);
});
test('mapped values stop the V=D rewrite for valued rules, including negated maps',()=>{
 for(const declaration of ['mapped-values','not mapped-values']){
  const text=`---\nformat: open-rules\ntitle: Synthetic\nsetter: Example\nsource: ""\ncase: ""\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n---\n\`\`\`rules\nsudoku 9x9\n${declaration} selectionRef "H" scope ["r1c1","r1c2"] factor 2\nthermo r1c1-r1c2\n\`\`\``;
  const result=normalise({file:'synthetic.rules.md',text},board);
  expect(result.issues).toEqual([]);expect(result.status).toBe('partial');
  expect(result.normalForm!.rewrites.some(r=>r.rule==='value-channel')).toBe(false);
  expect(result.normalForm!.coverage.find(c=>c.kind==='thermo')!.status).toBe('unsupported');
 }
});

test('string defaults are explicit decoded JSON in portable contracts',()=>{
 expect(declaredDefault('"H".',{name:'string'},{})).toEqual({default:'H'});
 expect(declaredDefault('"a\\\\b". Named scope.',{name:'string'},{})).toEqual({default:'a\\b'});
 expect(declaredDefault('Absent; no named scope.',{name:'string'},{})).toEqual({});
 expect(library.registry.parameters!.get('https://rules.sudoku-sleuth.com/japanese-sums.md')!.parameters.selectionRef.default).toBe('H');
 expect(library.registry.parameters!.get('https://rules.sudoku-sleuth.com/mapped-values.md')!.parameters.values.default).toBe('V');
 expect(library.registry.parameters!.get('https://rules.sudoku-sleuth.com/symbol-house.md')!.parameters.symbols.default).toBe('D');
});
test('documented assignment relation selection compiles and uses the shared choice',()=>{
 expect(formula(`let xs=assignmentAnswer("colours"); (${assignmentMath}) ∧ ∀i∈[0,2): pairRelation(relationSpec(if xs[i]=0 then "sum" else "difference",1),D(boardCell(0,i)),D(boardCell(1,i)))`,{assignmentAnswers:{colours:[1,0]}})).toBe(false);
});

test('review: step 4 readers need one constructor and custom reification owns each truth label once',()=>{
 const base=caseExamples(sources.find(s=>s.file==='rules/selection.md')!.text)[0];
 const check=(line:string)=>checkCaseReferences({file:'step4.rules.md',text:base.replace('selection name "ink" scope ["r1c1","r1c2"] minimum 1 maximum 1',line)},library.registry).diagnostics;
 for(const line of ['marking-relation selectionRef "ghost" pairs [["r1c1","r1c2"]]','battenburg marks [] scope ["r1c1"] mode "selection" selectionRef "ghost"','shade-components selectionRef "ghost" scope ["r1c1"] name "parts"','japanese-sums selectionRef "ghost" line ["r1c1"] totals []','mapped-values selectionRef "ghost" scope ["r1c1"]','paired-roles left "ghost" right "ghost" name "links" scope ["r1c1"] relation {"op":"less"}','choice-count choices ["ghost"]','symbol-house symbols "ghost" houses [["r1c1"]] digits [1] counts [1]'])expect(check(line).some(d=>d.message.includes('exactly one constructor'))).toBe(true);
 expect(check('assignment-1: assignment name "slots" size 1 labels 1\nassignment-2: assignment name "slots" size 1 labels 1').some(d=>d.message.includes('found 2'))).toBe(true);
 const choice=caseExamples(sources.find(s=>s.file==='rules/choice-count.md')!.text)[0];
 expect(checkCaseReferences({file:'choice.rules.md',text:choice},library.registry).diagnostics).toEqual([]);
 expect(checkCaseReferences({file:'choice.rules.md',text:choice.replace('#line-truth firstLine','#line-truth firstLine').replace('reified(choiceAnswer("second")','reified(choiceAnswer("first")')},library.registry).diagnostics.some(d=>d.message.includes('found 2'))).toBe(true);
});
test('review: custom readers cannot introduce unconstructed names',()=>{
 const base=caseExamples(sources.find(s=>s.file==='rules/choice-count.md')!.text)[0];
 const rewriteMaths=(formula:string)=>base.replace(/  maths: '[^\n]+'/,`  maths: '${formula} ∧ reified(choiceAnswer("second"),valueSet(secondLine,"D",false,"consecutive"))'`);
 const text=rewriteMaths('reified(choiceAnswer("first"),|routeAnswer("ghost")|>0)');
 expect(checkCaseReferences({file:'custom.rules.md',text},library.registry).diagnostics.some(d=>d.message.includes('route "ghost" needs exactly one constructor'))).toBe(true);
 const mask=rewriteMaths('reified(choiceAnswer("first"),marked("ghost",boardCell(0,0)))');
 expect(checkCaseReferences({file:'custom.rules.md',text:mask},library.registry).diagnostics.some(d=>d.message.includes('selection "ghost" needs exactly one constructor'))).toBe(true);
});

afterAll(()=>expect(additions.filter(k=>!replayedKinds.has(k))).toEqual([]));
