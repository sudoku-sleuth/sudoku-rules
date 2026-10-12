---
format: open-rules
title: Angry Patch
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/m106a4v0yr
case: https://sudoku-sleuth.com/cases/angry-patch
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r2c3-r3c3 total 6 connected true
cage-2: cage r2c7-r3c7 total 6 connected true
cage-3: cage r2c5-r3c5-r4c5 total 10 connected true
cage-4: cage r4c4-r5c4 total 5 connected true
cage-5: cage r4c6-r5c6 total 9 connected true
cage-6: cage r6c5-r7c5 total 11 connected true
cage-7: cage r9c4-r9c5-r9c6 total 12 connected true
cage-8: cage r8c1-r9c1-r9c2 total 15 connected true
cage-9: cage r1c8-r1c9-r2c9 total 15 connected true
cage-10: cage r1c1-r1c2-r2c1 total 16 connected true
cage-11: cage r8c9-r9c8-r9c9 total 15 connected true
cage-12: cage r7c2-r7c3 total 6 connected true
cage-13: cage r7c7-r7c8 total 5 connected true
modular-1: modular r8c1-r7c2-r6c1-r5c2-r4c1-r3c2-r2c1
modular-2: modular r1c2-r2c3-r1c4-r2c5-r1c6-r2c7-r1c8
modular-3: modular r9c2-r8c3-r9c4-r8c5-r9c6-r8c7-r9c8
modular-4: modular r8c9-r7c8-r6c9-r5c8-r4c9-r3c8-r2c9
modular-5: modular r7c3-r6c4-r7c5-r6c6-r7c7
modular-6: modular r3c3-r4c4-r3c5-r4c6-r3c7
modular-7: modular r4c3-r5c4-r6c5-r5c6-r4c7
```

**Sudoku, Modular Lines, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Modular lines: Any set of three adjacent digits along a modular line has three different remainders when divided by 3.
- Cages: Digits inside a cage must sum to the value shown in the upper left corner of the cage.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
