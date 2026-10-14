---
format: open-rules
title: Photo Finish
setter: Will Power
source: https://sudokupad.app/fc6yl91b5q
case: https://sudoku-sleuth.com/cases/photo-finish
library: https://rules.sudoku-sleuth.com/
status: read
exported: 20bcb165a5d823a39a3d3138517fc034
---

```rules
sudoku 9x9
cage-1: cage r5c2-r5c3-r6c1-r6c2-r6c3-r7c3-r7c4-r8c4-r9c4 total 62 connected true
cage-2: cage r4c6-r5c6 total 11 connected true
cage-3: cage r1c5-r1c6-r1c7-r2c6-r2c7 total 37 connected true
cage-4: cage r6c8-r6c9-r7c7-r7c8-r7c9-r8c7-r8c9-r9c7 total 27 connected true
kropki-1: kropki r8c1-r8c2 white
kropki-2: kropki r8c2-r8c3 white
kropki-3: kropki r9c2-r9c3 white
kropki-4: kropki r9c6-r9c7 white
whispers-1: whispers r2c7-r3c7-r3c8-r2c8 gap 5
whispers-2: whispers r2c7-r2c8 gap 5
whispers-3: whispers r5c9-r5c8-r4c7-r3c6-r4c5-r5c4-r6c3-r6c4-r6c5-r6c6-r6c7-r7c6-r8c5-r9c6 gap 5
renban-1: renban r1c5-r2c5-r2c4-r1c4
renban-2: renban r4c5-r3c4-r2c3-r3c2-r4c1-r5c1
```

Normal Sudoku rules apply. GERMAN WHISPERS- Numbers on green lines (close jockey) are at least 5 apart from their neighbors on the line. RENBAN LINES- Numbers on purple lines (far jockey) are each a set of non-repeating consecutive numbers, in any order. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Not all possible dots are shown. KILLER+ CONSECUTIVE REGIONS- Numbers in regions sum to the number in the top left cell in the region. Numbers in regions each form a consecutive set, in any order. However, NUMBERS MAY REPEAT IN REGIONS, if other rules allow. Gray lines (close horse) have no effect on the puzzle.
