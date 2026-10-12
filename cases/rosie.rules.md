---
format: open-rules
title: Rosie
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/v3mshcorjl
case: https://sudoku-sleuth.com/cases/rosie
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo-1: thermo r5c4-r5c3-r6c3-r7c3-r7c4-r7c5-r7c6-r7c7
thermo-2: thermo r1c7-r2c8-r3c9
thermo-3: thermo r7c1-r8c2-r9c3
thermo-4: thermo r9c7-r8c8-r7c9
thermo-5: thermo r1c3-r2c2-r3c1
thermo-6: thermo r1c4-r1c5-r1c6
thermo-7: thermo r4c9-r5c9-r6c9
thermo-8: thermo r9c4-r9c5-r9c6
thermo-9: thermo r4c1-r5c1-r6c1
thermo-10: thermo r3c3-r3c4-r3c5-r3c6-r3c7-r4c7-r5c7-r5c6
kropki-1: kropki r7c1-r7c2 colour "black"
kropki-2: kropki r6c6-r7c6 colour "black"
kropki-3: kropki r5c2-r5c3 colour "black"
```

**Standard Sudoku, Thermometer, Ratio Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermometers: Digits on Thermos are strictly increasing from bulb to tip.
- Ratio Pairs: Digits separated by a black dot are in a 1:2 ratio.
