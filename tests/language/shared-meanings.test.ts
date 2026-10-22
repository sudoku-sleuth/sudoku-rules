import { expect, test } from 'bun:test';
import { readdir } from 'node:fs/promises';
import { parse, stringify } from 'yaml';
import { compilePublicLibrary, checkCaseReferences, normalise, type Expr } from '../../src';
import { fragmentVerdict, type Fragment } from './finite-fragment';
import { caseExamples } from '../../scripts/lint-skill';
const sources = await Promise.all((await readdir('rules')).filter(n => n.endsWith('.md')).map(async n => ({file:`rules/${n}`,text:await Bun.file(`rules/${n}`).text()})));
const compiled = compilePublicLibrary(sources);
if (!compiled.value) throw Error(JSON.stringify(compiled.diagnostics));
const library = compiled.value;
const a='r1c1', b='r1c2', c='r1c3', d='r1c4', e='r1c5';
const channel = {channel:'D'};
const defaults: Record<string,Record<string,unknown>> = {
 thermo:{channel:'V',strict:true,orientation:'forward'}, 'slow-thermo':{...channel,orientation:'forward'},
 renban:{channel:'V',repeats:false}, nabner:{...channel,distinct:false,separated:false},
 modular:{modulus:3,length:3,loop:false},entropic:{loop:false},parity:{loop:false},
 'line-choice':{loop:false}, 'difference-line':{...channel,loop:false,diamonds:[]},
 'prefix-sum':{...channel,crusts:[],include:false},
 'blocked-sight':{...channel,blockers:[],blocking:'listed',includeBlocker:false,includeOrigin:false,records:false,offset:0,targetCells:[]},
 'sum-partition':{...channel,repeats:true,loop:false},lookup:{...channel,indexChannel:'D',offset:0,relation:{op:'difference',value:0}},
};
function verdict(kind:string,parameters:Record<string,unknown>,faces:Record<string,number>,extra:Partial<Fragment>={},negated=false) {
 const page=library.rules.get(kind)!;
 const ast=page.formulas[0].ast;
 const formula:Expr=negated?{kind:'unary',value:'not',span:ast.span,children:[ast]}:ast;
 return fragmentVerdict(formula,library.prelude,page.parameters,{faces,parameters:{...defaults[kind],...parameters},...extra});
}
const line=[a,b,c], edges=[[a,b],[b,c],[b,d]];
test('either-end thermo chooses one orientation for the whole path',()=>{
 expect(verdict('thermo',{line,orientation:'either'},{[a]:3,[b]:2,[c]:1})).toBe(true);
 expect(verdict('thermo',{line,orientation:'either'},{[a]:1,[b]:3,[c]:2})).toBe(false);
 expect(verdict('thermo',{line,strict:false},{[a]:1,[b]:1,[c]:2})).toBe(true);
 expect(verdict('thermo',{line},{[a]:1,[b]:1,[c]:2})).toBe(false);
});
test('thermo and slow thermo retain different default channels',()=>{
 const faces={[a]:1,[b]:2};const extra={values:{[a]:4,[b]:3}};
 expect(verdict('thermo',{line:[a,b]},faces,extra)).toBe(false);
 expect(verdict('slow-thermo',{line:[a,b]},faces,extra)).toBe(true);
 expect(verdict('thermo',{line:[a,b],channel:'D'},faces,extra)).toBe(true);
});
test('Renban selects D or V and distinguishes repeats from consecutive gaps',()=>{
 const faces={[a]:1,[b]:1,[c]:2};
 expect(verdict('renban',{line,channel:'D',repeats:true},faces)).toBe(true);
 expect(verdict('renban',{line,channel:'D'},faces)).toBe(false);
 expect(verdict('renban',{line,channel:'D',repeats:true},{[a]:1,[b]:1,[c]:3})).toBe(false);
 expect(verdict('renban',{line},faces,{values:{[a]:1,[b]:2,[c]:3}})).toBe(true);
 expect(verdict('renban',{line},faces,{values:{[a]:0.5,[b]:1.5,[c]:2.5}})).toBe(true);
 expect(verdict('renban',{line},faces,{values:{[a]:0.5,[b]:1,[c]:2.5}})).toBe(false);
});
test('Nabner separates exact nonconsecutiveness, repeats and strict gaps on V',()=>{
 const faces={[a]:1,[b]:2};const params={line:[a,b],channel:'V'};
 expect(verdict('nabner',params,faces,{values:{[a]:1,[b]:1.5}})).toBe(true);
 expect(verdict('nabner',{...params,separated:true},faces,{values:{[a]:1,[b]:1.5}})).toBe(false);
 expect(verdict('nabner',params,faces,{values:{[a]:1,[b]:1}})).toBe(true);
 expect(verdict('nabner',{...params,distinct:true},faces,{values:{[a]:1,[b]:1}})).toBe(false);
});
test('modulus four and three-cell windows include every junction turn',()=>{
 const params={line:[],edges,modulus:4,length:3};
 expect(verdict('modular',params,{[a]:1,[b]:2,[c]:3,[d]:4})).toBe(true);
 expect(verdict('modular',params,{[a]:1,[b]:2,[c]:3,[d]:5})).toBe(false);
 // A length-four traversal cannot visit three leaves of this junction.
 expect(verdict('modular',{...params,length:4},{[a]:1,[b]:2,[c]:3,[d]:5})).toBe(true);
 expect(verdict('modular',params,{[a]:1,[b]:2,[c]:3,[d]:5},{},true)).toBe(true);
});
test('whole-set Renban and Nabner use the entire component',()=>{
 expect(verdict('renban',{line:[],edges},{[a]:1,[b]:2,[c]:3,[d]:4})).toBe(true);
 expect(verdict('renban',{line:[],edges},{[a]:1,[b]:2,[c]:3,[d]:3})).toBe(false);
 expect(verdict('nabner',{line:[],edges},{[a]:1,[b]:3,[c]:5,[d]:7})).toBe(true);
 expect(verdict('nabner',{line:[],edges},{[a]:1,[b]:3,[c]:5,[d]:6})).toBe(false);
});
test('disconnected or malformed edges cannot supply a network meaning',()=>{
 expect(verdict('modular',{line:[],edges:[[a,b],[c,d]]},{[a]:1,[b]:2,[c]:3,[d]:4})).toBe(false);
 expect(verdict('modular',{line:[],edges:[[a,b,c]]},{[a]:1,[b]:2,[c]:3})).toBe(false);
});
test('Line Choice uses standalone V Renban and the entropic two-cell condition',()=>{
 const faces={[a]:1,[b]:2,[c]:4};const values={[a]:1,[b]:2,[c]:3};
 expect(verdict('line-choice',{line,kinds:['renban'],min:1,max:1},faces,{values})).toBe(verdict('renban',{line},faces,{values}));
 for(const pair of [[1,2],[1,4]]) {
  const faces={[a]:pair[0],[b]:pair[1]};
  expect(verdict('line-choice',{line:[a,b],kinds:['entropic'],min:1,max:1},faces)).toBe(verdict('entropic',{line:[a,b]},faces));
 }
});
test('absolute differences differ from signed arithmetic steps',()=>{
 const faces={[a]:2,[b]:4,[c]:2};
 expect(verdict('difference-line',{line,mode:'same'},faces)).toBe(true);
 expect(verdict('difference-line',{line,mode:'signed-step'},faces)).toBe(false);
 expect(verdict('difference-line',{line,mode:'signed-step'},{[a]:6,[b]:4,[c]:2})).toBe(true);
 expect(verdict('difference-line',{line,mode:'different'},{[a]:1,[b]:3,[c]:6})).toBe(true);
 expect(verdict('difference-line',{line,mode:'different'},faces)).toBe(false);
});
test('undirected edge reversal does not invent another difference',()=>{
 expect(verdict('difference-line',{line:[],edges:[[a,b],[b,a]],mode:'different'},{[a]:1,[b]:3})).toBe(true);
 expect(verdict('difference-line',{line,mode:'same',diamonds:[d]},{[a]:1,[b]:3,[c]:5,[d]:2})).toBe(true);
 expect(verdict('difference-line',{line,mode:'same',diamonds:[d]},{[a]:1,[b]:3,[c]:5,[d]:3})).toBe(false);
});
test('split peas concatenate endpoints in either order and sum only the interior',()=>{
 const full=[a,b,c,d,e];const faces={[a]:3,[b]:3,[c]:4,[d]:6,[e]:1};
 expect(verdict('split-pea',{line:full},faces)).toBe(true);
 expect(verdict('split-pea',{line:[...full].reverse()},faces)).toBe(true);
 expect(verdict('split-pea',{line:full},{...faces,[d]:5})).toBe(false);
 expect(verdict('split-pea',{line:full},{...faces,[a]:12})).toBe(false);
});
test('stopping selection uses the first target, given or crust and controls inclusion',()=>{
 const cells=[a,b,c,d];const faces={[a]:1,[b]:2,[c]:9,[d]:9};
 expect(verdict('prefix-sum',{cells,stop:'target',target:9,total:3},faces)).toBe(true);
 expect(verdict('prefix-sum',{cells,stop:'target',target:9,total:12,include:true},faces)).toBe(true);
 expect(verdict('prefix-sum',{cells,stop:'given',total:3},faces,{givens:{[c]:9,[d]:9}})).toBe(true);
 expect(verdict('prefix-sum',{cells,stop:'crust',crusts:[9],total:3},faces)).toBe(true);
 expect(verdict('prefix-sum',{cells,stop:'target',target:8,total:21},faces)).toBe(false);
});
test('sight blocks dynamically, deduplicates origin and supports channel, offset and sum',()=>{
 const faces={[a]:3,[b]:1,[c]:2,[d]:5};const rays=[[b,c],[d]];
 expect(verdict('blocked-sight',{cell:a,rays,blocking:'different-parity',includeOrigin:true,total:3,output:'count'},faces)).toBe(true);
 expect(verdict('blocked-sight',{cell:a,rays,blocking:'different-parity',includeOrigin:true,total:4,output:'count',includeBlocker:true},faces)).toBe(true);
 expect(verdict('blocked-sight',{cell:a,rays,blockers:[c],output:'sum',offset:1,total:7},faces)).toBe(true);
 expect(verdict('blocked-sight',{cell:a,rays,blocking:'different-colour',includeOrigin:true,output:'count',total:2},faces,{shaded:[a,b,c]})).toBe(false);
 expect(verdict('blocked-sight',{cell:a,rays,blocking:'different-colour',includeOrigin:true,output:'count',total:3},faces,{shaded:[a,b,c]})).toBe(true);
 expect(verdict('blocked-sight',{cell:a,rays:[[b,c]],records:true,output:'sum',channel:'V',total:5},faces,{values:{[a]:3,[b]:5,[c]:4,[d]:1}})).toBe(true);
});
test('sight compares with an origin or an aggregate target without a fixed clue',()=>{
 const faces={[a]:2,[b]:3,[c]:4,[d]:2};
 expect(verdict('blocked-sight',{cell:a,rays:[[b,c]],output:'count'},faces)).toBe(true);
 expect(verdict('blocked-sight',{cell:a,rays:[[b,c]],output:'count',targetCells:[d]},faces)).toBe(true);
});
test('sum covering may overlap while a sum partition cannot',()=>{
 const faces={[a]:2,[b]:3,[c]:2};
 expect(verdict('sum-partition',{line,total:5,mode:'cover'},faces)).toBe(true);
 expect(verdict('sum-partition',{line,total:5,mode:'partition'},faces,{witnesses:{cuts:[[0,3],[0,1,3],[0,2,3],[0,1,2,3]]}})).toBe(false);
 expect(verdict('sum-partition',{line:[a,b,c,d],total:5,mode:'partition'},{...faces,[d]:3},{witnesses:{cuts:[[0,2,4]]}})).toBe(true);
});
test('aggregate operands preserve repeats, choose slices and read reversible channels',()=>{
 const left={cells:[a,b,a],channel:'D',operation:'sum',repeats:true};
 const right={cells:[c],channel:'D',operation:'sum',repeats:true};
 const faces={[a]:1,[b]:2,[c]:4};const relation={op:'difference',value:0};
 expect(verdict('aggregate-relation',{left,right,relation},faces)).toBe(true);
 expect(verdict('aggregate-relation',{left:{...left,repeats:false},right,relation},faces)).toBe(false);
 expect(verdict('aggregate-relation',{left:{...left,start:1,length:1},right:{...right,channel:'V'},relation},faces,{values:{[a]:1,[b]:8,[c]:2}})).toBe(true);
 expect(verdict('aggregate-relation',{left:{...left,start:4},right,relation},faces)).toBe(false);
});
test('aggregate prefix selection and decimal reading share the canonical operands',()=>{
 const left={cells:[a,b,c],channel:'D',operation:'sum',repeats:true,stop:'target',target:9};
 const right={cells:[d],channel:'D',operation:'sum',repeats:true};const relation={op:'difference',value:0};
 expect(verdict('aggregate-relation',{left,right,relation},{[a]:1,[b]:2,[c]:9,[d]:3})).toBe(true);
 expect(verdict('aggregate-relation',{left:{cells:[a,b],channel:'D',operation:'decimal',repeats:true},right,relation},{[a]:1,[b]:2,[d]:12})).toBe(true);
});
test('parameter-bound aliases typecheck bindings and keep their own grammar',()=>{
 const raw=sources.find(p=>p.file==='rules/kropki.md')!;const match=/^---\n([\s\S]*?)\n---\n/.exec(raw.text)!;
 const header=parse(match[1]);
 for(const bindings of [{...header.alias_bind,channel:'false'},{cells:'cells'},{...header.alias_bind,extra:'true'}]) {
  const source={...raw,text:'---\n'+stringify({...header,alias_bind:bindings})+'---\n'+raw.text.slice(match[0].length)};
  expect(compilePublicLibrary(sources.map(p=>p===raw?source:p)).value).toBeUndefined();
 }
 expect(library.registry.lines!.get('https://rules.sudoku-sleuth.com/kropki.md')!.parameter.name).toBe('colour');
 expect(library.registry.lines!.get('https://rules.sudoku-sleuth.com/pair.md')!.parameter.name).toBe('relation');
});
test('all changed and added examples use accepted public declarations',()=>{
 const changed=new Set(['outside','quadruple','pair','kropki','thermo','slow-thermo','scoped-move','anti-king','anti-knight','renban','nabner','bremban','modular','entropic','parity','line-choice','whispers','close-whispers','between','lockout','cage','little-killer','double-arrow','equal-sums','region-sum','arrow','extremum','tardis','index','numbered-room','index-line','pointing-arrow','skyscraper','split-pea','difference-line','prefix-sum','blocked-sight','sum-partition','aggregate-relation','lookup','shifter-line','summit','primality']);
 for(const source of sources.filter(p=>changed.has(p.file.slice(6,-3)))) for(const text of caseExamples(source.text))
  expect(checkCaseReferences({file:source.file+'#example',text},library.registry).diagnostics.filter(d=>d.code!=='W_DECORATION_OVERLAP')).toEqual([]);
});
test('finite comparison leaves extended network instances whole under negation',()=>{
 const text='---\nformat: open-rules\ntitle: Network example\nsetter: Example\nsource: ""\ncase: ""\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n---\n\n```rules\nsudoku 9x9\nnot modular line [] edges [["r1c1","r1c2"],["r1c2","r2c2"]] modulus 4 length 3\n```';
 const result=normalise({file:'network.rules.md',text},{rows:9,cols:9,activeCells:Array.from({length:81},(_,i)=>`r${Math.floor(i/9)+1}c${i%9+1}` as `r${number}c${number}`),alphabet:[1,2,3,4,5,6,7,8,9],regions:[]});
 expect(result.issues).toEqual([]);expect(result.status).toBe('partial');
 expect(result.normalForm!.coverage.some(c=>c.kind==='modular' && c.status==='unsupported')).toBe(true);
});

test('bounded lookup validates integer positions and supports independent channels and relations',()=>{
 const faces={[a]:2,[b]:3,[c]:4};const params={cells:[b,c],cell:a,target:4};
 expect(verdict('lookup',params,faces)).toBe(true);
 expect(verdict('lookup',params,{...faces,[a]:3})).toBe(false);
 expect(verdict('lookup',{...params,indexChannel:'V'},faces,{values:{[a]:1.5,[b]:3,[c]:4}})).toBe(false);
 expect(verdict('lookup',{...params,channel:'V',target:2,relation:{op:'ratio',value:3}},faces,{values:{[a]:2,[b]:3,[c]:6}})).toBe(true);
});
test('stopping selection feeds the same whole-set predicates as ordinary Renban and Nabner',()=>{
 const faces={[a]:1,[b]:2,[c]:9};const selection={stop:'target',target:9,crusts:[],include:false};
 expect(verdict('renban',{line,channel:'D',selection},faces)).toBe(true);
 expect(verdict('renban',{line,channel:'D',selection:{...selection,include:true}},faces)).toBe(false);
 expect(verdict('nabner',{line,selection},{[a]:1,[b]:3,[c]:9})).toBe(true);
});
test('sum partitions can choose a cyclic cut without changing open-line defaults',()=>{
 const faces={[a]:3,[b]:3,[c]:2,[d]:2};const params={line:[a,b,c,d],total:5,mode:'partition'};
 const extra={witnesses:{cuts:[[0,2,4]]}};
 expect(verdict('sum-partition',params,faces,extra)).toBe(false);
 expect(verdict('sum-partition',{...params,loop:true},faces,extra)).toBe(true);
});

test('region sums validate exact maximal runs and preserve repeated occurrences',()=>{
 const faces={[a]:1,[b]:2,[c]:3};const extra={regions:[[a,b],[c]]};
 expect(verdict('region-sum',{line:[a,b,c],segments:[[a,b],[c]],combine:false,channel:'V'},faces,extra)).toBe(true);
 expect(verdict('region-sum',{line:[a,b,c],segments:[[a],[c]],combine:false,channel:'V'},faces,extra)).toBe(false);
 expect(verdict('region-sum',{line:[a,c,b],segments:[[a],[c],[b]],combine:true,channel:'V'},faces,extra)).toBe(true);
 expect(verdict('region-sum',{line:[a,c,a],segments:[[a],[c],[a]],combine:true,channel:'V'},{...faces,[c]:2},extra)).toBe(true);
});

test('empty network primary lists require explicitly supplied edges',()=>{
 const envelope=(line:string)=>({file:'geometry.rules.md',text:'---\nformat: open-rules\ntitle: Geometry example\nsetter: Example\nsource: ""\ncase: ""\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n---\n\n```rules\nsudoku 9x9\n'+line+'\n```'});
 expect(checkCaseReferences(envelope('modular line []'),library.registry).diagnostics.some(d=>d.code==='E_CASE_PARAMETERS')).toBe(true);
 expect(checkCaseReferences(envelope('modular line [] edges [["r1c1","r1c2"]]'),library.registry).diagnostics).toEqual([]);
});
