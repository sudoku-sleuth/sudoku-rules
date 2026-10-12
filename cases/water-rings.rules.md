---
format: open-rules
title: Water Rings
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/zm6521k1vg
case: https://sudoku-sleuth.com/cases/water-rings
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo-1: thermo r3c2-r2c2-r1c3-r1c4-r2c5-r3c5-r4c4
thermo-2: thermo r7c8-r8c8-r9c7-r9c6-r8c5-r7c5-r6c6
thermo-3: thermo r6c1-r5c2-r5c3-r6c4-r7c4-r8c3-r8c2
thermo-4: thermo r4c6-r3c6-r2c7-r2c8-r3c9-r4c9-r5c8
kropki-1: kropki r1c3-r2c3 colour "black"
kropki-2: kropki r7c6-r7c7 colour "black"
kropki-3: kropki r8c1-r9c1 colour "black"
kropki-4: kropki r4c4-r4c5 colour "black"
kropki-5: kropki r4c3-r5c3 colour "black"
kropki-6: kropki r7c1-r7c2 colour "black"
kropki-7: kropki r4c2-r5c2 colour "black"
```

**Standard Sudoku, Thermo, Ratio Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermometers: Digits on Thermos are strictly increasing from bulb to tip.
- Ratio dots: Cells separated by a black dot are in a 2:1 ratio. Not all dots are necessarily given.
