---
format: open-rules
title: Relax in the Sauna
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/mjh4odd01g
case: https://sudoku-sleuth.com/cases/relax-in-the-sauna
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r1c3 total 8 connected true
cage-2: cage r1c9-r2c9-r3c9 total 9 connected true
cage-3: cage r9c7-r9c8 total 13 connected true
thermo-1: thermo r1c1-r1c2-r1c3
thermo-2: thermo r1c5-r1c6-r1c7-r1c8-r2c8
thermo-3: thermo r1c9-r2c9-r3c9
thermo-4: thermo r9c8-r9c9-r8c9-r7c9-r6c9-r5c9
thermo-5: thermo r9c6-r9c5-r9c4-r9c3-r9c2-r9c1
thermo-6: thermo r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5
thermo-7: thermo r3c1-r4c1-r5c1-r6c1-r7c1
thermo-8: thermo r4c2-r4c3-r4c4
thermo-9: thermo r4c8-r4c7-r4c6
thermo-10: thermo r8c2-r7c2-r6c2-r6c3
thermo-11: thermo r5c6-r6c6-r7c6
```

- Normal sudoku rules apply.
- Digits along thermometers must strictly increase from bulb to tip.
- Digits in cages cannot repeat and must sum to the total shown in the upper left corner of the cage.
