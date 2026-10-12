---
name: Whisper
url: https://rules.sudoku-sleuth.com/whispers.md
kind: whispers
parameters:
  line:
    description: The cells in order, for example r1c1-r1c2-r1c3.
    default: Required.
    type: path<cell>
  gap:
    description: "The least difference between neighbours: 5 for German whispers, 4 for Dutch whispers."
    default: Required.
    type: number
  loop:
    description: Whether the line closes, joining its last cell back to its first.
    default: false (open path).
    type: boolean
---

# Whisper

Neighbouring values along the line differ by at least the stated gap.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| line | The cells in order, for example r1c1-r1c2-r1c3. | Required. |
| gap | The least difference between neighbours: 5 for German whispers, 4 for Dutch whispers. | Required. |
| loop | Whether the line closes, joining its last cell back to its first. | false (open path). |

## Maths

Class: **first-order**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
∀i,j∈[0,|line|): consecutive(line,i,j,loop) → |V(line[i])-V(line[j])|>=gap
```

Neighbouring path positions differ in value by at least gap. Include last/first when loop is true.

## Example

````markdown
---
format: open-rules
title: Whisper example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
whispers r1c1-r1c2 gap 5
```
````

Satisfies the rule: r1c1=1, r1c2=6. 1 and 6 differ by 5.

Breaks the rule: r1c1=1, r1c2=5. 1 and 5 differ by only 4.
