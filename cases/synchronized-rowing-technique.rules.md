---
format: open-rules
title: Synchronized Rowing Technique
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/synchronized-rowing-technique
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r3c1-r3c2-r4c1-r4c2-r5c1-r5c2 total 21 connected true
cage-2: cage r3c4-r3c5-r4c4-r4c5-r5c4-r5c5 total 39 connected true
cage-3: cage r3c7-r3c8-r4c7-r4c8-r5c7-r5c8 total 28 connected true
cage-4: cage r8c8-r9c8 total 8 connected true
kropki-1: kropki r7c3-r7c4 colour "white"
kropki-2: kropki r7c4-r7c5 colour "white"
kropki-3: kropki r7c5-r7c6 colour "white"
kropki-4: kropki r7c6-r7c7 colour "white"
kropki-5: kropki r5c4-r5c5 colour "white"
kropki-6: kropki r5c5-r5c6 colour "white"
kropki-7: kropki r5c6-r5c7 colour "white"
kropki-8: kropki r5c1-r5c2 colour "white"
kropki-9: kropki r5c2-r5c3 colour "white"
kropki-10: kropki r2c8-r2c9 colour "white"
kropki-11: kropki r2c7-r2c8 colour "white"
kropki-12: kropki r2c6-r2c7 colour "white"
kropki-13: kropki r2c1-r2c2 colour "white"
kropki-14: kropki r2c2-r2c3 colour "white"
whispers-1: whispers r5c3-r6c4-r7c5-r8c6-r9c7 gap 5
whispers-2: whispers r5c6-r6c7-r7c8-r8c9 gap 5
whispers-3: whispers r6c1-r7c2-r8c3-r9c4 gap 5
renban-1: renban r3c1-r4c1-r4c2-r3c2-r5c2-r5c1
renban-2: renban r3c4-r4c4-r4c5-r3c5-r5c5-r5c4-r5c3
renban-3: renban r3c7-r4c7-r4c8-r3c8-r5c8-r5c7-r5c6
```

Normal Sudoku rules apply. Numbers on green lines are at least 5 apart from their neighbors on the line. Numbers on purple lines are each a set of non-repeating consecutive numbers, in any order. Numbers in cages sum to the number in the top left corner of the cage. Numbers cannot repeat in cages. Numbers with a white dot between them are consecutive. Not all possible white dots are given. The blue line is the water, and has no effect on the puzzle.
