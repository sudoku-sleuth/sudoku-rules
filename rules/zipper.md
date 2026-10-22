---
name: Zipper
url: https://rules.sudoku-sleuth.com/zipper.md
kind: zipper
parameters:
  centre:
    description: Whether pair sums equal the centre on odd lines, ignore it, or require an odd-length line with a centre.
    default: when-odd.
    type: enum{"when-odd",ignore,required}
  line:
    description: The cells in order, for example r1c1-r1c2-r1c3.
    default: Required.
    type: path<cell>
---

# Zipper

Pairs equally far from the centre have the same sum. By default, on an odd-length line that sum is the centre digit.

`centre "when-odd"` allows even and odd lengths, tying the pair sum to the centre only when it exists. `centre "ignore"` compares the mirrored pair sums without constraining an odd line’s centre. `centre "required"` requires odd length and ties every pair sum to the centre. Digits may repeat when other rules allow. A line with fewer than two cells has no pairs; only the required-centre version rejects empty or even length.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| centre | How the centre constrains pair sums and line length. | when-odd. |
| line | The cells in order, for example r1c1-r1c2-r1c3. | Required. |

## Maths

Class: **first-order**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
(∀i,j∈[0,|line|): i<⌊|line|/2⌋ ∧ j<⌊|line|/2⌋ → D(line[i])+D(line[|line|-1-i])=D(line[j])+D(line[|line|-1-j]))
∧ (centre="required" → |line| mod 2=1)
∧ (centre!="ignore" ∧ |line| mod 2=1 → ∀i∈[0,|line|): i<⌊|line|/2⌋ → |line|>0 ∧ 0<=⌊|line|/2⌋<|line| ∧ D(line[i])+D(line[|line|-1-i])=D(line[⌊|line|/2⌋]))
```

All mirrored pairs cells[i],cells[length−1−i] have the same sum. For odd length, each pair sums to the centre digit unless centre is ignore. The required mode also requires odd length.

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

### Choosing the centre rule

```rules
zipper r1c1-r2c2-r3c3-r4c4-r5c5 centre "ignore"
```

Satisfies the rule: [1,2,9,4,5] has pair sums 6 and 6; its centre 9 is ignored. Breaks the rule: [1,2,9,4,6] has unequal pair sums 7 and 6. The satisfying assignment fails the default centre rule.

With `centre "required"`, [1,2,6,4,5] satisfies the rule and [1,2,4,5] breaks it because its length is even. The latter satisfies `centre "when-odd"`.
