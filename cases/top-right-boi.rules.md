---
format: open-rules
title: TOP RIGHT BOI
setter: Will Power
source: https://sudokupad.app/rhuf7siknh
case: https://sudoku-sleuth.com/cases/top-right-boi
library: https://rules.sudoku-sleuth.com/
status: read
exported: acd9da6d8cba817d06bd85f823f3fcd7
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r1c3 connected true
cage-2: cage r2c2-r3c2-r4c1-r4c2 connected true
cage-3: cage r1c4-r2c4-r3c3-r3c4-r4c3-r4c4-r5c3-r5c4-r6c3 connected true
cage-4: cage r5c2-r6c2-r7c1-r7c2 connected true
cage-5: cage r8c2-r9c1-r9c2 connected true
cage-6: cage r7c4-r8c3-r8c4 connected true
cage-7: cage r6c4-r6c5-r6c6-r7c6-r8c6 connected true
cage-8: cage r7c7-r7c8-r8c7-r8c8-r9c7 connected true
cage-9: cage r8c9-r9c8-r9c9 connected true
cage-10: cage r6c7-r6c8-r6c9 connected true
cage-11: cage r5c7-r5c8-r5c9 connected true
cage-12: cage r4c7-r4c8-r4c9 connected true
cage-13: cage r2c8-r3c8 connected true
cage-14: cage r2c6-r3c5-r3c6 connected true
kropki-1: kropki r6c7-r6c8 black
kropki-2: kropki r7c5-r7c6 black
whispers-1: whispers r1c1-r1c2-r2c3-r2c4-r3c5-r3c6-r4c7-r4c8-r5c9-r6c8-r6c7-r7c6-r7c5-r8c4-r8c3-r9c2-r9c1 gap 4
whispers-2: whispers r3c1-r3c2-r4c3-r4c4-r5c5-r6c4-r6c3-r7c2-r7c1 gap 4
pair-1: pair r6c5-r6c6 sum 10
pair-2: pair r6c3-r6c4 sum 10
```

Normal Sudoku rules apply.

TOP RIGHT BOI- For every cage in the grid, the rightmost cell of the top row of the cage must have the cage's smallest number. Numbers do not repeat in cages.

DUTCH WHISPERS- Numbers on red lines are at least 4 apart from their neighbors on the line.

KROPKI PAIRS- Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given.

XV PAIRS- Numbers with an X between them sum to 10. Not all possible X are given.
