import {expect,test} from 'bun:test';
import {compileCase,evaluate,allowed,checkAnswer,type CompiledRule,type Cell} from '../../src';
import {stringify} from 'yaml';
export const file=(rules:string,extra='',board='board: {rows: 1, cols: 3, symbols: [1,2,3]}\n')=>({file:'example.md',text:`---\nformat: open-rules\ntitle: Example\nsetter: Example\nsource: ""\ncase: ""\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n${board}---\n\n\`\`\`rules\n${rules}\n\`\`\`\n${extra}`});
export function compile(rules:string,extra='',board?:string){const result=compileCase(file(rules,extra,board));expect(result.diagnostics).toEqual([]);expect(result.value).toBeDefined();return result.value!;}
const a='r1c1',b='r1c2';
test('compile metadata, exact bound alias, partial grids and complete answers',()=>{
 const c=compile('rise: thermo r1c1-r1c2');const r=c.rules[0];
 expect(r.id).toBe('rise');expect(r.name).toBe('thermo');expect(r.span.file).toBe('example.md');expect(r.scope).toEqual([a,b]);
 expect(evaluate(r,{digits:{[a]:1}}).status).toBe('undecided');
 expect(evaluate(r,{digits:{[a]:1,[b]:2}}).status).toBe('holds');
 expect(evaluate(r,{digits:{[a]:2,[b]:1}})).toEqual({status:'broken',cells:[a,b]});
 expect(checkAnswer(c,{digits:{[a]:1,[b]:2,r1c3:3}}).holds).toBe(true);
 expect(checkAnswer(c,{digits:{[a]:2,[b]:1,r1c3:3}}).broken[0].rule).toBe(r);
});
test('custom formulas and not',()=>{
 const custom='```custom-rules\n'+stringify([{id:'ones',name:'Ones',parameters:{cells:{type:'path<cell>',description:'Ordered cells.'}},definition:'Every digit is one.',maths:'∀c∈cells:D(c)=1',example:'One satisfies and two breaks.'}])+'```';
 for(const [prefix,status] of [['','holds'],['not ','broken']] as const){const r=compile(`${prefix}#ones r1c1-r1c2`,custom).rules[0];expect(evaluate(r,{digits:{[a]:1,[b]:1}}).status).toBe(status);}
});
test('uniform if/unless and unknown shading',()=>{
 for(const unless of [false,true]){
 const r=compile(`thermo r1c1-r1c2 ${unless?'unless':'if'} uniform`).rules[0];const digits={[a]:3,[b]:1};
 expect(evaluate(r,{digits}).status).toBe('undecided');
 expect(evaluate(r,{digits,shading:{[a]:true,[b]:true}}).status).toBe(unless?'holds':'broken');
 expect(evaluate(r,{digits,shading:{[a]:true,[b]:false}}).status).toBe(unless?'broken':'holds');
 }
});
test('allowed matches independent exhaustive truth for every partial pair assignment',()=>{
 for(const text of ['pair r1c1-r1c2 difference 1','not pair r1c1-r1c2 sum 3','thermo r1c1-r1c2']){
  const r=compile(text).rules[0];
  for(const x of [undefined,1,2,3])for(const y of [undefined,1,2,3]){
   const digits:Partial<Record<Cell,number>>={};if(x!==undefined)digits[a]=x;if(y!==undefined)digits[b]=y;
   const got=allowed(r,{digits},new Map());expect(got).not.toBe('too-large');
   const predicate=(u:number,v:number)=>text.startsWith('not')?u+v!==3:text.startsWith('thermo')?u<v:Math.abs(u-v)===1;
   for(const c of r.scope.filter(c=>digits[c]===undefined)){
    const expected=new Set<number>();for(const u of [1,2,3])for(const v of [1,2,3])if((x===undefined||u===x)&&(y===undefined||v===y)&&predicate(u,v))expected.add(c===a?u:v);
    expect((got as Map<Cell,Set<number>>).get(c)).toEqual(expected);
   }
  }
 }
});
test('global rules remain decomposed and refuse candidate expansion',()=>{
 const c=compile('sudoku 9x9\nanti-knight','','');const r=c.rules[0];
 expect(r.scope.length).toBe(81);expect(allowed(r,{digits:{}},new Map())).toBe('too-large');
 expect(evaluate(r,{digits:{[a]:1,[b]:1}})).toEqual({status:'broken',cells:[a,b]});
});
test('negative and allGiven read face digits and exempt only their own marks',()=>{
 const c=compile('kropki white [r1c1-r1c2] allGiven ["white","black"]','','board: {rows: 1, cols: 3, symbols: [1,2,3,4,5,6,7,8,9]}\n');const r=c.rules[0];
 expect(evaluate(r,{digits:{r1c1:3,r1c2:4,r1c3:7}}).status).toBe('holds');
 expect(evaluate(r,{digits:{r1c1:3,r1c2:4,r1c3:8}}).status).toBe('broken');
 expect(evaluate(r,{digits:{r1c1:3,r1c2:4}}).status).toBe('undecided');
});
test('givens and header houses retain sources and report broken cells',()=>{
 const c=compile('sudoku 9x9','','givens: "r1c1=1"\nregions: [[r1c1,r4c4]]\n');
 const givens=c.rules.find(r=>r.name==='givens')!,house=c.rules.find(r=>r.name==='regions')!;
 expect(evaluate(givens,{digits:{r1c1:2}})).toEqual({status:'broken',cells:['r1c1']});
 expect(evaluate(house,{digits:{r1c1:2,r4c4:2}})).toEqual({status:'broken',cells:['r1c1','r4c4']});
});
test('finite AST subsets and custom name collisions never use library-specific witness shortcuts',()=>{
 const custom='```custom-rules\n'+stringify([{id:'sets',name:'Sets',parameters:{cells:{type:'set<cell>',description:'Cells.'},factor:{type:'number',description:'A number.'},offset:{type:'number',description:'A number.'}},definition:'The empty subset exists.',maths:'∃M:set<cell>: M⊆cells ∧ |M|=0',class:'existential',example:'An empty subset exists.'}])+'```';
 const r=compile('#sets cells ["r1c1"] factor 2 offset 0',custom).rules[0];
 expect(evaluate(r,{digits:{r1c1:1},values:{r1c1:17}}).status).toBe('holds');
});
test('candidate property for custom sums and shading conditions with varying domains',()=>{
 const custom='```custom-rules\n'+stringify([{id:'sum',name:'Sum',parameters:{cells:{type:'path<cell>',description:'Cells.'}},definition:'Three digits total six.',maths:'Σ_{c∈cells} D(c)=6',class:'with aggregates',example:'One, two, three satisfies; all ones breaks.'}])+'```';
 for(const negated of [false,true]){
 const r=compile(`${negated?'not ':''}#sum r1c1-r1c2-r1c3`,custom).rules[0];
 for(let mask=0;mask<27;mask++){
  const domains=[a,b,'r1c3' as Cell].map((c,i)=>[c,new Set([1,2,3].filter(d=>(mask+i+d)%3!==0))] as const);
  const got=allowed(r,{digits:{}},new Map(domains)) as Map<Cell,Set<number>>;
  const truth=new Map(domains.map(([c])=>[c,new Set<number>()]));
  for(const x of domains[0][1])for(const y of domains[1][1])for(const z of domains[2][1])if((x+y+z===6)!==negated){truth.get(a)!.add(x);truth.get(b)!.add(y);truth.get('r1c3')!.add(z);}
  expect(got).toEqual(truth);
 }
 }
});
test('partial arrow remainder is checked without sampling a list domain',()=>{
 const r=compile('arrow bulb ["r1c1"] line ["r1c2"] partial true').rules[0];
 expect(evaluate(r,{digits:{r1c1:3,r1c2:1}}).status).toBe('holds');
 expect(evaluate(r,{digits:{r1c1:1,r1c2:3}}).status).toBe('broken');
});
test('exact rational values and authored decimal precision survive evaluation',()=>{
 const r=compile('pair r1c1-r1c2 ratio 3').rules[0];
 expect(evaluate(r,{digits:{r1c1:1,r1c2:2},values:{r1c1:{numerator:1n,denominator:3n},r1c2:1}}).status).toBe('holds');
 const custom='```custom-rules\n'+stringify([{id:'precision',name:'Precision',parameters:{n:{type:'number',description:'An exact number.'}},definition:'An exact decimal equality.',maths:'n=9007199254740993',example:'The displayed integer satisfies.'}])+'```';
 expect(evaluate(compile('#precision n 9007199254740993',custom).rules[0],{digits:{}}).status).toBe('holds');
});
test('unknown digit tautologies are refined, and finite records have structural equality',()=>{
 const custom='```custom-rules\n'+stringify([{id:'tautology',name:'Tautology',parameters:{cells:{type:'path<cell>',description:'Cells.'}},definition:'Every digit equals itself.',maths:'∀c∈cells:D(c)=D(c)',example:'All assignments satisfy.'},{id:'records',name:'Records',parameters:{items:{type:'set<record{n:number}>',description:'Records.'}},definition:'A record belongs to itself.',maths:'∀r∈items:r∈items',example:'All record sets satisfy.'}])+'```';
 const c=compile('#tautology r1c1\n#records items [{"n":1}]',custom);
 expect(evaluate(c.rules[0],{digits:{}}).status).toBe('holds');
 expect(evaluate(c.rules[1],{digits:{}}).status).toBe('holds');
});
test('resource refusals are explicit and inactive conditions bypass them',()=>{
 const custom='```custom-rules\n'+stringify([{id:'unbounded',name:'Unbounded',parameters:{cells:{type:'path<cell>',description:'Cells.'}},definition:'An integer square.',maths:'∃n∈ℤ:n*n=2',example:'No integer square is two.'}])+'```';
 const r=compile('#unbounded r1c1-r1c2',custom).rules[0];
 expect(()=>evaluate(r,{digits:{r1c1:1,r1c2:2}})).toThrow();
 expect(allowed(r,{digits:{}},new Map())).toBe('too-large');
 const conditional=compile('#unbounded r1c1-r1c2 if uniform',custom).rules[0];
 expect(evaluate(conditional,{digits:{},shading:{r1c1:true,r1c2:false}}).status).toBe('holds');
});
test('the checker rejects unsupported universal structure quantification',()=>{
 const custom='```custom-rules\n'+stringify([{id:'all-subsets',name:'All subsets',parameters:{cells:{type:'set<cell>',description:'Cells.'}},definition:'Every board subset lies inside the supplied cells.',maths:'∀S:set<cell>: S⊆cells',class:'existential',example:'All board cells satisfy; a strict subset breaks.'}])+'```';
 const result=compileCase(file('#all-subsets cells ["r1c1"]',custom));
 expect(result.diagnostics.some(d=>d.code==='E_LOGIC_CLASS')).toBe(true);
});
test('custom typed defaults bind before evaluation',()=>{
 const custom='```custom-rules\n'+stringify([{id:'default',name:'Default',parameters:{n:{type:'number',description:'A number.',default:2}},definition:'The number is two.',maths:'n=2',example:'The default satisfies and three breaks.'}])+'```';
 expect(evaluate(compile('#default',custom).rules[0],{digits:{}}).status).toBe('holds');
 expect(evaluate(compile('#default n 3',custom).rules[0],{digits:{}}).status).toBe('broken');
});
test('implicit cell domains have board scopes and bounded finite lists are exhaustive',()=>{
 const custom='```custom-rules\n'+stringify([{id:'some-cell',name:'Some cell',parameters:{},definition:'A board digit is one.',maths:'∃c:cell:D(c)=1',example:'A one satisfies and all twos breaks.'},{id:'finite-list',name:'Finite list',parameters:{},definition:'A two-entry Boolean witness exists.',maths:'∃L:list<boolean>: |L|=2 ∧ L[0] ∧ ¬L[1]',class:'existential',example:'True then false satisfies.'}])+'```';
 const c=compile('#some-cell\n#finite-list',custom);
 expect(c.rules[0].scope).toEqual(c.board.activeCells);
 expect(evaluate(c.rules[0],{digits:{r1c1:2,r1c2:2,r1c3:2}}).status).toBe('broken');
 expect(evaluate(c.rules[1],{digits:{}}).status).toBe('holds');
});
