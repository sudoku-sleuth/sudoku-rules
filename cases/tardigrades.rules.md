---
format: open-rules
title: Tardigrades
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/i2yg8yesd3
case: https://sudoku-sleuth.com/cases/tardigrades
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c9=5 r2c2=6 r4c1=9 r8c8=4
exported: 4cfed5d4ebff48e58db15702f275852c
---

```rules
sudoku 9x9
thermo-1: thermo r1c3-r1c4-r2c4
thermo-2: thermo r1c3-r1c4-r1c5-r2c5
thermo-3: thermo r1c3-r1c4-r1c5-r1c6-r2c6
thermo-4: thermo r1c3-r1c4-r1c5-r1c6-r1c7-r2c7
thermo-5: thermo r9c7-r9c6-r9c5-r9c4-r9c3-r8c3
thermo-6: thermo r9c7-r9c6-r9c5-r9c4-r8c4
thermo-7: thermo r9c7-r9c6-r9c5-r8c5
thermo-8: thermo r9c7-r9c6-r8c6
thermo-9: thermo r4c2-r4c3-r4c4-r4c5-r4c6-r5c6
thermo-10: thermo r4c2-r4c3-r4c4-r4c5-r5c5
thermo-11: thermo r4c2-r4c3-r4c4-r5c4
thermo-12: thermo r4c2-r4c3-r5c3
thermo-13: thermo r7c5-r7c6-r7c7-r7c8-r7c9-r6c9
thermo-14: thermo r7c5-r7c6-r7c7-r7c8-r6c8
thermo-15: thermo r7c5-r7c6-r7c7-r6c7
thermo-16: thermo r7c5-r7c6-r6c6
thermo-17: thermo r9c1-r8c1-r7c1-r6c1-r5c1-r5c2
thermo-18: thermo r9c1-r8c1-r7c1-r6c1-r6c2
thermo-19: thermo r9c1-r8c1-r7c1-r7c2
thermo-20: thermo r9c1-r8c1-r8c2
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermometers: Digits on Thermos are strictly increasing from bulb to tip.
