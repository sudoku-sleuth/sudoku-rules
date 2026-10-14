---
format: open-rules
title: Chains and Keys
setter: EPH
source: https://sudokupad.app/vmkzv6n26i
case: https://sudoku-sleuth.com/cases/chains-and-keys
library: https://rules.sudoku-sleuth.com/
status: read
exported: 0503cefd7bb6fa35f76e86f0323cdd13
---

```rules
sudoku 9x9
cage-1: cage r3c3-r3c4-r4c3-r4c4 total 20 connected true
cage-2: cage r5c1-r5c2-r6c1 total 13 connected true
cage-3: cage r1c5-r1c6-r2c5 total 14 connected true
cage-4: cage r6c8-r7c8-r7c9 total 20 connected true
cage-5: cage r8c6-r8c7-r9c7 total 19 connected true
cage-6: cage r8c2-r9c2-r9c3 total 13 connected true
cage-7: cage r2c8-r2c9-r3c9 total 15 connected true
renban-1: renban r1c1-r2c2-r2c3-r3c3-r3c2
renban-2: renban r1c2-r1c3-r2c4-r2c5
renban-3: renban r2c1-r3c1-r4c2-r5c2
renban-4: renban r1c6-r1c7-r2c8-r2c9
renban-5: renban r6c1-r7c1-r8c2-r9c2
renban-6: renban r8c9-r8c8-r9c8
renban-7: renban r9c3-r9c4-r8c5-r8c6
renban-8: renban r3c9-r4c9-r5c8-r6c8
renban-9: renban r6c6-r5c5-r4c5-r4c4-r5c4
```

Standard sudoku rules apply: each row, column, and 3x3 box must contain all of the digits from 1 to 9.
Renban: digits on a purple line are a non-repeating set of consecutive digits in any order.
Cages: digits in a cage do not repeat, and sum to the value in the top left corner.
