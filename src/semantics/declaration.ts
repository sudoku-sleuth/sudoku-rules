import { declarationParameters, type DeclarationAST } from '../declarations.js';
import type { Cell } from './types.js';
/** Project parsed values for the finite semantic primitives. */
export function semanticParameters(ast: DeclarationAST): Record<string, unknown> {
  const values=declarationParameters({...ast,cells:undefined});
  delete values.element;
  // Board dimensions have a compact semantic representation.
  const positional=ast.parameters.find(p=>p.name.value === "board" && /(?:^|\/)sudoku(?:\.md)?$/.test(ast.kind.value));
  if(positional) {delete values[positional.name.value];const {rows,cols}=positional.value.value as {rows:number;cols:number};values.size=`${rows}x${cols}`;}
  // Keyword integers retain their exact decimal spelling in the AST. The finite
  // evaluator accepts only safe integer operands, as before.
  for(const p of ast.parameters) if(p.notation === 'keywords' && p.value.fields) {
    const record={...p.value.value as Record<string,unknown>};
    for(const field of p.value.fields) if(/^-?\d+$/.test(field.value.raw)) record[field.name.value]=Number(field.value.raw);
    values[p.name.value]=record;
  }
  return values;
}

export function semanticDeclaration(ast: DeclarationAST) {
  const reference=ast.kind.value, root='https://rules.sudoku-sleuth.com/';
  const spelling=reference.startsWith(root)?reference.slice(root.length,-3):reference;
  const legacyKind: Record<string,string> = {'parity-line':'parity','odd-even-cells':'parity-cells','between-line':'between'};
  const kind=legacyKind[spelling] ?? (['whispers-4','whispers-5'].includes(spelling)?'whispers':spelling==='killer-cage'?'cage':spelling);
  const parameters=semanticParameters(ast);
  if(spelling==='whispers-4' || spelling==='whispers-5')parameters.gap=Number(spelling.slice(-1));
  const namedCells=ast.parameters.find(p=>['cells','line'].includes(p.name.value));
  if(namedCells) delete parameters[namedCells.name.value];
  return {kind,negated:ast.negations.length%2===1,parameters,cells:(ast.cells?.value ?? namedCells?.value.value) as Cell[]|undefined,
    condition:ast.condition?{unless:ast.condition.unless,predicate:ast.condition.predicate.value}:undefined};
}
