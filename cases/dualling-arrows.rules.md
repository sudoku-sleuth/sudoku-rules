---
format: open-rules
title: Dualling Arrows
setter: Timotab
source: https://sudokupad.app/2vi9edr9m7
case: https://sudoku-sleuth.com/cases/dualling-arrows
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
arrow-1: arrow r3c4-r2c5-r2c6-r3c7-r4c7 bulb ["r4c3"]
arrow-2: arrow r5c7-r5c6 bulb ["r5c8"]
arrow-3: arrow r6c3-r7c3-r8c3 bulb ["r5c3"]
arrow-4: arrow r4c2-r3c1 bulb ["r5c2"]
arrow-5: arrow r8c7-r9c6 bulb ["r7c6"]
arrow-6: arrow r4c9-r5c9 bulb ["r3c8"]
arrow-7: arrow r1c8-r2c9 bulb ["r2c7"]
arrow-8: arrow r7c1-r8c2 bulb ["r6c1"]
```

• Normal Sudoku rules apply: place the digits 1 to 9 in every row, column, and box, once each.
• Digits along arrows must sum to the value in the attached circle.
• Additionally, a circle's neighbourhood includes the cell containing the circle, and any cell touching it (on an edge or corner). The digit in the circle is the number of cells in its neighbourhood that have the same odd-even parity as the circled digit.
