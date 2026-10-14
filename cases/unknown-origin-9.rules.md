---
format: open-rules
title: Unknown Origin 9
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/unknown-origin-9
library: https://rules.sudoku-sleuth.com/
status: read
exported: 11d245dc5a0d95b61d44dc05e48dd9e4
---

```rules
sudoku 9x9
kropki-1: kropki r8c6-r8c7 white
kropki-2: kropki r4c4-r5c4 white
kropki-3: kropki r4c8-r4c9 white
kropki-4: kropki r4c9-r5c9 white
kropki-5: kropki r1c1-r1c2 white
kropki-6: kropki r6c7-r6c8 white
kropki-7: kropki r2c5-r2c6 white
arrow-1: arrow r6c7-r7c7-r7c8-r7c9-r8c9-r9c9-r9c8-r8c8 bulb ["r6c5","r6c6"]
arrow-2: arrow r7c6-r8c6-r8c7-r9c7-r9c6-r9c5-r9c4-r9c3-r9c2 bulb ["r6c5","r6c6"]
arrow-3: arrow r5c7-r5c8-r6c8-r6c9-r5c9-r4c9-r4c8-r4c7 bulb ["r6c5","r6c6"]
arrow-4: arrow r7c5-r8c5-r8c4-r8c3-r8c2-r7c2-r7c1-r8c1 bulb ["r6c5","r6c6"]
arrow-5: arrow r5c6-r4c6-r3c6-r3c7-r3c8-r3c9-r2c9-r1c9-r1c8 bulb ["r6c5","r6c6"]
arrow-6: arrow r7c4-r7c3-r6c2-r6c1-r5c1-r5c2-r4c2-r4c1-r3c1-r3c2 bulb ["r6c5","r6c6"]
arrow-7: arrow r6c4-r6c3-r5c3-r4c3-r3c3-r2c2-r2c1-r1c1-r1c2 bulb ["r6c5","r6c6"]
arrow-8: arrow r5c4-r4c4-r3c4-r2c5-r2c6-r2c7-r1c7 bulb ["r6c5","r6c6"]
arrow-9: arrow r5c5-r4c5-r3c5-r2c4-r2c3-r1c3-r1c4-r1c5-r1c6 bulb ["r6c5","r6c6"]
pair-1: pair r6c4-r6c5 sum 10
pair-2: pair r6c5-r7c5 sum 10
pair-3: pair r6c6-r7c6 sum 10
pair-4: pair r4c5-r5c5 sum 10
pair-5: pair r2c2-r3c2 sum 10
pair-6: pair r6c8-r6c9 sum 10
pair-7: pair r5c5-r6c5 sum 5
pair-8: pair r5c6-r6c6 sum 5
pair-9: pair r9c7-r9c8 sum 5
pair-10: pair r8c7-r8c8 sum 5
pair-11: pair r9c3-r9c4 sum 5
pair-12: pair r1c9-r2c9 sum 5
pair-13: pair r1c6-r1c7 sum 5
```

Normal Sudoku rules apply. Numbers on arrows sum to the number in the pill in the middle of the puzzle. Numbers on arrows may repeat. Numbers with a V between them sum to 5. Numbers with an X between them sum to 10. Numbers with a white dot between them are consecutive. Not all possible X, V and dots are shown.
