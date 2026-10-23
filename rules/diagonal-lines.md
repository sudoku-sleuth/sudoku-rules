---
name: Diagonal Lines
url: https://rules.sudoku-sleuth.com/diagonal-lines.md
kind: diagonal-lines
parameters:
  classes:
    description: "The digit classes to use: parity, remainder or alphabet thirds."
    default: Required.
    type: ClassSystem
  minLength:
    description: The shortest diagonal covered by the rule.
    default: Required.
    type: number
layer: rule
---

# Diagonal Lines

Each sufficiently long diagonal either stays in one digit class or repeats complete windows of all classes.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| classes | `ClassSystem` | The digit classes to use: parity, remainder or alphabet thirds. | Required. |
| minLength | `number` | The shortest diagonal covered by the rule. | Required. |

## Maths

Class: **with aggregates**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
(classes!="entropy" ∨ (|𝔄|>0 ∧ |𝔄| mod 3=0))
∧ ∀L∈boardDiagonals(): |L|>=maximumPair(3,minLength) →
  ((∃k∈classIds(classes): ∀c∈L: digitClass(classes,D(c))=k)
   ∨ (∀s∈[0,|L|-|classIds(classes)|+1):
     allDifferent(window(L,|classIds(classes)|,s,false),λc:cell: digitClass(classes,D(c)))))
```

Every board diagonal of length at least max(3,minLength) is constant in class or has every class once in each window of class-count positions.

## Example

````markdown
---
format: open-rules
title: Diagonal Lines example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
board:
  rows: 3
  cols: 3
  symbols:
    - 1
    - 2
    - 3
    - 4
    - 5
    - 6
    - 7
    - 8
    - 9
---

```rules
diagonal-lines classes "parity" minLength 3
```
````

Satisfies the rule: r1c1=1, r2c2=3, r3c3=5. This three-cell diagonal stays in one parity class.

Breaks the rule: r1c1=2, r2c2=3, r3c3=5. A diagonal changes class without the required repeating class windows.
