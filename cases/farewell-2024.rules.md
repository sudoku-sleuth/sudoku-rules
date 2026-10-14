---
format: open-rules
title: Farewell 2024
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/l938x6s17c
case: https://sudoku-sleuth.com/cases/farewell-2024
library: https://rules.sudoku-sleuth.com/
status: read
exported: f1e3e590cb2c2736e46de4eb49d8e8ef
---

```rules
sudoku 9x9
thermo-1: thermo r2c1-r1c2-r1c3-r2c3-r3c2-r4c1-r4c2-r4c3
thermo-2: thermo r7c2-r6c3-r6c4-r7c4-r8c3-r9c2-r9c3-r9c4
thermo-3: thermo r9c8-r8c8-r7c8-r6c8-r7c7-r8c6-r8c7
thermo-4: thermo r2c7-r2c6-r3c5-r4c5-r5c6-r5c7-r4c8-r3c8
kropki-1: kropki r3c7-r3c8 white
kropki-2: kropki r4c9-r5c9 white
kropki-3: kropki r8c2-r8c3 white
kropki-4: kropki r7c9-r8c9 white
```

**Standard Sudoku, Thermo, Consecutive Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermometers: Digits along a Thermo strictly increase from bulb to tip.
- Consecutive Pairs: Digits separated by a white dot are consecutive.
