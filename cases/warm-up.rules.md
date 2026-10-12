---
format: open-rules
title: Warm Up
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/igjvi0qt54
case: https://sudoku-sleuth.com/cases/warm-up
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c1=5 r4c6=9 r4c9=2 r6c4=3 r9c1=4 r9c9=7
---

```rules
sudoku 9x9
thermo-1: thermo r1c3-r1c4-r2c4-r3c4-r4c4-r5c4
thermo-2: thermo r9c7-r9c6-r8c6-r7c6-r6c6-r5c6
thermo-3: thermo r8c2-r8c3-r7c3-r6c3-r5c3-r4c3
thermo-4: thermo r2c8-r2c7-r3c7-r4c7-r5c7-r6c7
thermo-5: thermo r5c8-r6c8-r7c8-r7c9
thermo-6: thermo r3c1-r3c2-r4c2-r5c2
thermo-7: thermo r8c9-r8c8-r8c7
thermo-8: thermo r2c3-r2c2-r2c1
thermo-9: thermo r1c5-r2c5-r3c5
thermo-10: thermo r7c5-r8c5-r9c5
thermo-11: thermo r6c5-r5c5-r4c5
```

**Standard Sudoku, Thermometers**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermometers: Along Thermos, digits strictly increase from bulb to tip.
