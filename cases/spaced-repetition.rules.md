---
format: open-rules
title: Spaced repetition
setter: sujoyku
source: https://tinyurl.com/5zj2j99k
case: https://sudoku-sleuth.com/cases/spaced-repetition
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r8c3-r9c3 total 14 connected true
cage-2: cage r7c1-r7c2 total 7 connected true
cage-3: cage r5c1-r6c1 total 7 connected true
cage-4: cage r3c1-r4c1 total 7 connected true
cage-5: cage r4c3-r5c3 total 5 connected true
cage-6: cage r1c3-r1c4 total 6 connected true
cage-7: cage r3c4-r3c5-r3c6 total 10 connected true
cage-8: cage r7c8-r8c8-r9c8 total 10 connected true
cage-9: cage r9c6-r9c7 total 14 connected true
cage-10: cage r5c7-r6c7 total 5 connected true
cage-11: cage r1c7-r2c7 total 6 connected true
cage-12: cage r3c8-r3c9 total 12 connected true
cage-13: cage r4c9-r5c9 total 12 connected true
cage-14: cage r6c9-r7c9 total 12 connected true
diagonal-1: diagonal direction "main"
diagonal-2: diagonal direction "anti"
```

Normal sudoku rules apply. Digits in a cage do not repeat and sum to the clue in the top left. On the main diagonals digits do not repeat.
