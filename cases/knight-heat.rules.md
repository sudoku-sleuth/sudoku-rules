---
format: open-rules
title: Knight Heat
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/0e0l6vteio
case: https://sudoku-sleuth.com/cases/knight-heat
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c3=3 r2c9=6 r3c4=7 r4c1=2 r4c9=1 r6c4=4 r7c2=8 r8c8=5 r9c6=9
exported: 8da885e876744c114e86c24833857412
---

```rules
sudoku 9x9
anti-knight
thermo-1: thermo r2c5-r3c5-r4c5-r5c4
thermo-2: thermo r8c5-r7c5-r6c5-r5c6
thermo-3: thermo r7c7-r8c6-r9c5
thermo-4: thermo r3c3-r2c4-r1c5
thermo-5: thermo r9c4-r8c4-r7c4-r6c3
thermo-6: thermo r1c6-r2c6-r3c6-r4c7
thermo-7: thermo r8c3-r7c3-r6c2-r5c3
thermo-8: thermo r2c7-r3c7-r4c8-r5c7
thermo-9: thermo r6c1-r5c2-r4c3
thermo-10: thermo r4c9-r5c8-r6c7
thermo-11: thermo r3c8-r2c8-r1c8
thermo-12: thermo r9c8-r9c7-r8c7
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermometers: Digits on Thermos are strictly increasing from bulb to tip.
