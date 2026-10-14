---
format: open-rules
title: Stitched
setter: Blobz
source: https://sudokupad.app/blobz/stitched
case: https://sudoku-sleuth.com/cases/stitched
library: https://rules.sudoku-sleuth.com/
status: read
exported: a100daa9bb450144c7f20f2fe9e5cbfe
---

```rules
sudoku 9x9
cage-1: cage r2c7-r2c8-r3c8 total 8 connected true
cage-2: cage r7c8-r8c7-r8c8 total 21 connected true
cage-3: cage r2c2-r2c3-r3c2 total 15 connected true
cage-4: cage r5c2-r5c3 total 10 connected true
cage-5: cage r5c7-r5c8 total 8 connected true
cage-6: cage r2c5-r3c5 total 10 connected true
cage-7: cage r7c5-r8c5 total 7 connected true
cage-8: cage r3c3-r3c4-r4c3 total 24 connected true
cage-9: cage r6c3-r6c4-r7c4 total 24 connected true
cage-10: cage r6c7-r7c6-r7c7 total 6 connected true
cage-11: cage r3c6-r3c7-r4c7 total 15 connected true
kropki-1: kropki r5c1-r6c1 black
kropki-2: kropki r4c9-r5c9 black
kropki-3: kropki r1c4-r1c5 black
kropki-4: kropki r9c5-r9c6 black
kropki-5: kropki r2c2-r3c2 black
kropki-6: kropki r7c8-r8c8 black
renban-1: renban r1c1-r1c2
renban-2: renban r1c3-r1c4
renban-3: renban r1c5-r1c6
renban-4: renban r1c7-r1c8
renban-5: renban r1c9-r2c9
renban-6: renban r3c9-r4c9
renban-7: renban r5c9-r6c9
renban-8: renban r7c9-r8c9
renban-9: renban r9c9-r9c8
renban-10: renban r9c7-r9c6
renban-11: renban r9c5-r9c4
renban-12: renban r9c3-r9c2
renban-13: renban r9c1-r8c1
renban-14: renban r7c1-r6c1
renban-15: renban r5c1-r4c1
renban-16: renban r3c1-r2c1
renban-17: renban r3c6-r3c7-r4c7
```

Normal sudoku rules apply.

Digits along pink lines form a (non-repeating) consecutive sequence, in any order.

Digits in cages do not repeat, and must sum to the given total.

Black dots separate two digits where one is double the other. Not all such dots are shown.
