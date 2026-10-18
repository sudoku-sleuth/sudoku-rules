import { expect, test } from 'bun:test';
import { checkCaseReferences, parseDeclaration, printDeclaration } from '../../src';
import { declarationLibrary } from '../../src/declaration-library';

const source = (text: string) => ({ file: 'example.rules.md', text });
const tail = 'not unique r1c1-r1c2 unless distinct # example';

// Synthetic names cover the observed hyphen shape and the identifier boundaries.
for (const id of ['clue-12', '2nd-clue', '7-clue', 'group.a', 'Éclair-2', '線-2', 'E\u0301clair-2', 'clue_2', 'thermo']) {
 test(`readable instance ID: ${id}`, () => {
  const text = `${id}: ${tail}`;
  const parsed = parseDeclaration(source(text));
  expect(parsed.diagnostics).toEqual([]);
  expect(parsed.value!.instance!.value).toBe(id);
  expect(printDeclaration(parsed.value!)).toBe(text);
  const quoted = parseDeclaration(source(`${JSON.stringify(id)}: ${tail}`));
  expect(printDeclaration(quoted.value!)).toBe(text);
  expect(parseDeclaration(source(printDeclaration(parsed.value!))).value!.instance!.value).toBe(id);
  expect(parsed.value!.instance!.span.end.column).toBe([...id].length + 2);
 });
}

for (const id of ['not', 'if', 'unless', 'true', 'false', 'null', 'uniform', 'distinct', 'connected',
 'r1c1', 'r0c0', 'r1c1-r2c2', 'r1c1,r2c2', '9x9', '12', '1.5', '2e3', '2E-3', '-12', '.5',
 '_clue', '-clue', '.clue', 'clue!', 'clue:name', '#clue', 'clue/name', '🕵', 'two clues']) {
 test(`instance ID requires JSON quotes: ${id}`, () => {
  expect(parseDeclaration(source(`${id}: unique r1c1-r1c2`)).diagnostics.length).toBeGreaterThan(0);
  const text = `${JSON.stringify(id)}: ${tail}`;
  const parsed = parseDeclaration(source(text));
  expect(parsed.diagnostics).toEqual([]);
  expect(parsed.value!.instance!.value).toBe(id);
  expect(printDeclaration(parsed.value!)).toBe(text);
  expect(printDeclaration(parseDeclaration(source(printDeclaration(parsed.value!))).value!)).toBe(text);
 });
}

test('broader IDs work through case checking and canonical writing with page grammar', () => {
 const text = '---\nformat: open-rules\ntitle: Example\nsetter: Example\nsource: ""\ncase: ""\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n---\n\n```rules\nsudoku 9x9\nclue-1: unique r1c1-r1c2\n2nd-clue: unique r2c1-r2c2\ngroup.a: unique r3c1-r3c2\n線-2: unique r4c1-r4c2\n```\n';
 const checked = checkCaseReferences(source(text), declarationLibrary);
 expect(checked.diagnostics).toEqual([]);
 expect(checked.value!.declarations.slice(1).map(ast => ast.instance!.value)).toEqual(['clue-1', '2nd-clue', 'group.a', '線-2']);
});

test('board symbols remain numeric; symbolic alphabets need a separate language contract', () => {
 const file = (symbols: string) => source(`---\nformat: open-rules\ntitle: Example\nsetter: Example\nsource: ""\ncase: ""\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\nboard: {rows: 2, cols: 2, symbols: ${symbols}}\n---\n\n\`\`\`rules\nclue-1: unique r1c1-r1c2\n\`\`\`\n`);
 expect(checkCaseReferences(file('[1,"X"]'), declarationLibrary).diagnostics.map(d => d.code)).toEqual(['E_CASE_BOARD']);
 expect(checkCaseReferences(file('[1,2]'), declarationLibrary).diagnostics).toEqual([]);
});
