---
name: Nabner
url: https://rules.sudoku-sleuth.com/nabner.md
kind: nabner
parameters:
  line:
    empty_when: edges
    type: list<cell>
    description: All cells of the line or cell set; order does not affect comparisons.
    default: Required.
  distinct:
    description: Whether repeated digits are forbidden.
    default: false (repeats allowed).
    type: boolean
  edges:
    type: optional<list<list<cell>>>
    description: Explicit undirected edges of one connected network; each edge lists two different cells.
    default: Absent; use the ordered line.
  channel:
    type: Channel
    description: Read printed digits (D) or effective values (V).
    default: D.
  separated:
    type: boolean
    description: Require a difference greater than one instead of merely forbidding a difference of one.
    default: false.
  selection:
    type: optional<PrefixSelection>
    description: A prefix ending at the first target, given or listed crust; include chooses whether to keep that cell.
    default: Absent; use the whole cell set or network.
---

# Nabner

No two marked numbers are one apart. `distinct true` also forbids equal numbers; repeats are allowed by default. The default channel reads printed digits.

The rule applies to the whole cell set or connected network component, including every branch. `channel "V"` reads effective values. With fractional values, `separated true` requires every pair to differ by more than one.

With `selection`, apply the rule to a stopping prefix of the ordered line. The prefix ends at the first target number, given or listed crust digit. `include` controls whether that cell is kept. A stopping cell must exist. Prefix selection uses the stated channel and an ordered line.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| selection | A stopping prefix, with its target or crust digits and inclusion policy. | Absent; use the whole cell set or network. |
| line | All cells of the line or cell set; order does not affect comparisons. | Required. |
| distinct | Whether repeated digits are forbidden. | false (repeats allowed). |
| edges | Explicit undirected edges of one connected network; each edge lists two different cells. | Absent; use the ordered line. |
| channel | Read printed digits (D) or effective values (V). | D. |
| separated | Require a difference greater than one instead of merely forbidding a difference of one. | false. |

## Maths

Class: **with aggregates**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
if present(selection) then ¬present(edges) ∧ selectionValid(line,unwrap(selection),channel) ∧ nonconsecutiveValues(selectedPrefix(line,unwrap(selection),channel),channel,¬distinct,separated)
else lineGeometry(line,edges,false) ∧ (if present(edges) then nonconsecutiveValues(graphVertices(unwrap(edges)),channel,¬distinct,separated) else nonconsecutiveValues(line,channel,¬distinct,separated))
```

Every pair in the whole cell set or network component is compared. distinct controls repeats. separated distinguishes a strict gap greater than one on fractional effective values.

## Example

````markdown
---
format: open-rules
title: Nabner example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
nabner r1c1-r1c2
```
````

Satisfies the rule: r1c1=1, r1c2=3. 1 and 3 are not consecutive.

Breaks the rule: r1c1=1, r1c2=2. 1 and 2 are consecutive.
