---
format: open-rules
title: Figure Skating
setter: Will Power
source: https://sudokupad.app/mghfjibbk8
case: https://sudoku-sleuth.com/cases/figure-skating
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r8c1-r8c2 total 14 connected true
cage-2: cage r8c8-r9c8 total 15 connected true
cage-3: cage r5c7-r5c8 total 15 connected true
cage-4: cage r5c4-r6c4 total 13 connected true
cage-5: cage r1c3-r1c4 total 14 connected true
cage-6: cage r2c2-r3c2 total 15 connected true
cage-7: cage r1c7-r2c7 total 6 connected true
cage-8: cage r2c3-r3c3 total 13 connected true
cage-9: cage r5c1-r5c2 total 14 connected true
cage-10: cage r1c5-r1c6 total 13 connected true
anti-king
whispers-1: whispers r9c6-r9c7-r9c8-r9c9 gap 4
whispers-2: whispers r9c4-r9c5-r8c5-r7c5-r6c5-r5c5-r4c5 gap 4
whispers-3: whispers r6c5-r5c6-r4c7-r3c8-r2c8-r1c8-r1c9 gap 4
whispers-4: whispers r4c7-r4c6-r4c5-r4c4-r4c3 gap 4
whispers-5: whispers r2c6-r2c5-r3c4-r4c3 gap 4
whispers-6: whispers r7c2-r6c3-r5c3-r4c3 gap 4
whispers-7: whispers r3c1-r3c2-r4c2-r4c1 gap 4
whispers-8: whispers r3c1-r4c1 gap 4
whispers-9: whispers r3c3-r3c2 gap 4
```

Normal Sudoku rules apply. ANTI-KING- Cells a Chess King's move apart cannot have the same number. DUTCH WHISPERS- Numbers on red lines are at least 4 apart from their neighbors on the line. The number 5 does not appear on red lines. KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage.
