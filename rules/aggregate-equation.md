---
name: Aggregate Equation
url: https://rules.sudoku-sleuth.com/aggregate-equation.md
kind: aggregate-equation
shape: Cages
parameters:
  left:
    type: list<WeightedOperand>
    description: Weighted, nonnegative integer powers of aggregate operands.
    default: Required.
  right:
    type: list<WeightedOperand>
    description: The right expression.
    default: Required.
  leftOperation:
    type: enum{sum,product}
    description: Combine left terms by sum or product.
    default: sum.
  rightOperation:
    type: enum{sum,product}
    description: Combine right terms by sum or product.
    default: sum.
  relation:
    type: PairRelation
    description: Relation on the expression results.
    default: difference 0 (equal).
---

# Aggregate Equation

Compare two arithmetic expressions built from aggregate operands. Each term multiplies an operand raised to a nonnegative integer power by its coefficient. Each side sums or multiplies its terms. A constant is a count operand on an empty list raised to power zero, multiplied by that constant. Empty sums are zero; empty products are one. Operand slices, prefixes, repeated occurrences and channels retain their shared meanings.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| left | Weighted, nonnegative integer powers of aggregate operands. | Required. |
| right | The right expression. | Required. |
| leftOperation | Combine left terms by sum or product. | sum. |
| rightOperation | Combine right terms by sum or product. | sum. |
| relation | Relation on the expression results. | difference 0 (equal). |

## Maths

Class: **with aggregates**.

The [shared predicates](predicates.md) define the notation and operations.

```text
expressionValid(left) ∧ expressionValid(right) ∧ pairRelation(relation,operandExpression(left,leftOperation),operandExpression(right,rightOperation))
```

## Example

````markdown
---
format: open-rules
title: Aggregate Equation example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
aggregate-equation left [{"operand":{"cells":["r1c1"],"channel":"D","operation":"sum","repeats":true},"coefficient":2,"power":1}] right [{"operand":{"cells":["r1c2"],"channel":"D","operation":"sum","repeats":true},"coefficient":1,"power":1}]
```
````

Satisfies the rule: Digits 3 and 6 give 2×3=6.

Breaks the rule: Digits 3 and 7 give unequal sides.
