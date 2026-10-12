---
name: Slow Thermo
url: https://rules.sudoku-sleuth.com/slow-thermo.md
kind: slow-thermo
parameters:
  line:
    description: The cells in order, for example r1c1-r1c2-r1c3.
    default: Required.
    type: path<cell>
---

# Slow Thermo

Digits never decrease from the bulb to the tip. Equal neighbours are allowed.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| line | The cells in order, for example r1c1-r1c2-r1c3. | Required. |

## Maths

Class: **first-order**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
∀i ∈ [0,|line|−1): D(line[i]) ≤ D(line[i+1])
```

Digits never decrease along the path from its bulb.

## Example

````markdown
---
format: open-rules
title: Slow Thermo example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
slow-thermo r1c1-r1c2
```
````

Satisfies the rule: r1c1=2, r1c2=2. Equal neighbours do not decrease.

Breaks the rule: r1c1=2, r1c2=1. The second digit is smaller than the bulb.
