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

## Predicates, blocks and rules

Predicates (`document: prelude`) supply functions and vocabulary, have no kind, and cannot be declared in a case file. Blocks (`layer: block`) are declarable typed constraints. Blocks define their meaning on predicates and serve multiple rules or general case-file composition. Named rules (`layer: rule`) either bind one block using `alias_of` and `alias_bind`, with their own setter-facing input contract, or own a formula directly. Bound declarations are never blocks. A public block with fewer than two named-rule users records its general composition purpose in a `composition` header field. Alias chains are rejected.

`alias_of: target` retains the target's parameter contract. A bound declaration also declares its own `parameters` and an `alias_bind` mapping. Bind every target parameter exactly once to a formula expression over the declaration's inputs and shared prelude. Targets are canonical definitions; alias chains are rejected. Bindings do not declare another formula.

```yaml
layer: rule
alias_of: monotone-line
alias_bind:
  line: line
  strict: 'false'
  orientation: orientation
  channel: channel
```

Compilation checks binding types against the canonical parameter types, renames canonical locals to prevent capture, and checks the instantiated formula. The bound declaration retains its own rule-line syntax. The public library's `blocks` and `namedRules` maps expose the two declarable layers. Its historical `rules` map contains every declarable kind, including compiled bound instantiations; its `shorthands` map records each canonical `target` and its `bindings`. The `aliases` map contains only exact renames, which retain the target contract. Look up a kind in `rules` first (including compiled bindings); if absent, resolve it once through `aliases` and look up that canonical rule. Never follow a bound declaration as a plain alias: doing so discards its bindings. Registry parameter contracts expose fixed page defaults as `default`; absent or board-dependent defaults remain omitted.

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
values use JSON, with compact cell paths also accepted inside lists (for example `[r1c1-r1c2,r2c1-r2c2]`); instance IDs use the bare form above when accepted and JSON quotes otherwise; reserved parameter names stay quoted; keyword integers use their canonical decimal spelling. Optional
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


String parameter defaults use a JSON-quoted string followed by optional prose
punctuation, for example `default: '"H".'`. The generated portable contract
contains the decoded string. An unquoted description is not a string default.

Shared-name parameters declare `shared: {role: construct, type: route}` in
the page header. Roles are `construct`, `read` and `conjoin`; types are route,
network, partition, selection, choice, assignment, value and symbol. Compilation
retains this metadata in parameter contracts and in `registry.sharedNames`, keyed
by the declared kind. `registry.kindByUrl` maps publication URLs to declared
kinds independently of filenames. Generated declaration contracts retain both
maps. Conjoined value channels may have several declarations; other shared
objects require one constructor. Battenburg reads a selection only in selection
mode; an empty Region Partition name selects a local partition.

Custom shared readers resolve fixed names through bounded quantifiers, list
images and countWhere predicates, including lambda arguments to prelude terms.
Unresolved or missing shared names are diagnosed at the supplying case parameter.

Shared selection references use `selectionRef`; Symbol House uses `symbols`
and Mapped Values uses `values` for channel names. Published `selection`
parameters remain PrefixSelection objects and `channel` parameters remain
Channel values. Shared-object constructors use `name`. Value Modifier owns a local existential mask and has no name parameter.
Route Group requires at least two different names in `routes`. Cell Entries
rejects the reserved names D and V.


## Major-version migration

The [1.0 migration](../docs/migration.md) rewrites every published 0.3 kind without splitting its whole-instance meaning. Blocks take explicit channels and occurrence policies; named rules retain their input contracts and former defaults. Migration chooses a named rule where one exists, otherwise a block with settings. Conditional source lines keep their bound declaration so the condition still reads the original primary cells. `migrationTable` records the output kind, canonical definition, form and meaning status for each old kind.

`LookupQuery` carries cells, a one-based numeric index, target, channel and pair relation. Each query is counted separately. `AggregateOperand` carries occurrence order, channel, aggregate operation, repeat policy and optional slice/prefix selection. A zero coefficient does not disable operand validity.

## Liar cells

`liar-cells [groups [["r1c1",...],...]] [count 1] [values [1,...,9]]
[distinctDigits true] [distinctValues true]` uses the existing named form.
All arguments are named; there is no primary cell list. Defaults belong to the
rule meaning and are not inserted by parsing or canonical writing. On a
nonstandard board, omitted `groups` or `values` produces `E_CASE_PARAMETERS`.
Nested group cells receive the usual bounds checks; counts use `position`,
values use `list<number>`, and the two distinctness flags use `boolean`.
No new token, condition or drawing metadata is introduced. `element` remains
metadata; neither decoration nor a local `#id` identifies which cells lie.

## False-clue counts

`clue-count clues [{"id":"dot-a","rule":"kropki","args":{"cells":["r1c1","r1c2"],"colour":"black"}},...] comparison "exactly" count 1`
counts complete false predicates. `comparison` also accepts `"at-least"` and
`"at-most"`; count is a nonnegative integer. The nonempty clue list is one exact
scope. Repeat the declaration per line or box; list all relevant marks for a
grid-wide count. Segments or edges count separately only when explicitly listed.

The scalar `clause` type carries owned `id`, `rule`, `args` records. IDs must be
nonempty and unique within each list. Different IDs preserve repeated meanings
as separate clues. Resolve each referenced published or case-local contract and
check named arguments, defaults and board bounds before accepting the owner.
Unknown external contracts are errors here, rather than deferred truths.
Drawing metadata belongs in args. Decorations are not counted clues. Nested
counts are checked recursively, to depth 32; IDs are local to each list. No
instance truth lookup or executable formula string is introduced.

`clueHolds` evaluates the complete instantiated predicate on the shared answer.
The owner does not assert its children positively. Negation, including file-level
`negate: all`, complements the owner once, without negating its children. Private
existential witnesses keep their clause's quantifiers; D, V and other global
answer channels remain shared. Counts precede formula deduplication. A count
larger than the scope is accepted: exactly/at-least are unsatisfiable and at-most
is vacuous. Conditions still require a primary cell list; a count owner has none.
Finite semantic comparison leaves the whole owner uncovered.

