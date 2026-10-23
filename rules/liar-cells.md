---
name: Liar Cells
url: https://rules.sudoku-sleuth.com/liar-cells.md
kind: liar-cells
shape: Cells
layer: rule
parameters:
  groups:
    type: list<set<cell>>
    description: The groups in which to count liar cells.
    default: The 27 standard rows, columns and 3x3 boxes on a 9x9 board; otherwise required.
  count:
    type: position
    description: The exact number of liar cells in each group.
    default: 1.
  values:
    type: list<number>
    description: The allowed real values of liar cells.
    default: The integers 1 through 9 on a 9x9 board; otherwise required.
  distinctDigits:
    type: boolean
    description: Whether all liar cells have different face digits.
    default: true.
  distinctValues:
    type: boolean
    description: Whether all liar cells have different real values.
    default: true.
---

# Liar Cells

A liar cell has a real value different from its written digit. Every other cell's value equals its digit. Choose the liar cells so that each group contains the stated count. Liar digits and real values are each distinct when their respective options are enabled.

Normal Sudoku applies to written digits. Whispers, Kropki, X sums and region sums read real values, using the same assignment throughout the puzzle. Record both the written digit and the real value of each liar cell. The rules choose which cells lie; the drawing need not identify them.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| groups | Groups in which to count liar cells. Cells outside their union may also lie. | Standard rows, columns and boxes on a 9x9 board; otherwise required. |
| count | Exact number of liars in each group. | 1. |
| values | Allowed real values of liars; duplicates in this list add no choices. | Integers 1–9 on a 9x9 board; otherwise required. |
| distinctDigits | All liar face digits differ. | true. |
| distinctValues | All liar real values differ. | true. |

The standard defaults require the complete 9x9 board with ordered face symbols 1–9. On other boards, supply both `groups` and `values`. Supplied groups are sets; repeating a group adds the same condition again. An impossible count makes the rule unsatisfiable. One declaration describes the entire shared value assignment; additional value assignments constrain that same channel rather than composing transformations.

## Maths

Class: **existential**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define D, V, C and allDifferent. M is the answer's set of liar cells. The values channel is part of the answer, shared by all valued rules. Groups and M are sets: duplicate cells or groups add no choices, and duplicate entries in values add no choices. Cells outside the union of groups may also belong to M; both distinctness flags apply to all of M, including those cells, rather than only the counted groups.

```text
∃M:set<cell>: M⊆C
∧ (∀G∈groups: |G∩M|=count)
∧ (distinctDigits → allDifferent(M,λc:cell:D(c)))
∧ (distinctValues → allDifferent(M,λc:cell:V(c)))
∧ (∀c∈C: (c∈M → (V(c)∈values ∧ V(c)!=D(c))) ∧ (c∉M → V(c)=D(c)))
∧ (∀meaning∈ValuedRuleMeanings: meaning)
```

With the defaults there are nine liar cells. Their nine distinct digits are a permutation of 1–9, and so are their nine distinct real values. No liar keeps its own digit as its value. Values need not form Sudoku houses: only the face digits do.

## Example

````markdown
---
format: open-rules
title: Liar Cells example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
liar-cells
whispers r1c1-r1c2 gap 5
kropki r2c4-r2c5 black
pair r3c7-r3c8 sum 10
```
````

A full written-digit assignment is:

```
123456789
456789123
789123456
234567891
567891234
891234567
345678912
678912345
912345678
```

Use these liar cells and values; every other value equals its digit:

| Cell | Written digit | Real value |
| --- | --- | --- |
| r1c1 | 1 | 7 |
| r2c4 | 7 | 4 |
| r3c7 | 4 | 5 |
| r4c2 | 3 | 1 |
| r5c5 | 9 | 2 |
| r6c8 | 6 | 9 |
| r7c3 | 5 | 3 |
| r8c6 | 2 | 8 |
| r9c9 | 8 | 6 |

Satisfies the case: each row, column and box contains one liar, and both liar columns in the table are permutations of 1–9 with no unchanged pair. The whisper values are 7 and 2 (gap 5); the black-dot values are 4 and 8 (ratio 2); the X values are 5 and 5 (sum 10). This pair may take equal values; normal Sudoku still requires different written digits in its house. These face-digit pairs are respectively 1 and 2, 7 and 8, and 4 and 5: all three clues rely on the value channel.

Breaks the rule: change only r1c1's real value to 1. That row no longer contains a cell whose value differs from its digit. Change it to 4 instead and the liar values repeat 4.

For a region-sum variant, add `region-sum r2c1-r2c2-r2c3-r2c4-r2c5-r3c5-r3c4 segments [["r2c1","r2c2","r2c3"],["r2c4","r2c5","r3c5","r3c4"]]`. The same assignment satisfies it: the segments total 4+5+6=15 and 4+8+2+1=15. Using written digits instead would give 15 and 18.
