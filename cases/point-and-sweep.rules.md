---
format: open-rules
title: Point and Sweep
setter: Timotab
source: https://sudokupad.app/l1h0ag4lb9
case: https://sudoku-sleuth.com/cases/point-and-sweep
library: https://rules.sudoku-sleuth.com/
status: read
exported: cde0bdb0b7f07d100e836a95a3d85683
---

```rules
sudoku 9x9
arrow-1: arrow r3c2-r3c3-r3c4 bulb ["r3c1"]
arrow-2: arrow r4c6-r5c6-r6c6 bulb ["r3c6"]
arrow-3: arrow r3c7-r4c7 bulb ["r2c8"]
arrow-4: arrow r7c5-r7c4-r7c3 bulb ["r7c6"]
arrow-5: arrow r8c8-r9c9 bulb ["r7c7"]
arrow-6: arrow r7c9 bulb ["r6c8"]
arrow-7: arrow r5c2-r6c1 bulb ["r5c3"]
arrow-8: arrow r2c4-r2c5 bulb ["r1c3"]
arrow-9: arrow r8c2-r9c2 bulb ["r7c2"]
```

• Normal Sudoku rules apply: place the digits 1 to 9 in every row, column, and box, once each.
• Digits along arrows must sum to the value in the attached circle.
• Additionally, a circle's neighbourhood includes the cell containing the circle, and any cell touching it (on an edge or corner). The digit in the circle is the number of cells in its neighbourhood that have the same odd-even parity as the circled digit.
