---
format: open-rules
title: Convection Oven
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/p5m25v9dzm
case: https://sudoku-sleuth.com/cases/convection-oven
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r8c4-r9c4 total 17 connected true
cage-2: cage r1c5-r1c6 total 3 connected true
cage-3: cage r6c6-r6c7-r7c7 total 12 connected true
cage-4: cage r6c3-r6c4-r7c3 total 11 connected true
cage-5: cage r3c3-r4c3-r4c4 total 12 connected true
cage-6: cage r3c7-r4c6-r4c7 total 19 connected true
cage-7: cage r8c1-r8c2-r9c1 total 10 connected true
cage-8: cage r8c8-r8c9-r9c9 total 10 connected true
cage-9: cage r1c1-r1c2-r2c2 total 13 connected true
cage-10: cage r1c8-r1c9-r2c8 total 19 connected true
cage-11: cage r5c4-r5c5-r5c6 total 10 connected true
cage-12: cage r5c9-r6c9 total 15 connected true
cage-13: cage r4c1-r5c1 total 12 connected true
thermo-1: thermo r9c1-r8c2-r7c3-r6c4
thermo-2: thermo r1c9-r2c8-r3c7-r4c6
thermo-3: thermo r1c1-r2c2-r3c3-r4c4
thermo-4: thermo r9c9-r8c8-r7c7-r6c6
```

- Normal sudoku rules apply.
- Thermometers: Digits along Thermos must strictly increase from bulb to tip.
- Cages: Digits within cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
