---
format: open-rules
title: Quietly Walking the Paths
setter: EPH
source: https://tinyurl.com/3azyvhaz
case: https://sudoku-sleuth.com/cases/quietly-walking-the-paths
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c8-r1c9-r2c8-r2c9 total 21 connected true
cage-2: cage r8c1-r8c2-r9c1-r9c2 total 22 connected true
cage-3: cage r8c8-r8c9-r9c8-r9c9 total 14 connected true
cage-4: cage r1c1-r1c2-r2c1-r2c2 total 16 connected true
whispers-1: whispers r4c2-r3c2-r3c1-r4c1-r5c1-r5c2-r6c2-r7c2-r7c1-r6c1 gap 5
whispers-2: whispers r2c6-r2c7-r1c7-r1c6-r1c5-r2c5-r2c4-r2c3-r1c3-r1c4 gap 5
whispers-3: whispers r6c8-r7c8-r7c9-r6c9-r5c9-r5c8-r4c8-r3c8-r3c9-r4c9 gap 5
whispers-4: whispers r8c4-r8c3-r9c3-r9c4-r9c5-r8c5-r8c6-r8c7-r9c7-r9c6 gap 5
little-killer-1: little-killer r1c1-r2c2-r3c3-r4c4-r5c5-r6c6-r7c7-r8c8-r9c9 sum 48
little-killer-2: little-killer r1c6-r2c5-r3c4-r4c3-r5c2-r6c1 sum 16
little-killer-3: little-killer r9c6-r8c7-r7c8-r6c9 sum 12
```

Standard sudoku rules apply: each row, column, and 3x3 box must contain all the digits from 1 to 9.

Digits within each cage must sum to the number in the top left corner of the cage.

Clues outside the grid show the sum of the digits along the indicated diagonal.  Digits may repeat on a diagonal if allowed by the other rules.

The green lines are German whispers lines: digits in consecutive cells along a line must differ by at least 5.
