---
format: open-rules
title: Kropki Matrix
setter: Blobz
source: https://sudokupad.app/blobz/kropki-matrix
case: https://sudoku-sleuth.com/cases/kropki-matrix
library: https://rules.sudoku-sleuth.com/
status: read
exported: 5e1fec079ed4f0e25c58e1a9c68a438b
---

```rules
sudoku 9x9
cage-1: cage r3c1-r4c1-r5c1 total 22 connected true
cage-2: cage r3c9-r4c9-r5c9 total 22 connected true
cage-3: cage r8c1-r9c1-r9c2 total 22 connected true
cage-4: cage r8c8-r9c8-r9c9 total 22 connected true
cage-5: cage r5c2-r6c2-r7c2 total 8 connected true
cage-6: cage r3c8-r4c8-r5c8 total 8 connected true
cage-7: cage r3c5-r3c6-r4c6 total 8 connected true
cage-8: cage r9c5-r9c6 total 5 connected true
cage-9: cage r6c5-r6c6 total 17 connected true
kropki-1: kropki r2c3-r3c3 black
kropki-2: kropki r5c3-r6c3 black
kropki-3: kropki r8c3-r9c3 black
kropki-4: kropki r8c5-r9c5 black
kropki-5: kropki r8c7-r9c7 black
kropki-6: kropki r5c7-r6c7 black
kropki-7: kropki r5c5-r6c5 black
kropki-8: kropki r2c5-r3c5 black
kropki-9: kropki r2c7-r3c7 black
```

Normal sudoku rules apply.

Black dots separate digits where one is double the other.

In cages, digits do not repeat, and sum to the given value.
