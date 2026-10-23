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
alias_of: aggregate-equation
alias_bind:
  left: ⟨weightedOperand(aggregateOperand(if |cages|=2 then orderedCells(cages[0]) else ⟨c:c∈orderedCells(C),false⟩,"D","sum",true),1,1):termIndex∈[0,1)⟩
  right: ⟨weightedOperand(aggregateOperand(if |cages|=2 then orderedCells(cages[1]) else ⟨c:c∈orderedCells(C),false⟩,"D","sum",true),1,1):termIndex∈[0,1)⟩
  leftOperation: '"sum"'
  rightOperation: '"sum"'
  relation: if |cages|=2 then relation else relationSpec("difference",-1)
layer: rule
---


# Cage Pair

The totals of the two cages obey the stated relationship.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| relation | `PairRelation` | The relationship to enforce: its operation and any required value, for example {"op":"difference","value":1}. | Required. |
| cages | `list<set<cell>>` | The cells in each cage and its expression or relation, as stated in the definition. | Required. |

## Definition

Defined by [aggregate-equation](aggregate-equation.md) with the settings in `alias_bind`.



The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

This is a bound shorthand for [aggregate-equation](aggregate-equation.md). Its header supplies every parameter of that rule.

The supplied relation holds between the two cage digit totals. Repeat policy belongs to separate cage rules.

The shift relation is defined for integer values.

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
