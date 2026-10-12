---
format: open-rules
title: Here We Meet Again
setter: sujoyku
source: https://sudokupad.app/n97ru1nh1v
case: https://sudoku-sleuth.com/cases/here-we-meet-again
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c1-r2c1 total 7 connected true
cage-2: cage r7c1-r8c1-r9c1 total 10 connected true
cage-3: cage r9c2-r9c3 total 8 connected true
cage-4: cage r6c3-r7c3-r7c4 total 9 connected true
cage-5: cage r3c2-r4c2-r5c2 total 20 connected true
cage-6: cage r8c5-r8c6-r8c7 total 20 connected true
cage-7: cage r7c9-r8c9 total 15 connected true
cage-8: cage r1c2-r1c3 total 15 connected true
cage-9: cage r1c8-r1c9-r2c9-r3c9 total 28 connected true
cage-10: cage r1c5-r1c6 total 11 connected true
cage-11: cage r3c3-r3c4-r4c3 total 8 connected true
cage-12: cage r5c3-r5c4 total 11 connected true
cage-13: cage r3c6-r3c7-r4c7 total 12 connected true
cage-14: cage r6c7-r7c6-r7c7 total 13 connected true
cage-15: cage r6c5-r7c5 total 12 connected true
cage-16: cage r5c6-r5c7 total 10 connected true
cage-17: cage r3c5-r4c5 total 9 connected true
```

- Normal sudoku rules apply, i.e. each row, column and 3x3 region has to contain the digits from 1 to 9 once each.

- Killer cages: Digits in a cage do not repeat and must sum to the clue in the top left.
