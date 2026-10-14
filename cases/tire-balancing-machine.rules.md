---
format: open-rules
title: Tire Balancing Machine
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/tire-balancing-machine
library: https://rules.sudoku-sleuth.com/
status: read
exported: 91d6049e74d5f320638cc5a6d2921497
---

```rules
sudoku 9x9
cage-1: cage r2c1-r2c2-r2c3 total 15 connected true
cage-2: cage r9c7-r9c8-r9c9 total 20 connected true
cage-3: cage r8c7-r8c8-r8c9 total 15 connected true
cage-4: cage r7c7-r7c8-r7c9 total 10 connected true
cage-5: cage r7c2-r8c2-r9c2 total 15 connected true
cage-6: cage r7c1-r8c1-r9c1 total 10 connected true
cage-7: cage r7c3-r8c3-r9c3 total 20 connected true
cage-8: cage r3c1-r3c2-r3c3 total 20 connected true
cage-9: cage r1c1-r1c2-r1c3 total 10 connected true
cage-10: cage r1c8-r2c8-r3c8 total 10 connected true
cage-11: cage r1c7-r2c7-r3c7 total 15 connected true
cage-12: cage r1c9-r2c9-r3c9 total 20 connected true
cage-13: cage r4c9-r5c9-r6c9 total 10 connected true
cage-14: cage r9c4-r9c5-r9c6 total 8 connected true
cage-15: cage r4c1-r5c1-r6c1 total 24 connected true
cage-16: cage r1c4-r1c5-r1c6 total 21 connected true
kropki-1: kropki r5c3-r5c4 black
kropki-2: kropki r2c5-r3c5 black
kropki-3: kropki r4c6-r4c7 black
kropki-4: kropki r6c6-r6c7 black
kropki-5: kropki r5c2-r6c2 black
arrow-1: arrow r3c3-r2c2-r1c1 bulb ["r4c4"]
arrow-2: arrow r3c7-r2c8-r1c9 bulb ["r4c6"]
arrow-3: arrow r7c7-r8c8-r9c9 bulb ["r6c6"]
arrow-4: arrow r7c3-r8c2-r9c1 bulb ["r6c4"]
```

Normal Sudoku rules apply. Numbers in cages sum to the number in the top left corner of the cage. Numbers on arrows sum to the number in the arrow's circle. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given.
