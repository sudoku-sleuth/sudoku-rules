---
name: Thermo
url: https://rules.sudoku-sleuth.com/thermo.md
kind: thermo
parameters:
  line:
    description: The cells in order, for example r1c1-r1c2-r1c3.
    default: Required.
    type: path<cell>
reading:
  colour: green
  terms: [thermo, thermos, thermometer, thermometers]
  variants:
    - heading: Thermometers
      noun: thermometers
      item: "bulb {line.first}, tip {line.last} ({line.length} cells)"
      one: "The digits along {line} strictly increase from the bulb to the tip."
      many: "{count|Words} thermometers. On each, the digits strictly increase from the bulb to the tip."
      rule: "On each, the digits strictly increase from the bulb to the tip."
---

# Thermo

Values strictly increase from the bulb to the tip of the thermometer.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| line | The cells in order, for example r1c1-r1c2-r1c3. | Required. |

## Maths

Class: **first-order**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
∀i ∈ [0,|line|−1): V(line[i]) < V(line[i+1])
```

Values strictly increase along the path from its bulb.

## Example

````markdown
---
format: open-rules
title: Thermo example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo r1c1-r1c2
```
````

Satisfies the rule: r1c1=1, r1c2=2. 1 then 2 increases from the bulb.

Breaks the rule: r1c1=2, r1c2=1. 2 then 1 decreases from the bulb.
