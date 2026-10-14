---
format: open-rules
title: Caged Knights 4
setter: Blobz
source: https://sudokupad.app/blobz/caged-knights-4
case: https://sudoku-sleuth.com/cases/caged-knights-4
library: https://rules.sudoku-sleuth.com/
status: read
exported: df991edfcf5ca4cab46312af118e078f
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2 total 6 connected true
cage-2: cage r1c3-r2c3 total 6 connected true
cage-3: cage r3c1-r3c2-r3c3-r4c1-r4c2-r5c1-r5c2-r5c3-r6c1 connected true
cage-4: cage r6c2-r6c3 total 13 connected true
cage-5: cage r6c4-r6c5 total 4 connected true
cage-6: cage r4c7-r4c8 total 14 connected true
cage-7: cage r3c4-r3c6-r4c4-r4c6-r5c4-r5c5-r5c6-r6c6-r7c6 connected true
cage-8: cage r1c5-r1c6-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9-r3c5 connected true
cage-9: cage r1c7-r1c8-r1c9 total 21 connected true
cage-10: cage r3c8-r3c9-r4c9-r5c7-r5c8-r5c9-r6c7-r6c9-r7c9 connected true
cage-11: cage r6c8-r7c7-r7c8-r8c7-r9c5-r9c6-r9c7-r9c8-r9c9 connected true
cage-12: cage r8c8-r8c9 total 9 connected true
cage-13: cage r8c5-r8c6 total 9 connected true
cage-14: cage r7c1-r7c2-r7c3-r7c4-r7c5-r8c1-r8c3-r8c4-r9c3 connected true
cage-15: cage r8c2-r9c1-r9c2 total 15 connected true
anti-knight
```

Normal sudoku rules apply.

Cells separated by a chess knight's move cannot contain the same digit.

Digits in a cage do not repeat, and sum to the small clue, if given.
