---
format: open-rules
title: Three Leaf Clover
setter: sujoyku
source: https://sudokupad.app/s3vq91fv1e
case: https://sudoku-sleuth.com/cases/three-leaf-clover
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
arrow-1: arrow r3c3-r2c3-r1c2 bulb ["r4c4"]
arrow-2: arrow r3c7-r3c8-r2c9 bulb ["r4c6"]
arrow-3: arrow r5c5-r6c5-r7c5 bulb ["r4c6"]
arrow-4: arrow r7c7-r7c8-r8c9 bulb ["r6c6"]
arrow-5: arrow r7c3-r8c3-r9c2 bulb ["r6c4"]
arrow-6: arrow r6c1-r5c1 bulb ["r7c1"]
arrow-7: arrow r1c8-r1c9 bulb ["r1c7"]
double-arrow-1: double-arrow r7c4-r8c4-r9c5-r8c6-r7c6 ends ["r6c4","r6c6"]
double-arrow-2: double-arrow r6c7-r6c8-r5c9-r4c8-r4c7 ends ["r6c6","r4c6"]
double-arrow-3: double-arrow r3c6-r2c6-r1c5-r2c4-r3c4 ends ["r4c6","r4c4"]
double-arrow-4: double-arrow r4c3-r3c2 ends ["r5c4","r2c1"]
```

- Normal sudoku rules apply, i.e. each row, column, and 3x3 region has to contain the digits from 1 to 9 once each.

 - Arrows: Digits on an arrow sum to the digit in the circle from which the arrow emerges.

- Double Arrows: Digits on a line connecting two circles have the same sum as the digits in the circles.
