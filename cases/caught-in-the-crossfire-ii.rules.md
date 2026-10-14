---
format: open-rules
title: Caught in the Crossfire II
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/caught-in-the-crossfire-ii
library: https://rules.sudoku-sleuth.com/
status: read
exported: bda07c3422415e9135d077be49414966
---

```rules
sudoku 9x9
kropki-1: kropki r5c6-r5c7 black
kropki-2: kropki r8c2-r9c2 black
arrow-1: arrow r2c2-r3c2 bulb ["r1c2"]
arrow-2: arrow r2c2-r2c3 bulb ["r2c1"]
arrow-3: arrow r2c3-r3c3 bulb ["r1c3"]
arrow-4: arrow r3c2-r3c3 bulb ["r3c1"]
arrow-5: arrow r2c8-r3c8 bulb ["r1c8"]
arrow-6: arrow r2c7-r3c7 bulb ["r1c7"]
arrow-7: arrow r2c8-r2c7 bulb ["r2c9"]
arrow-8: arrow r3c8-r3c7 bulb ["r3c9"]
arrow-9: arrow r8c8-r8c9 bulb ["r8c7"]
arrow-10: arrow r9c8-r9c9 bulb ["r9c7"]
arrow-11: arrow r8c8-r9c8 bulb ["r7c8"]
arrow-12: arrow r8c9-r9c9 bulb ["r7c9"]
arrow-13: arrow r8c2-r8c1 bulb ["r8c3"]
arrow-14: arrow r9c2-r9c1 bulb ["r9c3"]
arrow-15: arrow r8c2-r9c2 bulb ["r7c2"]
arrow-16: arrow r8c1-r9c1 bulb ["r7c1"]
arrow-17: arrow r5c5-r6c6 bulb ["r4c4"]
arrow-18: arrow r5c5-r4c6 bulb ["r6c4"]
arrow-19: arrow r5c5-r6c5 bulb ["r4c5"]
arrow-20: arrow r5c5-r5c4 bulb ["r5c6"]
arrow-21: arrow r2c5-r1c5 bulb ["r3c5"]
arrow-22: arrow r8c4-r7c4 bulb ["r9c4"]
arrow-23: arrow r8c6-r7c6 bulb ["r9c6"]
arrow-24: arrow r2c6-r1c6 bulb ["r3c6"]
pair-1: pair r4c5-r4c6 sum 10
pair-2: pair r5c6-r6c6 sum 10
pair-3: pair r8c7-r8c8 sum 5
```

Normal Sudoku rules apply. Numbers on arrows sum to the number in that arrow's circle. All arrows are length 2 and straight. Numbers with a black dot between them are in a ratio of 2:1. Numbers with an X between them sum to 10. Numbers with a V between them sum to 5. Not all possible dots, X and V are given.
