---
name: XV
url: https://rules.sudoku-sleuth.com/xv.md
kind: xv
shape: Edges
parameters:
  cells:
    description: The two marked cells in order, for example r1c1-r1c2.
    default: Required.
    type: list<cell>
    syntax:
      form: cells
      count: 2
  mark:
    type: enum{x,v}
    description: X gives a sum of ten; V gives a sum of five.
    default: Required.
    syntax:
      form: keywords
      named: true
      choices:
        x: {}
        v: {}
alias_of: aggregate-equation
alias_bind:
  left: ⟨weightedOperand(aggregateOperand(⟨cells[i]:i∈[0,|cells|),i=0⟩,"V","sum",true),1,1):termIndex∈[0,1)⟩
  right: ⟨weightedOperand(aggregateOperand(⟨cells[i]:i∈[0,|cells|),i=1⟩,"V","sum",true),1,1):termIndex∈[0,1)⟩
  leftOperation: '"sum"'
  rightOperation: '"sum"'
  relation: if |cells|=2 then relationSpec("sum",if mark="x" then 10 else 5) else relationSpec("difference",-1)
layer: rule
---

# XV

An X joins two values that sum to ten. A V joins two values that sum to five.

Use `x` or `v` after the two cells. For another sum, use [pair](pair.md). An unmarked pair has no XV restriction. Use [negative](negative.md) to state that all possible marks are given.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| cells | `list<cell>` | The two marked cells in order, for example r1c1-r1c2. | Required. |
| mark | `enum{x,v}` | X gives a sum of ten; V gives a sum of five. | Required. |

## Definition

Block: [aggregate-equation](aggregate-equation.md) — `left=⟨weightedOperand(aggregateOperand(⟨cells[i]:i∈[0,|cells|),i=0⟩,"V","sum",true),1,1):termIndex∈[0,1)⟩; right=⟨weightedOperand(aggregateOperand(⟨cells[i]:i∈[0,|cells|),i=1⟩,"V","sum",true),1,1):termIndex∈[0,1)⟩; leftOperation="sum"; rightOperation="sum"; relation=if |cells|=2 then relationSpec("sum",if mark="x" then 10 else 5) else relationSpec("difference",-1)`.

This is a bound shorthand for [aggregate-equation](aggregate-equation.md), reading effective values V.

## Example

````markdown
---
format: open-rules
title: XV example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
xv r1c1-r1c2 x
```
````

Satisfies the rule: r1c1=4, r1c2=6. The values sum to ten.

Breaks the rule: r1c1=4, r1c2=5. The values sum to nine.
