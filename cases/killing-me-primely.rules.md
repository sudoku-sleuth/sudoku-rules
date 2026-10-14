---
format: open-rules
title: Killing Me Primely
setter: FullDeck and Missing a Few Cards
source: ""
case: https://sudoku-sleuth.com/cases/killing-me-primely
library: https://rules.sudoku-sleuth.com/
status: read
givens: r5c5=4
exported: 03ecbd82eb08116328cdb80553476e4e
---

```rules
sudoku 9x9
cage-1: cage r1c1-r2c1-r3c1 total 17 connected true
cage-2: cage r1c4-r1c5-r2c4 total 17 connected true
cage-3: cage r2c7-r2c8-r3c7 total 17 connected true
cage-4: cage r4c4-r5c4-r6c4 total 17 connected true
cage-5: cage r5c1-r6c1-r6c2 total 17 connected true
cage-6: cage r4c7-r4c8-r5c7 total 17 connected true
cage-7: cage r8c1-r8c2-r9c2 total 17 connected true
cage-8: cage r7c9-r8c8-r8c9 total 17 connected true
cage-9: cage r7c5-r8c5-r9c5 total 17 connected true
little-killer-1: little-killer r1c1-r2c2-r3c3-r4c4-r5c5-r6c6-r7c7-r8c8-r9c9 sum 67
little-killer-2: little-killer r1c9-r2c8-r3c7-r4c6-r5c5-r6c4-r7c3-r8c2-r9c1 sum 67
little-killer-3: little-killer r5c9-r6c8-r7c7-r8c6-r9c5 sum 43
little-killer-4: little-killer r1c5-r2c6-r3c7-r4c8-r5c9 sum 31
little-killer-5: little-killer r1c5-r2c4-r3c3-r4c2-r5c1 sum 31
little-killer-6: little-killer r1c7-r2c6-r3c5-r4c4-r5c3-r6c2-r7c1 sum 47
little-killer-7: little-killer r1c3-r2c4-r3c5-r4c6-r5c7-r6c8-r7c9 sum 47
```

Standard sudoku rules apply, including killer and little killer constraints. (One of the little killer clues is there for aesthetic purposes; it's still true but not necessary! Can you identify which one?)
