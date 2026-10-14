---
format: open-rules
title: Tangles
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/pcivbiph1r
case: https://sudoku-sleuth.com/cases/tangles
library: https://rules.sudoku-sleuth.com/
status: read
exported: ec70f224f27e3531669d0c7d5ac4d347
---

```rules
sudoku 9x9
thermo-1: thermo r1c3-r1c4-r2c4-r3c4
thermo-2: thermo r8c7-r8c6-r7c6-r6c6
thermo-3: thermo r3c3-r4c3-r4c2-r4c1
thermo-4: thermo r5c9-r5c8-r5c7-r6c7
thermo-5: thermo r6c2-r6c1-r5c1
thermo-6: thermo r9c5-r9c4-r8c4
thermo-7: thermo r4c5-r5c5-r6c5
thermo-8: thermo r9c2-r9c1-r8c1
thermo-9: thermo r8c8-r9c8-r9c9
thermo-10: thermo r8c9-r7c9-r7c8
thermo-11: thermo r8c3-r7c3-r6c3-r5c3
thermo-12: thermo r2c7-r2c6-r1c6
thermo-13: thermo r3c7-r3c6-r4c6
thermo-14: thermo r2c2-r2c1-r3c1-r3c2
thermo-15: thermo r3c8-r4c8-r4c9-r3c9
thermo-16: thermo r2c9-r1c9-r1c8-r2c8
thermo-17: thermo r8c5-r7c5-r7c4
kropki-1: kropki r1c1-r1c2 black
kropki-2: kropki r2c2-r2c3 black
kropki-3: kropki r3c3-r3c4 black
kropki-4: kropki r4c4-r4c5 black
kropki-5: kropki r5c5-r5c6 black
kropki-6: kropki r6c6-r6c7 black
kropki-7: kropki r7c7-r7c8 black
kropki-8: kropki r8c8-r8c9 black
kropki-9: kropki r8c3-r8c4 black
kropki-10: kropki r6c2-r7c2 black
kropki-11: kropki r2c7-r3c7 black
kropki-12: kropki r9c6-r9c7 black
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermometers: Digits along grey thermometers increase from bulb to tip.
- Ratio Pairs: Digits separated by a black dot are in a 1:2 ratio. Not all dots are necessarily given.
