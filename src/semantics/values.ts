import { caseBlocks, customParameterContract, readCustomDefinitions, type CustomDefinition } from "../custom-definitions.js";
import { declarationLibrary, defaultCasePrelude } from "../declaration-library.js";
import type { Type, TypedExpr } from "../language/ast.js";
import type { CheckedPrelude } from "../language/checker.js";
import type { SemanticFile } from "./types.js";

/**
 * Prelude primitives with no body whose meaning is known not to read the effective value. Any other
 * primitive is opaque, so a formula reaching it is treated as touching values.
 */
const valueFreePrimitives = new Set([
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
 * parameter, argument or default, and no literal "V". Anything the check cannot read with certainty (an
 * unchecked definition, an opaque primitive, an unknown name) counts as touching.
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
  const termTouches = (name: string): boolean => {
    const known = termResults.get(name);
    if (known !== undefined) return known;
    const declaration = Object.hasOwn(terms, name) ? terms[name] : undefined;
    if (!declaration || visiting.has(name) || visiting.size >= limit || name === "effective" || name === "valueAnswer") return true;
    visiting.add(name);
    let touches = declaration.parameters.some(p => typeTouches(p.type, types)) || typeTouches(declaration.result, types);
    if (!touches) {
      if (!declaration.body) touches = !valueFreePrimitives.has(name);
      else {
        const bound = new Set(declaration.parameters.map(p => p.name));
        touches = [declaration.body, declaration.requires].some(part => part !== undefined && walk(part as TypedExpr, bound, false));
      }
    }
    visiting.delete(name);
    termResults.set(name, touches);
    return touches;
  };
  // `own` marks the definition's formula, where its parameter names are in scope; a prelude term sees only its own.
  function walk(node: TypedExpr, bound: ReadonlySet<string>, own: boolean): boolean {
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
    if (names.some(name => Object.hasOwn(terms, name) || Object.hasOwn(symbols, name) || own && parameters.has(name))) return true;
    if (node.kind === "let") return walk(node.children[0], bound, own) || node.children.slice(1).some(child => walk(child, new Set([...bound, ...names]), own));
    const inner = new Set([...bound, ...names]);
    return node.children.some(child => walk(child, inner, own));
  }
  return walk(checked.ast, new Set(), true);
}

/** References of the file's own custom definitions that never touch V; every other reference is left out. */
export function valueNeutralDefinitions(file: SemanticFile): ReadonlySet<string> {
  const prelude = defaultCasePrelude();
  const { definitions } = readCustomDefinitions(file, caseBlocks(file), declarationLibrary.kinds, prelude, declarationLibrary.urls);
  return new Set([...definitions].filter(([, definition]) => !definitionTouchesValues(definition, prelude)).map(([url]) => url));
}
