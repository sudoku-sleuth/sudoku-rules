---
format: open-rules
title: That's ODD!
setter: Will Power
source: https://f-puzzles.com/?id=y89w5td6
case: https://sudoku-sleuth.com/cases/that-s-odd
library: https://rules.sudoku-sleuth.com/
status: read
exported: 07fe6977618369b96ea3728cca776058
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r2c1-r2c2 total 22 connected true
cage-2: cage r1c8-r1c9-r2c8-r2c9 total 24 connected true
cage-3: cage r8c1-r8c2-r9c1-r9c2 total 20 connected true
cage-4: cage r8c8-r8c9-r9c8-r9c9 total 18 connected true
kropki-1: kropki r1c5-r2c5 black
kropki-2: kropki r1c6-r2c6 black
kropki-3: kropki r3c8-r3c9 black
kropki-4: kropki r3c9-r4c9 black
kropki-5: kropki r3c7-r3c8 black
kropki-6: kropki r8c7-r9c7 black
kropki-7: kropki r8c5-r9c5 black
kropki-8: kropki r7c1-r7c2 black
kropki-9: kropki r6c1-r7c1 black
kropki-10: kropki r5c1-r6c1 black
kropki-11: kropki r1c3-r2c3 black
kropki-12: kropki r4c4-r4c5 black
kropki-13: kropki r3c8-r4c8 black
pair-1: pair r9c1-r9c2 sum 10
pair-2: pair r8c8-r8c9 sum 10
pair-3: pair r1c8-r2c8 sum 10
pair-4: pair r1c1-r1c2 sum 10
pair-5: pair r6c5-r7c5 sum 10
pair-6: pair r6c4-r7c4 sum 10
pair-7: pair r4c5-r4c6 sum 5
negative relations [{"op":"ratio","value":2}] except [["r1c5","r2c5"],["r1c6","r2c6"],["r3c8","r3c9"],["r3c9","r4c9"],["r3c7","r3c8"],["r8c7","r9c7"],["r8c5","r9c5"],["r7c1","r7c2"],["r6c1","r7c1"],["r5c1","r6c1"],["r1c3","r2c3"],["r4c4","r4c5"],["r3c8","r4c8"],["r9c1","r9c2"],["r8c8","r8c9"],["r1c8","r2c8"],["r1c1","r1c2"],["r6c5","r7c5"],["r6c4","r7c4"],["r4c5","r4c6"]]
parity-cells r3c3-r3c4-r3c5-r3c6-r3c7-r4c7-r5c7-r6c7-r7c7-r7c6-r7c5-r7c4-r7c3-r6c3-r5c3-r4c3-r4c6-r5c6-r5c5-r6c5-r6c4 parity "odd"
```

Normal Sudoku rules apply. Numbers with circles highlighted are ODD. Numbers in cages sum to the number in the top left corner of the cage. Numbers with a black dot between them are in a ratio of 1:2. All possible black dots are given. Numbers with an X between them sum to 10. Numbers with a V between them sum to 5. Not all possible X and V are given.
