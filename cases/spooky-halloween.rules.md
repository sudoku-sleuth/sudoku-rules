---
format: open-rules
title: Spooky Halloween
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/spooky-halloween
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c2-r1c3-r1c4-r1c5 total 28 connected true
cage-2: cage r2c1-r3c1-r4c1-r5c1 total 19 connected true
cage-3: cage r2c6-r3c6-r4c6-r5c6 total 16 connected true
cage-4: cage r8c3-r8c4 total 17 connected true
cage-5: cage r3c8-r4c8 total 15 connected true
cage-6: cage r2c2-r2c3-r3c2-r3c3 total 14 connected true
cage-7: cage r2c4-r2c5-r3c4-r3c5 total 26 connected true
cage-8: cage r4c3-r4c4-r5c3-r5c4 total 18 connected true
cage-9: cage r4c2-r5c2 total 10 connected true
cage-10: cage r4c5-r5c5 total 15 connected true
cage-11: cage r2c7-r2c8-r3c7 total 23 connected true
cage-12: cage r5c7-r5c8-r5c9 total 6 connected true
cage-13: cage r1c7-r1c8-r1c9 total 8 connected true
cage-14: cage r7c5-r8c5 total 6 connected true
cage-15: cage r8c7-r8c8 total 10 connected true
kropki-1: kropki r3c3-r3c4 colour "black"
kropki-2: kropki r4c3-r4c4 colour "black"
kropki-3: kropki r6c2-r7c2 colour "black"
kropki-4: kropki r6c3-r7c3 colour "black"
renban-1: renban r6c2-r6c3-r6c4-r6c5-r7c5-r7c4-r7c3-r7c2
renban-2: renban r3c3-r2c3-r2c2-r3c2
renban-3: renban r2c4-r2c5-r3c5-r3c4
renban-4: renban r4c4-r4c3-r5c3-r5c4
renban-5: renban r8c6-r7c6-r6c6-r5c7-r5c8-r6c9-r7c9-r8c9
renban-6: renban r7c7-r7c8
```

Normal Sudoku rules apply. RENBAN- Numbers on purple lines are each a set of non-repeating, consecutive numbers, in any order. KILLER- Numbers in cages sum to the number in the top left corner of the cage. KROPKI PAIRS- Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given.
