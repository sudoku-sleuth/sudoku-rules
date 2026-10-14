---
format: open-rules
title: Jiggery-Pokery
setter: Will Power
source: https://f-puzzles.com/?id=yd6fe3l6
case: https://sudoku-sleuth.com/cases/jiggery-pokery
library: https://rules.sudoku-sleuth.com/
status: read
exported: 28b4c2b81785cf9f61fa5b60c60ea34c
---

```rules
sudoku 9x9
kropki-1: kropki r3c3-r4c3 white
kropki-2: kropki r5c3-r6c3 white
kropki-3: kropki r3c8-r4c8 white
kropki-4: kropki r7c8-r8c8 white
kropki-5: kropki r1c1-r1c2 white
kropki-6: kropki r6c2-r7c2 white
kropki-7: kropki r7c5-r7c6 white
kropki-8: kropki r4c3-r5c3 black
arrow-1: arrow r4c6-r4c7-r4c8 bulb ["r3c5"]
arrow-2: arrow r6c4-r6c3-r6c2 bulb ["r7c5"]
arrow-3: arrow r4c2-r3c3-r2c4 bulb ["r5c1"]
arrow-4: arrow r6c8-r7c7-r8c6 bulb ["r5c9"]
arrow-5: arrow r5c4-r5c3-r4c3 bulb ["r4c5"]
arrow-6: arrow r5c6-r5c7-r6c7 bulb ["r6c5"]
arrow-7: arrow r3c8-r3c7 bulb ["r4c9"]
arrow-8: arrow r7c2-r7c3 bulb ["r6c1"]
arrow-9: arrow r1c2-r1c1-r2c1 bulb ["r1c3"]
arrow-10: arrow r9c1-r8c1-r7c1 bulb ["r9c2"]
arrow-11: arrow r1c5-r2c5 bulb ["r1c4"]
arrow-12: arrow r9c6-r9c5 bulb ["r9c7"]
pair-1: pair r4c6-r5c6 sum 5
pair-2: pair r5c4-r6c4 sum 5
pair-3: pair r4c7-r5c7 sum 5
pair-4: pair r8c6-r9c6 sum 5
pair-5: pair r6c7-r7c7 sum 5
pair-6: pair r2c4-r3c4 sum 5
pair-7: pair r1c9-r2c9 sum 5
pair-8: pair r3c8-r3c9 sum 5
```

Normal Sudoku rules apply. Numbers on arrows sum to the number in the arrow's circle. Numbers may repeat on arrows, if other rules allow. Numbers with a V between them sum to 5. Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all V's and dots are given.
