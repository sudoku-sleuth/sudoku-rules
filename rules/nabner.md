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
alias_of: value-set
alias_bind:
  line: line
  edges: edges
  selection: selection
  channel: channel
  repeats: ¬distinct
  mode: if separated then "separated" else "nonconsecutive"
layer: rule
---


# Nabner

No two marked numbers are one apart. `distinct true` also forbids equal numbers; repeats are allowed by default. The default channel reads printed digits.

The rule applies to the whole cell set or connected network component, including every branch. `channel "V"` reads effective values. With fractional values, `separated true` requires every pair to differ by more than one.

With `selection`, apply the rule to a stopping prefix of the ordered line. The prefix ends at the first target number, given or listed crust digit. `include` controls whether that cell is kept. A stopping cell must exist. Prefix selection uses the stated channel and an ordered line.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| line | `list<cell>` | All cells of the line or cell set; order does not affect comparisons. | Required. |
| distinct | `boolean` | Whether repeated digits are forbidden. | false (repeats allowed). |
| edges | `optional<list<list<cell>>>` | Explicit undirected edges of one connected network; each edge lists two different cells. | Absent; use the ordered line. |
| channel | `Channel` | Read printed digits (D) or effective values (V). | D. |
| separated | `boolean` | Require a difference greater than one instead of merely forbidding a difference of one. | false. |
| selection | `optional<PrefixSelection>` | A prefix ending at the first target, given or listed crust; include chooses whether to keep that cell. | Absent; use the whole cell set or network. |

## Definition

Block: [value-set](value-set.md) — `line=line; edges=edges; selection=selection; channel=channel; repeats=¬distinct; mode=if separated then "separated" else "nonconsecutive"; sumFree=absent(|{}|)`.



The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

This is a bound shorthand for [value-set](value-set.md). Its header supplies every parameter of that rule.

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
