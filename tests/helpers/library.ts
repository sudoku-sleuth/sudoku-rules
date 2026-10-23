import { readdir, readFile, stat } from 'node:fs/promises';
import { join } from 'node:path';
import { compilePublicLibrary as compile, readHeader, type PageSource, compilePrelude as prelude } from '../../src';
import { formulaInventory as inventory, overlapPairs as pairs } from '../../src/formula-similarity';

// Share checked fixtures for this process. Source text and filenames are part of
// every compilation key: edited copies and diagnostic spans stay independent.
const sourceKey = (pages: PageSource[]) => JSON.stringify(pages.map(p => [p.file, p.text]));
export const libraryProfile: Record<string, { calls: number; misses: number; ms: number }> = {};
function record(name: string, miss: boolean, start: number) {
  const row = libraryProfile[name] ??= { calls: 0, misses: 0, ms: 0 };
  row.calls++; row.misses += Number(miss); row.ms += performance.now() - start;
}
const libraries = new Map<string, ReturnType<typeof compile>>();
const preludes = new Map<string, ReturnType<typeof prelude>>();
const headers = new Map<string, ReturnType<typeof readHeader>>();
const files = new Map<string, { stamp: string; page: PageSource }>();
export async function readPages(folder = 'rules'): Promise<PageSource[]> {
  return Promise.all((await readdir(folder)).filter(n => n.endsWith('.md')).sort().map(async name => {
    const file = join(folder, name), info = await stat(file, { bigint: true });
    const stamp = `${info.ino}:${info.size}:${info.mtimeNs}:${info.ctimeNs}`;
    const cached = files.get(file);
    if (cached?.stamp === stamp) return cached.page;
    const start = performance.now();
    const page = { file, text: await readFile(file, 'utf8') };
    record('page reads', true, start);
    files.set(file, { stamp, page });
    return page;
  }));
}
export const publicPages = await readPages();
export function compilePublicLibrary(pages: PageSource[]) {
  const start = performance.now();
  const key = sourceKey(pages);
  let result = libraries.get(key);
  const miss = !result;
  if (!result) { result = compile(pages, compilePrelude); libraries.set(key, result); }
  record('compilePublicLibrary', miss, start);
  return result;
}
export function compilePrelude(page: PageSource) {
  const start = performance.now();
  const key = sourceKey([page]);
  let result = preludes.get(key);
  const miss = !result;
  if (!result) { result = prelude(page); preludes.set(key, result); }
  record('compilePrelude', miss, start);
  return result;
}
export function pageHeader(page: PageSource) {
  const start = performance.now();
  const key = sourceKey([page]);
  let result = headers.get(key);
  const miss = !result;
  if (!result) { result = readHeader(page); headers.set(key, result); }
  record('pageHeader', miss, start);
  return result;
}
const inventories = new Map<string, ReturnType<typeof inventory>>();
const compiledIds = new WeakMap<object, number>();
let nextCompiledId = 0;
export function formulaInventory(...args: Parameters<typeof inventory>) {
  const start = performance.now();
  const [pages, depth = 3, compiled, includePredicates = false] = args;
  if (compiled && !compiledIds.has(compiled)) compiledIds.set(compiled, nextCompiledId++);
  const key = JSON.stringify([sourceKey(pages), depth, includePredicates, compiled ? compiledIds.get(compiled) : null]);
  let result = inventories.get(key);
  const miss = !result;
  if (!result) { result = inventory(...args); inventories.set(key, result); }
  record('formulaInventory', miss, start);
  return result;
}
const comparisons = new WeakMap<ReturnType<typeof inventory>, Map<number, ReturnType<typeof pairs>>>();
export function overlapPairs(rows: ReturnType<typeof inventory>, min = 0.35) {
  const start = performance.now();
  let cached = comparisons.get(rows);
  if (!cached) { cached = new Map(); comparisons.set(rows, cached); }
  let result = cached.get(min);
  const miss = !result;
  if (!result) { result = pairs(rows, min); cached.set(min, result); }
  record('overlapPairs', miss, start);
  return result;
}
