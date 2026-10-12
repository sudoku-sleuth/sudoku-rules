---
format: open-rules
title: Lucky Seven Dice Roll
setter: Will Power
source: https://sudokupad.app/tbbhllo8qy
case: https://sudoku-sleuth.com/cases/lucky-seven-dice-roll
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c7-r1c8-r2c8 total 18 connected true
cage-2: cage r6c2-r7c2-r8c2 total 21 connected true
cage-3: cage r6c6-r7c6 total 14 connected true
cage-4: cage r8c8-r8c9-r9c8 total 8 connected true
kropki-1: kropki r3c6-r4c6 colour "black"
kropki-2: kropki r3c7-r4c7 colour "black"
kropki-3: kropki r3c8-r4c8 colour "black"
kropki-4: kropki r4c5-r5c5 colour "black"
kropki-5: kropki r4c6-r5c6 colour "black"
kropki-6: kropki r4c7-r5c7 colour "black"
kropki-7: kropki r5c7-r5c8 colour "black"
kropki-8: kropki r6c8-r6c9 colour "black"
kropki-9: kropki r6c5-r7c5 colour "black"
kropki-10: kropki r1c3-r1c4 colour "black"
kropki-11: kropki r2c2-r3c2 colour "black"
kropki-12: kropki r3c3-r4c3 colour "black"
whispers-1: whispers r4c9-r3c9-r3c8-r3c7-r3c6-r4c5 gap 4
whispers-2: whispers r5c4-r6c4-r7c4-r8c4 gap 4
whispers-3: whispers r5c4-r5c5 gap 4
whispers-4: whispers r4c8-r5c7-r6c7-r7c7-r8c7-r8c6-r8c5 gap 4
whispers-5: whispers r1c2-r2c1-r3c1 gap 4
renban-1: renban r5c3-r5c2-r5c1-r4c1-r3c1-r6c1
renban-2: renban r2c3-r2c2-r2c1
renban-3: renban r4c4-r3c4-r2c4-r1c5-r2c5-r3c5
renban-4: renban r5c5-r5c6-r5c7
renban-5: renban r4c8-r4c9-r5c9-r6c9-r7c8
```

Normal Sudoku rules apply.

DUTCH WHISPERS- Numbers on THIN RED lines are at least 4 apart from their neighbors on the line. Numbers may repeat on red lines, if other rules allow.

RENBAN- Numbers on THICK PURPLE lines are each a set of non-repeating, consecutive numbers, in any order.

KROPKI PAIRS- Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given.

KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage.
