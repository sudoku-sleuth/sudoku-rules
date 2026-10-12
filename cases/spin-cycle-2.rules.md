---
format: open-rules
title: Spin Cycle
setter: Sir Moose
source: https://sudokupad.app/jjc0agu41z
case: https://sudoku-sleuth.com/cases/spin-cycle-2
library: https://rules.sudoku-sleuth.com/
status: flagged
flags:
  - Our reading of these rules doesn't match the published answer yet; we're checking it.
---

```rules
sudoku 9x9
arrow-1: arrow r4c2-r5c2-r6c3 bulb ["r3c3"]
arrow-2: arrow r6c8-r5c8-r4c7 bulb ["r7c7"]
arrow-3: arrow r2c3-r3c2 bulb ["r2c4"]
arrow-4: arrow r8c7-r7c8 bulb ["r8c6"]
arrow-5: arrow r7c9-r8c9-r9c8 bulb ["r6c9"]
arrow-6: arrow r9c2-r8c3 bulb ["r9c1"]
arrow-7: arrow r9c6-r9c5-r9c4 bulb ["r9c7"]
arrow-8: arrow r6c1-r5c1 bulb ["r7c2"]
arrow-9: arrow r4c9-r5c9 bulb ["r3c8"]
arrow-10: arrow r2c8-r2c7-r3c7 bulb ["r2c9"]
arrow-11: arrow r1c4-r1c5-r1c6 bulb ["r1c3"]
arrow-12: arrow r3c5-r4c4 bulb ["r3c6"]
arrow-13: arrow r7c5-r6c6 bulb ["r7c4"]
renban-1: renban r4c2-r5c2-r6c3
renban-2: renban r6c8-r5c8-r4c7
renban-3: renban r2c3-r3c2
renban-4: renban r8c7-r7c8
renban-5: renban r7c9-r8c9-r9c8
renban-6: renban r9c2-r8c3
renban-7: renban r9c6-r9c5-r9c4
renban-8: renban r6c1-r5c1
renban-9: renban r4c9-r5c9
renban-10: renban r2c8-r2c7-r3c7
renban-11: renban r1c4-r1c5-r1c6
renban-12: renban r3c5-r4c4
renban-13: renban r7c5-r6c6
```

Normal sudoku rules apply.

Digits along an arrow sum to the digit in that arrows circle.

Numbers along a purple renban arrow (not in that arrows circle) must be from a set of consecutive digits, in any order, without repeats.

Numbers along an apricot parity arrow (not in that arrows circle) must be alternate between even and odd digits.
