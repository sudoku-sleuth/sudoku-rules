---
format: open-rules
title: Separated Chevrons
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/0692xe66py
case: https://sudoku-sleuth.com/cases/separated-chevrons
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c5=1
---

```rules
sudoku 9x9
cage-1: cage r1c2-r2c1-r2c2 total 7 connected true
cage-2: cage r2c3-r3c2-r3c3 total 16 connected true
cage-3: cage r3c4-r4c3-r4c4 total 10 connected true
cage-4: cage r6c7-r7c6-r7c7 total 11 connected true
cage-5: cage r4c5-r5c4-r5c5 total 15 connected true
cage-6: cage r5c6-r6c5-r6c6 total 14 connected true
cage-7: cage r7c8-r8c7-r8c8 total 19 connected true
cage-8: cage r8c9-r9c8-r9c9 total 20 connected true
cage-9: cage r4c2-r5c1-r5c2 total 16 connected true
cage-10: cage r1c5-r2c4-r2c5 total 17 connected true
cage-11: cage r5c3-r6c2-r6c3 total 18 connected true
cage-12: cage r2c6-r3c5-r3c6 total 14 connected true
cage-13: cage r6c4-r7c3-r7c4 total 16 connected true
cage-14: cage r3c7-r4c6-r4c7 total 21 connected true
cage-15: cage r7c5-r8c4-r8c5 total 16 connected true
cage-16: cage r4c8-r5c7-r5c8 total 18 connected true
cage-17: cage r8c6-r9c5-r9c6 total 10 connected true
cage-18: cage r5c9-r6c8-r6c9 total 16 connected true
cage-19: cage r7c2-r8c1-r8c2 total 17 connected true
cage-20: cage r8c3-r9c2-r9c3 total 18 connected true
cage-21: cage r1c8-r2c7-r2c8 total 10 connected true
cage-22: cage r2c9-r3c8-r3c9 total 17 connected true
negative relations [{"op":"difference","value":1}] except []
```

Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.

Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

Nonconsecutive: Digits in orthogonally adjacent cells cannot be consecutive.
