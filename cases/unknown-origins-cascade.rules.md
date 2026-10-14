---
format: open-rules
title: Unknown Origins Cascade
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/unknown-origins-cascade
library: https://rules.sudoku-sleuth.com/
status: read
exported: 1491d714c6a5f22241137c5cb8c86382
---

```rules
sudoku 9x9
cage-1: cage r3c7-r3c8 total 15 connected true
cage-2: cage r6c7-r6c8 total 17 connected true
kropki-1: kropki r2c1-r2c2 black
kropki-2: kropki r3c2-r3c3 black
kropki-3: kropki r4c3-r4c4 black
kropki-4: kropki r5c4-r5c5 black
kropki-5: kropki r6c5-r6c6 black
kropki-6: kropki r7c6-r7c7 black
kropki-7: kropki r8c7-r8c8 black
kropki-8: kropki r3c3-r4c3 black
kropki-9: kropki r6c6-r7c6 black
kropki-10: kropki r4c2-r4c3 black
kropki-11: kropki r7c5-r8c5 black
arrow-1: arrow r1c2-r1c3-r1c4-r1c5-r1c6-r2c6-r2c7-r2c8-r2c9-r1c9-r1c8 bulb ["r1c1","r2c1"]
arrow-2: arrow r2c3-r2c4-r2c5-r3c6 bulb ["r2c2","r3c2"]
arrow-3: arrow r3c4-r3c5-r4c5-r4c6-r4c7-r4c8-r4c9-r3c9 bulb ["r3c3","r4c3"]
arrow-4: arrow r5c3-r6c3-r6c2-r6c1-r5c1-r5c2-r4c2-r4c1-r3c1 bulb ["r4c4","r5c4"]
arrow-5: arrow r5c6-r5c7-r6c7-r6c8-r5c8-r5c9 bulb ["r5c5","r6c5"]
arrow-6: arrow r8c6-r8c5-r8c4-r7c4 bulb ["r6c6","r7c6"]
arrow-7: arrow r7c8-r7c9-r8c9-r9c9 bulb ["r7c7","r8c7"]
arrow-8: arrow r9c7-r9c6-r9c5-r9c4-r9c3-r9c2-r9c1-r8c1-r8c2-r7c2-r7c3-r8c3 bulb ["r8c8","r9c8"]
```

Normal Sudoku rules apply. Numbers on arrows sum to the number in that arrow's pill, read from top to bottom. Numbers may repeat on arrows, if other rules allow. Numbers in cages sum to the number in the top left corner of the cage. Numbers with black dots between them are in a ratio of 2:1. Not all possible dots are shown.
