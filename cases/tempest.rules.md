---
format: open-rules
title: Tempest
setter: Will Power
source: https://f-puzzles.com/?id=y8ekcqw6
case: https://sudoku-sleuth.com/cases/tempest
library: https://rules.sudoku-sleuth.com/
status: read
givens: ............7........839.....9...6....3...7....6...9.....987........3............
---

```rules
sudoku 9x9
arrow-1: arrow r5c2-r4c2 bulb ["r6c3"]
arrow-2: arrow r2c5-r2c6 bulb ["r3c4"]
arrow-3: arrow r5c8-r6c8 bulb ["r4c7"]
arrow-4: arrow r8c5-r8c4 bulb ["r7c6"]
arrow-5: arrow r1c7-r1c8 bulb ["r1c6"]
arrow-6: arrow r9c4-r9c3 bulb ["r9c5"]
arrow-7: arrow r3c1-r2c1 bulb ["r4c1"]
arrow-8: arrow r8c7-r9c6 bulb ["r7c8"]
arrow-9: arrow r2c8-r3c9 bulb ["r1c9"]
arrow-10: arrow r6c9-r7c9 bulb ["r5c9"]
arrow-11: arrow r4c6-r5c6 bulb ["r3c6"]
arrow-12: arrow r6c6-r6c5 bulb ["r6c7"]
arrow-13: arrow r6c4-r5c4 bulb ["r7c4"]
arrow-14: arrow r4c4-r4c5 bulb ["r4c3"]
```

Normal Sudoku rules apply.  Numbers on Arrows sum to the number in that arrow's circle.
