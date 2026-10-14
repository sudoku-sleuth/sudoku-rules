---
document: feature
domain: play-state
defines: visible
header: fog
name: Fog
url: https://rules.sudoku-sleuth.com/fog.md
parameters:
  initiallyLit:
    description: The cells clear at the start; [] for a fully covered grid.
    default: "[] (no cell clear at the start)."
    type: set<cell>
  links:
    description: The setter's links. Absent means neighbourhood reveal; present, even [], means links only.
    default: Absent; neighbourhood reveal.
    type: optional<list<FogLink>>
requires:
  - formula: "present(links) → ∀k∈unwrap(links): ∃t∈k.trigger: true"
    message: "A link needs a trigger cell: a link with none would light its cells at once, and decoders drop it."
---

# Fog

Part of the grid is covered. Only the lit cells are shown, and entering the right digits lights more of them. Fog is a setup feature of the puzzle, declared in the case-file header, and not a rule line. It defines which cells are visible.

## Case-file header

```yaml
fog:
  initiallyLit: [r2c1, r2c2]      # cells clear at the start; [] for a fully covered grid
  links:                          # absent: neighbourhood reveal. Present, even []: links only
    - trigger: [r1c2]             # every cell here must hold a correct entry
      lights: [r2c3, r2c4, r2c5]  # cells lit when the link fires
```

Cells use `r1c1`, like every cell field in the format. Readers also accept 0-based row-major numbers when the board size is known. `lights` and `initiallyLit` cells are on the grid. `trigger` coordinates may lie off it. `links: []` and a missing `links` mean different things, so the key stays when the list is empty.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| initiallyLit | The cells clear at the start; [] for a fully covered grid. | [] (no cell clear at the start). |
| links | The setter's links, each a trigger set and a set of cells it lights. Absent means neighbourhood reveal; present, even [], means links only. | Absent; neighbourhood reveal. |

## Maths

Class: **first-order**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate, including the entries E, placed, correct and visible. Fog gives visible its definition. A cell is lit when it is visible. L₀ is initiallyLit. A Spot is a coordinate that may lie off the board; a link's trigger is a set of spots, so a trigger off the board is expressible and never correct.

```openrules
type Spot = record{row:position,col:position};
type FogLink = record{trigger:set<Spot>,lights:set<cell>};
play term near(a:cell,b:cell):boolean = |row(a)-row(b)|<=1 ∧ |col(a)-col(b)|<=1;
play term correctAt(p:Spot):boolean = ∃c∈C: row(c)=p.row ∧ col(c)=p.col ∧ correct(c);
play term fires(k:FogLink):boolean = ∀t∈k.trigger: correctAt(t);
```

```text
∀c∈C: visible(c) ↔ (c∈initiallyLit ∨
  (if present(links)
   then ∃k∈unwrap(links): c∈k.lights ∧ fires(k)
   else (given(c) ∧ correct(c)) ∨ ∃a∈C: ¬given(a) ∧ correct(a) ∧ near(a,c)))
```

A cell is visible when it is in L₀, or, with links, when a link that lights it has every trigger cell correct, or, without links, when it is a given typed over with its own digit or lies within one row and one column of a correct non-given entry. The right-hand side does not use visible, so visibility depends on the current entries only and is not a fixed point: lighting a cell fires nothing by itself. A trigger need not be visible, a coordinate off the board is never correct, and erasing an entry hides again what only it showed. An empty trigger is an error, so every link has a trigger.

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
    - trigger: [r2c2, r3c3]
      lights: [r5c5]
---

```rules
sudoku 9x9
```
````

The solution has r1c2=3, r2c2=7, r3c3=4. Lit cells for each set of entries:

- No entries: r1c1, r1c2.
- r1c2=3: r1c1, r1c2, r2c1, r2c2. The first link fires.
- r1c2=3, r2c2=7: the same four cells. The second link needs r3c3 too.
- r1c2=3, r2c2=7, r3c3=4: the four cells and r5c5. Both links fire.
- r1c2=3, r2c2=7, r3c3=5: the four cells. 5 is not the digit, so the second link stays off.
- r2c2=7, r3c3=4: r1c1, r1c2 and r5c5. The first link is off again, and the second still fires, because its triggers need entries and not light.

Without `links`, the same header lights a 3×3: with initiallyLit [r5c5] and r1c1=4 entered correctly, r5c5, r1c1, r1c2, r2c1 and r2c2 are lit. A given in r9c9 lights nothing; typing its own digit over it lights r9c9 alone.
