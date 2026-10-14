---
format: open-rules
title: Calembour
setter: Jobo
source: https://sudokupad.app/rumyds93jy
case: https://sudoku-sleuth.com/cases/calembour
library: https://rules.sudoku-sleuth.com/
status: read
exported: 29fb6cb382319851f336a7984d863a31
---

```rules
sudoku 9x9
double-arrow-1: double-arrow r4c1-r5c1-r5c2-r4c2 ends ["r3c1","r3c2"]
double-arrow-2: double-arrow r1c4-r1c5-r2c5-r2c4 ends ["r1c3","r2c3"]
double-arrow-3: double-arrow r7c5-r7c4-r8c4-r8c5 ends ["r7c6","r8c6"]
double-arrow-4: double-arrow r8c2-r8c3-r9c3-r9c2 ends ["r8c1","r9c1"]
double-arrow-5: double-arrow r2c7-r3c7-r3c8-r3c9 ends ["r2c8","r2c9"]
double-arrow-6: double-arrow r8c8-r9c8 ends ["r8c9","r9c9"]
window-classes classes "entropy"
```

Normal sudoku rules apply.

The sum of the digits along a double arrow line connecting two circles is equal to the sum of the digits in the circles.

Each 2x2 square of cells has to contain at least one low [123], one middle [456], and one high [789] digit (global entropy).
