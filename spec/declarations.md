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
`#weighted-triple` is a reference. Instance IDs start with a Unicode letter and
continue with letters, digits or underscores; quote other IDs as JSON strings.
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
values use JSON; reserved parameter names stay quoted; keyword integers use their canonical decimal spelling. Optional
grammar input also supports ASTs constructed by callers. Parsing canonical text
with the same page grammar preserves the AST's meaning and writing it again
produces the same text. JSON numbers must be finite at every depth. Source spans and raw spellings belong to each input text.
