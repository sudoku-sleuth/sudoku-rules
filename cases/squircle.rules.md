---
format: open-rules
title: Squircle
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/nwbezslwqo
case: https://sudoku-sleuth.com/cases/squircle
library: https://rules.sudoku-sleuth.com/
status: read
exported: f3b63403a6165c50cde95e86e65fac83
---

```rules
sudoku 9x9
cage-1: cage r5c2-r6c2 total 10 connected true
cage-2: cage r2c4-r2c5 total 10 connected true
cage-3: cage r4c8-r5c8 total 10 connected true
cage-4: cage r8c5-r8c6 total 10 connected true
cage-5: cage r7c8-r8c8 total 10 connected true
cage-6: cage r2c2-r3c2 total 13 connected true
cage-7: cage r2c7-r2c8 total 6 connected true
cage-8: cage r8c2-r8c3 total 13 connected true
cage-9: cage r6c3-r6c4 total 9 connected true
cage-10: cage r4c6-r4c7 total 9 connected true
cage-11: cage r8c1-r9c1 total 8 connected true
cage-12: cage r1c1-r1c2 total 8 connected true
cage-13: cage r1c9-r2c9 total 6 connected true
cage-14: cage r9c8-r9c9 total 13 connected true
cage-15: cage r9c3-r9c4 total 13 connected true
cage-16: cage r1c6-r1c7 total 9 connected true
thermo-1: thermo r8c5-r8c4-r8c3-r7c2-r6c2
thermo-2: thermo r5c2-r4c2-r3c2-r2c3-r2c4
thermo-3: thermo r2c5-r2c6-r2c7-r3c8-r4c8
thermo-4: thermo r5c8-r6c8-r7c8-r8c7-r8c6
thermo-5: thermo r5c3-r6c3-r7c3-r7c4
thermo-6: thermo r3c5-r3c4-r3c3-r4c3
thermo-7: thermo r6c7-r7c7-r7c6-r7c5
thermo-8: thermo r5c7-r4c7-r3c7-r3c6
```

-Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Thermometers: Digits on Thermos are strictly increasing from bulb to tip.
