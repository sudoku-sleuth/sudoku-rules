---
format: open-rules
title: Passing Lane
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/ltiyqjzh4z
case: https://sudoku-sleuth.com/cases/passing-lane
library: https://rules.sudoku-sleuth.com/
status: read
exported: 27d3164870387a136323d09097dd4cbf
---

```rules
sudoku 9x9
cage-1: cage r5c3-r5c4 total 10 connected true
cage-2: cage r5c1-r5c2 total 11 connected true
cage-3: cage r8c8-r8c9-r9c8 total 14 connected true
cage-4: cage r4c1-r4c2 total 9 connected true
cage-5: cage r5c5-r5c6 total 11 connected true
cage-6: cage r4c6-r4c7 total 12 connected true
cage-7: cage r4c8-r5c8 total 13 connected true
cage-8: cage r7c7-r8c7 total 10 connected true
cage-9: cage r2c3-r2c4 total 12 connected true
cage-10: cage r2c2-r3c2 total 10 connected true
cage-11: cage r3c4-r4c4-r4c5 total 9 connected true
cage-12: cage r6c5-r6c6-r7c6 total 15 connected true
cage-13: cage r6c1-r6c2-r7c1 total 17 connected true
cage-14: cage r1c6-r2c6 total 9 connected true
cage-15: cage r8c6-r9c6 total 11 connected true
cage-16: cage r6c8-r6c9 total 11 connected true
modular-1: modular r3c2-r2c2-r2c3-r2c4-r3c4-r4c4-r5c4-r6c4-r6c3-r6c2-r5c2-r4c2 loop true
modular-2: modular r4c6-r5c6-r6c6-r7c6-r8c6-r8c7-r8c8-r7c8-r6c8-r5c8-r4c8-r4c7 loop true
modular-3: modular r8c1-r8c2-r8c3-r8c4-r8c5-r7c5-r6c5-r5c5-r4c5-r3c5-r2c5-r2c6-r2c7-r2c8-r2c9
```

**Sudoku, Modular Lines, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Modular lines: Any set of three adjacent digits along a modular line has three different remainders when divided by 3.
- Cages: Digits cannot repeat within cages and must sum to the value shown in the upper left corner of the cage.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
