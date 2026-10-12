---
format: open-rules
title: Fever Bends
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/gq9l9gbu2p
case: https://sudoku-sleuth.com/cases/fever-bends
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo-1: thermo r3c1-r2c1-r2c2-r1c2-r1c3
thermo-2: thermo r7c9-r8c9-r8c8-r9c8-r9c7
thermo-3: thermo r1c7-r1c8-r2c8-r2c9-r3c9
thermo-4: thermo r9c3-r9c2-r8c2-r8c1-r7c1
thermo-5: thermo r2c4-r2c3-r3c3-r3c2-r4c2
thermo-6: thermo r4c8-r3c8-r3c7-r2c7-r2c6
thermo-7: thermo r6c2-r7c2-r7c3-r8c3-r8c4
thermo-8: thermo r8c6-r8c7-r7c7-r7c8-r6c8
kropki-1: kropki r5c3-r5c4 colour "white"
kropki-2: kropki r6c3-r6c4 colour "black"
kropki-3: kropki r3c4-r4c4 colour "black"
kropki-4: kropki r4c6-r4c7 colour "black"
kropki-5: kropki r6c6-r7c6 colour "black"
kropki-6: kropki r2c7-r2c8 colour "black"
kropki-7: kropki r2c2-r3c2 colour "black"
kropki-8: kropki r7c7-r7c8 colour "black"
kropki-9: kropki r7c3-r8c3 colour "black"
kropki-10: kropki r8c1-r9c1 colour "black"
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermometers: Digits on Thermos are strictly increasing from bulb to tip.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.
