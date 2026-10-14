---
format: open-rules
title: Longhorns
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/omy8want1m
case: https://sudoku-sleuth.com/cases/longhorns
library: https://rules.sudoku-sleuth.com/
status: read
exported: 7ffa2f1a7ac71f6463377a96a79a538e
---

```rules
sudoku 9x9
cage-1: cage r3c2-r3c3-r3c4 total 12 connected true
cage-2: cage r3c6-r3c7-r3c8 total 14 connected true
cage-3: cage r5c4-r6c4-r7c4 total 10 connected true
cage-4: cage r5c6-r6c6-r7c6 total 16 connected true
cage-5: cage r8c7-r8c8-r8c9 total 24 connected true
cage-6: cage r8c1-r8c2-r8c3 total 7 connected true
cage-7: cage r4c3-r5c3-r6c3 total 9 connected true
cage-8: cage r4c7-r5c7-r6c7 total 17 connected true
cage-9: cage r1c6-r1c7 total 8 connected true
cage-10: cage r1c3-r1c4 total 13 connected true
cage-11: cage r5c9-r6c9-r7c9 total 8 connected true
cage-12: cage r3c1-r4c1-r5c1 total 16 connected true
cage-13: cage r6c2-r7c2 total 16 connected true
slow-thermo-1: slow-thermo r9c4-r8c3-r7c4-r6c3-r5c4-r4c3-r3c4-r2c5-r3c6-r4c7-r5c6-r6c7-r7c6-r8c7-r9c6
slow-thermo-2: slow-thermo r9c4-r8c3-r7c4-r6c3-r5c4-r4c3-r3c4-r2c5-r3c6-r4c7-r3c8-r2c9-r1c9
slow-thermo-3: slow-thermo r9c4-r8c3-r7c4-r6c3-r5c4-r4c3-r3c2-r2c1-r1c1
```

**Sudoku, Slow Thermometers, Cages

-Standard 9x9 sudoku: The digits 1 through 9 appear in every row, column, and box without repetition.
- Slow Thermometers: Digits along thermometers can repeat but cannot decrease as you move away from the bulb.
- Cages: Digits add to the total in the top left corner of the cage. Digits cannot repeat in cages.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html
