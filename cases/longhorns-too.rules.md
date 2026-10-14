---
format: open-rules
title: Longhorns Too
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/8ckz5n4dhf
case: https://sudoku-sleuth.com/cases/longhorns-too
library: https://rules.sudoku-sleuth.com/
status: read
exported: 4c5e368d5b65c92af9a0fcbcd6c87016
---

```rules
sudoku 9x9
cage-1: cage r2c1-r3c1 total 15 connected true
cage-2: cage r3c2-r3c3-r3c4 total 15 connected true
cage-3: cage r3c6-r3c7-r3c8 total 6 connected true
cage-4: cage r2c9-r3c9 total 15 connected true
cage-5: cage r4c2-r5c1-r5c2 total 14 connected true
cage-6: cage r4c4-r4c5 total 9 connected true
cage-7: cage r5c4-r5c5-r5c6 total 12 connected true
cage-8: cage r4c8-r5c8-r5c9 total 15 connected true
cage-9: cage r6c1-r7c1 total 8 connected true
cage-10: cage r6c9-r7c9 total 9 connected true
cage-11: cage r7c4-r7c5-r7c6 total 13 connected true
cage-12: cage r8c1-r9c1-r9c2 total 8 connected true
cage-13: cage r8c9-r9c8-r9c9 total 15 connected true
cage-14: cage r9c4-r9c5-r9c6 total 14 connected true
slow-thermo-1: slow-thermo r2c5-r3c6-r4c7-r5c6-r6c7-r7c6-r8c7-r9c6
slow-thermo-2: slow-thermo r2c5-r3c4-r4c3-r5c4-r6c3-r7c4-r8c3-r9c4
slow-thermo-3: slow-thermo r2c5-r3c6-r4c7-r3c8-r2c9-r1c9
slow-thermo-4: slow-thermo r2c5-r3c4-r4c3-r3c2-r2c1-r1c1
```

**Sudoku, Slow Thermometers, Cages**

-Standard 9x9 sudoku: The digits 1 through 9 appear in every row, column, and box without repetition.
- Slow Thermometers: Digits along thermometers can repeat but cannot decrease as you move away from the bulb.
- Cages: Digits add to the total in the top left corner of the cage. Digits cannot repeat in cages.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html
