---
format: open-rules
title: LifeIsLike a Box of Chocolates
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/lifeislike-a-box-of-chocolates
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r1c3 total 23 connected true
cage-2: cage r4c1-r4c2-r4c3 total 10 connected true
cage-3: cage r5c9-r6c9 total 8 connected true
cage-4: cage r2c4-r2c5-r3c4-r3c5 total 14 connected true
cage-5: cage r7c3-r8c3-r9c3 total 24 connected true
cage-6: cage r5c2-r6c2 total 15 connected true
cage-7: cage r1c6-r1c7-r1c8-r1c9 total 10 connected true
cage-8: cage r3c9-r4c9 total 17 connected true
cage-9: cage r3c7-r4c7 total 14 connected true
cage-10: cage r6c4-r6c5-r6c6 total 18 connected true
cage-11: cage r8c8-r9c8 total 9 connected true
cage-12: cage r5c4-r5c5 total 6 connected true
cage-13: cage r8c5-r9c5 total 10 connected true
whispers-1: whispers r4c9-r5c9-r6c9-r7c9-r8c9 gap 4
whispers-2: whispers r8c5-r7c5 gap 4
whispers-3: whispers r7c9-r7c8 gap 4
whispers-4: whispers r4c9-r4c8 gap 4
whispers-5: whispers r5c9-r5c8 gap 4
whispers-6: whispers r7c5-r7c4-r7c3 gap 4
whispers-7: whispers r4c2-r4c1-r5c1 gap 4
whispers-8: whispers r4c4-r4c3-r4c2 gap 4
whispers-9: whispers r6c5-r5c5 gap 4
whispers-10: whispers r4c6-r4c7 gap 4
renban-1: renban r2c6-r2c7-r3c7-r3c6
renban-2: renban r2c3-r2c2-r3c2-r3c3
renban-3: renban r4c7-r5c6-r6c8-r5c8-r4c8-r5c7
renban-4: renban r8c1-r8c2-r8c3-r9c3-r7c3-r7c2-r7c1-r9c1
renban-5: renban r9c9-r8c8-r7c8-r6c7-r7c6-r8c6-r9c6
renban-6: renban r5c4-r4c4-r4c5-r4c6-r5c6-r5c5
renban-7: renban r6c3-r5c3-r4c2-r5c1-r6c1-r6c2-r5c2
```

Normal Sudoku rules apply. RENBAN (people and box of chocolates)- Numbers on purple and light blue lines are each a set of non-repeating consecutive numbers, in any order. DUTCH WHISPERS (bench)- Numbers on red lines are at least 4 apart from their neighbors on the line. KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage.
