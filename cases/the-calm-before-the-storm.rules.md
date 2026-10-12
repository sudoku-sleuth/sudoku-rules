---
format: open-rules
title: The calm before the storm
setter: sujoyku
source: https://tinyurl.com/5h986fw5
case: https://sudoku-sleuth.com/cases/the-calm-before-the-storm
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2 total 7 connected true
cage-2: cage r1c4-r1c5 total 8 connected true
cage-3: cage r1c7-r1c8 total 9 connected true
cage-4: cage r1c9-r2c9 total 8 connected true
cage-5: cage r4c9-r5c9 total 9 connected true
cage-6: cage r7c9-r8c9 total 10 connected true
cage-7: cage r9c8-r9c9 total 10 connected true
cage-8: cage r9c5-r9c6 total 11 connected true
cage-9: cage r9c2-r9c3 total 12 connected true
cage-10: cage r8c1-r9c1 total 11 connected true
cage-11: cage r5c1-r6c1 total 12 connected true
cage-12: cage r2c1-r3c1 total 13 connected true
cage-13: cage r5c2-r6c2-r6c3 total 22 connected true
cage-14: cage r2c4-r2c5-r3c4 total 15 connected true
cage-15: cage r7c6-r8c5-r8c6 total 17 connected true
cage-16: cage r3c5-r4c5 total 16 connected true
cage-17: cage r6c5-r7c5 total 8 connected true
diagonal-1: diagonal direction "main"
diagonal-2: diagonal direction "anti"
```

Normal sudoku rules apply, i.e. each row, column and 3x3 region has to contain the digits from 1 to 9 once each. On the main diagonals digits do not repeat. Digits in a cage do not repeat and sum to the clue in the top left.
