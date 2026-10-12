---
format: open-rules
title: SHAZAM!
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/shazam
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r8c4-r9c4 total 13 connected true
cage-2: cage r1c6-r2c6 total 17 connected true
cage-3: cage r4c1-r4c2 total 15 connected true
cage-4: cage r6c8-r6c9 total 15 connected true
cage-5: cage r8c5-r9c5 total 17 connected true
cage-6: cage r1c5-r2c5 total 13 connected true
cage-7: cage r4c8-r5c8 total 12 connected true
cage-8: cage r5c2-r6c2 total 14 connected true
cage-9: cage r4c9-r5c9 total 10 connected true
cage-10: cage r5c1-r6c1 total 10 connected true
arrow-1: arrow r5c6-r4c5 bulb ["r5c5"]
arrow-2: arrow r5c4-r6c5 bulb ["r5c5"]
arrow-3: arrow r7c6-r7c5-r7c4 bulb ["r7c7"]
arrow-4: arrow r6c3-r5c3-r4c3 bulb ["r7c3"]
arrow-5: arrow r3c4-r3c5-r3c6 bulb ["r3c3"]
arrow-6: arrow r4c7-r5c7-r6c7 bulb ["r3c7"]
arrow-7: arrow r2c1-r2c2-r1c3 bulb ["r1c1"]
arrow-8: arrow r8c9-r8c8-r9c7 bulb ["r9c9"]
arrow-9: arrow r2c9-r2c8-r1c8 bulb ["r1c9"]
arrow-10: arrow r8c1-r8c2-r9c2 bulb ["r9c1"]
extremum r4c5 type "min" exhaustive false
```

Normal Sudoku rules apply. Numbers on arrows sum to the number in that arrow's circle. Numbers in cages sum to the number in the top left corner of the cage. The number in the gray minimum square is less than all 4 orthogonally adjacent numbers.
