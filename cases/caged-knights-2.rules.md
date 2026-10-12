---
format: open-rules
title: Caged Knights 2
setter: Blobz
source: https://sudokupad.app/blobz/caged-knights-2
case: https://sudoku-sleuth.com/cases/caged-knights-2
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c2=9 r1c5=5 r3c8=6 r4c8=2 r5c3=3 r5c5=6 r7c2=7 r7c9=5 r8c1=1 r8c5=9 r8c7=8
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r1c3-r1c4-r1c5-r2c1-r2c2-r2c4-r3c2 connected true
cage-2: cage r3c1-r3c3-r4c1-r4c3-r5c1-r5c2-r5c3-r6c1-r6c2 connected true
cage-3: cage r7c1-r8c1-r8c2-r8c4-r9c1-r9c2-r9c3-r9c4-r9c5 connected true
cage-4: cage r6c7-r6c8-r7c7-r8c6-r8c7-r8c8-r8c9-r9c7-r9c8 connected true
cage-5: cage r3c4-r3c5-r4c5-r4c6-r5c5-r6c4-r6c5-r7c5-r7c6 connected true
cage-6: cage r1c7-r2c5-r2c6-r2c7-r2c8-r3c8-r3c9-r4c8-r5c8 connected true
anti-knight
```

Normal Sudoku rules apply.

Cells separated by a chess knight's move cannot contain the same digit.

Digits may not repeat within a cage.
