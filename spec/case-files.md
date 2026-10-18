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

[Rule-line syntax](../rules/syntax.md) defines declarations. Primary cell paths
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

A case can define its own rule. A custom declaration references either a section
fragment in the same file or a setter-chosen external HTTPS Markdown URL. An
external URL is optional; no hosted page is needed for an in-file definition.

Put local definitions under `## Definitions`, one subsection per rule. The
fragment is the subsection's Markdown heading slug: lowercase, punctuation removed,
whitespace replaced by hyphens. Duplicate headings receive `-1`, `-2`, and so on.
Use simple unique headings so references stay clear. Fenced example headings do
not declare sections.

Each definition is a `custom-rules` YAML list entry, inside its referenced section:

````markdown
```rules
weighted-1: #weighted-triple r1c1-r1c2-r1c3
```

## Definitions

### Weighted triple

```custom-rules
- url: "#weighted-triple"
  name: Weighted triple
  parameters:
    cells:
      type: path<cell>
      description: Three cells in order from the marked start.
      default: Required.
  definition: The third face digit equals the first plus twice the second.
  maths: "|cells| = 3 ∧ D(cells[2]) = D(cells[0]) + 2 × D(cells[1])"
  example: "Satisfies: 1,2,5 because 5=1+2×2. Breaks: 1,2,6 because 6≠1+2×2."
```
````

The entry has exactly `url`, `name`, `parameters`, `definition`, `maths` and
`example`. Text fields must be nonempty; `parameters` is a mapping, empty when no
inputs are supplied. Describe each input as text or a mapping with a nonempty
`description`, an optional type and a default. An absent default or `Required.`
requires that input. The primary path is `cells`; its meaning states order,
scope and length. Define local notation in `maths`. Give satisfying and breaking
assignments with explanations in `example`. Classification belongs in prose;
`class` is not an entry field.

The reference and the entry's `url` must match exactly. Every definition must be
referenced, and every local fragment must resolve to the section containing its
complete definition. Several sections can each carry a `custom-rules` block.
Definitions cannot repeat a URL or fragment. An external definition uses the same
six fields with its HTTPS `.md` URL in both places. Its complete meaning stays in
the file. It is resolved locally rather than counted as a deferred fetch.

The checker validates the entry structure and supplied parameters. It does not
prove that the prose, formula and assignments express the same meaning. Custom
formula execution, URL loading and example evaluation are separate phases.
