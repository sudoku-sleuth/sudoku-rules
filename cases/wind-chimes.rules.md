---
format: open-rules
title: Wind Chimes
setter: Jobo
source: https://sudokupad.app/1be427kdga
case: https://sudoku-sleuth.com/cases/wind-chimes
library: https://rules.sudoku-sleuth.com/
status: read
exported: cb60162202665d91654ce9d4cdf4d5ed
---

```rules
sudoku 9x9
anti-knight
thermo-1: thermo r9c1-r8c1-r7c1-r6c1-r5c1
thermo-2: thermo r8c2-r7c2-r6c2-r5c2-r4c2
thermo-3: thermo r7c3-r6c3-r5c3-r4c3-r3c3
thermo-4: thermo r6c4-r5c4-r4c4-r3c4-r2c4
thermo-5: thermo r9c6-r8c6-r7c6-r6c6-r5c6
thermo-6: thermo r8c7-r7c7-r6c7-r5c7-r4c7
thermo-7: thermo r7c8-r6c8-r5c8-r4c8-r3c8
thermo-8: thermo r6c9-r5c9-r4c9-r3c9-r2c9
```

Normal sudoku rules apply.

Along thermometers, digits must increase from the bulb end.

Cells separated by a knight's move cannot contain the same digit.
