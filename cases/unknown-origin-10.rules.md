---
format: open-rules
title: Unknown Origin 10
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/unknown-origin-10
library: https://rules.sudoku-sleuth.com/
status: read
exported: 2e01fcdd64407b6f97c9e7a4c16cd779
---

```rules
sudoku 9x9
kropki-1: kropki r1c8-r1c9 black
kropki-2: kropki r1c7-r1c8 black
kropki-3: kropki r1c6-r1c7 black
arrow-1: arrow r4c5-r3c5-r2c5-r2c6-r2c7-r2c8-r2c9-r1c9 bulb ["r5c4","r5c5"]
arrow-2: arrow r4c6-r3c6-r3c7-r3c8-r3c9-r4c9-r5c9-r6c9 bulb ["r5c4","r5c5"]
arrow-3: arrow r5c6-r5c7-r4c7-r4c8-r5c8-r6c8-r7c8-r7c9 bulb ["r5c4","r5c5"]
arrow-4: arrow r6c6-r6c7-r7c7-r8c7-r8c8-r8c9-r9c9-r9c8 bulb ["r5c4","r5c5"]
arrow-5: arrow r6c5-r7c5-r7c6-r8c6-r8c5-r9c5-r9c6-r9c7 bulb ["r5c4","r5c5"]
arrow-6: arrow r5c3-r5c2-r5c1-r4c1-r3c1-r2c1-r1c1 bulb ["r5c4","r5c5"]
arrow-7: arrow r6c3-r6c2-r7c2-r8c2-r9c2-r9c1-r8c1-r7c1 bulb ["r5c4","r5c5"]
arrow-8: arrow r6c4-r7c4-r7c3-r8c3-r8c4-r9c4-r9c3 bulb ["r5c4","r5c5"]
arrow-9: arrow r4c3-r4c2-r3c2-r3c3-r2c3-r2c2-r1c2-r1c3-r1c4 bulb ["r5c4","r5c5"]
arrow-10: arrow r4c4-r3c4-r2c4-r1c5-r1c6-r1c7-r1c8 bulb ["r5c4","r5c5"]
pair-1: pair r5c9-r6c9 sum 10
pair-2: pair r3c9-r4c9 sum 10
pair-3: pair r3c7-r3c8 sum 10
pair-4: pair r7c5-r7c6 sum 10
pair-5: pair r5c1-r6c1 sum 5
pair-6: pair r1c3-r2c3 sum 5
pair-7: pair r8c8-r9c8 sum 5
pair-8: pair r5c6-r5c7 sum 5
pair-9: pair r7c2-r8c2 sum 5
pair-10: pair r2c6-r3c6 sum 5
pair-11: pair r3c1-r4c1 sum 5
pair-12: pair r4c8-r4c9 sum 5
pair-13: pair r9c4-r9c5 sum 5
```

Normal Sudoku rules apply. Numbers on arrows sum to the number in the pill at the center of the grid. Numbers may repeat on arrows. Numbers with an X between them sum to 10. Numbers with a V between them sum to 5. Numbers with a black dot between them are in a ratio of 2:1. Not all possible X, V and dots are given.
