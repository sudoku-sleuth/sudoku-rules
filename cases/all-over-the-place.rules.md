---
format: open-rules
title: All over the place
setter: sujoyku
source: https://tinyurl.com/3vrhatf2
case: https://sudoku-sleuth.com/cases/all-over-the-place
library: https://rules.sudoku-sleuth.com/
status: read
exported: f8f2c0e6a9943fe1d9f7f8c8a034561c
---

```rules
sudoku 9x9
cage-1: cage r1c1-r2c1-r2c2-r3c2 total 27 connected true
cage-2: cage r3c1-r4c1-r4c2-r5c2 total 27 connected true
cage-3: cage r8c3-r9c3-r9c4 total 9 connected true
cage-4: cage r5c3-r6c3-r7c1-r7c2-r7c3-r8c1-r9c1 total 38 connected true
cage-5: cage r2c6-r3c5-r3c6 total 10 connected true
cage-6: cage r3c4-r4c4-r4c5 total 10 connected true
cage-7: cage r1c7-r2c7-r2c8 total 9 connected true
cage-8: cage r3c8-r3c9-r4c8 total 9 connected true
cage-9: cage r3c7-r4c6-r4c7 total 20 connected true
cage-10: cage r5c7-r5c8-r6c7 total 20 connected true
cage-11: cage r7c9-r8c9-r9c8-r9c9 total 27 connected true
diagonal-1: diagonal direction "main"
diagonal-2: diagonal direction "anti"
```

Normal sudoku rules apply. Digits in a cage do not repeat and sum to the clue in the top left. On the main diagonals digits do not repeat.
