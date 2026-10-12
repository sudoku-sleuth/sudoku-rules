---
name: Index Line
url: https://rules.sudoku-sleuth.com/index-line.md
kind: index-line
parameters:
  line:
    description: The cells in order, for example r1c1-r1c2-r1c3.
    default: Required. No repeated cell; 2 ≤ n ≤ min(16,\|𝔄\|).
    type: path<cell>
---

# Index Line

Count positions from the marked end, starting at 1. A digit X in position N means the digit in position X is N.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| line | The cells in order, for example r1c1-r1c2-r1c3. | Required. No repeated cell; 2 ≤ n ≤ min(16,\|𝔄\|). |

## Maths

Class: **first-order**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
∀i ∈ [0,|line|): 1 ≤ D(line[i]) ≤ |line| ∧ D(line[D(line[i])−1])=i+1
```

Each digit names a one-based position whose digit is the original position. All named positions are within the path. The distinct cells form a self-inverse permutation.

## Example

````markdown
---
format: open-rules
title: Index Line example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
index-line r1c1-r1c2
```
````

Satisfies the rule: r1c1=2, r1c2=1. Positions 1 and 2 point to each other.

Breaks the rule: r1c1=2, r1c2=2. Position 2 does not point back to position 1.
