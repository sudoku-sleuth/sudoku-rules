---
format: open-rules
title: Hidden keys
setter: sujoyku
source: https://tinyurl.com/5aenhz2n
case: https://sudoku-sleuth.com/cases/hidden-keys
library: https://rules.sudoku-sleuth.com/
status: read
exported: 54605062dd97e619c216646c1b0d76c4
---

```rules
sudoku 9x9
cage-1: cage r3c1-r4c1-r5c1-r6c1-r7c1 total 33 connected true
cage-2: cage r9c3-r9c4-r9c5-r9c6-r9c7 total 17 connected true
cage-3: cage r3c9-r4c9-r5c9-r6c9-r7c9 total 32 connected true
cage-4: cage r7c8-r8c8 total 15 connected true
cage-5: cage r2c2-r3c2 total 14 connected true
cage-6: cage r1c3-r1c4-r1c5-r1c6-r1c7 total 25 connected true
cage-7: cage r2c4-r2c5 total 6 connected true
cage-8: cage r2c6-r3c6 total 10 connected true
cage-9: cage r8c5-r8c6 total 11 connected true
cage-10: cage r7c4-r8c4 total 9 connected true
cage-11: cage r4c2-r4c3 total 10 connected true
cage-12: cage r4c7-r5c7 total 8 connected true
diagonal-1: diagonal direction "main"
diagonal-2: diagonal direction "anti"
```

Normal sudoku rules apply. Digits in a cage do not repeat and sum to the clue in the top left. On the marked diagonals digits do not repeat.
