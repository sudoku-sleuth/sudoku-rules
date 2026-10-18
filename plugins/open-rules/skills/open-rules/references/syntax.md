# Case syntax

A case starts with YAML front matter and contains a fenced `rules` block. Wording outside the structured blocks remains the setter's text. See [examples.md](examples.md) for complete files.

## Header and board

Required fields are `format: open-rules`, `title`, `setter`, `source`, `case`, `library`, and `status`. Quote strings with YAML punctuation. `source` is the original puzzle URL; `case` is its public case page URL. Either can be `""` when drafting. The library root is `https://rules.sudoku-sleuth.com/`.

`status: read` records a reading, not setter confirmation. `confirmed` records explicit confirmation. `flagged` accompanies a `flags` list of unresolved reasons; it does not make an ambiguous meaning safe to guess.

Localise each flag to the affected cells or groups and keep independently established declarations. Read [reading-input.md](reading-input.md) for the input inventory, fog header, line expansion, dot appearance and negative-exception examples. Supplied fog belongs in the top-level `fog` header, including `initiallyLit` and every supplied reveal link.

On a standard board, write `sudoku 9x9` once in the rules block. This supplies digits 1–9, rows, columns, and standard 3×3 boxes. Optional top-level `givens` can be `r4c8=1 r5c5=9`, or an 81-character grid string with `.` for an empty cell. Top-level `regions` lists extra regions, not the standard boxes.

For a different board, omit `sudoku 9x9` and supply explicit YAML `board` fields: `rows`, `cols`, `symbols`, `givens`, and `regions`. Regions are lists of rXcY cell lists. Givens can be a grid string or a list such as `[{cell: r1c1, digit: 1}]`. Do not infer an alphabet or region layout. Declare givens in exactly one place, either top-level `givens` or `board.givens`, and give each cell at most one digit.

Board dimensions, symbols and region membership describe the board; they do not impose uniqueness. For normal Sudoku on an explicit board, declare `unique` for every row, column and region. On a 6×6 board with six regions, that is 18 declarations. Do not write `sudoku 6x6`: the published kind supports only `9x9`. See the complete six-symbol example in [examples.md](examples.md). If the setter rejects normal Sudoku, declare only the house constraints actually stated.

For any dimensions or ordered alphabet other than 9×9 with 1–9, state `loop` on summit, whispers, parity, modular, entropic, primality and line-choice; modular `modulus`; nabner `distinct`; cage `repeats`; sandwich `crusts`; and index `strips`. Write the intended values explicitly, such as `loop false`, `repeats false`, or `crusts [1,6]`. Preserve empty `strips []` when there are no authored strips.

## Coordinates and declarations

Rows run top to bottom; columns run left to right. Both start at 1. `r2c3` is row 2, column 3. Stay within the declared board.

```text
[id: ]kind-or-section-fragment-or-HTTPS-Markdown-URL [cell-path] [parameter value]...
```

One line declares one rule instance. A path uses hyphens or commas and preserves its order. `r1c1-r1c3` lists exactly two cells: it does not include r1c2. Include every intermediate position yourself. Do not sort paths or remove repeated positions.

```rules
sudoku 9x9
thermo r1c1-r1c2-r1c3
whispers-1: whispers r3c1-r3c2 gap 5
whispers-2: whispers r5c1-r5c2 gap 5
```

Without an explicit ID, the canonical kind is the ID. Repeated kinds need unique IDs, such as `thermo-1`, `thermo-2`. Do not reuse the standard board's `row-1` through `row-9`, `col-1` through `col-9`, or `box-1` through `box-9` IDs. Drawing records refer to instance IDs.

Named parameter values usually use JSON syntax: numbers, `true`/`false`, quoted strings, arrays, and objects. A single cell may be unquoted. Use rXcY strings for cells inside arrays and nested groups. IDs or parameter names containing spaces use JSON quotes.

```rules
arrow r2c2-r2c3 bulb ["r2c1"]
equal-sums groups [["r1c1","r1c2"],["r2c1"]]
```

The short names `whisper` and `killer` alias `whispers` and `cage`. Prefer the canonical names. `gap` is the difference parameter for whisper rules. A named `line` aliases `cells` on supported cell-list rules; a primary path is the usual spelling. For other named fields, check the published page and its worked syntax; do not invent a parameter spelling from the drawing.

## Pair relationships and Kropki

Use the keywords declared on the pair page, rather than a JSON relation object:

```rules
pair-1: pair r1c1-r1c2 ratio 3
pair-2: pair r4c4-r4c5 difference 2
pair-3: pair r2c2-r3c2 sum 10
pair-4: pair r5c1-r5c2 at-least 3
pair-5: pair r6c1-r6c2 less
pair-6: pair r7c1-r7c2 multiple
pair-7: pair r8c1-r8c2 shift
```

The first four forms take a whole-number value; the last three take no value. `less` means the first cell's value is smaller. Check the [pair page](https://rules.sudoku-sleuth.com/pair.md) for every relationship's meaning, particularly shift. The parser derives these forms from the page's parameter declarations.

[Kropki](https://rules.sudoku-sleuth.com/kropki.md) names two pair relationships: `kropki r1c1-r1c2 white` is `pair r1c1-r1c2 difference 1`; `kropki r1c1-r1c2 black` is `pair r1c1-r1c2 ratio 2`. Existing `colour "white"`/`colour "black"` spellings also work. A dot's painted colour stays drawing metadata. State the relationship, using pair for ratio 3, grey/brown dots, difference n or sum n; do not infer it from an unfamiliar colour. Ask the setter when it is ambiguous.

## Custom rules

When no library kind matches, define the rule in the file and reference its section fragment, such as `#weighted-triple`. Use `## Definitions` with one named subsection per custom rule, and embed the entire definition in a fenced `custom-rules` YAML list. Each entry supplies:

- `url`: exactly the fragment or external URL used by the instance.
- `name`: the setter's rule name.
- `parameters`: supplied inputs and their meanings.
- `definition`: the full meaning, including scope and exceptions.
- `maths`: a formula over the shared definitions, with local notation defined.
- `example`: one satisfying and one breaking assignment with explanations.

Use a lowercase heading slug for the fragment: `### Weighted triple` gives `#weighted-triple`. Put its complete `custom-rules` entry inside that section. Each definition must be referenced by a declaration. The worked file in [examples.md](examples.md) shows the layout.

```rules
weighted-1: #weighted-triple r1c1-r1c2-r1c3
```

A setter-chosen external HTTPS `.md` URL is also allowed. Keep the same complete definition in the case, with that URL in both the declaration and `url` field. It does not need to be fetched. Do not invent a hosted URL or assign an unpublished kind under the library root. No external URL is needed for an in-file definition; declare a fully understood rule instead of asking only for a URL or flagging it.

The fragment slug or URL basename supplies the custom kind. An explicit `kind "chosen-kind"` can name a different custom kind. A custom definition has exactly the six fields above: do not add `class` or other fields. Put any explanatory classification in prose. Custom definitions describe rule meaning; executable formula and example evaluation are separate checks.

The primary path is available as `cells`; define its order and length in the embedded parameters and maths. Supply additional parameters with JSON values. Keep the setter's wording outside `rules` and `custom-rules` fences.
