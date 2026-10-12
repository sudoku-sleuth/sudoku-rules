---
format: open-rules
title: Nanotube Material
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/nanotube-material
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r5c1-r5c2 total 5 connected true
cage-2: cage r5c6-r5c7 total 5 connected true
cage-3: cage r2c8-r2c9 total 5 connected true
cage-4: cage r6c5-r7c5 total 15 connected true
cage-5: cage r3c1-r3c2 total 15 connected true
cage-6: cage r4c4-r4c5 total 5 connected true
cage-7: cage r8c5-r9c5 total 9 connected true
cage-8: cage r6c6-r6c7 total 13 connected true
cage-9: cage r1c2-r2c2 total 12 connected true
cage-10: cage r8c2-r9c2 total 7 connected true
cage-11: cage r9c7-r9c8-r9c9 total 8 connected true
cage-12: cage r5c8-r6c8 total 10 connected true
cage-13: cage r3c8-r3c9 total 15 connected true
cage-14: cage r1c6-r2c6 total 14 connected true
whispers-1: whispers r2c8-r3c9-r4c8-r5c9-r6c8-r7c9-r8c8 gap 4
whispers-2: whispers r2c7-r3c6-r4c7-r5c6-r6c7-r7c6-r8c7 gap 4
whispers-3: whispers r8c7-r9c6 gap 4
whispers-4: whispers r3c5-r4c4-r5c5-r6c4-r7c5-r8c4-r9c5 gap 4
whispers-5: whispers r4c3-r5c2-r6c3-r7c2-r8c3-r9c2 gap 4
whispers-6: whispers r7c2-r7c1 gap 4
whispers-7: whispers r9c2-r9c1 gap 4
whispers-8: whispers r4c3-r4c4 gap 4
whispers-9: whispers r6c3-r6c4 gap 4
whispers-10: whispers r8c3-r8c4 gap 4
whispers-11: whispers r3c5-r3c6 gap 4
whispers-12: whispers r5c5-r5c6 gap 4
whispers-13: whispers r7c5-r7c6 gap 4
whispers-14: whispers r9c5-r9c6 gap 4
whispers-15: whispers r2c7-r2c8 gap 4
whispers-16: whispers r4c7-r4c8 gap 4
whispers-17: whispers r6c7-r6c8 gap 4
whispers-18: whispers r8c7-r8c8 gap 4
```

Normal Sudoku rules apply. Dutch Whispers Line- Numbers on red lines are at least 4 apart from their neighbors on the line. Numbers in cages sum to the number in the top left corner of the cage.
