---
name: Helping Cages
url: https://rules.sudoku-sleuth.com/helping-cages.md
kind: helping-cages
layer: rule
shape: Cages
parameters:
  groups:
    type: list<set<cell>>
    description: At least two nonempty cages in clue order.
    default: Required.
  clues:
    type: list<number>
    description: Printed clue for each cage.
    default: Required.
---

# Helping Cages

Cage digits do not repeat and all cage totals differ. Each clue is its own cage total plus the total of exactly one other cage. Each cage helps exactly one other cage. No cage sums to its own clue.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| groups | `list<set<cell>>` | At least two nonempty cages in clue order. | Required. |
| clues | `list<number>` | Printed clue for each cage. | Required. |

## Maths

Class: **with aggregates**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and operations.

```text
|groups|>=2 ∧ |groups|=|clues| ∧ (∀G∈groups:|G|>0) ∧ (∀i∈[0,|groups|):allDifferent(groups[i],λc:cell:D(c)) ∧ aggregate(groups[i],"D","sum")!=clues[i] ∧ countWhere([0,|groups|),λj:position:0<=j ∧ j<|groups| ∧ j!=i ∧ aggregate(groups[i],"D","sum")+aggregate(groups[j],"D","sum")=clues[i])=1 ∧ countWhere([0,|groups|),λj:position:0<=j ∧ j<|groups| ∧ j<|clues| ∧ j!=i ∧ aggregate(groups[j],"D","sum")+aggregate(groups[i],"D","sum")=clues[j])=1) ∧ (∀i,j∈[0,|groups|):i!=j → aggregate(groups[i],"D","sum")!=aggregate(groups[j],"D","sum"))
```

## Example

````markdown
---
format: open-rules
title: Helping Cages example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
board: {"rows": 1, "cols": 3, "symbols": [1, 2, 3, 4, 5, 6, 7, 8, 9]}
---

```rules
helping-cages groups [["r1c1"],["r1c2"],["r1c3"]] clues [3,5,4]
```
````

Satisfies the rule: r1c1=1, r1c2=2, r1c3=3.

Breaks the rule: Keep the other digits, but set r1c3=4.
