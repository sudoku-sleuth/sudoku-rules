---
format: open-rules
title: Caged Knights 3
setter: Blobz
source: https://sudokupad.app/blobz/caged-knights-3
case: https://sudoku-sleuth.com/cases/caged-knights-3
library: https://rules.sudoku-sleuth.com/
status: read
exported: b424d290ee5aaf1af7cdf8121d69dab2
---

```rules
sudoku 9x9
cage-1: cage r2c1-r3c1 total 15 connected true
cage-2: cage r4c2-r5c2 total 14 connected true
cage-3: cage r1c1-r1c2-r1c3-r1c4-r2c2-r2c3-r2c4-r3c2-r3c3 connected true
cage-4: cage r1c5-r1c6 total 6 connected true
cage-5: cage r3c4-r3c5-r3c6 total 20 connected true
cage-6: cage r1c8-r1c9-r2c9 total 9 connected true
cage-7: cage r4c9-r5c9-r6c9 total 18 connected true
cage-8: cage r9c8-r9c9 total 15 connected true
cage-9: cage r5c6-r6c6 total 11 connected true
cage-10: cage r6c4-r7c4 total 9 connected true
cage-11: cage r4c3-r4c4-r4c5-r4c6-r5c3-r5c4-r5c5-r6c5-r7c5 connected true
cage-12: cage r7c6-r8c2-r8c5-r8c6-r9c2-r9c3-r9c4-r9c5-r9c6 connected true
cage-13: cage r4c1-r5c1-r6c1-r6c3-r7c1-r7c2-r7c3-r8c1-r8c3 connected true
cage-14: cage r6c7-r6c8-r7c7-r7c8-r7c9-r8c7-r8c8-r8c9-r9c7 connected true
cage-15: cage r1c7-r2c5-r2c6-r2c7-r2c8-r3c8-r3c9-r4c8-r5c8 connected true
cage-16: cage r3c7-r4c7 total 6 connected true
anti-knight
```

Normal sudoku rules apply. 

Cells separated by a chess knight's move cannot contain the same digit. 

Digits in cages do not repeat, and must sum to the small clue, if given.
