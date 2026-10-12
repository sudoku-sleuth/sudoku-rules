---
format: open-rules
title: Zipping from Corner to Corner
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/o5587xf7ix
case: https://sudoku-sleuth.com/cases/zipping-from-corner-to-corner
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
zipper-1: zipper r3c6-r2c7-r1c8-r1c9-r2c9-r3c8-r4c7
zipper-2: zipper r6c3-r7c2-r8c1-r9c1-r9c2-r8c3-r7c4
zipper-3: zipper r5c4-r4c3-r3c2-r2c1-r1c1-r1c2-r2c3-r3c4-r4c5
zipper-4: zipper r6c5-r7c6-r8c7-r9c8-r9c9-r8c9-r7c8-r6c7-r5c6
quadruple-1: quadruple r1c1-r1c2-r2c1-r2c2 digits [1,2,5]
quadruple-2: quadruple r8c1-r8c2-r9c1-r9c2 digits [3,4,5]
quadruple-3: quadruple r8c8-r8c9-r9c8-r9c9 digits [1,2,7]
quadruple-4: quadruple r1c8-r1c9-r2c8-r2c9 digits [4,5,6]
quadruple-5: quadruple r6c3-r6c4-r7c3-r7c4 digits [7,8]
quadruple-6: quadruple r3c6-r3c7-r4c6-r4c7 digits [3,7]
quadruple-7: quadruple r3c3-r3c4-r4c3-r4c4 digits [1,5]
quadruple-8: quadruple r6c6-r6c7-r7c6-r7c7 digits [1,7]
```

**Standard Sudoku, Quadruples, Zipper Lines **

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Quadruples: Digits in a Quadruple circle must be placed at least once in the four cells touching that circle.
- Zipper Line: Along Zipper lines, pairs of digits equidistant from the center of the line have the same sum. For Zipper lines of odd length, that sum is the central digit on the line.
