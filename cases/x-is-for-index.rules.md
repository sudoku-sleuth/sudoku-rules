---
format: open-rules
title: X is for indeX
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/yeg059p01j
case: https://sudoku-sleuth.com/cases/x-is-for-index
library: https://rules.sudoku-sleuth.com/
status: read
exported: 00954c8bc8cd131fe045400d2a843f9a
---

```rules
sudoku 9x9
x-sum-1: x-sum r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5 sum 10
x-sum-2: x-sum r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9 sum 18
x-sum-3: x-sum r9c1-r8c1-r7c1-r6c1-r5c1-r4c1-r3c1-r2c1-r1c1 sum 17
x-sum-4: x-sum r9c9-r8c9-r7c9-r6c9-r5c9-r4c9-r3c9-r2c9-r1c9 sum 16
x-sum-5: x-sum r5c9-r5c8-r5c7-r5c6-r5c5-r5c4-r5c3-r5c2-r5c1 sum 20
x-sum-6: x-sum r9c5-r8c5-r7c5-r6c5-r5c5-r4c5-r3c5-r2c5-r1c5 sum 25
x-sum-7: x-sum r7c9-r7c8-r7c7-r7c6-r7c5-r7c4-r7c3-r7c2-r7c1 sum 33
x-sum-8: x-sum r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8-r6c9 sum 24
index r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r9c1-r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5-r1c9-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9 axis "column"
```

Normal sudoku rules apply. 

Digits in red-shaded cells in column 1 indicate the position of 1 in the corresponding row. The same is true in columns 5 and 9 for 5's and 9's respectively.

Clues outside the grid give the sum of the first X digits in the row or column from the direction of the clue, where X is the first digit seen in that row or column.
