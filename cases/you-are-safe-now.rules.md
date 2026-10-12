---
format: open-rules
title: You Are Safe Now
setter: Will Power
source: https://sudokupad.app/wvfhybyntz
case: https://sudoku-sleuth.com/cases/you-are-safe-now
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c2-r1c3 total 12 connected true
cage-2: cage r1c5-r1c6 total 12 connected true
cage-3: cage r1c4-r2c4-r3c4 total 12 connected true
cage-4: cage r2c1-r2c2 total 8 connected true
cage-5: cage r4c2-r4c3 total 11 connected true
cage-6: cage r8c1-r8c2-r8c3 total 20 connected true
cage-7: cage r8c6-r8c7-r8c8 total 6 connected true
cage-8: cage r5c6-r5c7-r5c8 total 9 connected true
cage-9: cage r5c3-r5c4-r5c5 total 12 connected true
cage-10: cage r6c8-r6c9 total 13 connected true
whispers-1: whispers r5c9-r4c8-r3c7-r2c7-r1c6 gap 5
whispers-2: whispers r1c4-r2c4-r3c3-r3c4-r4c4 gap 5
whispers-3: whispers r5c3-r6c3-r7c4-r8c5-r8c6-r7c7-r8c7 gap 5
whispers-4: whispers r7c5-r6c4-r5c3-r4c4-r5c5-r4c6-r5c7-r6c6 gap 4
whispers-5: whispers r6c6-r7c5 gap 4
renban-1: renban r8c1-r8c2-r8c3-r9c4-r8c5
renban-2: renban r5c1-r5c2-r5c3-r5c4-r5c5-r6c6
renban-3: renban r8c6-r8c7-r7c8-r6c9-r7c9-r8c9-r9c8
```

Normal Sudoku rules apply. GERMAN WHISPERS- Numbers on green lines are at least 5 apart from their neighbors on the line. Numbers may repeat on green lines, if other rules allow. DUTCH WHISPERS- Numbers on the red line are at least 4 apart from their neighbors on the line. Numbers do not repeat on the red line. RENBAN- Numbers on purple lines are each a set of non-repeating, consecutive numbers, in any order. KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage.
