import {compilePublicLibrary,publicPages} from '../helpers/library';
import { expect, test } from 'bun:test';
import { checkCaseReferences, lexDeclaration, parseDeclaration, parseDeclarationTail, printDeclaration, normalise } from '../../src';
import { declarationLibrary } from '../../src/declaration-library';
import { parameterGrammar } from '../../src/case-values';

const source = (text:string) => ({file:'case.rules.md',text});
test('typed tokens retain cell paths, JSON, markers, comments and numeric spellings',()=>{
 const text='clue: not whispers r1c1-r3c3 gap -2.5e1 loop false unless distinct # a comment';
 const lexed=lexDeclaration(source(text));
 expect(lexed.diagnostics).toEqual([]);
 expect(lexed.value!.map(t=>t.kind)).toEqual(['id','not','identifier','path','identifier','number','identifier','keyword','unless','keyword','comment','eof']);
 for(const token of lexed.value!.slice(0,-1)) expect(text.slice(token.span.start.offset,token.span.end.offset)).toBe(token.text);
});
test('every JSON item, field, cell and condition has its own document span',()=>{
 const text='"🕵 clue": not not example r1c1,r3c3 data {"nested": [1, {"text": "a \\\"quote\\\""}]} if connected # note';
 const document='before\r\n'+text+'\r\n';
 const parsed=parseDeclaration({file:'windows.rules.md',text,document,offset:8});
 expect(parsed.diagnostics).toEqual([]);
 const ast=parsed.value!;
 expect(ast.instance!.value).toBe('🕵 clue');
 expect(ast.negations.length).toBe(2);
 expect(ast.cells!.value).toEqual(['r1c1','r3c3']);
 const field=ast.parameters[0].value.fields![0];
 expect(document.slice(field.name.span.start.offset,field.name.span.end.offset)).toBe('"nested"');
 const nested=field.value.children![1].fields![0].value;
 expect(document.slice(nested.span.start.offset,nested.span.end.offset)).toBe('"a \\\"quote\\\""');
 expect(ast.kind.span.start.line).toBe(2);
 expect(ast.kind.span.start.column).toBe(19);
 expect(ast.condition!.predicate.value).toBe('connected');
 expect(printDeclaration(parseDeclaration(source(printDeclaration(ast))).value!)).toBe(printDeclaration(ast));
});
test('bad brackets, unfinished strings, missing values and misplaced conditions are located',()=>{
 for(const text of ['example data [1}', 'example data "unfinished', 'example data', 'example r1c1 if other', 'example r1c1 if distinct gap 3']) {
  const parsed=parseDeclaration(source(text));
  expect(parsed.value).toBeUndefined();
  expect(parsed.diagnostics[0].code).toBe('E_CASE_PARAMETERS');
  expect(parsed.diagnostics[0].span.start.offset).toBeGreaterThanOrEqual(8);
 }
 expect(lexDeclaration(source('example data [1}')).diagnostics[0].span.start.offset).toBe(15);
});
test('canonical keyword text works without supplying the grammar to the printer',()=>{
 const line=declarationLibrary.lines!.get('https://rules.sudoku-sleuth.com/pair.md')!;
 const ast=parseDeclaration(source('id: not pair r1c2,r1c1 sum -0009007199254740993 unless distinct'),{line}).value!;
 const printed=printDeclaration(ast);
 expect(printed).toBe('id: not pair r1c2-r1c1 sum -9007199254740993 unless distinct');
 expect(printDeclaration(parseDeclaration(source(printed),{line}).value!)).toBe(printed);
});
test('blank lines, comments and fragments remain distinct',()=>{
 expect(parseDeclaration(source(' # comment')).value).toBeNull();
 expect(parseDeclaration(source('  ')).value).toBeNull();
 expect(parseDeclaration(source('#local r1c1')).value!.kind.value).toBe('#local');
 expect(parseDeclarationTail(source('r1c1-r3c3 gap 3 loop false # comment')).value!.cells!.value).toEqual(['r1c1','r3c3']);
});
test('published grammar contracts match the rule pages, including aliases',async()=>{
 const pages = publicPages;
 const compiled=compilePublicLibrary(pages);
 expect(compiled.diagnostics).toEqual([]);
 for(const [url,contract] of compiled.value!.registry.parameters!) expect(declarationLibrary.parameters!.get(url)).toEqual(contract);
 for(const [url,line] of compiled.value!.registry.lines!) expect(declarationLibrary.lines!.get(url)).toEqual(line);
});
test('a page can declare dimensions for a new kind without parser changes',async()=>{
 const prelude={file:'rules/predicates.md',text:await Bun.file('rules/predicates.md').text()};
 const page={file:'grid.md',text:(await Bun.file('rules/sudoku.md').text()).replaceAll('kind: sudoku','kind: grid').replaceAll('/sudoku.md','/grid.md')};
 const library=compilePublicLibrary([prelude,page]);
 expect(library.diagnostics).toEqual([]);
 const contract=library.value!.registry.parameters!.get('https://rules.sudoku-sleuth.com/grid.md')!;
 const grammar=parameterGrammar(contract), ast=parseDeclaration(source('grid 6x7'),grammar).value!;
 expect(ast.parameters[0].value.value).toEqual({rows:6,cols:7});
 expect(printDeclaration(ast)).toBe('grid 6x7');
 expect(ast.parameters[0].value.fields!.map(f=>f.name.value)).toEqual(['rows','cols']);
});
test('checker returns the parsed declarations for downstream consumers',async()=>{
 const file={file:'case.rules.md',text:await Bun.file('tests/valid/lines/unknown-op.rules.md').text()};
 const checked=checkCaseReferences(file,declarationLibrary);
 expect(checked.diagnostics).toEqual([]);
 expect(checked.value!.declarations.length).toBe(2);
 expect(checked.value!.declarations[1].parameters[0].value.value).toEqual({op:'ratio',value:'3'});
});
test('invalid escapes and excessive nesting have declaration diagnostics',()=>{
 for(const text of ['example data "bad\\q"','example data "bad\\u0xyz"','example data "bad\t"']) {
  const result=lexDeclaration(source(text));
  expect(result.value).toBeUndefined();
  expect(result.diagnostics[0].code).toBe('E_CASE_PARAMETERS');
 }
 const deep=parseDeclaration(source(`example data ${'['.repeat(130)}0${']'.repeat(130)}`));
 expect(deep.value).toBeUndefined();
 expect(deep.diagnostics[0].message).toContain('128');
});
test('named keyword parameters give names and values separate spans',()=>{
 const line=declarationLibrary.lines!.get('https://rules.sudoku-sleuth.com/kropki.md')!;
 const text='kropki r1c1-r1c2 colour "white"';
 const ast=parseDeclaration(source(text),{line}).value!;
 const parameter=ast.parameters[0];
 expect(text.slice(parameter.name.span.start.offset,parameter.name.span.end.offset)).toBe('colour');
 expect(text.slice(parameter.value.span.start.offset,parameter.value.span.end.offset)).toBe('"white"');
});

test('named primary cells lower through the same AST as shorthand cells',()=>{
 const header='---\nformat: open-rules\ntitle: Example\nsetter: Example\nsource: ""\ncase: ""\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n---\n';
 const context={rows:1,cols:2,alphabet:[1,2],activeCells:['r1c1','r1c2'] as const};
 const normal=(line:string)=>normalise({file:'case.rules.md',text:header+'\n```rules\n'+line+'\n```\n'},{...context,activeCells:[...context.activeCells]});
 const named=normal('unique cells ["r1c1","r1c2"] if distinct'), short=normal('unique r1c1-r1c2 if distinct');
 expect(named.status).toBe('complete');
 expect(named.normalForm!.solution).toEqual(short.normalForm!.solution);
 expect(normal('unique r1c1 cells ["r1c2"]').issues[0].code).toBe('E_CASE_PARAMETERS');
});
test('canonical structured values retain duplicate JSON fields and nested member spans',()=>{
 const parsed=parseDeclaration(source('example data {"a":1,"a":2}')).value!;
 const text=printDeclaration(parsed), reparsed=parseDeclaration(source(text)).value!;
 expect(text).toBe('example data {"a":1,"a":2}');
 expect(reparsed.parameters[0].value.fields!.length).toBe(2);
 expect(reparsed.parameters[0].value.value).toEqual({a:2});
});
test('unresolved definitions retain located arguments and the common condition syntax',()=>{
 const text='https://other.example/rule.md r1c1-r2c2 custom argument unless distinct';
 const ast=parseDeclaration(source(text),{opaque:true}).value!;
 expect(ast.arguments!.map(a=>a.value)).toEqual(['custom','argument']);
 expect(ast.condition!.unless).toBe(true);
 expect(ast.condition!.predicate.value).toBe('distinct');
 expect(printDeclaration(ast)).toBe(text);
 expect(parseDeclaration(source(printDeclaration(ast)),{opaque:true}).diagnostics).toEqual([]);
});
