import { chosenAnswerPrimitives } from "../shared-primitives.js";
import { capture, diagnostic, fail, type Diagnostic, type Result, type Span } from "./diagnostics.js";
import { expressionLabel, describeType } from "./wording.js";
import { arithmetic, exact, floor, printExact } from "./exact.js";
import { collection, scalar, typeName, type CheckedFormula, type Declaration, type Expr, type LogicClass, type Type, type TypedDeclaration, type TypedExpr } from "./ast.js";

export interface Environment { symbols: Record<string, Type>; terms: Record<string, Declaration>; types?: Record<string, Type>; generics?: string[]; /** Names declared with the play prefix: the player's side. */ play?: Set<string> }
export interface CheckedPrelude { environment: Environment; declarations: TypedDeclaration[] }
const numeric = (type: Type) => ["number", "digit", "value", "position"].includes(type.name);
const collections = ["path", "set", "list", "collection"];
const builtInTypes = ["cell", "digit", "value", "position", "number", "boolean", "string", "path", "set", "list", "optional", "fn", "record", "enum", "collection", "expression", "clause"];
function same(a: Type, b: Type): boolean { return typeName(a) === typeName(b); }
function assignable(actual: Type, expected: Type): boolean {
  if (same(actual, expected)) return true;
  if (actual.name === "empty") return true;
  if (actual.name === "digit" && expected.name === "position") return true;
  if (actual.name === "path" && expected.name === "list") return !!actual.args?.[0] && !!expected.args?.[0] && assignable(actual.args[0],expected.args[0]);
  if (expected.name === "collection" && collections.includes(actual.name)) return !!actual.args?.[0] && !!expected.args?.[0] && assignable(actual.args[0],expected.args[0]);
  if (expected.name === "number" && numeric(actual)) return true;
  if (actual.name === "literal" && expected.name === "string") return true;
  if (["literal", "enum"].includes(actual.name) && expected.name === "enum" && actual.members?.every(value => expected.members?.includes(value))) return true;
  if (actual.name === "fn" && expected.name === "fn") return actual.args?.length === expected.args?.length && (expected.args ?? []).every((t, i) => assignable(t, actual.args![i])) && !!actual.result && !!expected.result && assignable(actual.result, expected.result);
  if (actual.name === "record" || expected.name === "record") return false;
  if (actual.name === "enum" || expected.name === "enum" || actual.name === "literal" || expected.name === "literal") return false;
  return actual.name === expected.name && (actual.args ?? []).length === (expected.args ?? []).length && (actual.args ?? []).every((t, i) => assignable(t, expected.args![i])) && (!expected.result || !!actual.result && assignable(actual.result, expected.result));
}
function validateType(type: Type, env: Environment, span: Span) {
  // Empty collections and string literals have inferred types that source declarations cannot name.
  if (type.name === "empty" || type.name === "literal") return;
  const arity = ["path", "set", "list", "optional", "collection"].includes(type.name) ? 1 : 0;
  if (!builtInTypes.includes(type.name) && !env.generics?.includes(type.name) && !Object.hasOwn(env.types ?? {}, type.name)) {
    fail("E_TYPE", span, `The type ${type.name} is not defined; declare it in the shared definitions.`);
  }
  if (type.name !== "fn" && (type.args?.length ?? 0) !== arity) fail("E_TYPE", span, `The type ${type.name} needs ${arity} item type${arity === 1 ? "" : "s"} inside <...>; this declaration gives ${type.args?.length ?? 0}.`);
  for (const child of type.args ?? []) validateType(child, env, span);
  if (type.result) validateType(type.result, env, span);
  for (const field of Object.values(type.fields ?? {})) validateType(field, env, span);
  if (type.name === "enum" && (!type.members?.length || new Set(type.members).size !== type.members.length)) fail("E_TYPE", span, "List at least one allowed choice in enum{...}, with each choice appearing once.");
}
function required(node: TypedExpr, type: Type, facts: Expr[] = [], env: Environment = {symbols:{},terms:{}}) {
  if (type.name === "position" && numeric(node.type) && integer(node, facts, env)) return;
  if (!assignable(node.type, type)) fail("E_TYPE", node.span, `${expressionLabel(node)} must be ${describeType(type)}; it is ${describeType(node.type)}.`);
}
export function expressionKey(node: Expr): string {
  const structure = (value: Expr): unknown => [value.kind, value.value ?? null, value.inclusive ?? false, value.hasDomain ?? false,
    (value.binders ?? []).map(binder => [binder.name, !value.hasDomain && binder.type ? typeName(binder.type) : null]), value.children.map(structure)];
  return JSON.stringify(structure(node));
}
function substitute(node: Expr, bindings: Record<string, Expr>): Expr {
  if (node.kind === "name" && Object.hasOwn(bindings, node.value!)) return bindings[node.value!];
  return { ...node, children: node.children.map(child => substitute(child, bindings)) };
}
function factsFrom(node: Expr): Expr[] {
  return node.kind === "binary" && node.value === "and" ? node.children.flatMap(factsFrom) : [node];
}
interface Linear { coefficients: Map<string, bigint>; constant: bigint; strict?: boolean }
function linear(node: Expr): Linear | undefined {
  if (node.kind === "number") { const value = exact(node.value!, node.span); return value.denominator === 1n ? { coefficients: new Map(), constant: value.numerator } : undefined; }
  if (node.kind === "binary" && ["+", "-"].includes(node.value!)) {
    const a = linear(node.children[0]), b = linear(node.children[1]); if (!a || !b) return;
    const sign = node.value === "+" ? 1n : -1n;
    const coefficients = new Map(a.coefficients);
    for (const [key, value] of b.coefficients) coefficients.set(key, (coefficients.get(key) ?? 0n) + sign * value);
    for (const [key, value] of coefficients) if (!value) coefficients.delete(key);
    return { coefficients, constant: a.constant + sign * b.constant };
  }
  if (["name","call","index","member"].includes(node.kind) || (node.kind === "unary" && ["magnitude","floor"].includes(node.value!))) return { coefficients: new Map([[expressionKey(node), 1n]]), constant: 0n };
}
function inequality(node: Expr): Linear | undefined {
  if (node.kind !== "binary" || !["<", "<=", ">", ">="].includes(node.value!)) return;
  const [a, b] = [">", ">="].includes(node.value!) ? [...node.children].reverse() : node.children;
  const result = linear({ ...node, value: "-", children: [a, b] });
  if (result) result.strict = ["<", ">"].includes(node.value!);
  return result;
}
function prove(goal: Expr, facts: Expr[], env: Environment, depth = 0, work = {remaining: 2000, keys: new WeakMap<Expr, string>()}): boolean {
  if (--work.remaining < 0 || depth > 8) return false;
  // A proof revisits the same immutable fact nodes in many branches. Keep keys
  // only for this proof, so callers may edit and check an AST again afterwards.
  const exprKey = (node: Expr): string => {
    let key = work.keys.get(node);
    if (key === undefined) { key = expressionKey(node); work.keys.set(node, key); }
    return key;
  };
  if (goal.kind === "binary" && goal.value === "and") return goal.children.every(child => prove(child, facts, env, depth + 1, work));
  const factKeys = new Set(facts.map(exprKey));
  if (factKeys.has(exprKey(goal))) return true;
  if (facts.some(fact=>fact.kind==="boolean" && fact.value==="false" || fact.kind==="unary" && fact.value==="not" && factKeys.has(exprKey(fact.children[0])))) return true;
  if (goal.kind === "boolean") return goal.value === "true";
  if (goal.kind === "unary" && goal.value === "not" && goal.children[0].kind === "boolean") return goal.children[0].value === "false";
  if (goal.kind === "binary" && goal.value === "or") return goal.children.some(child=>prove(child,facts,env,depth+1,work));
  if (goal.kind === "binary" && goal.value === "implies") return prove(goal.children[1],[...facts,...factsFrom(goal.children[0])],env,depth+1,work);
  if (goal.kind === "call" && goal.children[0].kind === "name") {
    const term=env.terms[goal.children[0].value!];
    if (term?.body && term.result.name==="boolean" && prove(substitute(term.body,Object.fromEntries(term.parameters.map((p,i)=>[p.name,goal.children[i+1]]))),facts,env,depth+1,work)) return true;
  }
  if (goal.kind === "binary" && goal.value === "=" && goal.children[0].kind === "unary" && goal.children[0].value === "floor" && exprKey(goal.children[0].children[0]) === exprKey(goal.children[1])) {
    if (integerSyntax(goal.children[1], env)) return true;
    for (const fact of facts) {
      if (fact.kind !== "binary" || fact.value !== "in" || exprKey(fact.children[0]) !== exprKey(goal.children[1])) continue;
      const domain = fact.children[1] as TypedExpr;
      if (domain.type && collections.includes(domain.type.name) && ["position", "digit"].includes(domain.type.args?.[0].name ?? "")) return true;
    }
  }
  // A mapped nonempty domain has a nonempty image, whether repeated outputs collapse or not.
  if (goal.kind === "binary" && [">", "!=", "<"].includes(goal.value!)) {
    const magnitude = goal.children[0];
    if (magnitude.kind === "unary" && magnitude.value === "magnitude" && magnitude.children[0].kind === "image" && !magnitude.children[0].children[2] && goal.children[1].kind === "number" && goal.children[1].value === "0" && goal.value !== "<") {
      return prove(binary(">",{...magnitude,children:[magnitude.children[0].children[0]]},goal.children[1]),facts,env,depth+1,work);
    }
  }
  // Unfold numeric definitions; a remainder is within [0, divisor).
  if (goal.kind === "binary" && ["<", "<=", ">", ">="].includes(goal.value!)) {
    const [a,b] = [">", ">="].includes(goal.value!) ? [...goal.children].reverse() : goal.children;
    const unfold = (node: Expr): Expr => {
      if (node.kind !== "call" || node.children[0].kind !== "name") return node;
      const term = env.terms[node.children[0].value!];
      return term?.body && numeric(term.result) ? substitute(term.body,Object.fromEntries(term.parameters.map((p,i)=>[p.name,node.children[i+1]]))) : node;
    };
    const left = unfold(a), right = unfold(b);
    if (left.kind==="binary" && left.value==="mod" && ["<",">"].includes(goal.value!) && exprKey(left.children[1])===exprKey(right)) return true;
    if (right.kind==="binary" && right.value==="mod" && ["<=",">="].includes(goal.value!) && left.kind==="number" && left.value==="0") return true;
    if (exprKey(left)!==exprKey(a) || exprKey(right)!==exprKey(b)) {
      if (prove(binary([">",">="].includes(goal.value!) ? (goal.value===">"?"<":"<=") : goal.value!,left,right),facts,env,depth+1,work)) return true;
    }
  }
  if (goal.kind === "binary" && ["<=", ">="].includes(goal.value!)) {
    const [zero,size] = goal.value==="<=" ? goal.children : [...goal.children].reverse();
    if (zero.kind==="number" && zero.value==="0" && size.kind==="unary" && size.value==="magnitude") {
      const operand=size.children[0];
      const type="type" in operand ? (operand as TypedExpr).type : operand.kind==="name" ? env.symbols[operand.value!] : operand.kind==="call" && operand.children[0].kind==="name" ? env.terms[operand.children[0].value!]?.result : undefined;
      if (type && collections.includes(type.name) || ["set","comprehension","image","interval"].includes(operand.kind)) return true;
    }
  }
  const wanted = inequality(goal);
  if (wanted) {
    if (!wanted.coefficients.size) return wanted.strict ? wanted.constant < 0n : wanted.constant <= 0n;
    const key = (term: Linear) => JSON.stringify([...term.coefficients].sort(([a], [b]) => a.localeCompare(b)).map(([k, v]) => [k, String(v)]));
    const wantedKey = key(wanted);
    const knownInequalities: Linear[] = [];
    for (const fact of facts) {
      const alternatives = fact.kind === "binary" && fact.value === "=" ? [binary("<=", fact.children[0], fact.children[1]), binary(">=", fact.children[0], fact.children[1])] : [fact];
      for (const alternative of alternatives) {
        const given = inequality(alternative);
        if (given) {
          knownInequalities.push(given);
          if (given.strict && alternative.children.every(child => integerSyntax(child,env))) knownInequalities.push({...given,constant:given.constant+1n,strict:false});
        }
        if (given && key(given) === wantedKey) {
          if (given.constant > wanted.constant || given.constant === wanted.constant && (given.strict || !wanted.strict)) return true;
          if (given.strict && !wanted.strict && given.constant + 1n >= wanted.constant && alternative.children.every(child => integerSyntax(child, env)) && goal.children.every(child => integerSyntax(child, env))) return true;
        }
      }
    }
    // Add pairs of inequalities: a<b and b<=c imply a<c. No floating-point rounding.
    const combinations = knownInequalities.slice(0,64);
    for (const a of combinations) for (const b of combinations) {
      const coefficients = new Map(a.coefficients);
      for (const [atom, value] of b.coefficients) coefficients.set(atom,(coefficients.get(atom)??0n)+value);
      for (const [atom,value] of coefficients) if (!value) coefficients.delete(atom);
      const combined = {coefficients,constant:a.constant+b.constant,strict:a.strict||b.strict};
      if (!combined.coefficients.size && (combined.constant>0n || combined.constant===0n && combined.strict)) return true;
      if (key(combined)===wantedKey && (combined.constant>wanted.constant || combined.constant===wanted.constant && (combined.strict||!wanted.strict))) return true;
    }
  }
  if (goal.kind === "binary" && goal.value === "!=" && goal.children[1].kind === "number" && goal.children[1].value === "0") {
    return prove(binary(">", goal.children[0], goal.children[1]), facts, env, depth + 1, work) || prove(binary("<", goal.children[0], goal.children[1]), facts, env, depth + 1, work);
  }
  // Split disjunctive facts soundly: the goal must follow in every possible branch.
  for (let i=0;i<facts.length;i++) {
    const fact=facts[i];
    if (fact.kind==="binary" && fact.value==="or") {
      const remaining=facts.filter((_,j)=>j!==i);
      if (fact.children.every(branch=>prove(goal,[...remaining,...factsFrom(branch)],env,depth+1,work))) return true;
    }
  }
  // Expand checked, nonrecursive Boolean terms to their defining facts.
  const expanded: Expr[] = [];
  for (const fact of facts) {
    if (fact.kind === "binary" && fact.value === "implies" && prove(fact.children[0],facts.filter(item=>item!==fact),env,depth+1,work)) expanded.push(...factsFrom(fact.children[1]));
    if (fact.kind !== "call" || fact.children[0].kind !== "name") continue;
    const term = Object.hasOwn(env.terms, fact.children[0].value!) ? env.terms[fact.children[0].value!] : undefined;
    if (term?.body && term.result.name === "boolean") {
      expanded.push(...factsFrom(substitute(term.body, Object.fromEntries(term.parameters.map((parameter, i) => [parameter.name, fact.children[i + 1]])))));
    }
  }
  const known = new Set(facts.map(exprKey));
  const added = expanded.filter(fact => !known.has(exprKey(fact)));
  return added.length ? prove(goal, [...facts, ...added], env, depth + 1, work) : false;
}
const nameNode = (name: string, span: Span): Expr => ({ kind: "name", value: name, span, children: [] });
const numberNode = (value: string, span: Span): Expr => ({ kind: "number", value, span, children: [] });
const binary = (value: string, a: Expr, b: Expr): Expr => ({ kind: "binary", value, span: a.span, children: [a, b] });
function integerSyntax(node: Expr, env: Environment): boolean {
  if ("type" in node && ["position", "digit"].includes((node as TypedExpr).type.name)) return true;
  if ("constant" in node && (node as TypedExpr).constant !== undefined) return fromConstant((node as TypedExpr).constant!, node.span).denominator === 1n;
  if (node.kind === "number") return exact(node.value!, node.span).denominator === 1n;
  if (node.kind === "name") return Object.hasOwn(env.symbols, node.value!) && ["position", "digit"].includes(expand(env.symbols[node.value!], env).name);
  if (node.kind === "call" && node.children[0].kind === "name") return Object.hasOwn(env.terms, node.children[0].value!) && ["position", "digit"].includes(env.terms[node.children[0].value!].result.name);
  if (node.kind === "unary" && node.value === "floor") return true;
  if (node.kind === "unary" && node.value === "magnitude") {
    const child = node.children[0];
    const type = "type" in child ? (child as TypedExpr).type : child.kind === "name" ? env.symbols[child.value!] : child.kind==="call" && child.children[0].kind==="name" ? env.terms[child.children[0].value!]?.result : undefined;
    if (type && collections.includes(type.name)) return true;
  }
  if (node.kind === "unary" && ["+", "-", "magnitude"].includes(node.value!)) return integerSyntax(node.children[0], env);
  if (node.kind === "binary" && ["+", "-", "*", "mod", "^"].includes(node.value!)) return node.children.every(child => integerSyntax(child, env));
  return false;
}
function unify(actual: Type, expected: Type, generics: string[], bindings: Record<string, Type>, span: Span, thing = "This argument") {
  if (generics.includes(expected.name)) {
    if (bindings[expected.name] && !same(bindings[expected.name], actual)) fail("E_TYPE", span, `${expected.name} must mean the same type throughout this call; it is used for both ${describeType(bindings[expected.name])} and ${describeType(actual)}.`);
    bindings[expected.name] = actual; return;
  }
  if (actual.name === "fn" && expected.name === "fn") {
    function bind(a: Type, e: Type) {
      if (generics.includes(e.name)) { unify(a, e, generics, bindings, span, thing); return; }
      if (a.name === e.name) { (e.args ?? []).forEach((child, i) => { if (a.args?.[i]) bind(a.args[i], child); }); if (a.result && e.result) bind(a.result, e.result); }
    }
    bind(actual, expected);
    if (!assignable(actual, specialise(expected, bindings))) fail("E_TYPE", span, `${thing} must be ${describeType(expected)}; it is ${describeType(actual)}.`);
    return;
  }
  if ((actual.name === expected.name || actual.name === "path" && expected.name === "list" || expected.name === "collection" && collections.includes(actual.name)) && expected.args) {
    if (actual.args?.length !== expected.args.length) fail("E_TYPE", span, `${thing} has a different number of item types from the declared type.`);
    expected.args.forEach((child, i) => unify(actual.args![i], child, generics, bindings, span, thing));
    if (expected.result) unify(actual.result!, expected.result, generics, bindings, span, thing);
  } else if (!assignable(actual, expected)) fail("E_TYPE", span, `${thing} must be ${describeType(expected)}; it is ${describeType(actual)}.`);
}
function specialise(type: Type, bindings: Record<string, Type>): Type {
  return Object.hasOwn(bindings, type.name) ? bindings[type.name] : { ...type, args: type.args?.map(child => specialise(child, bindings)), result: type.result ? specialise(type.result, bindings) : undefined, fields: type.fields ? Object.fromEntries(Object.entries(type.fields).map(([key, field]) => [key, specialise(field, bindings)])) : undefined };
}

function integer(node: TypedExpr, facts: Expr[], env: Environment): boolean {
  if (node.constant !== undefined) return fromConstant(node.constant, node.span).denominator === 1n;
  if (["digit", "position"].includes(node.type.name)) return true;
  if (node.kind === "unary" && (node.value === "floor" || node.value === "magnitude" && collections.includes(node.children[0].type.name))) return true;
  if (node.kind === "unary" && ["+", "-", "magnitude"].includes(node.value!)) return integer(node.children[0], facts, env);
  if (node.kind === "conditional") return node.children.slice(1).every(child=>integer(child,facts,env));
  if (node.kind === "binary" && ["+", "-", "*", "mod", "^"].includes(node.value!)) return node.children.every(child => integer(child, facts, env));
  return prove(binary("=", { kind: "unary", value: "floor", span: node.span, children: [node] }, node), facts, env);
}

function infer(node: Expr, env: Environment, facts: Expr[] = [], requireBinding = false): TypedExpr {
  const result = (type: Type, children: TypedExpr[] = [], constant?: string): TypedExpr => ({ ...node, type, children, ...(constant === undefined ? {} : { constant }) });
  const boolean = scalar("boolean");
  switch (node.kind) {
    case "number": return result(scalar("number"), [], printExact(exact(node.value!, node.span)));
    case "literal": return result({ name: "literal", members: [node.value!] });
    case "boolean": return result(boolean);
    case "name": {
      const term = Object.hasOwn(env.terms, node.value!) ? env.terms[node.value!] : undefined;
      const type = (Object.hasOwn(env.symbols, node.value!) ? env.symbols[node.value!] : undefined) ?? (term ? { name: "fn", args: term.parameters.map(p => p.type), result: term.result } : undefined);
      if (!type) fail(requireBinding ? "E_NAME_UNBOUND" : "E_NAME_UNDEFINED", node.span, `${node.value} is not defined; declare it as a parameter, a formula variable or a shared term.`);
      return result(expand(type, env));
    }
    case "unary": {
      const child = infer(node.children[0], env, facts, requireBinding);
      if (node.value === "not") { required(child, boolean); return result(boolean, [child]); }
      if (node.value === "magnitude" && collections.includes(child.type.name)) return result(scalar("position"), [child]);
      if (!numeric(child.type)) fail("E_TYPE", child.span, `${expressionLabel(node)} needs ${node.value === "magnitude" ? "a number or a group of items" : "a number"}; ${expressionLabel(child)} is ${describeType(child.type)}.`);
      let constant: string | undefined;
      if (child.constant) {
        const value = fromConstant(child.constant, child.span);
        constant = node.value === "floor" ? String(floor(value)) : printExact({ ...value, numerator: node.value === "-" ? -value.numerator : node.value === "magnitude" && value.numerator < 0n ? -value.numerator : value.numerator });
      }
      return result(scalar("number"), [child], constant);
    }
    case "binary": {
      const left = infer(node.children[0], env, facts, requireBinding);
      const rightFacts = ["and", "implies"].includes(node.value!) ? [...facts, ...factsFrom(left)] : facts;
      const right = infer(node.children[1], env, rightFacts, requireBinding);
      const children = [left, right];
      if (["and", "or", "implies", "iff"].includes(node.value!)) { children.forEach(child => required(child, boolean)); return result(boolean, children); }
      if (["in", "notin"].includes(node.value!)) {
        if (!collections.includes(right.type.name)) fail("E_TYPE", right.span, `${expressionLabel(right)} must be a group of items to test whether ${expressionLabel(left)} belongs to it.`);
        if (!numeric(left.type) || !numeric(right.type.args![0])) required(left, right.type.args![0]); return result(boolean, children);
      }
      if (["subset", "union", "intersect"].includes(node.value!)) {
        if (left.type.name !== "set" || right.type.name !== "set" || !assignable(left.type, right.type) && !assignable(right.type, left.type)) fail("E_TYPE", node.span, `${expressionLabel(left)} and ${expressionLabel(right)} must be sets of the same kind of item for ${node.value}.`);
        return result(node.value === "subset" ? boolean : assignable(left.type, right.type) ? right.type : left.type, children);
      }
      if (["=", "!="].includes(node.value!)) {
        if (!assignable(left.type, right.type) && !assignable(right.type, left.type) && !(numeric(left.type) && numeric(right.type))) fail("E_TYPE", node.span, `${expressionLabel(left)} and ${expressionLabel(right)} cannot be compared: one is ${describeType(left.type)} and the other is ${describeType(right.type)}.`);
        return result(boolean, children);
      }
      if (!numeric(left.type) || !numeric(right.type)) fail("E_TYPE", node.span, `${expressionLabel(node)} needs numbers on both sides of ${node.value}.`);
      if (["<", "<=", ">", ">="].includes(node.value!)) return result(boolean, children);
      if (["/", "mod", "^"].includes(node.value!) && right.constant !== undefined) arithmetic(node.value!, exact(node.value === "^" ? "1" : "0"), fromConstant(right.constant, right.span), node.span);
      if (node.value === "mod" && left.constant !== undefined && !integer(left, facts, env)) fail("E_ARITHMETIC", node.span, `${expressionLabel(node)} needs whole numbers on both sides of mod.`);
      let constant: string | undefined;
      if (left.constant !== undefined && right.constant !== undefined) constant = printExact(arithmetic(node.value!, fromConstant(left.constant, left.span), fromConstant(right.constant, right.span), node.span));
      if (node.value === "/" && right.constant === undefined && !prove(binary("!=", node.children[1], numberNode("0", right.span)), facts, env)) {
        fail("E_OPERATION_UNGUARDED", right.span, `${expressionLabel(right)} could be zero; add a condition proving it is not zero before dividing by it.`);
      }
      if (node.value === "mod" && constant === undefined && (!integer(left, facts, env) || !integer(right, facts, env) || !prove(binary(">", right, numberNode("0", right.span)), facts, env))) fail("E_OPERATION_UNGUARDED", node.span, `Before using ${expressionLabel(node)}, show that ${expressionLabel(left)} and ${expressionLabel(right)} are whole numbers and ${expressionLabel(right)} is greater than zero.`);
      if (node.value === "^" && right.constant === undefined && (!integer(right, facts, env) || !prove(binary(">=", right, numberNode("0", right.span)), facts, env))) fail("E_OPERATION_UNGUARDED", right.span, `Before using ${expressionLabel(node)}, show that the power ${expressionLabel(right)} is a whole number greater than or equal to zero.`);
      return result(scalar(["+", "-", "*", "mod", "^"].includes(node.value!) && children.every(child => integer(child, facts, env)) ? "position" : "number"), children, constant);
    }
    case "call": {
      const callee = infer(node.children[0], env, facts);
      if (callee.type.name !== "fn") fail("E_TYPE", callee.span, `${expressionLabel(callee)} is ${describeType(callee.type)}, so it cannot be called with arguments.`);
      const expected = callee.type.args ?? [];
      if (node.children.length - 1 !== expected.length) fail("E_CALL_ARITY", callee.span, `${expressionLabel(callee)} needs ${expected.length} argument${expected.length === 1 ? "" : "s"}; this call gives ${node.children.length - 1}.`);
      const term = node.children[0].kind === "name" && Object.hasOwn(env.terms, node.children[0].value!) ? env.terms[node.children[0].value!] : undefined;
      const bindings: Record<string, Type> = Object.create(null);
      const children: TypedExpr[] = [callee];
      node.children.slice(1).forEach((child, i) => {
        const checked = infer(child, env, facts, requireBinding);
        if (expected[i].name === "position") required(checked, expected[i], facts, env);
        else unify(checked.type, expand(expected[i], env), term?.generics ?? [], bindings, child.span, `${expressionLabel(checked)} (parameter ${term?.parameters[i].name ?? i + 1} of ${expressionLabel(callee)})`);
        children.push(checked);
      });
      if (term?.requires) {
        const requirement = substitute(term.requires, Object.fromEntries(term.parameters.map((parameter, i) => [parameter.name, children[i + 1]])));
        if (!prove(requirement, facts, env)) fail("E_OPERATION_UNGUARDED", node.span, `Before calling ${term.name}, add a condition proving ${expressionLabel(requirement)}.`);
      }
      const resolved = expand(specialise(callee.type.result!, bindings), env);
      validateType(resolved, env, node.span);
      return result(resolved, children);
    }
    case "index": {
      const path = infer(node.children[0], env, facts), index = infer(node.children[1], env, facts, true);
      if (!["path", "list"].includes(path.type.name) || !numeric(index.type)) fail("E_TYPE", node.span, `${expressionLabel(path)} must be an ordered list, and its position ${expressionLabel(index)} must be a whole number.`);
      if (!integer(index, facts, env)) fail("E_TYPE", index.span, `The position ${expressionLabel(index)} in ${expressionLabel(path)} must be a whole number.`);
      const size: Expr = { kind: "unary", value: "magnitude", span: path.span, children: [node.children[0]] };
      if (!prove(binary("<=", numberNode("0", index.span), node.children[1]), facts, env) || !prove(binary("<", node.children[1], size), facts, env)) {
        fail("E_OPERATION_UNGUARDED", node.span, `The position ${expressionLabel(index)} might be outside ${expressionLabel(path)}; show that 0 ≤ ${expressionLabel(index)} < |${expressionLabel(path)}| before reading it (positions start at 0).`);
      }
      return result(path.type.args![0], [path, index]);
    }
    case "member": {
      const record = infer(node.children[0], env, facts);
      const type = expand(record.type, env);
      if (type.name !== "record" || !Object.hasOwn(type.fields ?? {}, node.value!)) fail("E_TYPE", node.span, `${expressionLabel(record)} has no declared field named ${node.value}.`);
      return result(type.fields![node.value!], [record]);
    }
    case "interval": {
      const children = node.children.map(child => infer(child, env, facts));
      children.forEach(child => { if (!numeric(child.type) || !integer(child, facts, env)) fail("E_TYPE", child.span, `The range boundary ${expressionLabel(child)} must be a whole number.`); });
      return result(collection("set", scalar("position")), children);
    }
    case "set": {
      const children = node.children.map(child => infer(child, env, facts));
      const item = children[0]?.type ?? scalar("empty");
      children.forEach(child => required(child, item)); return result(collection("set", item), children);
    }
    case "comprehension": case "image": case "quantifier": case "aggregate": case "lambda": {
      const hasDomain = node.kind === "comprehension" || node.kind === "image" || node.hasDomain;
      const domain = hasDomain ? infer(node.children[0], env, facts) : undefined;
      if (node.kind === "aggregate" && !domain) fail("E_SIGNATURE_REQUIRED", node.span, `Specify which items ${node.value} runs over, using in followed by a set or ordered list.`);
      if (domain && !collections.includes(domain.type.name)) fail("E_TYPE", domain.span, `${expressionLabel(domain)} must be a set or ordered list for the formula variables to range over.`);
      const symbols = { ...env.symbols }; const binderFacts = [...facts];
      for (const binder of node.binders ?? []) {
        if (Object.hasOwn(symbols, binder.name) || Object.hasOwn(env.terms, binder.name)) fail("E_NAME_SHADOW", binder.span, `${binder.name} is already defined; use another name for this formula variable.`);
        const type = binder.type ?? domain?.type.args?.[0];
        if (!type) fail("E_SIGNATURE_REQUIRED", binder.span, `Say what ${binder.name} ranges over, using : followed by a type or in followed by a set or ordered list.`);
        validateType(type, env, binder.span); symbols[binder.name] = expand(type, env);
        if (domain && !assignable(domain.type.args![0], symbols[binder.name])) fail("E_TYPE", binder.span, `${binder.name} must accept ${describeType(domain.type.args![0])} from ${expressionLabel(domain)}; its declared type is ${describeType(symbols[binder.name])}.`);
        if (domain) binderFacts.push(binary("in", nameNode(binder.name, binder.span), domain));
        let boundedDomain: Expr | undefined = domain;
        while (boundedDomain?.kind === "comprehension") {
          const variable = nameNode(binder.name,binder.span);
          binderFacts.push(...factsFrom(substitute(boundedDomain.children[1],{[boundedDomain.binders![0].name]:variable})));
          boundedDomain = boundedDomain.children[0];
        }
        if (boundedDomain?.kind === "interval") {
          const variable = nameNode(binder.name, binder.span);
          binderFacts.push(binary("<=", boundedDomain.children[0], variable), binary(boundedDomain.inclusive ? "<=" : "<", variable, boundedDomain.children[1]));
        }
      }
      const filter = node.kind === "image" && node.children[2] ? infer(node.children[2],{...env,symbols},binderFacts) : undefined;
      if (filter) {required(filter,boolean);binderFacts.push(...factsFrom(filter));}
      const body = infer(node.children[hasDomain ? 1 : 0], { ...env, symbols }, binderFacts);
      const children = domain ? [domain, body, ...(filter ? [filter] : [])] : [body];
      const annotated = (value: TypedExpr): TypedExpr => ({ ...value, binders: node.binders?.map(binder => ({ ...binder, type: symbols[binder.name] })) });
      if (node.kind === "image") {
        if (node.value === "list" && domain?.kind !== "interval" && !["path", "list"].includes(domain!.type.name)) fail("E_TYPE", domain!.span, `${expressionLabel(domain!)} has no declared order; use an interval or ordered list to build an ordered list.`);
        return annotated(result(collection(node.value!,body.type),children));
      }
      if (node.kind === "lambda") return annotated(result({ name: "fn", args: (node.binders ?? []).map(b => symbols[b.name]), result: body.type }, children));
      if (node.kind === "aggregate" && node.value !== "count") { if (!numeric(body.type)) fail("E_TYPE", body.span, `${expressionLabel(body)} must be a number to use it in ${node.value}.`); return annotated(result(scalar(integer(body,binderFacts,{...env,symbols}) ? "position" : "number"), children)); }
      required(body, boolean);
      return annotated(result(node.kind === "comprehension" ? collection("set", symbols[node.binders![0].name]) : node.kind === "aggregate" ? scalar("position") : boolean, children));
    }
    case "conditional": {
      const condition = infer(node.children[0], env, facts); required(condition, boolean);
      const yes = infer(node.children[1], env, [...facts, ...factsFrom(condition)]);
      const negated = condition.kind === "binary" && ({"=":"!=","!=":"=","<":">=",">":"<=","<=":">",">=":"<"} as Record<string,string>)[condition.value!] ? {...condition,value:({"=":"!=","!=":"=","<":">=",">":"<=","<=":">",">=":"<"} as Record<string,string>)[condition.value!]} : {kind:"unary" as const,value:"not",span:condition.span,children:[condition]};
      const no = infer(node.children[2], env, [...facts,negated]);
      if (!same(yes.type,no.type) && ["literal", "enum"].includes(yes.type.name) && ["literal", "enum"].includes(no.type.name))
        return result({name:"enum",members:[...new Set([...(yes.type.members ?? []),...(no.type.members ?? [])])]},[condition,yes,no]);
      if (!assignable(yes.type, no.type) && !assignable(no.type, yes.type)) fail("E_TYPE", node.span, `The then and else values must have matching types; ${expressionLabel(yes)} is ${describeType(yes.type)} and ${expressionLabel(no)} is ${describeType(no.type)}.`);
      return result(assignable(yes.type, no.type) ? no.type : yes.type, [condition, yes, no]);
    }
    case "let": {
      const binder = node.binders![0];
      if (Object.hasOwn(env.symbols, binder.name) || Object.hasOwn(env.terms, binder.name)) fail("E_NAME_SHADOW", binder.span, `${binder.name} is already defined; use another name for this local value.`);
      const value = infer(node.children[0], env, facts);
      if (binder.type) { validateType(binder.type, env, binder.span); required(value, expand(binder.type, env)); }
      const body = infer(node.children[1], { ...env, symbols: { ...env.symbols, [binder.name]: binder.type ?? value.type } }, facts);
      return { ...result(body.type, [value, body]), binders: [{ ...binder, type: binder.type ?? value.type }] };
    }
  }
}
function expand(type: Type, env: Environment, visited = new Set<string>()): Type {
  if (Object.hasOwn(env.types ?? {}, type.name)) {
    if (visited.has(type.name)) return type;
    return expand(env.types![type.name], env, new Set([...visited, type.name]));
  }
  return { ...type, args: type.args?.map(child => expand(child, env, visited)), result: type.result ? expand(type.result, env, visited) : undefined, fields: type.fields ? Object.fromEntries(Object.entries(type.fields).map(([name, field]) => [name, expand(field, env, visited)])) : undefined };
}
function fromConstant(text: string, span: Span) {
  const [n, d] = text.split("/"); return { numerator: BigInt(n), denominator: d ? BigInt(d) : 1n };
}
export function logicClass(ast: TypedExpr, env: Environment): LogicClass {
  let classification: LogicClass = "first-order";
  const visited = new Set<string>();
  const structural = (type: Type): boolean => {
    const resolved = expand(type, env);
    return ["set", "list", "path"].includes(resolved.name) || Object.values(resolved.fields ?? {}).some(structural) || (resolved.name === "optional" && resolved.args!.some(structural));
  };
  function visit(node: TypedExpr | Expr, bindings: Record<string, Expr> = {}) {
    let operand = node.children[0];
    while (operand?.kind === "name" && Object.hasOwn(bindings, operand.value!)) operand = bindings[operand.value!];
    const derivedCardinality = node.kind === "unary" && node.value === "magnitude" && operand.kind !== "name" && (operand.kind === "comprehension" || "type" in operand && (operand as TypedExpr).type.name === "set");
    if (node.kind === "aggregate" || node.kind === "image" || derivedCardinality) classification = classification === "existential" ? classification : "with aggregates";
    if (node.kind === "quantifier" && !node.hasDomain) {
      for (const binder of node.binders ?? []) {
        if (!binder.type) continue;
        if (expand(binder.type, env).name === "fn" || node.value === "forall" && structural(binder.type)) fail("E_LOGIC_CLASS", binder.span, `${binder.name} ranges over functions or whole structures without a supplied set; this formula language does not support that. Supply the items to range over.`);
        if (node.value === "exists" && structural(binder.type)) classification = "existential";
      }
    }
    if (node.kind === "call" && node.children[0].kind === "name") {
      const name = node.children[0].value!;
      if (Object.hasOwn(chosenAnswerPrimitives, name)) classification = "existential";
      if (!visited.has(name) && Object.hasOwn(env.terms, name) && env.terms[name]?.body) { visited.add(name); visit(env.terms[name].body!); }
    }
    if (node.kind === "let") { visit(node.children[0], bindings); visit(node.children[1], { ...bindings, [node.binders![0].name]: node.children[0] }); }
    else node.children.forEach(child => visit(child, bindings));
  }
  visit(ast); return classification;
}
/** The first name in `node` that belongs to the play domain, if any. Bound variables are never play names. */
function playUse(node: Expr, env: Environment, bound: Set<string> = new Set()): Expr | undefined {
  if (node.kind === "name" && !bound.has(node.value!) && env.play?.has(node.value!)) return node;
  const local = new Set([...bound, ...(node.binders ?? []).map(b => b.name)]);
  for (const child of node.children) { const found = playUse(child, env, local); if (found) return found; }
}
export type Domain = "solution" | "play";
/** Checks a Boolean formula. A solution formula, which every rule page is, may not name anything from the play domain. */
export function checkFormula(ast: Expr, environment: Environment, domain: Domain = "solution"): Result<CheckedFormula> {
  return capture(() => {
    if (domain === "solution") {
      const use = playUse(ast, environment);
      if (use) fail("E_PLAY_DOMAIN", use.span, `${use.value} depends on what a player has entered, and a rule applies to every solution. Use the answer grid, D or V; the player's entries belong to setup features.`);
    }
    const checked = infer(ast, environment); required(checked, scalar("boolean")); return { ast: checked, logicClass: logicClass(checked, environment) }; });
}
export function checkExpression(ast: Expr, environment: Environment): Result<TypedExpr> {
  return capture(() => infer(ast, environment));
}
export function checkDeclaredType(type: Type, environment: Environment, span: Span): Result<Type> {
  return capture(() => { validateType(type, environment, span); return type; });
}
/**
 * Checks shared declarations. With `base`, the declarations extend an already checked prelude (a setup
 * feature's own types and terms): they may use its names but not redeclare them.
 */
export function checkPrelude(declarations: Declaration[], base?: CheckedPrelude): Result<CheckedPrelude> {
  const environment: Environment = base
    ? { ...base.environment, symbols: Object.assign(Object.create(null), base.environment.symbols), terms: Object.assign(Object.create(null), base.environment.terms), types: Object.assign(Object.create(null), base.environment.types), play: new Set(base.environment.play) }
    : { symbols: Object.create(null), terms: Object.create(null), types: Object.create(null), play: new Set() };
  environment.play ??= new Set();
  const diagnostics: Diagnostic[] = []; const checked: TypedDeclaration[] = [];
  const unique: Declaration[] = [];
  for (const declaration of declarations) {
    if (Object.hasOwn(environment.symbols, declaration.name) || Object.hasOwn(environment.terms, declaration.name) || Object.hasOwn(environment.types!, declaration.name) || declaration.kind === "type" && builtInTypes.includes(declaration.name)) {
      diagnostics.push(diagnostic("E_NAME_SHADOW", declaration.span, `${declaration.name} is already defined; each shared name can be declared only once.`)); continue;
    }
    unique.push(declaration);
    if (declaration.play) environment.play!.add(declaration.name);
    if (declaration.kind === "type") environment.types![declaration.name] = declaration.result;
    else if (declaration.kind === "input") environment.symbols[declaration.name] = declaration.result;
    else environment.terms[declaration.name] = declaration;
  }
  const visiting = new Set<string>(), visited = new Set<string>();
  function dependencies(node: Expr, bound: Set<string>): string[] {
    const calls = node.kind === "name" && !bound.has(node.value!) ? [node.value!] : [];
    const local = new Set([...bound, ...(node.binders ?? []).map(b => b.name)]);
    return [...calls, ...node.children.flatMap(child => dependencies(child, local))];
  }
  function cycle(name: string) {
    if (visiting.has(name)) fail("E_RECURSION", environment.terms[name].span, `${name} depends on itself, directly or through another term; remove that circular definition.`);
    if (visited.has(name)) return;
    if (visiting.size >= 128) fail("E_LANGUAGE_LIMIT", environment.terms[name].span, `${name} follows more than 128 linked term definitions; shorten the chain.`);
    visiting.add(name);
    const term = environment.terms[name];
    const bound = new Set(term.parameters.map(p => p.name));
    for (const child of [...(term?.body ? dependencies(term.body, bound) : []), ...(term?.requires ? dependencies(term.requires, bound) : [])]) if (Object.hasOwn(environment.terms, child)) cycle(child);
    visiting.delete(name); visited.add(name);
  }
  function typeDependencies(type: Type): string[] { return [type.name, ...(type.args ?? []).flatMap(typeDependencies), ...(type.result ? typeDependencies(type.result) : []), ...Object.values(type.fields ?? {}).flatMap(typeDependencies)]; }
  function typeCycle(name: string) {
    if (visiting.has(name)) fail("E_RECURSION", unique.find(d => d.kind === "type" && d.name === name)!.span, `The type ${name} depends on itself, directly or through another type; remove that circular definition.`);
    if (visited.has(name)) return;
    if (visiting.size >= 128) fail("E_LANGUAGE_LIMIT", unique.find(d => d.kind === "type" && d.name === name)!.span, `The type ${name} follows more than 128 linked type definitions; shorten the chain.`);
    visiting.add(name);
    for (const dependency of typeDependencies(environment.types![name])) if (Object.hasOwn(environment.types!, dependency)) typeCycle(dependency);
    visiting.delete(name); visited.add(name);
  }
  const cycles = capture(() => { Object.keys(environment.terms).forEach(cycle); visited.clear(); Object.keys(environment.types!).forEach(typeCycle); });
  diagnostics.push(...cycles.diagnostics);
  if (cycles.diagnostics.length) return { diagnostics };
  for (const declaration of unique) {
    const result = capture(() => {
      const env = { ...environment, symbols: { ...environment.symbols }, generics: declaration.generics };
      if (new Set(declaration.generics).size !== declaration.generics.length) fail("E_NAME_SHADOW", declaration.span, `${declaration.name} lists the same type placeholder more than once; give each placeholder a distinct name.`);
      for (const generic of declaration.generics) if (Object.hasOwn(environment.types!, generic) || builtInTypes.includes(generic)) fail("E_NAME_SHADOW", declaration.span, `${generic} is already a type name; use another name for this type placeholder.`);
      validateType(declaration.result, env, declaration.span);
      for (const parameter of declaration.parameters) {
        if (Object.hasOwn(env.symbols, parameter.name) || Object.hasOwn(env.terms, parameter.name)) fail("E_NAME_SHADOW", parameter.span, `The parameter ${parameter.name} reuses a name that is already defined; choose another parameter name.`);
        validateType(parameter.type, env, parameter.span); env.symbols[parameter.name] = parameter.type;
      }
      if (!declaration.play) for (const part of [declaration.body, declaration.requires]) {
        const use = part && playUse(part, environment, new Set(declaration.parameters.map(p => p.name)));
        if (use) fail("E_PLAY_DOMAIN", use.span, `${declaration.name} is shared by every rule, so it cannot use ${use.value}, which depends on what a player has entered. Declare ${declaration.name} with play, or use the answer grid.`);
      }
      const requires = declaration.requires ? infer(declaration.requires, env) : undefined;
      if (requires) required(requires, scalar("boolean"));
      const body = declaration.body ? infer(declaration.body, env, requires ? factsFrom(requires) : []) : undefined;
      if (body) required(body, expand(declaration.result, env), requires ? factsFrom(requires) : [], env);
      return { ...declaration, body, requires };
    });
    diagnostics.push(...result.diagnostics); if (result.value) checked.push(result.value);
  }
  if (!diagnostics.length) for (const declaration of checked) if (["term", "primitive"].includes(declaration.kind)) environment.terms[declaration.name] = declaration;
  return diagnostics.length ? { diagnostics } : { value: { environment, declarations: [...(base?.declarations ?? []), ...checked] }, diagnostics };
}
