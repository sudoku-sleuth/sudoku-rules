---
format: open-rules
title: Extremely Pointed
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/7ql07kcctf
case: https://sudoku-sleuth.com/cases/extremely-pointed
library: https://rules.sudoku-sleuth.com/
status: read
exported: cd4f51bdf478378361d9b01ded486ebc
---

```rules
sudoku 9x9
arrow-1: arrow r2c4-r3c5-r4c5-r5c4 bulb ["r2c3"]
arrow-2: arrow r3c7-r4c8-r5c8 bulb ["r2c6"]
arrow-3: arrow r1c8-r1c7 bulb ["r2c9"]
arrow-4: arrow r7c6 bulb ["r6c7"]
arrow-5: arrow r9c6-r8c5-r7c5-r6c6 bulb ["r9c7"]
arrow-6: arrow r7c3-r6c2-r5c2 bulb ["r8c4"]
arrow-7: arrow r9c2-r9c3 bulb ["r8c1"]
arrow-8: arrow r4c4 bulb ["r5c3"]
extremum-1: extremum r7c5 type "min" exhaustive false
extremum-2: extremum r6c2-r3c5-r4c8 type "max" exhaustive false
```

• Normal Sudoku rules apply.
• Digits placed on an arrow must sum to the digit placed in that arrow's circle.
• Digits placed in blue cells with arrows pointing in must be smaller than all orthogonally adjacent cells.
• Digits placed in yellow cells with arrows pointing out must be larger than all orthogonally adjacent cells.
