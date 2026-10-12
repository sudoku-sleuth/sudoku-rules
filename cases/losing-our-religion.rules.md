---
format: open-rules
title: Losing Our Religion
setter: FullDeck and Missing a Few Cards
source: ""
case: https://sudoku-sleuth.com/cases/losing-our-religion
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c9=3
---

```rules
sudoku 9x9
cage-1: cage r3c3-r3c4-r4c3 total 6 connected true
cage-2: cage r3c6-r3c7-r4c7 total 7 connected true
cage-3: cage r6c7-r7c6-r7c7 total 6 connected true
cage-4: cage r6c3-r7c3-r7c4 total 8 connected true
cage-5: cage r1c8-r1c9-r2c9 total 6 connected true
cage-6: cage r8c9-r9c8-r9c9 total 7 connected true
cage-7: cage r1c1-r1c2-r2c1 total 8 connected true
cage-8: cage r8c1-r9c1-r9c2 total 6 connected true
cage-9: cage r3c5-r4c5 total 8 connected true
cage-10: cage r5c6-r5c7 total 9 connected true
cage-11: cage r6c5-r7c5 total 8 connected true
cage-12: cage r5c3-r5c4 total 13 connected true
cage-13: cage r7c2-r8c2-r8c3 total 18 connected true
cage-14: cage r2c7-r2c8-r3c8 total 20 connected true
cage-15: cage r5c1-r6c1 total 14 connected true
cage-16: cage r4c9-r5c9 total 15 connected true
cage-17: cage r9c4-r9c5 total 12 connected true
cage-18: cage r1c5-r1c6 total 14 connected true
```

Normal sudoku rules: every row, column, and box must contain a complete set of the digits 1-9.

Normal killer cages: Digits in cages cannot repeat and must sum to the total shown in the upper left corner of the cage.
