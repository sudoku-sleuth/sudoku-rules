---
format: open-rules
title: Vending Machine Coin Sorting
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/vending-machine-coin-sorting
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r4c4-r4c5 total 10 connected true
cage-2: cage r3c6-r4c6 total 10 connected true
cage-3: cage r5c4-r6c4 total 10 connected true
cage-4: cage r6c5-r7c5 total 10 connected true
cage-5: cage r5c5-r5c6 total 10 connected true
kropki-1: kropki r9c1-r9c2 colour "white"
kropki-2: kropki r9c2-r9c3 colour "white"
kropki-3: kropki r9c3-r9c4 colour "white"
kropki-4: kropki r9c4-r9c5 colour "white"
kropki-5: kropki r9c5-r9c6 colour "white"
kropki-6: kropki r6c1-r6c2 colour "white"
kropki-7: kropki r6c2-r7c2 colour "white"
kropki-8: kropki r7c2-r7c3 colour "white"
kropki-9: kropki r7c8-r8c8 colour "black"
kropki-10: kropki r8c7-r8c8 colour "black"
kropki-11: kropki r8c7-r9c7 colour "black"
kropki-12: kropki r1c3-r2c3 colour "black"
kropki-13: kropki r3c9-r4c9 colour "black"
kropki-14: kropki r3c8-r3c9 colour "black"
arrow-1: arrow r2c5-r3c4-r4c3-r5c2 bulb ["r1c6"]
arrow-2: arrow r4c7-r5c6-r6c5-r7c4 bulb ["r3c8"]
arrow-3: arrow r5c8-r6c7-r7c6-r8c5 bulb ["r4c9"]
arrow-4: arrow r3c4-r4c5-r5c6-r6c7 bulb ["r2c3"]
arrow-5: arrow r4c3-r5c4-r6c5-r7c6 bulb ["r3c2"]
arrow-6: arrow r5c2-r6c3-r7c4-r8c5 bulb ["r4c1"]
arrow-7: arrow r5c8-r4c7-r3c6-r2c5 bulb ["r6c9"]
arrow-8: arrow r3c6-r4c5-r5c4 bulb ["r2c7"]
```

Normal Sudoku rules apply. Numbers on arrows sum to the number in the arrow's circle. All arrows are straight, with no turns. Numbers in cages sum to 10. Numbers with white dots between them are consecutive. Numbers with black dots between them are in a ratio of 2:1. Not all possible dots are given.
