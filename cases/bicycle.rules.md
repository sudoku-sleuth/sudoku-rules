---
format: open-rules
title: Bicycle
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/bicycle
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r7c2-r7c3 total 10 connected true
cage-2: cage r3c8-r4c8 total 10 connected true
cage-3: cage r6c7-r7c7 total 10 connected true
cage-4: cage r9c8-r9c9 total 10 connected true
cage-5: cage r5c8-r5c9 total 10 connected true
cage-6: cage r2c7-r2c8 total 10 connected true
cage-7: cage r2c4-r2c5 total 10 connected true
cage-8: cage r5c5-r6c5 total 10 connected true
cage-9: cage r4c7-r5c7 total 3 connected true
cage-10: cage r1c8-r1c9 total 10 connected true
cage-11: cage r3c2-r3c3-r4c2 total 10 connected true
cage-12: cage r5c1-r6c1 total 10 connected true
whispers-1: whispers r7c4-r7c3-r7c2-r7c1-r6c2-r5c3 gap 5
whispers-2: whispers r4c8-r4c7-r4c6-r4c5-r4c4-r4c3 gap 5
whispers-3: whispers r4c8-r5c9-r6c9 gap 5
whispers-4: whispers r4c3-r5c3-r6c4 gap 5
whispers-5: whispers r4c8-r3c8 gap 5
whispers-6: whispers r4c8-r5c7-r6c6-r6c5 gap 5
renban-1: renban r1c7-r2c7-r2c8-r1c8-r3c6-r3c7-r3c8-r1c6
renban-2: renban r2c6-r2c5-r2c4-r3c3-r4c4-r5c5-r6c5-r7c5
renban-3: renban r9c9-r9c8-r8c7-r7c7-r6c7-r5c8-r5c9
```

Christmas gift from childhood #3. Normal Sudoku rules apply. Numbers on green lines are at least 5 apart from their neighbors on the line. Numbers may repeat on green lines. Numbers on purple lines are non-repeating sets of consecutive numbers, in any order. The gray line (back tire) has no effect on the puzzle. Numbers in cages sum to the number in the top left corner of the cage. The two cage values that are difficult to see are both 10.
