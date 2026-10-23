---
name: Value Set
url: https://rules.sudoku-sleuth.com/value-set.md
kind: value-set
shape: Lines
parameters:
  line:
    empty_when: edges
    type: list<cell>
    description: All cells of the line or cell set; order does not affect its consecutive values.
    default: Required.
  edges:
    type: optional<list<list<cell>>>
    description: Explicit undirected edges of one connected network; each edge lists two different cells.
    default: Absent; use the ordered line.
  channel:
    type: Channel
    description: Read printed digits (D) or effective values (V).
    default: V.
  repeats:
    type: boolean
    description: Whether equal values may repeat.
    default: false.
  selection:
    type: optional<PrefixSelection>
    description: A prefix ending at the first target, given or listed crust; include chooses whether to keep that cell.
    default: Absent; use the whole cell set or network.
  mode:
    type: enum{consecutive,nonconsecutive,separated}
    description: Consecutive support, no difference of one, or all differences greater than one.
    default: consecutive.
layer: block
---

# Value Set

Constrain the numbers on one whole line or network. Consecutive support includes every intervening integer step. Nonconsecutive support excludes a difference of one. Separated support requires every pair of different cells to differ by more than one. Repeated occurrences follow repeats; prefix selection requires a stopping cell.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| line | `list<cell>` | All cells of the line or cell set; order does not affect its consecutive values. | Required. |
| edges | `optional<list<list<cell>>>` | Explicit undirected edges of one connected network; each edge lists two different cells. | Absent; use the ordered line. |
| channel | `Channel` | Read printed digits (D) or effective values (V). | V. |
| repeats | `boolean` | Whether equal values may repeat. | false. |
| selection | `optional<PrefixSelection>` | A prefix ending at the first target, given or listed crust; include chooses whether to keep that cell. | Absent; use the whole cell set or network. |
| mode | `enum{consecutive,nonconsecutive,separated}` | Consecutive support, no difference of one, or all differences greater than one. | consecutive. |

## Maths

Class: **with aggregates**.

The [shared predicates](predicates.md) define the notation and operations.

```text
if present(selection) then ((not(present(edges)) and selectionValid(line,unwrap(selection),channel)) and valueSet(selectedPrefix(line,unwrap(selection),channel),channel,repeats,mode)) else (lineGeometry(line,edges,false) and if present(edges) then valueSet(allCells(unwrap(edges)),channel,repeats,mode) else valueSet(line,channel,repeats,mode))
```

## Example

````markdown
---
format: open-rules
title: Value Set example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
value-set r1c1-r1c2 mode "separated"
```
````

Satisfies the rule: r1c1=1, r1c2=3.

Breaks the rule: r1c1=1, r1c2=1.
