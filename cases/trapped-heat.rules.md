---
format: open-rules
title: Trapped Heat
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/248w6iceag
case: https://sudoku-sleuth.com/cases/trapped-heat
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r3c2-r3c3-r4c2 total 11 connected true
cage-2: cage r6c8-r7c7-r7c8 total 11 connected true
cage-3: cage r7c2-r7c3-r8c3 total 10 connected true
cage-4: cage r2c7-r3c7-r3c8 total 12 connected true
cage-5: cage r6c5-r6c6-r7c6 total 11 connected true
cage-6: cage r3c4-r4c4-r4c5 total 13 connected true
cage-7: cage r1c6-r1c7 total 7 connected true
cage-8: cage r9c3-r9c4 total 8 connected true
thermo-1: thermo r1c2-r1c1-r2c1-r3c1-r4c1-r4c2
thermo-2: thermo r9c8-r9c9-r8c9-r7c9-r6c9-r6c8
thermo-3: thermo r7c4-r7c3-r6c3-r5c3
thermo-4: thermo r3c6-r3c7-r4c7-r5c7
thermo-5: thermo r9c1-r8c1-r7c1
thermo-6: thermo r1c9-r2c9-r3c9
thermo-7: thermo r8c5-r8c6-r7c6
thermo-8: thermo r2c5-r2c4-r3c4
```

- Normal sudoku rules apply.
- Thermometers: Digits along Thermos must strictly increase from bulb to tip.
- Cages: Digits within cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
