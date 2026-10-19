import { expect, test } from 'bun:test';
import { checkCaseReferences, normalise, compare, parseDeclaration, printDeclaration, type BoardContext } from '../../src';
import { declarationLibrary } from '../../src/declaration-library';
import { parameterGrammar } from '../../src/case-values';
import { main } from '../../src/cli';
const file = (rules: string, header = '') => ({file: 'decoration.rules.md', text: `---
format: open-rules
title: Decorative marks
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
${header}---

\`\`\`rules
${rules}
\`\`\`
`});
const check = (rules: string) => checkCaseReferences(file(`sudoku 9x9\n${rules}`), declarationLibrary);
const board: BoardContext = {rows: 2, cols: 2, alphabet: [1,2], activeCells: ['r1c1','r1c2','r2c1','r2c2']};
const nf = (rules: string, header = '') => normalise(file(rules, header), board);

test('decoration uses page grammar and canonical JSON text', () => {
  const grammar = parameterGrammar(declarationLibrary.parameters!.get('https://rules.sudoku-sleuth.com/decoration.md'));
  const parsed = parseDeclaration({file:'line', text:'ribbon: decoration r1c1,r2c2 note "Ignore # the ribbon" element "grey"'}, grammar);
  expect(parsed.diagnostics).toEqual([]);
  const written = printDeclaration(parsed.value!);
  expect(written).toBe('ribbon: decoration r1c1-r2c2 note "Ignore # the ribbon" element "grey"');
  expect(printDeclaration(parseDeclaration({file:'line',text:written},grammar).value!)).toBe(written);
  expect(check('decoration cells ["r1c1","r2c2"] note "Ribbon"').diagnostics).toEqual([]);
});

test('decoration validates cells, text and unmodified declarations', () => {
  for (const line of ['decoration', 'decoration cells []', 'decoration r10c1', 'decoration r1c1 note 4', 'decoration r1c1 element false', 'not decoration r1c1', 'decoration r1c1 if distinct']) {
    expect(check(line).diagnostics.map(d=>d.code)).toEqual(['E_CASE_PARAMETERS']);
  }
});

test('decorations are true, retained as metadata and ignored by comparison and global negation', () => {
  const decorated = nf('decoration r1c1-r2c2 note "Ribbon" element "grey"');
  expect(decorated.status).toBe('complete');
  expect(decorated.normalForm!.solution).toEqual({op:'All',children:[]});
  expect(decorated.normalForm!.decorations).toEqual([{cells:['r1c1','r2c2'],note:'Ribbon',element:'grey',source:expect.objectContaining({kind:'decoration'})}]);
  expect(compare(decorated, nf('')).status).toBe('equivalent');
  expect(compare(decorated, nf('decoration r1c2', 'negate: all\n')).status).toBe('equivalent');
  expect(compare(nf('unique r1c1-r1c2 element "line"'),nf('unique r1c1-r1c2')).status).toBe('equivalent');
  expect(compare(nf('unique r1c1-r1c2\ndecoration r1c1 note "Ribbon"'), nf('unique r1c1-r1c2')).status).toBe('equivalent');
});

test('overlap warning requires explicit drawing identity and cell overlap', () => {
  const result = check('decoration r1c1-r1c2 element "grey"\nthermo r1c1-r2c1 element "grey"');
  expect(result.value).toBeDefined();
  expect(result.diagnostics).toEqual([expect.objectContaining({code:'W_DECORATION_OVERLAP',check:'W_DECORATION_OVERLAP',span:result.value!.declarations[1].span,detail:'Constraining declaration at decoration.rules.md:14:1.'})]);
  for (const other of ['thermo r1c1-r2c1', 'thermo r1c1-r2c1 element "red"', 'thermo r2c1-r2c2 element "grey"'])
    expect(check(`decoration r1c1-r1c2 element "grey"\n${other}`).diagnostics).toEqual([]);
  expect(nf('decoration r1c1 element "grey"\nunique r1c1-r1c2 element "grey"').status).toBe('complete');
  const two = nf('a: decoration r1c1 element "a"\nb: decoration r1c1 element "b"');
  expect(two.normalForm!.decorations).toHaveLength(2);
});

test('raw overlap fixture has exact warning and separate-mark repair; CLI warning is nonfatal', async () => {
  const name = 'tests/decoration/overlap.rules.md';
  const result = checkCaseReferences({file:name,text:await Bun.file(name).text()},declarationLibrary);
  expect(result.diagnostics).toEqual(await Bun.file('tests/decoration/expected.json').json());
  const repair = 'tests/decoration/separate-marks.rules.md';
  expect(checkCaseReferences({file:repair,text:await Bun.file(repair).text()},declarationLibrary).diagnostics).toEqual([]);
  expect(await main(['lint',name,'--json'])).toBe(0);
});
