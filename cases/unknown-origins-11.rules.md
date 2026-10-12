---
format: open-rules
title: Unknown Origins 11
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/unknown-origins-11
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r4c3-r4c4 colour "black"
kropki-2: kropki r5c3-r5c4 colour "black"
arrow-1: arrow r3c2-r2c2-r2c1-r1c1-r1c2 bulb ["r4c3","r5c3"]
arrow-2: arrow r3c3-r2c3-r1c3-r1c4-r2c4 bulb ["r4c3","r5c3"]
arrow-3: arrow r3c4-r2c5-r1c5-r1c6-r1c7 bulb ["r4c3","r5c3"]
arrow-4: arrow r4c2-r4c1-r5c1-r6c1-r5c2 bulb ["r4c3","r5c3"]
arrow-5: arrow r6c2-r7c1-r8c1-r9c1 bulb ["r4c3","r5c3"]
arrow-6: arrow r6c3-r7c3-r7c2-r8c2 bulb ["r4c3","r5c3"]
arrow-7: arrow r6c4-r7c4-r7c5-r7c6-r8c5-r8c4-r9c4-r9c3-r9c2-r8c3 bulb ["r4c4","r5c4"]
arrow-8: arrow r6c5-r6c6-r6c7-r7c7-r8c7-r8c8-r9c8-r9c7-r9c6-r9c5-r8c6 bulb ["r4c4","r5c4"]
arrow-9: arrow r5c5-r5c6-r5c7-r6c8-r7c8-r7c9-r8c9-r9c9 bulb ["r4c4","r5c4"]
arrow-10: arrow r4c5-r4c6-r4c7-r3c7-r3c8-r4c8-r4c9-r5c9-r6c9 bulb ["r4c4","r5c4"]
arrow-11: arrow r3c5-r3c6-r2c6-r2c7-r2c8-r1c8-r1c9-r2c9-r3c9 bulb ["r4c4","r5c4"]
pair-1: pair r1c1-r2c1 relation {"op":"sum","value":10}
pair-2: pair r3c2-r3c3 relation {"op":"sum","value":10}
pair-3: pair r1c5-r2c5 relation {"op":"sum","value":10}
pair-4: pair r2c6-r3c6 relation {"op":"sum","value":10}
pair-5: pair r2c8-r2c9 relation {"op":"sum","value":10}
pair-6: pair r3c8-r3c9 relation {"op":"sum","value":10}
pair-7: pair r4c8-r4c9 relation {"op":"sum","value":10}
pair-8: pair r5c9-r6c9 relation {"op":"sum","value":10}
pair-9: pair r7c9-r8c9 relation {"op":"sum","value":10}
pair-10: pair r5c8-r6c8 relation {"op":"sum","value":10}
pair-11: pair r5c7-r6c7 relation {"op":"sum","value":10}
pair-12: pair r5c6-r6c6 relation {"op":"sum","value":10}
pair-13: pair r8c7-r8c8 relation {"op":"sum","value":10}
pair-14: pair r9c1-r9c2 relation {"op":"sum","value":10}
pair-15: pair r2c1-r3c1 relation {"op":"sum","value":5}
pair-16: pair r2c2-r3c2 relation {"op":"sum","value":5}
pair-17: pair r1c4-r1c5 relation {"op":"sum","value":5}
pair-18: pair r1c7-r1c8 relation {"op":"sum","value":5}
pair-19: pair r2c9-r3c9 relation {"op":"sum","value":5}
pair-20: pair r9c6-r9c7 relation {"op":"sum","value":5}
pair-21: pair r8c2-r8c3 relation {"op":"sum","value":5}
pair-22: pair r5c2-r5c3 relation {"op":"sum","value":5}
```

Normal Sudoku rules apply. Numbers on arrows sum to the number in the pill attached to that arrow. Numbers may repeat on arrows. Numbers with an X between them sum to 10. Numbers with a V between them sum to 5. Numbers with a black dot between them are in a ratio of 2:1. Not all possible X, V and dots are given.
