import { declarationLibrary, defaultCasePrelude } from '../declaration-library.js';
import { evaluatorLibrary } from '../evaluator-library.js';
import { checkCaseReferences, readHeader } from '../documents.js';
import { caseBlocks, customParameterContract, readCustomDefinitions } from '../custom-definitions.js';
import { declarationParameters, type DeclarationAST, type DeclarationValue } from '../declarations.js';
import { checkBoard, declaredDefault, parameterGrammar, type CaseParameters } from '../case-values.js';
import { pageEnvironment, type CompiledPage, type PageSource } from '../library.js';
import { stringify } from 'yaml';
import {arithmetic,exact,compare as compareExact} from '../language/exact.js';
import { checkFormula } from '../language/checker.js';
import { parseFormula } from '../language/parser.js';
import { diagnostic, LanguageError, type Result, type Span } from '../language/diagnostics.js';
import type { Cell, Formula, CanonicalBoard } from '../semantics/types.js';
import { canonicalBoard, standardHouses } from '../semantics/board.js';
import { lower } from '../semantics/lower.js';
import { formulaVerdict, MissingValue, EvaluationLimit, numericInput, type Fragment, type StepBudget } from './interpreter.js';
export { EvaluationLimit, MissingValue, type NumericInput } from './interpreter.js';
export type Digit = number;
/** Auxiliary maps are shared answer witnesses, keyed by their declared names. */
export interface Assignment {
 digits: ReadonlyMap<Cell,Digit> | Readonly<Partial<Record<Cell,Digit>>>;
 shading?: ReadonlyMap<Cell,boolean> | Readonly<Partial<Record<Cell,boolean>>>;
 values?: Fragment['values'];
 routeAnswers?: Fragment['routeAnswers']; routeClosures?: Fragment['routeClosures'];
 networkAnswers?: Fragment['networkAnswers']; partitionAnswers?: Fragment['partitionAnswers'];
 selectionAnswers?: Fragment['selectionAnswers']; choiceAnswers?: Fragment['choiceAnswers'];
 assignmentAnswers?: Fragment['assignmentAnswers']; valueAnswers?: Fragment['valueAnswers']; symbolAnswers?: Fragment['symbolAnswers'];
}
interface Definition {page:CompiledPage; contract:CaseParameters; name:string}
export interface CompiledRule {
 meta?: {stated?:boolean; name?:string; strips?:Cell[][]};
 id?: string; label?: string; name: string; span: Span; scope: Cell[];
 /** Checked formula and resolved inputs. Treat compiled data as immutable. */
 page: CompiledPage; parameters: Record<string,unknown>; board: CanonicalBoard;
 negated: boolean; condition?: {unless:boolean; predicate:string; cells:Cell[]};
 finite?: Formula; valueBindings: boolean; libraryKind?:string; definitions: Map<string,Definition>; caseRules:CompiledRule[];
}
export interface CompiledCase { rules: CompiledRule[]; board: CanonicalBoard }
export interface Evaluation { status:'holds'|'broken'|'undecided'; cells?: Cell[] }
const root = 'https://rules.sudoku-sleuth.com/';
const record = <T>(input:ReadonlyMap<Cell,T>|Readonly<Partial<Record<Cell,T>>>|undefined):Record<string,T> => input&&'entries' in input&&typeof input.entries==='function'?Object.fromEntries(input.entries()):{...input} as Record<string,T>;
const supports = (f:Formula):Cell[] => f.op==='All'||f.op==='Any' ? [...new Set(f.children.flatMap(supports))] : f.op==='Not'?supports(f.child):f.op==='Allowed'?[f.cell]:f.op==='SumEqual'?[...new Set([...f.left,...f.right])]:'cells' in f?f.cells:[];
function referencesBoard(page:CompiledPage):boolean {
 const hasCell=(t:import('../language/ast.js').Type):boolean=>t.name==='cell'||(t.args??[]).some(hasCell)||Object.values(t.fields??{}).some(hasCell);
 const seen=new Set<string>();
 const visit=(node:import('../language/ast.js').Expr):boolean=>{
  if(node.kind==='quantifier'&&!node.hasDomain&&node.binders?.some(b=>b.type&&hasCell(b.type)))return true;
  if(node.kind==='name'){
   if(['C','H','Regions','boardCell','ValuedRuleMeanings','clueHolds','selectionAnswer','partitionAnswer','routeAnswer','networkAnswer','valueAnswer','symbolAnswer'].includes(node.value!))return true;
   const term=defaultCasePrelude().environment.terms[node.value!];
   if(term?.body&&!seen.has(term.name)){seen.add(term.name);if(visit(term.body))return true;}
  }
  return node.children.some(visit);
 };
 return page.formulas.some(f=>visit(f.ast));
}
function inputCells(value:unknown):Cell[]{
 if(typeof value==='string'&&/^r\d+c\d+$/.test(value))return [value as Cell];
 if(Array.isArray(value))return value.flatMap(inputCells);
 if(value&&typeof value==='object')return Object.values(value).flatMap(inputCells);
 return [];
}
function inputs(ast:DeclarationAST, contract:CaseParameters):Record<string,unknown>{
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
/** Compile supplied text without fetching URLs or reading the filesystem. */
export function compileCase(file:PageSource):Result<CompiledCase>{
 const {rules:evaluatorRules,aliases:evaluatorAliases}=evaluatorLibrary();
 const header=readHeader(file);if(!header.value)return {diagnostics:header.diagnostics};
 const checked=checkCaseReferences(file,declarationLibrary);
 const errors=checked.diagnostics.filter(d=>!d.code.startsWith('W_'));
 if(!checked.value||errors.length)return {diagnostics:checked.diagnostics};
 const warnings=checked.diagnostics.filter(d=>d.code.startsWith('W_'));
 const metadata=header.value.metadata;
 if(metadata.negate!==undefined&&metadata.negate!=='all')return {diagnostics:[diagnostic('E_HEADER_TYPE',header.value.field('negate'),'negate must be all when supplied.'),...warnings]};
 const standard=checked.value.references.some(r=>declarationLibrary.kindByUrl?.get(r.url)==='sudoku');
 const dimensions=checkBoard(metadata,standard?1:0,header.value.field);
 if(dimensions.diagnostics.length)return {diagnostics:[...dimensions.diagnostics,...warnings]};
 const b=dimensions.board;
 const raw=(metadata.board??{}) as Record<string,unknown>;
 const regions=(standard?standardHouses().slice(18):raw.regions??[]) as Cell[][];
 let board:CanonicalBoard;
 try {board=canonicalBoard({rows:b.rows!,cols:b.cols!,alphabet:b.symbols!,houses:(raw.houses as Cell[][]|undefined)?.map(cells=>({cells})),activeCells:(b.activeCells as Cell[]|undefined)??Array.from({length:b.rows!*b.cols!},(_,i)=>`r${Math.floor(i/b.cols!)+1}c${i%b.cols!+1}` as Cell),regions});}catch(error){return {diagnostics:[diagnostic('E_CASE_BOARD',header.value.field('board'),(error as Error).message),...warnings]};}
 board.activeCells.sort((a,b)=>{const [r,k]=a.slice(1).split('c').map(Number),[s,l]=b.slice(1).split('c').map(Number);return r-s||k-l;});
 const given=metadata.givens??raw.givens;
 if(typeof given==='string')board.givens=given.includes('=')?given.trim().split(/\s+/).map(p=>{const [cell,digit]=p.split('=');return {cell:cell as Cell,digit:Number(digit)};}):[...given].flatMap((d,i)=>d==='.'?[]:[{cell:`r${Math.floor(i/b.cols!)+1}c${i%b.cols!+1}` as Cell,digit:Number(d)}]);
 else if(Array.isArray(given))board.givens=given as CanonicalBoard['givens'];
 const custom=readCustomDefinitions(file,caseBlocks(file),declarationLibrary.kinds,defaultCasePrelude(),declarationLibrary.urls);
 const rules:CompiledRule[]=[];
 const definitions=new Map<string,Definition>();
 for(const [name,page] of evaluatorRules){const contract=declarationLibrary.parameters?.get(`${root}${name}.md`);if(contract){const d={name,page,contract};definitions.set(name,d);definitions.set(`${root}${name}.md`,d);}}
 for(const [name,target] of evaluatorAliases){const d=definitions.get(target);if(d){definitions.set(name,d);definitions.set(`${root}${name}.md`,d);}}
 for(const local of custom.definitions.values()){
  const env=pageEnvironment({file:file.file,text:`---\n${stringify({parameters:local.parameters})}---\n`},defaultCasePrelude().environment);
  const parsed=parseFormula(String(local.metadata.maths),{file:file.file});
  const formula=parsed.value&&env.value?checkFormula(parsed.value,env.value.environment):undefined;
  if(formula?.value&&env.value){
   const contract=customParameterContract(local);
   for(const p of env.value.parameters){const raw=local.parameters[p.name];if(raw&&typeof raw==='object'&&'default' in raw)Object.assign(contract.parameters[p.name],declaredDefault(raw.default,p.type,contract.types));}
   const definition={name:local.id??local.url,page:{file:file.file,parameters:env.value.parameters,formulas:[formula.value]},contract};definitions.set(local.url,definition);if(typeof local.metadata.url==='string')definitions.set(local.metadata.url,definition);
  }else errors.push(...env.diagnostics,...parsed.diagnostics,...formula?.diagnostics??[]);
 }
 errors.push(...custom.diagnostics);
 const valueBindings=checked.value.references.some(r=>['value-modifier','mapped-values','liar-cells'].includes(r.kind));
 for(const ast of checked.value.declarations){
  const ref=checked.value.references.find(r=>r.span.start.offset===ast.kind.span.start.offset);
  if(!ref){errors.push(diagnostic('E_CUSTOM_DEFINITION',ast.span,'No resolved reference for this declaration.'));continue;}
  const kind=declarationLibrary.kindByUrl?.get(ref.url)??ref.kind;
  const definition=definitions.get(ref.url);
  if(!definition){errors.push(diagnostic('E_CUSTOM_DEFINITION',ast.span,`Supply the definition for ${ref.url}; compilation performs no URL loading.`));continue;}
  const {page,contract}=definition;
  const parameters=inputs(ast,contract);
  applyBoardDefaults(parameters,kind,board);
  let finite:Formula|undefined;
  // Lowering explicitly refuses settings outside its supported fragment.
  try {finite=lower(ast,board);}catch(error){
   if(!page.formulas.length){errors.push(diagnostic('E_CUSTOM_DEFINITION',ast.span,`No executable meaning: ${(error as Error).message}`));continue;}
  }
  if(!ref.custom&&definition.name==='regions')finite={op:'Distinct',channel:'D',collection:'set',cells:parameters.cells as Cell[]};
  const scope=finite?supports(finite):!ref.custom&&localAggregates.has(kind)?inputCells(parameters.cells):referencesBoard(page)?board.activeCells:[...new Set(inputCells(parameters))];
  const condition=ast.condition?{unless:ast.condition.unless,predicate:ast.condition.predicate.value,cells:(ast.cells?.value??parameters.line??parameters.cells??[]) as Cell[]}:undefined;
  rules.push({meta:ast.meta?.value as CompiledRule["meta"],id:ast.instance?.value,label:ast.instance?.value,name:kind,span:ast.span,scope:[...new Set([...scope,...condition?.cells??[]])],page,parameters,board,negated:kind==='decoration'?false:(metadata.negate==='all')!==(ast.negations.length%2===1),condition,finite,valueBindings,libraryKind:ref.custom?undefined:kind,definitions,caseRules:rules});
 }
 const headerRule=(name:string,finite:Formula,span:Span):void=>{rules.push({name,span,scope:supports(finite),page:{file:file.file,parameters:[],formulas:[]},parameters:{},board,finite,negated:false,valueBindings:false,definitions,caseRules:rules});};
 if(board.houses.length)headerRule('houses',{op:'All',children:board.houses.map(cells=>({op:'Distinct',channel:'D',collection:'set',cells}))},header.value.field('board'));
 if(board.givens.length)headerRule('givens',{op:'All',children:board.givens.map(g=>({op:'Allowed',channel:'D',cell:g.cell,values:[g.digit]}))},header.value.field(metadata.givens!==undefined?'givens':'board'));
 if(Array.isArray(metadata.regions))headerRule('regions',{op:'All',children:(metadata.regions as Cell[][]).map(cells=>({op:'Distinct',channel:'D',collection:'set',cells}))},header.value.field('regions'));
 return errors.length?{diagnostics:[...errors,...warnings]}:{value:{rules,board},diagnostics:warnings};
}
const localAggregates=new Set(['cage','killer','little-killer','diagonal-sum']);
function applyBoardDefaults(parameters:Record<string,unknown>,kind:string,board:CanonicalBoard):void{
 if(kind==='liar-cells'){parameters.groups??=standardHouses();parameters.values??=[1,2,3,4,5,6,7,8,9];}
 if(kind==='scoped-move')parameters.scope??=board.activeCells;
 if(kind==='sandwich')parameters.crusts??=[Math.min(...board.alphabet),Math.max(...board.alphabet)];
}
function readsEffective(page:CompiledPage):boolean{
 const seen=new Set<string>();const visit=(n:import('../language/ast.js').Expr):boolean=>{if(n.kind==='name'){if(n.value==='effective')return true;const term=defaultCasePrelude().environment.terms[n.value!];if(term?.body&&!seen.has(term.name)){seen.add(term.name);if(visit(term.body))return true;}}return n.children.some(visit);};return page.formulas.some(f=>visit(f.ast));
}
const readsFiniteValue=(f:Formula):boolean=>'channel' in f?f.channel==='V':f.op==='Not'?readsFiniteValue(f.child):f.children.some(readsFiniteValue);
const inverse=(e:Evaluation):Evaluation=>({status:e.status==='holds'?'broken':e.status==='broken'?'holds':'undecided',...(e.cells?{cells:[...e.cells]}: {})});
function finiteVerdict(f:Formula,assignment:Assignment,alphabet?:readonly number[],budget:StepBudget={remaining:ALLOWED_WORK_LIMIT}):Evaluation{
 spend(budget);
 // This fast path is used only for face channels or identity effective values.
 const digits=record(assignment.digits);
 const read=(c:Cell,_channel:string)=>digits[c];
 const result=(truth:boolean,cells:Cell[]):Evaluation=>({status:truth?'holds':'broken',cells:[...new Set(cells.filter(c=>digits[c]!==undefined))]});
 if(f.op==='All'||f.op==='Any'){
  let unknown=false,failed=false;const failures:Cell[]=[],proof:Cell[]=[];
  for(const child of f.children){const e=finiteVerdict(child,assignment,alphabet,budget);if(f.op==='Any'&&e.status==='holds')return e;unknown ||= e.status==='undecided';if(e.status==='broken'){failed=true;failures.push(...e.cells??[]);}else proof.push(...e.cells??[]);}
  if(f.op==='All'&&failed)return result(false,failures);
  return unknown?{status:'undecided'}:result(f.op==='All',f.op==='All'?proof:failures);
 }
 if(f.op==='Not')return inverse(finiteVerdict(f.child,assignment,alphabet,budget));
 if(f.op==='Distinct'){
  const cells=f.collection==='set'?[...new Set(f.cells)]:f.cells;
  if(f.collection==='list'&&new Set(cells).size<cells.length){const c=cells.find((c,i)=>cells.indexOf(c)!==i)!;return result(false,[c]);}
  if(alphabet&&cells.length>alphabet.length)return result(false,cells.slice(0,alphabet.length+1));
  const clashes:Cell[]=[];for(let i=0;i<cells.length;i++)for(let j=i+1;j<cells.length;j++){spend(budget);if(read(cells[i],f.channel)!==undefined&&read(cells[i],f.channel)===read(cells[j],f.channel))clashes.push(cells[i],cells[j]);}if(clashes.length)return result(false,clashes);
  return cells.some(c=>read(c,f.channel)===undefined)?{status:'undecided'}:result(true,cells);
 }
 if(f.op==='Pair'){
  const [a,b]=f.cells.map(c=>read(c,f.channel));
  const possible=f.table.filter(([x,y])=>{spend(budget);return (a===undefined||a===x)&&(b===undefined||b===y);});
  if(!possible.length)return result(false,f.cells);
  return a===undefined||b===undefined?{status:'undecided'}:result(true,f.cells);
 }
 if(f.op==='Allowed'){const d=read(f.cell,f.channel);return d===undefined?{status:'undecided'}:result(f.values.includes(d),[f.cell]);}
 if(f.op==='CountAtLeast'){
  const count=f.cells.filter(c=>digits[c]===f.digit).length,empty=f.cells.filter(c=>digits[c]===undefined).length;
  return count>=f.count?result(true,f.cells.filter(c=>digits[c]===f.digit)):count+empty<f.count?result(false,f.cells):{status:'undecided'};
 }
 if(f.op!=='SumEqual')throw new Error('Unknown finite formula');
 const cells=supports(f);if(cells.some(c=>read(c,f.channel)===undefined))return {status:'undecided'};
 return result(f.left.reduce((s,c)=>s+BigInt(read(c,f.channel)),0n)===f.right.reduce((s,c)=>s+BigInt(read(c,f.channel)),0n),cells);
}
/** One expression budget covers the initial verdict, refinement and nested calls. */
export const ALLOWED_WORK_LIMIT=100_000;
function spend(budget:StepBudget):void{if(--budget.remaining<0)throw new EvaluationLimit('Evaluation step budget exceeded');}
function shadingScope(rule:CompiledRule):Cell[]{
 const seen=new Set<string>();
 const visit=(n:import('../language/ast.js').Expr):boolean=>{
  if(n.kind==='name'){
   if(n.value==='H'||n.value==='marked')return true;
   const term=defaultCasePrelude().environment.terms[n.value!];
   if(term?.body&&!seen.has(term.name)){seen.add(term.name);if(visit(term.body))return true;}
  }
  return n.children.some(visit);
 };
 return rule.condition?.predicate==='uniform'||rule.page.formulas.some(f=>visit(f.ast))?rule.scope:[];
}
function filledWitness(rule:CompiledRule,assignment:Assignment,cells:Cell[]):Cell[]{
 const digits=record(assignment.digits),shades=record(assignment.shading);
 return [...new Set(cells)].filter(c=>digits[c]!==undefined||shades[c]!==undefined);
}
function refine(rule:CompiledRule,assignment:Assignment,budget:StepBudget):Evaluation{
 const first=evaluateRule(rule,assignment,0,budget);if(first.status!=='undecided')return first;
 const digits=record(assignment.digits),shading=record(assignment.shading);
 const empty=rule.scope.filter(c=>digits[c]===undefined),unshaded=shadingScope(rule).filter(c=>shading[c]===undefined);
 if(!empty.length&&!unshaded.length||rule.board.alphabet.length**empty.length*2**unshaded.length*Math.max(1,rule.scope.length)>10_000)return first;
 let holds=false,broken=false,unknown=false;
 const visit=(i:number):void=>{
  spend(budget);if(holds&&broken||unknown)return;
  if(i===empty.length+unshaded.length){const e=evaluateRule(rule,{...assignment,digits,shading},0,budget);holds ||= e.status==='holds';broken ||= e.status==='broken';unknown ||= e.status==='undecided';return;}
  if(i<empty.length){for(const d of rule.board.alphabet){digits[empty[i]]=d;visit(i+1);}delete digits[empty[i]];}
  else {const c=unshaded[i-empty.length];for(const shade of [false,true]){shading[c]=shade;visit(i+1);}delete shading[c];}
 };
 visit(0);return unknown||holds&&broken?first:holds?{status:'holds'}:{status:'broken',cells:filledWitness(rule,assignment,rule.scope)};
}
/** Sound three-valued evaluation; resource refusals and missing witnesses are undecided. */
export function evaluate(rule:CompiledRule,assignment:Assignment):Evaluation{
 try{
  const verdict=refine(rule,assignment,{remaining:ALLOWED_WORK_LIMIT});
  return verdict.status==='broken'?{status:'broken',cells:filledWitness(rule,assignment,verdict.cells??rule.scope)}:{status:verdict.status};
 }catch{return {status:'undecided'};}
}
function aggregateVerdict(rule:CompiledRule,assignment:Assignment,budget:StepBudget):Evaluation{
 const p=rule.parameters,cage=['cage','killer'].includes(rule.libraryKind!);
 const cells=cage?[...new Set(p.cells as Cell[])]:p.cells as Cell[];
 const digits=record(assignment.digits),effective=assignment.values??assignment.valueAnswers?.V;
 const channel=p.channel??(cage?'V':'D'),total=cage?p.total:p.sum;
 const value=(c:Cell)=>channel==='D'?digits[c]:effective?.[c]??(!rule.valueBindings&&!effective?digits[c]:undefined);
 const repeatValue=(c:Cell)=>cage?digits[c]:value(c);
 const conflicts:Cell[]=[];
 if(p.repeats===false)for(let i=0;i<cells.length;i++)for(let j=i+1;j<cells.length;j++){
  spend(budget);const a=repeatValue(cells[i]),b=repeatValue(cells[j]);
  if(a!==undefined&&b!==undefined&&compareExact(numericInput(a),numericInput(b))===0)conflicts.push(cells[i],cells[j]);
 }
 if(conflicts.length)return {status:'broken',cells:[...new Set(conflicts)]};
 if(total!==undefined){
  if(cells.some(c=>value(c)===undefined))return {status:'undecided'};
  let sum=exact('0');for(const c of cells){spend(budget);sum=arithmetic('+',sum,numericInput(value(c)));}
  if(compareExact(sum,numericInput(total))!==0)return {status:'broken',cells:[...cells]};
 }
 if(p.repeats===false&&cells.some(c=>repeatValue(c)===undefined))return {status:'undecided'};
 return {status:'holds',cells:[...cells]};
}
function evaluateRule(rule:CompiledRule,assignment:Assignment,depth:number,budget:StepBudget):Evaluation{
 spend(budget);
 if(depth>32)throw new EvaluationLimit('Owned-clue and valued-rule evaluation exceeds 32 nested calls');
 const digits=record(assignment.digits);
 const invalid=rule.scope.filter(cell=>digits[cell]!==undefined&&!rule.board.alphabet.includes(digits[cell]));if(invalid.length)return {status:'broken',cells:invalid};
 const cond=rule.condition?conditionVerdict(rule.condition,assignment,rule.board.alphabet,budget):undefined;
 if(cond?.status==='broken')return {status:'holds'};
 let base:Evaluation;
 const aggregate=!!rule.libraryKind&&localAggregates.has(rule.libraryKind);
 const finite=!aggregate&&rule.finite&&(!readsFiniteValue(rule.finite)||!rule.valueBindings&&!assignment.values&&!assignment.valueAnswers?.V)?rule.finite:undefined;
 if(aggregate)base=aggregateVerdict(rule,assignment,budget);
 else if(finite)base=finiteVerdict(rule.negated?{op:'Not',child:finite}:finite,assignment,rule.board.alphabet,budget);
 else{
  try{
   if(rule.valueBindings&&readsEffective(rule.page)&&!assignment.values&&!assignment.valueAnswers?.V)throw new MissingValue('Supply shared effective values');
   const shading=record(assignment.shading);
   const readCells=new Set<string>();
   const fragment:Fragment={...assignment,budget,definitionKind:rule.libraryKind,readCells,valuedMeanings:()=>rule.caseRules.filter(r=>r!==rule&&!['value-modifier','liar-cells'].includes(r.name)&&readsEffective(r.page)).map(r=>{const e=evaluateRule(r,assignment,depth+1,budget);if(e.status==='undecided')throw new MissingValue('Incomplete valued rule');return e.status==='holds';}),clueTruth:q=>{
    const clue=q as {rule:string;args:Record<string,unknown>};const definition=rule.definitions.get(clue.rule);
    if(!definition)throw new EvaluationLimit(`Unresolved owned clue ${clue.rule}`);
    const parameters={...Object.fromEntries(Object.entries(definition.contract.parameters).filter(([,p])=>Object.hasOwn(p,'default')).map(([k,p])=>[k,p.default])),...clue.args};
    applyBoardDefaults(parameters,definition.name,rule.board);
    const nested:CompiledRule={...rule,libraryKind:rule.definitions.get(`${root}${definition.name}.md`)===definition?definition.name:undefined,name:definition.name,page:definition.page,parameters,finite:undefined,condition:undefined,negated:false,scope:rule.board.activeCells};
    const verdict=evaluateRule(nested,assignment,depth+1,budget);if(verdict.status==='undecided')throw new MissingValue('Incomplete owned clue');return verdict.status==='holds';
   },shadeAnswers:shading,values:assignment.values??assignment.valueAnswers?.V,faces:digits,cells:rule.board.activeCells,parameters:rule.parameters,rows:rule.board.rows,cols:rule.board.cols,alphabet:rule.board.alphabet,regions:rule.board.regions,givens:Object.fromEntries(rule.board.givens.map(g=>[g.cell,g.digit])),shaded:Object.keys(shading).filter(c=>shading[c])};
   let failed=false,unknown=false;const failures=new Set<string>(),proof=new Set<string>();
   for(const formula of rule.page.formulas){
    readCells.clear();
    try{const holds=formulaVerdict(formula.ast,defaultCasePrelude(),rule.page.parameters,fragment);failed ||= !holds;for(const c of readCells)(holds?proof:failures).add(c);}
    catch(error){if(!(error instanceof MissingValue))throw error;unknown=true;}
   }
   base=failed?{status:'broken',cells:[...failures] as Cell[]}:unknown?{status:'undecided'}:{status:'holds',cells:[...proof] as Cell[]};
  }catch(error){if(error instanceof LanguageError&&error.diagnostic.code==='E_LANGUAGE_LIMIT')throw new EvaluationLimit(error.message);if(!(error instanceof MissingValue))throw error;base={status:'undecided'};}
 }
 if(rule.negated&&!finite)base=inverse(base);
 if(cond?.status==='undecided'&&base.status!=='holds')return {status:'undecided'};
 if(base.status==='broken'&&rule.condition)base.cells=[...new Set([...base.cells??[],...rule.condition.cells])];
 return base;
}
function conditionVerdict(condition:NonNullable<CompiledRule['condition']>,assignment:Assignment,alphabet:readonly number[],budget:StepBudget):Evaluation{
 const {predicate,cells,unless}=condition;
  let cond:Evaluation;
  if(predicate==='distinct')cond=finiteVerdict({op:'Distinct',cells,channel:'D',collection:'list'},assignment,alphabet,budget);
  else if(predicate==='uniform'){
   const shades=record(assignment.shading),known=cells.map(c=>shades[c]).filter(x=>x!==undefined);
   cond=new Set(known).size>1?{status:'broken'}:!cells.length?{status:'broken'}:known.length===cells.length?{status:'holds'}:{status:'undecided'};
  }else{
   const seen=new Set<Cell>();if(cells.length)seen.add(cells[0]);
   for(let size=-1;size!==seen.size;){size=seen.size;for(const c of cells){const [r,k]=c.slice(1).split('c').map(Number);if([`r${r-1}c${k}`,`r${r+1}c${k}`,`r${r}c${k-1}`,`r${r}c${k+1}`].some(n=>seen.has(n as Cell)))seen.add(c);}}
   cond={status:seen.size===new Set(cells).size&&cells.length>0?'holds':'broken'};
  }
  if(unless)cond=inverse(cond);
 return cond;
}
/** Candidate support shares a single step budget across all completions. */
export function allowed(rule:CompiledRule,assignment:Assignment,candidates:ReadonlyMap<Cell,ReadonlySet<Digit>>):Map<Cell,Set<Digit>>|'too-large'{
 const digits=record(assignment.digits),empty=rule.scope.filter(c=>digits[c]===undefined);
 const domains=empty.map(c=>[...(candidates.get(c)??new Set(rule.board.alphabet))]);
 for(const domain of domains)for(const digit of domain)if(!rule.board.alphabet.includes(digit))throw new RangeError('Candidate outside the alphabet');
 const output=new Map(empty.map(c=>[c,new Set<Digit>()]));
 if(domains.some(d=>d.length===0))return output;
 let work=Math.max(1,rule.scope.length);for(const domain of domains){work*=domain.length;if(work>ALLOWED_WORK_LIMIT)return 'too-large';}
 const budget={remaining:ALLOWED_WORK_LIMIT};
 function visit(i:number):void{
  spend(budget);
  if(i===empty.length){const verdict=refine(rule,{...assignment,digits},budget);if(verdict.status!=='broken')for(const c of empty)output.get(c)!.add(digits[c]);return;}
  for(const digit of domains[i]){digits[empty[i]]=digit;visit(i+1);}delete digits[empty[i]];
 }
 try{visit(0);}catch(error){if(error instanceof EvaluationLimit||error instanceof LanguageError&&error.diagnostic.code==='E_LANGUAGE_LIMIT')return 'too-large';throw error;}return output;
}
export function checkAnswer(compiled:CompiledCase,answer:Assignment):{holds:boolean;broken:{rule:CompiledRule;cells:Cell[]}[]}{
 const digits=record(answer.digits);
 const complete=compiled.board.activeCells.every(c=>digits[c]!==undefined&&compiled.board.alphabet.includes(digits[c]));
 const broken:{rule:CompiledRule;cells:Cell[]}[]=[];let decided=true;
 for(const rule of compiled.rules){const verdict=evaluate(rule,answer);if(verdict.status==='undecided')decided=false;if(verdict.status==='broken')broken.push({rule,cells:[...verdict.cells??rule.scope]});}
 return {holds:complete&&decided&&broken.length===0&&compiled.board.givens.every(g=>digits[g.cell]===g.digit),broken};
}
