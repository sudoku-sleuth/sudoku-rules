---
name: HDR Thermos
url: https://rules.sudoku-sleuth.com/hdr-thermos.md
kind: hdr-thermos
shape: Lines
aliases: ["Shading-dependent signed thermometer", "HDR thermometer"]
parameters:
  line:
    type: path<cell>
    description: Thermometer cells in bulb-to-tip order.
    default: Required.
layer: rule
---

# HDR Thermos

Along each thermometer, read shaded digits as negative and unshaded digits as positive. These local signed numbers strictly increase from bulb to tip. Other clues keep their own value rules.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| line | `path<cell>` | Thermometer cells in bulb-to-tip order. | Required. |

## Maths

Class: **first-order**.

The [shared predicates](predicates.md) define the notation and operations.

```text
∀i∈[0,|line|-1):(if line[i]∈H then -D(line[i]) else D(line[i])) < (if line[i+1]∈H then -D(line[i+1]) else D(line[i+1]))
```

## Example

````markdown
---
format: open-rules
title: HDR Thermos example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
hdr-thermos r1c1-r1c2-r1c3
```
````

Satisfies the rule: r1c1=7, r1c2=3, r1c3=2. Shade the first two cells: −7, −3, 2 increase.

Breaks the rule: r1c1=3, r1c2=7, r1c3=2 with the same shading. −3, −7, 2 do not increase.
