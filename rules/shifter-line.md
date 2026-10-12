---
name: Shifter Line
url: https://rules.sudoku-sleuth.com/shifter-line.md
kind: shifter-line
parameters:
  line:
    description: The cells in order, for example r1c1-r1c2-r1c3.
    default: Required.
    type: path<cell>
---

# Shifter Line

Digits on the line cannot be 5. Within a region, neighbours are both odd or both even and both below or both above 5. At each region crossing, exactly one of those relationships changes.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| line | The cells in order, for example r1c1-r1c2-r1c3. | Required. |

## Maths

Class: **first-order**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
(∀c∈line:D(c)!=5)
∧ ∀i,j∈[0,|line|): consecutive(line,i,j,false) →
  let P=(odd(D(line[i]))↔odd(D(line[j]))); let Q=(high(D(line[i]))↔high(D(line[j])));
  (sameRegion(line[i],line[j]) → P ∧ Q) ∧ (¬sameRegion(line[i],line[j]) → ¬(P↔Q))
```

No digit is 5. Neighbours within the same authored region share parity and polarity (below/above 5). Across a region boundary exactly one of parity and polarity changes.

## Example

````markdown
---
format: open-rules
title: Shifter Line example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
shifter-line r1c1-r1c2
```
````

Satisfies the rule: r1c1=1, r1c2=3. 1 and 3 are both odd and below 5 within the same box.

Breaks the rule: r1c1=1, r1c2=2. 1 and 2 have different parity within the same box.
