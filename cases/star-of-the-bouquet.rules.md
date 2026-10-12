---
format: open-rules
title: Star of the Bouquet
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/star-of-the-bouquet
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c9-r2c9 total 13 connected true
cage-2: cage r9c8-r9c9 total 14 connected true
cage-3: cage r8c1-r9c1 total 15 connected true
cage-4: cage r1c1-r1c2 total 16 connected true
cage-5: cage r7c7-r7c8 total 12 connected true
cage-6: cage r7c3-r8c3 total 13 connected true
cage-7: cage r3c2-r3c3 total 11 connected true
cage-8: cage r2c7-r3c7 total 14 connected true
cage-9: cage r5c1-r5c2 total 10 connected true
cage-10: cage r6c4-r6c5 total 12 connected true
cage-11: cage r7c4-r8c4 total 10 connected true
cage-12: cage r1c7-r1c8 total 12 connected true
cage-13: cage r8c8-r8c9 total 4 connected true
whispers-1: whispers r8c6-r9c5-r8c4-r7c4-r7c3-r6c3-r6c2-r5c1-r4c2-r4c3-r3c3-r3c4-r2c4-r1c5-r2c6-r3c6-r3c7-r4c7-r4c8-r5c9-r6c8-r6c7-r7c7-r7c6 gap 4
whispers-2: whispers r8c6-r7c6 gap 4
renban-1: renban r7c4-r8c3-r8c2-r7c2-r6c3
renban-2: renban r6c7-r7c8-r8c8-r8c7-r7c6
renban-3: renban r3c6-r2c7-r2c8-r3c8-r4c7
renban-4: renban r3c4-r2c3-r2c2-r3c2-r4c3
renban-5: renban r5c4-r4c5-r5c6-r6c5
```

Normal Sudoku rules apply. Numbers on the red line are at least 4 apart from their neighbors on the line. Numbers on purple lines are each a set of non-repeating, consecutive numbers, in any order. Numbers in cages sum to the number in the top left corner of the cage.
