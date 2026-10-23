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
layer: block
composition: Compose arbitrary line-rule alternatives with cardinality bounds.
---

# Line Choice

The line satisfies between the stated minimum and maximum number of the listed line rules.

With explicit `edges`, supply one connected network and write `line []` when no ordered list is needed. The window checks include every simple traversal through its junctions.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| line | `path<cell>` | The cells in order, for example r1c1-r1c2-r1c3. | Required. |
| kinds | `list<enum{renban,nabner,modular,entropic,parity}>` | The line rules available to choose from. | Required. |
| min | `number` | The least number of listed rules that must hold. | Required. |
| max | `number` | The greatest number of listed rules or different digits allowed. | Required. |
| loop | `boolean` | Whether the line closes, joining its last cell back to its first. | false (open path). |
| edges | `optional<list<list<cell>>>` | Explicit undirected edges of one connected network; each edge lists two different cells. | Absent; use the ordered line. |

## Maths

Class: **with aggregates**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
lineGeometry(line,edges,loop) ∧ let S=if present(edges) then allCells(unwrap(edges)) else {c∈C:c∈line};
let selected=λoption:enum{renban,nabner,modular,entropic,parity}:
  (option="renban" ∧ (if present(edges) then valueSet(S,"D",false,"consecutive") else valueSet(line,"D",false,"consecutive")))
  ∨ (option="nabner" ∧ (if present(edges) then valueSet(S,"D",true,if false then "separated" else "nonconsecutive") else valueSet(line,"D",true,if false then "separated" else "nonconsecutive")))
  ∨ (option="modular" ∧ (if present(edges) then modularMeaning(line,edges,loop,3,3) else ∀W∈lineWindows(line,edges,3,loop): allDifferent(W,λc:cell:classMod3(D(c)))))
  ∨ (option="entropic" ∧ (if present(edges) then entropicMeaning(line,edges,loop) else |𝔄|>0 ∧ |𝔄| mod 3=0 ∧ ∀W∈lineWindows(line,edges,3,loop): allDifferent(W,λc:cell:classEntropy(D(c)))))
  ∨ (option="parity" ∧ parityMeaning(line,edges,loop));
min<=countWhere(kinds,selected)<=max
```

Renban reads D; Nabner reads D and permits repeats. Ordered modular and entropic choices check three-position windows, so an open two-cell choice is vacuous. Explicit networks use the standalone component checks, including distinct classes when the component is smaller than the window. Negation applies to this entire counted choice.

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
