import { expect, test } from 'bun:test';
import { checkCaseReferences, normalise, compare, parseDeclaration, printDeclaration, type BoardContext } from '../../src';
import { declarationLibrary } from '../../src/declaration-library';
import { parameterGrammar } from '../../src/case-values';
import { caseExamples } from '../../scripts/lint-skill';

const file = (rules: string, board = '') => ({file:'liars.rules.md', text:`---
format: open-rules
title: Liar cells
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
${board}---

\`\`\`rules
${rules}
\`\`\`
`});
const cells = Array.from({length:81}, (_,i)=>`r${Math.floor(i/9)+1}c${i%9+1}` as const);
const board: BoardContext = {rows:9, cols:9, alphabet:[1,2,3,4,5,6,7,8,9], activeCells:cells};
const check = (rules: string) => checkCaseReferences(file(`sudoku 9x9\n${rules}`), declarationLibrary);

test('liar-cells uses named contracts and stable canonical declarations', () => {
  const grammar = parameterGrammar(declarationLibrary.parameters!.get('https://rules.sudoku-sleuth.com/liar-cells.md'));
  const line = 'liars: liar-cells groups [["r1c1","r1c2"]] count 1 values [1,2,3] distinctDigits true distinctValues false element "liars"';
  const parsed = parseDeclaration({file:'line',text:line},grammar);
  expect(parsed.diagnostics).toEqual([]);
  expect(printDeclaration(parsed.value!)).toBe(line);
  expect(check(line).diagnostics).toEqual([]);
  expect(check('liar-cells').diagnostics).toEqual([]);
  for (const bad of ['liar-cells r1c1','liar-cells groups [["r10c1"]]', 'liar-cells count 0.5', 'liar-cells values ["one"]', 'liar-cells distinctValues 1', 'liar-cells distinctDigits null']) {
    expect(check(bad).diagnostics.map(d=>d.code)).toEqual(['E_CASE_PARAMETERS']);
  }
  const other = 'board:\n  rows: 2\n  cols: 2\n  symbols: [1,2]\n';
  for (const declaration of ['liar-cells', 'liar-cells groups [["r1c1"]]']) {
    const result = checkCaseReferences(file(declaration,other),declarationLibrary);
    expect(result.diagnostics.map(d=>d.code)).toEqual(['E_CASE_PARAMETERS']);
  }
  expect(checkCaseReferences(file('liar-cells groups [["r1c1"]] values [1,2]',other),declarationLibrary).diagnostics).toEqual([]);
});

test('liar bindings keep every V reader uncovered, including under negation', () => {
  const clues = 'whispers r1c1-r1c2 gap 5\nkropki r2c4-r2c5 black\npair r3c7-r3c8 sum 10\nregion-sum r1c1-r1c2-r1c3-r1c4 segments [["r1c1","r1c2","r1c3"],["r1c4"]]';
  for (const modifier of ['liar-cells','not liar-cells']) {
    const result = normalise(file(`sudoku 9x9\n${modifier}\n${clues}`),board);
    expect(result.issues).toEqual([]);
    expect(result.status).toBe('partial');
    const coverage = result.normalForm!.coverage;
    expect(coverage.find(c=>c.kind==='sudoku')!.status).toBe('lowered');
    for (const kind of ['liar-cells','whispers','kropki','pair','region-sum']) {
      expect(coverage.find(c=>c.kind===kind)!.status).toBe('unsupported');
    }
    expect(result.normalForm!.rewrites.some(r=>r.rule==='value-channel')).toBe(false);
    expect(compare(result,result).status).toBe('unresolved');
  }
  expect(normalise(file(`sudoku 9x9\n${clues}`),board).status).toBe('complete');
});

test('published full worked case has a valid digit grid and a shared satisfying value assignment', async () => {
  const page = await Bun.file('rules/liar-cells.md').text();
  const examples = caseExamples(page);
  expect(examples).toHaveLength(1);
  const fixture = {file:'tests/fixtures/liar-cells.rules.md',text:await Bun.file('tests/fixtures/liar-cells.rules.md').text()};
  expect(fixture.text.split('\n\n## Worked answer')[0]).toBe(examples[0].trimEnd());
  expect(checkCaseReferences(fixture,declarationLibrary).diagnostics).toEqual([]);
  expect(checkCaseReferences({file:'worked.rules.md',text:examples[0]},declarationLibrary).diagnostics).toEqual([]);
  // Read the actual published grid and table so the witness cannot drift from the page.
  const grid = page.match(/```\n([1-9\n]+)\n```/)![1].split('\n').map(row=>[...row].map(Number));
  expect(grid).toHaveLength(9);
  const liars = [...page.matchAll(/^\| r(\d)c(\d) \| (\d) \| (\d) \|$/gm)].map(m=>({r:Number(m[1])-1,c:Number(m[2])-1,d:Number(m[3]),v:Number(m[4])}));
  expect(liars).toHaveLength(9);
  const houses = [
    ...grid.map((_,r)=>grid[r]),
    ...grid.map((_,c)=>grid.map(row=>row[c])),
    ...grid.map((_,i)=>Array.from({length:9},(_,j)=>grid[Math.floor(i/3)*3+Math.floor(j/3)][i%3*3+j%3])),
  ];
  for (const house of houses) expect([...house].sort().join('')).toBe('123456789');
  expect(liars.map(l=>l.d).sort().join('')).toBe('123456789');
  expect(liars.map(l=>l.v).sort().join('')).toBe('123456789');
  for (const l of liars) { expect(grid[l.r][l.c]).toBe(l.d); expect(l.v).not.toBe(l.d); }
  for (let i=0;i<9;i++) {
    expect(liars.filter(l=>l.r===i)).toHaveLength(1);
    expect(liars.filter(l=>l.c===i)).toHaveLength(1);
    expect(liars.filter(l=>Math.floor(l.r/3)*3+Math.floor(l.c/3)===i)).toHaveLength(1);
  }
  const value = (r:number,c:number) => liars.find(l=>l.r===r-1 && l.c===c-1)?.v ?? grid[r-1][c-1];
  expect(Math.abs(value(1,1)-value(1,2))).toBe(5);
  expect(2*value(2,4)).toBe(value(2,5));
  expect(value(3,7)+value(3,8)).toBe(10);
  expect(value(2,1)+value(2,2)+value(2,3)).toBe(value(2,4)+value(2,5)+value(3,5)+value(3,4));
  expect(Math.abs(grid[0][0]-grid[0][1])).toBeLessThan(5);
  expect(2*grid[1][3]).not.toBe(grid[1][4]);
  expect(2*grid[1][4]).not.toBe(grid[1][3]);
  expect(grid[2][6]+grid[2][7]).not.toBe(10);
});

test('liar-cell combinations share V; not is accepted and conditions require primary cells', () => {
  const modifier='value-modifier factor 2 offset 0 exactly [["r1c1"]] count 1 atMostOne [["r1c1"]] distinct false';
  expect(check(`liar-cells\n${modifier}`).diagnostics).toEqual([]);
  const result=normalise(file(`sudoku 9x9\nliar-cells\n${modifier}\nwhispers r1c1-r1c2 gap 5`),board);
  expect(result.status).toBe('partial');
  expect(result.normalForm!.coverage.filter(c=>['liar-cells','value-modifier','whispers'].includes(c.kind)).every(c=>c.status==='unsupported')).toBe(true);
  for(const prefix of ['', 'not '])for(const condition of ['if distinct','unless uniform']) {
    const result=check(`${prefix}liar-cells ${condition}`);
    expect(result.diagnostics.map(d=>d.code)).toEqual(['E_CASE_PARAMETERS']);
    expect(result.diagnostics[0].message).toContain('primary cell list');
    expect(normalise(file(`sudoku 9x9\n${prefix}liar-cells ${condition}`),board).status).toBe('invalid');
  }
});

test('actual liar formula treats oversized counts as unsatisfiable and preserves set semantics',async()=>{
  const {compilePrelude,compilePage}=await import('../../src/library');
  const {fragmentVerdict}=await import('../language/finite-fragment');
  const prelude=compilePrelude({file:'predicates.md',text:await Bun.file('rules/predicates.md').text()}).value!;
  const page=compilePage({file:'liar-cells.md',text:await Bun.file('rules/liar-cells.md').text()},prelude).value!;
  const parameters={groups:[['r1c1']],count:2,values:[1,2],distinctDigits:false,distinctValues:false};
  expect(check('liar-cells groups [["r1c1"]] count 2 values [1,2] distinctDigits false distinctValues false').diagnostics).toEqual([]);
  for(const v of [1,2])expect(fragmentVerdict(page.formulas[0].ast,prelude,page.parameters,{faces:{r1c1:1},values:{r1c1:v},parameters})).toBe(false);
  // A liar outside the counted groups still participates in both distinctness flags.
  const fragment={faces:{r1c1:1,r1c2:1},values:{r1c1:2,r1c2:2},parameters:{...parameters,count:1,values:[1,2,2],groups:[['r1c1','r1c1'],['r1c1']]}};
  expect(fragmentVerdict(page.formulas[0].ast,prelude,page.parameters,fragment)).toBe(true);
  for(const flag of ['distinctDigits','distinctValues'])expect(fragmentVerdict(page.formulas[0].ast,prelude,page.parameters,{...fragment,parameters:{...fragment.parameters,[flag]:true}})).toBe(false);
  // An affine modifier and a liar assignment constrain the same values.
  const modifier=compilePage({file:'value-modifier.md',text:await Bun.file('rules/value-modifier.md').text()},prelude).value!;
  const affine={factor:2,offset:0,exactly:[['r1c1']],count:1,atMostOne:[],distinct:false};
  const faces={r1c1:1};
  for(const v of [2,3]) {
    const values={r1c1:v};
    expect(fragmentVerdict(page.formulas[0].ast,prelude,page.parameters,{faces,values,parameters:{...parameters,count:1,values:[2,3]}})).toBe(true);
    expect(fragmentVerdict(modifier.formulas[0].ast,prelude,modifier.parameters,{faces,values,parameters:affine})).toBe(v===2);
  }
});
