---
format: open-rules
title: Ten-Ten
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/baaf7mxxg6
case: https://sudoku-sleuth.com/cases/ten-ten
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c2-r1c3 total 10 connected true
cage-2: cage r1c7-r1c8 total 10 connected true
cage-3: cage r1c4-r2c4 total 10 connected true
cage-4: cage r1c6-r2c6 total 10 connected true
cage-5: cage r4c2-r4c3 total 10 connected true
cage-6: cage r2c8-r3c8 total 10 connected true
cage-7: cage r9c1-r9c2 total 10 connected true
cage-8: cage r9c7-r9c8 total 10 connected true
cage-9: cage r6c7-r6c8 total 10 connected true
cage-10: cage r6c4-r6c5 total 10 connected true
thermo-1: thermo r1c1-r1c2-r1c3-r2c3
thermo-2: thermo r1c9-r1c8-r1c7-r2c7
thermo-3: thermo r1c5-r2c5-r3c5-r4c5-r5c5
thermo-4: thermo r4c1-r5c1-r6c2-r6c3
thermo-5: thermo r4c9-r5c9-r6c8-r6c7
thermo-6: thermo r9c3-r9c2-r8c1-r7c1
thermo-7: thermo r9c7-r9c8-r8c9-r7c9
thermo-8: thermo r7c3-r7c4-r8c4
thermo-9: thermo r7c7-r7c6-r8c6
thermo-10: thermo r9c5-r8c5-r7c5
```

**Standard Sudoku, Cages, Thermometers**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Thermometers: Digits along Thermos strictly increase from bulb to tip.
