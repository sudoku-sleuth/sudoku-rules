---
name: Aggregate Relation
url: https://rules.sudoku-sleuth.com/aggregate-relation.md
kind: aggregate-relation
shape: Cages
parameters:
  left:
    type: AggregateOperand
    description: The left operand, including cells, channel, operation and repeat policy.
    default: Required.
  right:
    type: AggregateOperand
    description: The right operand, including cells, channel, operation and repeat policy.
    default: Required.
  relation:
    type: PairRelation
    description: The relation applied to the two aggregate results.
    default: Required.
alias_of: aggregate-equation
alias_bind:
  left: '⟨weightedOperand(left,1,1):i∈[0,1)⟩'
  right: '⟨weightedOperand(right,1,1):i∈[0,1)⟩'
  leftOperation: '"sum"'
  rightOperation: '"sum"'
  relation: 'relation'
---

# Aggregate Relation

Select the cells of each operand, calculate its result, and compare the two results. An operand can sum, multiply, count, or read a decimal number. Each operand states its digit or value channel and whether numbers may repeat.

List cells in reading order. Optional zero-based `start` and `length` select a slice; omitted values select the whole list. A list retains every occurrence, even when it names a cell more than once. Optional `stop` then selects a prefix ending at the first target number, given or listed crust digit. That stopping cell is excluded unless `include` is true. The stopping cell must exist. Decimal reading uses D and requires each printed symbol to be a digit from 0 to 9.

The familiar [Cage](cage.md), [Little Killer](little-killer.md), [Arrow](arrow.md), [Double Arrow](double-arrow.md), [Equal Sums](equal-sums.md) and [Region Sum](region-sum.md) use the same shared aggregate operations with their own operand selection and defaults.

This is [Aggregate Equation](aggregate-equation.md) with one term on each side, each term using the corresponding operand with coefficient 1 and power 1, sum on both sides, and the same relation. Aggregate Equation owns the general equation meaning.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| left | The left aggregate operand. | Required. |
| right | The right aggregate operand. | Required. |
| relation | A shared pair relation on the two results. | Required. |

## Maths

This is a shorthand for [aggregate-equation](aggregate-equation.md). Its header binds the general rule parameters.

## Example

````markdown
---
format: open-rules
title: Aggregate relation example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
aggregate-relation left {"cells":["r1c1","r1c2"],"channel":"D","operation":"sum","repeats":true} right {"cells":["r1c3"],"channel":"D","operation":"sum","repeats":true} relation {"op":"difference","value":0}
```
````

Satisfies the rule: digits 1 and 2 on the left, 3 on the right; both results are 3.

Breaks the rule: digits 1 and 2 on the left, 4 on the right; the results differ.
