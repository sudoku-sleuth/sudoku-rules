---
format: open-rules
title: The Path
setter: Will Power
source: https://f-puzzles.com/?id=y3yw8wzg
case: https://sudoku-sleuth.com/cases/the-path
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r9c8-r9c9 total 11 connected true
cage-2: cage r9c6-r9c7 total 11 connected true
cage-3: cage r9c3-r9c4 total 11 connected true
cage-4: cage r8c1-r8c2 total 12 connected true
cage-5: cage r8c4-r8c5 total 12 connected true
cage-6: cage r8c7-r8c8 total 12 connected true
cage-7: cage r7c3-r7c4-r7c5 total 12 connected true
cage-8: cage r7c6-r7c7-r7c8 total 12 connected true
cage-9: cage r7c9-r8c9 total 14 connected true
cage-10: cage r6c2-r6c3 total 9 connected true
cage-11: cage r6c5-r6c6 total 9 connected true
cage-12: cage r6c7-r6c8 total 9 connected true
cage-13: cage r4c2-r5c2 total 15 connected true
cage-14: cage r3c5-r4c5 total 9 connected true
cage-15: cage r2c4-r3c4 total 10 connected true
pair-1: pair r2c9-r3c9 sum 5
pair-2: pair r3c7-r3c8 sum 5
pair-3: pair r5c5-r5c6 sum 5
pair-4: pair r7c8-r8c8 sum 5
pair-5: pair r8c2-r9c2 sum 5
pair-6: pair r1c2-r2c2 sum 5
pair-7: pair r1c4-r2c4 sum 5
pair-8: pair r6c6-r6c7 sum 5
pair-9: pair r1c1-r2c1 sum 5
pair-10: pair r5c7-r6c7 sum 5
negative relations [{"op":"sum","value":5}] except [["r2c9","r3c9"],["r3c7","r3c8"],["r5c5","r5c6"],["r7c8","r8c8"],["r8c2","r9c2"],["r1c2","r2c2"],["r1c4","r2c4"],["r6c6","r6c7"],["r1c1","r2c1"],["r5c7","r6c7"]]
```

Normal Sudoku rules apply. Numbers in cages sum to the number in the top left corner of the cage. Numbers with a V between them sum to 5. All possible Vs are given. There is a path of non-repeating, CONSECUTIVE numbers from 1 to 9 from the bottom to the top of the grid. The consecutive numbers on the path touch either orthogonally or diagonally.
