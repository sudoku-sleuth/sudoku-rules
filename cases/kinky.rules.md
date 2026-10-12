---
format: open-rules
title: Kinky
setter: Jobo
source: https://sudokupad.app/re7x2eoc4l
case: https://sudoku-sleuth.com/cases/kinky
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
arrow-1: arrow r2c1-r3c2-r4c3 bulb ["r1c1"]
arrow-2: arrow r2c3-r3c4-r4c5 bulb ["r1c3"]
arrow-3: arrow r2c5-r3c6-r4c7 bulb ["r1c5"]
arrow-4: arrow r2c8-r3c8 bulb ["r1c7"]
arrow-5: arrow r6c2-r7c1 bulb ["r5c2"]
arrow-6: arrow r8c2-r7c3-r6c4-r5c5 bulb ["r9c2"]
arrow-7: arrow r8c4-r7c5-r6c6-r5c7 bulb ["r9c4"]
arrow-8: arrow r8c6-r7c7-r6c8-r5c9 bulb ["r9c6"]
```

Normal sudoku rules apply.

Digits along an arrow must sum to the digit in that arrow's circle.
