import {declarationLibrary} from './declaration-library.js';
import {legacyRuleRenames,legacyDefaults,legacyFormulaTerms,legacySplitPeaForms} from './migration-data.js';
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
 const kind=old.kind==='extra-regions'?'unique':old.kind;
 if(!Object.hasOwn(legacyDefaults,kind))throw new Error(`Unknown 0.3 rule kind: ${kind}`);
 const p=copy({...legacyDefaults[kind],...old.parameters}) as Record<string,unknown>;
 const output=(parameters:Record<string,unknown>,target=targets[kind]??kind)=>[{kind:target,parameters:{...parameters,...(p.element===undefined?{}:{element:p.element})}}];
 if(legacyRuleRenames[kind])return output(p,legacyRuleRenames[kind]);
 if(kind==='pair') {
  // Single-pair XV and Kropki read V. Grouped all-given settings need case context.
  // Only discard inputs that their contracts express exactly.
  const r=p.relation as Record<string,unknown>;
  const exact=Object.keys(p).every(k=>['cells','relation','channel','element'].includes(k))
   && Object.keys(r).every(k=>['op','value'].includes(k)) && p.channel==='V'
   && Array.isArray(p.cells) && p.cells.length===2;
  const is=(n:number)=>r.value===n || r.value===BigInt(n);
  if(exact && r.op==='sum' && (is(10) || is(5)))return output({cells:p.cells,mark:is(10)?'x':'v'},'xv');
  if(exact && ((r.op==='difference' && is(1)) || (r.op==='ratio' && is(2))))return output({cells:p.cells,colour:r.op==='difference'?'white':'black'},'kropki');
  return output(p,'pair');
 }
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
import {parseDocument,isSeq,isMap,isScalar,type YAMLMap} from 'yaml';
import {parseFormula,parseType} from './language/parser.js';
import {formulaNotation} from './formula-notation.js';
import {substituteFormula,foldFormula} from './formula-substitution.js';
import type {Expr} from './language/ast.js';
import {expressionKey} from './language/checker.js';

const legacyFormulaBodies = new Map(Object.entries(legacyFormulaTerms).map(([name,d])=>[name,{...d,body:parseFormula(d.formula).value!}]));
/** Expand removed callable helpers in embedded custom-rule maths. */
function migrateFormula(text:string):string {
 const parsed=parseFormula(text);if(!parsed.value)return text;
 let changed=false;
 let serial=0;
 const used=new Set(text.match(/[\p{L}\p{N}_]+/gu));
 const fresh=()=>{let n:string;do{n=`migrationLocal${serial++}`;}while(used.has(n));used.add(n);return n;};
 const walk=(e:Expr):Expr=>{
  const children=e.children.map((child,i)=>e.kind==='call'&&i===0&&child.kind==='name'?child:walk(child));
  const d=e.kind==='call'&&children[0].kind==='name'?legacyFormulaBodies.get(children[0].value!):undefined;
  if(d&&d.parameters.length===children.length-1){
   changed=true;
   // Reserve names from the complete caller, including its enclosing binders.
   // substituteFormula otherwise only sees the helper and its arguments.
   const bindings=new Map(d.parameters.map((p,i)=>[p,children[i+1]]));
   for(const name of used)if(!bindings.has(name))bindings.set(name,{kind:'name',value:name,children:[],span:e.span});
   const expanded=substituteFormula(d.body,bindings);
   const reserve=(node:Expr)=>{for(const b of node.binders??[])used.add(b.name);node.children.forEach(reserve);};
   reserve(expanded);
   const body=walk(expanded);
   if(d.mode==='rewrite')return body;
   const name=fresh();
   return {kind:'let',span:e.span,binders:[{name,span:e.span}],children:[body,{kind:'name',value:name,span:e.span,children:[]}]};
  }
  if(e.kind==='name'){
   const definition=legacyFormulaBodies.get(e.value!);
   if(definition){
    changed=true;
    if(definition.reference)return {...e,value:definition.reference};
    const lambda:Expr={kind:'lambda',span:e.span,children:[definition.body],binders:definition.parameters.map((name,i)=>({name,span:e.span,type:parseType(definition.parameterTypes[i]).value!}))};
    const reserved=new Map([...used].map(name=>[name,{kind:'name' as const,value:name,children:[],span:e.span}]));
    const expanded=substituteFormula(lambda,reserved);
    const reserve=(node:Expr)=>{for(const b of node.binders??[])used.add(b.name);node.children.forEach(reserve);};
    reserve(expanded);
    return walk(expanded);
   }
  }
  return {...e,children};
 };
 const ast=walk(parsed.value);return changed?formulaNotation(foldFormula(ast)):text;
}

import {readHeader} from './documents.js';
import type {PageSource} from './library.js';
import {diagnostic,type Diagnostic,type Result} from './language/diagnostics.js';

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
 if(kind==='extra-regions')kind='unique';
 const contract=legacyContracts.get(`https://rules.sudoku-sleuth.com/${kind==='killer-cage'?'cage':kind}.md`);
 const parameters=declarationParameters(ast,parameterGrammar(contract).primary);
 for(const p of ast.parameters)parameters[p.name.value]=decoded(p.value);
 if(preserveKind && libraryLayers[kind] && kind!=='pair'){
  const preserved={...copy(legacyDefaults[kind]) as Record<string,unknown>,...parameters};
  if(kind==='index')delete preserved.strips;
  if(kind==='value-modifier')delete preserved.name;
  return [{kind,parameters:preserved}];
 }
 return migrateDeclaration({kind,parameters});
}
/** Print familiar rule names, compact cells and nondefault parameters. */
export function printMigratedDeclaration(declaration:MigratingDeclaration):string {
 const p={...declaration.parameters};
 let kind=declaration.kind;
 if(kind==='marked-pairs'){
  const names=['x','v','white','black'];
  const used=names.filter(k=>Array.isArray(p[k])&&(p[k] as unknown[]).length || Array.isArray(p.allGiven)&&p.allGiven.includes(k));
  if(used.length&&used.every(k=>k==='x'||k==='v'))kind='xv';
  else if(used.length&&used.every(k=>k==='white'||k==='black'))kind='kropki';
 }
 const parts=[kind];
 if(declaration.kind==='sudoku' && encode(p.board)==='{"rows":9,"cols":9}'){
  parts.push('9x9');delete p.board;
 }
 if(declaration.kind==='diagonal-sum' && Array.isArray(p.cells)){
  parts.push(p.cells.join('-'),'sum',encode(p.sum));delete p.cells;delete p.sum;
  if(p.channel==='D')delete p.channel;
  if(p.repeats===true)delete p.repeats;
 }
 const address=kind.startsWith('https://rules.sudoku-sleuth.com/')?kind:`https://rules.sudoku-sleuth.com/${kind}.md`;
 const contract=declarationLibrary.parameters?.get(address);
 const line=declarationLibrary.lines?.get(address);
 for(const [name,value]of Object.entries(p)){
  const parameter=contract?.parameters[name];
  if(contract?.explicit?.includes(name))continue;
  if(line&&name===line.parameter.name&&Array.isArray(p[line.cells.name])&&(p[line.cells.name] as unknown[]).length)continue;
  if(parameter&&Object.hasOwn(parameter,'default')&&encode(value)===encode(parameter.default))delete p[name];
 }
 if(line&&Array.isArray(p[line.cells.name])&&(p[line.cells.name] as unknown[]).length){
  parts.push((p[line.cells.name] as string[]).join('-'));delete p[line.cells.name];
  const value=p[line.parameter.name]??contract?.parameters[line.parameter.name].default,record=value as Record<string,unknown>;
  const keyword=String(line.parameter.tag?record[line.parameter.tag]:value);
  parts.push(keyword,...line.parameter.keywords[keyword].map(field=>encode(record[field.field])));delete p[line.parameter.name];
 }
 const valueText=(value:unknown):string=>{
  if(Array.isArray(value)){
   if(value.length>1&&value.every(c=>typeof c==='string'&&/^r[1-9]\d*c[1-9]\d*$/.test(c)))return value.join('-');
   return `[${value.map(valueText).join(',')}]`;
  }
  if(typeof value==='string'&&/^r[1-9]\d*c[1-9]\d*$/.test(value))return value;
  return encode(value);
 };
 parts.push(...Object.entries(p).filter(([,v])=>v!==undefined).flatMap(([k,v])=>[k,valueText(v)]));
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
 const diagnostics:Diagnostic[]=[];
 const localRenames=new Map<string,string>(),splitForms=new Map<string,typeof legacySplitPeaForms[number]>();
 const occupied=new Set([...page.text.matchAll(/(?:id:\s*|#)([a-z0-9-]+)/g)].map(m=>m[1]));
 const symbols=(header.value.metadata.board as {symbols?:unknown[]}|undefined)?.symbols??[1,2,3,4,5,6,7,8,9];
 const decimalAlphabet=symbols.length>0&&symbols.every(n=>typeof n==='number'&&Number.isInteger(n)&&n>=1&&n<=9);
 if(root==='https://rules.sudoku-sleuth.com/')for(const block of markdownBlocks(page.text).filter(b=>b.language==='custom-rules')){
  const doc=parseDocument(block.text);
  if(doc.errors.length||!isSeq(doc.contents))continue;
  let changed=false;
  for(const item of [...doc.contents.items])if(isMap(item)){
   const mapping:YAMLMap=item;
   const entry=item.toJSON() as {id?:string;url?:string;maths?:string;parameters?:Record<string,{type?:string}>};
   const id=entry.id??(entry.url?.startsWith('#')?entry.url.slice(1):undefined);
   if(id&&declarationLibrary.kinds.has(id)){
    const ast=typeof entry.maths==='string'?parseFormula(entry.maths).value:undefined;
    const form=id==='split-pea'&&decimalAlphabet&&ast?legacySplitPeaForms.find(f=>expressionKey(parseFormula(f.formula).value!)===expressionKey(ast)&&JSON.stringify(Object.keys(entry.parameters??{}).sort())===JSON.stringify(Object.keys(f.parameters).sort())&&Object.entries(f.parameters).every(([k,t])=>entry.parameters?.[k]?.type===t)):undefined;
    if(form){
     splitForms.set('#'+id,form);
     doc.contents.items.splice(doc.contents.items.indexOf(item),1);changed=true;continue;
    }
    let renamed=`local-${id}`,serial=2;
    while(occupied.has(renamed)||declarationLibrary.kinds.has(renamed))renamed=`local-${id}-${serial++}`;
    occupied.add(renamed);localRenames.set('#'+id,'#'+renamed);
    const idNode=mapping.get('id',true);if(isScalar(idNode))idNode.value=renamed;
    const urlNode=mapping.get('url',true);if(entry.url?.startsWith('#')&&isScalar(urlNode))urlNode.value='#'+renamed;
    // Replace a legacy fragment with an explicit id, retaining its heading.
    if(!entry.id){mapping.delete('url');mapping.set('id',renamed);}
    changed=true;
   }
   const maths=mapping.get('maths',true);
   if(isScalar(maths)&&typeof maths.value==='string'&&maths.range){
    const migrated=migrateFormula(maths.value);
    if(migrated!==maths.value){maths.value=migrated;changed=true;}
   }
  }
  if(changed)changes.push({start:block.offset,end:block.offset+block.text.length,text:doc.toString()});
 }
 for(const block of markdownBlocks(page.text).filter(b=>b.language==='rules')){
  let offset=block.offset;
  for(const line of block.text.split(/(?<=\n)/)){
   const canonicalKind=(kind:string)=>kind.startsWith('https://rules.sudoku-sleuth.com/')?kind.slice('https://rules.sudoku-sleuth.com/'.length,-3):kind;
   const parsed=parseDeclaration({file:page.file,text:line.trimEnd(),document:page.text,offset},kind=>{
    if(splitForms.has(kind))return {primary:'cells'};
    const key=canonicalKind(kind)==='killer-cage'?'cage':canonicalKind(kind)==='extra-regions'?'unique':canonicalKind(kind),url=`https://rules.sudoku-sleuth.com/${key}.md`,contract=legacyContracts.get(url)??declarationLibrary.parameters?.get(url);
    return {...parameterGrammar(key==='xv'||key==='kropki'?declarationLibrary.parameters?.get(url):contract),line:legacyLines.get(url),opaque:!contract};
   });
   diagnostics.push(...parsed.diagnostics);
   const ast=parsed.value;
   if(ast){
    const kind=canonicalKind(ast.kind.value);
    const split=splitForms.get(kind);
    if(split){
     const p=declarationParameters(ast,'cells');
     for(const param of ast.parameters)p[param.name.value]=decoded(param.value);
     const cells=p.cells as string[],ends=split.ends?p[split.ends] as string[]:undefined;
     if(Array.isArray(cells)&&(!split.ends||Array.isArray(ends)&&ends.length===2)){
      const line=ends?[ends[0],...cells,ends[1]]:cells;
      const prefix=(ast.instance?page.text.slice(ast.instance.span.start.offset,ast.instance.span.end.offset)+' ':'')+ast.negations.map(()=>'not ').join('');
      const suffix=(ast.condition?` ${ast.condition.unless?'unless':'if'} ${ast.condition.predicate.value}`:'')+(ast.comment?` ${ast.comment.value}`:'');
      changes.push({start:ast.span.start.offset,end:ast.span.end.offset,text:prefix+printMigratedDeclaration({kind:'split-pea',parameters:{line,...(p.element===undefined?{}:{element:p.element})}})+suffix});
     }else diagnostics.push(diagnostic('E_CASE_PARAMETERS',ast.span,'Cannot migrate the local Split Pea arguments without changing their meaning.'));
    }else if(localRenames.has(kind))changes.push({start:ast.kind.span.start.offset,end:ast.kind.span.end.offset,text:localRenames.get(kind)!});
    // A different library may publish an unrelated meaning under the same name.
    if((Object.hasOwn(legacyDefaults,kind)||kind==='extra-regions')&&(root==='https://rules.sudoku-sleuth.com/'||ast.kind.value.startsWith('https://rules.sudoku-sleuth.com/'))){
     const migrated=migrateParsedDeclaration(ast,kind);
     if(root!=='https://rules.sudoku-sleuth.com/')migrated[0].kind=`https://rules.sudoku-sleuth.com/${migrated[0].kind}.md`;
     const prefix=(ast.instance?page.text.slice(ast.instance.span.start.offset,ast.instance.span.end.offset)+' ':'')+ast.negations.map(()=>'not ').join('');
     const suffix=(ast.condition?` ${ast.condition.unless?'unless':'if'} ${ast.condition.predicate.value}`:'')+(ast.comment?` ${ast.comment.value}`:'');
     changes.push({start:ast.span.start.offset,end:ast.span.end.offset,text:prefix+printMigratedDeclaration(migrated[0])+suffix});
    }else if(kind==='marked-pairs'&&root==='https://rules.sudoku-sleuth.com/'){
     const parameters=declarationParameters(ast);
     for(const parameter of ast.parameters)parameters[parameter.name.value]=decoded(parameter.value);
     const prefix=(ast.instance?page.text.slice(ast.instance.span.start.offset,ast.instance.span.end.offset)+' ':'')+ast.negations.map(()=>'not ').join('');
     const suffix=(ast.condition?` ${ast.condition.unless?'unless':'if'} ${ast.condition.predicate.value}`:'')+(ast.comment?` ${ast.comment.value}`:'');
     changes.push({start:ast.span.start.offset,end:ast.span.end.offset,text:prefix+printMigratedDeclaration({kind,parameters})+suffix});
    }
   }
   offset+=line.length;
  }
 }
 if(diagnostics.length)return {diagnostics};
 let text=page.text;for(const c of changes.sort((a,b)=>b.start-a.start))text=text.slice(0,c.start)+c.text+text.slice(c.end);
 return root==='https://rules.sudoku-sleuth.com/' && !header.value.metadata.negate ? migrateAllGiven({...page,text}) : {value:{...page,text},diagnostics:[]};
}

/** Recognise whole-case marking conventions after individual legacy lines migrate. */
function migrateAllGiven(page:PageSource):Result<PageSource> {
 const entries:{ast:DeclarationAST;kind:string;p:Record<string,unknown>}[]=[];
 for(const block of markdownBlocks(page.text).filter(b=>b.language==='rules')){
  let offset=block.offset;
  for(const line of block.text.split(/(?<=\n)/)){
   const parsed=parseDeclaration({file:page.file,text:line.trimEnd(),document:page.text,offset},kind=>{
    const url=kind.startsWith('https://')?kind:`https://rules.sudoku-sleuth.com/${kind}.md`;
    return {...parameterGrammar(declarationLibrary.parameters?.get(url)),line:declarationLibrary.lines?.get(url),opaque:!declarationLibrary.urls.has(url)};
   });
   const ast=parsed.value;
   if(ast){
    const kind=ast.kind.value.replace(/^https:\/\/rules\.sudoku-sleuth\.com\//,'').replace(/\.md$/,'');
    const p=declarationParameters(ast,'cells');for(const param of ast.parameters)p[param.name.value]=decoded(param.value);
    entries.push({ast,kind,p});
   }
   offset+=line.length;
  }
 }
 // Generated import IDs carry no setter meaning, but any use elsewhere keeps them alive.
 const disposableId=(e:typeof entries[number])=>{
  const id=e.ast.instance;if(!id)return true;
  const families=e.kind==='xv'?['pair','xv']:e.kind==='kropki'?['pair','kropki']:[e.kind];
  if(!families.some(kind=>new RegExp(`^${kind}-\\d+$`).test(id.value)))return false;
  const outside=page.text.slice(0,id.span.start.offset)+page.text.slice(id.span.end.offset);
  const escaped=id.value.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
  return !new RegExp(`(?<![\\p{L}\\p{M}0-9_.-])${escaped}(?![\\p{L}\\p{M}0-9_.-])`,'u').test(outside);
 };
 const plain=(e:typeof entries[number])=>disposableId(e)&&!e.ast.negations.length&&!e.ast.condition&&e.p.element===undefined;
 const labelChanges=entries.filter(e=>e.ast.instance&&disposableId(e)).map(e=>({start:e.ast.instance!.span.start.offset,end:e.ast.instance!.span.end.offset,text:''}));
 const names=['x','v','white','black'] as const;
 type Mark=typeof names[number];
 const marks:Record<Mark,string[][]>={x:[],v:[],white:[],black:[]};
 const marked=new Map<typeof entries[number],Mark>();
 for(const e of entries)if(plain(e)&&Array.isArray(e.p.cells)&&e.p.cells.length===2){
  const name=e.kind==='xv'?e.p.mark:e.kind==='kropki'?e.p.colour:undefined;
  if(names.includes(name as Mark)){marks[name as Mark].push(e.p.cells as string[]);marked.set(e,name as Mark);}
 }
 const key=(pairs:unknown)=>Array.isArray(pairs)&&pairs.every(p=>Array.isArray(p)&&p.length===2&&p.every(c=>typeof c==='string'))?JSON.stringify([...new Set(pairs.map(p=>JSON.stringify([...p].sort())))].sort()):undefined;
 const relationKind=(r:unknown):Mark|undefined=>{
  if(!r||typeof r!=='object')return;
  const p=r as Record<string,unknown>;if(Object.keys(p).some(k=>!['op','value'].includes(k)))return;
  return names.find(n=>p.op===(n==='x'||n==='v'?'sum':n==='white'?'difference':'ratio')&&(p.value===(n==='x'?10:n==='v'?5:n==='white'?1:2)||p.value===BigInt(n==='x'?10:n==='v'?5:n==='white'?1:2)));
 };
 const selected=new Set<Mark>(),removed=new Set<typeof entries[number]>(),diagnostics:Diagnostic[]=[];
 for(const e of entries)if(e.kind==='negative'&&plain(e)&&Object.keys(e.p).every(k=>['relations','except'].includes(k))&&Array.isArray(e.p.relations)&&e.p.relations.length){
  const kinds=e.p.relations.map(relationKind),known=kinds.filter((k):k is Mark=>k!==undefined&&marks[k].length>0);
  if(!known.length)continue;
  if(key(e.p.except)!==key(known.flatMap(k=>marks[k])))continue;
  if(kinds.some(k=>k===undefined||!marks[k].length)){
   diagnostics.push(diagnostic('E_CASE_PARAMETERS',e.ast.span,'Cannot migrate combined Negative: a relation has no marks of its own. Separate global rules and confirm each kind’s exceptions.'));continue;
  }
  known.forEach(k=>selected.add(k));removed.add(e);
 }
 if(diagnostics.length)return {diagnostics};
 for(const [e,k]of marked)if(selected.has(k))removed.add(e);
 const parameters:Record<string,unknown>=Object.fromEntries(names.filter(k=>selected.has(k)).map(k=>[k,marks[k]]));
 if(selected.size)parameters.allGiven=names.filter(k=>selected.has(k));
 const changes=[...removed].sort((a,b)=>a.ast.span.start.offset-b.ast.span.start.offset).map(e=>({start:e.ast.span.start.offset,end:e.ast.span.end.offset,text:e.ast.comment?.value??''}));
 if(changes.length)changes[0].text=printMigratedDeclaration({kind:'marked-pairs',parameters})+(changes[0].text?' '+changes[0].text:'');
 // Remove emptied declaration lines while retaining comments and unrelated spacing.
 for(const c of changes)if(!c.text){
  if(page.text.slice(c.end,c.end+2)==='\r\n')c.end+=2;
  else if(page.text[c.end]==='\n')c.end++;
 }
 changes.push(...labelChanges.filter(c=>!changes.some(other=>c.start>=other.start&&c.end<=other.end)).map(c=>({...c,end:c.end+(page.text[c.end]===' '?1:0)})));
 let text=page.text;for(const c of changes.sort((a,b)=>b.start-a.start))text=text.slice(0,c.start)+c.text+text.slice(c.end);
 return {value:{...page,text},diagnostics:[]};
}

import {publishedTemplates} from './published-templates.js';
import {groupPatterns,type Template,type TemplateGuard} from './templates.js';
import {normalise,compare as compareNormalForms,type BoardContext} from './semantics/index.js';
import {stringify} from 'yaml';

/** One rewrite canonicalise made: the template, the declarations it replaced and the ones it wrote. */
export interface CanonicalRewrite {template:string;replaced:string[];written:string[]}
/** A match a template proposed and canonicalise refused, with the reason. */
export interface CanonicalKept {template:string;declarations:string[];reason:string}
export interface Canonicalised {text:string;rewrites:CanonicalRewrite[];kept:CanonicalKept[]}

const libraryRoot='https://rules.sudoku-sleuth.com/';
const bareKind=(kind:string)=>kind.startsWith(libraryRoot)?kind.slice(libraryRoot.length).replace(/\.md$/,''):kind;
const bindingKinds=['clue-count','liar-cells','mapped-values','value-modifier'];
interface Edit {start:number;end:number;text:string}
interface Line {ast:DeclarationAST;kind:string;rule:string;p:Record<string,unknown>;text:string;lineStart:number;lineEnd:number;custom:boolean}
/** What a template proposes: the lines it replaces, the text edits and the declarations it writes, or why it already refuses. */
interface Match {lines:Line[];edits:Edit[];written:string[];refuse?:string}

function scanLines(page:PageSource,spellings:Map<string,string>):Line[] {
 const lines:Line[]=[];
 for(const block of markdownBlocks(page.text).filter(b=>b.language==='rules')){
  let offset=block.offset;
  for(const raw of block.text.split(/(?<=\n)/)){
   const parsed=parseDeclaration({file:page.file,text:raw.trimEnd(),document:page.text,offset},kind=>{
    const url=kind.startsWith('https://')?kind:`${libraryRoot}${kind}.md`,contract=declarationLibrary.parameters?.get(url);
    return {...parameterGrammar(contract),positional:contract?.positional,line:declarationLibrary.lines?.get(url),opaque:!declarationLibrary.urls.has(url)};
   });
   const ast=parsed.value;
   if(ast&&!parsed.diagnostics.length){
    const kind=bareKind(ast.kind.value);
    const p:Record<string,unknown>={};for(const param of ast.parameters)p[param.name.value]=decoded(param.value);
    lines.push({ast,kind,rule:spellings.get(kind)??kind,p,text:page.text.slice(ast.span.start.offset,ast.span.end.offset),lineStart:offset,lineEnd:offset+raw.length,custom:kind.startsWith('#')||!declarationLibrary.kinds.has(kind)});
   }
   offset+=raw.length;
  }
 }
 return lines;
}
const guards:Record<TemplateGuard,(lines:Line[])=>string|undefined>={
 'no-value-binding':lines=>lines.some(l=>bindingKinds.includes(l.rule)||l.custom)?'the file binds or defines values, so printed digits may differ from effective values':undefined,
};
const element=(l:Line)=>l.p.element===undefined?'':encode(l.p.element);
const label=(l:Line,page:PageSource)=>l.ast.instance?page.text.slice(l.ast.span.start.offset,(l.ast.negations[0]?.span.start??l.ast.kind.span.start).offset):'';
const wholeLine=(l:Line):Edit=>({start:l.lineStart,end:l.lineEnd,text:''});
/** A removed declaration's label must not be read anywhere else in the file. */
function strandedLabel(removed:Line[],page:PageSource):string|undefined {
 for(const l of removed){
  const id=l.ast.instance?.value;if(!id)continue;
  const outside=page.text.slice(0,l.ast.span.start.offset)+page.text.slice(l.ast.span.end.offset);
  const escaped=id.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
  if(new RegExp(`(?<![\\p{L}\\p{M}0-9_.-])${escaped}(?![\\p{L}\\p{M}0-9_.-])`,'u').test(outside))return `the label ${id} is used elsewhere in the file`;
 }
}
/** Connected groups of lines that share a cell. */
function touching(pieces:Line[]):Line[][] {
 const parent=pieces.map((_,i)=>i),find=(i:number):number=>parent[i]===i?i:parent[i]=find(parent[i]);
 const owner=new Map<string,number>();
 pieces.forEach((l,i)=>{for(const cell of new Set(l.ast.cells!.value as string[])){const j=owner.get(cell);if(j===undefined)owner.set(cell,i);else parent[find(i)]=find(j);}});
 const groups=new Map<number,Line[]>();
 pieces.forEach((l,i)=>groups.set(find(i),[...groups.get(find(i))??[],l]));
 return [...groups.values()];
}
const cellsOf=(l:Line)=>l.ast.cells!.value as string[];
const coordinates=(cell:string)=>cell.match(/^r(\d+)c(\d+)$/)!.slice(1).map(Number);
const settingsMatch=(t:Template,l:Line)=>Object.entries(t.settings!).every(([name,value])=>Object.hasOwn(l.p,name)&&encode(l.p[name])===encode(value));

/** The printed-digit setting, or any settings form a page lists: drop the settings the canonical form leaves to the default. */
function replaceSettings(t:Template,lines:Line[]):Match[] {
 return lines.filter(l=>(l.kind===t.kind||t.kind===t.rule&&t.spellings.includes(l.kind))&&settingsMatch(t,l)).map(l=>{
  const edits:Edit[]=[];
  for(const name of t.omit!){
   const parameter=l.ast.parameters.find(p=>p.name.value===name)!;
   let start=parameter.span.start.offset;
   while(start>l.ast.span.start.offset&&/\s/.test(l.text[start-1-l.ast.span.start.offset]))start--;
   edits.push({start,end:parameter.span.end.offset,text:''});
  }
  if(l.kind!==t.rule)edits.push({start:l.ast.kind.span.start.offset,end:l.ast.kind.span.end.offset,text:t.rule});
  const base=l.ast.span.start.offset;
  let written=l.text;for(const e of [...edits].sort((a,b)=>b.start-a.start))written=written.slice(0,e.start-base)+e.text+written.slice(e.end-base);
  return {lines:[l],edits,written:[written]};
 });
}
/** One `not pair` per orthogonal edge among a set of cells becomes one negative limited to those cells. */
function mergeNegatedPairs(t:Template,lines:Line[],page:PageSource):Match[] {
 const pieces=lines.filter(l=>l.rule==='pair'&&l.ast.negations.length===1&&!l.ast.condition&&!l.ast.comment&&cellsOf(l).length===2
  &&Object.hasOwn(l.p,'relation')&&l.ast.parameters.every(p=>['relation','element'].includes(p.name.value))
  &&coordinates(cellsOf(l)[0]).reduce((n,v,i)=>n+Math.abs(v-coordinates(cellsOf(l)[1])[i]),0)===1);
 const byRelation=new Map<string,Line[]>();
 for(const l of pieces)byRelation.set(encode(l.p.relation),[...byRelation.get(encode(l.p.relation))??[],l]);
 const matches:Match[]=[];
 for(const group of byRelation.values())for(const part of touching(group)){
  const edges=new Set(part.map(l=>JSON.stringify([...cellsOf(l)].sort())));
  if(edges.size<2)continue;
  const area=unique(part.flatMap(cellsOf)) as string[];
  const required=area.flatMap((a,i)=>area.slice(i+1).filter(b=>coordinates(a).reduce((n,v,k)=>n+Math.abs(v-coordinates(b)[k]),0)===1).map(b=>JSON.stringify([a,b].sort())));
  const refuse=new Set(part.map(element)).size>1?'the pairs are tied to different drawn elements'
   :required.some(e=>!edges.has(e))?'the pairs do not cover every orthogonal edge between their cells'
   :strandedLabel(part.slice(1),page);
  const first=part[0],extra=part.find(l=>l.p.element!==undefined)?.p.element;
  const written=label(first,page)+printMigratedDeclaration({kind:'negative',parameters:{relations:[first.p.relation],except:[],within:[area],...(extra===undefined?{}:{element:extra})}});
  matches.push({lines:part,edits:[{start:first.ast.span.start.offset,end:first.ast.span.end.offset,text:written},...part.slice(1).map(wholeLine)],written:[written],...(refuse?{refuse}:{})});
 }
 return matches;
}
/** Touching pieces of one drawn line, written as separate lines, become one line. */
function joinLinePieces(t:Template,lines:Line[],page:PageSource):Match[] {
 const pieces=lines.filter(l=>l.rule===t.rule&&!l.ast.negations.length&&!l.ast.condition&&!l.ast.comment&&cellsOf(l).length>=2
  &&!Object.hasOwn(l.p,'edges')&&(l.p.loop===undefined||l.p.loop===false));
 const bySettings=new Map<string,Line[]>();
 const settings=(l:Line)=>encode(Object.fromEntries(Object.entries(l.p).filter(([name])=>name!=='element'&&name!=='loop').sort(([a],[b])=>a<b?-1:1)))+(l.p.loop===undefined?'':'loop');
 for(const l of pieces)bySettings.set(settings(l),[...bySettings.get(settings(l))??[],l]);
 const matches:Match[]=[];
 for(const group of bySettings.values())for(const part of touching(group)){
  if(part.length<2)continue;
  const ends=new Map<string,Line[]>(),uses=new Map<string,number>();
  for(const l of part){
   const cells=cellsOf(l);
   cells.forEach(c=>uses.set(c,(uses.get(c)??0)+1));
   for(const c of new Set([cells[0],cells.at(-1)!]))ends.set(c,[...ends.get(c)??[],l]);
  }
  const joints=[...uses].filter(([,n])=>n>1).map(([c])=>c);
  const repeated=part.some(l=>new Set(cellsOf(l)).size!==cellsOf(l).length||cellsOf(l)[0]===cellsOf(l).at(-1));
  const shape=joints.some(c=>uses.get(c)!==2||ends.get(c)?.length!==2)||repeated?'the pieces branch, cross or repeat a cell'
   :joints.length!==part.length-1?'the pieces close a loop':undefined;
  const refuse=new Set(part.map(element)).size>1?'the pieces are tied to different drawn elements':shape??strandedLabel(part.slice(1),page);
  const written=[''],edits:Edit[]=[];
  if(!refuse){
   // Walk from the free end of one piece through each joint.
   const start=part.find(l=>[cellsOf(l)[0],cellsOf(l).at(-1)!].some(c=>uses.get(c)===1))!;
   const first=cellsOf(start);
   let path=uses.get(first[0])===1?[...first]:[...first].reverse();
   const used=new Set([start]);
   while(used.size<part.length){
    const next=part.find(l=>!used.has(l)&&(cellsOf(l)[0]===path.at(-1)||cellsOf(l).at(-1)===path.at(-1)))!;
    used.add(next);
    const cells=cellsOf(next);
    path=[...path,...(cells[0]===path.at(-1)?cells:[...cells].reverse()).slice(1)];
   }
   const base=part[0],at=base.ast.cells!.span;
   const text=base.text,offset=base.ast.span.start.offset;
   written[0]=text.slice(0,at.start.offset-offset)+path.join('-')+text.slice(at.end.offset-offset);
   edits.push({start:at.start.offset,end:at.end.offset,text:path.join('-')},...part.slice(1).map(wholeLine));
  }
  matches.push({lines:part,edits,written:refuse?[]:written,...(refuse?{refuse}:{})});
 }
 return matches;
}
const groupMatchers:Record<string,(t:Template,lines:Line[],page:PageSource)=>Match[]>={'join-line-pieces':joinLinePieces,'merge-negated-pairs':mergeNegatedPairs};
/** The group patterns that exist in code, by name. Published pages can only name these. */
export const groupPatternNames=Object.keys(groupMatchers).sort();
if(JSON.stringify(groupPatternNames)!==JSON.stringify(Object.keys(groupPatterns).sort()))throw Error('Group patterns in code and in templates.ts disagree.');

/**
 * Normalise the matched declarations and their rewrites on the case board, with everything they read
 * (header board, regions and givens, value bindings and custom definitions). Equal normal forms prove the rewrite.
 */
function prove(page:PageSource,metadata:Record<string,unknown>,board:BoardContext,lines:Line[],match:Match):string|undefined {
 const header=stringify({format:'open-rules',title:'Canonical proof',setter:'Open Rules',source:'',case:'',library:metadata.library,status:'read',
  ...Object.fromEntries(['board','givens','regions'].filter(k=>metadata[k]!==undefined).map(k=>[k,metadata[k]]))});
 const context=[...markdownBlocks(page.text).filter(b=>b.language==='custom-rules').map(b=>'```custom-rules\n'+b.text+(b.text.endsWith('\n')?'':'\n')+'```\n')];
 const bindings=lines.filter(l=>bindingKinds.includes(l.rule)||l.custom).map(l=>l.text);
 const file=(declarations:string[])=>({file:page.file,text:`---\n${header}---\n\n${context.join('\n')}\`\`\`rules\n${[...bindings,...declarations].join('\n')}\n\`\`\`\n`});
 const result=compareNormalForms(normalise(file(match.lines.map(l=>l.text)),board),normalise(file(match.written),board));
 if(result.status==='equivalent')return undefined;
 if(result.status==='invalid')return `a side could not be normalised: ${result.issues[0]?.message??'invalid'}`;
 if(result.uncovered.length)return `not proven, a declaration is not lowered: ${result.uncovered[0].declaration.reason}`;
 return `the normal forms differ: ${result.differences[0]?.message??'unresolved'}`;
}
/**
 * Rewrite a case file to the canonical rule of each equivalence set its rule pages list. Templates apply in the
 * alphabetical order of their canonical rule; each proposes, and only a rewrite whose old and new declarations
 * normalise to equal forms on the case board is written. Text outside the changed declarations is untouched.
 */
export function canonicalise(page:PageSource,board:BoardContext,templates:readonly Template[]=publishedTemplates):Canonicalised {
 const rewrites:CanonicalRewrite[]=[],kept:CanonicalKept[]=[];
 const header=readHeader(page);
 if(!header.value||header.value.metadata.library!==libraryRoot||header.value.metadata.negate!==undefined)return {text:page.text,rewrites,kept};
 const metadata=header.value.metadata;
 const spellings=new Map(templates.flatMap(t=>t.spellings.map(s=>[s,t.rule] as const)));
 const ordered=[...templates].sort((a,b)=>a.rule<b.rule?-1:a.rule>b.rule?1:a.form<b.form?-1:a.form>b.form?1:0);
 const seen=new Set<string>();
 let text=page.text;
 // A pass that changes nothing ends the loop; each match is tried once.
 for(let changed=true;changed;){
  changed=false;
  for(const t of ordered){
   const current={...page,text},lines=scanLines(current,spellings);
   const matches=t.pattern?groupMatchers[t.pattern](t,lines,current):replaceSettings(t,lines);
   const edits:Edit[]=[];
   for(const match of matches){
    const id=`${t.form}\n${match.lines.map(l=>l.text).join('\n')}`;
    if(seen.has(id))continue;
    seen.add(id);
    const reason=match.refuse??(t.guard?guards[t.guard](lines):undefined)??prove(current,metadata,board,lines,match);
    if(reason){kept.push({template:t.form,declarations:match.lines.map(l=>l.text),reason});continue;}
    edits.push(...match.edits);
    rewrites.push({template:t.form,replaced:match.lines.map(l=>l.text),written:match.written});
   }
   if(edits.length){for(const e of edits.sort((a,b)=>b.start-a.start))text=text.slice(0,e.start)+e.text+text.slice(e.end);changed=true;}
  }
 }
 return {text,rewrites,kept};
}
