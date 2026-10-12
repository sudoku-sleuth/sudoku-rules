---
format: open-rules
title: Greek Fire
setter: Meggen033
source: https://sudokupad.app/ob6z3508gs
case: https://sudoku-sleuth.com/cases/greek-fire
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo-1: thermo r4c4-r4c3-r5c3-r6c3-r6c4
thermo-2: thermo r4c6-r4c7-r5c7-r6c7-r6c6
thermo-3: thermo r1c5-r1c6-r1c7-r2c7
thermo-4: thermo r7c8-r7c9-r8c9-r9c9-r9c8
thermo-5: thermo r3c2-r2c2
arrow-1: arrow r7c3-r8c3-r9c3 bulb ["r6c2"]
arrow-2: arrow r4c9-r4c8 bulb ["r3c9"]
arrow-3: arrow r1c1-r1c2 bulb ["r2c1"]
arrow-4: arrow r9c6-r9c5-r8c5 bulb ["r9c7"]
arrow-5: arrow r7c6 bulb ["r8c7"]
arrow-6: arrow r8c1-r7c2 bulb ["r9c1"]
```

•   Normal Sudoku rules apply.  
•   The digits along each arrow must sum to the digit in the circled cell.
•   Digits along each thermometer must increase starting from the bulb end.
