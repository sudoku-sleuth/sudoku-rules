---
format: open-rules
title: Stickman Event (Ziplining)
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/stickman-event-ziplining
library: https://rules.sudoku-sleuth.com/
status: read
exported: 0d954f95c22214f3e2fe2a214462b5b8
---

```rules
sudoku 9x9
cage-1: cage r3c1-r3c2-r3c3 total 6 connected true
cage-2: cage r1c8-r2c8-r3c8 total 23 connected true
cage-3: cage r8c1-r8c2-r8c3 total 13 connected true
cage-4: cage r1c6-r2c6-r3c6 total 18 connected true
cage-5: cage r4c2-r4c3-r4c4 total 23 connected true
cage-6: cage r2c9-r3c9-r4c9 total 13 connected true
whispers-1: whispers r1c3-r2c4-r3c5-r4c6-r5c7-r6c8-r7c9 gap 5
whispers-2: whispers r9c5-r8c5-r7c5-r6c5-r5c5-r4c5-r3c5 gap 5
renban-1: renban r9c6-r9c7-r9c8-r9c9-r8c9
renban-2: renban r7c8-r8c8-r8c7-r8c6-r9c5-r8c4-r7c3-r7c4-r6c5
renban-3: renban r4c3-r5c3-r6c3
renban-4: renban r5c1-r5c2-r6c2-r6c1
little-killer-1: little-killer r1c3-r2c4-r3c5-r4c6-r5c7-r6c8-r7c9 sum 42
little-killer-2: little-killer r5c1-r6c2-r7c3-r8c4-r9c5 sum 13
```

Normal Sudoku rules apply. Numbers on green lines are at least 5 apart from their neighbors on the line. Numbers may repeat on green lines, if other rules allow. Numbers on purple lines are a set of non-repeating, consecutive numbers, in any order. Numbers outside the grid are the sum of the numbers on the indicated diagonal. Numbers in cages sum to the number in the top left corner of the cage.
