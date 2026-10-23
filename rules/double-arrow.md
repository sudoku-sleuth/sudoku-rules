---
name: Double Arrow
url: https://rules.sudoku-sleuth.com/double-arrow.md
kind: double-arrow
parameters:
  ends:
    description: The two end cells, in their stated order.
    default: Required.
    type: list<cell>
  line:
    description: The cells in order, for example r1c1-r1c2-r1c3.
    default: Required.
    type: path<cell>
  channel:
    type: Channel
    description: Read printed digits (D) or effective values (V).
    default: D.
  repeats:
    type: boolean
    description: Whether numbers may repeat in the listed ends and interior.
    default: true.
alias_of: aggregate-equation
alias_bind:
  left: ⟨if termIndex=0 then weightedOperand(aggregateOperand(line,channel,"sum",true),1,1) else weightedOperand(aggregateOperand(⟨if i<|ends| then ends[i] else line[i-|ends|]:i∈[0,|ends|+|line|)⟩,channel,"count",repeats),0,1):termIndex∈[0,2)⟩
  right: ⟨weightedOperand(aggregateOperand(ends,channel,"sum",true),1,1):termIndex∈[0,1)⟩
  leftOperation: '"sum"'
  rightOperation: '"sum"'
  relation: if |ends|=2 then relationSpec("difference",0) else relationSpec("difference",-1)
layer: rule
---


# Double Arrow

Digits between the two ends add up to the sum of the end digits.

List the two circled cells in `ends` and only the intervening cells in `line`. The two ends are added as separate digits, not read as a two-digit number. Digits may repeat when other rules allow.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| ends | `list<cell>` | The two end cells, in their stated order. | Required. |
| line | `path<cell>` | The cells in order, for example r1c1-r1c2-r1c3. | Required. |
| channel | `Channel` | Read printed digits (D) or effective values (V). | D. |
| repeats | `boolean` | Whether numbers may repeat in the listed ends and interior. | true. |

## Definition

Block: [aggregate-equation](aggregate-equation.md) — `left=⟨if termIndex=0 then weightedOperand(aggregateOperand(line,channel,"sum",true),1,1) else weightedOperand(aggregateOperand(⟨if i<|ends| then ends[i] else line[i-|ends|]:i∈[0,|ends|+|line|)⟩,channel,"count",repeats),0,1):termIndex∈[0,2)⟩; right=⟨weightedOperand(aggregateOperand(ends,channel,"sum",true),1,1):termIndex∈[0,1)⟩; leftOperation="sum"; rightOperation="sum"; relation=if |ends|=2 then relationSpec("difference",0) else relationSpec("difference",-1)`.



The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

This is a bound shorthand for [aggregate-equation](aggregate-equation.md). Its header supplies every parameter of that rule.

The interior total equals the total of the two ends. Both operands read the selected channel.

## Example

````markdown
---
format: open-rules
title: Double Arrow example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
double-arrow r1c2 ends ["r1c1","r1c3"]
```
````

Satisfies the rule: r1c2=5, r1c1=2, r1c3=3. The middle digit 5 equals the two ends added together.

Breaks the rule: r1c2=6, r1c1=2, r1c3=3. The middle digit 6 differs from the end total 5.
