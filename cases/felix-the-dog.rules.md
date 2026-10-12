---
format: open-rules
title: Felix the Dog
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/uj5da31kuj
case: https://sudoku-sleuth.com/cases/felix-the-dog
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r2c4-r3c2-r3c3-r3c4 total 11 connected true
cage-2: cage r2c7-r3c7-r4c7-r4c8 total 28 connected true
cage-3: cage r7c6-r7c7-r7c8-r8c6 total 12 connected true
cage-4: cage r6c2-r6c3-r7c3-r8c3 total 29 connected true
cage-5: cage r3c5-r4c3-r4c4-r4c5 total 12 connected true
cage-6: cage r3c6-r4c6-r5c6-r5c7 total 27 connected true
cage-7: cage r6c5-r6c6-r6c7-r7c5 total 12 connected true
cage-8: cage r5c3-r5c4-r6c4-r7c4 total 28 connected true
cage-9: cage r5c1-r5c2-r6c1 total 8 connected true
cage-10: cage r8c5-r9c5-r9c6 total 19 connected true
cage-11: cage r4c9-r5c8-r5c9 total 9 connected true
cage-12: cage r1c4-r1c5-r2c5 total 14 connected true
cage-13: cage r1c6-r1c7-r2c6 total 16 connected true
cage-14: cage r6c8-r6c9-r7c9 total 16 connected true
cage-15: cage r8c4-r9c3-r9c4 total 11 connected true
cage-16: cage r3c1-r4c1-r4c2 total 21 connected true
cage-17: cage r1c3-r2c2-r2c3 total 13 connected true
cage-18: cage r2c8-r3c8-r3c9 total 15 connected true
cage-19: cage r8c7-r8c8-r9c7 total 13 connected true
cage-20: cage r7c1-r7c2-r8c2 total 14 connected true
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
