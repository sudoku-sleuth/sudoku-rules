---
name: Product Cage
url: https://rules.sudoku-sleuth.com/product-cage.md
kind: product-cage
parameters:
  cells:
    description: The marked cells, for example r1c1-r1c2-r2c2.
    default: Required.
    type: set<cell>
  product:
    description: The total obtained by multiplying the digits.
    default: Required.
    type: number
  distinct:
    description: Whether repeated digits are forbidden.
    default: Required.
    type: boolean
alias_of: aggregate-equation
alias_bind:
  left: ⟨weightedOperand(aggregateOperand(orderedCells(cells),"D","product",¬distinct),1,1):termIndex∈[0,1)⟩
  right: ⟨weightedOperand(aggregateOperand(⟨c:c∈orderedCells(C),false⟩,"D","count",true),product,0):termIndex∈[0,1)⟩
  leftOperation: '"sum"'
  rightOperation: '"sum"'
  relation: relationSpec("difference",0)
layer: rule
---


# Product Cage

Multiplying the cage digits gives the stated product. The distinct parameter forbids repeats.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| cells | `set<cell>` | The marked cells, for example r1c1-r1c2-r2c2. | Required. |
| product | `number` | The total obtained by multiplying the digits. | Required. |
| distinct | `boolean` | Whether repeated digits are forbidden. | Required. |

## Definition

Block: [aggregate-equation](aggregate-equation.md) — `left=⟨weightedOperand(aggregateOperand(orderedCells(cells),"D","product",¬distinct),1,1):termIndex∈[0,1)⟩; right=⟨weightedOperand(aggregateOperand(⟨c:c∈orderedCells(C),false⟩,"D","count",true),product,0):termIndex∈[0,1)⟩; leftOperation="sum"; rightOperation="sum"; relation=relationSpec("difference",0)`.



The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

This is a bound shorthand for [aggregate-equation](aggregate-equation.md). Its header supplies every parameter of that rule.

The cage digits multiply to product. If distinct, the digits also differ.

## Example

````markdown
---
format: open-rules
title: Product Cage example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
product-cage r1c1-r1c2 product 6 distinct false
```
````

Satisfies the rule: r1c1=2, r1c2=3. 2 times 3 equals 6.

Breaks the rule: r1c1=2, r1c2=4. 2 times 4 equals 8 instead of 6.
