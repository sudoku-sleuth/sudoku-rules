---
format: open-rules
title: See Three
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/q3mm2jl691
case: https://sudoku-sleuth.com/cases/see-three
library: https://rules.sudoku-sleuth.com/
status: read
givens: r3c4=4 r4c3=3 r6c7=7 r7c6=6
---

```rules
sudoku 9x9
x-sum-1: x-sum r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9 sum 6 count 3
x-sum-2: x-sum r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r9c1 sum 10 count 3
x-sum-3: x-sum r9c9-r9c8-r9c7-r9c6-r9c5-r9c4-r9c3-r9c2-r9c1 sum 24 count 3
x-sum-4: x-sum r9c9-r8c9-r7c9-r6c9-r5c9-r4c9-r3c9-r2c9-r1c9 sum 20 count 3
x-sum-5: x-sum r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4-r8c4-r9c4 sum 10 count 3
x-sum-6: x-sum r9c6-r8c6-r7c6-r6c6-r5c6-r4c6-r3c6-r2c6-r1c6 sum 20 count 3
x-sum-7: x-sum r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8-r4c9 sum 20 count 3
x-sum-8: x-sum r6c9-r6c8-r6c7-r6c6-r6c5-r6c4-r6c3-r6c2-r6c1 sum 10 count 3
x-sum-9: x-sum r9c2-r8c2-r7c2-r6c2-r5c2-r4c2-r3c2-r2c2-r1c2 sum 7 count 3
x-sum-10: x-sum r1c8-r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8-r9c8 sum 23 count 3
x-sum-11: x-sum r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r8c9 sum 13 count 3
x-sum-12: x-sum r2c9-r2c8-r2c7-r2c6-r2c5-r2c4-r2c3-r2c2-r2c1 sum 17 count 3
```

Normal sudoku rules apply: every row, column, and box must contain a complete set of the digits 1-9.

Numbers outside the grid give the sum of the first three digits seen along that row or column from that direction.
