---
format: open-rules
title: Tea with the Queen
setter: FullDeck and Missing a Few Cards
source: ""
case: https://sudoku-sleuth.com/cases/tea-with-the-queen
library: https://rules.sudoku-sleuth.com/
status: read
givens: r5c3=2
---

```rules
sudoku 9x9
sandwich-1: sandwich r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2-r9c2 sum 18
sandwich-2: sandwich r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4-r8c4-r9c4 sum 19
sandwich-3: sandwich r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6-r8c6-r9c6 sum 16
sandwich-4: sandwich r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9 sum 5
sandwich-5: sandwich r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8-r7c9 sum 22
sandwich-6: sandwich r9c1-r8c1-r7c1-r6c1-r5c1-r4c1-r3c1-r2c1-r1c1 sum 18
sandwich-7: sandwich r9c3-r8c3-r7c3-r6c3-r5c3-r4c3-r3c3-r2c3-r1c3 sum 22
sandwich-8: sandwich r9c5-r8c5-r7c5-r6c5-r5c5-r4c5-r3c5-r2c5-r1c5 sum 12
sandwich-9: sandwich r3c9-r3c8-r3c7-r3c6-r3c5-r3c4-r3c3-r3c2-r3c1 sum 14
sandwich-10: sandwich r6c9-r6c8-r6c7-r6c6-r6c5-r6c4-r6c3-r6c2-r6c1 sum 13
sandwich-11: sandwich r8c9-r8c8-r8c7-r8c6-r8c5-r8c4-r8c3-r8c2-r8c1 sum 9
extremum r1c8-r2c4-r3c3-r4c7-r5c1-r6c6-r7c9-r8c5-r9c2 type "max" exhaustive true
```

Normal sudoku rules apply: every row, column, and box must contain a complete set of the digits 1-9.

Sandwich sums: numbers outside the grid indicate the sum of all cells between 1 and 9 in that row or column, excluding 1 and 9 from the sum.

Fortress cells: Shaded cells are fortress cells and must be larger than all orthogonally adjacent cells. All possible fortress cells are shown. That is, there is a negative constraint on fortresses and any unshaded cell must be orthogonally adjacent to at least one larger digit.
