---
format: open-rules
title: Godseye
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/hfui1aml43
case: https://sudoku-sleuth.com/cases/godseye
library: https://rules.sudoku-sleuth.com/
status: read
exported: c8fdf8fd464136b267717a5ff90ca8cd
---

```rules
sudoku 9x9
cage-1: cage r5c1-r5c2 total 7 connected true
cage-2: cage r2c5-r3c5 total 8 connected true
cage-3: cage r5c8-r5c9 total 12 connected true
cage-4: cage r1c6-r2c6 total 7 connected true
cage-5: cage r8c4-r9c4 total 8 connected true
cage-6: cage r3c4-r4c4 total 8 connected true
cage-7: cage r6c6-r7c6 total 6 connected true
cage-8: cage r7c3-r7c4 total 17 connected true
cage-9: cage r3c6-r3c7 total 9 connected true
cage-10: cage r4c7-r4c8 total 9 connected true
cage-11: cage r6c2-r7c2 total 9 connected true
cage-12: cage r6c7-r6c8 total 9 connected true
cage-13: cage r7c5-r8c5 total 10 connected true
modular-1: modular r5c1-r4c2-r3c3-r2c4-r1c5-r2c6-r3c7-r4c8-r5c9-r6c8-r7c7-r8c6-r9c5-r8c4-r7c3-r6c2
modular-2: modular r2c5-r3c6-r4c7-r5c8-r6c7-r7c6-r8c5-r7c4-r6c3-r5c2-r4c3-r3c4
modular-3: modular r4c4-r3c5-r4c6-r5c7
modular-4: modular r5c3-r6c4-r7c5-r6c6
modular-5: modular r6c1-r7c2-r8c3-r9c4
modular-6: modular r4c1-r3c2-r2c3-r1c4
modular-7: modular r1c6-r2c7-r3c8
modular-8: modular r9c6-r8c7
modular-9: modular r7c8-r6c9
```

**Sudoku, Modular Lines, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Modular lines: Any set of three adjacent digits along a modular line has three different remainders when divided by 3.
- Cages: Digits add to the total in the top left corner of the cage.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
