---
format: open-rules
title: Twirlygig
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/out4aayhp9
case: https://sudoku-sleuth.com/cases/twirlygig
library: https://rules.sudoku-sleuth.com/
status: read
givens: r3c8=3 r5c7=7 r9c2=1
---

```rules
sudoku 9x9
thermo-1: thermo r2c1-r1c1-r1c2-r2c2-r3c2-r3c3-r2c3
thermo-2: thermo r5c2-r4c2-r4c3-r5c3-r6c3-r6c4-r5c4
thermo-3: thermo r8c3-r7c3-r7c4-r8c4-r9c4-r9c5-r8c5
thermo-4: thermo r3c5-r2c5-r2c6-r3c6-r4c6-r4c7-r3c7
thermo-5: thermo r7c6-r6c6-r6c7-r7c7-r8c7-r8c8-r7c8
```

** Sudoku, Thermometers**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermometers: Digits along a thermometer strictly increase from bulb to tip.
