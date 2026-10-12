---
format: open-rules
title: Heated Cages
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/rbdqwbqwr5
case: https://sudoku-sleuth.com/cases/heated-cages
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r8c8-r8c9-r9c8 total 9 connected true
cage-2: cage r8c1-r8c2-r9c2 total 12 connected true
cage-3: cage r1c8-r2c8-r2c9 total 13 connected true
cage-4: cage r1c2-r2c1-r2c2 total 10 connected true
cage-5: cage r1c3-r1c4 total 9 connected true
cage-6: cage r1c6-r1c7 total 9 connected true
cage-7: cage r9c3-r9c4 total 10 connected true
cage-8: cage r9c6-r9c7 total 10 connected true
cage-9: cage r6c1-r7c1 total 10 connected true
cage-10: cage r3c1-r4c1 total 10 connected true
cage-11: cage r3c9-r4c9 total 10 connected true
cage-12: cage r6c9-r7c9 total 9 connected true
cage-13: cage r6c6-r6c7 total 7 connected true
thermo-1: thermo r1c7-r1c8-r1c9-r2c9-r3c9
thermo-2: thermo r7c9-r8c9-r9c9-r9c8-r9c7
thermo-3: thermo r9c3-r9c2-r9c1-r8c1-r7c1
thermo-4: thermo r3c1-r2c1-r1c1-r1c2-r1c3
thermo-5: thermo r2c5-r3c5-r4c5
thermo-6: thermo r5c6-r5c7-r5c8
thermo-7: thermo r8c5-r7c5-r6c5
thermo-8: thermo r5c4-r5c3-r5c2
```

**Sudoku, Thermos, Cages**
- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
-Thermometers: Digits on Thermos are strictly increasing from bulb to tip.
- Cages: Digits add to the total in the top left corner of the cage, if given. Digits cannot repeat in cages.
