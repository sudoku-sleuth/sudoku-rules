---
name: Modular
url: https://rules.sudoku-sleuth.com/modular.md
kind: modular
parameters:
  line:
    description: The cells in order, for example r1c1-r1c2-r1c3.
    default: Required.
  loop:
    description: Whether the line closes, joining its last cell back to its first.
    default: false (open path).
  modulus:
    description: The divisor used to take remainders.
    default: 3; modulus ≥ 1.
---

# Modular

Every three consecutive digits have different remainders when divided by the stated modulus. On a two-cell line, the remainders differ.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| line | The cells in order, for example r1c1-r1c2-r1c3. | Required. |
| loop | Whether the line closes, joining its last cell back to its first. | false (open path). |
| modulus | The divisor used to take remainders. | 3; modulus ≥ 1. |

## Maths

Class: **first-order**.

D(c) is the digit in cell c; V(c) is its value after any declared modifier, otherwise D(c). The line is the supplied cell sequence; |line| is its length. The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
m = modulus if present(modulus), else 3
∀s: start(line,3,s) → distinct_{rem(D(·),m)}(window(line,3,s))
∧ (¬loop ∧ |line|=2 → rem(D(line[0]),m) ≠ rem(D(line[1]),m))
```

Every window of three path positions has three distinct normalised remainders modulo modulus. An open two-cell line has different remainders. Loop windows wrap; modulus defaults to 3.

## Example

````markdown
---
format: open-rules
title: Modular example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
modular r1c1-r1c2-r1c3
```
````

Satisfies the rule: r1c1=1, r1c2=2, r1c3=3. 1, 2, 3 have remainders 1, 2, 0 modulo 3.

Breaks the rule: r1c1=1, r1c2=2, r1c3=4. 1, 2, 4 repeats remainder 1.
