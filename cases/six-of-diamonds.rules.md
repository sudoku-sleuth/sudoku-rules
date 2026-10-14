---
format: open-rules
title: Six of Diamonds
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/8r4difg9r1
case: https://sudoku-sleuth.com/cases/six-of-diamonds
library: https://rules.sudoku-sleuth.com/
status: read
exported: da192b80da9329219929fcabbb90da24
---

```rules
sudoku 9x9
cage-1: cage r3c2-r3c3-r4c2-r4c3 total 11 connected true
cage-2: cage r6c2-r6c3-r7c2-r7c3 total 28 connected true
cage-3: cage r3c7-r3c8-r4c7-r4c8 total 12 connected true
cage-4: cage r6c7-r6c8-r7c7-r7c8 total 29 connected true
cage-5: cage r2c4-r2c5-r2c6 total 13 connected true
cage-6: cage r8c8-r8c9 total 16 connected true
cage-7: cage r8c1-r8c2 total 10 connected true
cage-8: cage r2c1-r2c2 total 6 connected true
cage-9: cage r2c8-r2c9 total 9 connected true
cage-10: cage r4c4-r5c4 total 9 connected true
cage-11: cage r5c6-r6c6 total 10 connected true
cage-12: cage r7c4-r8c4 total 12 connected true
cage-13: cage r8c6-r9c6 total 12 connected true
renban-1: renban r2c2-r1c3-r2c4-r3c3
renban-2: renban r2c6-r1c7-r2c8-r3c7
renban-3: renban r8c2-r7c3-r8c4-r9c3
renban-4: renban r8c6-r7c7-r8c8-r9c7
renban-5: renban r5c2-r4c3-r5c4-r6c3
renban-6: renban r4c7-r5c6-r6c7-r5c8
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Renbans: Digits along a Renban form a nonrepeating set of consecutive digits in some order.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
