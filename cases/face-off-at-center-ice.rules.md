---
format: open-rules
title: Face Off at Center Ice
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/face-off-at-center-ice
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r4c7-r5c6-r5c7-r6c6-r6c7-r7c7 total 38 connected true
cage-2: cage r3c3-r4c3-r4c4-r5c3-r5c4-r6c3 total 37 connected true
cage-3: cage r3c4-r3c5-r3c6-r3c7-r4c5-r4c6 total 39 connected true
cage-4: cage r6c4-r6c5-r7c3-r7c4-r7c5-r7c6 total 36 connected true
kropki-1: kropki r1c1-r2c1 colour "white"
kropki-2: kropki r2c1-r2c2 colour "white"
kropki-3: kropki r1c2-r2c2 colour "white"
kropki-4: kropki r8c8-r8c9 colour "white"
kropki-5: kropki r8c8-r9c8 colour "white"
kropki-6: kropki r2c8-r3c8 colour "white"
kropki-7: kropki r7c2-r8c2 colour "white"
pair-1: pair r8c5-r9c5 sum 10
pair-2: pair r5c8-r5c9 sum 10
pair-3: pair r5c1-r5c2 sum 5
pair-4: pair r1c5-r2c5 sum 5
magic-square places [["r4c4","r4c5","r4c6","r5c4","r5c5","r5c6","r6c4","r6c5","r6c6"]]
```

Normal Sudoku rules apply. MAGIC SQUARE- Sudoku Box 5 (center) is a magic square. KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage. Numbers do not repeat in cages. KROPKI PAIRS- Numbers with white dots between them are consecutive. Not all possible dots are shown. XV PAIRS- Numbers with an X between them sum to 10. Numbers with a V between them sum to 5. Not all possible X and V are given.
