import { caseBlocks, customParameterContract, readCustomDefinitions, type CustomDefinition } from "../custom-definitions.js";
import { declarationLibrary, defaultCasePrelude } from "../declaration-library.js";
import type { Type, TypedExpr } from "../language/ast.js";
import type { CheckedPrelude } from "../language/checker.js";
import type { SemanticFile } from "./types.js";

/**
 * Prelude primitives with no body whose meaning is known not to read the effective value. Any other
 * primitive is opaque, so a formula reaching it is treated as touching values.
 */
export const valueFreePrimitives = new Set([
  "face", "toValue", "row", "col", "cellIndex", "boardCell", "orderedCells", "some", "absent", "present", "unwrap",
  "minimumDigit", "maximumDigit", "minimumValue", "maximumValue", "alphabetPosition", "givenDigit", "relationSpec",
  "cellLists", "connected", "routeAnswer", "routeClosed", "networkAnswer", "partitionAnswer", "selectionAnswer",
  "choiceAnswer", "assignmentAnswer", "symbolAnswer",
]);
/** Board inputs that carry no value channel. */
const valueFreeInputs = new Set(["C", "𝔄", "rows", "cols", "ℤ", "Regions", "H"]);
const limit = 128;

/** A type that can name the value channel: a Channel, an enumeration that lists V, or a type built from one. */
function typeTouches(type: Type | undefined, types: Record<string, Type>, seen: Set<string> = new Set()): boolean {
  if (!type) return true;
  if (type.name === "Channel" || type.members?.includes("V")) return true;
  if (Object.hasOwn(types, type.name) && !seen.has(type.name)) { seen.add(type.name); if (typeTouches(types[type.name], types, seen)) return true; }
  return [...type.args ?? [], ...(type.result ? [type.result] : []), ...Object.values(type.fields ?? {})].some(part => typeTouches(part, types, seen));
}

/**
 * True unless the definition's checked formula, with every prelude term it reaches, provably never reads or
 * binds the effective value V: no `V` or `effective`, no `valueAnswer` or channel read, no Channel-typed
 * parameter or default of its own, and no literal "V". A call to a prelude term whose Channel-typed arguments
 * are all the literal "D" is judged by the callee with those parameters fixed to D: inside it a fixed
 * parameter may only be passed on as a Channel argument of another call or compared with a literal in an
 * `if`, whose branch is then chosen, and every term it reaches is judged the same way. Any other Channel
 * argument (a parameter, a variable, "V", a computed value), a Channel flowing through a binder or let, an
 * opaque primitive, and anything else the check cannot read with certainty (an unchecked definition, an
 * unknown name, recursion past the limit) counts as touching.
 */
export function definitionTouchesValues(definition: CustomDefinition, prelude: CheckedPrelude): boolean {
  const checked = definition.checked;
  if (!checked) return true;
  const { terms, symbols } = prelude.environment;
  const types = prelude.environment.types ?? {};
  const contract = customParameterContract(definition).parameters;
  const parameters = new Set(Object.keys(definition.parameters));
  // A parameter of unreadable type, or one that can carry a channel, counts even when the formula never uses it.
  for (const name of parameters) if (typeTouches(contract[name]?.type, types)) return true;
  const termResults = new Map<string, boolean>();
  const visiting = new Set<string>();
  const noChannels: ReadonlySet<string> = new Set();
  /** `digits` names the callee's Channel parameters fixed to the literal "D"; the verdict is per callee and per such set. */
  const termTouches = (name: string, digits: ReadonlySet<string> = noChannels): boolean => {
    const key = `${name}|${[...digits].sort().join(",")}`;
    const known = termResults.get(key);
    if (known !== undefined) return known;
    const declaration = Object.hasOwn(terms, name) ? terms[name] : undefined;
    if (!declaration || visiting.has(key) || visiting.size >= limit || name === "effective" || name === "valueAnswer") return true;
    visiting.add(key);
    let touches = declaration.parameters.some(p => !(digits.has(p.name) && p.type.name === "Channel") && typeTouches(p.type, types)) || typeTouches(declaration.result, types);
    if (!touches) {
      // A primitive with a Channel parameter is opaque whatever the whitelist says.
      if (!declaration.body) touches = !valueFreePrimitives.has(name) || declaration.parameters.some(p => p.type.name === "Channel");
      else {
        const bound = new Set(declaration.parameters.map(p => p.name));
        touches = [declaration.body, declaration.requires].some(part => part !== undefined && walk(part as TypedExpr, bound, false, digits));
      }
    }
    visiting.delete(key);
    termResults.set(key, touches);
    return touches;
  };
  const isTerm = (name: string, bound: ReadonlySet<string>, own: boolean) => !bound.has(name) && !(own && parameters.has(name)) && Object.hasOwn(terms, name);
  // `own` marks the definition's formula, where its parameter names are in scope; a prelude term sees only its own.
  // `digits` holds the Channel parameters of the prelude term being read that are fixed to the literal "D".
  function walk(node: TypedExpr, bound: ReadonlySet<string>, own: boolean, digits: ReadonlySet<string>): boolean {
    if (node.kind === "call" && node.children[0]?.kind === "name" && isTerm(node.children[0].value!, bound, own)) {
      const name = node.children[0].value!;
      const declaration = terms[name];
      const args = node.children.slice(1);
      if (typeTouches(node.type, types) || args.length !== declaration.parameters.length) return true;
      const fixed = new Set<string>();
      for (const [index, parameter] of declaration.parameters.entries()) {
        if (parameter.type.name !== "Channel") continue;
        const arg = args[index];
        if (!(arg.kind === "literal" && arg.value === "D" || arg.kind === "name" && !own && bound.has(arg.value!) && digits.has(arg.value!))) return true;
        fixed.add(parameter.name);
      }
      const others = args.filter((_, index) => declaration.parameters[index].type.name !== "Channel");
      return termTouches(name, fixed) || others.some(arg => walk(arg, bound, own, digits));
    }
    if (node.kind === "conditional" && node.children.length === 3) {
      const [condition, whenTrue, whenFalse] = node.children;
      const [left, right] = condition.children;
      const operands = condition.kind === "binary" && (condition.value === "=" || condition.value === "!=" || condition.value === "≠") && left && right ? [left, right] : [];
      const channel = operands.find(x => x.kind === "name" && !own && bound.has(x.value!) && digits.has(x.value!));
      const literal = operands.find(x => x.kind === "literal");
      if (channel && literal && (literal.value === "D" || literal.value === "V")) return walk((literal.value === "D") === (condition.value === "=") ? whenTrue : whenFalse, bound, own, digits);
    }
    if (typeTouches(node.type, types)) return true;
    if (node.kind === "literal" && node.value === "V") return true;
    if (node.kind === "name" && !bound.has(node.value!)) {
      const name = node.value!;
      if (own && parameters.has(name)) return false;
      if (Object.hasOwn(terms, name)) return termTouches(name);
      return !(Object.hasOwn(symbols, name) && valueFreeInputs.has(name));
    }
    const names = (node.binders ?? []).map(b => b.name);
    // A binder that reuses a shared name could hide a read of it, so it is not trusted.
    if (names.some(name => Object.hasOwn(terms, name) || Object.hasOwn(symbols, name) || own && parameters.has(name) || digits.has(name))) return true;
    if (node.kind === "let") return walk(node.children[0], bound, own, digits) || node.children.slice(1).some(child => walk(child, new Set([...bound, ...names]), own, digits));
    const inner = new Set([...bound, ...names]);
    return node.children.some(child => walk(child, inner, own, digits));
  }
  return walk(checked.ast, new Set(), true, noChannels);
}

/** References of the file's own custom definitions that never touch V; every other reference is left out. */
export function valueNeutralDefinitions(file: SemanticFile, definitions: ReadonlyMap<string, CustomDefinition> = fileDefinitions(file), prelude: CheckedPrelude = defaultCasePrelude()): ReadonlySet<string> {
  return new Set([...definitions].filter(([, definition]) => !definitionTouchesValues(definition, prelude)).map(([url]) => url));
}
/** The file's own custom definitions, checked against the shared prelude. */
export function fileDefinitions(file: SemanticFile): Map<string, CustomDefinition> {
  return readCustomDefinitions(file, caseBlocks(file), declarationLibrary.kinds, defaultCasePrelude(), declarationLibrary.urls).definitions;
}
