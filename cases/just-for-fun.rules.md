---
format: open-rules
title: Just For Fun
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/just-for-fun
library: https://rules.sudoku-sleuth.com/
status: read
exported: 706ee32b2309a06f1815794400f7d290
---

```rules
sudoku 9x9
kropki-1: kropki r4c2-r5c2 white
kropki-2: kropki r5c2-r6c2 white
kropki-3: kropki r9c5-r9c6 white
kropki-4: kropki r9c4-r9c5 white
kropki-5: kropki r2c7-r2c8 white
kropki-6: kropki r2c6-r2c7 white
kropki-7: kropki r8c8-r8c9 white
kropki-8: kropki r6c5-r7c5 black
kropki-9: kropki r5c3-r5c4 black
kropki-10: kropki r3c5-r4c5 black
kropki-11: kropki r5c6-r5c7 black
kropki-12: kropki r4c7-r5c7 black
kropki-13: kropki r8c5-r9c5 black
arrow-1: arrow r6c6-r6c5 bulb ["r6c7"]
arrow-2: arrow r7c6-r8c5 bulb ["r6c7"]
arrow-3: arrow r7c7-r8c7 bulb ["r6c7"]
arrow-4: arrow r6c4-r5c4 bulb ["r7c4"]
arrow-5: arrow r6c3-r5c2 bulb ["r7c4"]
arrow-6: arrow r7c3-r7c2 bulb ["r7c4"]
arrow-7: arrow r4c4-r4c5 bulb ["r4c3"]
arrow-8: arrow r3c4-r2c5 bulb ["r4c3"]
arrow-9: arrow r3c3-r2c3 bulb ["r4c3"]
arrow-10: arrow r4c6-r5c6 bulb ["r3c6"]
arrow-11: arrow r4c7-r5c8 bulb ["r3c6"]
arrow-12: arrow r3c7-r3c8 bulb ["r3c6"]
pair-1: pair r4c4-r5c4 sum 10
pair-2: pair r4c5-r4c6 sum 10
pair-3: pair r5c6-r6c6 sum 10
```

Normal Sudoku rules apply. Numbers on arrows sum to that arrow's circle. Numbers with an X between them sum to 10. Numbers with a black dot between them are in a ratio of 2:1. Numbers with a white dot between them are consecutive. Not all possible X and dots are shown.
