import { declarationParameters, type DeclarationAST, type DeclarationValue } from '../declarations.js';
import { parameterGrammar, type CaseParameters } from '../case-values.js';
import { compare as compareExact } from '../language/exact.js';
import { numericInput } from './interpreter.js';

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
 return data;
}
