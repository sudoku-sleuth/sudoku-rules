# Case files

A case file starts with YAML front matter declaring `format: open-rules`, `title`,
`setter`, `source`, `case`, `library` and `status`. Required text fields are strings.
`source` and `case` may be empty. `library` is the root URL used to resolve published
kinds. `status` is `read`, `confirmed` or `flagged`; flagged files carry a nonempty
list of unresolved reasons in `flags`.

## Board and givens

Declare a standard board once with `sudoku 9x9` in a fenced `rules` block. It supplies
the ordered alphabet 1–9 and standard boxes. For another board, supply a `board`
mapping with positive integer `rows` and `cols`, a nonempty list of distinct finite
numeric `symbols`, and optional `givens` and `regions`. Board fields are closed:
unknown names are errors. A board declared alongside `sudoku 9x9` must match it.

Givens appear in exactly one place: top-level `givens` or `board.givens`. A given is
an in-board cell and a member of the alphabet. Each cell has at most one given.
Accepted forms are a list of `{cell: r1c1, digit: 1}` objects, a string of
`r1c1=1 r2c2=2` pairs, or a grid string with one character per cell and `.` for an
empty cell. Given objects have only `cell` and `digit`.

Regions are lists of cell lists. Use `board.regions` without the standard Sudoku
declaration. With `sudoku 9x9`, top-level `regions` adds regions to the standard
boxes; `board.regions` must be empty or absent.

Dimensions and region membership do not impose house uniqueness. When normal Sudoku
applies to an explicit board, declare `unique` for every row, column and region.
The published `sudoku` kind supports only `9x9`. `W_CASE_HOUSES` reports a nonempty
region list without any positive, unconditional `unique` or `sudoku 9x9` declaration.
It checks absence, not completeness or custom formula meaning.

## Rule parameters

[Rule-line syntax](../rules/syntax.md) defines declarations. The
[declaration grammar](declarations.md) specifies tokens, ASTs and canonical text. Primary cell paths
supply the page's `cells` or `line` parameter. Named `cells` and `line` spellings
refer to that primary parameter; cage `sum` also accepts the page's `total` name.
Values are JSON, single rXcY cells, or explicitly listed cell paths. Parameters
cannot be repeated through different spellings. Every required input must be
present, and a required collection must be nonempty.

Only parameters declared by the rule page are accepted. The page's typed signature
checks booleans, finite numbers, whole-number positions and digits, enums,
collections, nested records and cells. Records reject unknown fields and require
every non-optional field. Every cell, including a nested cell or keyword-form
pair endpoint, must lie within the board. Paths retain their order and repeated
positions. Formula predicates supply the rule's further mathematical conditions.

When dimensions or the ordered alphabet differ from 9×9 with 1–9, state these
parameters explicitly, including values that would otherwise be defaults:

| Rules | Parameters |
| --- | --- |
| summit, whispers, parity, modular, entropic, primality, line-choice | `loop` |
| modular | `modulus` |
| nabner | `distinct` |
| cage | `repeats` |
| sandwich | `crusts` |
| index | `strips` |

For example, a six-symbol board can use `whispers r1c1-r1c2 gap 3 loop false`,
`cage r2c1-r2c2 total 5 repeats false`, and
`sandwich r3c1-r3c2-r3c3 sum 2 crusts [1,6]`.

## In-file custom definitions

A case can define its own rule under a local `id`. Use a local name unless the
setter has an address for sharing the rule. The reference is `#` followed by the
id; the display `name` and Markdown headings do not determine that id.

````markdown
```rules
weighted-1: #weighted-triple r1c1-r1c2-r1c3
```

```custom-rules
- id: weighted-triple
  name: Weighted triple
  parameters:
    cells:
      type: path<cell>
      description: Three cells in order from the marked start.
      default: Required.
  definition: The third face digit equals the first plus twice the second.
  maths: "|cells| = 3 ∧ D(cells[2]) = D(cells[0]) + 2 × D(cells[1])"
  example: "Satisfies: 1,2,5. Breaks: 1,2,6."
```
````

An id uses the same spelling as a kind: lowercase letters and digits separated by
single hyphens. It is unique within the file and cannot equal a library kind.
`#id` resolves only to that file's embedded definition, never to a library page or
an external address. Two files' local ids have separate scope even when spelled
alike. Tools retain the source file with local references; a bare local id is
never a cross-file identity. Undefined, duplicate, colliding and unused definitions
produce `E_CUSTOM_DEFINITION`, following the existing unused-definition error convention.

Required fields are `name`, `parameters`, `definition`, `maths` and `example`, plus
at least one of `id` and `url`. Text fields are nonempty. Parameters form a mapping
(empty for no inputs); every parameter has a `type` and a nonempty `description`.
An absent default or `Required.` requires the input. The primary cell path is
`cells` or `line`; state its order, scope and length. The optional `class` is
`first-order` (the default), `with aggregates` or `existential`, and must match the
formula's logical class. Other entry fields are errors.

An optional `url` is an HTTPS `.md` address. Adding it to a definition with an id
provides a publication address without changing the id, parameters or meaning.
Either `#id` or that URL may reference the same embedded definition. A URL-only
definition remains supported, with the URL in its declaration and `url` field.
The URL basename supplies its kind; it never acquires a library kind's meaning.
No definition is fetched. URLs cannot repeat or replace a library page.

The older `url: "#weighted-triple"` form remains supported: its fragment must name
the heading whose section contains the complete definition. Prefer `id` for new
files; it has no heading or section-placement requirement. Every definition must
be referenced, and several fences may contain definitions.

Custom parameters and maths use the same formula parser, shared names, type checks,
guard checks and logical-class checks as library pages. Diagnostics point into the
case file, including quoted and multiline YAML values. This checks formula validity;
the rule remains custom and its intended meaning unverified. Matching prose and
assignments to the formula requires review. URL loading and example evaluation
remain separate phases.
