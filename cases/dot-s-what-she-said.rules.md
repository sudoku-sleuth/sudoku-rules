---
format: open-rules
title: Dot's What She Said
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/ooz10swmeu
case: https://sudoku-sleuth.com/cases/dot-s-what-she-said
library: https://rules.sudoku-sleuth.com/
status: read
exported: fccc3cca5e4d99866199b8dbc2c3c07a
---

```rules
sudoku 9x9
thermo-1: thermo r2c8-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9
thermo-2: thermo r8c8-r9c8-r9c7-r9c6-r9c5-r9c4-r9c3
thermo-3: thermo r8c2-r8c1-r7c1-r6c1-r5c1-r4c1-r3c1
thermo-4: thermo r8c8-r9c8-r9c7-r9c6
thermo-5: thermo r8c8-r9c8-r9c7-r9c6-r9c5-r9c4-r8c4
thermo-6: thermo r8c2-r8c1-r7c1-r6c1-r5c1-r4c1-r4c2
thermo-7: thermo r2c8-r2c9-r3c9-r4c9-r5c9-r6c9-r6c8
thermo-8: thermo r2c2-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7
thermo-9: thermo r2c2-r1c2-r1c3-r1c4-r1c5-r1c6-r2c6
kropki-1: kropki r1c1-r1c2 white
kropki-2: kropki r7c9-r8c9 white
kropki-3: kropki r6c8-r7c8 white
kropki-4: kropki r6c6-r6c7 white
kropki-5: kropki r6c4-r7c4 white
kropki-6: kropki r3c2-r4c2 white
kropki-7: kropki r5c3-r6c3 white
kropki-8: kropki r5c7-r6c7 white
```

-Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermometers: Digits on Thermos are strictly increasing from bulb to tip.
- Consecutive Dots: Digits separated by a white dot are consecutive.
