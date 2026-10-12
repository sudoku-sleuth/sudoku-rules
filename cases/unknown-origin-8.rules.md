---
format: open-rules
title: Unknown Origin 8
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/unknown-origin-8
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage r5c6-r5c7-r6c7 total 7 connected true
kropki-1: kropki r7c5-r8c5 colour "white"
kropki-2: kropki r5c7-r5c8 colour "white"
kropki-3: kropki r4c6-r4c7 colour "white"
kropki-4: kropki r6c5-r6c6 colour "black"
kropki-5: kropki r4c3-r5c3 colour "black"
kropki-6: kropki r8c1-r8c2 colour "black"
kropki-7: kropki r3c4-r3c5 colour "black"
kropki-8: kropki r6c7-r6c8 colour "black"
kropki-9: kropki r6c2-r6c3 colour "black"
kropki-10: kropki r1c2-r2c2 colour "black"
kropki-11: kropki r2c3-r3c3 colour "black"
kropki-12: kropki r2c9-r3c9 colour "black"
kropki-13: kropki r8c7-r9c7 colour "black"
arrow-1: arrow r4c3-r3c3-r3c2-r3c1-r2c1-r1c1-r1c2-r1c3-r2c3-r2c2 bulb ["r5c4","r5c5"]
arrow-2: arrow r4c4-r3c4-r2c4-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9-r2c9 bulb ["r5c4","r5c5"]
arrow-3: arrow r4c5-r3c5-r2c5-r2c6-r2c7-r2c8-r3c8-r3c9-r4c9-r5c9 bulb ["r5c4","r5c5"]
arrow-4: arrow r4c6-r3c6-r3c7-r4c7-r4c8-r5c8-r6c8-r6c9-r7c9-r8c9 bulb ["r5c4","r5c5"]
arrow-5: arrow r5c6-r5c7-r6c7-r7c7-r7c8-r8c8-r8c7-r9c7-r9c8-r9c9 bulb ["r5c4","r5c5"]
arrow-6: arrow r5c3-r6c3-r6c2-r7c2-r7c1-r6c1-r5c1-r4c1-r4c2-r5c2 bulb ["r5c4","r5c5"]
arrow-7: arrow r6c4-r7c4-r7c3-r8c3-r9c3-r9c2-r9c1-r8c1-r8c2 bulb ["r5c4","r5c5"]
arrow-8: arrow r6c5-r6c6-r7c6-r8c6-r9c6-r9c5-r9c4-r8c4-r8c5-r7c5 bulb ["r5c4","r5c5"]
parity-cells r7c1-r7c2 parity "even"
```

Normal Sudoku rules apply. Numbers on arrows sum to the number in the pill in the center of the grid. Numbers in cages sum to the number in the top left corner of the cage. Numbers cannot repeat in cages. Cells with a gray square are even. Numbers with black dots between them are in a ratio of 2:1. Numbers with a white dot between them are consecutive. Not all dots are given.
