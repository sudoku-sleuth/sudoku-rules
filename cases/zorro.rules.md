---
format: open-rules
title: Zorro
setter: Blobz
source: https://sudokupad.app/blobz/zorro
case: https://sudoku-sleuth.com/cases/zorro
library: https://rules.sudoku-sleuth.com/
status: read
exported: e7c6ca3e2b09f03e1fa540cce24ef736
---

```rules
sudoku 9x9
cage-1: cage r7c1-r7c2-r8c2-r9c2-r9c3 total 15 connected true
cage-2: cage r6c2-r6c3-r7c3-r8c3-r8c4 total 25 connected true
cage-3: cage r5c3-r5c4-r6c4-r7c4-r7c5 total 33 connected true
cage-4: cage r4c4-r4c5-r5c5-r6c5-r6c6 total 15 connected true
cage-5: cage r3c5-r3c6-r4c6-r5c6-r5c7 total 31 connected true
cage-6: cage r2c6-r2c7-r3c7-r4c7-r4c8 total 27 connected true
cage-7: cage r1c7-r1c8-r2c8 total 12 connected true
cage-8: cage r5c8-r6c7-r6c8 total 24 connected true
cage-9: cage r7c6-r8c5-r8c6-r9c4-r9c5 total 28 connected true
cage-10: cage r4c2-r4c3-r5c1-r5c2-r6c1 total 33 connected true
cage-11: cage r1c5-r1c6-r2c4-r2c5-r3c4 total 19 connected true
cage-12: cage r2c3-r3c1-r3c2-r3c3-r4c1 total 15 connected true
cage-13: cage r6c9-r7c7-r7c8-r7c9-r8c7 total 15 connected true
cage-14: cage r8c8-r9c6-r9c7-r9c8 total 22 connected true
cage-15: cage r1c2-r1c3-r1c4-r2c2 total 20 connected true
cage-16: cage r8c9-r9c9 total 15 connected true
cage-17: cage r1c1-r2c1 total 16 connected true
cage-18: cage r8c1-r9c1 total 14 connected true
cage-19: cage r1c9-r2c9 total 15 connected true
cage-20: cage r3c8-r3c9-r4c9-r5c9 total 11 connected true
```

Normal sudoku rules apply.

Digits in cages do not repeat, and sum to the given total.
