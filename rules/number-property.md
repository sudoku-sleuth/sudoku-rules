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
layer: block
---

# Number Property

The operand result has the stated numeric property. Powers use a nonnegative integer base and a positive exponent. Divisibility uses a nonzero integer divisor. Decimal places counts the digits of a nonnegative integer, with zero having one place. Prime and composite require integers greater than one. Reverse reading applies only to decimal operands and reverses the selected cells after slicing and prefix selection.

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

## Maths

Class: **with aggregates**.

The [shared predicates](predicates.md) define the notation and operations.

```text
if alternating then lineGeometry(line,edges,loop) ∧ (∀c∈line:D(c)>1) ∧ (present(edges) → ∀c∈allCells(unwrap(edges)):D(c)>1) ∧ (∀W∈lineWindows(line,edges,2,loop): |W|=2 → ¬(numericProperty(D(W[0]),property,argument)↔numericProperty(D(W[1]),property,argument))) else operandValid(operand) ∧ (¬reverse ∨ operand.operation="decimal") ∧ (if present(remainder) then argument>=1 ∧ ⌊aggregateExpression(operand)⌋=aggregateExpression(operand) ∧ rem(aggregateExpression(operand),argument)=unwrap(remainder) else (numericProperty(aggregateExpression(operand),property,argument) ∨ (reverse ∧ decimalValid(reversal(operandCells(operand))) ∧ numericProperty(decimal(reversal(operandCells(operand))),property,argument))))
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
