---
format: open-rules
title: Look Into My Eye
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/tl1lphowzx
case: https://sudoku-sleuth.com/cases/look-into-my-eye
library: https://rules.sudoku-sleuth.com/
status: read
exported: a6002e1b4e77eb5eee3e13f57529f87d
---

```rules
sudoku 9x9
cage-1: cage r5c1-r5c2-r5c3 total 6 connected true
cage-2: cage r4c4-r4c5-r4c6 total 9 connected true
cage-3: cage r6c7-r6c8-r6c9 total 7 connected true
cage-4: cage r3c9-r4c9 total 8 connected true
cage-5: cage r9c6-r9c7 total 13 connected true
cage-6: cage r6c1-r7c1 total 12 connected true
cage-7: cage r1c3-r1c4 total 11 connected true
cage-8: cage r7c4-r8c4 total 9 connected true
cage-9: cage r2c6-r3c6 total 13 connected true
modular-1: modular r5c5-r4c4-r3c5-r4c6-r5c7-r6c6-r7c5-r6c4-r5c3-r4c2-r3c3-r2c4-r1c5-r2c6-r3c7-r4c8-r5c9-r6c8-r7c7-r8c6-r9c5-r8c4-r7c3-r6c2-r5c1
modular-2: modular r6c1-r7c1-r8c2-r9c3-r9c4
modular-3: modular r1c6-r1c7-r2c8-r3c9-r4c9
modular-4: modular r1c4-r1c3-r2c2-r3c1
modular-5: modular r9c6-r9c7-r8c8-r7c9-r6c9
```

**Sudoku, Modular Lines, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Modular lines: Any set of three adjacent digits along a modular line has three different remainders when divided by 3.
- Cages: Digits cannot repeat within cages and must sum to the value shown in the upper left corner of the cage.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
