---
format: open-rules
title: Lattice
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/7psyl3rbe9
case: https://sudoku-sleuth.com/cases/lattice
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r3c5-r4c5 total 14 connected true
cage-2: cage r1c1-r2c1-r3c1 total 15 connected true
cage-3: cage r1c9-r2c9-r3c9 total 21 connected true
cage-4: cage r9c1-r9c2-r9c3 total 17 connected true
cage-5: cage r9c7-r9c8-r9c9 total 15 connected true
cage-6: cage r5c4-r6c4 total 11 connected true
cage-7: cage r5c6-r6c6 total 11 connected true
thermo-1: thermo r5c5-r4c4-r3c3-r2c2-r1c1
thermo-2: thermo r5c5-r4c6-r3c7-r2c8-r1c9
thermo-3: thermo r5c5-r6c6-r7c7-r8c8-r9c9
thermo-4: thermo r5c5-r6c4-r7c3-r8c2-r9c1
thermo-5: thermo r5c5-r5c6-r5c7
thermo-6: thermo r5c5-r6c5
thermo-7: thermo r5c5-r5c4-r5c3
thermo-8: thermo r5c5-r4c5
thermo-9: thermo r5c1-r4c1-r3c1
thermo-10: thermo r5c1-r6c1-r7c1
thermo-11: thermo r5c1-r6c2
thermo-12: thermo r5c1-r4c2
thermo-13: thermo r5c1-r5c2
thermo-14: thermo r5c9-r4c9-r3c9
thermo-15: thermo r5c9-r6c9-r7c9
thermo-16: thermo r5c9-r6c8
thermo-17: thermo r5c9-r4c8
thermo-18: thermo r5c9-r5c8
thermo-19: thermo r1c5-r1c4-r1c3
thermo-20: thermo r1c5-r1c6-r1c7
thermo-21: thermo r1c5-r2c4
thermo-22: thermo r1c5-r2c6
thermo-23: thermo r9c5-r9c4-r9c3
thermo-24: thermo r9c5-r9c6-r9c7
thermo-25: thermo r9c5-r8c4
thermo-26: thermo r9c5-r8c6
thermo-27: thermo r1c5-r2c5-r3c5
thermo-28: thermo r9c5-r8c5-r7c5
```

**Standard Sudoku, Thermometers, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermometers: Digits on thermometers are strictly increasing from bulb to tip.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
