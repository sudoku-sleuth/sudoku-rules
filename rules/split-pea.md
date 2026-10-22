---
name: Split Pea
url: https://rules.sudoku-sleuth.com/split-pea.md
kind: split-pea
shape: Lines
parameters:
  line:
    type: path<cell>
    description: The full path including both endpoint circles.
    default: Required.
---

# Split Pea

The interior digits sum to the two endpoint digits read as a decimal number in either order. Each endpoint supplies one decimal digit.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| line | The full path including both endpoint circles. | Required. |

## Maths

Class: **with aggregates**.

The [shared predicates](predicates.md) define the notation and every named predicate.

```text
|line|>=2 ∧ reversibleDecimal(⟨line[i]:i∈[0,|line|), i=0 ∨ i=|line|-1⟩,aggregate(betweenPositions(line,0,|line|-1),"D","sum"))
```

## Example

````markdown
---
format: open-rules
title: Split Pea example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
split-pea r1c1-r1c2-r1c3-r1c4-r1c5
```
````

Satisfies the rule: Ends 1 and 3, interior 3,4,6: the interior totals 13.

Breaks the rule: Ends 1 and 3, interior 3,4,5: the interior totals 12.
