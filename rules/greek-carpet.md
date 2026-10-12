---
name: Greek Carpet
url: https://rules.sudoku-sleuth.com/greek-carpet.md
kind: greek-carpet
parameters:
  line:
    description: The cells in order, for example r1c1-r1c2-r1c3.
    default: Required.
    type: path<cell>
  unrolled:
    description: The corresponding cells on the unrolled path, in order.
    default: Required.
    type: list<cell>
---

# Greek Carpet

The two paths contain the same digits in corresponding positions.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| line | The cells in order, for example r1c1-r1c2-r1c3. | Required. |
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
