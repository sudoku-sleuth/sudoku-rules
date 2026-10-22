import { declarationParameters, type DeclarationAST } from './declarations.js';
import { object, type CaseParameters } from './case-values.js';
import { type CustomDefinition } from './custom-definitions.js';
import { parseFormula } from './language/parser.js';
import type { Expr } from './language/ast.js';
import type { CheckedPrelude } from './language/checker.js';
import { diagnostic, type Diagnostic, type Span } from './language/diagnostics.js';

// Constructor ownership is independent of polarity and conditions: these bind
// the schema of the case-wide assignment, not a fresh witness for each clue.
const constructors: Record<string, Record<string, string>> = {
 route: {name:'route'}, maze: {name:'network'}, 'region-partition': {name:'partition'},
 selection: {name:'selection'}, 'shade-components': {components:'partition'},
 'mapped-values': {channel:'value'}, 'paired-roles': {pairs:'network'},
 assignment: {name:'assignment'}, 'cell-entries': {name:'symbol'},
};
const readers: Record<string, Record<string, string>> = {
 'route-clue': {name:'route'}, 'route-group': {names:'route'},
 'network-clue': {name:'network',line:'route'}, 'region-shape': {name:'partition'}, 'region-clue': {name:'partition'},
 'marking-relation': {name:'selection'}, battenburg: {name:'selection'},
 'shade-components': {name:'selection'}, 'japanese-sums': {name:'selection'},
 'mapped-values': {name:'selection'}, 'paired-roles': {left:'selection',right:'selection'},
 'choice-count': {names:'choice'}, 'symbol-house': {name:'symbol'},
};
const primitives: Record<string,string> = {routeAnswer:'route',routeClosed:'route',networkAnswer:'network',partitionAnswer:'partition',selectionAnswer:'selection',choiceAnswer:'choice',assignmentAnswer:'assignment',valueAnswer:'value',symbolAnswer:'symbol'};
const reserved = (type:string,name:string) => type==='selection' && name==='H' || type==='value' && ['D','V'].includes(name) || type==='symbol' && name==='D';
export function checkSharedAnswers(instances: {declaration:DeclarationAST; kind:string; contract?:CaseParameters; custom?:CustomDefinition}[], prelude:CheckedPrelude): Diagnostic[] {
 const errors:Diagnostic[]=[];
 const bindings=new Map<string,Span[]>(), uses=new Map<string,Span>();
 const record=(type:string,raw:unknown,span:Span,construct=false)=>{
  for(const name of Array.isArray(raw)?raw:[raw]) if(typeof name==='string' && !reserved(type,name)){
   const key=`${type} ${JSON.stringify(name)}`;
   if(construct)bindings.set(key,[...bindings.get(key)??[],span]);
   else uses.set(key,span);
  }
 };
 for(const {declaration:d,kind,contract,custom} of instances){
  const params={...Object.fromEntries(Object.entries(contract?.parameters??{}).filter(([,p])=>Object.hasOwn(p,'default')).map(([n,p])=>[n,p.default])),...declarationParameters(d,contract?.parameters.line?'line':'cells')};
  for(const [p,type] of Object.entries(constructors[kind]??{}))record(type,params[p],d.kind.span,true);
  for(const [p,type] of Object.entries(readers[kind]??{}))if(kind!=='battenburg'||params.mode==='selection')record(type,params[p],d.kind.span);
  const invalid=(message:string)=>errors.push(diagnostic('E_CASE_PARAMETERS',d.kind.span,message));
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
  const value=(e:Expr,env:Record<string,unknown>):unknown=>{
   if(e.kind==='literal')return e.value;
   if(e.kind==='name')return env[e.value!];
   if(e.kind==='number')return Number(e.value);
   if(e.kind==='set')return e.children.map(c=>value(c,env));
   if(e.kind==='index'){const xs=value(e.children[0],env),i=value(e.children[1],env);return Array.isArray(xs)&&typeof i==='number'?xs[i]:undefined;}
   if(e.kind==='call'&&['unwrap','selectedCells'].includes(e.children[0].value!))return value(e.children[1],env);
   return undefined;
  };
  const walk=(e:Expr,env:Record<string,unknown>,stack:Set<string>)=>{
   if(e.kind==='let'){walk(e.children[0],env,stack);walk(e.children[1],{...env,[e.binders![0].name]:value(e.children[0],env)},stack);return;}
   if(e.kind==='quantifier' && e.hasDomain){const xs=value(e.children[0],env);if(Array.isArray(xs)){for(const x of xs)walk(e.children[1],{...env,...Object.fromEntries(e.binders!.map(b=>[b.name,x]))},stack);return;}}
   if(e.kind==='call' && e.children[0].kind==='name'){
    const name=e.children[0].value!;
    if(primitives[name]){const raw=value(e.children[1],env); if(typeof raw!=='string') invalid('A shared reader name must resolve from fixed case parameters or literals.'); else record(primitives[name],raw,d.kind.span);}
    if(name==='reified' && e.children[1]?.kind==='call' && e.children[1].children[0].value==='choiceAnswer')record('choice',value(e.children[1].children[1],env),d.kind.span,true);
    const term=prelude.environment.terms[name];
    if(term?.body&&!stack.has(name))walk(term.body,{...env,...Object.fromEntries(term.parameters.map((p,i)=>[p.name,e.children[i+1]?value(e.children[i+1],env):undefined]))},new Set([...stack,name]));
   }
   for(const child of e.children)walk(child,env,stack);
  };
  walk(expr,params,new Set());
 }
 for(const [key,spans] of bindings)if(spans.length!==1)errors.push(diagnostic('E_CASE_PARAMETERS',spans[1],`${key} needs exactly one constructor; found ${spans.length}.`));
 for(const [key,span] of uses)if(!bindings.has(key))errors.push(diagnostic('E_CASE_PARAMETERS',span,`${key} needs exactly one constructor; found none.`));
 return errors;
}
