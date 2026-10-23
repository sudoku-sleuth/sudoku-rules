import {type Expr,typeName} from "./language/ast.js";

/** Render an AST in the public formula notation, including expanded subtrees. */
export function formulaNotation(e:Expr):string {
 const c=e.children.map(formulaNotation), b=(e.binders??[]).map(b=>b.name).join(',');
 switch(e.kind){
  case 'name':case 'number':case 'boolean':return e.value!;
  case 'literal':return JSON.stringify(e.value);
  case 'binary':return `(${c[0]} ${e.value} ${c[1]})`;
  case 'unary':return e.value==='magnitude'?`|${c[0]}|`:e.value==='floor'?`⌊${c[0]}⌋`:`${e.value}(${c[0]})`;
  case 'call':return `${c[0]}(${c.slice(1).join(',')})`;
  case 'index':return `${c[0]}[${c[1]}]`;
  case 'member':return `${c[0]}.${e.value}`;
  case 'interval':return `[${c.join(',')}${e.inclusive?']':')'}`;
  case 'set':return `{${c.join(',')}}`;
  case 'conditional':return `if ${c[0]} then ${c[1]} else ${c[2]}`;
  case 'let':return `let ${b}=${c[0]}; ${c[1]}`;
  case 'lambda':return `λ${(e.binders??[]).map(b=>`${b.name}:${b.type?typeName(b.type):'number'}`).join(',')}:${c[0]}`;
  case 'image':return `${e.value==='list'?'⟨':'{'}${c[1]}:${b}∈${c[0]}${c[2]?`,${c[2]}`:''}${e.value==='list'?'⟩':'}'}`;
  case 'comprehension':return e.value==='list'?`⟨${c[0]}:${b}∈${c[1]}${c[2]?`,${c[2]}`:''}⟩`:`{${b}∈${c[0]}:${c[1]}}`;
  case 'quantifier':case 'aggregate':return `${e.value} ${e.hasDomain?b:(e.binders??[]).map(b=>`${b.name}:${b.type?typeName(b.type):'number'}`).join(',')}${e.hasDomain?`∈${c[0]}`:''}: ${c[e.hasDomain?1:0]}`;
 }
}

