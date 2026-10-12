---
name: Arrow
url: https://rules.sudoku-sleuth.com/arrow.md
kind: arrow
parameters:
  partial:
    type: boolean
    description: Whether the drawn shaft is only part of the full arrow.
    default: false (complete arrow).
  bulb:
    description: The bulb cells, in reading order; several cells form a decimal number.
    default: Required.
    type: list<cell>
  line:
    description: The cells in order, for example r1c1-r1c2-r1c3.
    default: Required.
    type: path<cell>
---

# Arrow

A complete one-cell arrow adds effective shaft values to the bulb value. A partial arrow adds face digits to at most the bulb’s face-digit number. A bulb with several cells forms a decimal number in the listed order.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| bulb | The bulb cells, in reading order; several cells form a decimal number. | Required. |
| line | The cells in order, for example r1c1-r1c2-r1c3. | Required. |
| partial | Whether the drawn shaft is only part of the full arrow. | false (complete arrow). |

## Maths

Class: **with aggregates**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
|bulb|>0 ∧ let B = Σ_{i∈[0,|bulb|)} D(bulb[i])*10^(|bulb|-1-i);
  (partial → sum_D(line)<=B)
  ∧ (¬partial → (|bulb|=1 → valueSum(line)=V(bulb[0]))
    ∧ (|bulb|!=1 → sum_D(line)=B))
```

A partial shaft always reads face digits and totals at most the bulb’s decimal face-digit number B. A complete one-cell bulb reads effective shaft and bulb values; a complete multi-cell bulb reads digits and totals B.

## Example

````markdown
---
format: open-rules
title: Arrow example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
arrow r1c2-r1c3 bulb ["r1c1"]
```
````

Satisfies the rule: r1c2=2, r1c3=3, r1c1=5. The shaft digits 2 and 3 total the bulb 5.

Breaks the rule: r1c2=2, r1c3=4, r1c1=5. The shaft digits 2 and 4 total 6, exceeding the bulb 5.
