---
format: open-rules
title: Lumberjack(Stihl Timbersports)
setter: Will Power
source: https://sudokupad.app/ajcgotlqy3
case: https://sudoku-sleuth.com/cases/lumberjack-stihl-timbersports
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r2c1-r3c1 connected true
cage-2: cage r3c4-r3c5 connected true
cage-3: cage r1c5-r1c6 connected true
cage-4: cage r1c2-r1c3 connected true
cage-5: cage r1c7-r1c8 connected true
cage-6: cage r2c6-r3c6 connected true
cage-7: cage r3c8-r3c9 connected true
cage-8: cage r7c8-r7c9 connected true
cage-9: cage r8c5-r8c6 connected true
cage-10: cage r9c4-r9c5-r9c6 connected true
cage-11: cage r8c1-r8c2 connected true
cage-12: cage r5c3-r6c3 connected true
kropki-1: kropki r5c7-r5c8 colour "white"
kropki-2: kropki r8c4-r8c5 colour "white"
kropki-3: kropki r7c2-r7c3 colour "black"
whispers-1: whispers r5c4-r4c5-r3c6-r2c7-r1c7-r1c8-r2c9-r3c9-r4c8-r4c7-r5c7-r5c6 gap 5
whispers-2: whispers r6c3-r7c2-r8c1-r9c1-r9c2-r8c2-r8c3 gap 5
whispers-3: whispers r2c7-r3c8-r3c9 gap 5
whispers-4: whispers r7c3-r6c3-r5c4-r5c5-r5c6-r6c7-r7c7-r8c7-r9c6-r9c5-r9c4-r8c3 gap 4
```

Normal Sudokuy rules apply.

GERMAN WHISPERS- Numbers on green lines (saw) are at least 5 apart from their neighbors on the line.

DUTCH WHISPERS- Numbers on the red line (log) are at least 4 apart from their neighbors on the line.

KILLER CAGES- Numbers in cages sum to 10.

KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are shown.

The oval on the saw handle does not affect the puzzle.
