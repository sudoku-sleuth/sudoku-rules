---
format: open-rules
title: The Hot Squeeze
setter: Meggen033
source: ""
case: https://sudoku-sleuth.com/cases/the-hot-squeeze
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo-1: thermo r4c1-r4c2-r4c3
thermo-2: thermo r5c1-r5c2-r5c3
thermo-3: thermo r6c1-r6c2-r6c3
thermo-4: thermo r2c5-r1c4
thermo-5: thermo r1c7-r2c6-r3c5
thermo-6: thermo r5c6-r4c5-r3c4
thermo-7: thermo r5c7-r6c6-r7c5
thermo-8: thermo r9c6-r8c5
thermo-9: thermo r9c8-r8c8
thermo-10: thermo r5c9-r4c9
kropki r2c1-r2c2 colour "black"
arrow-1: arrow r2c1-r1c1 bulb ["r3c2"]
arrow-2: arrow r8c1-r9c1 bulb ["r7c2"]
arrow-3: arrow r9c3-r8c2 bulb ["r9c4"]
arrow-4: arrow r3c7 bulb ["r4c6"]
arrow-5: arrow r4c8-r4c7 bulb ["r3c9"]
arrow-6: arrow r6c8-r6c7 bulb ["r7c8"]
```

Normal Sudoku rules apply. Place the digits 1 through 9 in each empty cell. Digits must not repeat within the same row, column, or box.

A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are shown.

Digits along each thermometer must increase starting from the bulb end.

The digits along each arrow must sum to the digit in the circled cell. Digits may repeat along an arrow if permitted by other rules.

Exported from sudokulab.net
