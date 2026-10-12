---
format: open-rules
title: Cornering a Killer
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/aualpb4fki
case: https://sudoku-sleuth.com/cases/cornering-a-killer
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r2c3-r3c2-r3c3 total 7 connected true
cage-2: cage r3c6-r3c7-r4c6 total 8 connected true
cage-3: cage r6c7-r7c6-r7c7 total 9 connected true
cage-4: cage r6c3-r6c4-r7c3 total 8 connected true
cage-5: cage r8c1-r9c1-r9c2 total 6 connected true
cage-6: cage r1c1-r1c2-r2c1 total 15 connected true
cage-7: cage r5c1-r5c2 total 5 connected true
cage-8: cage r1c5-r1c6-r2c6 total 8 connected true
cage-9: cage r5c8-r5c9 total 5 connected true
cage-10: cage r4c7-r4c8-r4c9 total 10 connected true
cage-11: cage r8c6-r9c5-r9c6 total 20 connected true
cage-12: cage r4c3-r5c3 total 14 connected true
cage-13: cage r4c5-r5c5-r5c6 total 20 connected true
cage-14: cage r7c2-r8c2-r8c3 total 20 connected true
cage-15: cage r8c9-r9c8-r9c9 total 20 connected true
```

Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.

Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
