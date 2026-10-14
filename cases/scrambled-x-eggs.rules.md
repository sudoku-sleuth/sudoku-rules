---
format: open-rules
title: Scrambled X (Eggs)
setter: Will Power
source: https://f-puzzles.com/?id=ydy25ajs
case: https://sudoku-sleuth.com/cases/scrambled-x-eggs
library: https://rules.sudoku-sleuth.com/
status: read
exported: 1e438b8949bbf33833371c1f2a3d18cf
---

```rules
sudoku 9x9
anti-king
kropki-1: kropki r5c6-r5c7 white
kropki-2: kropki r5c5-r5c6 white
kropki-3: kropki r2c6-r3c6 white
kropki-4: kropki r3c3-r4c3 white
kropki-5: kropki r6c7-r7c7 white
arrow-1: arrow r6c6-r6c7-r7c7 bulb ["r7c6"]
arrow-2: arrow r4c4-r4c3-r3c3 bulb ["r3c4"]
arrow-3: arrow r4c6-r4c7-r3c7 bulb ["r3c6"]
arrow-4: arrow r6c4-r6c3-r7c3 bulb ["r7c4"]
pair-1: pair r5c6-r6c6 sum 10
pair-2: pair r4c5-r4c6 sum 10
pair-3: pair r4c4-r5c4 sum 10
pair-4: pair r6c4-r6c5 sum 10
pair-5: pair r5c7-r5c8 sum 10
pair-6: pair r5c2-r5c3 sum 10
pair-7: pair r2c5-r3c5 sum 10
pair-8: pair r7c5-r8c5 sum 10
pair-9: pair r6c2-r6c3 sum 10
pair-10: pair r8c1-r9c1 sum 10
pair-11: pair r5c1-r6c1 sum 10
pair-12: pair r1c1-r2c1 sum 10
pair-13: pair r8c9-r9c9 sum 10
pair-14: pair r4c9-r5c9 sum 10
pair-15: pair r1c9-r2c9 sum 10
pair-16: pair r2c4-r3c4 sum 10
pair-17: pair r4c7-r4c8 sum 10
pair-18: pair r7c6-r8c6 sum 10
pair-19: pair r6c7-r6c8 sum 10
pair-20: pair r4c2-r4c3 sum 10
negative relations [{"op":"sum","value":10}] except [["r5c6","r5c7"],["r5c5","r5c6"],["r2c6","r3c6"],["r3c3","r4c3"],["r6c7","r7c7"],["r5c6","r6c6"],["r4c5","r4c6"],["r4c4","r5c4"],["r6c4","r6c5"],["r5c7","r5c8"],["r5c2","r5c3"],["r2c5","r3c5"],["r7c5","r8c5"],["r6c2","r6c3"],["r8c1","r9c1"],["r5c1","r6c1"],["r1c1","r2c1"],["r8c9","r9c9"],["r4c9","r5c9"],["r1c9","r2c9"],["r2c4","r3c4"],["r4c7","r4c8"],["r7c6","r8c6"],["r6c7","r6c8"],["r4c2","r4c3"]]
```

Normal Sudoku rules apply. Numbers which are a chess KING's move apart cannot be the same digit. Numbers on arrows sum to the number in that arrow's circle. Numbers may repeat on arrows, if other rules allow. Numbers with an X between them sum to 10. All possible X are given. Numbers with a white dot between them are consecutive. Not all possible dots are given.
