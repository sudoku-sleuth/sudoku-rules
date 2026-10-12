---
format: open-rules
title: Kathy
setter: Blobz
source: https://sudokupad.app/blobz/kathy
case: https://sudoku-sleuth.com/cases/kathy
library: https://rules.sudoku-sleuth.com/
status: flagged
flags:
  - Our reading of these rules doesn't match the published answer yet; we're checking it.
---

```rules
sudoku 9x9
cage-1: cage r9c1-r9c2-r9c3-r9c4-r9c5 total 32 connected true
cage-2: cage r8c1-r8c2-r8c3-r8c4 total 16 connected true
cage-3: cage r7c1-r7c2-r7c3 total 14 connected true
cage-4: cage r5c1-r6c1-r6c2 total 12 connected true
cage-5: cage r1c5-r1c6-r1c7-r1c8-r1c9 total 27 connected true
cage-6: cage r2c6-r2c7-r2c8-r2c9 total 18 connected true
cage-7: cage r4c8-r4c9-r5c9 total 24 connected true
cage-8: cage r3c7-r3c8-r3c9 total 21 connected true
kropki-1: kropki r1c5-r1c6 colour "white"
kropki-2: kropki r5c4-r5c5 colour "white"
kropki-3: kropki r5c1-r5c2 colour "white"
kropki-4: kropki r2c2-r2c3 colour "white"
kropki-5: kropki r9c1-r9c2 colour "white"
kropki-6: kropki r7c4-r8c4 colour "white"
kropki-7: kropki r6c7-r7c7 colour "white"
kropki-8: kropki r1c8-r1c9 colour "white"
kropki-9: kropki r1c7-r1c8 colour "white"
kropki-10: kropki r3c7-r3c8 colour "white"
kropki-11: kropki r2c6-r3c6 colour "white"
kropki-12: kropki r5c6-r5c7 colour "white"
renban-1: renban r1c1-r2c1-r3c1-r1c3-r2c2-r3c3
region-sum-1: region-sum r5c2-r4c2-r3c2-r2c3-r3c4-r4c4-r5c4 segments [["r5c2","r4c2"],["r3c2","r2c3"],["r3c4"],["r4c4","r5c4"]]
region-sum-2: region-sum r4c2-r4c3-r4c4 segments [["r4c2","r4c3"],["r4c4"]]
renban-2: renban r4c4-r4c5-r4c6-r5c5-r6c5
region-sum-3: region-sum r8c6-r7c6-r6c6-r5c6-r8c8-r7c8-r6c8-r5c8-r6c7 segments [["r8c6","r7c6"],["r6c6","r5c6"],["r8c8","r7c8"],["r6c8","r5c8","r6c7"]]
renban-3: renban r7c9-r8c8-r9c8-r7c7
```

Normal sudoku rules apply.

Along PINK lines, digits form a non-repeating consecutive sequence in any order.

Box borders divide BLUE lines into segments which have the same sum.

Cages sum to the given value.

White dots separate consecutive digits; not all such dots are shown.
