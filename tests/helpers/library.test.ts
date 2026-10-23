import { expect, test } from 'bun:test';
import { mkdtemp, rm, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { compilePublicLibrary, compilePrelude, formulaInventory, overlapPairs, publicPages, readPages } from './library';

const prelude = publicPages.find(p => p.file === 'rules/predicates.md')!;
const endpoint = publicPages.find(p => p.file === 'rules/endpoint-range.md')!;
const pages = [prelude, endpoint];

test('shared compilation reuses identical sources and checks edited copies and their filenames', () => {
  const compiled = compilePublicLibrary(pages);
  expect(compiled.diagnostics).toEqual([]);
  expect(compilePublicLibrary(pages.map(p => ({ ...p })))).toBe(compiled);
  expect(compiled.value!.prelude).toBe(compilePrelude(prelude).value);
  const edited = { ...endpoint, text: endpoint.text.replace('|ends|=2', '|missingEnds|=2') };
  expect(edited.text).not.toBe(endpoint.text);
  const invalid = compilePublicLibrary([prelude, edited]);
  expect(invalid.value).toBeUndefined();
  expect(invalid.diagnostics.some(d => d.code === 'E_NAME_UNDEFINED')).toBe(true);
  const renamed = { ...edited, file: 'copied/endpoint.md' };
  const relocated = compilePublicLibrary([prelude, renamed]);
  expect(relocated.diagnostics.some(d => d.span.file === renamed.file)).toBe(true);
  expect(compilePublicLibrary(pages)).toBe(compiled);
  const changedPrelude = { ...prelude, text: prelude.text.replace('primitive face(', 'primitive renamedFace(') };
  expect(changedPrelude.text).not.toBe(prelude.text);
  expect(compilePrelude(changedPrelude).value).toBeUndefined();
  expect(compilePrelude(prelude).value).toBe(compiled.value!.prelude);
});

test('shared inventories distinguish edited sources, depth and predicate inclusion', () => {
  const rows = formulaInventory(pages);
  expect(formulaInventory(pages.map(p => ({ ...p })))).toBe(rows);
  expect(formulaInventory(pages, 2)).not.toBe(rows);
  expect(formulaInventory(pages, 3, undefined, true)).not.toBe(rows);
  const edited = { ...endpoint, text: endpoint.text.replace('|ends|=2', '|ends|=3') };
  const changed = formulaInventory([prelude, edited]);
  expect(changed[0].normal).not.toBe(rows[0].normal);
  expect(overlapPairs(rows)).toBe(overlapPairs(rows));
  expect(overlapPairs(rows, 0)).not.toBe(overlapPairs(rows));
});

test('shared page reads refresh changed files and directory membership', async () => {
  const folder = await mkdtemp(join(tmpdir(), 'open-rules-pages-'));
  try {
    await writeFile(join(folder, 'one.md'), 'one');
    const first = await readPages(folder);
    expect((await readPages(folder))[0]).toBe(first[0]);
    await writeFile(join(folder, 'one.md'), 'two');
    expect((await readPages(folder))[0].text).toBe('two');
    await writeFile(join(folder, 'second.md'), 'second');
    expect(await readPages(folder)).toHaveLength(2);
    await rm(join(folder, 'one.md'));
    expect((await readPages(folder)).map(p => p.text)).toEqual(['second']);
  } finally { await rm(folder, { recursive: true, force: true }); }
});
