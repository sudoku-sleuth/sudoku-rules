---
format: open-rules
title: Presentation is Everything
setter: Will Power
source: https://sudokupad.app/puqkwcee3v
case: https://sudoku-sleuth.com/cases/presentation-is-everything
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r8c3-r8c4-r8c5-r8c6-r8c7 total 19 connected true
cage-2: cage r3c2-r4c2-r5c2-r6c2-r7c2 total 35 connected true
cage-3: cage r3c8-r4c8-r5c8-r6c8-r7c8 total 15 connected true
cage-4: cage r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9 total 40 connected true
cage-5: cage r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8 total 34 connected true
cage-6: cage r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1 total 30 connected true
cage-7: cage r9c2-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8 total 36 connected true
cage-8: cage r5c4-r5c5-r5c6 total 10 connected true
cage-9: cage r4c7-r5c7-r6c7 total 13 connected true
cage-10: cage r3c4-r3c5-r3c6 total 17 connected true
cage-11: cage r4c3-r5c3-r6c3 total 19 connected true
cage-12: cage r7c4-r7c5-r7c6 total 18 connected true
cage-13: cage r2c3-r2c4-r2c5-r2c6-r2c7 total 24 connected true
kropki-1: kropki r4c4-r5c4 colour "black"
kropki-2: kropki r5c6-r6c6 colour "black"
kropki-3: kropki r6c4-r6c5 colour "black"
kropki-4: kropki r7c5-r8c5 colour "black"
kropki-5: kropki r8c5-r9c5 colour "black"
kropki-6: kropki r2c5-r2c6 colour "black"
kropki-7: kropki r9c6-r9c7 colour "black"
whispers-1: whispers r1c1-r2c2-r3c3-r4c4 gap 4
whispers-2: whispers r4c6-r3c7-r2c8-r1c9 gap 5
whispers-3: whispers r6c4-r7c3-r8c2-r9c1 gap 5
whispers-4: whispers r6c6-r7c7-r8c8-r9c9 gap 4
```

Normal Sudoku rules apply. GERMAN WHISPERS- Numbers on green lines are at least 5 apart from their neighbors on the line. DUTCH WHISPERS- Numbers on red lines are at least 4 apart from their neighbors on the line. The four numbers on ALL FOUR lines are the same as one another. KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage. KROPKI PAIRS- Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given.
