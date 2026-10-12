---
format: open-rules
title: Crazy Nines and Others
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/iyyf5goc7g
case: https://sudoku-sleuth.com/cases/crazy-nines-and-others
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r3c2-r3c3-r3c4 total 9 connected true
cage-2: cage r2c7-r3c7-r4c7 total 9 connected true
cage-3: cage r7c6-r7c7-r7c8 total 9 connected true
cage-4: cage r6c3-r7c3-r8c3 total 9 connected true
cage-5: cage r2c6-r3c6-r4c6 total 9 connected true
cage-6: cage r6c4-r7c4-r8c4 total 9 connected true
cage-7: cage r6c6-r6c7-r6c8 total 9 connected true
cage-8: cage r4c2-r4c3-r4c4 total 9 connected true
cage-9: cage r1c5-r2c5 total 9 connected true
cage-10: cage r8c5-r9c5 total 9 connected true
cage-11: cage r5c8-r5c9-r6c9 total 9 connected true
cage-12: cage r5c2-r5c3 total 9 connected true
cage-13: cage r1c9-r2c9 total 9 connected true
cage-14: cage r8c1-r8c2-r9c1 total 9 connected true
cage-15: cage r1c1-r2c1-r3c1 total 9 connected true
cage-16: cage r1c2-r2c2 total 15 connected true
cage-17: cage r7c9-r8c9 total 14 connected true
cage-18: cage r6c1-r6c2 total 16 connected true
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
