---
name: Class Pattern
url: https://rules.sudoku-sleuth.com/class-pattern.md
kind: class-pattern
shape: Lines
parameters:
  line:
    empty_when: edges
    description: The cells in order, for example r1c1-r1c2-r1c3.
    default: Empty list.
    type: list<cell>
  edges:
    type: optional<list<list<cell>>>
    description: Explicit undirected edges of one connected network; each edge lists two different cells.
    default: Absent; use the ordered line.
  loop:
    description: Whether the line closes, joining its last cell back to its first.
    default: false (open path).
    type: boolean
  classification:
    type: enum{residue,entropy}
    description: Use integer residues or equal thirds of the alphabet.
    default: residue.
  modulus:
    type: position
    description: Number of residue classes.
    default: "3."
  length:
    type: position
    description: Number of cells in each distinct-class window.
    default: "3."
  geometry:
    type: enum{line,cells,squares}
    description: Select line windows, the whole supplied list, or board 2 by 2 squares.
    default: line.
  mode:
    type: enum{distinct,same,cover}
    description: Require different classes, one shared class, or every class.
    default: distinct.
  fixedClass:
    type: optional<position>
    description: Require this residue at every listed cell instead of comparing windows.
    default: Absent.
  channel:
    type: Channel
    description: Channel for fixed residue classes.
    default: D.
layer: block
---


# Class Pattern

Every full window contains different classes. An open two-cell line also contains different classes; a network shorter than length has different classes across its whole component. Entropy requires a nonempty alphabet divisible into thirds. Window length is independent of modulus.

`geometry "cells"` compares the whole supplied cell list. `geometry "squares"` applies to each 2 by 2 square of the board. `mode "same"` requires a shared class, and `mode "cover"` requires every class.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| line | `list<cell>` | The cells in order, for example r1c1-r1c2-r1c3. | Empty list. |
| edges | `optional<list<list<cell>>>` | Explicit undirected edges of one connected network; each edge lists two different cells. | Absent; use the ordered line. |
| loop | `boolean` | Whether the line closes, joining its last cell back to its first. | false (open path). |
| classification | `enum{residue,entropy}` | Use integer residues or equal thirds of the alphabet. | residue. |
| modulus | `position` | Number of residue classes. | 3. |
| length | `position` | Number of cells in each distinct-class window. | 3. |
| geometry | `enum{line,cells,squares}` | Select line windows, the whole supplied list, or board 2 by 2 squares. | line. |
| mode | `enum{distinct,same,cover}` | Require different classes, one shared class, or every class. | distinct. |
| fixedClass | `optional<position>` | Require this residue at every listed cell instead of comparing windows. | Absent. |
| channel | `Channel` | Channel for fixed residue classes. | D. |

## Maths

Class: **with aggregates**.

The [shared predicates](predicates.md) define the notation and operations.

```text
if present(fixedClass) then modulus>=1 ∧ (∀c∈line: ⌊read(c,channel)⌋=read(c,channel) ∧ rem(read(c,channel),modulus)=unwrap(fixedClass)) else classPattern(line,edges,loop,classification,modulus,length,geometry,mode)
```

## Example

````markdown
---
format: open-rules
title: Class Pattern example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
class-pattern r1c1-r1c2
```
````

Satisfies the rule: r1c1=1, r1c2=3.

Breaks the rule: r1c1=1, r1c2=1.
