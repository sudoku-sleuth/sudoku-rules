---
format: open-rules
title: Knotted Dots
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/7ejrxdytj2
case: https://sudoku-sleuth.com/cases/knotted-dots
library: https://rules.sudoku-sleuth.com/
status: read
givens: r3c6=8 r7c4=8
exported: d304221e3a2ca4f5513ad2f33b6c3df3
---

```rules
sudoku 9x9
thermo-1: thermo r4c1-r3c1-r2c2-r1c3-r1c4
thermo-2: thermo r4c9-r3c9-r2c8-r1c7-r1c6
thermo-3: thermo r6c1-r7c1-r8c2-r9c3-r9c4
thermo-4: thermo r6c9-r7c9-r8c8-r9c7-r9c6
thermo-5: thermo r4c4-r3c4-r2c5
thermo-6: thermo r6c6-r7c6-r8c5
thermo-7: thermo r7c3-r6c3-r5c4-r4c5
thermo-8: thermo r3c7-r4c7-r5c6-r6c5
thermo-9: thermo r3c3-r4c2-r5c2
thermo-10: thermo r5c8-r6c8-r7c7
kropki-1: kropki r1c5-r2c5 black
kropki-2: kropki r8c5-r9c5 black
kropki-3: kropki r4c4-r5c4 black
kropki-4: kropki r5c6-r6c6 black
kropki-5: kropki r2c7-r3c7 black
kropki-6: kropki r5c2-r6c2 black
kropki-7: kropki r2c2-r2c3 black
kropki-8: kropki r7c6-r8c6 black
kropki-9: kropki r4c8-r4c9 black
kropki-10: kropki r7c2-r7c3 black
kropki-11: kropki r7c1-r8c1 black
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermometers: Along grey thermometers, digits increase from bulb to tip.
- Ratio Pairs: Digits separated by a black dot are in a 1:2 ratio.
