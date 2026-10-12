---
format: open-rules
title: Symmetrically asymmetric
setter: sujoyku
source: https://tinyurl.com/uz7c7tbc
case: https://sudoku-sleuth.com/cases/symmetrically-asymmetric
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c1-r2c1-r3c1 total 11 connected true
cage-2: cage r7c9-r8c9-r9c9 total 10 connected true
cage-3: cage r4c2-r4c3-r4c4 total 12 connected true
cage-4: cage r6c6-r6c7-r6c8 total 18 connected true
cage-5: cage r2c2-r3c2-r3c3 total 15 connected true
cage-6: cage r7c7-r7c8-r8c8 total 15 connected true
little-killer-1: little-killer r9c2-r8c1 sum 6
little-killer-2: little-killer r9c6-r8c5-r7c4-r6c3-r5c2-r4c1 sum 18
little-killer-3: little-killer r1c8-r2c9 sum 7
little-killer-4: little-killer r1c6-r2c7-r3c8-r4c9 sum 8
little-killer-5: little-killer r1c4-r2c5-r3c6-r4c7-r5c8-r6c9 sum 16
little-killer-6: little-killer r9c4-r8c3-r7c2-r6c1 sum 7
```

Normal sudoku rules apply. Digits in a cage sum to the clue in the top left. Digits on a marked diagonal sum to the little killer clue outside the grid. (Digits may repeat on such a diagonal if allowed by other rules.)
