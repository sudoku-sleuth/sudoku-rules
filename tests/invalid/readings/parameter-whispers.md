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
reading:
  group_by: [gap]
  terms: [whisper, whispers, whisper line, whisper lines]
  parts:
    loopTitle:
      - when: {gap: 5}
        text: " (closed loops)"
      - text: ""
    loop:
      - when: {gap: 5}
        text: " The line closes into a loop, so its last cell is a neighbour of its first."
      - text: ""
  variants:
    - when: {gap: 5}
      heading: "German whisper lines{part:loopTitle}"
      noun: lines
      one: "Neighbouring digits along {line} differ by at least 5.{part:loop}"
      many: "{count|Words} lines. On each, neighbouring digits differ by at least 5.{part:loop}"
      terms: [german whisper, german whispers, adjacent digits differ by at least 5, neighbouring digits differ by at least 5, adjacent cells differ by at least 5]
    - when: {gap: 4}
      heading: "Dutch whisper lines{part:loopTitle}"
      noun: lines
      one: "Neighbouring digits along {line} differ by at least 4.{part:loop}"
      many: "{count|Words} lines. On each, neighbouring digits differ by at least 4.{part:loop}"
      terms: [dutch whisper, dutch whispers, adjacent digits differ by at least 4, neighbouring digits differ by at least 4, adjacent cells differ by at least 4]
    - heading: "Whisper lines with a gap of {gap}{part:loopTitle}"
      noun: lines
      one: "Neighbouring digits along {line} differ by at least {gap}.{part:loop}"
      many: "{count|Words} lines. On each, neighbouring digits differ by at least {gap}.{part:loop}"
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
