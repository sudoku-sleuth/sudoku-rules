---
format: open-rules
title: Killers Everywhere
setter: EPH
source: https://sudokupad.app/an8fn1ke9g
case: https://sudoku-sleuth.com/cases/killers-everywhere
library: https://rules.sudoku-sleuth.com/
status: read
exported: 0f5bc4768764fcbee085ab3a7280cfc0
---

```rules
sudoku 9x9
cage-1: cage r1c3-r1c4-r2c2-r2c3-r3c1-r3c2-r4c1 total 28 connected true
cage-2: cage r6c1-r7c1-r7c2-r8c2-r8c3-r9c3-r9c4 total 28 connected true
cage-3: cage r6c9-r7c8-r7c9-r8c7-r8c8-r9c6-r9c7 total 33 connected true
cage-4: cage r1c6-r1c7-r2c7-r2c8-r3c8-r3c9-r4c9 total 28 connected true
cage-5: cage r2c4-r3c3-r3c4-r4c2-r4c3 total 35 connected true
cage-6: cage r6c7-r6c8-r7c6-r7c7-r8c6 total 30 connected true
cage-7: cage r2c6-r3c6-r3c7-r4c7-r4c8 total 24 connected true
cage-8: cage r6c2-r6c3-r7c3-r7c4-r8c4 total 23 connected true
little-killer-1: little-killer r1c2-r2c1 sum 8
little-killer-2: little-killer r1c4-r2c3-r3c2-r4c1 sum 20
little-killer-3: little-killer r6c1-r7c2-r8c3-r9c4 sum 21
little-killer-4: little-killer r8c1-r9c2 sum 8
little-killer-5: little-killer r9c6-r8c7-r7c8-r6c9 sum 21
little-killer-6: little-killer r9c8-r8c9 sum 7
little-killer-7: little-killer r2c9-r1c8 sum 8
little-killer-8: little-killer r4c9-r3c8-r2c7-r1c6 sum 19
```

Standard sudoku rules apply: each row, column, and 3x3 box must contain all the digits from 1 to 9.

Killer cages: digits in a cage must not repeat and must sum to the value in the top left corner of the cage.

Little killer: a number outside the grid gives the sum of the digits along the diagonal indicated by the arrow beside the number.
