---
format: open-rules
title: Caged Knights
setter: Blobz
source: https://sudokupad.app/blobz/caged-knights
case: https://sudoku-sleuth.com/cases/caged-knights
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c2=2 r2c9=9 r3c3=8 r3c7=4 r5c2=7 r5c5=3 r8c1=1 r8c9=8 r9c1=6 r9c3=3 r9c8=7
---

```rules
sudoku 9x9
cage-1: cage r1c2-r1c3-r1c4-r2c2-r3c1-r3c2-r3c3-r3c4-r4c3 connected true
cage-2: cage r4c1-r4c2-r5c1-r5c2-r5c4-r6c2-r6c3-r6c4-r7c2 connected true
cage-3: cage r6c1-r7c1-r7c3-r8c1-r8c2-r8c3-r9c1-r9c2-r9c3 connected true
cage-4: cage r6c5-r6c6-r7c4-r7c5-r7c6-r7c7-r8c5-r9c5-r9c6 connected true
cage-5: cage r1c5-r1c6-r2c3-r2c4-r2c5-r3c5-r3c6-r4c4-r4c5 connected true
cage-6: cage r1c7-r1c8-r1c9-r2c6-r2c7-r2c8-r2c9-r3c7-r4c7 connected true
cage-7: cage r3c8-r4c6-r4c8-r5c6-r5c7-r5c8-r5c9-r6c7-r6c9 connected true
cage-8: cage r6c8-r7c8-r7c9-r8c6-r8c7-r8c8-r8c9-r9c7-r9c8 connected true
anti-knight
```

Normal Sudoku rules apply.

Cells separated by a chess knight's move cannot contain the same digit.

Digits may not repeat within a cage.
