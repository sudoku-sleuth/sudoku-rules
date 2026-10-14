---
format: open-rules
title: Krosscut Knights
setter: Blobz
source: https://sudokupad.app/blobz/krosscut-knights
case: https://sudoku-sleuth.com/cases/krosscut-knights
library: https://rules.sudoku-sleuth.com/
status: read
exported: bd58276b8c5d0735cf95a7f53e3518c5
---

```rules
sudoku 9x9
anti-knight
arrow-1: arrow r2c1-r3c2 bulb ["r1c1"]
arrow-2: arrow r1c7-r1c8 bulb ["r1c6"]
arrow-3: arrow r3c7-r3c8 bulb ["r4c7"]
arrow-4: arrow r6c7-r6c8-r7c9 bulb ["r5c6"]
arrow-5: arrow r6c5-r7c6-r7c5 bulb ["r5c4"]
arrow-6: arrow r7c1-r8c1 bulb ["r6c2"]
arrow-7: arrow r4c2-r5c2-r5c1 bulb ["r4c1"]
```

Normal sudoku rules apply.

Cells separated by a chess knight's move cannot contain the same digit.

Digits along an arrow must sum to the value in the attached circle. Digits may repeat on arrows if allowed by other rules.

A path consisting of the digits 1 to 9, in order, crosses from left to right across the grid with each digit in its corresponding column (1 in column 1, 2 in column 2, etc.) The cells along the path are connected orthogonally or diagonally.

A similar path crosses the grid from top to bottom, starting with a 1 in row 1, then a 2 in row 2, ending with a 9 in row 9. Again, cells along the path are connected orthogonally or diagonally.

The paths are to be determined by the solver. They do not share cells and neither path appears on an arrow or circle.
