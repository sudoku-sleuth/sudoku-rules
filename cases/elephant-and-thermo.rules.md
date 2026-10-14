---
format: open-rules
title: Elephant and Thermo
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/ks7ky8gsmm
case: https://sudoku-sleuth.com/cases/elephant-and-thermo
library: https://rules.sudoku-sleuth.com/
status: read
exported: 0d25931f7b15544f5234ba999349834c
---

```rules
sudoku 9x9
cage-1: cage r1c2-r1c3 total 10 connected true
cage-2: cage r1c7-r1c8 total 10 connected true
cage-3: cage r1c4-r2c4 total 10 connected true
cage-4: cage r1c6-r2c6 total 10 connected true
cage-5: cage r6c4-r6c5 total 10 connected true
cage-6: cage r7c5-r7c6 total 10 connected true
cage-7: cage r8c4-r8c5 total 10 connected true
cage-8: cage r9c5-r9c6 total 10 connected true
cage-9: cage r5c5-r5c6 total 10 connected true
cage-10: cage r4c4-r4c5 total 10 connected true
cage-11: cage r3c5-r3c6 total 10 connected true
cage-12: cage r5c3-r5c4 total 10 connected true
cage-13: cage r4c1-r4c2 total 10 connected true
cage-14: cage r6c2-r6c3 total 7 connected true
cage-15: cage r6c6-r6c7 total 6 connected true
cage-16: cage r2c9-r3c9 total 7 connected true
cage-17: cage r2c1-r3c1 total 5 connected true
cage-18: cage r5c7-r5c8 total 8 connected true
thermo-1: thermo r1c1-r1c2-r1c3-r2c3
thermo-2: thermo r1c9-r1c8-r1c7-r2c7
thermo-3: thermo r1c5-r2c5-r3c5-r4c5-r5c5
thermo-4: thermo r6c3-r7c3-r8c2-r9c1
thermo-5: thermo r6c7-r7c7-r8c8-r9c9
thermo-6: thermo r2c1-r3c2-r3c3
thermo-7: thermo r2c9-r3c8-r3c7
thermo-8: thermo r7c5-r8c5-r9c6
```

**Sudoku, Thermos, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermometers: Digits on Thermos are strictly increasing from bulb to tip.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
