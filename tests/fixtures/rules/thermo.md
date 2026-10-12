---
name: Thermo
url: https://rules.sudoku-sleuth.com/thermo.md
kind: thermo
parameters:
  line:
    description: The cells in order, for example r1c1-r1c2-r1c3.
    default: Required.
---

# Thermo

Values strictly increase from the bulb to the tip of the thermometer.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| line | The cells in order, for example r1c1-r1c2-r1c3. | Required. |

## Maths

Class: **first-order**.

D(c) is the digit in cell c; V(c) is its value after any declared modifier, otherwise D(c). The line is the supplied cell sequence; |line| is its length. The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

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
