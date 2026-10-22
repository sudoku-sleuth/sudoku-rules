import { compilePage, type CompiledPage, type PageSource } from './library.js';
import { checkFormula, type CheckedPrelude } from './language/checker.js';
import { parseFormula } from './language/parser.js';
import type { Expr } from './language/ast.js';
import { diagnostic, location, type Result } from './language/diagnostics.js';

/** A shorthand has its own input contract and binds every canonical input explicitly. */
export function compileBoundAlias(page: PageSource, bindings: unknown, target: CompiledPage, prelude: CheckedPrelude): Result<CompiledPage> {
  const span = location(page, 0, 0);
  const bad = (message: string): Result<CompiledPage> => ({ diagnostics: [diagnostic('E_ALIAS_TARGET', span, message)] });
  if (!bindings || typeof bindings !== 'object' || Array.isArray(bindings)) return bad('alias_bind must map every target parameter to a formula expression.');
  const values = bindings as Record<string, unknown>;
  if (Object.keys(values).sort().join('\0') !== target.parameters.map(p => p.name).sort().join('\0') || Object.values(values).some(v => typeof v !== 'string'))
    return bad('alias_bind must bind every target parameter exactly once, using formula expressions.');
  // Compile the shorthand's own grammar without introducing a second definition.
  const stub = compilePage({...page, text: page.text.replace(/Class:\s*\*\*[^*]+\*\*/g, 'Class: **first-order**') + '\nClass: **first-order**.\n\n```text\ntrue\n```\n'}, prelude);
  if (!stub.value) return stub;
  const environment = {...prelude.environment, symbols: {...prelude.environment.symbols, ...Object.fromEntries(stub.value.parameters.map(p => [p.name,p.type]))}};
  const parsed = target.parameters.map(p => parseFormula(values[p.name] as string, {file:page.file}));
  const diagnostics = parsed.flatMap(p => p.diagnostics);
  if (diagnostics.length) return {diagnostics};
  // Rename canonical locals as well as parameters to prevent capture by shorthand inputs.
  const names = new Map<string,string>();
  const collect = (node: Expr) => { for (const b of node.binders ?? []) names.set(b.name,''); node.children.forEach(collect); };
  target.parameters.forEach(p => names.set(p.name,''));
  target.formulas.forEach(f => collect(f.ast));
  let serial = 0;
  for (const name of names.keys()) { let fresh: string; do { fresh = `boundAlias${serial++}`; } while (environment.symbols[fresh] || environment.terms[fresh]); names.set(name,fresh); }
  const rename = (node: Expr): Expr => ({...node, ...(node.kind === 'name' && names.has(node.value!) ? {value:names.get(node.value!)} : {}), binders:node.binders?.map(b => ({...b,name:names.get(b.name)!})), children:node.children.map(rename)});
  const formulas = [];
  for (const formula of target.formulas) {
    let ast = rename(formula.ast);
    for (let i = target.parameters.length-1; i >= 0; i--) {
      const p = target.parameters[i];
      ast = {kind:'let',span,binders:[{name:names.get(p.name)!,type:p.type,span}],children:[parsed[i].value!,ast]};
    }
    const checked = checkFormula(ast,environment);
    diagnostics.push(...checked.diagnostics);
    if (checked.value) formulas.push(checked.value);
  }
  return diagnostics.length ? {diagnostics} : {value:{...stub.value,formulas},diagnostics};
}
