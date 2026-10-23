---
name: Palindrome
url: https://rules.sudoku-sleuth.com/palindrome.md
kind: palindrome
parameters:
  line:
    description: The cells in order, for example r1c1-r1c2-r1c3.
    default: Required.
    type: path<cell>
layer: rule
alias_of: mirrored-pairs
alias_bind:
  line: line
  geometry: '"line"'
  mode: '"equal"'
  channel: '"V"'
  sums: ⟨n:n∈[0,0)⟩
  centre: '"ignore"'
---

# Palindrome

The values along the line read the same forwards and backwards.

Compare positions equally far from the two ends. Digits may repeat, including in neighbouring cells, when other rules allow.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| line | `path<cell>` | The cells in order, for example r1c1-r1c2-r1c3. | Required. |

## Definition

Block: [mirrored-pairs](mirrored-pairs.md) — `line=line; geometry="line"; mode="equal"; channel="V"; sums=⟨n:n∈[0,0)⟩; centre="ignore"`.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.



Positions at equal distances from opposite ends have equal values.

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
palindrome r1c1-r1c2-r2c3-r2c4-r3c4
```
````

Satisfies the rule: r1c1=1, r1c2=2, r2c3=3, r2c4=2, r3c4=1. 1, 2, 3, 2, 1 reads the same from either end.

Breaks the rule: r1c1=1, r1c2=2, r2c3=3, r2c4=2, r3c4=4. 1, 2, 3, 2, 4 has different end digits.
