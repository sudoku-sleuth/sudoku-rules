---
format: open-rules
title: Follow The Purple Brick Road
setter: Will Power
source: https://sudokupad.app/fz5swqmlug
case: https://sudoku-sleuth.com/cases/follow-the-purple-brick-road
library: https://rules.sudoku-sleuth.com/
status: read
exported: 421f9605248ea5f138002a300c0c93f4
---

```rules
sudoku 9x9
kropki-1: kropki r3c7-r3c8 black
kropki-2: kropki r7c7-r7c8 black
kropki-3: kropki r8c5-r8c6 black
kropki-4: kropki r7c3-r8c3 black
kropki-5: kropki r2c3-r3c3 black
kropki-6: kropki r4c6-r5c6 black
kropki-7: kropki r5c5-r5c6 black
renban-1: renban r2c7-r2c6-r2c5-r2c4-r2c3
renban-2: renban r3c3-r3c2-r4c2-r5c2-r6c2-r7c2-r7c3
renban-3: renban r8c3-r8c4-r8c5
renban-4: renban r8c6-r8c7-r7c7
renban-5: renban r3c8-r4c8-r5c8-r6c8-r7c8
renban-6: renban r4c5-r4c4-r5c4-r6c4-r6c5
```

Normal Sudoku rules apply. 

RENBAN LINES(+)- Numbers on purple lines are each a set of non-repeating, consecutive numbers, IN ORDER.

KROPKI PAIRS- Numbers with a white dot between them are in a ratio of 2:1. Not all possible dots are given.
