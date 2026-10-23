import {readdir,readFile} from 'node:fs/promises';
import {join} from 'node:path';
import {compilePublicLibrary} from './documents.js';
import {formulaInventory,overlapPairs} from './formula-similarity.js';
import {overlapAllowlist} from './overlap-allowlist.js';

export async function libraryOverlap(folder:string,min=0.35){
 const pages=await Promise.all((await readdir(folder)).filter(f=>f.endsWith('.md')).sort().map(async f=>({file:join(folder,f),text:await readFile(join(folder,f),'utf8')})));
 const result=compilePublicLibrary(pages);
 if(!result.value)throw Error(result.diagnostics.map(d=>`${d.span.file}: ${d.message}`).join('\n'));
 const lib=result.value,rows=formulaInventory(pages,3,lib.rules,true);
 return {min,depth:3,counts:{predicates:Object.keys(lib.prelude.environment.terms).length,predicateBodies:rows.filter(r=>r.layer==='predicate').length,blocks:lib.blocks.size,rules:lib.namedRules.size,formulaOwningDefinitions:rows.filter(r=>r.layer!=='predicate'&&r.ownsFormula).length},pairs:overlapPairs(rows,min).map(p=>({...p,reason:overlapAllowlist[p.key]}))};
}
