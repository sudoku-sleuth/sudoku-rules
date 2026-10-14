---
format: open-rules
title: Goalpost
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/6d09i2dkhy
case: https://sudoku-sleuth.com/cases/goalpost
library: https://rules.sudoku-sleuth.com/
status: read
exported: ee75d4f5a3ccbb8684bcd81bb3a94a39
---

```rules
sudoku 9x9
cage-1: cage r1c6-r1c7 total 10 connected true
cage-2: cage r9c7-r9c8 total 12 connected true
cage-3: cage r9c2-r9c3 total 11 connected true
cage-4: cage r1c3-r1c4 total 10 connected true
cage-5: cage r3c9-r4c9 total 11 connected true
cage-6: cage r5c2-r5c3 total 12 connected true
cage-7: cage r5c7-r5c8 total 10 connected true
cage-8: cage r5c5-r6c5 total 11 connected true
thermo-1: thermo r1c3-r2c3-r3c3-r4c3-r5c3-r5c4
thermo-2: thermo r5c6-r5c7-r4c7-r3c7-r2c7-r1c7
thermo-3: thermo r1c6-r1c5-r2c5-r3c5-r4c5-r5c5
thermo-4: thermo r9c1-r9c2-r8c2-r7c2-r6c2-r5c2
thermo-5: thermo r9c9-r9c8-r8c8-r7c8-r6c8-r5c8
```

**Sudoku, Thermometers, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermometers: Digits on thermometers are strictly increasing from bulb to tip.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
