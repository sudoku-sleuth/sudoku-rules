---
format: open-rules
title: Factor Factory (Faktorfabrik)
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/factor-factory-faktorfabrik
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c2-r2c2 total 10 connected true
cage-2: cage r8c8-r9c8 total 3 connected true
cage-3: cage r8c9-r9c9 total 12 connected true
cage-4: cage r8c5-r8c6 total 9 connected true
arrow-1: arrow r4c1-r5c1 bulb ["r3c1"]
arrow-2: arrow r2c2-r2c1 bulb ["r3c2"]
arrow-3: arrow r2c4-r2c3 bulb ["r3c3","r3c4"]
arrow-4: arrow r2c5-r1c5-r1c4-r1c3-r1c2-r1c1 bulb ["r3c5","r3c6"]
arrow-5: arrow r6c1-r6c2 bulb ["r7c1"]
arrow-6: arrow r6c3-r5c3 bulb ["r7c2","r7c3"]
arrow-7: arrow r6c4-r5c4-r4c4-r4c3-r4c2 bulb ["r7c4","r7c5"]
arrow-8: arrow r8c5-r8c4-r8c3-r8c2-r8c1-r9c1-r9c2-r9c3-r9c4-r9c5 bulb ["r7c6","r7c7"]
arrow-9: arrow r8c9-r9c9-r9c8-r9c7-r9c6-r8c6-r8c7-r8c8-r7c8-r6c8-r5c8-r6c7-r6c6-r6c5-r5c5-r5c6 bulb ["r6c9","r7c9"]
arrow-10: arrow r4c8-r4c9-r3c9-r3c8-r3c7-r2c7-r2c8-r2c9-r1c9-r1c8-r1c7-r1c6-r2c6 bulb ["r4c6","r4c7"]
```

Normal Sudoku rules apply. Numbers on arrows sum to the number in the arrow's circle/pill. Numbers may repeat on arrows, if other rules allow. Pills are read from left to right or top to bottom. Circles/pills that touch one another are in a ratio of 2:1. Example: a 46 pill can be next to a 23 pill and a 92 pill. The lone pill is not part of either sequence, so it does not touch. Numbers in cages sum to the number in the top left corner of the cage.
