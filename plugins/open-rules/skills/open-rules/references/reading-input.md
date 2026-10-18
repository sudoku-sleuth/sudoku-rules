# Read the input

## Inventory before questions

Read the whole supplied input, including top-level fields outside the drawing. Track each meaningful field or drawing record, its location, its interpretation, and the declaration or question it supports. Distinguish absent, empty and supplied values. Check claims such as “no mask supplied” against this inventory before including them in a case file.

Inspect dimensions, symbols, active boards, regions, givens, fog, cages, lines, shapes, text and the setter's wording. Generic canvas metadata must agree with the setter's board description before it becomes a Sudoku house. Keep raw drawing indices in working notes so appearance and geometry can be checked again.

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

Repeating the starting cell at the end is another way to express that whisper adjacency. Renban constrains the cell set; repeating a cell is unnecessary. Neither a hyphen nor `loop true` inserts omitted intermediate cells. Touching strokes alone do not establish whether they form one rule instance: ask about the specific junction when grouping changes the meaning.

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

## Localise uncertainty

Identify the exact cells, stroke records or groups where the interpretation changes. Preserve every independent declaration. A question about one branched figure does not suspend every line of its colour.

For example, a simple pink stroke is established as a renban through r6c1–r6c3. Two other pink strokes meet at r2c7, and it is unclear whether they form one renban or two. Keep the simple stroke:

```rules
renban r6c1-r6c2-r6c3
```

Use `status: flagged` and a specific header reason:

```yaml
flags:
  - "Pink strokes 4 and 5 meet at r2c7: is their union one renban or is each stroke a separate renban?"
```

Withhold only the disputed grouping; do not invent either alternative. Keep known givens, other clues and fog fields in the same file. Before delivery, reconcile the inventory: each established fact has a declaration, and each unresolved fact has a localised question.
