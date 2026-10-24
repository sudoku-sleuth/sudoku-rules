import {readdir} from 'node:fs/promises';
import {compilePublicLibrary,readHeader} from '../src/documents';
import {formulaBlocks} from '../src/library';
import {migrationTable} from '../src/migrate';
import {legacyFormulaTerms} from '../src/migration-data';
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

## All-given marks

[Marked Pairs](../rules/marked-pairs.md) is the shared block for XV and Kropki. Use grouped XV for X and V marks, grouped Kropki for dots, and Marked Pairs for mixed families. Write compact pairs such as \`xv x [r1c1-r1c2] allGiven ["x","v"]\`. Select kinds with \`allGiven ["x","v"]\`, \`["white","black"]\` or a single kind. Each selected relation is forbidden on orthogonal edges outside its own marks. Independent rules retain their full scope. Positive marks read V; all-given restrictions read D.

## Names and migration

Cage retains Killer Cage and Killer as aliases; legacy \`killer\` and \`killer-cage\` declarations load and migrate to \`cage\`. Whisper migrates to Whispers and Unique to Regions. Regions retains Extra Regions, boxes, irregular regions, disjoint and disjoint groups as aliases. Parity Line retains Parity; Odd Even Cells retains odd/even cells, parity cells and odd and even digits; Between Line retains Between. The previous kinds and published routes remain aliases and migrate to the new kinds with the same parameters and meanings. Diagonal Sum retains Little Killer as an alias and preserves its published route. Whispers keeps its general gap; Whispers 5 (German Whispers) and Whispers 4 (Dutch Whispers) fix the gap at 5 and 4. Arrow also covers Pill, Pill Arrow and Arrow Pill. Kropki also goes by white dot, black dot and Kropki dots; XV by X and V and XV clues. Pair keeps its name: migration chooses XV for sums of 10 or 5 and Kropki for difference 1 or ratio 2 only when their effective-value settings match exactly. Other pair relations and channels remain Pair. Negative, Anti King and Anti Knight retain their names. Every named rule has an icon mapping.

The [migration guide](migration.md) lists all legacy declarations and their formula homes. The geometric move, numeric-property, value-support and class-count families use parameterised predicates; archived helper bodies support embedded custom-formula migration.
`;
const final=report;
await save('docs/library.md',final);
await save('rules/README.md',`---\ndocument: home\nname: Open Rules\nurl: https://rules.sudoku-sleuth.com/README.md\n---\n\n# Open Rules\n\nChoose a familiar rule and say where it applies. Shared building blocks combine mathematical predicates into reusable constraints. Rules with unique meanings define them directly.\n\n## Rules\n\n${rules.map(r=>`- [${r.m.name}](${r.m.url})`).join('\n')}\n\n## Building blocks\n\n${blocks.map(r=>`- [${r.m.name}](${r.m.url})`).join('\n')}\n\n## Shared definitions\n\n- [Predicates](https://rules.sudoku-sleuth.com/predicates.md)\n- [Syntax](https://rules.sudoku-sleuth.com/syntax.md)\n- [Fog](https://rules.sudoku-sleuth.com/fog.md)\n`);
const formulaGuide=`<!-- formula-migration:start -->
## Embedded custom formulas

The migration table in src/migration-data.ts owns every removed callable term from the frozen 0.3 vocabulary, together with the folded uniform predicate. The table below is generated from it by bun scripts/library-report.ts.

Rewrites preserve occurrence policy: distinct_D and distinct_V compare different cells in a set; distinctAt compares different positions, including repeated cells. Face sums and products bind their exact whole-number result as position; effective-value sums retain fractions. Shading reads the existing H set directly. The four nonempty minimum/maximum primitives remain available for archived extremum bodies.

Where the table says local, migration substitutes the archived body into a fresh local let value. Its dependencies are migrated recursively. Helper arguments and enclosing formula variables cannot be captured by generated binders. Function-valued references become typed lambdas; the generic distinctness references use allDifferent. Parentheses retain the scope of conditionals, quantifiers, lambdas and lets.

| Legacy callable | Action | Replacement or archived body |
| --- | --- | --- |
${Object.entries(legacyFormulaTerms).sort(([a],[b])=>a.localeCompare(b)).map(([name,d])=>`| \`${name}\` | ${d.mode==='rewrite'?'Rewrite':'Embed local value'} | \`${esc(d.formula)}\` |`).join('\n')}

## Local kind collisions

A local definition that shares a library kind keeps its own meaning. Reviewed Split Pea formulas migrate to the library rule on positive decimal digit alphabets. A full path supplies line directly; a separate interior and two ends (or bulbs) become the first end, the interior occurrences in order, and the last end. The formula and parameter types must match a reviewed form; declarations retain IDs, negations, conditions, drawings and comments.

Every other collision receives an unused local-<id> name, with a numeric suffix when needed. Both its definition and declarations are renamed. Battenburg with an exhaustive marks record and multicolour Japanese Sums retain their local formulas under this rule. Definitions with an unrecognised Split Pea meaning or a nondecimal alphabet also retain a renamed local definition.
<!-- formula-migration:end -->
`;
let migration=await Bun.file('docs/migration.md').text();
migration=migration.includes('<!-- formula-migration:start -->')?migration.replace(/<!-- formula-migration:start -->[\s\S]*?<!-- formula-migration:end -->\n?/,formulaGuide):migration+'\n'+formulaGuide;

await save('docs/migration.md',migration.replace(/\| `[^`]+` \| `[^`]+` \([^\n]+/g,line=>{const kind=/^\| `([^`]+)`/.exec(line)![1];const e=migrationTable.find(e=>e.kind===kind);return e?`| \`${e.kind}\` | \`${e.target}\` (${e.form}; formula home \`${e.canonical}\`) | identical |`:line;}));
console.log(JSON.stringify({predicates:Object.keys(library.prelude.environment.terms).length,blocks:blocks.length,rules:rules.length,ownBlocks,ownRules,histogram}));
