---
format: open-rules
title: Modular Portal
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/mful6lluje
case: https://sudoku-sleuth.com/cases/modular-portal
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r6c1-r7c1 total 5 connected true
cage-2: cage r3c1-r4c1 total 15 connected true
cage-3: cage r1c3-r2c3 total 10 connected true
cage-4: cage r1c7-r2c7 total 8 connected true
cage-5: cage r6c9-r7c9 total 10 connected true
cage-6: cage r3c9-r4c9 total 10 connected true
cage-7: cage r2c4-r3c4 total 10 connected true
cage-8: cage r7c6-r8c6 total 11 connected true
cage-9: cage r7c4-r8c4 total 12 connected true
cage-10: cage r2c6-r3c6 total 7 connected true
cage-11: cage r8c8-r8c9 total 8 connected true
cage-12: cage r8c1-r8c2 total 9 connected true
cage-13: cage r5c7-r5c8 total 9 connected true
cage-14: cage r5c2-r5c3 total 10 connected true
modular-1: modular r4c1-r3c1-r2c2-r1c3-r1c4-r2c4-r2c3
modular-2: modular r6c1-r7c1-r8c2-r9c3-r9c4-r8c4-r8c3
modular-3: modular r6c9-r7c9-r8c8-r9c7-r9c6-r8c6-r8c7
modular-4: modular r4c9-r3c9-r2c8-r1c7-r1c6-r2c6-r2c7
modular-5: modular r3c4-r4c3-r5c3-r6c3-r7c4
modular-6: modular r7c6-r6c7-r5c7-r4c7-r3c6
```

**Sudoku, Modular Lines, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Modular lines: Any set of three adjacent digits along a modular line has three different remainders when divided by 3.
- Cages: Digits in cages must sum to the value shown in the upper left corner of the cage.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
