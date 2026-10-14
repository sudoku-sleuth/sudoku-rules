---
format: open-rules
title: Eye of the Storm
setter: Will Power
source: https://f-puzzles.com/?id=y8wodr59
case: https://sudoku-sleuth.com/cases/eye-of-the-storm
library: https://rules.sudoku-sleuth.com/
status: read
givens: r3c2=8 r3c4=6 r3c5=9 r4c9=7 r6c1=7 r7c5=6 r7c7=9 r7c8=8
exported: f3026c315da39fdbe2ff3ea84008c0d6
---

```rules
sudoku 9x9
arrow-1: arrow r8c7-r9c6 bulb ["r7c8"]
arrow-2: arrow r8c6-r8c5-r8c4 bulb ["r7c7"]
arrow-3: arrow r6c7-r6c8-r6c9 bulb ["r7c6"]
arrow-4: arrow r6c6-r5c7 bulb ["r7c5"]
arrow-5: arrow r2c3-r1c4 bulb ["r3c2"]
arrow-6: arrow r4c3-r4c2-r3c1 bulb ["r3c4"]
arrow-7: arrow r2c4-r2c5-r3c6 bulb ["r3c3"]
arrow-8: arrow r4c4-r5c3 bulb ["r3c5"]
arrow-9: arrow r7c1-r8c2 bulb ["r6c1"]
arrow-10: arrow r3c9-r2c8 bulb ["r4c9"]
```

Normal Sudoku rules apply.  Numbers on arrows sum to that arrow's circle.  Numbers may repeat on arrows, if other rules allow.
