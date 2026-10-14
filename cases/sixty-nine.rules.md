---
format: open-rules
title: Sixty-Nine
setter: Blobz
source: https://sudokupad.app/blobz/sixty-nine
case: https://sudoku-sleuth.com/cases/sixty-nine
library: https://rules.sudoku-sleuth.com/
status: read
givens: r3c9=2 r7c1=2
exported: fbc27ad884f2dff71086aab96581e388
---

```rules
sudoku 9x9
cage-1: cage r4c9-r5c9-r6c9 total 22 connected true
cage-2: cage r4c1-r5c1-r6c1 total 17 connected true
cage-3: cage r1c4-r1c5-r1c6 total 18 connected true
cage-4: cage r9c4-r9c5-r9c6 total 21 connected true
cage-5: cage r8c9-r9c8-r9c9 total 14 connected true
cage-6: cage r1c1-r1c2-r2c1 total 10 connected true
cage-7: cage r8c1-r9c1-r9c2 total 18 connected true
cage-8: cage r1c8-r1c9-r2c9 total 9 connected true
cage-9: cage r7c7-r7c8-r8c7-r8c8 total 27 connected true
cage-10: cage r2c2-r2c3-r3c2-r3c3 total 24 connected true
cage-11: cage r2c7-r2c8-r3c7-r3c8 total 25 connected true
cage-12: cage r7c2-r7c3-r8c2-r8c3 total 21 connected true
cage-13: cage r7c5-r8c5 total 10 connected true
cage-14: cage r2c5-r3c5 total 4 connected true
anti-knight
renban-1: renban r3c4-r4c3-r5c3-r6c3-r7c4-r6c5-r5c4
renban-2: renban r7c6-r6c7-r5c7-r4c7-r3c6-r4c5-r5c6
```

Normal sudoku rules apply.

Pink lines contain a non-repeating consecutive sequence, in any order.

Digits in cages sum to the given total.

Cells separated by a chess knight's move cannot contain the same digit.
