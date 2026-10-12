---
format: open-rules
title: Gordian Knot
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/fgg54evwv5
case: https://sudoku-sleuth.com/cases/gordian-knot
library: https://rules.sudoku-sleuth.com/
status: read
givens: r3c3=9 r9c6=7
---

```rules
sudoku 9x9
little-killer-1: little-killer r5c1-r4c2-r3c3-r2c4-r1c5 sum 15
little-killer-2: little-killer r1c5-r2c6-r3c7-r4c8-r5c9 sum 36
little-killer-3: little-killer r5c9-r6c8-r7c7-r8c6-r9c5 sum 13
little-killer-4: little-killer r9c5-r8c4-r7c3-r6c2-r5c1 sum 29
little-killer-5: little-killer r1c8-r2c9 sum 13
little-killer-6: little-killer r8c9-r9c8 sum 5
little-killer-7: little-killer r9c2-r8c1 sum 12
little-killer-8: little-killer r2c1-r1c2 sum 8
little-killer-9: little-killer r1c2-r2c3-r3c4-r4c5-r5c6-r6c7-r7c8-r8c9 sum 37
little-killer-10: little-killer r9c8-r8c7-r7c6-r6c5-r5c4-r4c3-r3c2-r2c1 sum 38
little-killer-11: little-killer r2c9-r3c8-r4c7-r5c6-r6c5-r7c4-r8c3-r9c2 sum 35
little-killer-12: little-killer r8c1-r7c2-r6c3-r5c4-r4c5-r3c6-r2c7-r1c8 sum 38
```

Normal sudoku rules apply: every row, column, and box must contain a complete set of the digits 1-9.

Little killer sums: Numbers outside the grid give the sum of the digits along the indicated diagonal. Digits may repeat along diagonals if allowed by other rules.
