import { declarationParameters, type DeclarationAST, type DeclarationValue } from '../declarations.js';
import { parameterGrammar, type CaseParameters } from '../case-values.js';
import { compare as compareExact } from '../language/exact.js';
import type { Type } from '../language/ast.js';
import { cellOrder } from '../semantics/board.js';
import type { Cell } from '../semantics/types.js';
import { numericInput } from './interpreter.js';

const isCell=(type:Type,types:Record<string,Type>,depth=0):boolean=>{const alias=Object.hasOwn(types,type.name)?types[type.name]:undefined;return alias&&depth<128?isCell(alias,types,depth+1):type.name==='cell';};
const sequences=['list','path','collection'];
/**
 * Reads every set of cells below the top level of a value as a set: its distinct cells in row-then-column order.
 * The declared type drives it, never the shape of the value. Lists keep their order and repeats. A parameter that is itself
 * a set is left as written, as the rules that read it already treat it as a set.
 */
function nestedSets(value:unknown,type:Type,types:Record<string,Type>,top:boolean,depth=0):unknown{
 if(depth>128||value===undefined||value===null)return value;
 const alias=Object.hasOwn(types,type.name)?types[type.name]:undefined;
 if(alias)return nestedSets(value,alias,types,top,depth+1);
 const args=type.args??[];
 if(type.name==='optional'&&args[0])return nestedSets(value,args[0],types,top,depth+1);
 if(type.name==='set'&&args[0]&&Array.isArray(value)){
  const item=args[0];
  if(isCell(item,types))return top?value:[...new Set(value as Cell[])].sort(cellOrder);
  return value.map(v=>nestedSets(v,item,types,false,depth+1));
 }
 if(sequences.includes(type.name)&&args[0]&&Array.isArray(value))return value.map(v=>nestedSets(v,args[0],types,false,depth+1));
 if(type.name==='record'&&type.fields&&value&&typeof value==='object'&&!Array.isArray(value))
  return Object.fromEntries(Object.entries(value).map(([k,v])=>[k,Object.hasOwn(type.fields!,k)?nestedSets(v,type.fields![k],types,false,depth+1):v]));
 return value;
}

/** The values a declaration supplies for a definition's parameters, with the contract's defaults filled in. */
export function instanceInputs(ast:DeclarationAST, contract:CaseParameters):Record<string,unknown>{
 const data=declarationParameters(ast,parameterGrammar(contract).primary);
 for(const [name,p] of Object.entries(contract.parameters))if(data[name]===undefined&&Object.hasOwn(p,'default'))data[name]=p.default;
 // Preserve authored numeric precision before the decoded JSON number loses it.
 const sourceValue=(node:DeclarationValue):unknown=>{
  if(/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/.test(node.raw)){
   const n=numericInput(node.raw),decoded=Number(node.raw);
   return Number.isFinite(decoded)&&compareExact(n,numericInput(decoded))===0?decoded:n;
  }
  if(node.children)return node.children.map(sourceValue);
  if(node.fields)return Object.fromEntries(node.fields.map(f=>[f.name.value,sourceValue(f.value)]));
  return node.value;
 };
 for(const parameter of ast.parameters)data[parameter.name.value]=sourceValue(parameter.value);
 for(const [name,p] of Object.entries(contract.parameters))if(p.type&&data[name]!==undefined)data[name]=nestedSets(data[name],p.type,contract.types,true);
 return data;
}
