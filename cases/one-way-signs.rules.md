---
format: open-rules
title: One-Way Signs
setter: Will Power
source: https://f-puzzles.com/?id=yyps8pwf
case: https://sudoku-sleuth.com/cases/one-way-signs
library: https://rules.sudoku-sleuth.com/
status: read
givens: r4c8=5 r9c3=5
---

```rules
sudoku 9x9
arrow-1: arrow r1c7-r1c8 bulb ["r1c6"]
arrow-2: arrow r2c5-r2c6 bulb ["r2c4"]
arrow-3: arrow r3c5-r3c6-r3c7 bulb ["r3c4"]
arrow-4: arrow r4c3-r4c4-r4c5 bulb ["r4c2"]
arrow-5: arrow r5c3-r5c4 bulb ["r5c2"]
arrow-6: arrow r6c2-r6c3 bulb ["r6c1"]
arrow-7: arrow r6c6-r6c7-r6c8 bulb ["r6c5"]
arrow-8: arrow r7c5-r7c6-r7c7 bulb ["r7c4"]
arrow-9: arrow r8c4-r8c5-r8c6 bulb ["r8c3"]
arrow-10: arrow r9c8-r9c9 bulb ["r9c7"]
arrow-11: arrow r5c7-r5c8-r5c9 bulb ["r5c6"]
pair-1: pair r7c4-r8c4 relation {"op":"sum","value":10}
pair-2: pair r6c5-r6c6 relation {"op":"sum","value":10}
pair-3: pair r3c7-r4c7 relation {"op":"sum","value":10}
pair-4: pair r3c3-r4c3 relation {"op":"sum","value":10}
pair-5: pair r8c9-r9c9 relation {"op":"sum","value":10}
pair-6: pair r6c6-r7c6 relation {"op":"sum","value":5}
pair-7: pair r7c2-r8c2 relation {"op":"sum","value":5}
pair-8: pair r2c5-r3c5 relation {"op":"sum","value":5}
pair-9: pair r5c8-r5c9 relation {"op":"sum","value":5}
```

Normal Sudoku rules apply.  Numbers on arrows sum to the circle on the arrow.  An X is between two numbers that sum to 10.  A V is between two numbers that sum to 5.  Not all X and V are given.
