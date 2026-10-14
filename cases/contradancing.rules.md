---
format: open-rules
title: Contradancing
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/u2qqd199dl
case: https://sudoku-sleuth.com/cases/contradancing
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c1=8 r1c9=7 r9c1=1 r9c9=2
exported: 2650ac491d07e4d62f6edca1938e75f9
---

```rules
sudoku 9x9
little-killer-1: little-killer r1c5-r2c6-r3c7-r4c8-r5c9 sum 9
little-killer-2: little-killer r9c5-r8c4-r7c3-r6c2-r5c1 sum 9
little-killer-3: little-killer r5c1-r4c2-r3c3-r2c4-r1c5 sum 10
little-killer-4: little-killer r5c9-r6c8-r7c7-r8c6-r9c5 sum 10
little-killer-5: little-killer r1c7-r2c8-r3c9 sum 8
little-killer-6: little-killer r9c3-r8c2-r7c1 sum 12
little-killer-7: little-killer r3c1-r2c2-r1c3 sum 12
little-killer-8: little-killer r7c9-r8c8-r9c7 sum 13
little-killer-9: little-killer r4c1-r3c2-r2c3-r1c4 sum 23
little-killer-10: little-killer r6c9-r7c8-r8c7-r9c6 sum 21
little-killer-11: little-killer r9c4-r8c3-r7c2-r6c1 sum 33
little-killer-12: little-killer r1c6-r2c7-r3c8-r4c9 sum 27
little-killer-13: little-killer r1c9-r2c8-r3c7-r4c6-r5c5-r6c4-r7c3-r8c2-r9c1 sum 26
little-killer-14: little-killer r1c1-r2c2-r3c3-r4c4-r5c5-r6c6-r7c7-r8c8-r9c9 sum 37
```

Standard sudoku rules apply: every row, column, and box must contain a complete set of the digits 1-9.

Little Killers: Numbers outside the grid give the sum of the digits along the indicated diagonal. Digits may repeat along diagonal sums if permitted by other rules.
