---
name: Double Arrow
url: https://rules.sudoku-sleuth.com/double-arrow.md
kind: double-arrow
parameters:
  ends:
    description: The two end cells, in their stated order.
    default: Required.
    type: list<cell>
  line:
    description: The cells in order, for example r1c1-r1c2-r1c3.
    default: Required.
    type: path<cell>
  channel:
    type: Channel
    description: Read printed digits (D) or effective values (V).
    default: D.
  repeats:
    type: boolean
    description: Whether numbers may repeat in the listed ends and interior.
    default: true.
---

# Double Arrow

Digits between the two ends add up to the sum of the end digits.

List the two circled cells in `ends` and only the intervening cells in `line`. The two ends are added as separate digits, not read as a two-digit number. Digits may repeat when other rules allow.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| ends | The two end cells, in their stated order. | Required. |
| line | The cells in order, for example r1c1-r1c2-r1c3. | Required. |
| channel | Read printed digits (D) or effective values (V). | D. |
| repeats | Whether numbers may repeat in the listed ends and interior. | true. |

## Maths

Class: **with aggregates**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
|ends|=2 ∧ repeatPolicy(ends,channel,repeats) ∧ repeatPolicy(line,channel,repeats) ∧ (¬repeats → ∀a∈ends: ∀b∈line: read(a,channel)!=read(b,channel)) ∧ aggregate(line,channel,"sum")=aggregate(ends,channel,"sum")
```

The interior total equals the total of the two ends. Both operands read the selected channel.

## Example

````markdown
---
format: open-rules
title: Double Arrow example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
double-arrow r1c2 ends ["r1c1","r1c3"]
```
````

Satisfies the rule: r1c2=5, r1c1=2, r1c3=3. The middle digit 5 equals the two ends added together.

Breaks the rule: r1c2=6, r1c1=2, r1c3=3. The middle digit 6 differs from the end total 5.
