---
fog:
  initiallyLit:
    - r4c6
    - r5c5
    - r6c6
format: open-rules
title: Locally Foggy
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/eshm68aq6c
case: https://sudoku-sleuth.com/cases/locally-foggy
library: https://rules.sudoku-sleuth.com/
status: read
exported: d7fa1e6fee937c9f40a99b920e96d6d0
---

```rules
sudoku 9x9
thermo-1: thermo r5c5-r4c6-r3c7
thermo-2: thermo r5c5-r6c6-r7c7
thermo-3: thermo r2c3-r3c4-r4c5
thermo-4: thermo r3c8-r2c8-r1c9
thermo-5: thermo r4c2-r3c3-r2c2
thermo-6: thermo r8c2-r7c3-r6c2
thermo-7: thermo r9c4-r9c5-r8c6
kropki-1: kropki r5c4-r5c5 black
kropki-2: kropki r5c5-r6c5 black
kropki-3: kropki r7c6-r7c7 black
kropki-4: kropki r3c7-r4c7 black
kropki-5: kropki r5c2-r5c3 black
kropki-6: kropki r5c1-r6c1 black
kropki-7: kropki r5c5-r5c6 white
kropki-8: kropki r2c3-r3c3 white
kropki-9: kropki r2c4-r3c4 white
kropki-10: kropki r3c9-r4c9 white
limited-digits-1: limited-digits r1c1-r2c2-r3c3-r4c4-r5c5-r6c6-r7c7-r8c8-r9c9 max 3
limited-digits-2: limited-digits r1c9-r2c8-r3c7-r4c6-r5c5-r6c4-r7c3-r8c2-r9c1 max 3
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Fog: Part of the grid is covered with fog. As correct digits are placed, the fog will clear from surrounding cells.
- Anti-Diagonal: Each of the main diagonals may only contain 3 distinct digits.
- Kropki Pairs: Digits separated by a black dot must be in a 2:1 ratio. Digits separated by a white dot must be consecutive.
- Thermometers: Digits on grey thermos must increase from the bulb to the tip.
