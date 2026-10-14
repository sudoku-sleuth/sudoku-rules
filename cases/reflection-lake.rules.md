---
format: open-rules
title: Reflection Lake
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/z72gwoqnuh
case: https://sudoku-sleuth.com/cases/reflection-lake
library: https://rules.sudoku-sleuth.com/
status: read
exported: e3bde33f19f36800d45e14ee84fa159d
---

```rules
sudoku 9x9
thermo-1: thermo r3c1-r2c2-r3c3-r4c4-r3c5-r4c6
thermo-2: thermo r7c1-r8c2-r7c3-r6c4-r7c5-r6c6
thermo-3: thermo r8c4-r9c5-r8c6-r7c7-r8c8-r7c9
thermo-4: thermo r2c4-r1c5-r2c6-r3c7-r2c8-r3c9
kropki-1: kropki r5c5-r6c5 white
kropki-2: kropki r5c7-r6c7 white
kropki-3: kropki r5c3-r6c3 white
kropki-4: kropki r5c9-r6c9 white
kropki-5: kropki r3c1-r4c1 white
kropki-6: kropki r3c9-r4c9 white
kropki-7: kropki r4c4-r5c4 black
kropki-8: kropki r4c6-r5c6 black
kropki-9: kropki r4c2-r5c2 black
kropki-10: kropki r4c8-r5c8 black
kropki-11: kropki r8c9-r9c9 black
```

**Standard Sudoku, Thermo, Kropki Pairs*

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermometers: Digits along grey thermos strictly increase from bulb to tip.
- Kropki Pairs: Digits separated by a black dot are in a 1:2 ratio. Digits separated by a white dot are consecutive.
