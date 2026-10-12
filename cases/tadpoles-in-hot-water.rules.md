---
format: open-rules
title: Tadpoles in Hot Water
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/vrd6xk6fwd
case: https://sudoku-sleuth.com/cases/tadpoles-in-hot-water
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c8=6 r3c4=9 r6c1=9 r7c9=3 r9c2=4
---

```rules
sudoku 9x9
thermo-1: thermo r1c2-r1c3-r1c4-r2c4-r2c5-r2c6
thermo-2: thermo r3c5-r3c6-r3c7-r4c7-r4c8-r4c9
thermo-3: thermo r3c1-r3c2-r3c3-r4c3-r4c4-r4c5
thermo-4: thermo r5c3-r5c4-r5c5-r6c5-r6c6-r6c7
thermo-5: thermo r7c5-r7c6-r7c7-r8c7-r8c8-r8c9
thermo-6: thermo r8c2-r8c3-r8c4-r9c4-r9c5-r9c6
```

**Standard Sudoku, Thermometers**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermometers: Digits on Thermos are strictly increasing from bulb to tip.
