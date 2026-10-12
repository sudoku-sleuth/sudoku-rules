---
format: open-rules
title: Neighbourhood Archery
setter: Timotab
source: https://sudokupad.app/ztl1n4602p
case: https://sudoku-sleuth.com/cases/neighbourhood-archery
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
arrow-1: arrow r3c3-r4c3-r5c3 bulb ["r2c3"]
arrow-2: arrow r2c4-r3c4 bulb ["r2c5"]
arrow-3: arrow r3c7-r4c7-r5c7 bulb ["r2c7"]
arrow-4: arrow r3c9-r4c8 bulb ["r2c8"]
arrow-5: arrow r4c5-r3c4 bulb ["r4c4"]
arrow-6: arrow r6c3-r7c4 bulb ["r5c2"]
arrow-7: arrow r6c5-r7c5 bulb ["r5c5"]
arrow-8: arrow r5c6 bulb ["r6c7"]
arrow-9: arrow r7c2-r8c2 bulb ["r7c3"]
arrow-10: arrow r9c7-r9c8 bulb ["r8c7"]
```

• Normal Sudoku rules apply: place the digits 1 to 9 in every row, column, and box, once each.
• Digits along arrows must sum to the value in the attached circle.
• Additionally, a circle's neighbourhood includes the cell containing the circle, and any cell touching it (on an edge or corner). The digit in the circle is the number of cells in its neighbourhood that have the same odd-even parity as the circled digit.
