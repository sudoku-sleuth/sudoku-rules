# Declaration front end

A declaration states one rule instance. [declarations.ebnf](declarations.ebnf)
defines the line grammar; [case-files.md](case-files.md) defines its document
context. The formula grammar remains in [grammar.ebnf](grammar.ebnf).

`lexDeclaration` produces typed tokens with source spans. `parseDeclaration`
builds a `DeclarationAST` containing the reference, optional instance ID, every
negation marker, primary cells, named parameters, values and optional condition
and comment. JSON arrays, record fields and field names have individual spans.
Offsets use UTF-16 code units; line and column numbers start at one, and columns
count Unicode code points. `Source.document` and `Source.offset` locate a line
inside its complete case file, including CRLF documents.

A hyphen or comma separates explicitly listed cell positions. `r1c1-r3c3`
names two cells. Paths preserve order and repeated positions. A comment starts
with a separate `#` token followed by whitespace or the end of the line.
`#weighted-triple` is a reference. Instance IDs start with a Unicode letter or ASCII digit and
continue with Unicode letters, combining marks, ASCII digits, underscores,
hyphens or dots: `clue-2`, `2nd-clue`, `group.a`, `Éclair-2`.
Quote reserved declaration words (`not`, `if`, `unless`, `true`, `false`, `null`,
`uniform`, `distinct`, `connected`), cell or path spellings (including zero
coordinates), dimensions such as `9x9`, and number tokens such as `12`, `1.5`
or `2e3`. Other characters, a leading underscore, hyphen or dot, and whitespace
also require JSON quotes. Rule kinds such as `thermo` remain valid IDs; parameter
and reference syntax are independent. ID values are case-sensitive and retain
their exact Unicode spelling without normalization.
Whitespace separates declaration tokens, including a quoted value and its condition. Strings and JSON containers may contain `#`,
`not`, `if` and `unless` as values.

## Page-derived grammar

`compilePublicLibrary` derives parameter contracts from each page's typed
parameters and required defaults. `parameterGrammar` selects the primary `cells`
or `line` parameter and its accepted named spellings. `sum` maps to `total` when
the page declares `total` and a primary cell parameter. Required inputs, value
types, board bounds and board-dependent explicit values are checked against that
same contract after parsing.

Parameters may declare these additional forms:

- `syntax: {form: cells, count: 2}` supplies a fixed-size primary path. Its
  companion `form: keywords` parameter declares choices and ordered integer
  operands, with an optional record discriminator `tag`. `named: true` also
  accepts the parameter name and a quoted keyword. Additional declared parameters
  follow as named values. See [syntax.md](../rules/syntax.md).
- `syntax: {form: dimensions}` supplies `rows x cols` without spaces around `x`
  to a record parameter with `rows:position` and `cols:position`. Sudoku's board
  parameter declares this form for `9x9`.

Integer keyword operands retain their exact decimal value as strings in the AST,
including values beyond floating-point precision. Their raw authored spelling is
also retained. Structured named values use JSON numeric values and retain their
raw text. Neither parsing nor canonical writing applies omission defaults.

Adding a rule page supplies its grammar through these declarations. Run
`bun run generate:declarations` to refresh the portable published contracts in
`src/declaration-library.ts`. `lint:declarations` checks that these contracts match
the pages. Runtime parsing performs no filesystem access or URL loading.

## Canonical definitions and bound shorthands

`alias_of: target` retains the target's parameter contract. A parameter-bound shorthand also declares its own `parameters` and an `alias_bind` mapping. Bind every target parameter exactly once to a formula expression over the shorthand's inputs and shared prelude. Targets are canonical definitions; alias chains are rejected. Shorthands do not declare another formula.

```yaml
alias_of: pair
alias_bind:
  cells: cells
  relation: 'relationSpec(if colour="white" then "difference" else "ratio", if colour="white" then 1 else 2)'
  channel: '"V"'
```

Compilation checks binding types against the canonical parameter types, renames canonical locals to prevent capture, and checks the instantiated formula. The shorthand retains its own rule-line syntax. The public library's rules map includes compiled bound instantiations; its aliases map records their canonical targets. Plain aliases retain the target contract.

A required collection parameter can declare `empty_when: edges`. An empty authored list is then accepted when that other declared parameter is supplied. This permits `modular line [] edges ...` while keeping ordinary line declarations nonempty. The rule's formula validates the edges and their connectedness. Conditions still require a nonempty primary cell list; negation applies to the complete instance.

## Shared pipeline

The case checker extracts rules fences, parses each line once, resolves references
and checks parameter contracts. Board inference, feature checks and house checks
consume these declarations. `checkCaseReferences` returns the ASTs alongside its
references and deferred URLs. Custom definitions supply contracts through the same
parameter parser and validator. Unresolved references retain argument tokens until
their definitions are supplied.

The semantic reader runs the same parameter contracts as the case checker, using
the caller's typed board context when supplied. It consumes the checker's returned
ASTs, applies file-level
negation and records instance provenance. The lowering functions in
`src/semantics/lower.ts` take declaration ASTs and produce finite primitives.
Semantic projection converts declared dimension records and keyword operands to
the existing evaluator's representation. Semantic board validation uses the typed
`BoardContext` supplied by the caller. Coverage belongs to the semantic capability
registry independently of a page's grammar.

`parseDeclaredRuleLine` is a compatibility wrapper around the shared tail parser.
It returns the same parameter record and diagnostic codes as before.

## Canonical text

`printDeclaration(ast)` writes a canonical declaration. It preserves reference
spelling, decoded instance IDs, negation count, cell order and multiplicity,
parameter order, conditions and comments. Cells use hyphens; strings and structured
values use JSON; instance IDs use the bare form above when accepted and JSON quotes otherwise; reserved parameter names stay quoted; keyword integers use their canonical decimal spelling. Optional
grammar input also supports ASTs constructed by callers. Parsing canonical text
with the same page grammar preserves the AST's meaning and writing it again
produces the same text. JSON numbers must be finite at every depth. Source spans and raw spellings belong to each input text.

## Decorative marks and drawing identity

`decoration <cells> [note "..."] [element "..."]` uses the existing named form
and primary `cells: set<cell>` contract. A region is an explicit set of cells;
there is no second region selector or implicit path expansion. The formula is
`true`. Negation markers and conditions on this declaration are rejected with
`E_CASE_PARAMETERS`; `negate: all` applies only to rule declarations.

Every declaration accepts optional `element "..."` drawing metadata through its
parameter contract, including custom definitions. `element` is reserved for this
purpose. It identifies a drawn mark, independently of the declaration's instance
ID. Use distinct element IDs for different marks, even on the same cells. Element
IDs and decoration notes use the `string` type and JSON string values. Neither
field supplies a mathematical predicate.

`W_DECORATION_OVERLAP` reports a decoration and another declaration sharing a
nonempty element ID and at least one cell in their supplied parameters. It does
not infer drawing identity from cells, colour, notes or shape. The decoration's
span is primary; detail locates the constraining declaration. This warning retains
`checkCaseReferences.value` and does not fail CLI lint. Existing house diagnostics
retain their current behavior.
