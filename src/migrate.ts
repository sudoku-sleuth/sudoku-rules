import {declarationLibrary} from './declaration-library.js';
import {legacyRuleRenames,legacyDefaults,legacyFormulaTerms} from './migration-data.js';
import {libraryLayers,blockHomes as canonicalHomes} from './library-layers.js';

/** Decoded declaration data, after parsing positional and keyword syntax. */
export interface MigratingDeclaration {
  kind: string;
  parameters: Record<string, unknown>;
}
export interface MigrationEntry {kind:string;target:string;canonical:string;meaning:'identical';parameterChanges?:readonly string[];form:'rule'|'block'}
const targets: Record<string,string> = {
 'absent-digits':'digit-profile','allowed-digits':'digit-profile','look-and-say':'digit-profile',
 'counting-circles':'digit-profile',outside:'digit-profile',quadruple:'digit-profile','limited-digits':'digit-profile',
 unique:'relation-scope',clone:'relation-scope',
 'little-killer':'aggregate-equation','product-cage':'aggregate-equation','prefix-sum':'aggregate-equation',
 'cage-pair':'aggregate-equation',pair:'aggregate-equation',kropki:'aggregate-equation',cage:'aggregate-equation',killer:'aggregate-equation','double-arrow':'aggregate-equation','aggregate-relation':'aggregate-equation', 'index-count':'lookup',
 whispers:'difference-line',whisper:'difference-line','close-whispers':'difference-line',
 modular:'class-pattern',entropic:'class-pattern',parity:'class-pattern','same-class':'class-pattern','window-classes':'class-pattern',
 renban:'value-set',bremban:'value-set',nabner:'value-set',
 'equal-sums':'aggregate-groups','mean-lines':'aggregate-groups','slow-thermo':'thermo',
};
// Bind old defaults before choosing a familiar rule or a declarable block.
const parameterChanges:Record<string,string[]>={index:['drop unused strips'], 'value-modifier':['drop unused name']};
export const migrationTable: readonly MigrationEntry[] = Object.freeze(Object.keys(legacyDefaults).sort().map(kind=>{
 const target=legacyRuleRenames[kind]??(libraryLayers[kind]==='rule'?kind:targets[kind]??kind);
 return Object.freeze({kind,target,canonical:canonicalHomes[target],...(parameterChanges[kind]?{parameterChanges:parameterChanges[kind]}:{}),meaning:'identical' as const,form:libraryLayers[target]});
}));
function copy(value:unknown):unknown {
 if(Array.isArray(value))return value.map(copy);
 if(value&&typeof value==='object')return Object.fromEntries(Object.entries(value).map(([k,v])=>[k,copy(v)]));
 return value;
}
function needsKeywordInteger(value:unknown):boolean {
 if(typeof value==='bigint')return value>BigInt(Number.MAX_SAFE_INTEGER)||value<BigInt(Number.MIN_SAFE_INTEGER);
 if(typeof value==='number')return Number.isInteger(value)&&!Number.isSafeInteger(value);
 if(Array.isArray(value))return value.some(needsKeywordInteger);
 return !!value&&typeof value==='object'&&Object.values(value).some(needsKeywordInteger);
}
const unique=(xs:unknown)=>[...new Set(xs as string[])].sort((a,b)=>{
 const coord=(s:string)=>s.match(/^r(\d+)c(\d+)$/)!.slice(1).map(Number);
 const [r,c]=coord(a),[s,d]=coord(b);return r-s||c-d;
});
const relation=(op:string,value:number)=>({op,value});
const operand=(cells:unknown,channel:unknown='D',operation='sum',repeats:unknown=true)=>({cells,channel,operation,repeats});
const weight=(o:unknown,coefficient:unknown=1,power=1)=>({operand:o,coefficient,power});
const constant=(n:unknown)=>weight(operand([],'D','count'),n,0);
const equation=(left:unknown[],right:unknown[],r:unknown=relation('difference',0))=>({left,right,leftOperation:'sum',rightOperation:'sum',relation:r});

/**
 * Migrate any valid published 0.3 declaration. No board, I/O or answer is needed.
 * Missing optionals stay absent. Old defaults are bound before choosing the new
 * form. Data is copied; the input and nested collections are never modified.
 * Board-dependent forms retain their bound shorthand. Use migrateCase for
 * source files with instance IDs, negations, drawing elements or conditions.
 */
export function migrateDeclaration(old: MigratingDeclaration): MigratingDeclaration[] {
 const kind=old.kind;
 if(!Object.hasOwn(legacyDefaults,kind))throw new Error(`Unknown 0.3 rule kind: ${kind}`);
 const p=copy({...legacyDefaults[kind],...old.parameters}) as Record<string,unknown>;
 const output=(parameters:Record<string,unknown>,target=targets[kind]??kind)=>[{kind:target,parameters:{...parameters,...(p.element===undefined?{}:{element:p.element})}}];
 if(legacyRuleRenames[kind])return output(p,legacyRuleRenames[kind]);
 if(libraryLayers[kind]==='rule' && kind!=='index')return output(p,kind);
 const cells=()=>unique(p.cells);
 const profile=(xs:unknown,classes:unknown=[],counts:unknown=[],extra:Record<string,unknown>={})=>output({cells:xs,classes,counts,exhaustive:false,channel:'D',selfCount:false,loop:false,comparison:'exact',repeats:true,...extra});
 switch(kind){
  case 'absent-digits':return profile(cells(),[p.digits],[0]);
  case 'allowed-digits':return profile(p.line,[p.digits],[(p.line as unknown[]).length]);
  case 'look-and-say':{const counts=p.counts as {digit:number;count:number}[];return profile(cells(),counts.map(x=>[x.digit]),counts.map(x=>x.count));}
  case 'counting-circles':return profile(cells(),[],[],{selfCount:true});
  case 'outside':case 'quadruple':{const ds=p.digits as number[];return profile(kind==='quadruple'?cells():p.cells,ds.map(d=>[d]),ds.map(d=>ds.filter(x=>BigInt(x)===BigInt(d)).length),{comparison:'at-least'});}
  case 'limited-digits':return profile(p.line,[],[],{maximumDistinct:p.max});
  case 'unique':case 'clone':return output({cells:cells(),relations:[relation('difference',0)],mode:'all',move:'orthogonal',anchors:[],except:[],negative:kind==='unique',channel:'D'});
  case 'little-killer':return output(equation([weight(operand(p.cells,p.channel,'sum',p.repeats))],[constant(p.sum)]));
  case 'product-cage':return output(equation([weight(operand(cells(),'D','product',!p.distinct))],[constant(p.product)]));
  case 'prefix-sum':return output(equation([weight({...operand(p.cells,p.channel),stop:p.stop,...(p.target===undefined?{}:{target:p.target}),crusts:p.crusts,include:p.include})],[constant(p.total)]));
  case 'cage':case 'killer':return output(equation([weight(operand(cells(),'D','count',p.repeats),0),weight(operand(cells(),p.channel),p.total===undefined?0:1)],[constant(p.total??0)]));
  case 'cage-pair':{const gs=p.cages as unknown[][];return output(equation([weight(operand(gs.length===2?unique(gs[0]):[]))],[weight(operand(gs.length===2?unique(gs[1]):[]))],gs.length===2?p.relation:relation('difference',-1)));}
  case 'pair':case 'kropki':{if(kind==='pair'&&needsKeywordInteger(p.relation))return output(p,kind);const cs=p.cells as string[];const r=kind==='kropki'?relation(p.colour==='white'?'difference':'ratio',p.colour==='white'?1:2):p.relation;return output(equation([weight(operand(cs.slice(0,1),kind==='kropki'?'V':p.channel))],[weight(operand(cs.slice(1,2),kind==='kropki'?'V':p.channel))],cs.length===2?r:relation('difference',-1)));}
  case 'double-arrow':{const es=p.ends as string[],ls=p.line as string[];return output(equation([weight(operand(ls,p.channel)),weight(operand([...es,...ls],p.channel,'count',p.repeats),0)],[weight(operand(es,p.channel))],es.length===2?relation('difference',0):relation('difference',-1)));}
  case 'aggregate-relation':return output(equation([weight(p.left)],[weight(p.right)],p.relation));
  case 'whispers':case 'whisper':case 'close-whispers':return output({line:p.line,...(p.edges===undefined?{}:{edges:p.edges}),loop:kind==='close-whispers'?false:p.loop,mode:kind==='close-whispers'?'at-most':'at-least',channel:kind==='close-whispers'?p.channel:'V',diamonds:[],gap:p.gap});
  case 'same-class':case 'window-classes':return output({line:kind==='same-class'?cells():[],loop:false,classification:p.classes==='entropy'?'entropy':'residue',modulus:p.classes==='parity'?2:3,length:3,geometry:kind==='same-class'?'cells':'squares',mode:kind==='same-class'?'same':'cover'});
  case 'modular':case 'entropic':case 'parity':return output({line:p.line,...(p.edges===undefined?{}:{edges:p.edges}),loop:p.loop,classification:kind==='entropic'?'entropy':'residue',modulus:kind==='modular'?p.modulus:kind==='parity'?2:3,length:kind==='modular'?p.length:kind==='parity'?2:3});
  case 'renban':case 'bremban':case 'nabner':return output({line:p.line,...(p.edges===undefined?{}:{edges:p.edges}),...(p.selection===undefined?{}:{selection:p.selection}),channel:kind==='bremban'?'D':p.channel,repeats:kind==='bremban'?true:kind==='nabner'?!p.distinct:p.repeats,mode:kind==='nabner'?(p.separated?'separated':'nonconsecutive'):'consecutive'});
  case 'equal-sums':return output({groups:(p.groups as unknown[][]).map(unique),operation:'sum',channel:p.channel,repeats:p.repeats});
  case 'mean-lines':return output({groups:p.lines,operation:'mean',channel:'D',repeats:true});
  case 'slow-thermo':return output({...p,strict:false});
  case 'aggregate-relation':return output(equation([weight(p.left)],[weight(p.right)],p.relation));
  case 'index-count':return output({...p,mode:'count'});
  case 'index':delete p.strips;return output(p,kind);
  case 'value-modifier':delete p.name;return output(p,kind);
  default:return output(p,kind);
 }
}

import {legacyContracts,legacyLines} from './migration-grammar.js';
import {parseDeclaration,declarationParameters,type DeclarationAST,type DeclarationValue} from './declarations.js';
import {parameterGrammar} from './case-values.js';
import {markdownBlocks} from './rules-blocks.js';
import {parseDocument,isSeq,isMap,isScalar} from 'yaml';
import {parseFormula} from './language/parser.js';
import {formulaNotation} from './formula-notation.js';
import {substituteFormula,foldFormula} from './formula-substitution.js';
import type {Expr} from './language/ast.js';

const legacyFormulaBodies = new Map(Object.entries(legacyFormulaTerms).map(([name,d])=>[name,{...d,body:parseFormula(d.formula).value!}]));
/** Expand removed callable helpers in embedded custom-rule maths. */
function migrateFormula(text:string):string {
 const parsed=parseFormula(text);if(!parsed.value)return text;
 let changed=false;
 const walk=(e:Expr):Expr=>{
  const children=e.children.map(walk);
  const d=e.kind==='call'&&children[0].kind==='name'?legacyFormulaBodies.get(children[0].value!):undefined;
  if(d&&d.parameters.length===children.length-1){
   changed=true;
   return walk(substituteFormula(d.body,new Map(d.parameters.map((p,i)=>[p,children[i+1]]))));
  }
  return {...e,children};
 };
 const ast=walk(parsed.value);return changed?formulaNotation(foldFormula(ast)):text;
}

import {readHeader} from './documents.js';
import type {PageSource} from './library.js';
import type {Result} from './language/diagnostics.js';

/** A JSON writer that retains keyword integers beyond Number's precision. */
function encode(value:unknown):string {
 if(typeof value==='bigint')return String(value);
 if(Array.isArray(value))return `[${value.map(encode).join(',')}]`;
 if(value&&typeof value==='object')return `{${Object.entries(value).filter(([,v])=>v!==undefined).map(([k,v])=>`${JSON.stringify(k)}:${encode(v)}`).join(',')}}`;
 return JSON.stringify(value);
}
function decoded(value:DeclarationValue):unknown {
 if(value.fields)return Object.fromEntries(value.fields.map(p=>[p.name.value,decoded(p.value)]));
 if(value.children)return value.children.map(decoded);
 if(/^-?\d+$/.test(value.raw)&&typeof value.value==='string')return BigInt(value.raw);
 return value.value;
}
/** Project an old parsed declaration, retaining exact keyword integers. */
export function migrateParsedDeclaration(ast:DeclarationAST,kind=ast.kind.value,preserveKind=!!ast.condition || ast.parameters.some(p=>p.name.value==='element')):MigratingDeclaration[] {
 const contract=legacyContracts.get(`https://rules.sudoku-sleuth.com/${kind==='killer-cage'?'cage':kind}.md`);
 const parameters=declarationParameters(ast,parameterGrammar(contract).primary);
 for(const p of ast.parameters)parameters[p.name.value]=decoded(p.value);
 if(preserveKind && libraryLayers[kind]){
  const preserved={...copy(legacyDefaults[kind]) as Record<string,unknown>,...parameters};
  if(kind==='index')delete preserved.strips;
  if(kind==='value-modifier')delete preserved.name;
  return [{kind,parameters:preserved}];
 }
 return migrateDeclaration({kind,parameters});
}
/** Print named JSON parameters, independent of optional setter keyword forms. */
export function printMigratedDeclaration(declaration:MigratingDeclaration):string {
 const p={...declaration.parameters},parts=[declaration.kind];
 const address=declaration.kind.startsWith('https://rules.sudoku-sleuth.com/')?declaration.kind:`https://rules.sudoku-sleuth.com/${declaration.kind}.md`;
 const line=declarationLibrary.lines?.get(address);
 if(line){
  parts.push((p[line.cells.name] as string[]).join('-'));delete p[line.cells.name];
  const value=p[line.parameter.name],record=value as Record<string,unknown>;
  const keyword=String(line.parameter.tag?record[line.parameter.tag]:value);
  parts.push(keyword,...line.parameter.keywords[keyword].map(field=>encode(record[field.field])));delete p[line.parameter.name];
 }
 parts.push(...Object.entries(p).filter(([,v])=>v!==undefined).flatMap(([k,v])=>[k,encode(v)]));
 return parts.join(' ');
}
/**
 * Rewrite published rule lines in a case, retaining IDs, all negations,
 * conditions, comments, header and other blocks. External declarations are left intact; removed callable helpers in custom
 * maths are expanded from their legacy bodies. This is a pure source transform; validate its result using
 * checkCaseReferences and the current library registry.
 */
export function migrateCase(page:PageSource):Result<PageSource> {
 const header=readHeader(page);if(!header.value)return {diagnostics:header.diagnostics};
 const root=String(header.value.metadata.library);
 const changes:{start:number;end:number;text:string}[]=[];
 const diagnostics=[];
 if(root==='https://rules.sudoku-sleuth.com/')for(const block of markdownBlocks(page.text).filter(b=>b.language==='custom-rules')){
  const doc=parseDocument(block.text);
  if(doc.errors.length||!isSeq(doc.contents))continue;
  for(const item of doc.contents.items)if(isMap(item)){
   const maths=item.get('maths',true);
   if(isScalar(maths)&&typeof maths.value==='string'&&maths.range){
    const migrated=migrateFormula(maths.value);
    if(migrated!==maths.value)changes.push({start:block.offset+maths.range[0],end:block.offset+maths.range[1],text:JSON.stringify(migrated)});
   }
  }
 }
 for(const block of markdownBlocks(page.text).filter(b=>b.language==='rules')){
  let offset=block.offset;
  for(const line of block.text.split(/(?<=\n)/)){
   const canonicalKind=(kind:string)=>kind.startsWith('https://rules.sudoku-sleuth.com/')?kind.slice('https://rules.sudoku-sleuth.com/'.length,-3):kind;
   const parsed=parseDeclaration({file:page.file,text:line.trimEnd(),document:page.text,offset},kind=>{
    const key=canonicalKind(kind)==='killer-cage'?'cage':canonicalKind(kind),url=`https://rules.sudoku-sleuth.com/${key}.md`,contract=legacyContracts.get(url);
    return {...parameterGrammar(contract),line:legacyLines.get(url),opaque:!contract};
   });
   diagnostics.push(...parsed.diagnostics);
   const ast=parsed.value;
   if(ast){
    const kind=canonicalKind(ast.kind.value);
    // A different library may publish an unrelated meaning under the same name.
    if(Object.hasOwn(legacyDefaults,kind)&&(root==='https://rules.sudoku-sleuth.com/'||ast.kind.value.startsWith('https://rules.sudoku-sleuth.com/'))){
     const migrated=migrateParsedDeclaration(ast,kind);
     if(root!=='https://rules.sudoku-sleuth.com/')migrated[0].kind=`https://rules.sudoku-sleuth.com/${migrated[0].kind}.md`;
     const prefix=(ast.instance?JSON.stringify(ast.instance.value)+': ':'')+ast.negations.map(()=>'not ').join('');
     const suffix=(ast.condition?` ${ast.condition.unless?'unless':'if'} ${ast.condition.predicate.value}`:'')+(ast.comment?` ${ast.comment.value}`:'');
     changes.push({start:ast.span.start.offset,end:ast.span.end.offset,text:prefix+printMigratedDeclaration(migrated[0])+suffix});
    }
   }
   offset+=line.length;
  }
 }
 if(diagnostics.length)return {diagnostics};
 let text=page.text;for(const c of changes.sort((a,b)=>b.start-a.start))text=text.slice(0,c.start)+c.text+text.slice(c.end);
 return {value:{...page,text},diagnostics:[]};
}
