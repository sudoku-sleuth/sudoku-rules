---
name: Number Property
url: https://rules.sudoku-sleuth.com/number-property.md
kind: number-property
shape: Cages
parameters:
  operand:
    type: AggregateOperand
    description: The aggregate or ordered decimal operand.
    default: Required.
  property:
    type: enum{prime,composite,power,divisible,places}
    description: The numeric property to require.
    default: Required.
  argument:
    type: position
    description: Exponent, divisor or decimal digit count; unused for prime and composite.
    default: "2."
  reverse:
    type: boolean
    description: Also accept the reverse decimal reading.
    default: false.
  remainder:
    type: optional<number>
    description: Require this remainder modulo argument instead of a numeric property.
    default: Absent.
  alternating:
    type: boolean
    description: Alternate the property and its complement over line windows.
    default: false.
  line:
    type: list<cell>
    description: Cells for alternating property checks.
    default: Empty list.
  edges:
    type: optional<list<list<cell>>>
    description: Optional connected network for alternation.
    default: Absent.
  loop:
    type: boolean
    description: Close an alternating path.
    default: false.
  operands:
    type: optional<list<AggregateOperand>>
    description: Check these operands instead of the single operand.
    default: Absent.
  allowed:
    type: optional<list<number>>
    description: Restrict each forward operand result to these numbers.
    default: Absent.
  distinct:
    type: boolean
    description: Require different forward results across operands.
    default: false.
layer: block
---

# Number Property

The operand result has the stated numeric property. Powers use a nonnegative integer base and a positive exponent. Divisibility uses a nonzero integer divisor. Decimal places counts the digits of a nonnegative integer, with zero having one place. Prime and composite require integers greater than one. Reverse reading applies only to decimal operands and reverses the selected cells after slicing and prefix selection.

With `operands`, apply the check to every supplied operand. `allowed` restricts forward results, and `distinct` compares those results. Reverse acceptance does not change the result used for membership or distinctness. These settings apply to aggregate checks; alternating paths retain their separate digit checks.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| operand | `AggregateOperand` | The aggregate or ordered decimal operand. | Required. |
| property | `enum{prime,composite,power,divisible,places}` | The numeric property to require. | Required. |
| argument | `position` | Exponent, divisor or decimal digit count; unused for prime and composite. | 2. |
| reverse | `boolean` | Also accept the reverse decimal reading. | false. |
| remainder | `optional<number>` | Require this remainder modulo argument instead of a numeric property. | Absent. |
| alternating | `boolean` | Alternate the property and its complement over line windows. | false. |
| line | `list<cell>` | Cells for alternating property checks. | Empty list. |
| edges | `optional<list<list<cell>>>` | Optional connected network for alternation. | Absent. |
| loop | `boolean` | Close an alternating path. | false. |
| operands | `optional<list<AggregateOperand>>` | Check these operands instead of the single operand. | Absent. |
| allowed | `optional<list<number>>` | Restrict each forward operand result to these numbers. | Absent. |
| distinct | `boolean` | Require different forward results across operands. | false. |

## Maths

Class: **with aggregates**.

The [shared predicates](predicates.md) define the notation and operations.

```text
if alternating then lineGeometry(line,edges,loop) ∧ (∀c∈line:D(c)>1) ∧ (present(edges) → ∀c∈allCells(unwrap(edges)):D(c)>1) ∧ (∀W∈lineWindows(line,edges,2,loop): |W|=2 → ¬(numericProperty(D(W[0]),property,argument)↔numericProperty(D(W[1]),property,argument))) else let inputs=if present(operands) then unwrap(operands) else ⟨operand:i∈[0,1)⟩;
(distinct → allDifferent(inputs,λo:AggregateOperand:if operandValid(o) then aggregateExpression(o) else 0)) ∧
∀o∈inputs: operandValid(o) ∧ (present(allowed) → aggregateExpression(o)∈unwrap(allowed)) ∧ (¬reverse ∨ o.operation="decimal") ∧ (if present(remainder) then argument>=1 ∧ ⌊aggregateExpression(o)⌋=aggregateExpression(o) ∧ rem(aggregateExpression(o),argument)=unwrap(remainder) else (numericProperty(aggregateExpression(o),property,argument) ∨ (reverse ∧ decimalValid(reversal(operandCells(o))) ∧ numericProperty(decimal(reversal(operandCells(o))),property,argument))))
```

## Example

````markdown
---
format: open-rules
title: Number Property example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
number-property operand {"cells":["r1c1","r1c2"],"channel":"D","operation":"decimal","repeats":true} property "power" argument 2
```
````

Satisfies the rule: Digits 4,9 read 49, a square.

Breaks the rule: Digits 4,8 read 48, which is not a square.
