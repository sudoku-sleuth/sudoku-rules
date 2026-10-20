import {expect,test} from 'bun:test';
import {readdir} from 'node:fs/promises';
import {checkCaseReferences,compilePublicLibrary,normalise,compare,parseDeclaration,printDeclaration,type BoardContext} from '../../src';
import {declarationLibrary} from '../../src/declaration-library';
import {fragmentVerdict} from '../language/finite-fragment';
import {caseExamples} from '../../scripts/lint-skill';
const pages=await Promise.all((await readdir('rules')).filter(f=>f.endsWith('.md')).map(async f=>({file:`rules/${f}`,text:await Bun.file(`rules/${f}`).text()})));
const library=compilePublicLibrary(pages).value!;
const page=library.rules.get('clue-count')!;
const file=(rules:string)=>({file:'counts.rules.md',text:`---
format: open-rules
title: False clues
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

\`\`\`rules
sudoku 9x9
${rules}
\`\`\`
`});
const clue=(id:string,rule='kropki',args:Record<string,unknown>={cells:['r1c1','r1c2'],colour:'black'})=>({id,rule,args});
const line=(clues:unknown[],comparison='exactly',count=1)=>`clue-count clues ${JSON.stringify(clues)} comparison ${JSON.stringify(comparison)} count ${count}`;
const check=(text:string)=>checkCaseReferences(file(text),library.registry);
const board:BoardContext={rows:9,cols:9,alphabet:[1,2,3,4,5,6,7,8,9],activeCells:Array.from({length:81},(_,i)=>`r${Math.floor(i/9)+1}c${i%9+1}` as const)};

test('count declarations, round trips, published examples and sourced puzzles lint',async()=>{
  const text=line([clue('a'),clue('b')]);
  const ast=check(text).value!.declarations[1];
  expect(check(text).diagnostics).toEqual([]);
  expect(printDeclaration(ast)).toBe(text);
  expect(parseDeclaration({file:'roundtrip',text:printDeclaration(ast)}).diagnostics).toEqual([]);
  expect(checkCaseReferences(file(text),declarationLibrary).diagnostics).toEqual([]);
  for(const example of caseExamples(await Bun.file('rules/clue-count.md').text()))
    expect(checkCaseReferences({file:'example.rules.md',text:example},library.registry).diagnostics).toEqual([]);
  for(const slug of ['german-whisper-lies','region-sum-lies']) {
    const text=await Bun.file(`tests/fixtures/lying-clues/${slug}.rules.md`).text();
    expect(text).toContain('source: https://sudokupad.app/');
    expect(checkCaseReferences({file:`${slug}.rules.md`,text},library.registry).diagnostics).toEqual([]);
  }
});

test('owned contracts reject malformed clues, scopes, references, arguments and bounds',()=>{
  for(const bad of [line([]),line([clue('a'),clue('a')]),line([clue('')]),line([clue('a','missing')]),
    line([clue('a','https://example.com/unknown.md')]),line([clue('a','decoration',{cells:['r1c1']})]),
    line([clue('a','kropki',{cells:['r10c1','r1c1'],colour:'black'})]),
    line([clue('a','whispers',{line:['r1c1','r1c2']})]),line([clue('a','kropki',{cells:['r1c1'],colour:'black'})]),
    line([clue('a','pair',{cells:['r1c1','r1c2'],relation:{op:'sum',value:1.5}})]),
    line([clue('a','kropki',{cells:['r1c1','r1c2'],colour:'black',typo:true})]),
    line([clue('a')],'exactly',-1),line([clue('a')],'exactly',0.5),line([clue('a')],'maybe'),
    line([clue('a')])+' if distinct']) {
    const result=check(bad);
    expect(result.value).toBeUndefined();
    expect(result.diagnostics.every(d=>d.code==='E_CASE_PARAMETERS')).toBe(true);
    expect(result.diagnostics[0].span.start.line).toBe(13);
  }
  expect(check(line([clue('a')],'exactly',2)).diagnostics).toEqual([]);
  expect(check(line([clue('outer','clue-count',{clues:[clue('inner')],comparison:'at-most',count:1})])).diagnostics).toEqual([]);
  let nested=clue('leaf');
  for(let i=0;i<34;i++)nested=clue(`n${i}`,'clue-count',{clues:[nested],comparison:'exactly',count:0});
  expect(check(line([nested])).diagnostics.some(d=>d.message.includes('32 levels'))).toBe(true);
});

test('actual formula counts separately identified equal meanings, all modes, zero and impossible bounds',()=>{
  const dot=library.rules.get('kropki')!;
  const clues=[clue('a'),clue('b')];
  for(const second of [2,3])for(const comparison of ['exactly','at-most','at-least'])for(const count of [0,1,2,3]) {
    const faces={r1c1:1,r1c2:second};
    const falseCount=second===2?0:2;
    const verdict=fragmentVerdict(page.formulas[0].ast,library.prelude,page.parameters,{faces,
      parameters:{clues,comparison,count},clueTruth:q=>fragmentVerdict(dot.formulas[0].ast,library.prelude,dot.parameters,{faces,parameters:(q as ReturnType<typeof clue>).args})});
    expect(verdict).toBe(comparison==='exactly'?falseCount===count:comparison==='at-most'?falseCount<=count:falseCount>=count);
  }
});

test('segments, box and grid scopes are explicit; owned predicates are not asserted positively',()=>{
  const edge=clue('edge','whispers',{line:['r1c1','r1c2'],gap:5});
  const full=clue('line','whispers',{line:['r1c1','r1c2','r1c3'],gap:5});
  const scopes=`line-a: ${line([edge,clue('next','whispers',{line:['r1c2','r1c3'],gap:5})])}\nbox-a: ${line([full],'at-most')}\ngrid: ${line([clue('dot'),full],'at-least')}`;
  expect(check(scopes).diagnostics).toEqual([]);
  const result=normalise(file(line([edge])),board);
  expect(result.status).toBe('partial');
  expect(result.normalForm!.coverage.filter(c=>c.kind==='whispers')).toEqual([]);
  expect(compare(result,result).status).toBe('unresolved');
  expect(normalise(file('not '+line([edge])),board).status).toBe('partial');
});

test('case-local owned contracts are resolved and counted without an extra assertion',()=>{
  const source=file(line([clue('cell','#truthful',{cells:['r1c1']})]));
  source.text+='\n```custom-rules\n- id: truthful\n  name: Truthful cell\n  parameters:\n    cells:\n      type: set<cell>\n      description: Cells that must keep their written digits.\n      default: Required.\n  definition: The cells keep their digits as values.\n  maths: "∀c∈cells: V(c)=D(c)"\n  example: "Satisfies: D=V=1. Breaks: D=1,V=2."\n```\n';
  expect(checkCaseReferences(source,library.registry).diagnostics).toEqual([]);
});

test('a false whole line and false edges give different counts on the same shared values',()=>{
  const whisper=library.rules.get('whispers')!;
  const faces={r1c1:1,r1c2:2,r1c3:3};
  const values={r1c1:1,r1c2:2,r1c3:9};
  const clues=[clue('first','whispers',{line:['r1c1','r1c2'],gap:5,loop:false}),clue('second','whispers',{line:['r1c2','r1c3'],gap:5,loop:false})];
  const whole=[clue('whole','whispers',{line:['r1c1','r1c2','r1c3'],gap:5,loop:false})];
  const truth=(q:unknown)=>fragmentVerdict(whisper.formulas[0].ast,library.prelude,whisper.parameters,{faces,values,parameters:(q as ReturnType<typeof clue>).args});
  const verdict=(items:unknown[],count:number)=>fragmentVerdict(page.formulas[0].ast,library.prelude,page.parameters,{faces,values,parameters:{clues:items,comparison:'exactly',count},clueTruth:truth});
  expect(verdict(clues,1)).toBe(true);
  expect(verdict(whole,1)).toBe(true);
  // With face values both edges fail, while the whole line is still just one failed clue.
  const faceTruth=(q:unknown)=>fragmentVerdict(whisper.formulas[0].ast,library.prelude,whisper.parameters,{faces,parameters:(q as ReturnType<typeof clue>).args});
  expect(fragmentVerdict(page.formulas[0].ast,library.prelude,page.parameters,{faces,parameters:{clues,comparison:'exactly',count:2},clueTruth:faceTruth})).toBe(true);
  expect(fragmentVerdict(page.formulas[0].ast,library.prelude,page.parameters,{faces,parameters:{clues:whole,comparison:'exactly',count:2},clueTruth:faceTruth})).toBe(false);
});
