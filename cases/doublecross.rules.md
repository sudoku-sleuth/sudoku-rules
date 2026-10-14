---
format: open-rules
title: Doublecross
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/doublecross
library: https://rules.sudoku-sleuth.com/
status: read
exported: 73f49d9c2173203aeb4fd2877c8ef232
---

```rules
sudoku 9x9
cage-1: cage r3c4-r4c4 total 11 connected true
cage-2: cage r3c5-r3c6-r3c7 total 21 connected true
cage-3: cage r4c9-r5c8-r5c9 total 21 connected true
cage-4: cage r8c4-r8c5 total 5 connected true
kropki-1: kropki r5c9-r6c9 white
kropki-2: kropki r8c5-r9c5 white
kropki-3: kropki r3c2-r4c2 black
kropki-4: kropki r4c7-r4c8 black
kropki-5: kropki r8c8-r9c8 black
kropki-6: kropki r7c3-r8c3 black
kropki-7: kropki r7c3-r7c4 black
kropki-8: kropki r1c8-r2c8 black
kropki-9: kropki r5c1-r6c1 black
arrow-1: arrow r3c2-r2c3-r2c4 bulb ["r4c1"]
arrow-2: arrow r6c3-r5c3-r4c2-r3c2 bulb ["r7c3"]
arrow-3: arrow r8c5-r7c4-r6c3 bulb ["r9c6"]
arrow-4: arrow r7c7-r8c6-r8c5 bulb ["r6c8"]
arrow-5: arrow r4c8-r4c7-r5c6 bulb ["r4c9"]
arrow-6: arrow r5c6-r6c7-r7c7 bulb ["r4c5"]
arrow-7: arrow r1c9-r2c9-r3c9-r4c8 bulb ["r1c8"]
```

Normal Sudoku rules apply. ARROWS- Numbers on arrows sum to the number in the arrow's circle. Numbers may repeat on arrows, if other rules allow. KILLER- Numbers in cages sum to the number in the top left corner of the cage. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given.
