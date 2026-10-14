---
format: open-rules
title: New Year's Resolution
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/new-year-s-resolution
library: https://rules.sudoku-sleuth.com/
status: read
exported: 5e511e1f8b799da8d0a48754b187def3
---

```rules
sudoku 9x9
cage-1: cage r1c5-r2c5 total 8 connected true
cage-2: cage r5c1-r5c2 total 11 connected true
cage-3: cage r5c7-r5c8 total 9 connected true
cage-4: cage r7c5-r8c5 total 7 connected true
cage-5: cage r6c4-r6c5 total 5 connected true
cage-6: cage r7c8-r7c9 total 14 connected true
cage-7: cage r1c1-r1c2 total 14 connected true
cage-8: cage r1c7-r1c8 total 6 connected true
cage-9: cage r7c1-r7c2 total 4 connected true
whispers-1: whispers r9c5-r8c5-r7c6-r7c7-r6c7-r5c8-r5c9 gap 5
whispers-2: whispers r5c8-r4c7-r3c7-r3c6-r2c5-r1c5 gap 5
whispers-3: whispers r2c5-r3c4-r3c3-r4c3-r5c2-r5c1 gap 5
whispers-4: whispers r5c2-r6c3-r7c3-r7c4-r8c5 gap 5
renban-1: renban r9c4-r8c3-r7c2-r6c1
renban-2: renban r1c6-r2c7-r3c8-r4c9
renban-3: renban r4c5-r5c6-r6c5-r5c4
renban-4: renban r8c9-r7c9-r7c8-r8c8-r9c7
renban-5: renban r1c2-r1c1-r2c1-r2c2-r2c3
```

Normal Sudoku rules apply. Numbers on the green line are at least 5 apart from their neighbors on the line. Numbers may repeat on the green line. Numbers on purple lines are a set of non-repeating, consecutive numbers, in any order. Numbers in cages sum to the number in the top left corner of the cage.
