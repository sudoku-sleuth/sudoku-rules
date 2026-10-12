---
name: Zipper
url: https://rules.sudoku-sleuth.com/zipper.md
kind: zipper
parameters:
  line:
    description: The cells in order, for example r1c1-r1c2-r1c3.
    default: Required.
    type: path<cell>
---

# Zipper

Pairs equally far from the centre have the same sum. On an odd-length line, that sum is the centre digit.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| line | The cells in order, for example r1c1-r1c2-r1c3. | Required. |

## Maths

Class: **first-order**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
(∀i,j∈[0,|line|): i<⌊|line|/2⌋ ∧ j<⌊|line|/2⌋ → D(line[i])+D(line[|line|-1-i])=D(line[j])+D(line[|line|-1-j]))
∧ (|line| mod 2=1 → ∀i∈[0,|line|): i<⌊|line|/2⌋ → |line|>0 ∧ 0<=⌊|line|/2⌋<|line| ∧ D(line[i])+D(line[|line|-1-i])=D(line[⌊|line|/2⌋]))
```

All mirrored pairs cells[i],cells[length−1−i] have the same sum. For odd length, each pair sums to the centre digit.

## Example

````markdown
---
format: open-rules
title: Zipper example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
zipper r1c1-r1c2-r1c3
```
````

Satisfies the rule: r1c1=2, r1c2=5, r1c3=3. The end pair adds up to the centre digit 5.

Breaks the rule: r1c1=2, r1c2=5, r1c3=4. The end pair adds up to 6 instead of the centre digit 5.
