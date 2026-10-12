---
format: open-rules
title: Bumpers
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/9adl4u5iz4
case: https://sudoku-sleuth.com/cases/bumpers
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c4-r2c4 total 13 connected true
cage-2: cage r8c6-r9c6 total 13 connected true
cage-3: cage r6c1-r6c2 total 14 connected true
cage-4: cage r4c8-r4c9 total 14 connected true
cage-5: cage r7c8-r7c9-r8c9 total 8 connected true
cage-6: cage r1c8-r2c8-r2c9 total 12 connected true
cage-7: cage r8c1-r8c2-r9c2 total 17 connected true
cage-8: cage r2c1-r3c1-r3c2 total 11 connected true
cage-9: cage r4c4-r5c4 total 8 connected true
cage-10: cage r5c6-r6c6 total 8 connected true
cage-11: cage r8c5-r9c5 total 6 connected true
cage-12: cage r1c7-r2c7 total 13 connected true
cage-13: cage r8c3-r9c3 total 13 connected true
thermo-1: thermo r2c1-r1c2-r1c3-r1c4
thermo-2: thermo r2c4-r1c5-r1c6-r1c7
thermo-3: thermo r8c9-r9c8-r9c7-r9c6
thermo-4: thermo r8c6-r9c5-r9c4-r9c3
thermo-5: thermo r7c8-r6c9-r5c9-r4c9
thermo-6: thermo r3c2-r4c1-r5c1-r6c1
thermo-7: thermo r6c2-r7c1-r8c1
thermo-8: thermo r4c8-r3c9-r2c9
thermo-9: thermo r3c6-r3c5-r4c4
thermo-10: thermo r6c6-r7c5-r7c4
```

**Sudoku, Thermometers, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermometers: Digits on thermometers are strictly increasing from bulb to tip.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
