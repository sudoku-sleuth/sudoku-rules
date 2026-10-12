---
format: open-rules
title: "Shifter Lines 103: Shift to winter clothing, it's getting cold"
setter: gUBBLOR
source: ""
case: https://sudoku-sleuth.com/cases/shifter-lines-103
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo-1: thermo r9c2-r9c3-r9c4-r8c3-r7c3
thermo-2: thermo r9c8-r9c7-r8c6
thermo-3: thermo r2c4-r3c3-r4c3-r4c4-r5c3-r6c4-r6c3
thermo-4: thermo r6c6-r5c6-r5c7-r4c7
thermo-5: thermo r3c6-r2c6-r1c6
thermo-6: thermo r3c7-r3c8
thermo-7: thermo r1c7-r2c7-r2c6
shifter-line-1: shifter-line r9c2-r9c3-r9c4-r8c3-r7c3
shifter-line-2: shifter-line r6c3-r6c4-r5c3-r4c4-r4c3-r3c3-r2c4
shifter-line-3: shifter-line r9c8-r9c7-r8c6-r9c6
shifter-line-4: shifter-line r6c7-r5c7-r5c6-r4c6
shifter-line-5: shifter-line r3c6-r4c7-r4c8
shifter-line-6: shifter-line r4c9-r3c8-r3c7
shifter-line-7: shifter-line r8c2-r7c2-r6c1-r7c1-r8c1
```

Normal Sudoku rules apply. Place the digits 1 through 9 in each empty cell. Digits must not repeat within the same row, column, or box.

Shifter lines: Adjacent digits within the same box on a shifter line share both parity (even/odd) AND polarity (low/high). Whenever the line enters a new box either the parity OR the polarity shifts, never both. Shifter lines can never have 5 on it. Digits may repeat on lines.

Thermometers: Digits along each thermometer must increase starting from the bulb end.
