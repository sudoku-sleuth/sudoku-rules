---
format: open-rules
title: Colour One To Rule Them All
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/dj5ada6sxv
case: https://sudoku-sleuth.com/cases/colour-one-to-rule-them-all
library: https://rules.sudoku-sleuth.com/
status: read
givens: r3c3=5 r5c5=6 r6c9=7 r7c7=9 r9c6=3
---

```rules
sudoku 9x9
cage-1: cage r1c2-r2c1-r2c2 total 7 connected true
cage-2: cage r3c4-r4c3-r4c4 total 7 connected true
cage-3: cage r5c6-r6c5-r6c6 total 8 connected true
cage-4: cage r7c8-r8c7-r8c8 total 8 connected true
cage-5: cage r3c2-r4c1-r4c2 total 23 connected true
cage-6: cage r1c4-r2c3-r2c4 total 23 connected true
cage-7: cage r5c4-r6c3-r6c4 total 20 connected true
cage-8: cage r3c6-r4c5-r4c6 total 20 connected true
cage-9: cage r7c6-r8c5-r8c6 total 23 connected true
cage-10: cage r5c8-r6c7-r6c8 total 23 connected true
cage-11: cage r6c2-r7c1-r7c2 total 8 connected true
cage-12: cage r1c7-r2c6-r2c7 total 8 connected true
cage-13: cage r3c9-r4c8-r4c9 total 8 connected true
cage-14: cage r8c4-r9c3-r9c4 total 10 connected true
cage-15: cage r2c8-r3c7-r3c8 total 21 connected true
cage-16: cage r7c3-r8c2-r8c3 total 15 connected true
cage-17: cage r8c9-r9c8-r9c9 total 13 connected true
```

Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.

Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
