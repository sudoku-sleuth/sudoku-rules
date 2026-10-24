import { expect, test } from 'bun:test';
import { readSemanticFile } from '../../src/semantics/reader';
import { declarationLibrary } from '../../src/declaration-library';
import { parameterGrammar } from '../../src/case-values';
import { parseDeclaration, printDeclaration, type DeclarationAST } from '../../src/declarations';
import baseline from './legacy-readings.json';
import rejections from './contract-rejections.json';
const shape = (reading: ReturnType<typeof readSemanticFile>) => ({...reading,instances:reading.instances.map(({ast,...instance})=>{ const {position,...source}=instance.source; return {...instance,source}; })});
const grammar = (kind:string) => {
 const url=kind.startsWith('http')?kind:`https://rules.sudoku-sleuth.com/${kind}.md`;
 return {...parameterGrammar(declarationLibrary.parameters?.get(url)),line:declarationLibrary.lines?.get(url)};
};
const meaning = (ast: DeclarationAST) => JSON.parse(JSON.stringify(ast,(key,value)=>['span','raw'].includes(key)?undefined:value));
for(const entry of baseline) {
 test(`legacy declaration reading: ${entry.file}`,()=>{
   const actual=shape(readSemanticFile(entry));
   if(Object.hasOwn(rejections, entry.file)) {
    expect(actual.issues).toEqual(rejections[entry.file as keyof typeof rejections]);
    if (!actual.issues.length && !entry.reading.issues.length) {
     // The old reader omitted some named parameters; retain its instance provenance checks.
     const provenance = (instances: typeof actual.instances) => instances.map(({parameters,...instance}) => ({...instance, source: {...instance.source, ...instance.kind.startsWith('#') ? {scope: entry.file, custom: true} : {}}}));
     expect(provenance(actual.instances)).toEqual(provenance(entry.reading.instances));
    }
   }
   else if(!entry.reading.issues.length) expect(actual).toEqual(entry.reading);
   else expect(actual.issues.length).toBeGreaterThan(0);
 });
 test(`canonical declarations: ${entry.file}`,()=>{
   const reading=readSemanticFile(entry);
   for(const instance of reading.instances) {
     const ast=instance.ast, selected=ast.arguments ? {opaque:true} : grammar(ast.kind.value), text=printDeclaration(ast,selected);
     const parsed=parseDeclaration({file:'roundtrip',text},selected);
     expect(parsed.diagnostics).toEqual([]);
     expect(meaning(parsed.value!)).toEqual(meaning(ast));
     expect(printDeclaration(parsed.value!,selected)).toBe(text);
   }
 });
}
