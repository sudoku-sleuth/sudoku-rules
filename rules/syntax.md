---
document: syntax
name: Rule-line syntax
url: https://rules.sudoku-sleuth.com/syntax.md
---

# Rule-line syntax

A case file declares its library root once. Every rule name resolves to its Markdown definition under that root.
One line states a rule, its cells and parameters, with an optional condition.
The [declaration grammar](../spec/declarations.ebnf) defines the complete syntax.

```ebnf
instance = [id ":" space] *("not" space) rule [space condition]
rule = reference [space cells] (keyword-parameters | named-parameters)
named-parameters = *(space parameter space value)
keyword-parameters = space declared-keyword *(space declared-operand) named-parameters
condition = ("if" | "unless") space predicate
predicate = "uniform" | "distinct" | "connected"
reference = kind-name | section-fragment | HTTPS-Markdown-URL
cells = cell *("-" cell | "," cell)
cell = "r" positive-row "c" positive-column
value = JSON-value | cell
```

The instance ID precedes every operator. An unquoted ID starts with a Unicode letter or ASCII digit and continues with letters, combining marks, ASCII digits, underscores, hyphens or dots: `clue-1:`, `2nd-clue:`, `group.a:`. Quote reserved declaration words (`not`, `if`, `unless`, `true`, `false`, `null`, `uniform`, `distinct`, `connected`), cell or path spellings, dimensions and numbers: `"r1c1":`, `"9x9":`, `"12":`. Other characters and whitespace also require JSON quotes. Repeated kinds need distinct IDs, including a positive and negated instance of the same kind.
The `total` parameter aliases cage `sum`; the writer uses `total`.
A separate `#` followed by whitespace or the end of the line starts a comment.
A fragment such as `#weighted-triple` remains a rule reference.
The cell path lists each cell explicitly; r1c1-r1c3 names two cells, not a three-cell range.

## Custom definitions and boards

A case may define a custom rule inside its own file. A declaration such as
`weighted_1: #weighted-triple r1c1-r1c2-r1c3` references the complete definition
under `### Weighted triple` in a `## Definitions` section. A setter-chosen external
HTTPS Markdown URL is also allowed. The definition has `url`, `name`, `parameters`,
`definition`, `maths` and `example`; every definition is referenced. See the
[case-file contract](../spec/case-files.md) for the full layout and checks.

On non-standard dimensions or alphabets, state board-dependent parameters
explicitly, including whispers `loop`, cage `repeats` and sandwich `crusts`.
The case-file contract lists all such parameters, board fields and given forms.

## Pair relationships and Kropki

The parameter declarations on [pair](pair.md) define its keyword grammar. Write two cells, the relationship keyword, then a whole-number value where needed:

```rules
pair_1: pair r1c1-r1c2 ratio 3
pair_2: pair r4c4-r4c5 difference 2
pair_3: pair r2c2-r3c2 sum 10
pair_4: pair r5c1-r5c2 at-least 4
pair_5: pair r6c1-r6c2 less
pair_6: pair r7c1-r7c2 multiple
pair_7: pair r8c1-r8c2 shift
```

`less`, `multiple` and `shift` take no value. `less` preserves the cells' order. The page defines each relationship. Pair lines no longer use a `relation` JSON object.

[Kropki](kropki.md) is shorthand: `kropki r1c1-r1c2 white` means `pair r1c1-r1c2 difference 1`; `kropki r1c1-r1c2 black` means `pair r1c1-r1c2 ratio 2`. The existing named forms `colour "white"` and `colour "black"` are accepted too. These names state relationships; the dot's painted colour is drawing metadata. Use pair for ratio 3, difference n, sum n, grey or brown dots, and other relationships.

### Declaring keyword syntax

A typed parameter may opt into `syntax: {form: cells, count: 2}` for its primary cell list. Its companion parameter declares `form: keywords`, a `tag` naming a record's enum field, and `choices` mapping every enum member to an ordered mapping of operand fields and their line types. For pair, `ratio: {value: integer}` builds `{op: "ratio", value: 3}` from `ratio 3`; `less: {}` builds `{op: "less"}`. Integer operands are kept exactly, without floating-point rounding. This line notation does not narrow the formula's numeric domain.

A plain enum uses keyword choices without a tag. `named: true` also accepts the parameter name followed by its keyword or quoted keyword; Kropki uses this to preserve existing case files. Declarations must match their parameter types. This grammar applies by declaration to any kind; no kind names or operation names are built into the parser.

## Negation and conditions

`not` negates the entire base rule formula, including its internal quantifiers.
Two `not` prefixes cancel; they remain recorded for writing.
A trailing condition wraps that base formula after its negations.
For S, the rule's own cell list, and R, its fully instantiated meaning:

```math
Meaning(not R) ↔ ¬R
Meaning(R if P) ↔ P(S) → R
Meaning(R unless P) ↔ ¬P(S) → R
Meaning(not R unless P) ↔ ¬P(S) → ¬R
```

The condition applies the named shared predicate to that rule's cells; it takes no independent cell argument.
A rule without a nonempty primary cell list cannot carry a condition.
Only one trailing condition is allowed. The condition keywords uniform and connected call the corresponding shared unary Boolean terms on a cell set. The distinct condition uses distinct_D for a cell set and distinctAt with D for an ordered list, comparing different positions. Unknown predicates and terms needing additional arguments are errors.
Invalid parameters, missing definitions and off-board cells remain errors under negation or an inactive condition.

`uniform` reads the single shared shading answer declared by `yin-yang`.
It means all the clue's cells are shaded or all are unshaded.
`unless uniform` means the clue contains both shades.
The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define its formula and the answer binding.

```rules
yin-yang
cage_1: cage r1c2-r1c3 total 17 repeats true if uniform
cage_2: not cage r1c2-r1c3 total 17 repeats true unless uniform
renban r1c5-r1c6-r1c7 if uniform
nabner r1c5-r1c6-r1c7 distinct true unless uniform
quadruple r5c3-r5c4-r6c3-r6c4 digits [2,9] if uniform
absent-digits r5c3-r5c4-r6c3-r6c4 digits [2,9] unless uniform
```

The cage's `repeats true` leaves only the sum condition to negate.
Nabner explicitly requires different digits in this example.
These are syntax examples, not the full Yin Yagn clue list.

Mixed Renban clues can require Nabner; ¬renban alone also permits nonconsecutive sets that fail Nabner.
A mixed quadruple requiring no listed digit uses `absent-digits`.
Negating quadruple only requires that its complete list is not present; some listed digits may still appear.
WROGN is setter wording with explicit meanings, not a library kind or an automatic negation mapping.

## Global rules and shared answers

Negation is defined for a global rule when its complete formula is defined.
For example, `not anti-king` requires at least one equal king-related pair.
A global reference with no definition cannot be negated.
`not sudoku 9x9` negates the row-column-box composition once, rather than negating each house.
It still declares the board's dimensions, alphabet and standard boxes.

Shading belongs to the shared case answer. Its existential binding stays outside the conjunction of rules.
Other witnesses keep the binders in their owning rule formulas; value-modifier binds M inside its formula.
A negated Yin Yang formula is checked on that supplied shading, not on a separate shading chosen by a clue.

```math
CaseMeaning(D) ↔ ∃H ⊆ C: ∧_{r∈DeclaredRules} Meaning(r,D,H)
```

## Every rule negated

Case front matter `negate: all` wraps each declared base rule once, before its condition is applied.
An explicit `not` cancels this extra negation for that instance.
It negates each rule individually, not the conjunction of rules.
Sudoku remains one composed rule even though exchange expands its houses.
Board data, givens, definitions and drawings are not predicates to negate.

## Typed composition

These checked definitions operate on instantiated rule meanings. Every instance reads the same face/value channels and shared shading. Witnesses bound inside a rule, including the modifier set M, stay inside that rule when it is negated.

```openrules
term negateRule(base:boolean):boolean = ¬base;
term conditionalRule(base:boolean,condition:boolean):boolean = condition → base;
term unlessRule(base:boolean,condition:boolean):boolean = ¬condition → base;
term negatedUnlessRule(base:boolean,condition:boolean):boolean = ¬condition → ¬base;
term composeRules(instantiated:list<boolean>):boolean = ∀meaning∈instantiated: meaning;
```
