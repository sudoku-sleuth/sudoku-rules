---
format: open-rules
title: Autonomous Automation
setter: Will Power
source: https://f-puzzles.com/?id=y4pabrfu
case: https://sudoku-sleuth.com/cases/autonomous-automation
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c8=7 r3c3=1 r6c7=4 r7c3=4
---

```rules
sudoku 9x9
kropki-1: kropki r8c8-r9c8 colour "white"
kropki-2: kropki r8c1-r8c2 colour "white"
kropki-3: kropki r1c2-r2c2 colour "white"
kropki-4: kropki r2c8-r2c9 colour "white"
kropki-5: kropki r2c4-r3c4 colour "white"
kropki-6: kropki r3c4-r4c4 colour "white"
kropki-7: kropki r4c4-r5c4 colour "white"
kropki-8: kropki r5c4-r6c4 colour "white"
kropki-9: kropki r1c5-r2c5 colour "white"
arrow-1: arrow r3c3-r4c3-r5c3 bulb ["r3c4"]
arrow-2: arrow r7c3-r7c4-r7c5 bulb ["r6c3"]
arrow-3: arrow r7c7-r6c7-r5c7 bulb ["r7c6"]
arrow-4: arrow r3c7-r3c6-r3c5 bulb ["r4c7"]
arrow-5: arrow r6c6-r5c6 bulb ["r6c5"]
arrow-6: arrow r5c5-r4c6 bulb ["r5c4"]
arrow-7: arrow r1c1-r1c2-r2c2 bulb ["r2c1"]
arrow-8: arrow r1c9-r2c9-r2c8 bulb ["r1c8"]
arrow-9: arrow r9c9-r9c8-r8c8 bulb ["r8c9"]
arrow-10: arrow r9c1-r8c1-r8c2 bulb ["r9c2"]
```

Normal Sudoku rules apply.  Numbers on arrows sum to the number in the arrow's circle.  Numbers on both sides of a white dot are consecutive.
