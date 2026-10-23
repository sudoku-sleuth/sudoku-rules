---
name: Mirrored Pairs
url: https://rules.sudoku-sleuth.com/mirrored-pairs.md
kind: mirrored-pairs
layer: block
parameters:
  line:
    type: list<cell>
    description: The ordered line.
    default: Empty list.
  geometry:
    type: enum{line,rotation}
    description: Pair line positions or board cells.
    default: line.
  mode:
    type: enum{equal,"equal-sum","allowed-sum"}
    description: Compare paired values or their sums.
    default: equal.
  channel:
    type: Channel
    description: Read digits D or effective values V.
    default: D.
  sums:
    type: list<number>
    description: Allowed pair sums.
    default: Empty list.
  centre:
    type: enum{"when-odd",ignore,required}
    description: How a line centre constrains common sums.
    default: ignore.
---

# Mirrored Pairs

Compare opposite positions along a line or a half-turned board by equality, a common pair sum, or allowed pair sums.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| line | `list<cell>` | The ordered line. | Empty list. |
| geometry | `enum{line,rotation}` | Pair line positions or board cells. | line. |
| mode | `enum{equal,"equal-sum","allowed-sum"}` | Compare paired values or their sums. | equal. |
| channel | `Channel` | Read digits D or effective values V. | D. |
| sums | `list<number>` | Allowed pair sums. | Empty list. |
| centre | `enum{"when-odd",ignore,required}` | How a line centre constrains common sums. | ignore. |

## Maths

Class: **first-order**.

The [predicates](predicates.md) define the mathematical functions.

```text
(geometry="rotation" → ∀c∈C: if mode="equal" then read(c,channel)=read(turn(c),channel) else read(c,channel)+read(turn(c),channel)∈sums)
∧ (geometry="line" → (if mode="equal" then ∀i∈[0,|line|): read(line[i],channel)=read(line[mirror(line,i)],channel) else (∀i,j∈[0,|line|): i<⌊|line|/2⌋ ∧ j<⌊|line|/2⌋ → (if mode="equal-sum" then read(line[i],channel)+read(line[|line|-1-i],channel)=read(line[j],channel)+read(line[|line|-1-j],channel) else read(line[i],channel)+read(line[|line|-1-i],channel)∈sums)) ∧ (centre="required" → |line| mod 2=1) ∧ (centre!="ignore" ∧ |line| mod 2=1 → ∀i∈[0,|line|): i<⌊|line|/2⌋ → |line|>0 ∧ 0<=⌊|line|/2⌋<|line| ∧ read(line[i],channel)+read(line[|line|-1-i],channel)=read(line[⌊|line|/2⌋],channel))))
```

## Example


````markdown
---
format: open-rules
title: Palindrome example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
mirrored-pairs r1c1-r1c2-r2c3-r2c4-r3c4
```
````

Satisfies the rule: r1c1=1, r1c2=2, r2c3=3, r2c4=2, r3c4=1. 1, 2, 3, 2, 1 reads the same from either end.

Breaks the rule: r1c1=1, r1c2=2, r2c3=3, r2c4=2, r3c4=4. 1, 2, 3, 2, 4 has different end digits.
