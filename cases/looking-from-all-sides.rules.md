---
format: open-rules
title: Looking From All Sides
setter: EPH
source: https://sudokupad.app/i0w55kfc1p
case: https://sudoku-sleuth.com/cases/looking-from-all-sides
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c5-r2c5-r3c5 total 11 connected true
cage-2: cage r7c5-r8c5-r9c5 total 16 connected true
cage-3: cage r5c7-r5c8-r5c9 total 9 connected true
cage-4: cage r5c1-r5c2-r5c3 total 14 connected true
little-killer-1: little-killer r1c5-r2c6-r3c7-r4c8-r5c9 sum 17
little-killer-2: little-killer r1c6-r2c5-r3c4-r4c3-r5c2-r6c1 sum 17
little-killer-3: little-killer r4c1-r5c2-r6c3-r7c4-r8c5-r9c6 sum 20
little-killer-4: little-killer r5c1-r4c2-r3c3-r2c4-r1c5 sum 21
little-killer-5: little-killer r9c5-r8c4-r7c3-r6c2-r5c1 sum 21
little-killer-6: little-killer r6c9-r5c8-r4c7-r3c6-r2c5-r1c4 sum 36
little-killer-7: little-killer r9c4-r8c5-r7c6-r6c7-r5c8-r4c9 sum 25
little-killer-8: little-killer r5c9-r6c8-r7c7-r8c6-r9c5 sum 19
little-killer-9: little-killer r1c1-r2c2-r3c3-r4c4-r5c5-r6c6-r7c7-r8c8-r9c9 sum 29
```

Standard sudoku rules apply: each row, column, and 3x3 box must contain all the digits from 1 to 9.

Little killers: a clue outside the grid gives the sum of all digits along the diagonal indicated by the arrow.

Cages: digits within a cage must not repeat, and must sum to the value in the top left corner of the cage.
