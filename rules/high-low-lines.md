---
name: High-Low Lines
url: https://rules.sudoku-sleuth.com/high-low-lines.md
kind: high-low-lines
shape: Lines
aliases: ["High or low line", "High or low", "High or low line including five"]
parameters:
  line:
    type: path<cell>
    description: The cells of one line.
    default: Required.
layer: rule
---

# High-Low Lines

Each line uses only digits from 1 to 5, or only digits from 5 to 9. Five belongs to both ranges. Digits may repeat.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| line | `path<cell>` | The cells of one line. | Required. |

## Maths

Class: **first-order**.

The [shared predicates](predicates.md) define the notation and operations.

```text
(∀c∈line:1<=D(c)<=5) ∨ (∀c∈line:5<=D(c)<=9)
```

## Example

````markdown
---
format: open-rules
title: High-Low Lines example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
high-low-lines r1c1-r1c2-r1c3
```
````

Satisfies the rule: r1c1=2, r1c2=5, r1c3=4. All three digits belong to the lower range.

Breaks the rule: r1c1=2, r1c2=5, r1c3=8. Neither range contains the whole line.
