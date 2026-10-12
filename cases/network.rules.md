---
format: open-rules
title: Network
setter: Jobo
source: https://sudokupad.app/vn44db0fft
case: https://sudoku-sleuth.com/cases/network
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
arrow-1: arrow r1c2-r1c1 bulb ["r1c3"]
arrow-2: arrow r2c3-r3c3 bulb ["r1c3"]
arrow-3: arrow r1c8-r1c9 bulb ["r1c7"]
arrow-4: arrow r2c8-r3c9 bulb ["r1c7"]
arrow-5: arrow r9c8-r9c9 bulb ["r9c7"]
arrow-6: arrow r9c2-r9c1 bulb ["r9c3"]
arrow-7: arrow r8c2-r7c1 bulb ["r9c3"]
arrow-8: arrow r8c4-r7c5 bulb ["r9c3"]
arrow-9: arrow r4c2-r3c1 bulb ["r5c3"]
arrow-10: arrow r5c4-r5c5 bulb ["r5c3"]
arrow-11: arrow r5c9-r4c9 bulb ["r6c9"]
arrow-12: arrow r4c6-r5c7 bulb ["r3c5"]
double-arrow-1: double-arrow r1c6-r1c5-r1c4 ends ["r1c7","r1c3"]
double-arrow-2: double-arrow r2c4 ends ["r1c3","r3c5"]
double-arrow-3: double-arrow r4c4 ends ["r3c5","r5c3"]
double-arrow-4: double-arrow r6c3-r7c3-r8c3 ends ["r5c3","r9c3"]
double-arrow-5: double-arrow r9c4-r9c5-r9c6 ends ["r9c3","r9c7"]
double-arrow-6: double-arrow r8c7-r7c7 ends ["r9c7","r6c7"]
double-arrow-7: double-arrow r6c8 ends ["r6c7","r6c9"]
```

Normal sudoku rules apply.

Digits along an arrow must sum to the digit in that arrow's circle.

The sum of the digits along a double arrow line connecting two circles is equal to the sum of the digits in the circles.
