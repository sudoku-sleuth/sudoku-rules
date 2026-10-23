import {compilePublicLibrary,publicPages} from '../helpers/library';
import {expect,test} from "bun:test";
import {type Expr} from "../../src";
import {fragmentVerdict,type Fragment}from"./finite-fragment";
const sources = publicPages;
const library=compilePublicLibrary(sources).value!;
const prelude=library.prelude;
const fragments: (Fragment&{name:string;rule:string;expected:boolean})[]=await Bun.file("tests/fixtures/meaning-review.json").json();
const pages=library.rules;
for(const fragment of fragments)test(fragment.name,()=>{
 const page=pages.get(fragment.rule)!;
 expect(fragmentVerdict(page.formulas[0].ast,prelude,page.parameters,{...fragment,parameters:{...Object.fromEntries(Object.entries(library.registry.parameters!.get(`https://rules.sudoku-sleuth.com/${fragment.rule}.md`)!.parameters).filter(([,p])=>Object.hasOwn(p,'default')).map(([n,p])=>[n,p.default])),...fragment.parameters}})).toBe(fragment.expected);
});
function* walk(ast:Expr):Generator<Expr>{yield ast;for(const child of ast.children)yield*walk(child);}
test("modifier witness is bound inside the existential rule, not in the prelude",()=>{
 expect(Object.hasOwn(prelude.environment.symbols,"M")).toBe(false);
 expect(Object.hasOwn(prelude.environment.symbols,"modifierFactor")).toBe(false);
 const formula=pages.get("value-modifier")!.formulas[0];
 expect(formula.logicClass).toBe("existential");expect(formula.ast.kind).toBe("quantifier");expect(formula.ast.value).toBe("exists");expect(formula.ast.binders![0].name).toBe("M");
});
test("hidden extent selection is existential, including under negation",()=>{
 const page=pages.get("hidden-modular")!;
 const selection=[...walk(page.formulas[0].ast)].find(node=>node.binders?.map(b=>b.sourceName??b.name).join(",")==="a,b")!;
 expect(selection.value).toBe("exists");
 const invalid=fragments.find(fragment=>fragment.name==="hidden modular invalid extent is false")!;
 const negated:Expr={kind:"unary",value:"not",span:page.formulas[0].ast.span,children:[page.formulas[0].ast]};
 expect(fragmentVerdict(negated,prelude,page.parameters,invalid)).toBe(true);
});
