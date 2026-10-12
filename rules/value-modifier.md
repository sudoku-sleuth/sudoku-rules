---
name: Value Modifier
url: https://rules.sudoku-sleuth.com/value-modifier.md
kind: value-modifier
parameters:
  name:
    description: "The modifier name: doubler or negator."
    default: Required.
    type: enum{doubler,negator}
  factor:
    description: The multiplier for a modified digit.
    default: Required.
    type: number
  offset:
    description: The amount added after multiplication.
    default: Required.
    type: number
  exactly:
    description: The cells in each group and the exact number that must be modified.
    default: Required.
    type: list<set<cell>>
  count:
    description: The number of cells or occurrences to count.
    default: Required.
    type: position
  atMostOne:
    description: The cells in each group that may contain at most one modified cell.
    default: Required.
    type: list<set<cell>>
  distinct:
    description: Whether modified cells must contain different digits.
    default: Required.
    type: boolean
---

# Value Modifier

Choose modified cells according to the stated group counts. Their values are their digits times the factor, plus the offset. The same choices apply to every rule that reads values.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| name | The modifier name: doubler or negator. | Required. |
| factor | The multiplier for a modified digit. | Required. |
| offset | The amount added after multiplication. | Required. |
| exactly | The cells in each group and the exact number that must be modified. | Required. |
| count | The number of cells or occurrences to count. | Required. |
| atMostOne | The cells in each group that may contain at most one modified cell. | Required. |
| distinct | Whether modified cells must contain different digits. | Required. |

## Maths

Class: **with aggregates**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
(∀G∈exactly: |G∩M|=count) ∧ (∀G∈atMostOne: |G∩M|<=1)
∧ (distinct → distinct_D(M))
∧ (∀c∈C: (c∈M → V(c)=factor*D(c)+offset) ∧ (c∉M → V(c)=D(c)))
∧ (∀meaning∈ValuedRuleMeanings: meaning)
```

There is a shared set M of modified cells. Each exactly group intersects M in count cells; each atMostOne group intersects M in at most one. If distinct, digits in M are distinct. Every valued rule must accept V(c)=D(c)×factor+offset on M and D(c) elsewhere under this same M.

## Example

````markdown
---
format: open-rules
title: Value Modifier example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
board:
  rows: 1
  cols: 2
  symbols:
    - 1
    - 2
    - 3
    - 4
    - 5
    - 6
    - 7
    - 8
    - 9
---

```rules
value-modifier name "doubler" factor 2 offset 0 exactly [["r1c1"],["r1c2"]] count 1 atMostOne [] distinct true
```
````

Satisfies the rule: r1c1=1, r1c2=2. Both required modified cells have different digits.

Breaks the rule: r1c1=1, r1c2=1. The required modified cells repeat digit 1.
