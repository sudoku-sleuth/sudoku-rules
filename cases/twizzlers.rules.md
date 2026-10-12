---
format: open-rules
title: Twizzlers
setter: Blobz
source: https://sudokupad.app/blobz/twizzlers
case: https://sudoku-sleuth.com/cases/twizzlers
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c1-r2c1-r3c1 total 6 connected true
cage-2: cage r1c3-r2c3-r3c3 total 19 connected true
cage-3: cage r3c4-r3c5-r3c6 total 24 connected true
cage-4: cage r1c7-r2c7-r3c7 total 15 connected true
cage-5: cage r1c9-r2c9-r3c9 total 18 connected true
cage-6: cage r5c6-r5c7-r5c8 total 23 connected true
cage-7: cage r5c2-r5c3-r5c4 total 10 connected true
cage-8: cage r4c3-r4c4 total 8 connected true
cage-9: cage r4c5-r5c5-r6c5 total 16 connected true
cage-10: cage r6c6-r6c7 total 8 connected true
cage-11: cage r7c7-r7c8-r7c9 total 23 connected true
cage-12: cage r9c7-r9c8-r9c9 total 16 connected true
cage-13: cage r9c1-r9c2-r9c3 total 18 connected true
cage-14: cage r7c1-r7c2-r7c3 total 9 connected true
renban-1: renban r2c2-r2c3-r1c3
renban-2: renban r3c1-r3c2-r3c3-r2c4-r1c5
renban-3: renban r3c5-r2c6-r1c7-r1c8-r1c9
renban-4: renban r3c7-r2c7-r2c8
renban-5: renban r4c7-r4c8-r5c9-r6c9
renban-6: renban r6c8-r6c7-r5c6-r4c5-r4c4
renban-7: renban r6c6-r6c5-r5c4-r4c3-r4c2
renban-8: renban r4c1-r5c1-r6c2-r6c3
renban-9: renban r7c1-r8c2-r8c3-r9c4-r9c5
renban-10: renban r7c5-r7c6-r8c7-r8c8-r9c9
```

Normal sudoku rules apply.

Digits along pink lines form a non-repeating consecutive sequence in any order.

Digits in cages must sum to the given total.
