---
format: open-rules
title: Upstream
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/02xrr1x890
case: https://sudoku-sleuth.com/cases/upstream
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo-1: thermo r3c2-r3c3-r4c4-r4c5-r4c6-r3c7
thermo-2: thermo r2c3-r1c4-r1c5-r1c6-r2c7-r2c8
thermo-3: thermo r8c2-r8c3-r9c4-r9c5-r9c6-r8c7
thermo-4: thermo r7c3-r6c4-r6c5-r6c6-r7c7-r7c8
thermo-5: thermo r4c1-r4c2-r5c3-r5c4-r5c5
thermo-6: thermo r5c6-r5c7-r6c8-r6c9
kropki-1: kropki r3c5-r4c5 colour "black"
kropki-2: kropki r6c5-r7c5 colour "black"
kropki-3: kropki r5c9-r6c9 colour "black"
kropki-4: kropki r4c1-r5c1 colour "black"
kropki-5: kropki r9c6-r9c7 colour "black"
kropki-6: kropki r2c2-r2c3 colour "black"
kropki-7: kropki r3c8-r4c8 colour "black"
kropki-8: kropki r9c1-r9c2 colour "black"
kropki-9: kropki r9c8-r9c9 colour "black"
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermometers: Digits on Thermos are strictly increasing from bulb to tip.
- Ratio dots: Cells separated by a black dot are in a 2:1 ratio. Not all dots are necessarily given.
