---
format: open-rules
title: Six Degrees
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/g1pzc2fiwk
case: https://sudoku-sleuth.com/cases/six-degrees
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r4c9-r5c9 total 6 connected true
cage-2: cage r7c3-r8c3 total 6 connected true
cage-3: cage r9c5-r9c6 total 6 connected true
cage-4: cage r7c8-r8c8 total 6 connected true
cage-5: cage r1c7-r2c7 total 6 connected true
cage-6: cage r4c4-r5c4 total 6 connected true
cage-7: cage r3c5-r3c6 total 6 connected true
thermo-1: thermo r4c9-r3c8-r4c7-r3c6-r4c5
thermo-2: thermo r5c5-r4c4-r5c3-r4c2-r5c1
thermo-3: thermo r3c5-r2c4-r3c3-r2c2-r3c1
thermo-4: thermo r7c5-r6c4-r7c3-r6c2-r7c1
thermo-5: thermo r6c9-r5c8-r6c7-r5c6-r6c5
thermo-6: thermo r2c9-r1c8-r2c7-r1c6-r2c5
thermo-7: thermo r9c5-r8c4-r9c3-r8c2-r9c1
thermo-8: thermo r8c9-r7c8-r8c7-r7c6-r8c5
```

**Sudoku, Thermometers, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermometers: Digits on thermometers are strictly increasing from bulb to tip.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
