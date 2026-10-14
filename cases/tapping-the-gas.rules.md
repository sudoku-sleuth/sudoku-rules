---
format: open-rules
title: Tapping the GAS
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/jogob4ro0j
case: https://sudoku-sleuth.com/cases/tapping-the-gas
library: https://rules.sudoku-sleuth.com/
status: read
givens: r3c3=6 r4c8=1 r7c4=2 r8c2=5
exported: e63cbdfad29ab9ef67e6e0132d329b50
---

```rules
sudoku 9x9
thermo-1: thermo r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8
thermo-2: thermo r1c9-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9
thermo-3: thermo r9c9-r9c8-r9c7-r9c6-r9c5-r9c4-r9c3-r9c2
thermo-4: thermo r8c1-r7c1-r6c1-r5c1-r4c1-r3c1-r2c1
thermo-5: thermo r7c3-r6c3-r5c3-r4c3
thermo-6: thermo r3c7-r4c7-r5c7-r6c7
thermo-7: thermo r8c4-r8c5-r8c6
thermo-8: thermo r2c6-r2c5-r2c4
```

Normal sudoku rules apply.  Every row, column and box must contain a complete set  of the digits 1 through 9.

Normal thermo rules apply.  Digits must increase as they move away from the bulb of the thermometer.
