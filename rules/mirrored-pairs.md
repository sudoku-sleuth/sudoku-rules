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
    type: enum{equal,"equal-sum","allowed-sum","equal-difference"}
    description: Compare paired values, their sums or centre-clued differences.
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

Compare opposite positions along a line or a half-turned board by equality, a common pair sum, allowed pair sums, or centre-clued absolute differences.

In `equal-difference` mode, the line must have a centre cell. Each mirrored pair has absolute difference equal to the centre value. This mode requires line geometry and an odd, nonempty line, independently of `centre`.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| line | `list<cell>` | The ordered line. | Empty list. |
| geometry | `enum{line,rotation}` | Pair line positions or board cells. | line. |
| mode | `enum{equal,"equal-sum","allowed-sum","equal-difference"}` | Compare paired values, their sums or centre-clued differences. | equal. |
| channel | `Channel` | Read digits D or effective values V. | D. |
| sums | `list<number>` | Allowed pair sums. | Empty list. |
| centre | `enum{"when-odd",ignore,required}` | How a line centre constrains common sums. | ignore. |

## Maths

Class: **first-order**.

The [predicates](predicates.md) define the mathematical functions.

```text
if mode="equal-difference" then geometry="line" ∧ |line|>0 ∧ |line| mod 2=1 ∧ 0<=⌊|line|/2⌋<|line| ∧ (∀i∈[0,|line|): i<⌊|line|/2⌋ → |read(line[i],channel)-read(line[|line|-1-i],channel)|=read(line[⌊|line|/2⌋],channel)) else (geometry="rotation" → ∀c∈C: if mode="equal" then read(c,channel)=read(turn(c),channel) else read(c,channel)+read(turn(c),channel)∈sums)
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
