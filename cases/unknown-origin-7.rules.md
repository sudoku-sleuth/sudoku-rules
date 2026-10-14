---
format: open-rules
title: Unknown Origin 7
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/unknown-origin-7
library: https://rules.sudoku-sleuth.com/
status: read
exported: 59dbd14cf435cd835acd435be4d37d53
---

```rules
sudoku 9x9
cage-1: cage r7c9-r8c9 total 11 connected true
cage-2: cage r7c3-r8c3-r9c3 total 15 connected true
cage-3: cage r4c2-r5c2-r5c3 total 18 connected true
cage-4: cage r4c4-r4c5-r4c6 total 15 connected true
cage-5: cage r6c5-r6c6 total 11 connected true
kropki-1: kropki r6c8-r7c8 black
kropki-2: kropki r6c2-r7c2 black
kropki-3: kropki r6c2-r6c3 black
kropki-4: kropki r1c3-r1c4 black
kropki-5: kropki r8c3-r8c4 black
kropki-6: kropki r4c9-r5c9 black
kropki-7: kropki r5c8-r5c9 black
kropki-8: kropki r1c8-r2c8 black
kropki-9: kropki r8c7-r9c7 black
kropki-10: kropki r7c4-r8c4 black
kropki-11: kropki r3c4-r4c4 black
kropki-12: kropki r8c6-r9c6 black
kropki-13: kropki r3c5-r4c5 black
kropki-14: kropki r4c2-r5c2 black
kropki-15: kropki r7c1-r8c1 black
kropki-16: kropki r5c5-r6c5 black
arrow-1: arrow r5c3-r5c2-r4c2-r3c2-r3c1-r2c1-r1c1-r1c2-r1c3-r2c3-r2c2 bulb ["r5c4","r5c5"]
arrow-2: arrow r4c3-r3c3-r3c4-r2c4-r1c4-r1c5-r2c5-r2c6-r1c6-r1c7-r2c7 bulb ["r5c4","r5c5"]
arrow-3: arrow r4c4-r4c5-r4c6-r3c6-r3c7-r3c8-r2c8-r1c8-r1c9-r2c9-r3c9 bulb ["r5c4","r5c5"]
arrow-4: arrow r5c6-r5c7-r4c7-r4c8-r4c9-r5c9-r5c8-r6c8-r6c9-r7c9-r8c9 bulb ["r5c4","r5c5"]
arrow-5: arrow r6c5-r7c5-r7c6-r6c6-r7c7-r7c8-r8c8-r8c7-r9c7-r9c8-r9c9 bulb ["r5c4","r5c5"]
arrow-6: arrow r6c4-r7c4-r8c4-r8c5-r8c6-r9c6-r9c5-r9c4-r9c3-r8c3-r7c3 bulb ["r5c4","r5c5"]
arrow-7: arrow r6c3-r6c2-r7c2-r8c2-r9c2-r9c1-r8c1-r7c1-r6c1-r5c1-r4c1 bulb ["r5c4","r5c5"]
```

Normal sudoku rules apply. Numbers on arrows sum to the number in the pill at the arrow's origin. Numbers in cages sum to the number in the top left corner of the cage. Numbers with a black dot between them are in a ratio of 2:1. Not all dots are given.
