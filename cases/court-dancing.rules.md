---
format: open-rules
title: Court Dancing
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/29vf43riqb
case: https://sudoku-sleuth.com/cases/court-dancing
library: https://rules.sudoku-sleuth.com/
status: read
givens: r3c3=2 r5c2=4 r7c7=2
exported: acb8881dc7958575e7dacb9e437400d6
---

```rules
sudoku 9x9
anti-knight
little-killer-1: little-killer r5c1-r4c2-r3c3-r2c4-r1c5 sum 8
little-killer-2: little-killer r5c9-r6c8-r7c7-r8c6-r9c5 sum 8
little-killer-3: little-killer r1c5-r2c6-r3c7-r4c8-r5c9 sum 10
little-killer-4: little-killer r9c5-r8c4-r7c3-r6c2-r5c1 sum 10
little-killer-5: little-killer r9c3-r8c2-r7c1 sum 12
little-killer-6: little-killer r3c1-r2c2-r1c3 sum 9
little-killer-7: little-killer r1c7-r2c8-r3c9 sum 20
little-killer-8: little-killer r7c9-r8c8-r9c7 sum 17
little-killer-9: little-killer r1c2-r2c1 sum 12
little-killer-10: little-killer r9c8-r8c9 sum 14
little-killer-11: little-killer r8c1-r9c2 sum 9
little-killer-12: little-killer r2c9-r1c8 sum 9
```

Normal sudoku rules apply: every row, column, and box must contain a complete set of the digits 1-9

Diagonal sums (little killers): Numbers outside the grid give the sum of the digits along the indicated diagonal. Digits may repeat along a diagonal if permitted by other rules.

Antiknight: Cells a chess knight's move apart must contain different digits
