---
format: open-rules
title: Little Quiver
setter: Meggen033
source: ""
case: https://sudoku-sleuth.com/cases/little-quiver
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
arrow-1: arrow r2c2-r3c3 bulb ["r1c1"]
arrow-2: arrow r1c4-r2c4 bulb ["r1c5"]
arrow-3: arrow r4c1-r4c2 bulb ["r5c1"]
arrow-4: arrow r4c9-r4c8 bulb ["r5c9"]
arrow-5: arrow r9c4-r8c4 bulb ["r9c5"]
arrow-6: arrow r8c6 bulb ["r9c7"]
arrow-7: arrow r7c9-r6c8 bulb ["r8c8"]
arrow-8: arrow r3c7-r3c8-r3c9 bulb ["r2c8"]
arrow-9: arrow r8c3-r7c3 bulb ["r9c2"]
quadruple-1: quadruple r3c3-r3c4-r4c3-r4c4 digits [1,2,3,4]
quadruple-2: quadruple r6c6-r6c7-r7c6-r7c7 digits [6,7,8,9]
quadruple-3: quadruple r8c8-r8c9-r9c8-r9c9 digits [4,5]
```

Normal Sudoku rules apply.

Arrow: The digits along each arrow must sum to the digit in the circled cell. Digits may repeat along an arrow if permitted by other rules.

Quadruple: Circled digits where four cells meet must be present as values in at least one of those four cells

Exported from sudokulab.net
