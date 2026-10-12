---
format: open-rules
title: Double Dutch
setter: Jobo
source: https://sudokupad.app/km4o51rv2d
case: https://sudoku-sleuth.com/cases/double-dutch
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
double-arrow-1: double-arrow r2c7-r3c6-r4c5-r5c4-r6c3-r7c2 ends ["r1c8","r8c1"]
double-arrow-2: double-arrow r8c6 ends ["r9c5","r7c7"]
double-arrow-3: double-arrow r4c8-r4c9-r5c9 ends ["r4c7","r6c9"]
double-arrow-4: double-arrow r9c8-r9c9 ends ["r9c7","r8c9"]
double-arrow-5: double-arrow r3c5-r2c5 ends ["r3c4","r1c5"]
double-arrow-6: double-arrow r5c3-r5c2 ends ["r4c3","r5c1"]
double-arrow-7: double-arrow r7c3-r8c3 ends ["r7c4","r9c3"]
double-arrow-8: double-arrow r2c2 ends ["r1c2","r2c1"]
```

Normal sudoku rules apply.

The sum of the digits along a double arrow line connecting two circles is equal to the sum of the digits in the circles.

Adjacent digits along a double arrow (including the circles) must differ by at least 4.
