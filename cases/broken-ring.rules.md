---
format: open-rules
title: Broken Ring
setter: EPH
source: https://sudokupad.app/xoeo1c965c
case: https://sudoku-sleuth.com/cases/broken-ring
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r2c1-r2c2 total 15 connected true
cage-2: cage r1c5-r1c6-r2c5-r2c6 total 13 connected true
cage-3: cage r5c1-r5c2-r6c1-r6c2 total 12 connected true
cage-4: cage r5c5-r5c6-r6c5-r6c6 total 14 connected true
cage-5: cage r3c3-r3c4-r4c3-r4c4 total 30 connected true
cage-6: cage r7c1-r8c1-r9c1 total 22 connected true
cage-7: cage r1c7-r1c8-r1c9 total 16 connected true
cage-8: cage r6c7-r6c8-r6c9 total 15 connected true
cage-9: cage r7c6-r8c6-r9c6 total 20 connected true
cage-10: cage r7c9-r8c9-r9c7-r9c8-r9c9 total 19 connected true
little-killer-1: little-killer r1c6-r2c5-r3c4-r4c3-r5c2-r6c1 sum 26
little-killer-2: little-killer r1c7-r2c6-r3c5-r4c4-r5c3-r6c2-r7c1 sum 44
little-killer-3: little-killer r1c8-r2c7-r3c6-r4c5-r5c4-r6c3-r7c2-r8c1 sum 42
little-killer-4: little-killer r1c9-r2c8-r3c7-r4c6-r5c5-r6c4-r7c3-r8c2-r9c1 sum 45
```

Standard sudoku rules apply: each row, column, and 3x3 box must contain all the digits from 1 to 9.

Cages: digits must not repeat within a cage and must sum to the value in the top left corner of the cage.

Little killer: clues outside the grid show the sum of the digits on the diagonal indicated by the arrow with the clue.
