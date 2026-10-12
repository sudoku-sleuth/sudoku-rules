---
format: open-rules
title: Span
setter: Jobo
source: https://sudokupad.app/t17v9txlam
case: https://sudoku-sleuth.com/cases/span
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
arrow-1: arrow r6c4-r5c3-r4c4-r3c5 bulb ["r7c5"]
arrow-2: arrow r4c1-r5c1-r6c1 bulb ["r3c1"]
arrow-3: arrow r1c4-r1c5-r1c6 bulb ["r1c3"]
arrow-4: arrow r3c9-r2c9-r1c9 bulb ["r4c9"]
arrow-5: arrow r9c8-r9c9 bulb ["r9c7"]
arrow-6: arrow r8c2-r8c3-r9c3 bulb ["r8c1"]
renban-1: renban r3c5-r4c6-r5c7-r6c6-r7c5
renban-2: renban r3c1-r3c2-r4c2-r5c2-r6c2-r6c1
renban-3: renban r1c3-r2c3-r2c4-r2c5-r2c6-r1c6
renban-4: renban r1c9-r1c8-r2c8-r3c8-r4c8-r4c9
renban-5: renban r9c7-r8c7-r8c8-r8c9-r9c9
renban-6: renban r8c1-r9c1-r9c2-r9c3
```

Normal sudoku rules apply.

Digits along an arrow must sum to the digit in that arrow's circle.

Purple lines contain a non-repeating set of consecutive digits in any order.
