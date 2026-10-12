---
format: open-rules
title: Beehive
setter: Will Power
source: https://f-puzzles.com/?id=yhe5m9kj
case: https://sudoku-sleuth.com/cases/beehive
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c6=2 r1c9=9 r2c2=8 r2c5=3 r3c4=8 r5c2=7 r5c5=6 r5c9=5 r7c2=6 r9c4=4 r9c8=7
---

```rules
sudoku 9x9
arrow-1: arrow r3c7-r2c8-r1c7 bulb ["r4c6"]
arrow-2: arrow r3c6 bulb ["r4c5"]
arrow-3: arrow r4c7-r5c8 bulb ["r5c6"]
arrow-4: arrow r7c7-r8c8-r9c9 bulb ["r6c6"]
arrow-5: arrow r7c6-r8c7 bulb ["r6c5"]
arrow-6: arrow r7c5 bulb ["r6c4"]
arrow-7: arrow r5c3-r6c2 bulb ["r5c4"]
arrow-8: arrow r6c5-r7c4 bulb ["r5c5"]
arrow-9: arrow r4c3-r3c2-r2c1 bulb ["r4c4"]
```

Normal Sudoku rules apply.  Thermo-arrows:  The sum of the numbers on an arrow is shown in its circle. Cells on arrows must remain the same, or increase, moving toward the arrow circle.  Numbers may repeat on arrows, if other rules allow.
