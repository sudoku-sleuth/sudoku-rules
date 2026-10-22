// Test-only bounded interpreter for meaning regression fragments, not a public evaluator.
import {arithmetic,compare,exact,floor,printExact,type Expr,type Rational,type CheckedPrelude} from "../../src";
import type {Type} from "../../src";
type Value=Rational|string|boolean|undefined|Value[]|Group|Callable|{[key:string]:Value};
interface Group {group:Value[]}
type Callable=(...args:Value[])=>Value;
export interface Fragment {rows?:number;cols?:number;faces:Record<string,number>;values?:Record<string,number>;alphabet?:number[];regions?:string[][];parameters:Record<string,unknown>;givens?:Record<string,number>;shaded?:string[];routeAnswers?:Record<string,string[]>;routeClosures?:Record<string,boolean>;networkAnswers?:Record<string,string[][]>;partitionAnswers?:Record<string,string[][]>;selectionAnswers?:Record<string,string[]>;choiceAnswers?:Record<string,boolean>;assignmentAnswers?:Record<string,number[]>;valueAnswers?:Record<string,Record<string,number>>;symbolAnswers?:Record<string,Record<string,number[]>>;witnesses?:Record<string,unknown[]>}
const number=(value:Value):Rational=>{if(!value||typeof value!=="object"||!("numerator" in value))throw Error("Expected exact number");return value as Rational;};
const truth=(value:Value):boolean=>{if(typeof value!=="boolean")throw Error("Expected Boolean");return value;};
const members=(value:Value):Value[]=>{if(Array.isArray(value))return value;if(value&&typeof value==="object"&&"group" in value)return (value as Group).group;throw Error("Expected collection");};
const key=(value:Value):string=>{if(value&&typeof value==="object"&&"numerator"in value)return printExact(number(value));if(Array.isArray(value))return `[${value.map(key).join(",")}]`;if(value&&typeof value==="object"&&"group"in value)return `{${members(value).map(key).sort().join(",")}}`;return JSON.stringify(value);};
const group=(items:Value[]):Group=>({group:[...new Map(items.map(item=>[key(item),item])).values()]});
function typed(value:unknown,type:Type,prelude:CheckedPrelude):Value{
 if(prelude.environment.types?.[type.name])return typed(value,prelude.environment.types[type.name],prelude);
 if(["number","position","value","digit"].includes(type.name))return exact(String(value));
 if(type.name==="set")return group((value as unknown[]).map(item=>typed(item,type.args![0],prelude)));
 if(["list","path","collection"].includes(type.name))return (value as unknown[]).map(item=>typed(item,type.args![0],prelude));
 if(type.name==="optional")return value===undefined?undefined:typed(value,type.args![0],prelude);
 if(type.name==="record")return Object.fromEntries(Object.entries(type.fields!).map(([name,t])=>[name,typed((value as Record<string,unknown>)[name],t,prelude)]));
 return value as Value;
}
export function fragmentVerdict(ast:Expr,prelude:CheckedPrelude,parameters:{name:string;type:Type}[],fragment:Fragment):boolean{
 const cells=Object.keys(fragment.faces);if(cells.length>81)throw Error("Fragment limit: 81 cells");
 const env:Record<string,Value>={C:group(cells),𝔄:(fragment.alphabet??[1,2,3,4,5,6,7,8,9]).map(value=>exact(String(value))),Regions:group((fragment.regions??[]).map(region=>group(region))),H:group(fragment.shaded??[]),rows:exact(String(fragment.rows??9)),cols:exact(String(fragment.cols??9)),ℤ:group(Array.from({length:33},(_,i)=>exact(String(i-16)))),ValuedRuleMeanings:[true]};
 for(const parameter of parameters)env[parameter.name]=typed(fragment.parameters[parameter.name],parameter.type,prelude);
 const primitives:Record<string,Callable>={
  face:c=>exact(String(fragment.faces[String(c)])),effective:c=>exact(String((fragment.values??fragment.faces)[String(c)])),toValue:x=>x,
  selectionAnswer:name=>{const x=fragment.selectionAnswers?.[String(name)];if(x===undefined)throw Error(`Missing shared selection ${name}`);return group(x);},
  choiceAnswer:name=>{const x=fragment.choiceAnswers?.[String(name)];if(x===undefined)throw Error(`Missing shared choice ${name}`);return x;},
  assignmentAnswer:name=>{const x=fragment.assignmentAnswers?.[String(name)];if(x===undefined)throw Error(`Missing shared assignment ${name}`);return x.map(n=>exact(String(n)));},
  valueAnswer:(name,c)=>{const x=fragment.valueAnswers?.[String(name)]?.[String(c)];if(x===undefined)throw Error(`Missing shared value ${name}/${c}`);return exact(String(x));},
  symbolAnswer:(name,c)=>{const x=fragment.symbolAnswers?.[String(name)]?.[String(c)];if(x===undefined)throw Error(`Missing shared symbols ${name}/${c}`);return x.map(n=>exact(String(n)));},
  orderedCells:S=>members(S).sort((a,b)=>cells.indexOf(String(a))-cells.indexOf(String(b))),
  absent:()=>undefined,
  weightedOperand:(operand,coefficient,power)=>({operand:operand!,coefficient:coefficient!,power:power!}),
  relationSpec:(op,n)=>({op:op!,value:n!}),
  routeClosed:name=>fragment.routeClosures?.[String(name)] ?? false,
  routeAnswer:name=>{const value=fragment.routeAnswers?.[String(name)];if(!value)throw Error(`Missing shared route ${name}`);return value;},
  networkAnswer:name=>{const value=fragment.networkAnswers?.[String(name)];if(!value)throw Error(`Missing shared network ${name}`);return value;},
  partitionAnswer:name=>{const value=fragment.partitionAnswers?.[String(name)];if(!value)throw Error(`Missing shared partition ${name}`);return group(value.map(region=>group(region)));},
  connected:input=>{
   const items=members(input);if(!items.length)return false;
   const explicit=Array.isArray(items[0]);
   const vertices=explicit?items.flatMap(members):items;
   const es=explicit?items.map(members):vertices.flatMap(a=>vertices.filter(b=>{
    const coords=(c:Value)=>/^r(\d+)c(\d+)$/.exec(String(c))!.slice(1).map(Number);
    const [r,c]=coords(a),[s,d]=coords(b);return Math.abs(r-s)+Math.abs(c-d)===1;
   }).map(b=>[a,b]));
   if(!vertices.length)return false;
   const reached=new Set([key(vertices[0])]);let changed=true;
   while(changed){changed=false;for(const [a,b] of es)if(reached.has(key(a))!==reached.has(key(b))){reached.add(key(a));reached.add(key(b));changed=true;}}
   return vertices.every(v=>reached.has(key(v)));
  },
  letterCount:expressions=>exact(String(new Set(members(expressions).map(e=>(e as {name:string}).name)).size)),
  defined:(e,letters)=>{if((e as {op:string}).op!=="letter")throw Error("Unsupported fixture expression");return members(letters).length===1;},
  eval:(e,letters)=>{if((e as {op:string}).op!=="letter")throw Error("Unsupported fixture expression");return members(letters)[0];},
  cellIndex:c=>exact(String(cells.indexOf(String(c)))),
  row:c=>exact(String(Number(/r(\d+)/.exec(String(c))![1])-1)),col:c=>exact(String(Number(/c(\d+)/.exec(String(c))![1])-1)),
  boardCell:(r,c)=>`r${number(r).numerator+1n}c${number(c).numerator+1n}`,
  givenDigit:c=>fragment.givens?.[String(c)]===undefined?undefined:exact(String(fragment.givens[String(c)])),
  cellLists:(s,n)=>{const size=Number(number(n).numerator);if(size<0||size>8)throw Error("Fragment list length limit");let lists:Value[][]=[[]];for(let i=0;i<size;i++)lists=lists.flatMap(p=>members(s).map(c=>[...p,c]));return group(lists);},
  present:x=>x!==undefined,unwrap:x=>{if(x===undefined)throw Error("Missing optional value");return x;},
  alphabetPosition:d=>exact(String(members(env.𝔄).findIndex(item=>key(item)===key(d)))),
  minimumDigit:s=>members(s).reduce((a,b)=>compare(number(a),number(b))<0?a:b),maximumDigit:s=>members(s).reduce((a,b)=>compare(number(a),number(b))>0?a:b),
  minimumValue:s=>members(s).reduce((a,b)=>compare(number(a),number(b))<0?a:b),maximumValue:s=>members(s).reduce((a,b)=>compare(number(a),number(b))>0?a:b),
 };
 let budget=2000000;
 function evaluate(node:Expr,scope:Record<string,Value>):Value{
  if(--budget<0)throw Error("Fragment evaluation budget exceeded");
  const child=(i:number)=>evaluate(node.children[i],scope);
  switch(node.kind){
   case "number":return exact(node.value!);case "literal":return node.value;case "boolean":return node.value==="true";
   case "name":{
    if(Object.hasOwn(scope,node.value!))return scope[node.value!];
    const term=prelude.environment.terms[node.value!];if(!term)throw Error(`Unknown fragment name ${node.value}`);
    return (...args:Value[])=>{
     if(term.kind==="primitive"){const primitive=primitives[term.name];if(!primitive)throw Error(`Unsupported fragment primitive ${term.name}`);return primitive(...args);}
     // Library terms see their own arguments and global inputs, never caller locals.
     return evaluate(term.body!,{...env,...Object.fromEntries(term.parameters.map((p,i)=>[p.name,args[i]]))});
    };
   }
   case "call":{const fn=child(0);if(typeof fn!=="function")throw Error("Expected function");return fn(...node.children.slice(1).map(item=>evaluate(item,scope)));}
   case "member":return (child(0) as Record<string,Value>)[node.value!];
   case "index":{const list=members(child(0));const position=number(child(1));if(position.denominator!==1n||position.numerator<0n||position.numerator>=BigInt(list.length))throw Error("Invalid fragment position");return list[Number(position.numerator)];}
   case "unary":{
    const value=child(0);if(node.value==="not")return !truth(value);
    if(node.value==="magnitude"){if(Array.isArray(value)||value&&typeof value==="object"&&"group"in value)return exact(String(members(value).length));const n=number(value);return {...n,numerator:n.numerator<0n?-n.numerator:n.numerator};}
    if(node.value==="floor")return exact(String(floor(number(value))));
    return node.value==="-"?arithmetic("-",exact("0"),number(value)):value;
   }
   case "binary":{
    const left=child(0);
    if(node.value==="and")return truth(left)&&truth(child(1));if(node.value==="or")return truth(left)||truth(child(1));if(node.value==="implies")return !truth(left)||truth(child(1));
    const right=child(1);if(node.value==="iff")return truth(left)===truth(right);
    if(node.value==="="||node.value==="!=")return (key(left)===key(right))===(node.value==="=");
    if(["in","notin"].includes(node.value!))return members(right).some(item=>key(item)===key(left))===(node.value==="in");
    if(node.value==="subset")return members(left).every(item=>members(right).some(other=>key(item)===key(other)));
    if(node.value==="intersect")return group(members(left).filter(item=>members(right).some(other=>key(item)===key(other))));
    if(node.value==="union")return group([...members(left),...members(right)]);
    if(["<","<=",">",">="].includes(node.value!)){const result=compare(number(left),number(right));return node.value==="<"?result<0:node.value==="<="?result<=0:node.value===">"?result>0:result>=0;}
    return arithmetic(node.value!,number(left),number(right));
   }
   case "set":return group(node.children.map(item=>evaluate(item,scope)));
   case "interval":{const a=number(child(0)),b=number(child(1));if(a.denominator!==1n||b.denominator!==1n||b.numerator-a.numerator>32n)throw Error("Fragment interval limit");const values:Value[]=[];for(let i=a.numerator;i<b.numerator+(node.inclusive?1n:0n);i++)values.push(exact(String(i)));return group(values);}
   case "lambda":return (...args:Value[])=>evaluate(node.children[0],{...scope,...Object.fromEntries(node.binders!.map((b,i)=>[b.name,args[i]]))});
   case "conditional":return truth(child(0))?child(1):child(2);
   case "let":return evaluate(node.children[1],{...scope,[node.binders![0].name]:child(0)});
   case "image":case "comprehension":{const values=members(child(0));const result:Value[]=[];for(const item of values){const local={...scope,[node.binders![0].name]:item};if(node.kind==="comprehension"){if(truth(evaluate(node.children[1],local)))result.push(item);}else if(!node.children[2]||truth(evaluate(node.children[2],local)))result.push(evaluate(node.children[1],local));}return node.value==="list"?result:group(result);}
   case "aggregate":case "quantifier":{
    const domain=node.hasDomain?members(child(0)):undefined;
    const choices=(name:string,type:Type):Value[]=>{if(/^boundAlias\d+$/.test(name) && type.name==="set" && type.args?.[0].name==="set" && fragment.witnesses?.P)return fragment.witnesses.P.map(value=>typed(value,type,prelude));if(Object.hasOwn(fragment.witnesses??{},name))return fragment.witnesses![name].map(value=>typed(value,type,prelude));if(type.name!=="set"||type.args?.[0].name!=="cell")throw Error("Unsupported fragment witness type");return Array.from({length:2**cells.length},(_,mask)=>group(cells.filter((_,i)=>mask&(1<<i))));};
    function* assignments(i:number,local:Record<string,Value>):Generator<Record<string,Value>>{if(i===node.binders!.length){yield local;return;}const binder=node.binders![i];for(const item of domain??choices(binder.name,binder.type!))yield* assignments(i+1,{...local,[binder.name]:item});}
    const body=node.children[node.hasDomain?1:0];
    if(node.kind==="quantifier"){for(const local of assignments(0,scope)){const verdict=truth(evaluate(body,local));if(node.value==="exists"&&verdict)return true;if(node.value==="forall"&&!verdict)return false;}return node.value==="forall";}
    let result=exact(node.value==="product"?"1":"0");for(const local of assignments(0,scope)){const value=evaluate(body,local);if(node.value==="count"){if(truth(value))result=arithmetic("+",result,exact("1"));}else result=arithmetic(node.value==="product"?"*":"+",result,number(value));}return result;
   }
  }
 }
 return truth(evaluate(ast,env));
}
