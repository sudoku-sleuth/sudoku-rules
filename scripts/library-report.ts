import {readdir} from 'node:fs/promises';
import {compilePublicLibrary,readHeader} from '../src/documents';
import {formulaBlocks} from '../src/library';
import {migrationTable} from '../src/migrate';
const pages=await Promise.all((await readdir('rules')).filter(f=>f.endsWith('.md')).sort().map(async f=>({file:`rules/${f}`,text:await Bun.file(`rules/${f}`).text()})));
const compiled=compilePublicLibrary(pages);if(!compiled.value)throw Error(JSON.stringify(compiled.diagnostics));
const library=compiled.value;
const rows=pages.map(p=>({page:p,m:readHeader(p).value!.metadata})).filter(r=>r.m.kind);
const rules=rows.filter(r=>r.m.layer==='rule').sort((a,b)=>String(a.m.name).localeCompare(String(b.m.name)));
const blocks=rows.filter(r=>r.m.layer==='block').sort((a,b)=>String(a.m.name).localeCompare(String(b.m.name)));
const general=Object.fromEntries(blocks.map(r=>[String(r.m.kind),String(r.m.composition??'')]));
const users=(kind:unknown)=>rules.filter(r=>r.m.alias_of===kind);
for(const block of blocks){if(block.m.alias_of)throw Error(`Bound block: ${block.m.kind}`);if(users(block.m.kind).length<2&&!general[String(block.m.kind)])throw Error(`Unshared block needs a composition purpose: ${block.m.kind}`);}
const histogram:Record<number,number>={};for(const b of blocks){const count=users(b.m.kind).length;histogram[count]=(histogram[count]??0)+1;}
const ownBlocks=blocks.filter(r=>formulaBlocks(r.page).length).length,ownRules=rules.filter(r=>formulaBlocks(r.page).length).length;
const esc=(s:unknown)=>String(s).replaceAll('|','\\|').replaceAll('\n',' ');
const link=(r:typeof rows[number])=>`[${r.m.name}](../rules/${r.m.kind}.md)`;
const meaning=(r:typeof rows[number])=>esc(r.page.text.split('\n---\n')[1]?.replace(/^\s*# [^\n]+\n+/,'').split('\n\n')[0]??'');
const save=async(file:string,text:string)=>{if(process.argv.includes('--check')){if(await Bun.file(file).text()!==text)throw Error(`Library tables are stale: ${file}; run bun scripts/library-report.ts.`);}else await Bun.write(file,text);};
const report=`# Library: predicates, blocks and rules

Predicates are mathematical functions and cannot be declared in a case file. Blocks own formulas for meanings shared by multiple rules or general case-file composition. Rules own their setter name, wording, examples and icon. A rule either binds a block with explicit settings or owns its formula directly. No bound declarations are blocks, and there are no single-rule Constraint wrappers.

## Inventory

| Item | Count |
| --- | ---: |
| Callable predicates | ${Object.keys(library.prelude.environment.terms).length} |
| Vocabulary declarations | ${library.prelude.declarations.length} |
| Blocks | ${blocks.length} |
| Rules | ${rules.length} |
| Blocks owning formulas | ${ownBlocks} |
| Rules owning formulas | ${ownRules} |
| Formula-owning definitions | ${ownBlocks+ownRules} |

Blocks by number of named rules binding them:

| Named users | Blocks |
| ---: | ---: |
${Object.entries(histogram).map(([n,count])=>`| ${n} | ${count} |`).join('\n')}

## Rules

| Name | What it means | Definition or block and settings | Icon |
| --- | --- | --- | --- |
${rules.map(r=>`| ${link(r)} | ${meaning(r)} | ${r.m.alias_of?`[${r.m.alias_of}](../rules/${r.m.alias_of}.md): \`${esc(Object.entries(r.m.alias_bind as object).map(([k,v])=>`${k}=${v}`).join('; '))}\``:'Own formula on rule page'} | yes |`).join('\n')}

## Blocks

Every block owns a formula. Used by lists named rules binding it directly. A block with fewer than two named users states its general composition purpose.

| Name | Meaning | Used by | General composition purpose when needed |
| --- | --- | --- | --- |
${blocks.map(r=>`| ${link(r)} | ${meaning(r)} | ${users(r.m.kind).map(link).join(', ')||'None'} | ${users(r.m.kind).length<2?general[String(r.m.kind)]:'Shared by multiple named rules'} |`).join('\n')}

## Overlap comparison

The comparison expands predicate bodies to depth three, substitutes lets, normalises bound names and sorts commutative operations. Primitive identities and separate free parameters are preserved. Parameter types alone do not distinguish exact formulas. Rules binding the same block appear under “same block, different settings”, with the differing bindings. These pairs do not require allowlist entries. Identical instantiated formulas fail even when they bind the same block. Other pairs at or above 0.35 subtree similarity require a current cross-meaning reason; stale reasons fail. A block cannot simply wrap one predicate.

Run \`bun run openrules overlap [--min 0.35] [--json]\`. See [overlap](overlap.md) for the shared families and retained distinctions.

## Liar rules

Liar Cells owns independent real-value assignments with group counts and separate face-digit and real-value distinctness. Lying Clues owns an explicit list of complete clues and counts false meanings with exactly, at-least or at-most. Both are named rules with their own formulas. Their independent meanings do not introduce a shared block. The existing countWhere and allDifferent predicates express their counts and distinctness; clueHolds supplies complete owned-clue truth on the same answer.

## Names and migration

Cage retains Killer Cage and Killer as aliases; legacy \`killer\` and \`killer-cage\` declarations load and migrate to \`cage\`. Whisper migrates to Whispers and Unique to Extra Regions. Little Killer, Negative, Anti King and Anti Knight retain their names. Every named rule has an icon mapping.

The [migration guide](migration.md) lists all legacy declarations and their formula homes. The geometric move, numeric-property, value-support and class-count families use parameterised predicates; archived helper bodies support embedded custom-formula migration.
`;
const final=report;
await save('docs/library.md',final);
await save('rules/README.md',`---\ndocument: home\nname: Open Rules\nurl: https://rules.sudoku-sleuth.com/README.md\n---\n\n# Open Rules\n\nChoose a familiar rule and say where it applies. Shared building blocks combine mathematical predicates into reusable constraints. Rules with unique meanings define them directly.\n\n## Rules\n\n${rules.map(r=>`- [${r.m.name}](${r.m.url})`).join('\n')}\n\n## Building blocks\n\n${blocks.map(r=>`- [${r.m.name}](${r.m.url})`).join('\n')}\n\n## Shared definitions\n\n- [Predicates](https://rules.sudoku-sleuth.com/predicates.md)\n- [Syntax](https://rules.sudoku-sleuth.com/syntax.md)\n- [Fog](https://rules.sudoku-sleuth.com/fog.md)\n`);
const migration=await Bun.file('docs/migration.md').text();
await save('docs/migration.md',migration.replace(/\| `[^`]+` \| `[^`]+` \([^\n]+/g,line=>{const kind=/^\| `([^`]+)`/.exec(line)![1];const e=migrationTable.find(e=>e.kind===kind);return e?`| \`${e.kind}\` | \`${e.target}\` (${e.form}; formula home \`${e.canonical}\`) | identical |`:line;}));
console.log(JSON.stringify({predicates:Object.keys(library.prelude.environment.terms).length,blocks:blocks.length,rules:rules.length,ownBlocks,ownRules,histogram}));
