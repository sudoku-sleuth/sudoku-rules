# Case syntax

A case starts with YAML front matter and contains a fenced `rules` block. Wording outside the structured blocks remains the setter's text. See [examples.md](examples.md) for complete files.

## Header and board

Required fields are `format: open-rules`, `title`, `setter`, `source`, `case`, `library`, and `status`. Quote strings with YAML punctuation. `source` is the original puzzle URL; `case` is its public case page URL. Either can be `""` when drafting. The library root is `https://rules.sudoku-sleuth.com/`.

`status: read` records a reading, not setter confirmation. `confirmed` records explicit confirmation. `flagged` accompanies a `flags` list of unresolved reasons; it does not make an ambiguous meaning safe to guess.

Localise each flag to the affected cells or groups and keep independently established declarations. For an ambiguous reading, record both alternatives, the stored-solve source and test evidence (or why untested), any justified recommendation, and the confirmation question in the flag string. `storedSolve` is task input, not a case-header field; see [reading-input.md](reading-input.md) for the tested example, input inventory and drawing checks. Supplied fog belongs in the top-level `fog` header, including `initiallyLit` and every supplied reveal link.

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
whispers_1: whispers r3c1-r3c2 gap 5
whispers_2: whispers r5c1-r5c2 gap 5
```

Without an explicit ID, the canonical kind is the ID. Repeated kinds need unique IDs, such as `thermo-1`, `thermo-2`. Do not reuse the standard board's `row-1` through `row-9`, `col-1` through `col-9`, or `box-1` through `box-9` IDs. Drawing records refer to instance IDs.

Start an unquoted instance ID with a Unicode letter or ASCII digit; continue with letters, combining marks, ASCII digits, underscores, hyphens or dots. Use names such as `thermo-1`, `2nd-clue` or `group.a`. Quote reserved declaration words (`not`, `if`, `unless`, `true`, `false`, `null`, `uniform`, `distinct`, `connected`), cell or path spellings (including zero coordinates), dimensions and numbers: `"if":`, `"r1c1":`, `"9x9":`, `"12":`. Quote other characters, whitespace and a leading underscore, hyphen or dot. Preserve the exact ID in drawing references.

Named parameter values usually use JSON syntax: numbers, `true`/`false`, quoted strings, arrays, and objects. A single cell may be unquoted. Use rXcY strings for cells inside arrays and nested groups. IDs or parameter names containing spaces use JSON quotes.

```rules
arrow r2c2-r2c3 bulb ["r2c1"]
equal-sums groups [["r1c1","r1c2"],["r2c1"]]
```

The short names `whisper` and `killer` alias `whispers` and `cage`. Prefer the canonical names. `gap` is the difference parameter for whisper rules. A named `line` aliases `cells` on supported cell-list rules; a primary path is the usual spelling. For other named fields, check the published page and its worked syntax; do not invent a parameter spelling from the drawing.

## Pair relationships and Kropki

Use the keywords declared on the pair page, rather than a JSON relation object:

```rules
pair_1: pair r1c1-r1c2 ratio 3
pair_2: pair r4c4-r4c5 difference 2
pair_3: pair r2c2-r3c2 sum 10
pair_4: pair r5c1-r5c2 at-least 3
pair_5: pair r6c1-r6c2 less
pair_6: pair r7c1-r7c2 multiple
pair_7: pair r8c1-r8c2 shift
```

The first four forms take a whole-number value; the last three take no value. `less` means the first cell's value is smaller. Check the [pair page](https://rules.sudoku-sleuth.com/pair.md) for every relationship's meaning, particularly shift. The parser derives these forms from the page's parameter declarations.

[Kropki](https://rules.sudoku-sleuth.com/kropki.md) names two pair relationships: `kropki r1c1-r1c2 white` is `pair r1c1-r1c2 difference 1`; `kropki r1c1-r1c2 black` is `pair r1c1-r1c2 ratio 2`. Existing `colour "white"`/`colour "black"` spellings also work. A dot's painted colour stays drawing metadata. State the relationship, using pair for ratio 3, grey/brown dots, difference n or sum n; do not infer it from an unfamiliar colour. Ask the setter when it is ambiguous.

## Custom rules

When no library kind matches, use a local name unless the setter has an address. Reference `#weighted-triple` on the rule line and put `id: weighted-triple` in a fenced `custom-rules` YAML list. Headings are optional and do not name the rule. Each entry supplies:

- `id`: a unique local name using lowercase letters, digits and single hyphens; it cannot equal a library kind.
- `name`: a display name.
- `parameters`: typed inputs with descriptions and defaults; an absent default means required.
- `definition`: the full meaning, including scope and exceptions.
- `maths`: a checked formula over the shared definitions.
- `example`: satisfying and breaking assignments with explanations.

```rules
weighted-1: #weighted-triple r1c1-r1c2-r1c3
```

Local names belong only to this case file. They never resolve to library kinds or external URLs, and matching names in different files do not identify a shared rule. Every definition must be referenced. See the two custom worked cases in [examples.md](examples.md).

Keep the URL form for shared rules: `weighted-1: https://example.com/rules/weighted-triple.md r1c1-r1c2-r1c3`, with that address as the embedded entry's `url`. Do not invent a hosted address. A local entry may later gain this optional URL while retaining its id and meaning; either reference then works. The complete definition stays embedded and nothing is fetched. Existing section-bound `url: "#weighted-triple"` entries remain supported.

An optional `class` declares `first-order` (the default), `with aggregates` or `existential`; the checker verifies it. All parameters need explicit types. Custom formulas pass the same grammar, name, type and guard checks as library formulas. Keep their meaning marked custom; review the prose and assignments separately.

The primary path is available as `cells`; define its order and length in the embedded parameters and maths. Supply additional parameters with JSON values. Keep the setter's wording outside `rules` and `custom-rules` fences.
