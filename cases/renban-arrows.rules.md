---
format: open-rules
title: Renban Arrows
setter: Sir Moose
source: https://sudokupad.app/ncq5e3x4im
case: https://sudoku-sleuth.com/cases/renban-arrows
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
arrow-1: arrow r1c2-r1c3-r1c4 bulb ["r2c2"]
arrow-2: arrow r9c2-r9c3 bulb ["r8c3"]
arrow-3: arrow r7c1-r8c1 bulb ["r6c2"]
arrow-4: arrow r3c9-r2c9-r1c9 bulb ["r4c8"]
arrow-5: arrow r2c6-r3c6 bulb ["r2c7"]
arrow-6: arrow r7c7-r8c7 bulb ["r6c6"]
arrow-7: arrow r8c6-r7c6 bulb ["r9c5"]
arrow-8: arrow r6c4-r6c3 bulb ["r7c5"]
arrow-9: arrow r9c8-r9c7 bulb ["r8c8"]
arrow-10: arrow r5c8-r5c7 bulb ["r6c9"]
arrow-11: arrow r4c5-r3c6 bulb ["r4c4"]
arrow-12: arrow r4c2-r3c3-r2c4 bulb ["r5c1"]
unique-1: unique r2c2-r2c3-r2c4-r3c2-r3c3-r3c4-r4c2-r4c3-r4c4
unique-2: unique r6c2-r6c3-r6c4-r7c2-r7c3-r7c4-r8c2-r8c3-r8c4
unique-3: unique r2c6-r2c7-r2c8-r3c6-r3c7-r3c8-r4c6-r4c7-r4c8
unique-4: unique r6c6-r6c7-r6c8-r7c6-r7c7-r7c8-r8c6-r8c7-r8c8
renban-1: renban r1c2-r1c3-r1c4
renban-2: renban r9c2-r9c3
renban-3: renban r7c1-r8c1
renban-4: renban r3c9-r2c9-r1c9
renban-5: renban r2c6-r3c6
renban-6: renban r7c7-r8c7
renban-7: renban r8c6-r7c6
renban-8: renban r6c4-r6c3
renban-9: renban r9c8-r9c7
renban-10: renban r5c8-r5c7
renban-11: renban r4c5-r3c6
renban-12: renban r4c2-r3c3-r2c4
```

Normal Sudoku Rules Apply

Each of the four shaded 3x3 boxes must contain the numbers 1 to 9.

Renban Arrows: Numbers along an arrow sum to the digit in that arrow's circle.  

Numbers along an arrow (not in that arrows circle) must be from a set of consecutive digits, in any order, without repeats.
