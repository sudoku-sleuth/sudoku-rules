---
format: open-rules
title: aLmost phistomofeL heLps
setter: Will Power
source: https://f-puzzles.com/?id=y4sp7ac4
case: https://sudoku-sleuth.com/cases/almost-phistomofel-helps
library: https://rules.sudoku-sleuth.com/
status: read
givens: r5c5=1 r6c9=4 r7c3=6 r9c1=4
---

```rules
sudoku 9x9
anti-king
arrow-1: arrow r6c3-r5c3-r4c3 bulb ["r7c3"]
arrow-2: arrow r8c4-r8c5-r8c6 bulb ["r7c3"]
arrow-3: arrow r6c4-r5c5 bulb ["r7c3"]
arrow-4: arrow r5c2-r4c2 bulb ["r6c2"]
arrow-5: arrow r7c2-r8c3 bulb ["r8c1"]
arrow-6: arrow r7c5-r7c6 bulb ["r7c4"]
arrow-7: arrow r4c6-r5c5 bulb ["r3c7"]
arrow-8: arrow r6c6-r5c5 bulb ["r7c7"]
pair-1: pair r4c8-r5c8 relation {"op":"sum","value":10}
pair-2: pair r6c5-r6c6 relation {"op":"sum","value":10}
pair-3: pair r2c8-r3c8 relation {"op":"sum","value":10}
pair-4: pair r7c4-r8c4 relation {"op":"sum","value":10}
pair-5: pair r4c7-r5c7 relation {"op":"sum","value":10}
```

Normal Sudoku rules apply.  Cells a chess king's move apart cannot have the same digit.  Numbers on arrows sum to the circle on the arrow.  Numbers separated by an X sum to 10.  Not all X are given.
