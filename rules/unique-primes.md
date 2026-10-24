---
name: Unique Primes
url: https://rules.sudoku-sleuth.com/unique-primes.md
kind: unique-primes
shape: Cages
aliases:
- Prime circle and pill numbers
- DIFFERENT 2-digit primes
parameters:
  groups:
    type: list<list<cell>>
    description: Circle and pill cells in decimal reading order.
    default: Required.
  allowed:
    type: list<number>
    description: Permitted prime numbers.
    default: Required.
layer: rule
alias_of: number-property
alias_bind:
  operand: aggregateOperand(orderedCells({}),"D","sum",true)
  property: '"prime"'
  argument: '2'
  reverse: 'false'
  remainder: absent(0)
  alternating: 'false'
  line: orderedCells({})
  edges: absent(⟨orderedCells(C):i∈[0,0)⟩)
  loop: 'false'
  operands: some(⟨aggregateOperand(g,"D","decimal",true):g∈groups⟩)
  allowed: some(allowed)
  distinct: 'true'
---

# Unique Primes

Each circle or pill reads a prime number in the supplied cell order. The numbers are all different and each belongs to the allowed list. Each group is nonempty and uses decimal digits. Digits may repeat within a number. List membership does not require every allowed prime to appear.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| groups | `list<list<cell>>` | Circle and pill cells in decimal reading order. | Required. |
| allowed | `list<number>` | Permitted prime numbers. | Required. |

## Definition

Block: [number-property](number-property.md) — `operand=aggregateOperand(orderedCells({}),"D","sum",true); property="prime"; argument=2; reverse=false; remainder=absent(0); alternating=false; line=orderedCells({}); edges=absent(⟨orderedCells(C):i∈[0,0)⟩); loop=false; operands=some(⟨aggregateOperand(g,"D","decimal",true):g∈groups⟩); allowed=some(allowed); distinct=true`.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

## Example

````markdown
---
format: open-rules
title: Unique Primes example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
unique-primes groups [["r1c1","r1c2"],["r2c1","r2c2"]] allowed [13,17,23]
```
````

Satisfies the rule: r1c1=1, r1c2=3, r2c1=2, r2c2=3. The numbers 13 and 23 are different allowed primes.

Breaks the rule: r1c1=1, r1c2=3, r2c1=1, r2c2=3. Both groups read 13.
