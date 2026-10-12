---
format: open-rules
title: Untitled
setter: Sir Moose
source: https://sudokupad.app/05ma80w56p
case: https://sudoku-sleuth.com/cases/untitled
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c3-r2c2-r2c3-r3c3 total 28 connected true
cage-2: cage r7c1-r8c1-r8c2-r9c1 total 30 connected true
cage-3: cage r6c1-r6c2-r6c3-r7c2 total 13 connected true
cage-4: cage r6c7-r6c8-r6c9-r7c8 total 23 connected true
cage-5: cage r3c5-r4c4-r4c5-r4c6 total 17 connected true
cage-6: cage r1c7-r2c7-r2c8-r3c7 total 27 connected true
cage-7: cage r8c8-r9c7-r9c8-r9c9 total 14 connected true
cage-8: cage r7c4-r8c4-r8c5-r9c4 total 15 connected true
cage-9: cage r1c6-r2c5-r2c6-r3c6 total 19 connected true
```

Place the digits 1-9 in each row, column, and 3x3 box.

Even digits cannot be orthogonally adjacent to other even digits.

Digits cannot repeat in cages.  Digits in the cage sum to the number in the top left of the cage.
