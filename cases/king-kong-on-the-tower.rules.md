---
format: open-rules
title: King Kong On The Tower
setter: Will Power
source: https://sudokupad.app/8lyzgfx8j6
case: https://sudoku-sleuth.com/cases/king-kong-on-the-tower
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c1-r2c1-r3c1 total 11 connected true
cage-2: cage r4c1-r5c1 total 9 connected true
cage-3: cage r6c1-r7c1 total 12 connected true
cage-4: cage r8c1-r9c1 total 13 connected true
cage-5: cage r7c2-r8c2-r9c2 total 6 connected true
cage-6: cage r5c2-r6c2 total 14 connected true
cage-7: cage r3c2-r4c2 total 14 connected true
cage-8: cage r1c2-r2c2 total 11 connected true
cage-9: cage r4c6-r5c6-r6c6 total 10 connected true
cage-10: cage r4c9-r5c9-r6c9 total 10 connected true
cage-11: cage r3c7-r4c7 total 3 connected true
kropki-1: kropki r4c3-r5c3 colour "white"
kropki-2: kropki r5c3-r6c3 colour "white"
kropki-3: kropki r8c2-r9c2 colour "white"
kropki-4: kropki r7c2-r8c2 colour "white"
kropki-5: kropki r8c6-r9c6 colour "white"
kropki-6: kropki r2c7-r2c8 colour "black"
kropki-7: kropki r2c8-r3c8 colour "black"
whispers-1: whispers r9c7-r8c8 gap 4
whispers-2: whispers r4c8-r5c9 gap 4
whispers-3: whispers r3c6-r3c5-r2c4-r1c3 gap 4
whispers-4: whispers r1c2-r2c3-r3c4-r4c5-r5c5-r6c5-r6c4-r7c3-r8c2 gap 4
whispers-5: whispers r9c2-r8c3-r7c4 gap 4
whispers-6: whispers r7c5-r7c6 gap 4
whispers-7: whispers r7c6-r8c7-r9c6 gap 4
whispers-8: whispers r6c9-r5c8-r6c8-r7c8 gap 4
whispers-9: whispers r6c9-r7c9 gap 4
renban r3c6-r2c6-r1c7-r1c8-r1c9-r2c9-r3c9-r4c8-r4c7
```

Normal Sudoku rules apply.

RENBAN- Numbers on the purple line are an additional set of 1-9.

DUTCH WHISPERS- Numbers on red lines are at least 4 apart from their neighbors on the line. Numbers may repeat on red lines if other rules allow.

KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are shown.

KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage.

The red oval (King Kong's mouth) has no effect on the puzzle.
