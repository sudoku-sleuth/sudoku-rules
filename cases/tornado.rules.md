---
format: open-rules
title: Tornado
setter: Sir Moose
source: https://sudokupad.app/gli3vk0kfz
case: https://sudoku-sleuth.com/cases/tornado
library: https://rules.sudoku-sleuth.com/
status: read
exported: 3902a65508ccbad84caf57e02d1321d8
---

```rules
sudoku 9x9
anti-knight
kropki-1: kropki r5c1-r6c1 white
kropki-2: kropki r6c1-r6c2 white
kropki-3: kropki r1c4-r1c5 white
kropki-4: kropki r9c5-r9c6 white
arrow-1: arrow r4c3-r5c2-r6c3 bulb ["r4c4"]
arrow-2: arrow r3c5 bulb ["r4c4"]
arrow-3: arrow r3c6-r2c5-r3c4 bulb ["r4c6"]
arrow-4: arrow r5c7 bulb ["r4c6"]
arrow-5: arrow r6c7-r5c8-r4c7 bulb ["r6c6"]
arrow-6: arrow r7c5 bulb ["r6c6"]
arrow-7: arrow r7c4-r8c5-r7c6 bulb ["r6c4"]
arrow-8: arrow r5c3 bulb ["r6c4"]
arrow-9: arrow r1c6-r2c6 bulb ["r1c5"]
arrow-10: arrow r6c9-r6c8 bulb ["r5c9"]
arrow-11: arrow r9c4-r8c4 bulb ["r9c5"]
arrow-12: arrow r4c1-r4c2 bulb ["r5c1"]
arrow-13: arrow r2c1-r1c2-r2c2 bulb ["r3c1"]
```

Fill each row, column, and 3x3 box with the digits 1-9 once each.

Digits in cells separated by a white dot are consecutive.

The sum of the digits along an arrow is equal to the digit in the connected circle.

Cells that are a chess knight's move apart must not contain the same digit.
