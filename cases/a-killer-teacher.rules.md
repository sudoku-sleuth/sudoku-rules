---
format: open-rules
title: A Killer Teacher
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/6k4339rm6i
case: https://sudoku-sleuth.com/cases/a-killer-teacher
library: https://rules.sudoku-sleuth.com/
status: read
exported: 3bb1ee10837e6923c34f9fa47ca37345
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2 total 4 connected true
cage-2: cage r1c9-r2c9 total 5 connected true
cage-3: cage r9c8-r9c9 total 4 connected true
cage-4: cage r8c8-r8c9 total 6 connected true
cage-5: cage r8c1-r9c1-r9c2 total 8 connected true
cage-6: cage r1c3-r1c4 total 7 connected true
cage-7: cage r2c1-r2c2 total 8 connected true
cage-8: cage r1c8-r2c8 total 9 connected true
cage-9: cage r7c8-r7c9 total 15 connected true
cage-10: cage r8c3-r9c3 total 15 connected true
cage-11: cage r4c1-r4c2 total 7 connected true
cage-12: cage r2c6-r3c6 total 14 connected true
cage-13: cage r6c7-r6c8 total 13 connected true
cage-14: cage r7c4-r8c4 total 8 connected true
cage-15: cage r6c5-r6c6 total 5 connected true
cage-16: cage r5c4-r6c4 total 10 connected true
cage-17: cage r4c4-r4c5 total 17 connected true
cage-18: cage r4c6-r5c6 total 8 connected true
cage-19: cage r6c1-r7c1 total 13 connected true
cage-20: cage r8c5-r9c5 total 9 connected true
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
