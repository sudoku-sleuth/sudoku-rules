---
name: Cage Pair
url: https://rules.sudoku-sleuth.com/cage-pair.md
kind: cage-pair
parameters:
  relation:
    description: 'The relationship to enforce: its operation and any required value, for example {"op":"difference","value":1}.'
    default: Required.
    type: PairRelation
  cages:
    description: The cells in each cage and its expression or relation, as stated in the definition.
    default: Required.
    type: list<set<cell>>
---

# Cage Pair

The totals of the two cages obey the stated relationship.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| relation | The relationship to enforce: its operation and any required value, for example {"op":"difference","value":1}. | Required. |
| cages | The cells in each cage and its expression or relation, as stated in the definition. | Required. |

## Maths

Class: **with aggregates**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
|cages|=2 ∧ pairRelation(relation,sum_D(cages[0]),sum_D(cages[1]))
```

The supplied relation holds between the two cage digit totals. Repeat policy belongs to separate cage rules.

## Example

````markdown
---
format: open-rules
title: Cage Pair example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-pair cages [["r1c1"],["r1c2"]] relation {"op":"difference","value":1}
```
````

Satisfies the rule: r1c2=2, r1c1=1. The two cage totals have the stated difference.

Breaks the rule: r1c2=3, r1c1=1. Their totals have a different difference.
