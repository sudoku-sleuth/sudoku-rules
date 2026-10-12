---
format: open-rules
title: Scarlet Fever
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/y4lnjzh1g0
case: https://sudoku-sleuth.com/cases/scarlet-fever
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo-1: thermo r3c1-r2c1-r1c1-r1c2-r1c3
thermo-2: thermo r3c9-r2c9-r1c9-r1c8-r1c7
thermo-3: thermo r7c1-r8c1-r9c1-r9c2-r9c3
thermo-4: thermo r7c9-r8c9-r9c9-r9c8-r9c7
thermo-5: thermo r5c3-r4c3-r3c3-r3c4-r3c5
thermo-6: thermo r5c7-r6c7-r7c7-r7c6-r7c5
kropki-1: kropki r3c8-r4c8 colour "white"
kropki-2: kropki r1c3-r2c3 colour "black"
kropki-3: kropki r6c1-r7c1 colour "black"
kropki-4: kropki r9c6-r9c7 colour "black"
kropki-5: kropki r7c8-r7c9 colour "black"
kropki-6: kropki r3c8-r3c9 colour "black"
kropki-7: kropki r3c5-r4c5 colour "black"
kropki-8: kropki r5c3-r5c4 colour "black"
kropki-9: kropki r4c7-r5c7 colour "black"
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermometers: Digits on Thermos are strictly increasing from bulb to tip.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.
