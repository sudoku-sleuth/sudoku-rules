import { expect, test } from "bun:test";
import { arithmetic, checkExpression, checkFormula, checkPrelude, compare, compilePage, compilePrelude, diagnostic, exact, floor, formulaBlocks, location, parseFormula, parsePrelude, parseType, printExact, rational, type Environment, type Expr } from "../../src/index";

const prelude = compilePrelude({ file: "spec/prelude.md", text: await Bun.file("tests/fixtures/typed-prelude.md").text() });
if (!prelude.value) throw new Error(JSON.stringify(prelude.diagnostics));
const environment = prelude.value.environment;
function ast(text: string): Expr {
  const result = parseFormula(text);
  if (!result.value) throw new Error(JSON.stringify(result.diagnostics));
  return result.value;
}
function checked(text: string, env: Environment = environment) { return checkFormula(ast(text), env); }
function expression(text: string, env: Environment = environment) { return checkExpression(ast(text), env); }
function declarations(text: string) {
  const parsed = parsePrelude(text);
  return parsed.value ? checkPrelude(parsed.value) : parsed;
}

// Rejecting scenarios are deliberately tested individually, as well as in the raw-file corpus.
test("shared signatures and every derived body are parsed and typed", () => {
  expect(prelude.diagnostics).toEqual([]);
  expect(prelude.value!.declarations).toHaveLength(43);
  for (const declaration of prelude.value!.declarations) {
    if (declaration.body) expect(declaration.body.type).toBeDefined();
    if (declaration.requires) expect(declaration.requires.type.name).toBe("boolean");
  }
});
test("Unicode and ASCII notation have equivalent structure; precedence and long comparisons", () => {
  const strip = (node: Expr): unknown => ({ kind: node.kind, value: node.value, children: node.children.map(strip) });
  expect(strip(ast("∀c ∈ C: D(c) ≥ 1 → ¬false"))).toEqual(strip(ast("forall c in C: D(c) >= 1 implies not false")));
  expect(checked("0 < 1 < 2 < 3 <= 4").diagnostics).toEqual([]);
  expect(expression("-2^2").value?.constant).toBe("-4");
  expect(expression("2^3^2").value?.constant).toBe("512");
  expect(ast("true implies false implies true").children[1].value).toBe("implies");
});
test("unknown names, trailing English and unmatched delimiters fail", () => {
  for (const text of ["constructor", "toString", "partial"]) expect(checked(text).diagnostics[0].code).toBe("E_NAME_UNDEFINED");
  for (const text of ["true nonsense", "(true", "1 … 3", "∀i: true", "__proto__"]) expect(parseFormula(text).diagnostics[0].code).toBe("E_FORMULA_SYNTAX");
});
test("binders, where and let bindings are scoped and cannot shadow", () => {
  expect(checked("x=3 where x: number=1+2").diagnostics).toEqual([]);
  expect(checked("let x=1; let y=x+1; y=2").diagnostics).toEqual([]);
  expect(checked("(∀a ∈ C: D(a)>0) ∧ D(a)>0").diagnostics[0].code).toBe("E_NAME_UNDEFINED");
  expect(checked("let x=x; true").diagnostics[0].code).toBe("E_NAME_UNDEFINED");
  expect(checked("∀D ∈ C: true").diagnostics[0].code).toBe("E_NAME_SHADOW");
  expect(checked("∀a,a ∈ C: true").diagnostics[0].code).toBe("E_NAME_SHADOW");
});
test("sets, aggregates and typed predicate lambdas", () => {
  expect(checked("Σ_{c ∈ C} V(c) >= 0").value?.logicClass).toBe("with aggregates");
  expect(checked("count(C, λc: cell: D(c)>0) >= 0").diagnostics).toEqual([]);
  expect(checked("Π_{c ∈ C} D(c) >= 0").diagnostics).toEqual([]);
  expect(checked("∃R ∈ Regions: R ⊆ C").value?.logicClass).toBe("first-order");
  expect(checked("sameRegion(cell(0,0),cell(0,1))").value?.logicClass).toBe("first-order");
  expect(checked("{c ∈ C: D(c)>1} ⊆ C").value?.logicClass).toBe("first-order");
  expect(checked("let S={c ∈ C: D(c)>1}; let T=S; |T|>0").value?.logicClass).toBe("with aggregates");
  expect(checked("odd(|C|)").diagnostics).toEqual([]);
  expect(checked("sum>0", {...environment,symbols:{...environment.symbols,sum:{name:"number"}}}).diagnostics).toEqual([]);
  expect(checked("count c in C: true").diagnostics[0].code).toBe("E_TYPE"); // Formula must be Boolean.
  expect(checked("∃S: set<cell>: S ⊆ C").value?.logicClass).toBe("existential");
  expect(checked("{1,true} = {1}").diagnostics[0].code).toBe("E_TYPE");
  expect(checked("faceDigits(C) != ∅").diagnostics).toEqual([]);
  expect(checked("∀c ∈ C: D(c)>0").value!.ast.binders![0].type!.name).toBe("cell");
  expect(expression("Σi:number: i").diagnostics[0].code).toBe("E_SIGNATURE_REQUIRED");
  expect(checked("true ∈ C").diagnostics[0].code).toBe("E_TYPE");
  expect(checked("Σ_{c ∈ C} true = 1").diagnostics[0].code).toBe("E_TYPE");
});
test("optional reads need the declared guard and matching generic types", () => {
  const env = { ...environment, symbols: { ...environment.symbols, answer: { name: "optional", args: [{ name: "digit" }] } } };
  expect(checked("present(answer) implies unwrap(answer)>0", env).diagnostics).toEqual([]);
  expect(checked("unwrap(answer)>0", env).diagnostics[0].code).toBe("E_OPERATION_UNGUARDED");
  expect(checked("present(true)").diagnostics[0].code).toBe("E_TYPE");
});
test("index bounds, unbound indices and integer positions", () => {
  const env = { ...environment, symbols: { ...environment.symbols, line: { name: "path", args: [{ name: "cell" }] }, i: { name: "number" } } };
  expect(checked("∀j ∈ [0,|line|): D(line[j]) > 0", env).diagnostics).toEqual([]);
  expect(checked("∀j ∈ [0,|line|-1): D(line[j+1]) > 0", env).diagnostics).toEqual([]);
  expect(checked("|line|=3 implies D(line[2])>0", env).diagnostics).toEqual([]);
  expect(checked("|line|>0 implies rem(4,|line|)>=0", env).diagnostics).toEqual([]);
  expect(checked("D(line[k+1])>0", env).diagnostics[0].code).toBe("E_NAME_UNBOUND");
  expect(checked("D(line[k])>0", env).diagnostics[0].code).toBe("E_NAME_UNBOUND");
  expect(checked("0 <= i ∧ i < |line| implies D(line[i])>0", env).diagnostics[0].code).toBe("E_TYPE");
  expect(checked("∀j ∈ [0,|line|]: D(line[j])>0", env).diagnostics[0].code).toBe("E_OPERATION_UNGUARDED");
  expect(checked("∀j ∈ [0,|line|): D(line[j+1])>0", env).diagnostics[0].code).toBe("E_OPERATION_UNGUARDED");
});
test("exact arithmetic, signed remainder and floor never use floating point", () => {
  expect(expression("0.1+0.2").value?.constant).toBe("3/10");
  expect(expression("9007199254740993+2").value?.constant).toBe("9007199254740995");
  expect(expression("1/3+1/6").value?.constant).toBe("1/2");
  expect(expression("-5 mod 3").value?.constant).toBe("1");
  expect(expression("|-1/3|").value?.constant).toBe("1/3");
  expect(floor(exact("-0.1"))).toBe(-1n);
  expect(compare(exact("0.3"), arithmetic("+", exact("0.1"), exact("0.2")))).toBe(0);
  expect(printExact(rational(2n, -4n))).toBe("-1/2");
});
test("undefined arithmetic is rejected even with a variable left operand", () => {
  for (const text of ["1/0", "factor/0", "factor mod 0", "factor mod -2", "factor^(-1)", "factor^0.5"]) expect(expression(text).diagnostics[0].code).toBe("E_ARITHMETIC");
  for (const text of ["1/factor", "factor mod offset", "factor^offset"]) expect(expression(text).diagnostics[0].code).toBe("E_OPERATION_UNGUARDED");
  expect(checked("factor > 0 implies 1/factor > 0").diagnostics).toEqual([]);
  expect(checked("factor ∈ ℤ ∧ offset ∈ ℤ ∧ offset>0 implies factor mod offset >= 0").diagnostics).toEqual([]);
  expect(checked("offset ∈ ℤ ∧ offset >= 0 implies factor^offset >= 0").diagnostics).toEqual([]);
  expect(checked("factor < 1 implies 1/(1-factor)>0").diagnostics).toEqual([]);
  const bounded = declarations("input x:number; primitive bounded(a:number):boolean requires (a<=0);");
  if (!bounded.value || !("environment" in bounded.value)) throw new Error("Missing environment");
  expect(checked("x<1 implies bounded(x)", bounded.value.environment).diagnostics[0].code).toBe("E_OPERATION_UNGUARDED"); // Rational x<1 does not imply x<=0.
});
test("aliases, records, enums and higher-order signatures resolve structurally", () => {
  const result = declarations('type Relation=record{op:enum{sum,less},amount:number}; input r:Relation; term selected():boolean = r.op="sum";');
  expect(result.diagnostics).toEqual([]);
  if (!result.value || !('environment' in result.value)) throw new Error("Missing environment");
  expect(checked('r.op="other"', result.value.environment).diagnostics[0].code).toBe("E_TYPE");
  expect(checked('r.absent=1', result.value.environment).diagnostics[0].code).toBe("E_TYPE");
  const functions = declarations("input consumer:fn(fn(number)->boolean)->boolean; input narrow:fn(digit)->boolean;");
  if (!functions.value || !('environment' in functions.value)) throw new Error("Missing environment");
  expect(checked("consumer(narrow)", functions.value.environment).diagnostics[0].code).toBe("E_TYPE");
  expect(declarations("type A=set<A>;").diagnostics[0].code).toBe("E_RECURSION");
  expect(declarations("term a():boolean=b(); term b():boolean=a();").diagnostics[0].code).toBe("E_RECURSION");
  expect(declarations("input x:mystery;").diagnostics[0].code).toBe("E_TYPE");
  expect(declarations("type Num=number; term f():boolean = let x:Num=1; x=1;").diagnostics).toEqual([]);
  expect(declarations("primitive identity<T>(x:T):T; term f():boolean = identity(∅)=∅;").diagnostics).toEqual([]);
});
test("work limits cover source, type nesting, AST chains, literals and powers", () => {
  expect(parseFormula(" ".repeat(100_001)).diagnostics[0].code).toBe("E_LANGUAGE_LIMIT");
  expect(parseType("set<".repeat(129) + "cell" + ">".repeat(129)).diagnostics[0].code).toBe("E_LANGUAGE_LIMIT");
  expect(parseFormula(Array(200).fill("true").join(" and ")).diagnostics[0].code).toBe("E_LANGUAGE_LIMIT");
  expect(expression("9".repeat(4097)).diagnostics[0].code).toBe("E_LANGUAGE_LIMIT");
  expect(expression("2^4097").diagnostics[0].code).toBe("E_LANGUAGE_LIMIT");
});
test("diagnostics retain Markdown offsets, CRLF and Unicode columns", () => {
  const document = "heading\r\n𝔄 + partial\r\n";
  const source = { file: "unicode.md", text: "𝔄 + partial", document, offset: 9 };
  expect(location(source, 5, 12)).toEqual({ file: "unicode.md", start: { offset: 14, line: 2, column: 5 }, end: { offset: 21, line: 2, column: 12 } });
  const parsed = parseFormula(source.text, source);
  const diagnostic = checkExpression(parsed.value!, environment).diagnostics[0];
  expect(diagnostic.code).toBe("E_NAME_UNDEFINED");
  expect(diagnostic.span.start).toEqual({ offset: 14, line: 2, column: 5 });
});
test("only top-level formula fences are read; unterminated fences are errors", () => {
  const page = { file: "nested.md", text: '````markdown\n```text\nfalse\n```\n````\n```text\ntrue\n```\n' };
  expect(formulaBlocks(page).map(block => block.text)).toEqual(["true\n"]);
  expect(compilePage({ file: "open.md", text: "---\nparameters: {}\n---\n```text\ntrue\n" }, prelude.value!).diagnostics.map(d => d.code)).toEqual(["E_FORMULA_SYNTAX"]);
});

test("compiled pages expose located parameter signatures, including inline YAML", () => {
  const text = '---\nparameters: {sum: {type: number}}\n---\nClass: **first-order**.\n```text\nsum>0\n```\n';
  const result = compilePage({file:"sum.md",text}, prelude.value!);
  expect(result.diagnostics).toEqual([]);
  expect(result.value!.parameters[0].name).toBe("sum");
  expect(result.value!.parameters[0].type.name).toBe("number");
  expect(result.value!.parameters[0].span.start.column).toBe(14);
});

test("technical paths stay in optional detail, separate from the setter's message", () => {
  const span = location({ file: "setter.md", text: "markedLine" }, 0, 10);
  const message = "markedLine must be an ordered list of cells.";
  expect(diagnostic("E_TYPE", span, message)).toEqual({ code: "E_TYPE", check: "E_TYPE", message, span });
  expect(JSON.parse(JSON.stringify(diagnostic("E_TYPE", span, message, "rules[29].cells[0]")))).toEqual({
    code: "E_TYPE", check: "E_TYPE", message, span, detail: "rules[29].cells[0]",
  });
});
