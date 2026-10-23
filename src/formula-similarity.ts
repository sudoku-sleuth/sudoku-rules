import {foldFormula} from './formula-substitution.js';
import {readHeader} from './documents.js';
import {createHash} from "node:crypto";
import {formulaBlocks,type PageSource,type CompiledPage} from './library.js';
import {parseFormula,parsePrelude,parseType} from './language/parser.js';
import type {Expr} from './language/ast.js';

export type Layer = 'predicate' | 'block' | 'rule';
export interface FormulaRow {
 kind: string;
 name: string;
 layer: Layer;
 ownsFormula: boolean;
 normal: string;
 subtrees: Set<string>;
 notation: Map<string,Expr>;
 sizes: Map<string,number>;
 wrapper?: string;
 block?: string;
 settings?: Record<string,string>;
}

import {formulaNotation} from "./formula-notation.js";
export {formulaNotation} from "./formula-notation.js";

/** Depth-3 prelude inlining, alpha normalisation and subtree Jaccard comparison. */
export function formulaInventory(pages:PageSource[],depth=3,compiled?:Map<string,CompiledPage>,includePredicates=false):FormulaRow[]{
 // Expanded formulas repeat many subtrees. Hash each canonical structure once
 // per inventory, retaining the same SHA-256 identities and ordering.
 const fingerprints=new Map<string,string>();
 const fingerprint=(structure:string)=>{
  let key=fingerprints.get(structure);
  if(key===undefined){key=createHash('sha256').update(structure).digest('hex');fingerprints.set(structure,key);}
  return key;
 };
 const symbols=new Set<string>();
 const definitions=new Map<string,{params:string[];body:Expr}>();
 for(const block of formulaBlocks(pages.find(p=>p.file.endsWith('/predicates.md'))!)){
  const parsed=parsePrelude(block.text,block);if(!parsed.value)throw Error(JSON.stringify(parsed.diagnostics));
  for(const d of parsed.value){symbols.add(d.name);if(d.body)definitions.set(d.name,{params:d.parameters.map(p=>p.name),body:d.body});}
 }
 const substitute=(e:Expr,bindings:Map<string,Expr>):Expr=>{
  if(e.kind==='name'&&bindings.has(e.value!))return bindings.get(e.value!)!;
  const local=e.binders?.length?new Map(bindings):bindings;for(const b of e.binders??[])local.delete(b.name);
  const children=e.children.map(c=>substitute(c,local));
  return children.every((c,i)=>c===e.children[i])?e:{...e,children};
 };
 const inlined=new WeakMap<Expr,Map<number,Expr>>();
 const inline=(e:Expr,d:number):Expr=>{
  let byDepth=inlined.get(e);
  if(!byDepth){byDepth=new Map();inlined.set(e,byDepth);}
  const cached=byDepth.get(d);if(cached)return cached;
  const result=expand(e,d);byDepth.set(d,result);return result;
 };
 const expand=(e:Expr,d:number):Expr=>{
  if(e.kind==='let')return inline(substitute(e.children[1],new Map([[e.binders![0].name,e.children[0]]])),d);
  const def=e.kind==='call'&&e.children[0].kind==='name'?definitions.get(e.children[0].value!):undefined;
  if(d>0&&def&&def.params.length===e.children.length-1)return inline(substitute(def.body,new Map(def.params.map((p,i)=>[p,inline(e.children[i+1],d)]))),d-1);
  const children=e.children.map(c=>inline(c,d));
  return children.every((c,i)=>c===e.children[i])?e:{...e,children};
 };
 const associative=new Set(['and','or','+','*']), commutative=new Set([...associative,'=','!=','iff']);
 const make=(kind:string,name:string,layer:Layer,asts:Expr[],ownsFormula:boolean,domains:Record<string,unknown>={}):FormulaRow=>{
  const notation=new Map<string,Expr>(),sizes=new Map<string,number>();
  // Exact identity tracks separate input slots, independent of their types.
  // Similarity retains domain-shaped subtrees to compare related families.
  const parameters=new Map(Object.keys(domains).map((name,i)=>[name,`P:${i}`]));
  function canon(e:Expr,scope=new Map<string,string>(),counter={n:0},identities=false):{key:string;size:number}{
   if(e.kind==='name'){const key=scope.get(e.value!)??(symbols.has(e.value!)?`n:${e.value}`:identities?(parameters.get(e.value!)??`free:${e.value}`):`P:${JSON.stringify(domains[e.value!])??''}`);return {key,size:key.length};}
   const local=e.binders?.length?new Map(scope):scope;for(const b of e.binders??[])local.set(b.name,`b${counter.n++}`);
   const op=e.value??'',flattened:Expr[]=[];
   const flatten=(node:Expr)=>{if(e.kind==='binary'&&node.kind==='binary'&&node.value===op&&associative.has(op))node.children.forEach(flatten);else flattened.push(node);};
   e.children.forEach(flatten);const children=flattened.map(c=>canon(c,local,counter,identities));if(e.kind==='binary'&&commutative.has(op))children.sort((a,b)=>a.key.localeCompare(b.key));
   const head=`${e.kind}${op?':'+op:''}`;
   const size=head.length+2+Math.max(0,children.length-1)+children.reduce((n,c)=>n+c.size,0);
   // Fingerprint the structure rather than retaining exponentially repeated
   // expanded strings. Scores still use the same set of nontrivial subtrees.
   const key=fingerprint(`${head}(${children.map(c=>c.key).join(',')})`);
   if(!identities&&size>12){notation.set(key,e);sizes.set(key,size);}return {key,size};
  }
  const expanded=asts.map(e=>inline(e,depth));
  expanded.forEach(e=>canon(e));
  const normal=expanded.map(e=>canon(foldFormula(e),new Map(),{n:0},true).key).sort().join(' ∧∧ ');
  const root=asts.length===1?asts[0]:undefined;
  const wrapper=root?.kind==='call'&&root.children[0].kind==='name'?root.children[0].value:undefined;
  return {kind,name,layer,ownsFormula,normal,subtrees:new Set(notation.keys()),notation,sizes,wrapper};
 };
 const rows:FormulaRow[]=pages.filter(p=>/^kind:/m.test(p.text)&&(compiled?.has(/^kind: (.+)$/m.exec(p.text)![1])||!/^alias_of:/m.test(p.text))).map(p=>{
  const kind=/^kind: (.+)$/m.exec(p.text)![1],name=/^name: (.+)$/m.exec(p.text)![1];
  const asts=compiled?.get(kind)?.formulas.map(f=>f.ast)??formulaBlocks(p).map(b=>{const parsed=parseFormula(b.text,b);if(!parsed.value)throw Error(JSON.stringify(parsed.diagnostics));return parsed.value;});
  const metadata=readHeader(p).value!.metadata;
  const domains=Object.fromEntries(Object.entries(metadata.parameters??{}).map(([name,p])=>[name,parseType((p as {type:string}).type).value]));
  const row=make(kind,name,/^layer: block$/m.test(p.text)?'block':'rule',asts,!/^alias_of:/m.test(p.text),domains);
  if(typeof metadata.alias_of==='string'&&metadata.alias_bind){row.block=metadata.alias_of;row.settings={...metadata.alias_bind as Record<string,string>};}
  return row;
 });
 if(includePredicates)for(const [name,d]of definitions)rows.push(make(name,name,'predicate',[d.body],true,Object.fromEntries(d.params.map(p=>[p,undefined]))));
 return rows;
}
export function similarity(a:Set<string>,b:Set<string>){if(a.size>b.size)[a,b]=[b,a];let shared=0;for(const s of a)if(b.has(s))shared++;return shared/(a.size+b.size-shared||1);}
export const overlapKey=(a:Pick<FormulaRow,'layer'|'kind'>,b:Pick<FormulaRow,'layer'|'kind'>)=>[`${a.layer}:${a.kind}`,`${b.layer}:${b.kind}`].sort().join(' / ');
export function overlapPairs(rows:FormulaRow[],min=0.35){
 const pairs=[];
 for(let i=0;i<rows.length;i++)for(let j=i+1;j<rows.length;j++){
  const a=rows[i],b=rows[j];
  // Bound rules already reuse their block; audit their instantiated meanings
  // against other rules, but cross-layer ownership only where a formula lives.
  if(a.layer!==b.layer&&(!a.ownsFormula||!b.ownsFormula))continue;
  const wrapper=(a.layer==='block'&&b.layer==='predicate'&&a.wrapper===b.kind)||(b.layer==='block'&&a.layer==='predicate'&&b.wrapper===a.kind);
  const exact=a.normal===b.normal,score=exact||wrapper?1:similarity(a.subtrees,b.subtrees);
  if(score<min)continue;
  const smaller=a.subtrees.size<=b.subtrees.size?a.subtrees:b.subtrees;
  const larger=smaller===a.subtrees?b.subtrees:a.subtrees;
  let shared:string|undefined;
  for(const subtree of smaller)if(larger.has(subtree)&&(!shared||a.sizes.get(subtree)!>a.sizes.get(shared)!||a.sizes.get(subtree)===a.sizes.get(shared)&&subtree.localeCompare(shared)<0))shared=subtree;
  const sameBlock=!exact&&a.layer==='rule'&&b.layer==='rule'&&!!a.block&&a.block===b.block;
  const settings=sameBlock?Object.fromEntries([...new Set([...Object.keys(a.settings??{}),...Object.keys(b.settings??{})])].sort().filter(k=>k!=='parameterDomains'&&a.settings?.[k]!==b.settings?.[k]).map(k=>[k,{a:a.settings?.[k],b:b.settings?.[k]}])):undefined;
  pairs.push({sameBlock,block:sameBlock?a.block:undefined,settings,key:overlapKey(a,b),a:{layer:a.layer,kind:a.kind,name:a.name},b:{layer:b.layer,kind:b.kind,name:b.name},score,exact,wrapper,shared:shared?formulaNotation(a.notation.get(shared)!):wrapper?`${a.layer==='block'?a.wrapper:b.wrapper}(…)`:''});
 }
 return pairs.sort((a,b)=>b.score-a.score||a.key.localeCompare(b.key));
}
