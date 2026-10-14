---
format: open-rules
title: Scene of the Accident
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/scene-of-the-accident
library: https://rules.sudoku-sleuth.com/
status: read
givens: r7c8=1 r9c9=8
exported: 1d0d3ddaa07e94dd1a8ef21d30b45a7a
---

```rules
sudoku 9x9
cage-1: cage r3c4-r3c5-r3c6-r4c6-r4c7-r5c7-r5c8-r6c8-r7c8 total 45 connected true
cage-2: cage r4c3-r5c3-r6c3-r6c4-r7c4-r7c5-r7c6 total 28 connected true
cage-3: cage r9c5-r9c6 total 5 connected true
kropki-1: kropki r8c8-r8c9 black
kropki-2: kropki r7c6-r8c6 black
kropki-3: kropki r9c7-r9c8 black
kropki-4: kropki r1c6-r1c7 black
kropki-5: kropki r1c7-r2c7 black
kropki-6: kropki r8c1-r9c1 black
kropki-7: kropki r6c1-r7c1 black
kropki-8: kropki r1c1-r2c1 black
kropki-9: kropki r6c2-r6c3 black
kropki-10: kropki r6c2-r7c2 black
kropki-11: kropki r7c2-r7c3 black
kropki-12: kropki r4c8-r4c9 black
kropki-13: kropki r5c7-r5c8 black
kropki-14: kropki r3c5-r3c6 black
kropki-15: kropki r5c5-r6c5 black
whispers-1: whispers r1c1-r1c2-r1c3-r2c3-r3c3-r4c3-r5c3-r5c2-r5c1-r6c1-r6c2 gap 4
whispers-2: whispers r6c2-r5c2 gap 4
whispers-3: whispers r2c2-r3c2-r4c2 gap 4
whispers-4: whispers r3c1-r3c2-r3c3 gap 4
renban-1: renban r8c1-r8c2-r8c3-r7c3-r6c3-r6c4-r6c5-r7c5-r8c5
renban-2: renban r7c6-r8c6-r8c7-r8c8-r8c9
renban-3: renban r4c7-r5c7-r5c6-r4c6-r4c5-r5c4-r5c5-r6c6
```

Normal Sudoku rules apply. Numbers on the red line are at least 4 apart from their neighbors on the line. Numbers on purple lines are each a set of non-repeating, consecutive numbers, in any order. Numbers in cages sum to the number in the top left corner of the cage. Numbers do not repeat in cages. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given.
