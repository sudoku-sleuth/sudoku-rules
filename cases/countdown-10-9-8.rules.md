---
format: open-rules
title: Countdown 10, 9, 8 ...
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/2d6c6zf430
case: https://sudoku-sleuth.com/cases/countdown-10-9-8
library: https://rules.sudoku-sleuth.com/
status: read
exported: 825bddd8546054b7e1d977b4ef529627
---

```rules
sudoku 9x9
cage-1: cage r2c3-r2c4 total 8 connected true
cage-2: cage r5c1-r5c2 total 8 connected true
cage-3: cage r5c3-r5c4 total 8 connected true
cage-4: cage r8c4-r8c5 total 8 connected true
cage-5: cage r8c2-r8c3 total 8 connected true
cage-6: cage r8c7-r9c7-r9c8 total 8 connected true
cage-7: cage r2c5-r2c6 total 8 connected true
cage-8: cage r3c7-r3c8 total 8 connected true
thermo-1: thermo r8c2-r7c2-r6c3-r5c3
thermo-2: thermo r2c3-r3c3-r4c2-r5c2
thermo-3: thermo r2c7-r3c7-r4c8-r5c8
thermo-4: thermo r8c8-r7c8-r6c7-r5c7
thermo-5: thermo r2c4-r3c4-r4c5-r5c5
thermo-6: thermo r8c5-r7c5-r6c6-r5c6
thermo-7: thermo r5c4-r6c4-r7c3-r8c3
thermo-8: thermo r5c9-r4c9-r3c8-r2c8
thermo-9: thermo r5c1-r4c1-r3c2-r2c2
```

**Standard Sudoku, Thermometer, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermometers: Digits on Thermos are strictly increasing from bulb to tip.
- Cages: Digits inside cages sum to value shown in the upper left corner of the cage.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
