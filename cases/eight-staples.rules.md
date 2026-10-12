---
format: open-rules
title: Eight Staples
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/k5y0itmjdc
case: https://sudoku-sleuth.com/cases/eight-staples
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c2-r2c2 total 8 connected true
cage-2: cage r4c2-r5c2 total 8 connected true
cage-3: cage r7c2-r8c2 total 8 connected true
cage-4: cage r1c8-r2c8 total 8 connected true
cage-5: cage r4c8-r5c8 total 8 connected true
cage-6: cage r7c8-r8c8 total 8 connected true
cage-7: cage r3c2-r3c3 total 9 connected true
cage-8: cage r6c2-r6c3 total 11 connected true
cage-9: cage r9c2-r9c3 total 12 connected true
cage-10: cage r3c7-r3c8 total 10 connected true
cage-11: cage r6c7-r6c8 total 11 connected true
cage-12: cage r9c7-r9c8 total 12 connected true
cage-13: cage r1c5-r2c5 total 10 connected true
cage-14: cage r5c3-r5c4 total 9 connected true
cage-15: cage r5c6-r5c7 total 15 connected true
cage-16: cage r3c5-r4c5 total 10 connected true
cage-17: cage r7c5-r8c5-r9c5 total 8 connected true
cage-18: cage r1c6-r2c6 total 9 connected true
renban-1: renban r2c1-r1c2-r2c3-r3c2
renban-2: renban r5c1-r4c2-r5c3-r6c2
renban-3: renban r8c1-r7c2-r8c3-r9c2
renban-4: renban r8c4-r7c5-r8c6-r9c5
renban-5: renban r8c7-r7c8-r8c9-r9c8
renban-6: renban r5c7-r4c8-r5c9-r6c8
renban-7: renban r2c7-r1c8-r2c9-r3c8
renban-8: renban r2c4-r1c5-r2c6-r3c5
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Renban Lines: Digits along a Renban line form a non-repeating set of consecutive digits in an order to be determined by the solver.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
