---
name: Ziffer Lines
url: https://rules.sudoku-sleuth.com/ziffer-lines.md
kind: ziffer-lines
shape: Lines
aliases:
- Ziffer difference
- Ziffer line
parameters:
  line:
    type: path<cell>
    description: Odd-length line with the marked centre at its midpoint.
    default: Required.
layer: rule
alias_of: mirrored-pairs
alias_bind:
  line: line
  geometry: '"line"'
  mode: '"equal-difference"'
  channel: '"D"'
  sums: ⟨n:n∈[0,0)⟩
  centre: '"required"'
---

# Ziffer Lines

Digits equally far from the marked centre have an absolute difference equal to the centre digit. The line has an odd, nonzero number of cells. A one-cell line has no pairs to compare.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| line | `path<cell>` | Odd-length line with the marked centre at its midpoint. | Required. |

## Definition

Block: [mirrored-pairs](mirrored-pairs.md) — `line=line; geometry="line"; mode="equal-difference"; channel="D"; sums=⟨n:n∈[0,0)⟩; centre="required"`.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

## Example

````markdown
---
format: open-rules
title: Ziffer Lines example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
ziffer-lines r1c1-r1c2-r1c3
```
````

Satisfies the rule: r1c1=2, r1c2=5, r1c3=7. The end digits differ by the centre digit 5.

Breaks the rule: r1c1=2, r1c2=5, r1c3=6. The end digits differ by 4.
