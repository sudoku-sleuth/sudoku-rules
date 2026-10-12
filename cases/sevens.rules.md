---
format: open-rules
title: Sevens
setter: Blobz
source: https://sudokupad.app/blobz/sevens
case: https://sudoku-sleuth.com/cases/sevens
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c6=7 r2c1=7 r5c5=7 r8c9=7 r9c4=7
---

```rules
sudoku 9x9
cage-1: cage r4c9-r5c9-r6c9 total 7 connected true
cage-2: cage r4c1-r5c1-r6c1 total 23 connected true
cage-3: cage r1c1-r1c2 total 11 connected true
cage-4: cage r1c8-r1c9 total 12 connected true
cage-5: cage r9c1-r9c2 total 13 connected true
cage-6: cage r9c8-r9c9 total 14 connected true
cage-7: cage r6c3-r7c3-r7c4 total 22 connected true
cage-8: cage r3c6-r3c7-r4c7 total 22 connected true
cage-9: cage r6c7-r7c6-r7c7 total 17 connected true
cage-10: cage r3c3-r3c4-r4c3 total 17 connected true
cage-11: cage r8c7-r8c8 total 13 connected true
cage-12: cage r7c2-r8c2 total 12 connected true
cage-13: cage r2c2-r2c3 total 17 connected true
cage-14: cage r2c8-r3c8 total 9 connected true
cage-15: cage r5c2-r5c3 total 3 connected true
cage-16: cage r2c5-r3c5 total 6 connected true
cage-17: cage r5c7-r5c8 total 8 connected true
cage-18: cage r7c5-r8c5 total 7 connected true
```

Normal sudoku rules apply. 

Digits in cages do not repeat, and sum to the given value.
