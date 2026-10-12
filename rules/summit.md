---
name: Summit
url: https://rules.sudoku-sleuth.com/summit.md
kind: summit
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

# Summit

Neighbouring digits differ. Digits rise or fall along the line, changing direction only at 1 or 9.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| line | The cells in order, for example r1c1-r1c2-r1c3. | Required. |
| loop | Whether the line closes, joining its last cell back to its first. | false (open path). |

## Maths

Class: **first-order**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
(∀i,j∈[0,|line|): consecutive(line,i,j,loop) → D(line[i])!=D(line[j]))
∧ ∀i,j,k∈[0,|line|): next(line,i,j,loop) ∧ next(line,j,k,loop) →
  ((D(line[j])∈{1,9} → (D(line[j])-D(line[i]))*(D(line[k])-D(line[j]))<0)
  ∧ (D(line[j])∉{1,9} → (D(line[j])-D(line[i]))*(D(line[k])-D(line[j]))>0))
```

Neighbouring digits differ. At each internal position the two successive differences have the same sign unless its digit is 1 or 9, where the sign reverses. A loop checks all positions cyclically.

## Example

````markdown
---
format: open-rules
title: Summit example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
summit r1c1-r1c2-r1c3
```
````

Satisfies the rule: r1c1=2, r1c2=9, r1c3=3. 2, 9, 3 changes direction at 9.

Breaks the rule: r1c1=2, r1c2=8, r1c3=3. 2, 8, 3 changes direction at 8.
