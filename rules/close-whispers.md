---
name: Close Whispers
url: https://rules.sudoku-sleuth.com/close-whispers.md
kind: close-whispers
parameters:
  line:
    description: The cells in order, for example r1c1-r1c2-r1c3.
    default: Required.
    type: path<cell>
  gap:
    description: The greatest difference allowed between neighbours.
    default: Required.
    type: number
---

# Close Whispers

Neighbouring digits along the line differ by at most the stated maximum.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| line | The cells in order, for example r1c1-r1c2-r1c3. | Required. |
| gap | The greatest difference allowed between neighbours. | Required. |

## Maths

Class: **first-order**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
∀i ∈ [0,|line|−1): |D(line[i])−D(line[i+1])| ≤ gap
```

Neighbouring path positions differ in digit by at most gap.

## Example

````markdown
---
format: open-rules
title: Close Whispers example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
close-whispers r1c1-r1c2 gap 2
```
````

Satisfies the rule: r1c1=1, r1c2=3. The neighbours differ by the permitted maximum 2.

Breaks the rule: r1c1=1, r1c2=4. The neighbours differ by 3, exceeding the maximum 2.
