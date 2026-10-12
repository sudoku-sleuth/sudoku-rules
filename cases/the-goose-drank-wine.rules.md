---
format: open-rules
title: The Goose Drank Wine
setter: Timotab
source: https://sudokupad.app/0qxamrtzbw
case: https://sudoku-sleuth.com/cases/the-goose-drank-wine
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
arrow-1: arrow r4c3-r5c3 bulb ["r3c2"]
arrow-2: arrow r2c1-r1c1 bulb ["r3c2"]
arrow-3: arrow r8c3-r7c3-r6c3 bulb ["r9c3"]
arrow-4: arrow r4c6-r5c6-r6c6 bulb ["r3c7"]
arrow-5: arrow r2c6-r1c5 bulb ["r3c7"]
arrow-6: arrow r8c6-r7c6 bulb ["r8c7"]
arrow-7: arrow r8c8-r8c9 bulb ["r8c7"]
arrow-8: arrow r6c5-r5c5 bulb ["r7c4"]
arrow-9: arrow r6c7-r5c7-r4c7 bulb ["r7c8"]
arrow-10: arrow r9c5-r8c4 bulb ["r9c6"]
arrow-11: arrow r3c9-r4c9 bulb ["r2c8"]
arrow-12: arrow r6c1-r7c1 bulb ["r5c1"]
quadruple-1: quadruple r1c2-r1c3-r2c2-r2c3 digits [9]
quadruple-2: quadruple r8c1-r8c2-r9c1-r9c2 digits [9]
quadruple-3: quadruple r1c7-r1c8-r2c7-r2c8 digits [9]
quadruple-4: quadruple r7c8-r7c9-r8c8-r8c9 digits [9]
quadruple-5: quadruple r5c2-r5c3-r6c2-r6c3 digits [3]
quadruple-6: quadruple r4c4-r4c5-r5c4-r5c5 digits [3,6]
```

• Normal Sudoku Rules Apply: Place the digits 1 to 9 once each in every row, column, and box.
• Digits in small white circles at cell intersections must be present at least once in the cells the clue touches.
• Digits along an arrow sum to the number in the attached circle.
