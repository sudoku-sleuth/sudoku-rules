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

Values on a complete shaft add up to the bulb. A partial shaft may total at most the bulb. A bulb with several cells forms a decimal number in the listed order.

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
  (|bulb|=1 → if partial then valueSum(line)<=V(bulb[0]) else valueSum(line)=V(bulb[0]))
  ∧ (|bulb|!=1 → if partial then sum_D(line)<=B else sum_D(line)=B)
```

For a one-cell bulb, use shaft values; for a multi-cell bulb, use shaft digits and the decimal number formed by the bulb digits. A complete shaft has that total; a partial shaft may have a smaller total.

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
