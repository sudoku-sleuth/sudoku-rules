---
format: open-rules
title: Parity Arrows
setter: Sir Moose
source: https://sudokupad.app/b3ycwob5hq
case: https://sudoku-sleuth.com/cases/parity-arrows
library: https://rules.sudoku-sleuth.com/
status: read
exported: bb92129dab2d44eacbbd0eeeb9486326
---

```rules
sudoku 9x9
arrow-1: arrow r7c5-r8c6 bulb ["r8c4"]
arrow-2: arrow r4c8-r5c7 bulb ["r5c9"]
arrow-3: arrow r2c6-r1c5 bulb ["r3c5"]
arrow-4: arrow r9c8-r8c7-r7c8 bulb ["r9c9"]
arrow-5: arrow r8c2-r9c3 bulb ["r7c3"]
arrow-6: arrow r6c4-r5c5-r4c6 bulb ["r5c4"]
arrow-7: arrow r1c2-r1c3 bulb ["r2c2"]
arrow-8: arrow r3c7-r2c7 bulb ["r2c8"]
arrow-9: arrow r4c1-r3c2 bulb ["r3c1"]
arrow-10: arrow r3c4-r4c3 bulb ["r2c4"]
arrow-11: arrow r7c6-r7c7 bulb ["r6c5"]
arrow-12: arrow r5c1-r6c2 bulb ["r4c2"]
arrow-13: arrow r5c3-r4c4 bulb ["r4c2"]
```

Place the numbers 1-9 in each row, column, and 3x3 box of the puzzle.

Digits along an arrow sum to the digit in that arrow's circle.

Even numbers may not be orthogonally adjacent to other even digits.
