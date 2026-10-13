---
format: open-rules
title: Brick House
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/brick-house
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r1c2-r1c3-r2c2-r2c3 total 10 connected true
cage-2: cage r4c2-r4c3-r4c4-r5c2-r5c3-r5c4 total 36 connected true
cage-3: cage r6c2-r6c3-r7c2-r7c3 total 24 connected true
cage-4: cage r8c1-r8c2-r8c3-r9c1-r9c2-r9c3 total 36 connected true
cage-5: cage r1c6-r1c7-r2c6-r2c7 total 30 connected true
cage-6: cage r4c6-r4c7-r5c6-r5c7 total 14 connected true
cage-7: cage r6c6-r6c7-r7c6-r7c7 total 30 connected true
cage-8: cage r8c6-r8c7-r9c6-r9c7 total 11 connected true
kropki-1: kropki r1c2-r1c3 colour "white"
kropki-2: kropki r1c2-r2c2 colour "white"
kropki-3: kropki r2c2-r2c3 colour "white"
kropki-4: kropki r5c3-r5c4 colour "white"
kropki-5: kropki r6c2-r6c3 colour "white"
kropki-6: kropki r9c1-r9c2 colour "white"
kropki-7: kropki r6c6-r6c7 colour "white"
kropki-8: kropki r7c6-r7c7 colour "white"
kropki-9: kropki r5c6-r5c7 colour "white"
kropki-10: kropki r4c6-r4c7 colour "white"
kropki-11: kropki r2c6-r2c7 colour "white"
kropki-12: kropki r1c6-r1c7 colour "white"
kropki-13: kropki r8c6-r9c6 colour "white"
kropki-14: kropki r9c6-r9c7 colour "white"
kropki-15: kropki r4c4-r5c4 colour "white"
kropki-16: kropki r3c2-r4c2 colour "white"
kropki-17: kropki r8c8-r9c8 colour "black"
kropki-18: kropki r7c8-r8c8 colour "black"
kropki-19: kropki r5c8-r6c8 colour "black"
kropki-20: kropki r3c5-r3c6 colour "black"
kropki-21: kropki r6c4-r6c5 colour "black"
kropki-22: kropki r6c1-r7c1 colour "black"
kropki-23: kropki r1c9-r2c9 colour "black"
pair-1: pair r7c4-r8c4 sum 10
pair-2: pair r2c5-r3c5 sum 10
```

```drawing
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[24]}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[19]}}
```

Normal Sudoku rules apply. Numbers in cages sum to the number in the top left corner of the cage. Numbers cannot repeat in a cage. Numbers with an X between them sum to 10. Numbers with a black dot between them are in a ratio of 2:1. Numbers with a white dot between them are consecutive. Not all possible X and dots are given.
