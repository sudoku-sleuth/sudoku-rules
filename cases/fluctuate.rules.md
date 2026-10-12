---
format: open-rules
title: Fluctuate
setter: Blobz
source: https://sudokupad.app/blobz/fluctuate
case: https://sudoku-sleuth.com/cases/fluctuate
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r4c4-r5c3-r5c4-r6c3-r7c3 total 29 connected true
cage-2: cage r3c7-r4c7-r5c6-r5c7-r6c6 total 20 connected true
cage-3: cage r1c4-r2c4-r3c4-r3c5 total 28 connected true
cage-4: cage r7c5-r7c6-r8c6-r9c6 total 25 connected true
cage-5: cage r4c1-r4c2-r4c3 total 10 connected true
cage-6: cage r6c7-r6c8-r6c9 total 18 connected true
cage-7: cage r8c1-r9c1-r9c2 total 23 connected true
cage-8: cage r1c1-r1c2-r2c1 total 24 connected true
cage-9: cage r8c9-r9c8-r9c9 total 19 connected true
cage-10: cage r1c8-r1c9-r2c9 total 12 connected true
renban-1: renban r3c7-r3c6-r4c6-r4c5-r5c5-r6c5-r6c4-r7c4-r7c3
renban-2: renban r7c2-r8c2-r8c3
renban-3: renban r2c7-r2c8-r3c8
renban-4: renban r3c2-r3c3-r2c3
renban-5: renban r7c8-r7c7-r8c7
renban-6: renban r1c5-r2c5-r2c6-r1c6
renban-7: renban r8c4-r8c5-r9c5-r9c4
renban-8: renban r4c8-r4c9-r5c9-r5c8
renban-9: renban r5c1-r5c2-r6c2-r6c1
```

Normal sudoku rules apply. 

Pink lines contain a non-repeating consecutive sequence in any order. 

Digits in cages do not repeat, and sum to the value shown.
