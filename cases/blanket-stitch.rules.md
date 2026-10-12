---
format: open-rules
title: Blanket Stitch
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/eys516nsf7
case: https://sudoku-sleuth.com/cases/blanket-stitch
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r6c2-r6c3 total 10 connected true
cage-2: cage r3c6-r3c7 total 12 connected true
cage-3: cage r1c3-r1c4 total 6 connected true
cage-4: cage r1c6-r1c7 total 11 connected true
cage-5: cage r7c1-r8c1 total 11 connected true
cage-6: cage r7c9-r8c9 total 11 connected true
cage-7: cage r6c7-r6c8 total 14 connected true
cage-8: cage r3c3-r3c4 total 13 connected true
cage-9: cage r7c4-r8c4 total 7 connected true
cage-10: cage r7c6-r8c6 total 8 connected true
thermo-1: thermo r4c2-r3c2-r3c3-r4c3-r4c4-r3c4
thermo-2: thermo r4c8-r3c8-r3c7-r4c7-r4c6-r3c6
thermo-3: thermo r7c4-r6c4-r6c3-r7c3-r7c2-r6c2
thermo-4: thermo r7c6-r6c6-r6c7-r7c7-r7c8-r6c8
thermo-5: thermo r1c3-r1c2-r1c1-r2c1
thermo-6: thermo r2c9-r1c9-r1c8-r1c7
thermo-7: thermo r9c7-r9c8-r9c9-r8c9
thermo-8: thermo r8c1-r9c1-r9c2-r9c3
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Thermometers: Digits on Thermos are strictly increasing from bulb to tip.
