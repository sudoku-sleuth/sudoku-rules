---
name: Line Choice
url: https://rules.sudoku-sleuth.com/line-choice.md
kind: line-choice
parameters:
  line:
    empty_when: edges
    description: The cells in order, for example r1c1-r1c2-r1c3.
    default: Required.
    type: path<cell>
  kinds:
    description: The line rules available to choose from.
    default: Required.
    type: list<enum{renban,nabner,modular,entropic,parity}>
  min:
    description: The least number of listed rules that must hold.
    default: Required.
    type: number
  max:
    description: The greatest number of listed rules or different digits allowed.
    default: Required.
    type: number
  loop:
    description: Whether the line closes, joining its last cell back to its first.
    default: false (open path).
    type: boolean
  edges:
    type: optional<list<list<cell>>>
    description: Explicit undirected edges of one connected network; each edge lists two different cells.
    default: Absent; use the ordered line.
---

# Line Choice

The line satisfies between the stated minimum and maximum number of the listed line rules.

With explicit `edges`, supply one connected network and write `line []` when no ordered list is needed. The window checks include every simple traversal through its junctions.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| line | The cells in order, for example r1c1-r1c2-r1c3. | Required. |
| kinds | The line rules available to choose from. | Required. |
| min | The least number of listed rules that must hold. | Required. |
| max | The greatest number of listed rules or different digits allowed. | Required. |
| loop | Whether the line closes, joining its last cell back to its first. | false (open path). |
| edges | Explicit undirected edges of one connected network; each edge lists two different cells. | Absent; use the ordered line. |

## Maths

Class: **with aggregates**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
lineGeometry(line,edges,loop) ∧ let S=if present(edges) then graphVertices(unwrap(edges)) else {c∈C:c∈line};
let selected=λoption:enum{renban,nabner,modular,entropic,parity}:
  (option="renban" ∧ (if present(edges) then consecutiveValues(S,"V",false) else consecutiveValues(line,"V",false)))
  ∨ (option="nabner" ∧ (if present(edges) then nonconsecutiveValues(S,"D",true,false) else nonconsecutiveValues(line,"D",true,false)))
  ∨ (option="modular" ∧ modularMeaning(line,edges,loop,3,3))
  ∨ (option="entropic" ∧ entropicMeaning(line,edges,loop))
  ∨ (option="parity" ∧ parityMeaning(line,edges,loop));
min<=countWhere(kinds,selected)<=max
```

Each branch uses the standalone rule’s shared meaning and defaults. Renban reads V; Nabner reads D and permits repeats. Modular and entropic include the standalone two-cell condition. Negation applies to this entire counted choice.

## Example

````markdown
---
format: open-rules
title: Line Choice example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
line-choice r1c1-r1c2-r1c3 kinds ["renban","nabner"] min 1 max 1
```
````

Satisfies the rule: r1c1=1, r1c2=2, r1c3=3. Exactly one listed rule holds: renban.

Breaks the rule: r1c1=1, r1c2=2, r1c3=5. Neither renban nor nabner holds.
