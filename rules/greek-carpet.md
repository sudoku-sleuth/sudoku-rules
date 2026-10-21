---
name: Greek Carpet
url: https://rules.sudoku-sleuth.com/greek-carpet.md
kind: greek-carpet
parameters:
  line:
    description: The rolled path in order from its corresponding starting end.
    default: Required.
    type: path<cell>
  unrolled:
    description: The corresponding cells on the unrolled path, in order.
    default: Required.
    type: list<cell>
---

# Greek Carpet

A Greek carpet is a rolled path, commonly a spiral, paired with its straight, unrolled path. Read both from the corresponding starting end: their first digits match, their second digits match, and so on. The supplied paths must have the same length.

This uses the same position-by-position equality as cloned regions. The Greek carpet declaration records the ordered rolled and unrolled paths. A [Palindrome](https://rules.sudoku-sleuth.com/palindrome.md) instead matches opposite positions on one path. Paths sharing a cell does not, by itself, make them a palindrome.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| line | The rolled path in order from its corresponding starting end. | Required. |
| unrolled | The corresponding cells on the unrolled path, in order. | Required. |

## Maths

Class: **first-order**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
|line|=|unrolled| ∧ ∀i∈[0,|line|): D(line[i])=D(unrolled[i])
```

Each path position matches the corresponding unrolled position in digit. Both paths have the same length.

## Example

````markdown
---
format: open-rules
title: Greek Carpet example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
greek-carpet r1c1-r1c2 unrolled ["r1c3","r1c4"]
```
````

Satisfies the rule: r1c1=1, r1c2=2, r1c4=2, r1c3=1. Corresponding positions contain matching digits.

Breaks the rule: r1c1=1, r1c2=2, r1c4=3, r1c3=1. The last corresponding digits differ.

For paths [r1c1,r1c2,r2c2] and [r1c1,r1c2,r1c3], the first two positions already coincide. The remaining condition is D(r2c2)=D(r1c3). Digits 1,2,3 on the first path and 1,2,3 on the second satisfy the correspondence, although neither sequence is a palindrome.
