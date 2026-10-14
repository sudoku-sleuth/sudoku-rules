---
format: open-rules
title: Friendly Fire
setter: Will Power
source: https://f-puzzles.com/?id=2nxnyvxg
case: https://sudoku-sleuth.com/cases/friendly-fire
library: https://rules.sudoku-sleuth.com/
status: read
exported: f8cf5d719c32c682f365e9f923cde534
---

```rules
sudoku 9x9
arrow-1: arrow r8c8-r7c8 bulb ["r9c8"]
arrow-2: arrow r8c8-r7c7 bulb ["r9c9"]
arrow-3: arrow r2c8-r1c7 bulb ["r3c9"]
arrow-4: arrow r2c8-r2c7 bulb ["r2c9"]
arrow-5: arrow r2c8-r3c7 bulb ["r1c9"]
arrow-6: arrow r2c8-r3c8 bulb ["r1c8"]
arrow-7: arrow r2c2-r3c1 bulb ["r1c3"]
arrow-8: arrow r2c2-r3c2 bulb ["r1c2"]
arrow-9: arrow r2c2-r3c3 bulb ["r1c1"]
arrow-10: arrow r2c2-r2c3 bulb ["r2c1"]
arrow-11: arrow r8c2-r9c3 bulb ["r7c1"]
arrow-12: arrow r8c2-r8c3 bulb ["r8c1"]
arrow-13: arrow r8c2-r7c2 bulb ["r9c2"]
arrow-14: arrow r8c2-r9c1 bulb ["r7c3"]
arrow-15: arrow r8c8-r9c7 bulb ["r7c9"]
arrow-16: arrow r8c8-r8c9 bulb ["r8c7"]
arrow-17: arrow r4c6-r4c5 bulb ["r4c7"]
arrow-18: arrow r4c4-r5c4 bulb ["r3c4"]
arrow-19: arrow r6c4-r6c5 bulb ["r6c3"]
arrow-20: arrow r6c6-r5c6 bulb ["r7c6"]
pair-1: pair r4c6-r5c6 sum 5
pair-2: pair r8c6-r9c6 sum 5
pair-3: pair r4c1-r5c1 sum 5
pair-4: pair r5c9-r6c9 sum 5
pair-5: pair r1c4-r2c4 sum 5
```

Normal Sudoku rules apply. Numbers on arrows sum to that arrow's circle. Numbers with a V between them sum to 5. Not all V are given.
