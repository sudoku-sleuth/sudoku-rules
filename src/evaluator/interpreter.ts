// Exact portable interpreter for checked finite formulas.
import {arithmetic,compare,exact,floor,printExact,rational,type Rational} from "../language/exact.js";
import type {Expr,Type} from "../language/ast.js";
import type {CheckedPrelude} from "../language/checker.js";
export type NumericInput=number|string|Rational;
export function numericInput(value:unknown):Rational{
 if(value&&typeof value==='object'&&'numerator' in value&&'denominator' in value){const r=value as Rational;return rational(r.numerator,r.denominator);}
 const text=String(value);const match=/^([+-]?)(\d*)(?:\.(\d*))?(?:[eE]([+-]?\d+))?$/.exec(text);
 if(!match||!match[2]&&!match[3])throw new RangeError('Supply a finite numeric value');
 const exponent=Number(match[4]??0);if(!Number.isSafeInteger(exponent)||Math.abs(exponent)>4096)throw new EvaluationLimit('Numeric exponent exceeds 4096');
 const digits=(match[2]||'0')+(match[3]??''),scale=(match[3]?.length??0)-exponent;
 if(digits.length>4096)throw new EvaluationLimit('Numeric literal exceeds 4096 digits');
 const numerator=BigInt(digits)*(match[1]==='-'?-1n:1n);
 return scale>=0?rational(numerator,10n**BigInt(scale)):rational(numerator*10n**BigInt(-scale));
}
export class MissingValue extends Error {}
export class EvaluationLimit extends Error {}

class Lazy { constructor(public read:()=>Value){} }
type Value=Lazy|Rational|string|boolean|undefined|Value[]|Group|Callable|{[key:string]:Value};
interface Group {group:Value[]}
type Callable=(...args:Value[])=>Value;
export interface StepBudget { remaining:number }
export interface Fragment {budget?:StepBudget;cells?:string[];definitionKind?:string;readCells?:Set<string>;valuedMeanings?:()=>boolean[];shadeAnswers?:Record<string,boolean>;clueTruth?:(clue:unknown)=>boolean;rows?:number;cols?:number;faces:Record<string,number>;values?:Record<string,NumericInput>;alphabet?:number[];regions?:string[][];parameters:Record<string,unknown>;givens?:Record<string,number>;shaded?:string[];routeAnswers?:Record<string,string[]>;routeClosures?:Record<string,boolean>;networkAnswers?:Record<string,string[][]>;partitionAnswers?:Record<string,string[][]>;selectionAnswers?:Record<string,string[]>;choiceAnswers?:Record<string,boolean>;assignmentAnswers?:Record<string,number[]>;valueAnswers?:Record<string,Record<string,NumericInput>>;symbolAnswers?:Record<string,Record<string,number[]>>}
const number=(value:Value):Rational=>{if(!value||typeof value!=="object"||!("numerator" in value))throw Error("Expected exact number");return value as Rational;};
const truth=(value:Value):boolean=>{if(typeof value!=="boolean")throw Error("Expected Boolean");return value;};
const members=(value:Value):Value[]=>{if(Array.isArray(value))return value;if(value&&typeof value==="object"&&"group" in value)return (value as Group).group;throw Error("Expected collection");};
const key=(value:Value):string=>{
 if(value&&typeof value==='object'&&'numerator' in value)return printExact(number(value));
 if(Array.isArray(value))return `[${value.map(key).join(',')}]`;
 if(value&&typeof value==='object'&&'group' in value)return `{${members(value).map(key).sort().join(',')}}`;
 if(value&&typeof value==='object')return '{'+Object.entries(value).filter(([,v])=>v!==undefined).sort(([a],[b])=>a<b?-1:a>b?1:0).map(([k,v])=>JSON.stringify(k)+':'+key(v)).join(',')+'}';
 return JSON.stringify(value)??'absent';
};
const group=(items:Value[]):Group=>({group:[...new Map(items.map(item=>[key(item),item])).values()]});
function typed(value:unknown,type:Type,prelude:CheckedPrelude):Value{
 if(prelude.environment.types?.[type.name])return typed(value,prelude.environment.types[type.name],prelude);
 if(["number","position","value","digit"].includes(type.name))return numericInput(value);
 if(type.name==="set")return group((value as unknown[]).map(item=>typed(item,type.args![0],prelude)));
 if(["list","path","collection"].includes(type.name))return (value as unknown[]).map(item=>typed(item,type.args![0],prelude));
 if(type.name==="optional")return value===undefined?undefined:typed(value,type.args![0],prelude);
 if(type.name==="record")return Object.fromEntries(Object.entries(type.fields!).map(([name,t])=>[name,typed((value as Record<string,unknown>)[name],t,prelude)]));
 return value as Value;
}
export function formulaVerdict(ast:Expr,prelude:CheckedPrelude,parameters:{name:string;type:Type}[],fragment:Fragment):boolean{
 const cells=fragment.cells??Object.keys(fragment.faces);
 const env:Record<string,Value>={C:group(cells),𝔄:(fragment.alphabet??[1,2,3,4,5,6,7,8,9]).map(value=>exact(String(value))),Regions:group((fragment.regions??[]).map(region=>group(region))),H:group(fragment.shaded??[]),rows:exact(String(fragment.rows??9)),cols:exact(String(fragment.cols??9)),ValuedRuleMeanings:[true]};
 for(const parameter of parameters)env[parameter.name]=typed(fragment.parameters[parameter.name],parameter.type,prelude);
 const integer=(v:Value):bigint|undefined=>{const n=number(v);return n.denominator===1n?n.numerator:undefined;};
 const divides=(a:Value,b:Value):boolean=>{const x=integer(a),y=integer(b);return x!==undefined&&y!==undefined&&x!==0n&&y%x===0n;};
 const numericProperty:Callable=(value,property,argument)=>{
  const n=integer(value),a=integer(argument);if(n===undefined||a===undefined)return false;
  if(property==="divisible")return divides(argument,value);
  if(property==="places")return a>=1n&&n>=0n&&BigInt(n.toString().length)===a;
  if(property==="prime"||property==="composite"){
   if(n<=1n)return false;let composite=false;
   for(let d=2n;d*d<=n;d=d===2n?3n:d+2n){if(--budget.remaining<0)throw new EvaluationLimit("Primality evaluation budget exceeded");if(n%d===0n){composite=true;break;}}
   return composite===(property==="composite");
  }
  if(property==="power"){
   if(a<1n||n<0n)return false;if(n<=1n||a===1n)return true;
   // A base >=2 has at least exponent+1 binary digits in its power.
   if(a>BigInt(n.toString(2).length))return false;
   const power=(base:bigint):bigint=>{let v=1n;for(let i=0n;i<a;i++){v*=base;if(v>n)break;}return v;};
   let lo=0n,hi=n;while(lo<=hi){if(--budget.remaining<0)throw new EvaluationLimit("Power evaluation budget exceeded");const mid=(lo+hi)/2n,v=power(mid);if(v===n)return true;if(v<n)lo=mid+1n;else hi=mid-1n;}return false;
  }
  throw new EvaluationLimit("Unknown numeric property");
 };
 const primitives:Record<string,Callable>={
  clueHolds:q=>{if(!fragment.clueTruth)throw Error("Supply clue truth for this fragment");return fragment.clueTruth(q);},
  face:c=>{fragment.readCells?.add(String(c));const x=fragment.faces[String(c)];if(x===undefined)throw new MissingValue(String(c));return numericInput(x);},effective:c=>{fragment.readCells?.add(String(c));const x=(fragment.values??fragment.faces)[String(c)];if(x===undefined)throw new MissingValue(String(c));return numericInput(x);},toValue:x=>x,
  selectionAnswer:name=>{const x=fragment.selectionAnswers?.[String(name)];if(x===undefined)throw new MissingValue(`Missing shared selection ${name}`);return group(x);},
  choiceAnswer:name=>{const x=fragment.choiceAnswers?.[String(name)];if(x===undefined)throw new MissingValue(`Missing shared choice ${name}`);return x;},
  assignmentAnswer:name=>{const x=fragment.assignmentAnswers?.[String(name)];if(x===undefined)throw new MissingValue(`Missing shared assignment ${name}`);return x.map(n=>exact(String(n)));},
  valueAnswer:(name,c)=>{if(name==="D")return primitives.face(c);if(name==="V")return primitives.effective(c);const x=fragment.valueAnswers?.[String(name)]?.[String(c)];if(x===undefined)throw new MissingValue(`Missing shared value ${name}/${c}`);return numericInput(x);},
  symbolAnswer:(name,c)=>{const x=fragment.symbolAnswers?.[String(name)]?.[String(c)];if(x===undefined)throw new MissingValue(`Missing shared symbols ${name}/${c}`);return x.map(n=>exact(String(n)));},
  orderedCells:S=>Array.isArray(S)?[...S]:[...members(S)].sort((a,b)=>cells.indexOf(String(a))-cells.indexOf(String(b))),
  absent:()=>undefined,
  some:x=>x,
  prefixSelection:(stop,target,crusts,include)=>({stop:stop!,target:target!,crusts:crusts!,include:include!}),
  lookupQuery:(cells,index,target,channel,relation)=>({cells:cells!,index:index!,target:target!,channel:channel!,relation:relation!}),
  aggregateOperand:(cells,channel,operation,repeats)=>({cells:cells!,channel:channel!,operation:operation!,repeats:repeats!}),
  prefixOperand:(cells,channel,stop,target,crusts,include)=>({cells:cells!,channel:channel!,operation:"sum",repeats:true,stop:stop!,target,crusts:crusts!,include:include!}),
  weightedOperand:(operand,coefficient,power)=>({operand:operand!,coefficient:coefficient!,power:power!}),
  relationSpec:(op,n)=>({op:op!,value:n!}),
  routeClosed:name=>{const x=fragment.routeClosures?.[String(name)];if(x===undefined)throw new MissingValue(`Route closure ${name}`);return x;},
  routeAnswer:name=>{const value=fragment.routeAnswers?.[String(name)];if(!value)throw new MissingValue(`Missing shared route ${name}`);return value;},
  networkAnswer:name=>{const value=fragment.networkAnswers?.[String(name)];if(!value)throw new MissingValue(`Missing shared network ${name}`);return value;},
  partitionAnswer:name=>{const value=fragment.partitionAnswers?.[String(name)];if(!value)throw new MissingValue(`Missing shared partition ${name}`);return group(value.map(region=>group(region)));},
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
  letterCount:expressions=>{const names=new Set<string>();const visit=(e:Value):void=>{const x=e as Record<string,Value>;if(x.op==="letter")names.add(String(x.name));else if(x.op!=="number"){visit(x.left);visit(x.right);}};members(expressions).forEach(visit);return exact(String(names.size));},
  defined:(e,letters)=>{try{expression(e,members(letters));return true;}catch(error){if(error instanceof UndefinedExpression)return false;throw error;}},
  eval:(e,letters)=>expression(e,members(letters)),
  cellIndex:c=>exact(String(cells.indexOf(String(c)))),
  row:c=>exact(String(Number(/r(\d+)/.exec(String(c))![1])-1)),col:c=>exact(String(Number(/c(\d+)/.exec(String(c))![1])-1)),
  boardCell:(r,c)=>`r${number(r).numerator+1n}c${number(c).numerator+1n}`,
  givenDigit:c=>fragment.givens?.[String(c)]===undefined?undefined:exact(String(fragment.givens[String(c)])),
  cellLists:(s,n)=>{const size=Number(number(n).numerator);if(size<0||Math.max(1,size)*members(s).length**size>100000||size>100000)throw new EvaluationLimit("Cell list expansion exceeds 100000");if(members(s).length===0&&size>0)return group([]);if(members(s).length===1)return group([Array.from({length:size},()=>members(s)[0])]);let lists:Value[][]=[[]];for(let i=0;i<size;i++)lists=lists.flatMap(p=>members(s).map(c=>[...p,c]));return group(lists);},
  present:x=>x!==undefined,unwrap:x=>{if(x===undefined)throw Error("Missing optional value");return x;},
  alphabetPosition:d=>exact(String(members(env.𝔄).findIndex(item=>key(item)===key(d)))),
  minimumDigit:s=>members(s).reduce((a,b)=>compare(number(a),number(b))<0?a:b),maximumDigit:s=>members(s).reduce((a,b)=>compare(number(a),number(b))>0?a:b),
  minimumValue:s=>members(s).reduce((a,b)=>compare(number(a),number(b))<0?a:b),maximumValue:s=>members(s).reduce((a,b)=>compare(number(a),number(b))>0?a:b),
 };
 const budget=fragment.budget??{remaining:100_000};
 const letters=new Set<string>();
 const findLetters=(value:unknown):void=>{if(!value||typeof value!=='object')return;if('op' in value&&(value as {op:unknown}).op==='letter'&&'name' in value)letters.add(String(value.name));else Object.values(value).forEach(findLetters);};
 findLetters(fragment.parameters);const letterNames=[...letters].sort();
 class UndefinedExpression extends Error {}
 function expression(e:Value,letters:Value[]):Rational{
  if(--budget.remaining<0)throw new EvaluationLimit("Expression evaluation budget exceeded");
  const x=e as Record<string,Value>;
  if(x.op==="number"){const n=numericInput(x.value);if(n.denominator!==1n)throw new UndefinedExpression();return n;}
  if(x.op==="letter"){const i=letterNames.indexOf(String(x.name));if(i<0||i>=letters.length)throw new UndefinedExpression();return number(letters[i]);}
  const a=expression(x.left,letters),b=expression(x.right,letters);
  if(x.op==="/"&&(b.numerator===0n||arithmetic("/",a,b).denominator!==1n))throw new UndefinedExpression();
  if(x.op==="^"&&(b.denominator!==1n||b.numerator<0n))throw new UndefinedExpression();
  return arithmetic(String(x.op),a,b);
 }
 function evaluate(node:Expr,scope:Record<string,Value>):Value{
  if(--budget.remaining<0)throw new EvaluationLimit("Formula evaluation step budget exceeded");
  const child=(i:number)=>evaluate(node.children[i],scope);
  switch(node.kind){
   case "number":return exact(node.value!);case "literal":return node.value;case "boolean":return node.value==="true";
   case "name":{
    if(node.value==="ValuedRuleMeanings"&&fragment.valuedMeanings)return fragment.valuedMeanings();
    if(node.value==="H"&&fragment.shadeAnswers){
     if(cells.some(c=>fragment.shadeAnswers![c]===undefined))throw new MissingValue("Supply complete shading");
     for(const c of cells)fragment.readCells?.add(c);
    }
    if(Object.hasOwn(scope,node.value!)){const v=scope[node.value!];return v instanceof Lazy?v.read():v;}
    const term=prelude.environment.terms[node.value!];if(!term)throw new EvaluationLimit(`No finite domain for ${node.value}`);
    return (...args:Value[])=>{
     if(term.name==="marked"&&args[0]==="H"&&fragment.shadeAnswers){fragment.readCells?.add(String(args[1]));const shade=fragment.shadeAnswers[String(args[1])];if(shade===undefined)throw new MissingValue(`Shade at ${args[1]}`);return shade;}
     if(term.name==="allDifferent"){
      const seen=new Map<string,Set<string>>(),before=new Set(fragment.readCells),all=new Set(before),conflicts=new Set<string>();let missing:MissingValue|undefined,failed=false;
      const reset=(cells:Iterable<string>)=>{if(fragment.readCells){fragment.readCells.clear();for(const c of cells)fragment.readCells.add(c);}};
      for(const item of members(args[0])){reset(before);try{const v=(args[1] as Callable)(item),k=key(v),reads=new Set(fragment.readCells);if(seen.has(k)){failed=true;for(const c of seen.get(k)!)conflicts.add(c);for(const c of reads)conflicts.add(c);}else seen.set(k,reads);for(const c of reads)all.add(c);}catch(error){if(!(error instanceof MissingValue))throw error;missing=error;}}
      reset(failed?new Set([...before,...conflicts]):all);if(failed)return false;if(missing)throw missing;return true;
     }
     if(term.name==="divides")return divides(args[0],args[1]);
     if(term.name==="numericProperty")return numericProperty(...args);
     if(term.name==="pairRelation"&&(args[0] as {op:Value}).op==="multiple"){
      const a=number(args[1]),b=number(args[2]);
      if(a.numerator===0n&&b.numerator===0n)return true;
      const small=compare(a,b)<0?a:b,large=compare(a,b)<0?b:a;
      if(small.numerator===0n)return false;
      return arithmetic("/",large,small).denominator===1n;
     }
     if(term.name==="partitionSums"){
      const line=members(args[0]),target=number(args[1]),ch=args[2],repeats=truth(args[3]);
      const possible=new Set([0]);
      for(let start=0;start<line.length;start++)if(possible.has(start)){
       let total=exact("0");const seen=new Set<string>();
       for(let end=start;end<line.length;end++){
        if(--budget.remaining<0)throw new EvaluationLimit("Partition evaluation budget exceeded");
        const v=number((ch==="D"?primitives.face:primitives.effective)(line[end]));
        if(!repeats&&seen.has(key(v)))break;seen.add(key(v));total=arithmetic("+",total,v);
        if(compare(total,target)===0)possible.add(end+1);
       }
      }
      return line.length>0&&possible.has(line.length);
     }
     if(term.kind==="primitive"){const primitive=primitives[term.name];if(!primitive)throw new EvaluationLimit(`Unsupported primitive ${term.name}`);return primitive(...args);}
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
    if(["and","or","implies"].includes(node.value!)){
     const before=new Set(fragment.readCells);
     const reset=()=>{if(fragment.readCells){fragment.readCells.clear();for(const c of before)fragment.readCells.add(c);}};
     let left:Value;try{left=child(0);}catch(error){if(!(error instanceof MissingValue))throw error;reset();const right=truth(child(1));if(node.value==="and"&&!right)return false;if((node.value==="or"||node.value==="implies")&&right)return true;throw error;}
     const leftReads=new Set(fragment.readCells);
     if(node.value==="and"&&!truth(left)){
      reset();try{if(!truth(child(1)))for(const c of fragment.readCells??[])leftReads.add(c);}catch(error){if(budget.remaining<0)throw error;/* The right may require the false left clause as a guard. */}
      reset();for(const c of leftReads)fragment.readCells?.add(c);return false;
     }
     if(node.value==="or"&&truth(left)||node.value==="implies"&&!truth(left))return true;
     reset();const right=truth(child(1));
     if(node.value==="and"&&right||node.value==="or"&&!right||node.value==="implies")for(const c of leftReads)fragment.readCells?.add(c);
     return right;
    }
    const left=child(0);
    if(["in","notin"].includes(node.value!)&&node.children[1].kind==="name"&&node.children[1].value==="H"&&fragment.shadeAnswers){
     const cell=String(left);fragment.readCells?.add(cell);const shade=fragment.shadeAnswers[cell];
     if(shade===undefined)throw new MissingValue(`Shade at ${cell}`);
     return node.value==="in"?shade:!shade;
    }
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
   case "interval":{const a=number(child(0)),b=number(child(1));if(a.denominator!==1n||b.denominator!==1n||b.numerator-a.numerator>100000n)throw new EvaluationLimit("Interval expansion exceeds 100000");const values:Value[]=[];for(let i=a.numerator;i<b.numerator+(node.inclusive?1n:0n);i++)values.push(exact(String(i)));return group(values);}
   case "lambda":return (...args:Value[])=>evaluate(node.children[0],{...scope,...Object.fromEntries(node.binders!.map((b,i)=>[b.name,args[i]]))});
   case "conditional":return truth(child(0))?child(1):child(2);
   case "let":return evaluate(node.children[1],{...scope,[node.binders![0].name]:new Lazy(()=>child(0))});
   case "image":case "comprehension":{if(node.children[2]?.kind==="boolean"&&node.children[2].value==="false")return node.value==="list"?[]:group([]);const values=members(child(0));const result:Value[]=[];for(const item of values){const local={...scope,[node.binders![0].name]:item};if(node.kind==="comprehension"){if(truth(evaluate(node.children[1],local)))result.push(item);}else if(!node.children[2]||truth(evaluate(node.children[2],local)))result.push(evaluate(node.children[1],local));}return node.value==="list"?result:group(result);}
   case "aggregate":case "quantifier":{
    const domain=node.hasDomain?members(child(0)):undefined;
    const finiteValues=(type:Type):Value[]=>{
     const alias=prelude.environment.types?.[type.name];if(alias)return finiteValues(alias);
     if(type.name==="cell")return cells;
     if(type.name==="digit")return members(env.𝔄);
     if(type.name==="boolean")return [false,true];
     if(type.name==="enum"||type.name==="literal")return type.members??[];
     if(type.name==="optional")return [undefined,...finiteValues(type.args![0])];
     if(type.name==="set"){
      const pool=finiteValues(type.args![0]);if(pool.length>16)throw new EvaluationLimit("Finite set domain exceeds 16 elements");
      return Array.from({length:2**pool.length},(_,mask)=>group(pool.filter((_,i)=>mask&(1<<i))));
     }
     if(type.name==="record"){
      let result:Record<string,Value>[]=[{}];for(const [name,t] of Object.entries(type.fields??{})){const values=finiteValues(t);if(result.length*values.length>100000)throw new EvaluationLimit("Record domain exceeds 100000 values");result=result.flatMap(r=>values.map(v=>({...r,[name]:v})));}return result;
     }
     throw new EvaluationLimit(`No finite domain for ${type.name}`);
    };
    const choices=(name:string,type:Type,boundName:string,local:Record<string,Value>):Value[]=>{
     const alias=prelude.environment.types?.[type.name];if(alias)return choices(name,alias,boundName,local);
     const known=(n:Expr):boolean=>!(n.kind==='name'&&node.binders?.some(b=>b.name===n.value)&&!Object.hasOwn(local,n.value!))&&n.children.every(known);

     if(type.name==="set"&&type.args?.[0].name==="cell"){
      let pool=cells;
      const find=(n:Expr):boolean=>{
       if(n.kind==="binary"&&n.value==="subset"&&n.children[0].kind==="name"&&n.children[0].value===boundName&&known(n.children[1])){pool=members(evaluate(n.children[1],local)).map(String);return true;}
       // Only unconditional conjunctions constrain the whole witness domain.
       return n.kind==="binary"&&n.value==="and"&&(find(n.children[0])||find(n.children[1]));
      };
      if(node.value==="exists")find(node.children[node.hasDomain?1:0]);
      if(fragment.definitionKind==="value-modifier"&&name==="M"&&fragment.parameters.factor!==undefined&&fragment.parameters.offset!==undefined){
       const mandatory:string[]=[],optional:string[]=[];
       for(const c of pool){const d=primitives.face(c),v=primitives.effective(c),mapped=arithmetic("+",arithmetic("*",number(d),number(typed(fragment.parameters.factor,{name:"number"},prelude))),number(typed(fragment.parameters.offset,{name:"number"},prelude)));
        const modified=compare(number(v),mapped)===0,plain=compare(number(v),number(d))===0;
        if(!modified&&!plain)return [];if(modified&&plain)optional.push(c);else if(modified)mandatory.push(c);
       }
       if(optional.length>16)throw new EvaluationLimit("Modifier ambiguity exceeds 16 cells");
       return Array.from({length:2**optional.length},(_,mask)=>group([...mandatory,...optional.filter((_,i)=>mask&(1<<i))]));
      }
      if(fragment.definitionKind==="liar-cells"&&name==="M"&&fragment.parameters.distinctDigits!==undefined){return [group(pool.filter(c=>key(primitives.face(c))!==key(primitives.effective(c))))];}
      if(pool.length>16)throw new EvaluationLimit("Subset expansion exceeds 16 cells");
      return Array.from({length:2**pool.length},(_,mask)=>group(pool.filter((_,i)=>mask&(1<<i))));
     }
     if(type.name==="set"&&type.args?.[0].name==="set"&&type.args[0].args?.[0].name==="cell"){
      const body=node.children[node.hasDomain?1:0];
      if(node.value!=="exists"||body.kind!=="call"||body.children[0].value!=="partitionMeaning")return finiteValues(type);
      const pool=members(evaluate(body.children[2],local)).map(String);
      if(pool.length>8)throw new EvaluationLimit("Partition expansion exceeds 8 cells");
      const partitions:string[][][]=[];
      const visit=(i:number,groups:string[][]):void=>{if(i===pool.length){partitions.push(groups.map(g=>[...g]));return;}for(const g of groups){g.push(pool[i]);visit(i+1,groups);g.pop();}groups.push([pool[i]]);visit(i+1,groups);groups.pop();};
      visit(0,[]);return partitions.map(p=>group(p.map(group)));
     }
     if(fragment.definitionKind==="cage-shapes"&&name==="chosen"&&type.name==="list"&&fragment.parameters.hidden){
      const size=Number(fragment.parameters.size),hidden=fragment.parameters.hidden as {known:string[];clue:string}[];
      // This complete domain chooses all size-cell subsets containing each clue
      // and its known members; the body checks connectivity, totals and disjointness.
      const options=hidden.map(h=>{
       const required=[...new Set([h.clue,...h.known])];if(required.length>size)return [];
       const available=cells.filter(c=>!required.includes(c));const results:string[][]=[];
       const choose=(i:number,prefix:string[]):void=>{if(--budget.remaining<0)throw new EvaluationLimit("Hidden cage search budget exceeded");if(prefix.length===size){results.push([...prefix]);return;}if(available.length-i<size-prefix.length)return;for(let j=i;j<available.length;j++)choose(j+1,[...prefix,available[j]]);};
       choose(0,required);return results;
      });
      let count=1;for(const option of options){count*=option.length;if(count>100000)throw new EvaluationLimit("Hidden cage expansion exceeds 100000");}
      let result:Value[][]=[[]];for(const option of options)result=result.flatMap(prefix=>option.map(g=>[...prefix,group(g)]));return result;
     }
     if(fragment.definitionKind==="cage-expressions"&&name==="letterValues"&&fragment.parameters.cages){
      const cages=fragment.parameters.cages as {cells:string[];expression:{op:string;name?:string;value?:number}}[];
      if(cages.every(c=>["letter","number"].includes(c.expression.op))){
       const values=new Map<string,Value>();
       for(const cage of cages){const total=cage.cells.reduce((v,c)=>arithmetic("+",v,number(primitives.face(c))),exact("0"));
        if(cage.expression.op==="number"){if(compare(total,numericInput(cage.expression.value))!==0)return [];}
        else{const name=cage.expression.name!;if(values.has(name)&&key(values.get(name))!==key(total))return [];values.set(name,total);}
       }
       return [[...[...values.keys()].sort().map(n=>values.get(n))]];
      }
     }
     if(fragment.definitionKind==="arrow"&&name==="remainder"){
      const bulb=fragment.parameters.bulb as string[],line=fragment.parameters.line as string[];
      const B=bulb.length===1?number(primitives.face(bulb[0])):exact(bulb.map(c=>key(primitives.face(c))).join(""));
      const sum=line.reduce((s,c)=>arithmetic("+",s,number(primitives.face(c))),exact("0"));
      const target=arithmetic("-",B,sum);if(target.denominator!==1n)return [];
      const alphabet=members(env.𝔄).map(number);
      if(alphabet.some(n=>n.denominator!==1n||n.numerator<=0n))throw new EvaluationLimit("Partial arrow remainder requires a positive integer alphabet");
      if(target.numerator<=0n)return [];
      if(target.numerator>100000n)throw new EvaluationLimit("Arrow remainder exceeds 100000");
      const reached=new Map<bigint,{before:bigint;digit:Value}|undefined>([[0n,undefined]]);
      for(let n=1n;n<=target.numerator;n++){for(const digit of alphabet){if(--budget.remaining<0)throw new EvaluationLimit("Arrow remainder evaluation budget exceeded");if(reached.has(n-digit.numerator)){reached.set(n,{before:n-digit.numerator,digit});break;}}}
      if(!reached.has(target.numerator))return [];
      const witness:Value[]=[];for(let n=target.numerator;n>0n;){const step=reached.get(n)!;witness.push(step.digit);n=step.before;}return [witness];
     }
     if(["list","path"].includes(type.name)){
      let maximum:number|undefined;
      const magnitude=(n:Expr)=>n.kind==="unary"&&n.value==="magnitude"&&n.children[0].kind==="name"&&n.children[0].value===boundName;
      const bound=(n:Expr):void=>{
       if(n.kind==="binary"&&["=","<=","<"].includes(n.value!)&&magnitude(n.children[0])&&known(n.children[1])){const value=number(evaluate(n.children[1],local));if(value.denominator===1n&&value.numerator>=0n){const k=Number(value.numerator)-(n.value==="<"?1:0);maximum=maximum===undefined?k:Math.min(maximum,k);}}
       else if(n.kind==="binary"&&n.value==="and"){bound(n.children[0]);bound(n.children[1]);}
      };
      if(node.value==="exists")bound(node.children[node.hasDomain?1:0]);
      if(maximum===undefined)throw new EvaluationLimit(`No finite length bound for ${name}`);
      const pool=finiteValues(type.args![0]);
      if(maximum>100000||pool.length**maximum>100000)throw new EvaluationLimit("List witness expansion exceeds 100000");
      let count=1,work=0;for(let i=0;i<=maximum;i++){work+=(i+1)*count;if(work>100000)throw new EvaluationLimit("List witness expansion exceeds 100000 entries");count*=pool.length;}
      let level:Value[][]=[[]],result:Value[][]=[];
      for(let i=0;i<=maximum;i++){for(const item of level)result.push(item);if(i<maximum)level=level.flatMap(p=>pool.map(v=>[...p,v]));}return result;
     }
     if(["cell","digit","boolean","enum","literal","optional","record","set"].includes(type.name))return finiteValues(type);
     throw new EvaluationLimit(`No complete finite domain for ${name}:${type.name}`);
    };
    function* assignments(i:number,local:Record<string,Value>):Generator<Record<string,Value>>{if(i===node.binders!.length){yield local;return;}const binder=node.binders![i];for(const item of domain??choices(binder.sourceName??binder.name,binder.type!,binder.name,local))yield* assignments(i+1,{...local,[binder.name]:item});}
    const body=node.children[node.hasDomain?1:0];
    if(node.kind==="quantifier"){
     let missing:MissingValue|undefined,failed=false;
     const before=new Set(fragment.readCells),successful=new Set<string>(),failures=new Set<string>();
     for(const local of assignments(0,scope)){
      if(node.value==="forall"&&fragment.readCells){fragment.readCells.clear();for(const c of before)fragment.readCells.add(c);}
      try{
       const verdict=truth(evaluate(body,local));if(node.value==="exists"&&verdict)return true;
       if(node.value==="forall"){failed ||= !verdict;for(const c of fragment.readCells??[])(verdict?successful:failures).add(c);}
      }catch(error){if(!(error instanceof MissingValue))throw error;missing=error;}
     }
     if(node.value==="forall"){
      fragment.readCells?.clear();for(const c of before)fragment.readCells?.add(c);
      for(const c of failed?failures:successful)fragment.readCells?.add(c);
      if(failed)return false;
     }
     if(missing)throw missing;return node.value==="forall";
    }
    let result=exact(node.value==="product"?"1":"0");for(const local of assignments(0,scope)){const value=evaluate(body,local);if(node.value==="count"){if(truth(value))result=arithmetic("+",result,exact("1"));}else result=arithmetic(node.value==="product"?"*":"+",result,number(value));}return result;
   }
  }
 }
 return truth(evaluate(ast,env));
}
