import { declarationParameters, type DeclarationAST } from './declarations.js';
import { object, type CaseParameters } from './case-values.js';
import { type CustomDefinition } from './custom-definitions.js';
import { parseFormula } from './language/parser.js';
import type { Expr } from './language/ast.js';
import type { CheckedPrelude } from './language/checker.js';
import { diagnostic, type Diagnostic, type Span } from './language/diagnostics.js';

import { chosenAnswerPrimitives, sharedSchemaPrimitives } from './shared-primitives.js';
const primitives = {...chosenAnswerPrimitives, ...sharedSchemaPrimitives};
const reserved = (type:string,name:string) => type==='selection' && name==='H' || type==='value' && ['D','V'].includes(name) || type==='symbol' && name==='D';
export function checkSharedAnswers(instances: {declaration:DeclarationAST; kind:string; contract?:CaseParameters; custom?:CustomDefinition}[], prelude:CheckedPrelude): Diagnostic[] {
 const errors:Diagnostic[]=[];
 const bindings=new Map<string,Span[]>(), uses=new Map<string,Span>();
 const conjoinedBindings=new Set<string>();
 const record=(type:string,raw:unknown,span:Span,construct=false)=>{
  for(const name of Array.isArray(raw)?raw:[raw]) if(typeof name==='string' && !reserved(type,name)){
   const key=`${type} ${JSON.stringify(name)}`;
   if(construct)bindings.set(key,[...bindings.get(key)??[],span]);
   else uses.set(key,span);
  }
 };
 for(const {declaration:d,kind,contract,custom} of instances){
  const params={...Object.fromEntries(Object.entries(contract?.parameters??{}).filter(([,p])=>Object.hasOwn(p,'default')).map(([n,p])=>[n,p.default])),...declarationParameters(d,contract?.parameters.line?'line':'cells')};
  const parameterSpan=(name:string)=>d.parameters.find(p=>p.name.value===name)?.value.span ?? d.kind.span;
  const invalid=(message:string,param?:string)=>errors.push(diagnostic('E_CASE_PARAMETERS',param?parameterSpan(param):d.kind.span,message));
  for(const [p,definition] of Object.entries(contract?.parameters??{})) {
   const shared=definition.shared;
   if(!shared || kind==='battenburg' && params.mode!=='selection' || kind==='region-partition' && p==='name' && params[p]==='')continue;
   if(shared.role==='conjoin') {
    // Value declarations constrain the same channel, including V, without uniqueness.
    const key=`${shared.type} ${JSON.stringify(params[p])}`;
    if(typeof params[p]==='string' && !reserved(shared.type,params[p]))conjoinedBindings.add(key);
   } else record(shared.type,params[p],parameterSpan(p),shared.role==='construct');
  }
  if(kind==='cell-entries' && ['D','V'].includes(String(params.name)))invalid(`${params.name} is reserved; Cell Entries cannot write it.`,'name');
  if(kind==='mapped-values' && params.values==='D')invalid('D is read-only; Mapped Values cannot write it.','values');
  if(kind==='paired-roles' && params.left===params.right)invalid('Paired Roles requires different left and right selections.','right');
  if(kind==='region-partition' && Array.isArray(params.sizes) && params.sizes.some(n=>typeof n==='number'&&n<=0))invalid('Region sizes must be positive.','sizes');
  if(kind==='route-group' && Array.isArray(params.routes) && (params.routes.length<2 || new Set(params.routes).size!==params.routes.length))invalid('Route Group requires at least two distinct route names.','routes');
  if(kind==='derived-count' && params.mode==='distinct' && d.parameters.some(p=>['target','relation'].includes(p.name.value)))invalid('Distinct mode cannot specify target or relation.',d.parameters.some(p=>p.name.value==='target')?'target':'relation');
  if(kind==='local-sequence' && params.mode==='recurrence' && params.loop===true)invalid('Recurrence mode requires loop false.');
  if(kind==='route' && params.loop===true && (params.startCell!==undefined||params.endCell!==undefined))invalid('A closed route cannot declare startCell or endCell.');
  if(kind==='number-property' && params.reverse===true && (!object(params.operand)||params.operand.operation!=='decimal'))invalid('Reverse requires a decimal operand.');
  if(kind==='coordinate-count' && ['offset','rowFactor','colFactor','rowBase','colBase'].some(n=>typeof params[n]==='number'&&!Number.isInteger(params[n])))invalid('Coordinate bases, factors and offset must be integers.');
  if(kind==='region-partition' && Array.isArray(params.scope)&&params.scope.length===0)invalid('Region Partition requires a nonempty scope.');
  if(!custom)continue;
  // Follow checked prelude wrappers too, so custom clues cannot bypass names
  // through selectedCells, marked, channelValue or cellSymbols.
  const expr=parseFormula(String(custom.metadata.maths)).value;
  if(!expr)continue;
  type Fixed = {raw:unknown; span:Span};
  type Env = Record<string,Fixed>;
  type Closure = {lambda:Expr; env:Env};
  const fixed=(raw:unknown,span:Span=d.kind.span):Fixed=>({raw,span});
  const value=(e:Expr,env:Env):Fixed=>{
   if(e.kind==='literal')return fixed(e.value);
   if(e.kind==='name')return env[e.value!] ?? fixed(undefined);
   if(e.kind==='number')return fixed(Number(e.value));
   if(e.kind==='unary' && e.value==='magnitude'){
    const x=value(e.children[0],env);return fixed(Array.isArray(x.raw)?x.raw.length:undefined,x.span);
   }
   if(e.kind==='interval'){
    const a=value(e.children[0],env),b=value(e.children[1],env);
    if(typeof a.raw==='number' && typeof b.raw==='number' && Number.isInteger(a.raw) && Number.isInteger(b.raw) && b.raw-a.raw<=10000)
     return fixed(Array.from({length:Math.max(0,b.raw-a.raw+(e.inclusive?1:0))},(_,i)=>fixed(Number(a.raw)+i,b.span)),b.span);
   }
   if(e.kind==='set')return fixed(e.children.map(c=>value(c,env)));
   if(e.kind==='lambda')return fixed({lambda:e,env} satisfies Closure);
   if(e.kind==='index'){
    const xs=value(e.children[0],env),i=value(e.children[1],env).raw;
    return Array.isArray(xs.raw)&&typeof i==='number' ? xs.raw[i] ?? fixed(undefined,xs.span) : fixed(undefined,xs.span);
   }
   if(e.kind==='member'){
    const parent=value(e.children[0],env);
    return fixed(object(parent.raw)?parent.raw[e.value!]:undefined,parent.span);
   }
   if(e.kind==='call'&&e.children[0].value==='unwrap')return value(e.children[1],env);
   if(e.kind==='image'){
    const xs=value(e.children[0],env);
    if(Array.isArray(xs.raw))return fixed(xs.raw.map(x=>value(e.children[1],{...env,[e.binders![0].name]:x})),xs.span);
   }
   return fixed(undefined);
  };
  const walk=(e:Expr,env:Env,stack:Set<string>)=>{
   if(e.kind==='let'){walk(e.children[0],env,stack);walk(e.children[1],{...env,[e.binders![0].name]:value(e.children[0],env)},stack);return;}
   if(['quantifier','image','aggregate','comprehension'].includes(e.kind) && (e.hasDomain || e.kind==='comprehension')){
    const xs=value(e.children[0],env);
    if(Array.isArray(xs.raw)){
     const items=xs.raw;
     const bind=(i:number,local:Env):void=>{
      if(i===e.binders!.length){for(const child of e.children.slice(1))walk(child,local,stack);return;}
      for(const x of items)bind(i+1,{...local,[e.binders![i].name]:x});
     };
     bind(0,env);return;
    }
   }
   if(e.kind==='call' && e.children[0].kind==='name'){
    const name=e.children[0].value!;
    if(Object.hasOwn(primitives,name)){
     const v=value(e.children[1],env);
     if(typeof v.raw!=='string')errors.push(diagnostic('E_CASE_PARAMETERS',v.span,'A shared reader name must resolve from fixed case parameters or literals.'));
     else record(primitives[name],v.raw,v.span);
    }
    if(name==='reified' && e.children[1]?.kind==='call' && e.children[1].children[0].value==='choiceAnswer'){
     const v=value(e.children[1].children[1],env);record('choice',v.raw,v.span,true);
    }
    if(name==='countWhere'){
     const xs=value(e.children[1],env),predicate=value(e.children[2],env).raw as Closure|undefined;
     if(Array.isArray(xs.raw) && predicate?.lambda){
      walk(e.children[1],env,stack);
      for(const x of xs.raw)walk(predicate.lambda.children[0],{...predicate.env,[predicate.lambda.binders![0].name]:x},stack);
      return;
     }
    }
    const term=prelude.environment.terms[name];
    if(term?.body&&!stack.has(name)){
     walk(term.body,{...env,...Object.fromEntries(term.parameters.map((p,i)=>[p.name,e.children[i+1]?value(e.children[i+1],env):fixed(undefined)]))},new Set([...stack,name]));
     // Function arguments are visited in their bound context by the term body.
     for(const child of e.children.slice(1))if(child.kind!=='lambda')walk(child,env,stack);
     return;
    }
   }
   for(const child of e.children)walk(child,env,stack);
  };
  const wrap=(raw:unknown,span:Span):Fixed=>fixed(Array.isArray(raw)?raw.map(x=>wrap(x,span)):raw,span);
  walk(expr,Object.fromEntries(Object.entries(params).map(([name,raw])=>[name,wrap(raw,parameterSpan(name))])),new Set());
 }
 for(const [key,spans] of bindings)if(spans.length!==1)errors.push(diagnostic('E_CASE_PARAMETERS',spans[1],`${key} needs exactly one constructor; found ${spans.length}.`));
 for(const [key,span] of uses)if(!bindings.has(key)&&!conjoinedBindings.has(key))errors.push(diagnostic('E_CASE_PARAMETERS',span,key.startsWith('value ')?`${key} needs at least one Mapped Values declaration; found none.`:`${key} needs exactly one constructor; found none.`));
 return errors;
}
