---
name: Limited Digits
url: https://rules.sudoku-sleuth.com/limited-digits.md
kind: limited-digits
parameters:
  line:
    description: The cells in order, for example r1c1-r1c2-r1c3.
    default: Required.
    type: path<cell>
  max:
    description: The greatest number of listed rules or different digits allowed.
    default: Required.
    type: number
---

# Limited Digits

The marked cells contain at most the stated number of different digits.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| line | The cells in order, for example r1c1-r1c2-r1c3. | Required. |
| max | The greatest number of listed rules or different digits allowed. | Required. |

## Maths

Class: **with aggregates**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
|faceDigits(line)| ≤ max
```

The number of distinct D values in cells is at most max.

## Example

````markdown
---
format: open-rules
title: Limited Digits example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
limited-digits r1c1-r1c2-r1c3 max 2
```
````

Satisfies the rule: r1c1=1, r1c2=2, r1c3=1. Only two different digits occur.

Breaks the rule: r1c1=1, r1c2=2, r1c3=3. Three different digits occur, exceeding the limit 2.
