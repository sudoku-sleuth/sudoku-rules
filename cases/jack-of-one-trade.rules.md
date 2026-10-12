---
format: open-rules
title: Jack of One Trade
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/0bngsczpib
case: https://sudoku-sleuth.com/cases/jack-of-one-trade
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r2c3-r2c4-r3c4 total 6 connected true
cage-2: cage r2c6-r2c7-r3c6 total 7 connected true
cage-3: cage r7c6-r7c7-r8c6 total 24 connected true
cage-4: cage r7c3-r7c4-r8c4 total 23 connected true
cage-5: cage r5c6-r5c7-r5c8 total 7 connected true
cage-6: cage r5c2-r5c3-r5c4 total 15 connected true
cage-7: cage r1c1-r1c2-r2c1 total 12 connected true
cage-8: cage r8c9-r9c8-r9c9 total 18 connected true
cage-9: cage r8c1-r8c2-r9c2 total 11 connected true
cage-10: cage r3c1-r4c1 total 13 connected true
cage-11: cage r6c5-r7c5 total 10 connected true
cage-12: cage r3c5-r4c5 total 9 connected true
cage-13: cage r6c1-r7c1 total 7 connected true
cage-14: cage r6c9-r7c9 total 10 connected true
cage-15: cage r1c8-r2c8-r2c9 total 22 connected true
cage-16: cage r3c9-r4c9 total 5 connected true
anti-knight
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Anti-knight: Cells that are a chess knight’s move apart cannot contain the same digit.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
