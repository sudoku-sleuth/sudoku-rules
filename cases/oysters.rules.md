---
format: open-rules
title: Oysters
setter: Blobz
source: https://sudokupad.app/blobz/oysters
case: https://sudoku-sleuth.com/cases/oysters
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c8=9
exported: bea82e28404efe92dca5b16aa10dbd1f
---

```rules
sudoku 9x9
cage-1: cage r2c3-r2c4 total 11 connected true
cage-2: cage r4c6-r4c7 total 9 connected true
cage-3: cage r8c3-r8c4 total 17 connected true
cage-4: cage r7c7-r7c8 total 15 connected true
cage-5: cage r5c2-r5c3 total 4 connected true
whispers-1: whispers r8c2-r7c3-r7c4-r8c5 gap 5
whispers-2: whispers r7c6-r6c7-r6c8-r7c9 gap 5
whispers-3: whispers r5c1-r4c2-r4c3-r5c4 gap 5
whispers-4: whispers r4c5-r3c6-r3c7-r4c8 gap 5
whispers-5: whispers r2c2-r1c3-r1c4-r2c5 gap 5
renban-1: renban r8c5-r9c4-r9c3-r8c2
renban-2: renban r7c9-r8c8-r8c7-r7c6
renban-3: renban r5c1-r6c2-r6c3-r5c4
renban-4: renban r4c5-r5c6-r5c7-r4c8
renban-5: renban r2c5-r3c4-r3c3-r2c2
```

Normal sudoku rules apply.

Along green lines, adjacent digits differ by at least 5.

Along pink lines, digits form a consecutive sequence in any order.

Digits in cages must sum to the given total.
