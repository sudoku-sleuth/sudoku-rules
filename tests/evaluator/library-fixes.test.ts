import {expect, test} from 'bun:test';
import {stringify} from 'yaml';
import {compileCase, evaluate, checkAnswer, checkCaseReferences, normalise, compare, parseDeclaration, printDeclaration, type Cell, type BoardContext} from '../../src';
import {declarationLibrary} from '../../src/declaration-library';

const file = (rules:string, board:Record<string,unknown>) => ({file:'synthetic.rules.md',text:`---\n${stringify({format:'open-rules',title:'Synthetic board',setter:'Example',source:'',case:'',library:'https://rules.sudoku-sleuth.com/',status:'read',board})}---\n\n\`\`\`rules\n${rules}\n\`\`\`\n`});
const small = {rows:1,cols:2,symbols:[1,2],regions:[['r1c1','r1c2']]};
test('advisory house warning retains references, compiled rules and diagnostics',()=>{
 const f=file('allowed-digits r1c1 digits [1,2]',small);
 const refs=checkCaseReferences(f,declarationLibrary), compiled=compileCase(f);
 expect(refs.value?.declarations).toHaveLength(1);
 expect(compiled.value?.rules).toHaveLength(1);
 expect(compiled.diagnostics.map(d=>d.code)).toEqual(['W_CASE_HOUSES']);
 expect(evaluate(compiled.value!.rules[0],{digits:{r1c1:1}}).status).toBe('holds');
 const invalid=compileCase(file('allowed-digits r1c1 digits [1,2] typo true',small));
 expect(invalid.value).toBeUndefined();
 expect(invalid.diagnostics.map(d=>d.code)).toContain('W_CASE_HOUSES');
 expect(invalid.diagnostics.map(d=>d.code)).toContain('E_CASE_PARAMETERS');
});

test('declaration metadata survives parsing and compilation without changing meaning or fog',()=>{
 const base='rise: thermo r1c1-r1c2';
 const decorated=base+' meta {"stated":false,"name":"Amber trail","strips":[["r1c1"],["r1c2"]]}';
 const parsed=parseDeclaration({file:'line',text:decorated});
 expect(parsed.diagnostics).toEqual([]);
 expect(printDeclaration(parsed.value!)).toBe(decorated);
 expect(parsed.value!.parameters).toEqual([]);
 const b={rows:1,cols:2,symbols:[1,2]};
 const plain=compileCase(file(base,b)).value!, rich=compileCase(file(decorated,b)).value!;
 expect(rich.rules[0].meta).toEqual({stated:false,name:'Amber trail',strips:[['r1c1'],['r1c2']]});
 expect(rich.rules[0].parameters).toEqual(plain.rules[0].parameters);
 for(const digits of [{r1c1:1,r1c2:2},{r1c1:2,r1c2:1}]) expect(evaluate(rich.rules[0],{digits})).toEqual(evaluate(plain.rules[0],{digits}));
 const context:BoardContext={rows:1,cols:2,alphabet:[1,2],activeCells:['r1c1','r1c2']};
 const fog=(f:ReturnType<typeof file>)=>({...f,text:f.text.replace('status: read','status: read\nfog: {initiallyLit: [r1c1], links: []}')});
 const a=normalise(fog(file(base,b)),context), c=normalise(fog(file(decorated,b)),context);
 expect(a.status).toBe('complete');expect(c.status).toBe('complete');
 expect(compare(a,c).status).toBe('equivalent');
 for(const meta of ['null','{"stated":"yes"}','{"name":2}','{"unknown":true}','{"strips":[["r2c1"]]}']) expect(compileCase(file(base+' meta '+meta,b)).value).toBeUndefined();
 expect(parseDeclaration({file:'line',text:decorated+' meta {}'}).value).toBeUndefined();
 for(const line of [
  'value-modifier factor 2 offset 0 exactly [["r1c1","r1c2"]] count 1 atMostOne [] distinct false meta {"name":"Doubler","stated":true}',
  'index r1c1 axis "column" meta {"strips":[["r1c1","r1c2"]],"stated":false}',
  'pair r1c1-r1c2 difference 1 meta {"stated":false} if distinct',
 ]) expect(compileCase(file(line,b)).diagnostics).toEqual([]);
});

test('padded canvas exposes only active cells and supports overlapping partial houses',()=>{
 const activeCells:Cell[]=Array.from({length:81},(_,i)=>`r${2+Math.floor(i/9)}c${2+i%9}`);
 const regions=Array.from({length:9},(_,box)=>activeCells.filter((_,i)=>Math.floor(i/27)*3+Math.floor(i%9/3)===box));
 const houses=[['r2c2','r2c3'],['r2c3','r3c3']];
 const board={rows:11,cols:11,symbols:[1,2,3,4,5,6,7,8,9],activeCells,regions,houses};
 const f=file('allowed-digits r2c2 digits [1,2]',board), compiled=compileCase(f);
 expect(compiled.diagnostics).toEqual([]);expect(compiled.value!.board.activeCells).toHaveLength(81);
 expect(compiled.value!.board.houses).toHaveLength(2);
 const housesOnly=compileCase(file('allowed-digits r2c2 digits [1,2]',{...board,regions:[]}));
 expect(housesOnly.diagnostics).toEqual([]);
 expect(housesOnly.value!.board.regions).toEqual([]);
 expect(housesOnly.value!.board.houses).toHaveLength(2);
 const digits=Object.fromEntries(activeCells.map((c,i)=>[c,i%9+1]));
 digits.r2c2=1;digits.r2c3=2;digits.r3c3=3;
 expect(checkAnswer(compiled.value!,{digits}).holds).toBe(true);
 digits.r3c3=2;
 expect(checkAnswer(compiled.value!,{digits}).broken.some(b=>b.rule.name==='houses')).toBe(true);
 const context:BoardContext={rows:11,cols:11,alphabet:board.symbols,activeCells,regions,houses:houses.map(cells=>({cells:cells as Cell[]}))};
 expect(normalise(f,context).status).toBe('complete');
 for(const rules of ['allowed-digits r1c1 digits [1]','thermo r2c2-r1c1']) expect(compileCase(file(rules,board)).value).toBeUndefined();
 for(const extra of [{givens:[{cell:'r1c1',digit:1}]},{houses:[['r1c1']]},{regions:[['r2c2']]},{regions:[regions[0],...regions]},{activeCells:['r2c2','r2c2']},{activeCells:[]},{activeCells:['r12c2']}]) expect(compileCase(file('allowed-digits r2c2 digits [1,2]',{...board,...extra})).value).toBeUndefined();
 const grid=Array.from({length:121},(_,i)=>i===12?'1':'.').join('');
 const given=compileCase(file('allowed-digits r2c2 digits [1,2]',{...board,givens:grid}));
 expect(given.value!.board.givens).toEqual([{cell:'r2c2',digit:1}]);
});

test('closed region sums join the wrap visit at any cyclic start with matching evaluator verdicts',()=>{
 const board={rows:2,cols:3,symbols:[1,2,3,4],regions:[['r1c1','r1c2','r2c1','r2c2'],['r1c3','r2c3']]};
 const path=['r1c2','r1c3','r2c3','r2c2','r2c1','r1c1'];
 const segments=[['r1c3','r2c3'],['r2c2','r2c1','r1c1','r1c2']];
 const context:BoardContext={rows:2,cols:3,alphabet:board.symbols,regions:board.regions as Cell[][],activeCells:path as Cell[]};
 const digits={r1c1:1,r1c2:1,r1c3:2,r2c3:2,r2c2:1,r2c1:1};
 for(let cut=0;cut<path.length;cut++) for(const groups of [segments,[segments[1],segments[0]]]) {
  const line=[...path.slice(cut),...path.slice(0,cut)].join('-');
  const rules=`region-sum ${line} segments ${JSON.stringify(groups)} loop true`;
  const f=file(rules,board), compiled=compileCase(f);
  expect(compiled.value).toBeDefined();
  const r=compiled.value!.rules[0];
  expect(r.finite).toBeDefined();
  const n=normalise(f,context);expect(n.status).toBe('complete');
  for(const rule of [r,{...r,finite:undefined}]) {
   expect(evaluate(rule,{digits}).status).toBe('holds');
   expect(evaluate(rule,{digits:{...digits,r1c1:2}}).status).toBe('broken');
   expect(evaluate(rule,{digits,values:{...digits,r1c1:2}}).status).toBe('broken');
  }
 }
 const split=[['r1c2'],['r1c3','r2c3'],['r2c2','r2c1','r1c1']];
 for(const groups of [split,[['r1c3','r2c3'],['r1c2','r2c2','r2c1','r1c1']]]) {
  const f=file(`region-sum ${path.join('-')} segments ${JSON.stringify(groups)} loop true`,board);
  expect(normalise(f,context).status).toBe('invalid');
  expect(evaluate(compileCase(f).value!.rules[0],{digits}).status).toBe('broken');
 }
 // An open return remains two visits; repeated positions remain occurrences.
 const open=file('region-sum r1c1-r1c3-r1c1 segments [["r1c1"],["r1c3"],["r1c1"]] combine true',board);
 expect(evaluate(compileCase(open).value!.rules[0],{digits:{r1c1:1,r1c3:2}}).status).toBe('holds');
 const inside=file('region-sum r1c2-r2c2-r1c1 segments [["r1c1","r1c2","r2c2"]] loop true',board);
 expect(normalise(inside,context).status).toBe('complete');
 expect(evaluate(compileCase(inside).value!.rules[0],{digits}).status).toBe('holds');
});
