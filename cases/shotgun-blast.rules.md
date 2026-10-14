---
format: open-rules
title: Shotgun Blast
setter: Will Power
source: https://f-puzzles.com/?id=yzhs69k8
case: https://sudoku-sleuth.com/cases/shotgun-blast
library: https://rules.sudoku-sleuth.com/
status: read
exported: 50b88255b603d7557aedbe0de6d0d895
---

```rules
sudoku 9x9
cage-1: cage r5c3-r6c3 total 13 connected true
cage-2: cage r5c8-r6c8 total 16 connected true
pair-1: pair r1c1-r2c1 sum 10
pair-2: pair r2c2-r2c3 sum 10
pair-3: pair r3c1-r3c2 sum 10
pair-4: pair r1c4-r1c5 sum 10
pair-5: pair r3c5-r3c6 sum 10
pair-6: pair r2c7-r3c7 sum 10
pair-7: pair r1c7-r1c8 sum 10
pair-8: pair r2c8-r2c9 sum 10
pair-9: pair r4c8-r5c8 sum 10
pair-10: pair r6c8-r7c8 sum 10
pair-11: pair r4c6-r5c6 sum 10
pair-12: pair r6c6-r6c7 sum 10
pair-13: pair r5c5-r6c5 sum 10
pair-14: pair r4c4-r4c5 sum 10
pair-15: pair r4c2-r4c3 sum 10
pair-16: pair r6c2-r6c3 sum 10
pair-17: pair r8c1-r8c2 sum 10
pair-18: pair r9c4-r9c5 sum 10
pair-19: pair r7c6-r8c6 sum 10
pair-20: pair r7c4-r7c5 sum 10
pair-21: pair r7c7-r8c7 sum 10
pair-22: pair r9c8-r9c9 sum 10
pair-23: pair r5c3-r5c4 sum 10
pair-24: pair r3c3-r4c3 sum 10
pair-25: pair r6c2-r7c2 sum 10
pair-26: pair r2c1-r3c1 sum 5
pair-27: pair r2c3-r3c3 sum 5
pair-28: pair r6c5-r7c5 sum 5
pair-29: pair r4c1-r4c2 sum 5
pair-30: pair r5c2-r6c2 sum 5
pair-31: pair r7c3-r8c3 sum 5
pair-32: pair r3c4-r4c4 sum 5
negative relations [{"op":"sum","value":10},{"op":"sum","value":5}] except [["r1c1","r2c1"],["r2c2","r2c3"],["r3c1","r3c2"],["r1c4","r1c5"],["r3c5","r3c6"],["r2c7","r3c7"],["r1c7","r1c8"],["r2c8","r2c9"],["r4c8","r5c8"],["r6c8","r7c8"],["r4c6","r5c6"],["r6c6","r6c7"],["r5c5","r6c5"],["r4c4","r4c5"],["r4c2","r4c3"],["r6c2","r6c3"],["r8c1","r8c2"],["r9c4","r9c5"],["r7c6","r8c6"],["r7c4","r7c5"],["r7c7","r8c7"],["r9c8","r9c9"],["r2c1","r3c1"],["r2c3","r3c3"],["r6c5","r7c5"],["r4c1","r4c2"],["r5c2","r6c2"],["r7c3","r8c3"],["r3c4","r4c4"],["r5c3","r5c4"],["r3c3","r4c3"],["r6c2","r7c2"]]
```

Normal Sudoku rules apply.  XV Sums-  Digits with an X between them sum to 10.  Digits with a V between them sum to 5.  All possible X's and V's are shown.  Killer Cages- Numbers in a cage sum to the number at the top left corner of the cage.  Digits cannot repeat in a cage.
