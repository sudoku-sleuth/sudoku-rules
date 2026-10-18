# Read the input

## Inventory before questions

Read the whole supplied input, including top-level fields outside the drawing. Track each meaningful field or drawing record, its location, its interpretation, and the declaration or question it supports. Distinguish absent, empty and supplied values. Check claims such as “no mask supplied” against this inventory before including them in a case file.

Inspect dimensions, symbols, active boards, regions, givens, any stored solve, fog, cages, lines, shapes, text and the setter's wording. Generic canvas metadata must agree with the setter's board description before it becomes a Sudoku house. Keep raw drawing indices in working notes so appearance and geometry can be checked again.

### Fog

Declare supplied fog in the YAML header. Initial visibility, linked reveals and neighbourhood behaviour are separate facts. Convert zero-based row-major cell numbers using the supplied canvas width: row = floor(index / width) + 1, column = index mod width + 1. Do not derive initial visibility from the givens or title.

For a 6×6 input with `fog.initiallyLit: [0,7]` and one link from trigger `[7]` to lights `[14,15]`, write:

```yaml
fog:
  initiallyLit: [r1c1, r2c2]
  links:
    - trigger: [r2c2]
      lights: [r3c3, r3c4]
```

Carry every link and every trigger/light cell across. Keep `links: []` if supplied: it means links only, with no linked reveals. An absent `links` selects neighbourhood reveal under the published fog definition. `null` is not an empty list. Read [fog.md](https://rules.sudoku-sleuth.com/fog.md) before using its defaults.

If the mask is known but the stated reveal behaviour is unresolved, retain `initiallyLit`, retain any supplied links, and flag only the behaviour in doubt. Explain that the declaration preserves the supplied setup and identify the unresolved difference from the published meaning. Do not claim the whole fog setup is missing or silently treat a default as setter confirmation.

## Expand the geometry

For each stroke, inspect every segment between vertices. Insert intermediate cell centres lying on straight segments, in traversal order. Inspect the segment from the last vertex back to the first when the drawing is closed, even if closure is stored as a separate drawing property. Check both the ordered path and its final cell set against every edge. Off-centre endpoints and overpainting need inspection of the actual stroke; rounding vertices alone can lose cells.

A closed square through r2c2, r2c4, r4c4 and r4c2 traverses eight cells. Its closing edge includes r3c2:

```rules
renban r2c2-r2c3-r2c4-r3c4-r4c4-r4c3-r4c2-r3c2
```

For a whisper loop on the same square, preserve the closing adjacency too:

```rules
whispers r2c2-r2c3-r2c4-r3c4-r4c4-r4c3-r4c2-r3c2 gap 5 loop true
```

Repeating the starting cell at the end is another way to express that whisper adjacency. Renban constrains the cell set; repeating a cell is unnecessary. Neither a hyphen nor `loop true` inserts omitted intermediate cells. Under F1, connected lines of the same colour are one continuous line. Under F2, a cell not drawn in that colour is not on the line. Do not ask about membership those facts settle. If the text conflicts with the drawing, flag the conflict instead of splitting the line to fit the text. Unsettled meanings, including different-colour joins, remain candidate readings under P1–P2.

## Separate fill, stroke and text

Record these channels separately before assigning a clue meaning. For example, drawing record 3 has a circular shape between r2c5 and r3c5, `fill: #FFFFFF`, `stroke: #000000`, and no text. It is a white-filled dot with a black border. If the setter says white dots join consecutive digits, declare:

```rules
kropki r2c5-r3c5 white
```

The outline does not make it a black dot. Text such as X, V or a number is a separate mark to interpret under the setter's wording. A transparent or missing fill does not establish a black fill. An unfamiliar colour needs its stated meaning; use a `pair` relation when that meaning differs from ordinary Kropki.

## Build each negative rule separately

For each forbidden relation, record its scope, direction and exceptions. Derive exceptions from the marks for that relation and any explicit setter exceptions. An edge with a different clue remains subject to the negative rule. Combine relations in one `negative` declaration only when their scope, direction and exception sets are identical under the setter's wording.

Suppose all V marks (sum 5) are shown, a V joins r1c1–r1c2, and a white Kropki dot joins r3c1–r3c2:

```rules
pair r1c1-r1c2 sum 5
kropki r3c1-r3c2 white
negative relations [{"op":"sum","value":5}] except [["r1c1","r1c2"]]
```

Adding r3c1–r3c2 to `except` would wrongly exempt the white-only edge from the missing-V rule. Digits 4 and 5 satisfy its white dot and missing-V condition; 2 and 3 satisfy the white dot but violate the missing-V condition. If all X marks are also shown, compile their sum-10 exceptions separately unless the setter explicitly gives X and V a shared exemption policy. The same reasoning applies to white/black dot negatives: follow the stated policy for each relation rather than assuming every mark exempts every relation.

## Negate each named instance (F3)

When the setter says a rule or clue is wrong, false or never correct, each instance named by that statement must fail its complete rule. For instances R₁ and R₂, require ¬R₁ ∧ ¬R₂. Negating only their conjunction, ¬(R₁ ∧ R₂), would allow one to hold. Failure imposes no opposite rule or additional condition.

For example, “Blue lines are never renban lines” means every blue line must fail renban. For two blue paths, write:

```rules
blue_1: not renban r1c1-r1c2-r1c3
blue_2: not renban r3c1-r3c2-r3c3
```

Digits 1, 2, 4 on the first path and 4, 6, 8 on the second satisfy this requirement: each fails renban. Digits 1, 2, 3 on either path break it, even if the other path fails renban. Neither path acquires another line type.

Use the library's [`not` prefix](https://rules.sudoku-sleuth.com/syntax.md) on each affected declaration, preserving its parameters. `not` negates the whole rule, including internal quantifiers; it does not require every component check to fail. Use case-header `negate: all` only when the setter's statement covers every declared rule, since it negates each declaration individually. Keep unaffected declarations positive. If no existing negation form expresses the stated meaning, supply a complete custom definition.

## Localise uncertainty

Identify the exact cells, stroke records or groups where the interpretation changes. Preserve every independent declaration. A question about one branched figure does not suspend every line of its colour.

Direct questions to the setter on import, including daily imports, or to the catalogue maintainer for catalogue cases (P1). Keep final-answer riddles as prose without a grid declaration (P3).

### Stored solve and tested readings (P2)

Accept optional task input `storedSolve`: a complete known answer as an array of rows, top to bottom, with symbols left to right in the board's declared alphabet. Each row has `board.cols` entries and there are `board.rows` rows. Record its source; when adapting a source-specific answer field, record that mapping. It is input evidence, not givens or a new case-header field. Missing or incomplete answers cannot support a recommendation.

Test every competing reading on that same solve, recording the condition checked, values and pass/fail result (or untested with a reason). Recommend only a reading that passes while the alternative fails. Both pass, both fail, no solve or an unavailable test means no recommendation. A test-based recommendation remains a question until confirmed.

For example, on a four-symbol 4×4 board, a mark labelled “3” between r1c1 and r1c2 has two candidate readings: sum 3 (A), or difference 3 (B). The supplied known answer is:

```yaml
storedSolve:
  - [1, 2, 3, 4]
  - [3, 4, 1, 2]
  - [2, 1, 4, 3]
  - [4, 3, 2, 1]
```

Testing this one stored solve gives A: 1+2=3, pass; B: |1−2|=1≠3, fail. Recommend A and ask for confirmation. Record both readings, the solve source, test evidence, recommendation and question in the existing string `flags` field:

```yaml
status: flagged
flags:
  - "Mark 3 at r1c1–r1c2: A = sum 3; B = difference 3. Stored solve: supplied storedSolve, r1c1=1 and r1c2=2. A passes (1+2=3); B fails (|1−2|=1, not 3). Recommend A. Is sum 3 intended?"
```

Withhold the disputed declaration until resolved. Keep known givens, independent clues and fog fields. With no distinguishing test, record both readings and the result or reason untested, write “no recommendation”, and ask which is intended. Keep the answer and resolution in this puzzle's file, not in the skill.

### Preserve clear clauses around malformed wording

Suppose the text states three independent clauses: “Digits on the blue thermometer never decrease from its bulb. The two marked dominoes are clones in the indicated order. Digits on the grey thermometer are from its bulb.” The grey sentence omits the relation. Keep the blue slow thermometer and the corresponding clone pairs:

```rules
slow-thermo r4c1-r4c2-r4c3
clone_1: clone r6c1-r8c4
clone_2: clone r6c2-r8c5
```

Flag only the grey path, for example: “On the grey thermometer r2c6–r2c7–r2c8, what relation applies from the bulb at r2c6?” Do not guess strict or non-strict increase or remove the blue and clone declarations. Keep candidate readings in the question, outside the rules block; `confirmed` requires explicit setter confirmation of the reading.
