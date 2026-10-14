---
format: open-rules
title: Ketchup
setter: Timotab
source: https://sudokupad.app/293h0v0b8c
case: https://sudoku-sleuth.com/cases/ketchup
library: https://rules.sudoku-sleuth.com/
status: flagged
flags:
  - A feature in the source still needs a drawing definition.
givens: r1c7=5 r1c8=7
exported: 3fb1ce48c555de5fde3f8b4116951d4d
---

```rules
sudoku 9x9
arrow-1: arrow r2c1-r3c1 bulb ["r2c2"]
arrow-2: arrow r2c5-r2c6-r2c7 bulb ["r2c4"]
arrow-3: arrow r3c9-r4c8 bulb ["r3c8"]
arrow-4: arrow r9c8-r9c7 bulb ["r8c8"]
arrow-5: arrow r4c3-r5c2-r6c3-r7c2-r8c1 bulb ["r3c4"]
arrow-6: arrow r7c4-r8c5-r7c6-r6c7-r5c6 bulb ["r6c4"]
arrow-7: arrow r5c6-r6c5 bulb ["r4c6"]
```

• Normal sudoku rules apply. 
• Digits along arrows must sum to the value in the attached circle.
• Additionally, a circle's neighbourhood includes the cell containing the circle, and any cell touching it (on an edge or corner). The digit in the circle is the number of cells in its neighbourhood that have the same odd-even parity as the circled digit.
