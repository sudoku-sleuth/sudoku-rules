---
format: open-rules
title: Hashtag Thermometers
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/bh4f01dzrn
case: https://sudoku-sleuth.com/cases/hashtag-thermometers
library: https://rules.sudoku-sleuth.com/
status: read
exported: 89cc4037b32d3c1a9a12b637a637eaa7
---

```rules
sudoku 9x9
cage-1: cage r6c3-r7c3-r7c4 total 22 connected true
cage-2: cage r3c6-r3c7-r4c7 total 22 connected true
cage-3: cage r3c3-r3c4-r4c3 total 14 connected true
cage-4: cage r6c7-r7c6-r7c7 total 13 connected true
cage-5: cage r1c1-r1c2-r2c1 total 20 connected true
cage-6: cage r1c8-r1c9-r2c9 total 20 connected true
cage-7: cage r8c1-r9c1-r9c2 total 15 connected true
cage-8: cage r8c9-r9c8-r9c9 total 18 connected true
cage-9: cage r5c3-r5c4 total 9 connected true
cage-10: cage r3c5-r4c5 total 9 connected true
cage-11: cage r6c5-r7c5 total 10 connected true
cage-12: cage r5c6-r5c7 total 10 connected true
cage-13: cage r1c6-r2c6 total 6 connected true
cage-14: cage r8c4-r9c4 total 12 connected true
thermo-1: thermo r3c1-r3c2-r3c3-r2c3-r1c3
thermo-2: thermo r1c7-r2c7-r3c7-r3c8-r3c9
thermo-3: thermo r7c9-r7c8-r7c7-r8c7-r9c7
thermo-4: thermo r9c3-r8c3-r7c3-r7c2-r7c1
thermo-5: thermo r4c3-r5c3-r6c3
thermo-6: thermo r3c4-r3c5-r3c6
thermo-7: thermo r7c6-r7c5-r7c4
thermo-8: thermo r6c7-r5c7-r4c7
```

- Normal sudoku rules apply.
- Digits along thermometers must strictly increase from the bulb (grey circle) to the tip.
- Within cages, digits cannot repeat and must sum to the value shown in the upper left corner of the cage.
