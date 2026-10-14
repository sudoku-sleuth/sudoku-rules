---
format: open-rules
title: Reflected Heat
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/2ayfsai71i
case: https://sudoku-sleuth.com/cases/reflected-heat
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c1=6 r9c9=9
exported: 52f05dea2ebf1b17532a278b0cf43891
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r1c3-r2c1-r3c1 total 20 connected true
cage-2: cage r1c7-r1c8-r1c9-r2c9-r3c9 total 26 connected true
cage-3: cage r7c1-r8c1-r9c1-r9c2-r9c3 total 28 connected true
cage-4: cage r7c9-r8c9-r9c7-r9c8-r9c9 total 26 connected true
cage-5: cage r6c3-r6c4-r7c4 total 10 connected true
cage-6: cage r3c6-r4c6-r4c7 total 11 connected true
cage-7: cage r3c4-r4c3-r4c4 total 17 connected true
cage-8: cage r6c6-r6c7-r7c6 total 15 connected true
cage-9: cage r7c2-r7c3-r8c3 total 11 connected true
cage-10: cage r7c7-r7c8-r8c7 total 15 connected true
cage-11: cage r2c3-r3c2-r3c3 total 22 connected true
cage-12: cage r2c7-r3c7-r3c8 total 13 connected true
thermo-1: thermo r4c1-r3c1-r2c2-r1c3-r1c4
thermo-2: thermo r4c9-r3c9-r2c8-r1c7-r1c6
thermo-3: thermo r6c1-r7c1-r8c2-r9c3-r9c4
thermo-4: thermo r6c9-r7c9-r8c8-r9c7-r9c6
thermo-5: thermo r3c4-r3c3-r4c2
thermo-6: thermo r3c6-r3c7-r4c8
thermo-7: thermo r7c6-r7c7-r6c8
thermo-8: thermo r7c4-r7c3-r6c2
```

**Sudoku, Cages, Thermometers**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Within a cage, digits may not repeat and must sum to the value shown in the upper left corner of the cage.
- Thermometers: Digits on Thermos are strictly increasing from bulb to tip.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html
