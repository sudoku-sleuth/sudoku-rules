---
format: open-rules
title: Going Around Again
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/z4zq64wuv7
case: https://sudoku-sleuth.com/cases/going-around-again
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c4-r1c5-r1c6 total 9 connected true
cage-2: cage r4c9-r5c9-r6c9 total 9 connected true
cage-3: cage r4c1-r5c1-r6c1 total 20 connected true
cage-4: cage r9c4-r9c5-r9c6 total 9 connected true
cage-5: cage r7c8-r8c7-r8c8 total 12 connected true
cage-6: cage r2c2-r2c3-r3c2 total 17 connected true
cage-7: cage r5c3-r6c3-r6c4 total 16 connected true
cage-8: cage r4c6-r4c7-r5c7 total 10 connected true
thermo-1: thermo r4c1-r3c2-r2c3-r1c4
thermo-2: thermo r1c6-r2c7-r3c8-r4c9
thermo-3: thermo r6c9-r7c8-r8c7-r9c6
thermo-4: thermo r9c4-r8c3-r7c2-r6c1
thermo-5: thermo r5c3-r4c4-r3c5
thermo-6: thermo r5c7-r6c6-r7c5
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Thermometers: Digits on Thermos are strictly increasing from bulb to tip.
