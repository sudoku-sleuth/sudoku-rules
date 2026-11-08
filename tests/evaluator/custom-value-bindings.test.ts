import {beforeAll, expect, test} from 'bun:test';
import {stringify} from 'yaml';
import {compileCase, evaluate, checkAnswer, type CompiledRule} from '../../src';

const header = {format: 'open-rules', title: 'Synthetic board', setter: 'Example', source: '', case: '', library: 'https://rules.sudoku-sleuth.com/', status: 'read', board: {rows: 1, cols: 3, symbols: [1, 2, 3, 4], regions: [['r1c1', 'r1c2', 'r1c3']]}};
const custom = (maths: string, logicClass: string) => '```custom-rules\n' + stringify([{id: 'probe', name: 'Probe', class: logicClass, parameters: {}, definition: 'A synthetic probe rule.', maths, example: 'Fives break it.'}]) + '```\n';
const file = (rules: string, definition = '') => ({file: 'synthetic.rules.md', text: `---\n${stringify(header)}---\n${definition}\`\`\`rules\n${rules}\n\`\`\``});
// One liar among the three cells; every other value equals its digit.
const liar = '∃M:set<cell>: M⊆C ∧ |M|=1 ∧ (∀c∈C: (c∈M → V(c)!=D(c)) ∧ (c∉M → V(c)=D(c))) ∧ (∀meaning∈ValuedRuleMeanings: meaning)';
const plain = '∀c∈C: D(c)>=1';
const reading = 'cage r1c2-r1c3 total 7 repeats false';
const rulesOf = (f: ReturnType<typeof file>): CompiledRule[] => {const r = compileCase(f); expect(r.diagnostics.filter(d => !d.code.startsWith('W_'))).toEqual([]); return r.value!.rules;};
const cage = (rules: CompiledRule[]) => rules.find(r => r.name === 'cage')!;
const digits = {r1c1: 1, r1c2: 2, r1c3: 3};
// The first compile pays a one-time setup cost; keep it out of the individual tests.
beforeAll(() => {compileCase(file('cage r1c2-r1c3 total 7 repeats false'));});

test('a custom definition that binds the shared values makes value-reading rules need them', () => {
  const rules = rulesOf(file(`#probe\n${reading}`, custom(liar, 'existential')));
  expect(cage(rules).valueBindings).toBe(true);
  const library = cage(rulesOf(file(`liar-cells groups [[r1c1,r1c2,r1c3]] values [1,2,3,4]\n${reading}`)));
  // Face digits alone would make the cage total five, which is broken; the rule needs the values instead.
  expect(evaluate(library, {digits}).status).toBe('undecided');
  expect(evaluate(cage(rules), {digits}).status).toBe('undecided');
});

test('it agrees with the library liar cells once values are supplied', () => {
  const mine = cage(rulesOf(file(`#probe\n${reading}`, custom(liar, 'existential'))));
  const library = cage(rulesOf(file(`liar-cells groups [[r1c1,r1c2,r1c3]] values [1,2,3,4]\n${reading}`)));
  for (const values of [{r1c1: 1, r1c2: 4, r1c3: 3}, {r1c1: 1, r1c2: 2, r1c3: 3}, {r1c1: 1, r1c2: 2, r1c3: 5}]) expect(evaluate(mine, {digits, values}).status).toBe(evaluate(library, {digits, values}).status);
  expect(evaluate(mine, {digits, values: {r1c1: 1, r1c2: 4, r1c3: 3}}).status).toBe('holds');
  expect(evaluate(mine, {digits, values: {r1c1: 1, r1c2: 2, r1c3: 3}}).status).toBe('broken');
});

test('a custom definition that does not touch values is unchanged', () => {
  const rules = rulesOf(file(`#probe\n${reading}`, custom(plain, 'first-order')));
  expect(cage(rules).valueBindings).toBe(false);
  expect(evaluate(cage(rules), {digits: {r1c1: 1, r1c2: 3, r1c3: 4}}).status).toBe('holds');
  expect(evaluate(cage(rules), {digits}).status).toBe('broken');
});

test('an answer check needs the values instead of reporting the rule broken', () => {
  const compiled = compileCase(file(`#probe\n${reading}`, custom(liar, 'existential'))).value!;
  const check = checkAnswer(compiled, {digits});
  expect(check.broken.some(b => b.rule.name === 'cage')).toBe(false);
  expect(checkAnswer(compiled, {digits, values: {r1c1: 1, r1c2: 4, r1c3: 3}}).broken.some(b => b.rule.name === 'cage')).toBe(false);
});

test('two custom binders in one case constrain the same values without evaluating each other', () => {
  const second = '∃M:set<cell>: M⊆C ∧ (∀c∈M: V(c)>=1) ∧ (∀meaning∈ValuedRuleMeanings: meaning)';
  const definitions = custom(liar, 'existential').replace('```\n', '') + stringify([{id: 'extra', name: 'Extra', class: 'existential', parameters: {}, definition: 'A second synthetic binder.', maths: second, example: 'Fives break it.'}]).replace(/^/, '') + '```\n';
  const mine = rulesOf(file(`#probe\n#extra\n${reading}`, definitions));
  const library = rulesOf(file(`liar-cells groups [[r1c1,r1c2,r1c3]] values [1,2,3,4]\n${reading}`));
  for (const values of [{r1c1: 1, r1c2: 4, r1c3: 3}, {r1c1: 1, r1c2: 2, r1c3: 3}]) {
    const got = evaluate(cage(mine), {digits, values}).status;
    expect(got).toBe(evaluate(cage(library), {digits, values}).status);
    // The binders themselves decide like the library declaration, not undecided at the evaluation limit.
    const expected = evaluate(library.find(r => r.name === 'liar-cells')!, {digits, values}).status;
    expect(expected).not.toBe('undecided');
    for (const rule of mine.filter(r => r.valueBindings && r.name !== 'cage')) expect(evaluate(rule, {digits, values}).status).toBe(expected);
  }
});
