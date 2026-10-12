---
format: open-rules
title: Quarantine
setter: Blobz
source: https://sudokupad.app/blobz/quarantine
case: https://sudoku-sleuth.com/cases/quarantine
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r2c1-r3c1-r4c1 connected true
cage-2: cage r2c2-r3c2-r4c2 connected true
cage-3: cage r6c1-r6c2-r6c3-r7c1-r7c2-r7c3 connected true
cage-4: cage r8c2-r8c3-r8c4-r9c3 connected true
cage-5: cage r7c4-r7c5-r8c5-r9c4-r9c5 connected true
cage-6: cage r1c6-r1c7-r2c6-r2c7 connected true
cage-7: cage r3c6-r3c7-r4c6-r4c7 total 17 connected true
cage-8: cage r4c4-r5c4-r5c5-r5c6-r6c6-r7c6-r7c7-r8c6-r9c6 connected true
cage-9: cage r3c8-r3c9-r4c9 connected true
cage-10: cage r4c8-r5c8-r6c8-r6c9-r7c8-r7c9-r8c7-r8c8 connected true
cage-11: cage r8c9-r9c8-r9c9 total 9 connected true
cage-12: cage r1c4-r1c5-r2c4-r2c5 connected true
cage-13: cage r8c1-r9c1-r9c2 connected true
cage-14: cage r2c3-r3c3-r4c3 connected true
cage-15: cage r3c4-r3c5-r4c5 connected true
renban-1: renban r2c1-r3c1-r4c1
renban-2: renban r2c2-r3c2-r4c2
renban-3: renban r2c3-r3c3-r4c3
renban-4: renban r7c1-r6c1-r6c2-r6c3-r7c3
renban-5: renban r8c2-r9c3-r8c4
renban-6: renban r7c4-r7c5-r8c5-r9c5-r9c4
renban-7: renban r7c7-r7c6-r8c6-r9c6
renban-8: renban r4c6-r4c7-r3c7
renban-9: renban r4c4-r5c4-r5c5-r5c6-r6c6
renban-10: renban r3c4-r4c5
renban-11: renban r4c8-r5c8-r6c9-r7c9
renban-12: renban r3c8-r3c9-r4c9
renban-13: renban r8c7-r8c8-r7c8-r6c8
renban-14: renban r9c8-r9c9-r8c9
renban-15: renban r8c1-r9c1-r9c2
renban-16: renban r1c4-r1c5-r2c5-r2c4
renban-17: renban r2c6-r2c7-r1c7-r1c6
```

Normal sudoku rules apply.

Digits in cages do not repeat, and sum to the small clue, if given.

Pink lines contain a consecutive sequence of digits, in any order.
