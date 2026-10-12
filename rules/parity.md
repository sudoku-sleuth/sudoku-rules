---
name: Parity
url: https://rules.sudoku-sleuth.com/parity.md
kind: parity
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

# Parity

Digits alternate between odd and even along the line.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| line | The cells in order, for example r1c1-r1c2-r1c3. | Required. |
| loop | Whether the line closes, joining its last cell back to its first. | false (open path). |

## Maths

Class: **first-order**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
∀i,j∈[0,|line|): consecutive(line,i,j,loop) → ¬(odd(D(line[i])) ↔ odd(D(line[j])))
```

Neighbouring path positions have different digit parity. Include last/first when loop is true.

## Example

````markdown
---
format: open-rules
title: Parity example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
parity r1c1-r1c2
```
````

Satisfies the rule: r1c1=1, r1c2=2. 1 is odd and 2 is even.

Breaks the rule: r1c1=1, r1c2=3. 1 and 3 are both odd.
