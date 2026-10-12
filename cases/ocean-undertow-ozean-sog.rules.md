---
format: open-rules
title: Ocean Undertow (Ozean-Sog)
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/ocean-undertow-ozean-sog
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c4-r1c5-r2c4 total 9 connected true
cage-2: cage r2c3-r3c2-r3c3 total 8 connected true
cage-3: cage r6c1-r6c2-r7c1 total 7 connected true
cage-4: cage r8c3-r9c2-r9c3 total 8 connected true
cage-5: cage r7c4-r7c5-r8c4 total 7 connected true
cage-6: cage r5c6-r6c5-r6c6 total 8 connected true
cage-7: cage r4c7-r4c8-r5c7 total 7 connected true
cage-8: cage r2c9-r3c8-r3c9 total 8 connected true
cage-9: cage r8c9-r9c8-r9c9 total 7 connected true
arrow-1: arrow r8c6-r7c7-r6c8 bulb ["r9c5"]
arrow-2: arrow r4c5-r3c6-r2c7 bulb ["r5c4"]
arrow-3: arrow r2c2-r1c3 bulb ["r3c1"]
arrow-4: arrow r3c3-r2c4-r1c5 bulb ["r4c2"]
arrow-5: arrow r5c9-r6c8 bulb ["r4c9"]
```

Normal Sudoku rules apply. Numbers in cages sum to the number in the top left corner of the cage. Numbers cannot repeat in cages. Numbers on arrows sum to the number in the arrow's circle. Numbers can repeat on arrows, if other rules allow.
