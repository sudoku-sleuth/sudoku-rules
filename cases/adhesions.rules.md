---
format: open-rules
title: Adhesions
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/p62hat2gg5
case: https://sudoku-sleuth.com/cases/adhesions
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo-1: thermo r1c1-r1c2-r2c2-r3c2-r3c3
thermo-2: thermo r2c3-r2c4-r3c4-r4c4-r4c5
thermo-3: thermo r3c5-r3c6-r4c6-r5c6-r5c7
thermo-4: thermo r4c7-r4c8-r5c8-r6c8-r6c9
thermo-5: thermo r4c1-r4c2-r5c2-r6c2-r6c3
thermo-6: thermo r5c3-r5c4-r6c4-r7c4-r7c5
thermo-7: thermo r6c5-r6c6-r7c6-r8c6-r8c7
thermo-8: thermo r7c7-r7c8-r8c8-r9c8-r9c9
kropki-1: kropki r3c3-r3c4 colour "white"
kropki-2: kropki r7c5-r7c6 colour "white"
kropki-3: kropki r5c6-r6c6 colour "white"
kropki-4: kropki r3c2-r4c2 colour "white"
kropki-5: kropki r6c8-r7c8 colour "white"
kropki-6: kropki r7c3-r7c4 colour "white"
```

**Standard Sudoku, Thermometers, Consecutive Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermometers: Digits along grey thermos strictly increase from bulb to tip.
- Consecutive Pairs: Digits separated by white dots are consecutive.
