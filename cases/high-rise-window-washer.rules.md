---
format: open-rules
title: High Rise Window Washer
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/high-rise-window-washer
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c6=8 r4c4=1 r9c2=1 r9c5=2
---

```rules
sudoku 9x9
cage r4c8-r5c8 total 7 connected true
whispers-1: whispers r4c6-r3c6-r2c6-r1c6-r1c5 gap 5
whispers-2: whispers r1c6-r1c7 gap 5
whispers-3: whispers r9c2-r9c3-r9c4-r9c5-r9c6 gap 4
whispers-4: whispers r9c6-r9c7-r9c8-r8c8-r8c7-r8c6 gap 4
whispers-5: whispers r8c6-r9c6 gap 4
renban-1: renban r3c4-r4c4-r4c5-r3c5
renban-2: renban r7c4-r8c5-r9c5-r8c4-r9c3-r6c4
renban-3: renban r4c6-r5c5-r5c4-r5c3-r4c2
renban-4: renban r1c2-r2c2-r3c2
renban-5: renban r5c2-r6c2-r7c2-r8c2-r9c2
renban-6: renban r5c8-r6c8-r7c8-r8c8
renban-7: renban r4c8-r3c8-r2c8
```

Normal Sudoku rules apply. Numbers on the green line are at least 5 apart from their neighbors on the line. Numbers do not repeat on the green line. Numbers on the red line are at least 4 apart from their neighbors on the line. Numbers may repeat on the red line. Numbers on purple lines are each a set of non-repeating, consecutive numbers, in any order. Numbers in the cage sum to the number in the top left corner of the cage.
