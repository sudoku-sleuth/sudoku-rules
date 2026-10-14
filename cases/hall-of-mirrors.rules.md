---
format: open-rules
title: Hall of Mirrors
setter: Blobz
source: https://sudokupad.app/blobz/hall-of-mirrors
case: https://sudoku-sleuth.com/cases/hall-of-mirrors
library: https://rules.sudoku-sleuth.com/
status: read
exported: 0b752361d5669ce3bb475cf0ef5cef58
---

```rules
sudoku 9x9
cage-1: cage r6c3-r7c3-r7c4 total 18 connected true
cage-2: cage r5c4-r6c4-r6c5 total 7 connected true
cage-3: cage r4c5-r5c5-r5c6 total 19 connected true
cage-4: cage r3c6-r4c6-r4c7 total 9 connected true
cage-5: cage r2c7-r3c7-r3c8 total 12 connected true
cage-6: cage r1c8-r2c8-r2c9 total 14 connected true
cage-7: cage r7c2-r8c2-r8c3 total 17 connected true
cage-8: cage r8c1-r9c1-r9c2 total 14 connected true
cage-9: cage r1c2-r2c2-r2c3 total 6 connected true
cage-10: cage r7c8-r8c8-r8c9 total 20 connected true
cage-11: cage r2c1-r3c1-r3c2 total 18 connected true
cage-12: cage r8c7-r9c7-r9c8 total 12 connected true
cage-13: cage r8c4-r9c4-r9c5 total 20 connected true
cage-14: cage r5c1-r6c1-r6c2 total 12 connected true
cage-15: cage r5c7-r5c8-r6c7 total 19 connected true
cage-16: cage r2c5-r3c4-r3c5 total 19 connected true
cage-17: cage r1c5-r1c6-r2c6 total 11 connected true
cage-18: cage r4c8-r4c9-r5c9 total 11 connected true
cage-19: cage r1c3-r1c4-r2c4 total 21 connected true
cage-20: cage r6c8-r6c9-r7c9 total 15 connected true
cage-21: cage r8c5-r8c6-r9c6 total 16 connected true
cage-22: cage r4c1-r4c2-r5c2 total 24 connected true
cage-23: cage r4c3-r4c4-r5c3 total 12 connected true
cage-24: cage r6c6-r7c5-r7c6 total 12 connected true
diagonal direction "anti"
```

Normal sudoku rules apply.

Digits do not repeat along the marked diagonal.

Cells reflected across the marked diagonal share the same parity.

Digits in cages do not repeat, and sum to the given total.
