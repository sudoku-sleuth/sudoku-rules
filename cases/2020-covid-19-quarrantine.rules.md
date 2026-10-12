---
format: open-rules
title: 2020 COVID 19 Quarrantine
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/2020-covid-19-quarrantine
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2 total 10 connected true
cage-2: cage r2c4-r3c4 total 10 connected true
cage-3: cage r6c8-r7c8 total 10 connected true
cage-4: cage r5c1-r6c1 total 6 connected true
cage-5: cage r7c6-r8c6 total 15 connected true
cage-6: cage r2c5-r2c6 total 5 connected true
cage-7: cage r8c5-r9c5 total 5 connected true
cage-8: cage r5c3-r6c3 total 9 connected true
cage-9: cage r3c9-r4c9 total 7 connected true
whispers-1: whispers r1c1-r1c2-r1c3-r1c4-r2c4-r3c4-r4c4-r5c4-r5c3-r5c2-r5c1-r4c1-r3c1-r2c1 gap 5
whispers-2: whispers r1c1-r2c1 gap 5
whispers-3: whispers r9c3-r8c3-r7c3-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8-r7c8-r8c8-r9c8 gap 5
renban-1: renban r1c6-r2c5-r3c6-r4c7-r3c8-r2c8-r1c8
renban-2: renban r8c6-r7c6-r7c7-r7c8-r7c9-r6c9-r5c9-r4c9
renban-3: renban r4c7-r5c7-r6c7-r3c8-r4c9-r5c8
```

Normal Sudoku rules apply. German Whispers- Numbers on green lines are at least 5 apart from their neighbors on the line. Numbers may repeat on green lines. RENBAN- Numbers on two purple AND one orange line are each a set of non-repeating, consecutive numbers, in any order. Numbers in cages sum to the number in the top left corner of the cage. Letters and ovals are decorative, and do not affect the puzzle.
