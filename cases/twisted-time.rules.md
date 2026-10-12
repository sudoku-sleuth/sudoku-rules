---
format: open-rules
title: Twisted Time
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/tty37k77t8
case: https://sudoku-sleuth.com/cases/twisted-time
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c5-r1c6 total 9 connected true
cage-2: cage r9c4-r9c5 total 12 connected true
thermo-1: thermo r2c1-r1c2-r1c3-r1c4-r1c5
thermo-2: thermo r2c5-r1c6-r1c7-r1c8-r1c9
thermo-3: thermo r8c9-r9c8-r9c7-r9c6-r9c5
thermo-4: thermo r8c5-r9c4-r9c3-r9c2
thermo-5: thermo r8c2-r7c1-r6c1-r5c1-r4c1-r3c1
thermo-6: thermo r2c8-r3c9-r4c9-r5c9-r6c9
thermo-7: thermo r6c7-r7c6-r7c5
thermo-8: thermo r4c2-r3c3-r3c4
thermo-9: thermo r5c7-r4c7-r3c6-r3c5
thermo-10: thermo r7c4-r7c3-r6c2-r5c2
thermo-11: thermo r6c3-r5c4-r4c4
```

**Sudoku, Thermometers, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermometers: Digits on thermometers are strictly increasing from bulb to tip.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
