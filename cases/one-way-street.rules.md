---
format: open-rules
title: One Way Street
setter: Timotab
source: https://sudokupad.app/dijyohhehy
case: https://sudoku-sleuth.com/cases/one-way-street
library: https://rules.sudoku-sleuth.com/
status: flagged
flags:
  - A feature in the source still needs a drawing definition.
---

```rules
sudoku 9x9
arrow-1: arrow r2c4-r3c4 bulb ["r1c3"]
arrow-2: arrow r8c4-r7c4 bulb ["r9c3"]
arrow-3: arrow r6c6-r7c7 bulb ["r5c5"]
arrow-4: arrow r6c9-r5c9-r4c9 bulb ["r7c9"]
arrow-5: arrow r2c8-r3c7 bulb ["r2c9"]
arrow-6: arrow r6c1-r5c2 bulb ["r7c2"]
arrow-7: arrow r3c2-r2c2 bulb ["r4c3"]
arrow-8: arrow r4c4 bulb ["r3c5"]
arrow-9: arrow r6c4 bulb ["r7c5"]
```

• Normal sudoku rules apply. 
• Digits along arrows must sum to the value in the attached circle.
• Additionally, a circle's neighbourhood includes the cell containing the circle, and any cell touching it (on an edge or corner). The digit in the circle is the number of cells in its neighbourhood that have the same odd-even parity as the circled digit.
