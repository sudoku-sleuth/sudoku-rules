---
format: open-rules
title: Pass the Buck
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/pass-the-buck
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r6c6-r6c7 colour "white"
kropki-2: kropki r7c9-r8c9 colour "black"
kropki-3: kropki r2c8-r2c9 colour "black"
kropki-4: kropki r8c2-r9c2 colour "black"
kropki-5: kropki r4c9-r5c9 colour "black"
kropki-6: kropki r1c4-r2c4 colour "black"
kropki-7: kropki r3c5-r4c5 colour "black"
kropki-8: kropki r5c3-r5c4 colour "black"
kropki-9: kropki r4c4-r5c4 colour "black"
kropki-10: kropki r4c6-r5c6 colour "black"
kropki-11: kropki r4c5-r4c6 colour "black"
arrow-1: arrow r8c9-r7c9 bulb ["r9c9"]
arrow-2: arrow r8c8-r7c7 bulb ["r9c9"]
arrow-3: arrow r9c8-r9c7 bulb ["r9c9"]
arrow-4: arrow r8c1-r7c1 bulb ["r9c1"]
arrow-5: arrow r9c2-r9c3 bulb ["r9c1"]
arrow-6: arrow r2c2-r3c3 bulb ["r1c1"]
arrow-7: arrow r2c1-r3c1 bulb ["r1c1"]
arrow-8: arrow r1c2-r1c3 bulb ["r1c1"]
arrow-9: arrow r2c8-r3c7 bulb ["r1c9"]
arrow-10: arrow r2c9-r3c9 bulb ["r1c9"]
arrow-11: arrow r1c8-r1c7 bulb ["r1c9"]
pair-1: pair r8c7-r9c7 relation {"op":"sum","value":5}
pair-2: pair r3c2-r4c2 relation {"op":"sum","value":5}
```

Geben Sie den Schwarzen Peter weiter. Normal Sudoku rules apply. Numbers on arrows sum to the number in that arrow's circle. Numbers with a V between them sum to 5. Numbers with a black dot between them are in a ratio of 2:1. Numbers with a white dot between them are consecutive. Not all possible V, and dots are given.
