import {expect,test} from 'bun:test';
import {readdir} from 'node:fs/promises';
import {compilePublicLibrary,normalise,checkCaseReferences,parseFormula,checkFormula} from '../../src';
import {caseExamples} from '../../scripts/lint-skill';
import {fragmentVerdict,type Fragment} from './finite-fragment';
const sources=await Promise.all((await readdir('rules')).filter(n=>n.endsWith('.md')).map(async n=>({file:`rules/${n}`,text:await Bun.file(`rules/${n}`).text()})));
const compiled=compilePublicLibrary(sources);
if(!compiled.value)throw Error(JSON.stringify(compiled.diagnostics));
const library=compiled.value;
const a='r1c1',b='r1c2',c='r1c3',d='r2c1',e='r2c2';
const faces={[a]:1,[b]:2,[c]:3,[d]:4,[e]:5};
function verdict(kind:string,parameters:Record<string,unknown>,extra:Partial<Fragment>={},negated=false){
 const page=library.rules.get(kind)!;
 const defaults=Object.fromEntries(Object.entries(library.registry.parameters!.get(`https://rules.sudoku-sleuth.com/${kind}.md`)!.parameters).filter(([,p])=>Object.hasOwn(p,'default')).map(([n,p])=>[n,p.default]));
 const ast=page.formulas[0].ast;
 return fragmentVerdict(negated?{kind:'unary',value:'not',span:ast.span,children:[ast]}:ast,library.prelude,page.parameters,{faces,parameters:{...defaults,...parameters},...extra});
}
function formula(text:string,extra:Partial<Fragment>={}){
 const parsed=parseFormula(text);expect(parsed.diagnostics).toEqual([]);
 const checked=checkFormula(parsed.value!,library.prelude.environment);expect(checked.diagnostics).toEqual([]);
 return fragmentVerdict(checked.value!.ast,library.prelude,[],{faces,parameters:{},...extra});
}
const operand=(cells:string[],operation='sum',channel='D')=>({cells,operation,channel,repeats:true});
const quantity=(left:string[],right:string[],operation='difference')=>({left:operand(left),right:operand(right),operation});
const difference={op:'difference',value:1};
const additions=['coordinate-count','relation-scope','local-sequence','index-count','aggregate-equation','subset-total','digit-profile','profile-relation','number-property','derived-count','neighbour-count','route','route-group','route-clue','maze','network-clue','region-partition','region-shape','region-clue'];
for(const kind of additions)test(`${kind}: public example is accepted by the declaration contracts`,()=>{
 const source=sources.find(s=>s.file===`rules/${kind}.md`)!;
 const examples=caseExamples(source.text);expect(examples.length).toBeGreaterThan(0);
 for(const example of examples)expect(checkCaseReferences({file:source.file,text:example},library.registry).diagnostics).toEqual([]);
});
test('scope alternatives are inclusive, bounded, ordered and incident-aware',()=>{
 const params={cells:[a,b,c],relations:[difference,{op:'sum',value:5}]};
 expect(verdict('relation-scope',params)).toBe(true);
 expect(verdict('relation-scope',{...params,mode:'all'})).toBe(false);
 expect(verdict('relation-scope',{...params,relations:[],mode:'incident',anchors:[c]})).toBe(false);
 expect(verdict('relation-scope',{...params,relations:[],mode:'incident',anchors:[d]})).toBe(true);
 expect(verdict('relation-scope',{...params,negative:true})).toBe(false);
 expect(verdict('relation-scope',{...params,negative:true,except:[[b,a],[b,c]]})).toBe(true);
 expect(verdict('relation-scope',{cells:[a,b],relations:[{op:'less'}]})).toBe(true);
 expect(verdict('relation-scope',{cells:[a,b],relations:[difference],channel:'V'},{values:{...faces,[b]:1.5}})).toBe(false);
});
test('sequence recurrence, directed transitions, divisors and closure remain separate',()=>{
 expect(verdict('local-sequence',{line:[a,b,c],mode:'recurrence'})).toBe(true);
 expect(verdict('local-sequence',{line:[a,b,c],mode:'recurrence',loop:true})).toBe(false);
 expect(verdict('local-sequence',{line:[a,b],mode:'transitions',allowed:[[1,2]]})).toBe(true);
 expect(verdict('local-sequence',{line:[b,a],mode:'transitions',allowed:[[1,2]]})).toBe(false);
 expect(verdict('local-sequence',{line:[a,b],mode:'transitions',allowed:[[1,2],[1,2,3]]})).toBe(false);
 expect(verdict('local-sequence',{line:[a,b,c],mode:'transitions',allowed:[[1,2],[2,3]],loop:true})).toBe(false);
 expect(verdict('local-sequence',{line:[a,b,d],mode:'divisors'})).toBe(true);
 expect(verdict('local-sequence',{line:[b,c],mode:'divisors'})).toBe(false);
 expect(verdict('local-sequence',{line:[a,b],mode:'divisors'},{faces:{...faces,[a]:0}})).toBe(false);
 expect(verdict('local-sequence',{line:[a,b],mode:'divisors'},{faces:{...faces,[a]:-1}})).toBe(true);
 expect(verdict('local-sequence',{line:[a],mode:'recurrence'})).toBe(true);
 expect(verdict('local-sequence',{line:[a,b],mode:'transitions',allowed:[[1,2]],loop:true})).toBe(false);
});
test('index count counts occurrences and treats fractional or out-of-bounds positions as misses',()=>{
 const params={sources:[a,a,c],cells:[b,d],target:2,total:2};
 expect(verdict('index-count',params)).toBe(true);
 expect(verdict('index-count',{...params,total:0,indexChannel:'V'},{values:{...faces,[a]:1.5}})).toBe(true);
 expect(verdict('index-count',{...params,total:0,offset:8})).toBe(true);
 expect(verdict('index-count',{...params,sources:[a],target:4,total:1,offset:1})).toBe(true);
});
test('weighted arithmetic uses exact channels, powers and operand validity',()=>{
 const term=(cells:string[],coefficient=1,power=1)=>({operand:operand(cells),coefficient,power});
 expect(verdict('aggregate-equation',{left:[term([a,b],2)],right:[term([c],2)]})).toBe(true);
 expect(verdict('aggregate-equation',{left:[term([b],1,2)],right:[term([d])]})).toBe(true);
 expect(verdict('aggregate-equation',{left:[term([b],1,-1)],right:[term([d])]})).toBe(false);
 expect(verdict('aggregate-equation',{left:[term([a,b]),term([b])],leftOperation:'product',right:[term([c],2)]})).toBe(true);
 expect(verdict('aggregate-equation',{left:[{...term([a,a]),operand:{...operand([a,a]),repeats:false}}],right:[term([b])]})).toBe(false);
 expect(verdict('aggregate-equation',{left:[],right:[term([],0)],leftOperation:'sum'})).toBe(true);
});
test('subset totals distinguish existence and exclusion without repeated cells',()=>{
 const params={cells:[a,b,d],total:3};
 expect(verdict('subset-total',params)).toBe(true);
 expect(verdict('subset-total',{...params,forbid:true})).toBe(false);
 expect(verdict('subset-total',{...params,minimum:3})).toBe(false);
 expect(verdict('subset-total',{...params,maximum:1})).toBe(false);
 expect(verdict('subset-total',{cells:[a],total:2})).toBe(false);
 expect(verdict('subset-total',{cells:[],total:0})).toBe(false);
});
test('profiles count overlapping classes and occurrences, with explicit closure',()=>{
 const params={cells:[a,b,c],classes:[[1,1,3],[2,3]],counts:[2,2]};
 expect(verdict('digit-profile',params)).toBe(true);
 expect(verdict('digit-profile',{...params,counts:[2]})).toBe(false);
 expect(verdict('digit-profile',{cells:[a,a,b],classes:[[1]],counts:[2]})).toBe(true);
 expect(verdict('digit-profile',{cells:[a,a,b],classes:[[1]],counts:[2],closed:true})).toBe(false);
 expect(verdict('digit-profile',{cells:[a,b],classes:[[0.5]],counts:[2],closed:true,channel:'V'},{values:{...faces,[a]:0.5,[b]:0.5}})).toBe(true);
});
test('profile equality distinguishes set membership from multiplicity',()=>{
 const params={left:[a,a,b],right:[a,b,b]};
 expect(verdict('profile-relation',params)).toBe(false);
 expect(verdict('profile-relation',{...params,multiset:false})).toBe(true);
 expect(verdict('profile-relation',{left:[],right:[]})).toBe(true);
 expect(verdict('profile-relation',{left:[a],right:[b],channel:'V'},{values:{...faces,[a]:0.5,[b]:0.5}})).toBe(true);
});
test('decimal properties preserve orientation, leading zeros and integer requirements',()=>{
 const params={operand:operand([a,b],'decimal'),property:'power',argument:2};
 expect(verdict('number-property',params,{faces:{...faces,[a]:4,[b]:9}})).toBe(true);
 expect(verdict('number-property',params,{faces:{...faces,[a]:9,[b]:4}})).toBe(false);
 expect(verdict('number-property',{...params,reverse:true},{faces:{...faces,[a]:9,[b]:4}})).toBe(true);
 expect(verdict('number-property',{...params,argument:0})).toBe(false);
 expect(verdict('number-property',{operand:operand([a]),property:'places',argument:1},{faces:{...faces,[a]:0}})).toBe(true);
 expect(verdict('number-property',{operand:operand([a,b],'decimal'),property:'places',argument:2},{faces:{...faces,[a]:0}})).toBe(false);
 expect(verdict('number-property',{operand:operand([c]),property:'prime'})).toBe(true);
 expect(verdict('number-property',{operand:operand([d]),property:'composite'})).toBe(true);
 expect(verdict('number-property',{operand:operand([d]),property:'divisible',argument:0})).toBe(false);
 expect(verdict('number-property',{operand:operand([a],'sum','V'),property:'prime'},{values:{...faces,[a]:1.5}})).toBe(false);
 expect(verdict('number-property',{operand:operand([a]),property:'prime',reverse:true})).toBe(false);
});
test('derived counts preserve equal-result occurrences, exact ratios, ranks and division guards',()=>{
 const quantities=[quantity([a],[c]),quantity([b],[d])];
 expect(verdict('derived-count',{quantities,target:2,total:2})).toBe(true);
 expect(verdict('derived-count',{quantities,mode:'distinct',total:1})).toBe(true);
 expect(verdict('derived-count',{quantities,mode:'rank',target:3,total:3})).toBe(true);
 expect(verdict('derived-count',{quantities,mode:'rank',target:2,total:1})).toBe(true);
 expect(verdict('derived-count',{quantities:[quantity([a],[b],'ratio')],target:0.5,total:1})).toBe(true);
 expect(verdict('derived-count',{quantities:[quantity([a],[b],'ratio')],target:0,total:1},{faces:{...faces,[b]:0}})).toBe(false);
});
test('neighbour counts count a matching neighbour only once, and clip to scope',()=>{
 const params={cell:a,scope:[a,b,d],relations:[difference,{op:'sum',value:3}],total:1};
 expect(verdict('neighbour-count',params)).toBe(true);
 expect(verdict('neighbour-count',{...params,exhaustive:true})).toBe(false);
 expect(verdict('neighbour-count',{...params,scope:[b]})).toBe(true);
 expect(verdict('neighbour-count',{...params,relations:[{op:'difference',value:0}],includeSelf:true})).toBe(true);
 expect(verdict('neighbour-count',{...params,total:undefined})).toBe(true);
});
const scope=[a,b,d,e];
const routes={routeAnswers:{trail:[a,b,e,d]}};
const routesParams={name:'trail',scope,cover:true};
test('route topology checks closure, repeats, endpoints, edges and touch independently',()=>{
 expect(verdict('route',routesParams,routes)).toBe(true);
 expect(verdict('route',{...routesParams,loop:true},routes)).toBe(true);
 expect(verdict('route',{...routesParams,loop:true,startCell:a},routes)).toBe(false);
 expect(verdict('route',{...routesParams,startCell:a,endCell:d},routes)).toBe(true);
 expect(verdict('route',{...routesParams,noTouch:'orthogonal'},routes)).toBe(false);
 expect(verdict('route',{...routesParams,noTouch:'orthogonal',loop:true},routes)).toBe(true);
 expect(verdict('route',{...routesParams,requiredEdges:[[b,a]],forbiddenEdges:[[b,d]]},routes)).toBe(true);
 expect(verdict('route',{...routesParams,forbiddenEdges:[[b,a]]},routes)).toBe(false);
 expect(verdict('route',routesParams,{routeAnswers:{trail:[a,b,a,d]}})).toBe(false);
 expect(verdict('route',{name:'trail',scope:[a,b],loop:true},{routeAnswers:{trail:[a,b]}})).toBe(false);
 const crossing={routeAnswers:{trail:[a,e,b,d]}};
 expect(verdict('route',{...routesParams,move:'king'},crossing)).toBe(false);
 expect(verdict('route',{...routesParams,move:'king',crossings:true},crossing)).toBe(true);
});
test('route groups separate sharing, touching, coverage and diagonal crossings',()=>{
 const extra={routeAnswers:{upper:[a,b],lower:[d,e]}};
 const params={names:['upper','lower']};
 expect(verdict('route-group',params,extra)).toBe(true);
 expect(verdict('route-group',{...params,noTouch:'orthogonal'},extra)).toBe(false);
 expect(verdict('route-group',{...params,cover:scope},extra)).toBe(true);
 expect(verdict('route-group',{...params,cover:[a,b]},extra)).toBe(false);
 expect(verdict('route-group',{names:['upper','upper']},extra)).toBe(false);
 expect(verdict('route-group',params,{routeAnswers:{upper:[a,e],lower:[b,d]}})).toBe(false);
});
test('shared references conjoin conditions on one answer, including under negation',()=>{
 const expression='aggregate(routeAnswer("trail"),"D","sum")=3 ∧ aggregate(routeAnswer("trail"),"D","sum")=7';
 for(const L of [[a,b],[c,d]])expect(formula(expression,{routeAnswers:{trail:L}})).toBe(false);
 expect(verdict('route-clue',{name:'trail',total:3},{routeAnswers:{trail:[a,b]}})).toBe(true);
 expect(verdict('route-clue',{name:'trail',total:7},{routeAnswers:{trail:[a,b]}},true)).toBe(true);
 expect(()=>verdict('route-clue',{name:'absent',total:3},routes)).toThrow('Missing shared route');
});
test('route clues use the chosen order and cyclic windows',()=>{
 const extra={routeAnswers:{trail:[a,b,c]}};
 expect(verdict('route-clue',{name:'trail',relations:[difference],total:6},extra)).toBe(true);
 expect(verdict('route-clue',{name:'trail',relations:[difference],loop:true},extra)).toBe(false);
 expect(verdict('route-clue',{name:'trail',classes:[[1],[2],[3]],length:3},extra)).toBe(true);
 expect(verdict('route-clue',{name:'trail',classes:[[1],[2],[3]],length:2},extra)).toBe(false);
});
const tree={networkAnswers:{passages:[[a,b],[a,d],[d,e]]}};
test('maze constructor rejects duplicate edges, disconnection and cycles',()=>{
 const params={name:'passages',scope};
 expect(verdict('maze',params,tree)).toBe(true);
 expect(verdict('maze',{...params,leaves:[b,e],maximumDegree:2},tree)).toBe(true);
 expect(verdict('maze',{...params,leaves:[a]},tree)).toBe(false);
 expect(verdict('maze',params,{networkAnswers:{passages:[[a,b],[d,e]]}})).toBe(false);
 expect(verdict('maze',params,{networkAnswers:{passages:[[a,b],[b,a],[a,d],[d,e]]}})).toBe(false);
 const cycle={networkAnswers:{passages:[...tree.networkAnswers.passages,[b,e]]}};
 expect(verdict('maze',params,cycle)).toBe(false);
 expect(verdict('maze',{...params,tree:false},cycle)).toBe(true);
 expect(verdict('maze',{name:'passages',scope:[a],leaves:[]},{networkAnswers:{passages:[]}})).toBe(true);
 expect(verdict('maze',{name:'passages',scope:[]},{networkAnswers:{passages:[]}})).toBe(false);
});
test('network clues refer to the same graph and route',()=>{
 expect(verdict('network-clue',{name:'passages',line:'trail',degrees:[{cell:a,degree:2}]},{...tree,routeAnswers:{trail:[b,a,d,e]}})).toBe(true);
 expect(verdict('network-clue',{name:'passages',line:'trail'},{...tree,routeAnswers:{trail:[a,e]}})).toBe(false);
});
function paths(prefix:string[],remaining:string[]):string[][]{return [prefix,...remaining.flatMap((c,i)=>paths([...prefix,c],remaining.filter((_,j)=>j!==i)))];}
const partition={partitionAnswers:{areas:[[a,b],[d,e]]},witnesses:{route:paths([],scope).filter(p=>p.length)}};
test('region constructor binds exact scope, connectivity, sizes, borders and channels',()=>{
 const params={name:'areas',scope,sizes:[2],count:2};
 expect(verdict('region-partition',params,partition)).toBe(true);
 expect(verdict('region-partition',{...params,joins:[[a,b]],borders:[[a,d]]},partition)).toBe(true);
 expect(verdict('region-partition',{...params,joins:[[a,d]]},partition)).toBe(false);
 expect(verdict('region-partition',{...params,separation:'orthogonal'},partition)).toBe(false);
 expect(verdict('region-partition',params,{...partition,partitionAnswers:{areas:[[a,e],[b,d]]}})).toBe(false);
 expect(verdict('region-partition',params,{...partition,partitionAnswers:{areas:[[a,b]]}})).toBe(false);
 expect(verdict('region-partition',{...params,distinct:true,channel:'V'},{...partition,values:{...faces,[a]:0.5,[b]:0.5}})).toBe(false);
});
test('region shape, translation, rotation, reflection and galaxy centre checks',()=>{
 const params={name:'areas',shapes:[[a,b]],uses:[2]};
 expect(verdict('region-shape',params,partition)).toBe(true);
 const vertical={partitionAnswers:{areas:[[a,d],[b,e]]}};
 expect(verdict('region-shape',{...params,rotations:false,reflections:false},vertical)).toBe(false);
 expect(verdict('region-shape',{...params,rotations:true,reflections:false},vertical)).toBe(true);
 expect(verdict('region-shape',{name:'areas',centres:[{row2:0,col2:1},{row2:2,col2:1}]},partition)).toBe(true);
 expect(verdict('region-shape',{name:'areas',centres:[{row2:1,col2:1}]},partition)).toBe(false);
 expect(verdict('region-shape',{name:'areas',centres:[{row2:0,col2:0}]},partition)).toBe(false);
 expect(verdict('region-shape',{name:'areas',centres:[{row2:0,col2:1},{row2:0,col2:1}]},partition)).toBe(false);
});
test('region clues count size, marker occurrences and return crossings on the shared partition',()=>{
 expect(verdict('region-clue',{name:'areas',markers:[b],operation:'count'},partition)).toBe(true);
 expect(verdict('region-clue',{name:'areas',markers:[a],operation:'count'},partition)).toBe(false);
 expect(verdict('region-clue',{name:'areas',markers:[a,d],perRegion:1,target:3},partition)).toBe(false);
 expect(verdict('region-clue',{name:'areas',markers:[a,d],perRegion:1,operation:'count',target:2},partition)).toBe(true);
 expect(verdict('region-clue',{name:'areas',markers:[],crossings:[{cells:[a,d,a],total:2}]},partition)).toBe(true);
 expect(verdict('region-clue',{name:'areas',markers:[],crossings:[{cells:[a,c],total:1}]},partition)).toBe(false);
});
test('coordinate hits use bounded destinations and exact transformed integer indices',()=>{
 const params={sources:[b],scope:[a,b,c],target:2,total:1};
 expect(verdict('coordinate-count',params)).toBe(true);
 expect(verdict('coordinate-count',{...params,scope:[a]})).toBe(false);
 expect(verdict('coordinate-count',{...params,colBase:2,colFactor:-1,target:2})).toBe(true);
 expect(verdict('coordinate-count',{...params,indexChannel:'V',total:0},{values:{...faces,[b]:1.5}})).toBe(true);
});
test('self frequencies and arbitrary class windows retain whole-list closure',()=>{
 expect(verdict('digit-profile',{cells:[a,b,b],classes:[],counts:[],selfCount:true})).toBe(true);
 expect(verdict('digit-profile',{cells:[a,b],classes:[],counts:[],selfCount:true})).toBe(false);
 const params={cells:[a,b,a],classes:[[1],[2]],counts:[1,1],windowLength:2};
 expect(verdict('digit-profile',params)).toBe(true);
 expect(verdict('digit-profile',{...params,loop:true})).toBe(false);
 expect(verdict('digit-profile',{...params,windowLength:4})).toBe(true);
});
test('shape reflections can be allowed without admitting a half-turn rotation',()=>{
 const extra={partitionAnswers:{areas:[[a,b,e]]}};
 expect(verdict('region-shape',{name:'areas',shapes:[[a,b,d]],rotations:false,reflections:false},extra)).toBe(false);
 expect(verdict('region-shape',{name:'areas',shapes:[[a,b,d]],rotations:false,reflections:true},extra)).toBe(true);
 // The unique orientation of this asymmetric four-cell template needs a half turn.
 expect(formula('congruent({boardCell(0,0),boardCell(0,1),boardCell(0,2),boardCell(1,0)},{boardCell(1,0),boardCell(1,1),boardCell(1,2),boardCell(0,2)},false,true)')).toBe(false);
 expect(formula('congruent({boardCell(0,0),boardCell(0,1),boardCell(0,2),boardCell(1,0)},{boardCell(1,0),boardCell(1,1),boardCell(1,2),boardCell(0,2)},true,false)')).toBe(true);
});
test('new declarations retain whole-instance unsupported comparison coverage under negation',()=>{
 const board={rows:9,cols:9,alphabet:[1,2,3,4,5,6,7,8,9],activeCells:Array.from({length:81},(_,i)=>`r${Math.floor(i/9)+1}c${i%9+1}` as `r${number}c${number}`)};
 for(const kind of additions){
  const text=caseExamples(sources.find(s=>s.file===`rules/${kind}.md`)!.text)[0].replace(`\n${kind} `,`\nnot ${kind} `);
  const result=normalise({file:'synthetic.rules.md',text},board);
  expect(result.issues).toEqual([]);
  expect(result.status).toBe('partial');
  expect(result.normalForm!.coverage.some(c=>c.kind===kind&&c.status==='unsupported')).toBe(true);
 }
});
