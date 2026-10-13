---
format: open-rules
title: Unknown Origin Playground
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/unknown-origin-playground
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r8c3-r9c3 colour "white"
kropki-2: kropki r8c2-r8c3 colour "white"
kropki-3: kropki r8c1-r8c2 colour "white"
kropki-4: kropki r8c4-r8c5 colour "white"
kropki-5: kropki r8c5-r8c6 colour "white"
kropki-6: kropki r1c2-r2c2 colour "white"
kropki-7: kropki r2c2-r3c2 colour "white"
kropki-8: kropki r4c2-r5c2 colour "white"
kropki-9: kropki r7c8-r7c9 colour "white"
kropki-10: kropki r7c4-r7c5 colour "black"
kropki-11: kropki r7c5-r7c6 colour "black"
arrow-1: arrow r3c6-r2c7-r2c8 bulb ["r4c5","r4c6"]
arrow-2: arrow r3c5-r2c6-r1c7-r1c8 bulb ["r4c5","r4c6"]
arrow-3: arrow r3c7-r3c8-r2c9-r1c9 bulb ["r4c5","r4c6"]
arrow-4: arrow r4c7-r4c8-r4c9-r5c9-r6c9-r6c8-r5c8 bulb ["r5c6","r6c6"]
arrow-5: arrow r5c7-r6c7-r7c7-r7c8-r7c9-r8c9-r9c9 bulb ["r5c6","r6c6"]
arrow-6: arrow r7c5-r7c6-r8c6-r8c7-r8c8-r9c8-r9c7 bulb ["r6c4","r6c5"]
arrow-7: arrow r7c4-r8c4-r8c5-r9c5-r9c4 bulb ["r6c4","r6c5"]
arrow-8: arrow r7c3-r8c3-r9c3-r9c2-r9c1-r8c1-r8c2 bulb ["r6c4","r6c5"]
arrow-9: arrow r3c4-r2c4-r2c5-r1c6-r1c5-r1c4-r1c3-r1c2 bulb ["r4c4","r5c4"]
arrow-10: arrow r4c3-r5c3-r6c3-r6c2-r7c2-r7c1-r6c1 bulb ["r4c4","r5c4"]
arrow-11: arrow r3c3-r2c3-r2c2-r1c1-r2c1-r3c1-r3c2-r4c2-r4c1-r5c1 bulb ["r4c4","r5c4"]
pair-1: pair r4c4-r5c4 sum 10
pair-2: pair r6c4-r6c5 sum 10
pair-3: pair r5c6-r6c6 sum 10
pair-4: pair r4c5-r4c6 sum 10
pair-5: pair r9c7-r9c8 sum 10
pair-6: pair r4c4-r4c5 sum 5
```

Normal Sudoku rules apply. Numbers on arrows sum to the number in the pill at the origin of the arrow. Numbers may repeat on arrows. Numbers with an X between them sum to 10. Numbers with a V between them sum to 5. Numbers with a white dot between them are consecutive, Numbers with a black dot between them are in a ratio of 2:1. Not all possible X, V and dots are given.
