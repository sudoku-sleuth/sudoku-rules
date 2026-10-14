---
format: open-rules
title: Conveyor Belt
setter: Will Power
source: https://f-puzzles.com/?id=yc7ftvv9
case: https://sudoku-sleuth.com/cases/conveyor-belt
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c3=8 r2c3=7 r3c4=8 r4c4=5 r5c5=9 r6c5=6 r7c6=5 r8c6=7 r9c7=8
exported: eb29ceb48b952f9db44b454a6cfd436d
---

```rules
sudoku 9x9
kropki r5c7-r5c8 white
arrow-1: arrow r2c2-r2c1-r1c1 bulb ["r1c2"]
arrow-2: arrow r2c4-r2c5-r1c5 bulb ["r1c4"]
arrow-3: arrow r4c3-r4c2-r3c2 bulb ["r3c3"]
arrow-4: arrow r4c5-r4c6-r3c6 bulb ["r3c5"]
arrow-5: arrow r6c4-r6c3-r5c3 bulb ["r5c4"]
arrow-6: arrow r6c6-r6c7-r5c7 bulb ["r5c6"]
arrow-7: arrow r8c5-r8c4-r7c4 bulb ["r7c5"]
arrow-8: arrow r8c7-r8c8-r7c8 bulb ["r7c7"]
arrow-9: arrow r1c9-r2c9-r3c9 bulb ["r1c8"]
arrow-10: arrow r9c1-r9c2-r9c3 bulb ["r8c1"]
pair r8c1-r9c1 sum 10
```

Normal Sudoku rules apply.  Numbers on arrows sum to the number in the arrow's circle.  Numbers may repeat on arrows, if other rules allow.  Numbers with an X between them sum to 10.  Numbers with a white dot between them are consecutive.  Not all X's and dots are given.
