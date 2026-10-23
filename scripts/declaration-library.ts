import { readdir } from 'node:fs/promises';
import { readHeader, compilePublicLibrary } from '../src/documents';
const pages=await Promise.all((await readdir('rules')).filter(n=>n.endsWith('.md')).sort().map(async n=>({file:`rules/${n}`,text:await Bun.file(`rules/${n}`).text()})));
const compiled=compilePublicLibrary(pages);
if(!compiled.value) throw Error(JSON.stringify(compiled.diagnostics));
const {registry}=compiled.value;
// Shared aliases are written once; contracts refer to this same type environment.
const types=compiled.value.prelude.environment.types??{};
const parameters=[...registry.parameters!].map(([url,contract])=>[url,{...contract,types:undefined}]);
const output=`// Generated from rules/*.md by scripts/declaration-library.ts.\nimport type { RuleRegistry } from './documents.js';\nimport { compilePrelude } from './library.js';\nlet cachedPrelude: ReturnType<typeof compilePrelude>['value'];\nexport const defaultCasePrelude = () => cachedPrelude ??= compilePrelude({file: 'rules/predicates.md', text: ${JSON.stringify(pages.find(p => p.file === 'rules/predicates.md')!.text)}}).value!;\nimport type { Type } from './language/ast.js';\nimport type { LineDeclaration } from './rule-lines.js';\nconst types: Record<string,Type> = ${JSON.stringify(types)};\nexport const declarationLibrary: RuleRegistry = {\n kindByUrl:new Map(${JSON.stringify([...registry.kindByUrl!])}),\n sharedNames:new Map(${JSON.stringify([...registry.sharedNames!])}) as RuleRegistry['sharedNames'],\n kinds:new Set(${JSON.stringify([...registry.kinds])}),\n urls:new Set(${JSON.stringify([...registry.urls])}),\n lines:new Map<string, LineDeclaration>(${JSON.stringify([...registry.lines!])}),\n parameters:new Map(${JSON.stringify(parameters)}.map(([url, contract]) => [url as string, {...contract as object, types}])) as RuleRegistry['parameters'],\n};\n`;
if(process.argv.includes('--check')) {
 if(await Bun.file('src/declaration-library.ts').text()!==output) {console.error('Declaration library is stale; run bun scripts/declaration-library.ts.');process.exit(1);}
} else await Bun.write('src/declaration-library.ts',output);
console.log(`${registry.kinds.size} declaration contracts ${process.argv.includes('--check')?'verified':'generated'}`);

const headers=pages.map(page=>readHeader(page).value!.metadata).filter(m=>typeof m.kind==='string');
const layers=Object.fromEntries(headers.map(m=>[m.kind,m.layer]));
const homes=Object.fromEntries(headers.map(m=>[m.kind,m.alias_of??m.kind]));
const layerOutput=`// Generated from public page headers by scripts/declaration-library.ts.\nexport const libraryLayers: Record<string, 'block'|'rule'> = ${JSON.stringify(layers,null,2)};\nexport const blockHomes: Record<string,string> = ${JSON.stringify(homes,null,2)};\n`;
if(process.argv.includes('--check')) {if(await Bun.file('src/library-layers.ts').text()!==layerOutput)throw Error('Run bun run generate:declarations to update library layers.');}
else await Bun.write('src/library-layers.ts',layerOutput);
