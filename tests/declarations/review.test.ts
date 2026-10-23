import {compilePublicLibrary} from '../helpers/library';
import { readdir } from 'node:fs/promises';
import { caseExamples } from '../../scripts/lint-skill';
import { expect, test } from 'bun:test';
import { checkCaseReferences, normalise, parseDeclaration, printDeclaration } from '../../src';
import { declarationLibrary } from '../../src/declaration-library';
import { parameterGrammar } from '../../src/case-values';
import { readSemanticFile } from '../../src/semantics/reader';
import { caseBlocks } from '../../src/custom-definitions';
import baseline from './legacy-readings.json';


const source = (text: string) => ({file: 'review.rules.md', text});
const file = (rules: string) => source(`---\nformat: open-rules\ntitle: Example\nsetter: Example\nsource: ""\ncase: ""\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n---\n\n\`\`\`rules\n${rules}\n\`\`\`\n`);
const check = (rules: string) => checkCaseReferences(file(rules), declarationLibrary);
const context = {rows: 9, cols: 9, alphabet: [1,2,3,4,5,6,7,8,9], activeCells: Array.from({length:81}, (_,i) => `r${Math.floor(i/9)+1}c${i%9+1}` as const)};
const grammar = (kind: string) => {
 const url = kind.startsWith('http') ? kind : `https://rules.sudoku-sleuth.com/${kind}.md`;
 const contract = declarationLibrary.parameters?.get(url);
 return {...parameterGrammar(contract), line: declarationLibrary.lines?.get(url), opaque: !contract};
};
// Text locations and authored notation belong to the input, rather than its meaning.
function meaning(value: unknown): unknown {
 if (Array.isArray(value)) return value.map(meaning);
 if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value)
  .filter(([key, child])=>!['span','raw','notation'].includes(key) && child !== undefined)
  .map(([key,child])=>[key,meaning(child)]));
 return value;
}
function roundtrip(text: string, selected = grammar('example')) {
 const first = parseDeclaration(source(text), selected);
 expect(first.diagnostics).toEqual([]);
 if (!first.value) return;
 const written = printDeclaration(first.value, selected);
 const second = parseDeclaration(source(written), selected);
 expect(second.diagnostics).toEqual([]);
 expect(meaning(second.value)).toEqual(meaning(first.value));
 expect(printDeclaration(second.value!, selected)).toBe(written);
}

test('1: unsupported semantics still checks the same parameter contracts', () => {
 const rules = 'sudoku 9x9\nwhispers r1c1-r1c2 gap "oops"';
 const checked = check(rules), read = readSemanticFile(file(rules));
 expect(checked.diagnostics[0].message).toBe('gap must be a finite number.');
 expect(read.issues).toEqual(checked.diagnostics);
 expect(normalise(file(rules), context).status).toBe('invalid');
});
test('2: keyword forms include every additional declared parameter', async () => {
 const prelude = {file:'predicates.md', text:await Bun.file('rules/predicates.md').text()};
 const baseline=await Bun.file('tests/fixtures/library-6d9e954.json').json();
 const pair = {file:'pair.md', text:(baseline.pages.find((p:{file:string})=>p.file==='rules/pair.md').text).replace('parameters:\n','parameters:\n  extra:\n    description: An extra value.\n    default: Required.\n    type: number\n')};
 const compiled = compilePublicLibrary([prelude, pair]);
 expect(compiled.diagnostics).toEqual([]);
 const run = (tail: string) => checkCaseReferences(file(`sudoku 9x9\npair r1c1-r1c2 sum 3${tail}`), {...compiled.value!.registry, kinds:declarationLibrary.kinds, urls:declarationLibrary.urls});
 expect(run('').diagnostics.map(d=>d.message)).toContain('State extra explicitly for this rule.');
 expect(run(' extra 1').diagnostics).toEqual([]);
 expect(run(' extra "oops"').diagnostics[0].message).toBe('extra must be a finite number.');
 expect(run(' extra 1 unknown 2').diagnostics[0].message).toContain('Unknown parameter unknown');
});
test('3: named dimensions infer and lower the same board as shorthand', () => {
 const named = 'sudoku board {"rows":9,"cols":9}';
 expect(check(named).diagnostics).toEqual([]);
 const a = normalise(file(named),context), b = normalise(file('sudoku 9x9'),context);
 expect(a.status).toBe('complete');
 expect(a.normalForm!.solution).toEqual(b.normalForm!.solution);
 expect(a.normalForm!.board).toEqual(b.normalForm!.board);
});
test('4: canonical parameter names keep reserved words quoted', () => {
 for (const name of ['if','unless']) roundtrip(`example "${name}" true`, {});
});
test('5: instance identity uses decoded names, including escapes', () => {
 for (const name of ['"a"','"\\u0061"']) {
  const read = readSemanticFile(file(`sudoku 9x9\na: unique r1c1-r1c2\n${name}: unique r1c2-r1c3`));
  expect(read.issues.some(d=>d.message.includes('instance ID a'))).toBe(true);
 }
 expect(readSemanticFile(file('sudoku 9x9\n"\\u0061": unique r1c1-r1c2')).instances[1].source.instance).toBe('a');
 expect(readSemanticFile(file('sudoku 9x9\na: unique r1c1-r1c2\n"\\u0061": unique cells ["r1c1","r1c2"]')).issues).toEqual([]);
 expect(readSemanticFile(file('sudoku 9x9\n"": unique r1c1-r1c2\n"": unique r1c2-r1c3')).issues[0].message).toContain('instance ID');
});
test('6: quoted and container tokens require separating whitespace', () => {
 for (const text of ['kropki r1c1-r1c2 colour "white"if distinct','example data [1]other 2','example data {"x":1}other 2','"a":unique r1c1-r1c2']) {
  expect(parseDeclaration(source(text),grammar(text.split(' ')[0])).diagnostics.length).toBeGreaterThan(0);
 }
 expect(check('sudoku 9x9\nkropki r1c1-r1c2 colour "white"if distinct').value).toBeUndefined();
});
test('7: numeric overflow is rejected at every JSON depth and in dimensions', () => {
 for (const text of ['example data 1e400','example data [1e400]','example data {"n":-1e400}']) {
  const parsed = parseDeclaration(source(text));
  expect(parsed.value).toBeUndefined();
  const d = parsed.diagnostics[0];
  expect(text.slice(d.span.start.offset,d.span.end.offset)).toMatch(/^-?1e400$/);
 }
 expect(parseDeclaration(source(`sudoku ${'9'.repeat(400)}x9`),grammar('sudoku')).value).toBeUndefined();
});
test('8: unquoted instance IDs follow identifier syntax; other names are quoted', () => {
 expect(check('sudoku 9x9\nbad!: unique r1c1-r1c2').value).toBeUndefined();
 for (const id of ['bad!','123','_a','if','r1c1','9x9']) expect(parseDeclaration(source(`${id}: unique r1c1-r1c2`)).value).toBeUndefined();
 for (const id of ['a','Éclair_2','bad!','a-b','']) roundtrip(`${JSON.stringify(id)}: unique r1c1-r1c2`,grammar('unique'));
});
test('9: parameter diagnostics point at the offending value', () => {
 const input = file('sudoku 9x9\nwhispers r1c1-r1c2 gap "oops"');
 const d = checkCaseReferences(input,declarationLibrary).diagnostics[0];
 expect(input.text.slice(d.span.start.offset,d.span.end.offset)).toBe('"oops"');
 for (const [line,value] of [['look-and-say r1c1 counts [{"digit":1,"count":"2"}]','"2"'], ['unique r1c1-r10c1','r10c1']]) {
  const nested = file(`sudoku 9x9\n${line}`), diagnostic = checkCaseReferences(nested,declarationLibrary).diagnostics[0];
  expect(nested.text.slice(diagnostic.span.start.offset,diagnostic.span.end.offset)).toBe(value);
 }
});
test('canonical parse/write/parse property covers every fixture declaration', async () => {
 const current = await Promise.all(['tests','rules','plugins'].map(async root => {
  const paths = (await readdir(root,{recursive:true})).filter(path=>path.endsWith('.md'));
  return Promise.all(paths.map(async path=>({file:`${root}/${path}`,text:await Bun.file(`${root}/${path}`).text()})));
 }));
 const files = current.flat();
 const examples = files.flatMap(entry=>caseExamples(entry.text).map((text,i)=>({file:`${entry.file}#example-${i}`,text})));
 for (const entry of [...baseline,...files,...examples]) {
  for (const block of caseBlocks(entry).filter(b=>b.language === 'rules')) {
   for (const text of block.text.split(/\r?\n/)) {
    const parsed = parseDeclaration(source(text),grammar);
    if (parsed.value) roundtrip(text,grammar(parsed.value.kind.value));
   }
  }
 }
});
test('canonical parse/write/parse property covers generated declarations', () => {
 let seed = 12345;
 const next = () => (seed = (Math.imul(seed,1664525)+1013904223)>>>0);
 for (const text of ['example data -0', 'example data [-0,{"n":-0}]']) roundtrip(text,{});
 for (const text of ['sudoku board {"cols":9,"rows":9}', 'sudoku board {"rows":1,"rows":9,"cols":9}', 'sudoku 1000000000000000000000x9', `sudoku ${'9'.repeat(300)}x9`]) roundtrip(text,grammar('sudoku'));
 for (let i=0;i<500;i++) {
  const name = ['if','unless','data','🕵','not'][next()%5];
  const value = [true,false,null,next(),[next(), 'if'],{nested:{text:'unless # "', n:next()}}][next()%6];
  const text = `${JSON.stringify(['a','a-b','🕵',''][next()%4])}: ${'not '.repeat(next()%3)}example ${JSON.stringify(name)} ${JSON.stringify(value)}${next()%2 ? ' if distinct' : ''}`;
  roundtrip(text,{});
  roundtrip(`pair r1c1,r2c2 sum -${next()} if distinct`,grammar('pair'));
  roundtrip(`sudoku ${next()}x${next()}`,grammar('sudoku'));
  roundtrip(`kropki r1c1-r1c2 colour "${next()%2 ? 'white' : 'black'}"`,grammar('kropki'));
 }
});
