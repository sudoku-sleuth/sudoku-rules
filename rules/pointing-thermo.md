---
name: Pointing Thermo
url: https://rules.sudoku-sleuth.com/pointing-thermo.md
kind: pointing-thermo
parameters:
  line:
    description: The cells in order, for example r1c1-r1c2-r1c3.
    default: Required.
    type: path<cell>
  ray:
    description: The cells along the ray, nearest first.
    default: Required.
    type: list<cell>
---

# Pointing Thermo

Digits strictly increase from bulb to tip. Count outward along the ray by the tip digit: that cell contains the bulb digit.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| line | The cells in order, for example r1c1-r1c2-r1c3. | Required. |
| ray | The cells along the ray, nearest first. | Required. |

## Maths

Class: **first-order**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
|line|>0 ∧ (∀i∈[0,|line|-1): D(line[i])<D(line[i+1]))
∧ let x=D(line[|line|-1]); 1<=x<=|ray| ∧ D(ray[x-1])=D(line[0])
```

Digits strictly increase along cells. The tip digit names a one-based position on ray whose digit equals the bulb digit. The named position must be within the ray.

## Example

````markdown
---
format: open-rules
title: Pointing Thermo example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
pointing-thermo r1c1-r1c2 ray ["r1c3","r1c4"]
```
````

Satisfies the rule: r1c1=1, r1c2=2, r1c4=1, r1c3=3. The tip 2 selects the second ray cell, which matches the bulb 1.

Breaks the rule: r1c1=1, r1c2=2, r1c4=4, r1c3=3. The selected ray cell contains 4 instead of the bulb 1.
