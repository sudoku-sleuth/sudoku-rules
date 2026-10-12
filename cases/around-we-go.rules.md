---
format: open-rules
title: Around We Go
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/qkulcg9odu
case: https://sudoku-sleuth.com/cases/around-we-go
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r9c4-r9c5-r9c6 total 11 connected true
cage-2: cage r1c4-r1c5-r1c6 total 24 connected true
cage-3: cage r4c1-r5c1-r6c1 total 18 connected true
cage-4: cage r4c9-r5c9-r6c9 total 14 connected true
cage-5: cage r1c1-r1c2-r2c1 total 7 connected true
cage-6: cage r1c8-r1c9-r2c9 total 10 connected true
cage-7: cage r5c5-r6c5-r7c5 total 17 connected true
thermo-1: thermo r4c1-r3c2-r2c3-r1c4
thermo-2: thermo r4c9-r3c8-r2c7-r1c6
thermo-3: thermo r6c9-r7c8-r8c7-r9c6
thermo-4: thermo r6c1-r7c2-r8c3-r9c4
thermo-5: thermo r3c3-r2c4-r2c5
thermo-6: thermo r5c8-r4c8-r3c7
thermo-7: thermo r5c2-r6c2-r7c3
thermo-8: thermo r7c7-r8c6-r8c5
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.

- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

- Thermometers: Digits on Thermos are strictly increasing from bulb to tip.
