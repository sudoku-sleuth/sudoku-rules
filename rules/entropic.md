---
name: Entropic
url: https://rules.sudoku-sleuth.com/entropic.md
kind: entropic
parameters:
  line:
    description: The cells in order, for example r1c1-r1c2-r1c3.
    default: Required.
    type: path<cell>
  loop:
    description: Whether the line closes, joining its last cell back to its first.
    default: false (open path).
    type: boolean
---

# Entropic

Every three consecutive digits contain one from each third of the ordered alphabet. On a two-cell line, the digits come from different thirds.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| line | The cells in order, for example r1c1-r1c2-r1c3. | Required. |
| loop | Whether the line closes, joining its last cell back to its first. | false (open path). |

## Maths

Class: **with aggregates**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
|𝔄|>0 ∧ |𝔄| mod 3=0
∧ (∀s∈[0,|line|): start(line,3,s,loop) → distinctAt(window(line,3,s,loop),λc:cell: classEntropy(D(c))))
∧ (¬loop ∧ |line|=2 → classEntropy(D(line[0]))!=classEntropy(D(line[1])))
```

Every window of three path positions has one symbol from each equal-sized third of the ordered board alphabet. An open two-cell line uses different thirds. Loop windows wrap. The alphabet size must be divisible by 3.

## Example

````markdown
---
format: open-rules
title: Entropic example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
entropic r1c1-r1c2-r1c3
```
````

Satisfies the rule: r1c1=1, r1c2=4, r1c3=7. 1, 4, 7 gives one digit from each of 1–3, 4–6 and 7–9.

Breaks the rule: r1c1=1, r1c2=4, r1c3=6. 1, 4, 6 uses the middle third twice and misses the upper third.
