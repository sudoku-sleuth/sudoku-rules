---
format: open-rules
title: Modular Maw
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/7uogjsirk8
case: https://sudoku-sleuth.com/cases/modular-maw
library: https://rules.sudoku-sleuth.com/
status: read
exported: 3301e3d26d824999b016b1b2fa08915e
---

```rules
sudoku 9x9
cage-1: cage r3c3-r4c3 total 3 connected true
cage-2: cage r3c7-r4c7 total 4 connected true
cage-3: cage r6c3-r7c3 total 17 connected true
cage-4: cage r6c7-r7c7 total 16 connected true
cage-5: cage r3c5-r4c5 total 5 connected true
cage-6: cage r6c5-r7c5 total 15 connected true
cage-7: cage r2c2-r3c1-r3c2 total 12 connected true
cage-8: cage r2c8-r3c8-r3c9 total 23 connected true
cage-9: cage r7c8-r7c9-r8c8 total 7 connected true
cage-10: cage r7c1-r7c2-r8c2 total 16 connected true
cage-11: cage r3c4-r4c4 total 17 connected true
cage-12: cage r6c6-r7c6 total 8 connected true
modular-1: modular r1c1-r2c2-r3c3-r2c4-r3c5-r2c6-r3c7-r2c8-r1c9
modular-2: modular r9c1-r8c2-r7c3-r8c4-r7c5-r8c6-r7c7-r8c8-r9c9
modular-3: modular r3c9-r4c8-r5c7-r6c8-r7c9
modular-4: modular r3c1-r4c2-r5c3-r6c2-r7c1
modular-5: modular r4c3-r3c4-r4c5-r3c6-r4c7
modular-6: modular r6c3-r7c4-r6c5-r7c6-r6c7
```

**Sudoku, Modular Lines, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Modular lines: Any set of three adjacent digits along a modular line has three different remainders when divided by 3.
- Cages: Digits cannot repeat within cages and must sum to the value shown in the upper left corner of the cage.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
