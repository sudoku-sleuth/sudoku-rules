---
format: open-rules
title: In the Dressing Room
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/in-the-dressing-room
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r5c7-r5c8 total 15 connected true
cage-2: cage r3c2-r3c3 total 15 connected true
cage-3: cage r3c8-r3c9 total 5 connected true
cage-4: cage r1c2-r1c3 total 5 connected true
cage-5: cage r7c8-r8c8-r9c8 total 12 connected true
cage-6: cage r8c9-r9c9 total 12 connected true
cage-7: cage r5c9-r6c9-r7c9 total 12 connected true
cage-8: cage r2c5-r2c6 total 13 connected true
cage-9: cage r8c4-r8c5 total 10 connected true
cage-10: cage r7c6-r7c7 total 16 connected true
cage-11: cage r3c5-r4c5 total 8 connected true
kropki-1: kropki r8c1-r9c1 colour "white"
kropki-2: kropki r7c1-r8c1 colour "white"
kropki-3: kropki r7c1-r7c2 colour "white"
kropki-4: kropki r6c2-r7c2 colour "white"
kropki-5: kropki r6c1-r6c2 colour "white"
kropki-6: kropki r5c1-r6c1 colour "white"
kropki-7: kropki r7c4-r7c5 colour "white"
renban-1: renban r5c9-r6c9-r7c9-r8c9-r9c9-r9c8-r8c8-r7c8
renban-2: renban r4c2-r5c2-r6c2-r7c2-r8c2-r8c3-r7c3-r6c3
renban-3: renban r5c7-r5c8-r4c9-r3c9-r2c9-r2c8-r3c8-r4c8-r3c7
renban-4: renban r4c4-r4c3-r3c2-r2c2-r1c2-r1c3-r2c3-r3c3-r2c4
```

Normal Sudoku rules apply. Numbers on the 4 Purple lines are each a set of consecutive, non-repeating digits, in any order. Stickman's reflection has the same digits as stickman, IN THE SAME ORDER, only reflected by the mirror. Example: Row 2 column 3 is the same digit as row 3 column 8 (stickman's chin). Numbers in cages sum to the number in the top left corner of the cage. Numbers with a white dot between them are consecutive. Not all possible dots are given. The gray lines are the mirror border, and do not affect the puzzle.
