---
format: open-rules
title: Wolf Spider
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/cpbvn51482
case: https://sudoku-sleuth.com/cases/wolf-spider
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c8-r2c8 total 7 connected true
cage-2: cage r8c2-r9c2 total 10 connected true
cage-3: cage r8c8-r9c8 total 9 connected true
cage-4: cage r1c2-r2c2 total 12 connected true
thermo-1: thermo r5c3-r4c2-r3c1-r2c2-r1c3
thermo-2: thermo r5c3-r6c2-r7c1-r8c2-r9c3
thermo-3: thermo r5c7-r4c8-r3c9-r2c8-r1c7
thermo-4: thermo r5c7-r6c8-r7c9-r8c8-r9c7
thermo-5: thermo r3c5-r4c4-r3c3-r2c4
thermo-6: thermo r3c5-r4c6-r3c7-r2c6
thermo-7: thermo r7c5-r6c4-r7c3-r8c4
thermo-8: thermo r7c5-r6c6-r7c7-r8c6
thermo-9: thermo r5c4-r4c5-r5c6-r6c5
thermo-10: thermo r2c1-r1c2-r1c1
thermo-11: thermo r2c9-r1c8-r1c9
thermo-12: thermo r9c8-r8c9-r9c9
thermo-13: thermo r9c2-r8c1
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermometers: Digits on Thermos are strictly increasing from bulb to tip.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
