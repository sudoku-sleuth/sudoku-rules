---
name: Cage Expressions
url: https://rules.sudoku-sleuth.com/cage-expressions.md
kind: cage-expressions
parameters:
  cages:
    description: The cells in each cage and its expression or relation, as stated in the definition.
    default: Required.
    type: list<record{cells:set<cell>,expression:expression}>
  distinct:
    description: Whether different letters must have different values.
    default: Required.
    type: boolean
---

# Cage Expressions

Each cage total equals its expression. Letters stand for whole numbers and keep the same value throughout the rule. The distinct parameter gives different letters different values.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| cages | The cells in each cage and its expression or relation, as stated in the definition. | Required. |
| distinct | Whether different letters must have different values. | Required. |

## Maths

Class: **existential**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
∃letterValues:list<position>:
  |letterValues|=letterCount({g.expression:g∈cages}) ∧
  (∀g∈cages: defined(g.expression,letterValues) ∧ eval(g.expression,letterValues)=sum_D(g.cells))
  ∧ (distinct → ∀i,j∈[0,|letterValues|): i!=j → letterValues[i]!=letterValues[j])
```

There is a shared assignment of integers to letters such that each evaluated expression equals its cage total. distinct requires different letters to have different values. Division is exact with nonzero divisor; powers require a nonnegative integer exponent.

## Example

````markdown
---
format: open-rules
title: Cage Expressions example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-expressions cages [{"cells":["r1c1"],"expression":{"op":"letter","name":"A"}},{"cells":["r1c2"],"expression":{"op":"letter","name":"A"}}] distinct false
```
````

Satisfies the rule: r1c2=1, r1c1=1. Both cages can use the same value for A.

Breaks the rule: r1c2=2, r1c1=1. The cages require two different values for A.
