---
format: open-rules
title: Office Floor Plan
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/office-floor-plan
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c9=5 r3c6=5 r6c4=5 r7c7=5
---

```rules
sudoku 9x9
cage-1: cage r1c6-r2c6 total 10 connected true
cage-2: cage r2c3-r2c4 total 14 connected true
cage-3: cage r8c1-r9c1 total 6 connected true
cage-4: cage r4c5-r4c6 total 8 connected true
cage-5: cage r7c2-r8c2 total 12 connected true
cage-6: cage r2c9-r3c9 total 11 connected true
cage-7: cage r3c2-r4c2 total 9 connected true
whispers-1: whispers r9c1-r8c1-r7c1-r6c1-r5c1-r4c1-r3c1-r2c1 gap 4
whispers-2: whispers r9c9-r9c8-r9c7-r9c6-r9c5-r9c4-r9c3-r9c2 gap 4
whispers-3: whispers r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9 gap 4
whispers-4: whispers r4c1-r4c2 gap 4
whispers-5: whispers r6c1-r6c2-r5c2-r5c3-r6c3 gap 4
whispers-6: whispers r9c4-r8c4-r8c3-r8c2-r7c2 gap 4
whispers-7: whispers r7c2-r7c3 gap 4
whispers-8: whispers r4c4-r5c4 gap 4
whispers-9: whispers r2c4-r2c3 gap 4
whispers-10: whispers r2c7-r2c6-r1c6 gap 4
whispers-11: whispers r2c8-r3c8 gap 4
whispers-12: whispers r2c8-r2c9 gap 4
whispers-13: whispers r9c7-r8c7-r8c6 gap 4
whispers-14: whispers r6c8-r6c7 gap 4
whispers-15: whispers r4c7-r5c7 gap 4
whispers-16: whispers r5c6-r6c6 gap 4
whispers-17: whispers r7c8-r8c8 gap 4
whispers-18: whispers r4c3-r3c3 gap 4
whispers-19: whispers r1c4-r2c4 gap 4
whispers-20: whispers r4c3-r4c4-r4c5 gap 4
whispers-21: whispers r6c8-r7c8 gap 4
whispers-22: whispers r7c5-r7c6 gap 4
whispers-23: whispers r4c7-r4c6 gap 4
whispers-24: whispers r2c4-r3c4 gap 4
whispers-25: whispers r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8 gap 4
whispers-26: whispers r4c7-r4c8-r4c9 gap 4
whispers-27: whispers r4c5-r4c6 gap 4
whispers-28: whispers r5c5-r6c5-r7c5-r8c5-r9c5 gap 4
```

Normal Sudoku rules apply. DUTCH WHISPERS- Numbers on red lines are at least 4 apart from their neighbors on the line. Numbers may repeat on lines, if other rules allow. KILLER- Numbers in cages sum to the number in the top left corner of the cage.
