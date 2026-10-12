---
format: open-rules
title: Pincers
setter: sujoyku
source: https://tinyurl.com/293rdacr
case: https://sudoku-sleuth.com/cases/pincers
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r1c3-r2c1-r3c1 total 20 connected true
cage-2: cage r2c2-r2c3-r2c4-r3c2-r4c2 total 20 connected true
cage-3: cage r4c4-r4c5-r5c4 total 8 connected true
cage-4: cage r7c4-r8c4-r9c4-r9c5 total 13 connected true
cage-5: cage r4c7-r4c8-r4c9-r5c9 total 15 connected true
cage-6: cage r2c6-r2c7-r2c8-r3c6 total 16 connected true
cage-7: cage r6c1-r6c2-r7c2-r8c2 total 16 connected true
cage-8: cage r6c5-r7c5 total 14 connected true
cage-9: cage r5c6-r5c7 total 14 connected true
diagonal-1: diagonal direction "main"
diagonal-2: diagonal direction "anti"
```

Normal sudoku rules apply. Digits in a cage do not repeat and sum to the clue in the top left. On the main diagonals digits do not repeat.
