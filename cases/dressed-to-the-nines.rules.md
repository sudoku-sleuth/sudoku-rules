---
format: open-rules
title: Dressed to the Nines
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/dressed-to-the-nines
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r3c8-r4c8 colour "black"
kropki-2: kropki r3c2-r4c2 colour "black"
kropki-3: kropki r4c1-r4c2 colour "black"
kropki-4: kropki r1c6-r1c7 colour "black"
arrow-1: arrow r7c8-r6c7-r5c6-r4c5-r3c4-r2c3-r1c2 bulb ["r8c9"]
arrow-2: arrow r5c4-r6c4-r7c4 bulb ["r4c4"]
arrow-3: arrow r9c5-r9c4-r9c3 bulb ["r9c6"]
arrow-4: arrow r7c2-r7c1 bulb ["r7c3"]
arrow-5: arrow r5c1-r4c1-r3c1 bulb ["r6c1"]
arrow-6: arrow r3c2-r4c2 bulb ["r2c2"]
arrow-7: arrow r1c6-r1c7 bulb ["r1c5"]
arrow-8: arrow r3c6-r3c5 bulb ["r3c7"]
arrow-9: arrow r4c8-r3c8-r2c8 bulb ["r5c8"]
```

Normal Sudoku rules apply. Numbers on arrows sum to the number in the arrow's circle. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given.
