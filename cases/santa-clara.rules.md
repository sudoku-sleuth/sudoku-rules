---
format: open-rules
title: Santa Clara
setter: Blobz
source: https://sudokupad.app/blobz/santa-clara
case: https://sudoku-sleuth.com/cases/santa-clara
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r4c4-r5c4-r6c4 total 8 connected true
cage-2: cage r4c6-r5c6-r6c6 total 20 connected true
cage-3: cage r4c9-r5c9-r6c9 total 13 connected true
cage-4: cage r4c1-r5c1-r6c1 total 14 connected true
cage-5: cage r8c5-r9c3-r9c4-r9c5-r9c6-r9c7 total 34 connected true
cage-6: cage r1c9-r2c9 total 15 connected true
cage-7: cage r8c1-r9c1 total 11 connected true
cage-8: cage r1c1-r2c1 total 9 connected true
cage-9: cage r8c9-r9c9 total 12 connected true
cage-10: cage r1c3-r1c4-r1c5-r1c6-r1c7-r2c5 total 29 connected true
index r1c1-r1c5-r1c9-r2c1-r2c5-r2c9-r3c1-r3c5-r3c9-r4c1-r4c5-r4c9-r5c1-r5c5-r5c9-r6c1-r6c5-r6c9-r7c1-r7c5-r7c9-r8c1-r8c5-r8c9-r9c1-r9c5-r9c9 axis "column"
diagonal-1: diagonal direction "anti"
diagonal-2: diagonal direction "main"
```

Normal sudoku rules apply.

Digits in column 1 indicate the column in which the digit 1 appears in that row (e.g. if r4c1 is a 6, r4c6 is a 1). The same applies to columns 5 and 9, with the digits 5 and 9 respectively.

Digits do not repeat along the given diagonals.

Digits in cages do not repeat, and must sum to the given total.
