---
document: feature
name: Fog
url: https://rules.sudoku-sleuth.com/fog.md
reading:
  terms: [fog, fogged]
  parts:
    start:
      - when: {initiallyLit: {length: 0}}
        text: "The grid starts fully covered."
      - when: {initiallyLit: {length: 1}}
        text: "The grid starts mostly hidden. One cell is clear at the start: {initiallyLit}."
      - text: "The grid starts mostly hidden. {initiallyLit.length|Words} cells are clear at the start: {initiallyLit|rectangle}."
  variants:
    - when: {links: absent}
      heading: Fog
      one: "{part:start} Placing the right digit in a cell lights that cell and the cells around it, up to 3×3. A given lights nothing. Only the lit cells are shown."
    - when: {links: {length: 0}}
      heading: Fog
      one: "{part:start} No digit lights anything: only those cells are ever shown."
    - when: {links: {length: 1}}
      heading: Fog
      noun: fog links
      list: always
      spoiler: reveals part of the puzzle
      one: "{part:start} Placing the right digit in the marked cell lights the cells the setter linked to it. No other digit lights anything. Only the lit cells are shown."
      item:
        - when: {same: [trigger, lights]}
          text: "A right digit in {trigger|list} lights its own cell."
        - when: {trigger: {length: 1}}
          text: "A right digit in {trigger|list} lights {lights|list}."
        - text: "Right digits in all of {trigger|list} light {lights|list}."
      spoiler_notes:
        - when: {condition: triggersOnGivens}
          text: "A given in a trigger cell lights its link only when the player types that digit over it."
        - when: {condition: neverFire}
          text: "Some links ({neverFire}) name a cell outside the grid and never light anything."
    - heading: Fog
      noun: fog links
      list: always
      spoiler: reveals part of the puzzle
      one: "{part:start} Placing the right digit in a marked cell lights the cells the setter linked to it. No other digit lights anything. Only the lit cells are shown."
      item:
        - when: {same: [trigger, lights]}
          text: "A right digit in {trigger|list} lights its own cell."
        - when: {trigger: {length: 1}}
          text: "A right digit in {trigger|list} lights {lights|list}."
        - text: "Right digits in all of {trigger|list} light {lights|list}."
      spoiler_notes:
        - when: {condition: triggersOnGivens}
          text: "A given in a trigger cell lights its link only when the player types that digit over it."
        - when: {condition: neverFire}
          text: "Some links ({neverFire}) name a cell outside the grid and never light anything."
---

# Fog

Part of the grid is covered. Only the lit cells are shown, and placing the right digits lights more of them. Fog is a setup feature of the puzzle, declared in the case file header, and not a rule line.

## Case-file header

```yaml
fog:
  initiallyLit: [r2c1, r2c2]      # cells clear at the start; [] for a fully covered grid
  links:                          # absent: neighbourhood reveal. Present, even []: links only
    - trigger: [r1c2]             # every cell here must hold a correct entry
      lights: [r2c3, r2c4, r2c5]  # cells lit when the link fires
```

Cells use `r1c1`, like every cell field in the format. Readers also accept 0-based row-major numbers, which older files use. `lights` cells are on the grid. `trigger` cells may be off it; such a link never fires. An empty `trigger` is an error: decoders drop such links, so the format rejects them, and a reader shows a fog block that has one as written, not as a reading. Whether a trigger is off the grid can be told only when the board size is known, from `sudoku NxN` or a `board` header. `links: []` and a missing `links` mean different things, so the key stays when the list is empty.

## Meaning

- The puzzle starts with exactly the cells in `initiallyLit` lit. A given lights nothing.
- Without `links`, a correct digit the player places lights its 3×3 neighbourhood, clamped to the grid. A digit typed over a given lights that cell alone, and only when it is the given's digit.
- With `links`, even an empty list, there is no neighbourhood reveal. A link fires when every trigger cell holds a correct entry, and then lights its cells.
- A given is not an entry. It fires a link only when the player types its digit over it.
- A cell off the grid is never an entry, so a link with a trigger off the grid never fires.
- Lit cells are worked out from the current entries each time. Erasing a digit fogs again what only it lit. Chains happen in play: a lit cell shows its clues, the player places a digit there, and that digit fires the next link.
- A rule line with `stated true` is known from the start. Any other rule is drawn on the board and appears when its cells are lit.

## Maths

C is the board's cells and L₀ the initially lit cells, with L₀ ⊆ C. K is absent or a list of links (T, Z) with T and Z sets of cells. G is the set of given cells, with digit g(c). S(c) is the answer's symbol; with no answer, every symbol is correct. E(c) is what the player typed in c, or none; a given is no entry unless typed over.

```math
lamp(c) ↔ c ∈ C ∧ E(c) ≠ none ∧ (no answer ∨ E(c) = S(c))
```

```math
K absent: Lit(E) = L₀ ∪ ⋃{N(c) : lamp(c) ∧ c ∉ G} ∪ {c ∈ G : E(c) = g(c)}
```

```math
K present: Lit(E) = L₀ ∪ ⋃{Z : (T, Z) ∈ K ∧ ∀t ∈ T: lamp(t)}
```

N(c) is the cells within one row and one column of c, inside the board. Lit depends on the current entries only. It is not a fixed point: lighting a cell fires nothing by itself. A trigger cell outside C is never a lamp. A drawn clue is hidden while every cell it overlaps is unlit, and an area that reaches outside the grid always shows in part.

The fixtures in `tests/fog/` state this as data: a board size, lit cells, links, givens, the answer, a list of entries and the expected lit set.

## Example

````markdown
---
format: open-rules
title: Fog example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
fog:
  initiallyLit: [r1c1, r1c2]
  links:
    - trigger: [r1c2]
      lights: [r2c1, r2c2]
---

```rules
sudoku 9x9
```
````

Lights r2c1 and r2c2: the player enters the right digit in r1c2. The link fires and lights both cells.

Lights nothing: the player enters a wrong digit in r1c2. No link fires, and no neighbourhood is lit because the case declares links.
