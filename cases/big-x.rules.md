---
format: open-rules
title: Big X
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/meifmo5i1r
case: https://sudoku-sleuth.com/cases/big-x
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c1=1
---

```rules
sudoku 9x9
zipper-1: zipper r4c5-r3c6-r2c7-r1c8-r1c9-r2c9-r3c8-r4c7-r5c6
zipper-2: zipper r3c4-r4c5-r3c6-r2c7-r1c8-r1c9-r2c9-r3c8-r4c7-r5c6-r6c7
zipper-3: zipper r7c8-r6c7-r5c6-r4c7-r3c8-r2c9-r1c9-r1c8-r2c7-r3c6-r4c5-r3c4-r2c3
zipper-4: zipper r1c2-r2c3-r3c4-r4c5-r3c6-r2c7-r1c8-r1c9-r2c9-r3c8-r4c7-r5c6-r6c7-r7c8-r8c9
zipper-5: zipper r9c9-r8c9-r7c8-r6c7-r5c6-r4c7-r3c8-r2c9-r1c9-r1c8-r2c7-r3c6-r4c5-r3c4-r2c3-r1c2-r1c1
zipper-6: zipper r2c1-r1c1-r1c2-r2c3-r3c4-r4c5-r3c6-r2c7-r1c8-r1c9-r2c9-r3c8-r4c7-r5c6-r6c7-r7c8-r8c9-r9c9-r9c8
zipper-7: zipper r8c7-r9c8-r9c9-r8c9-r7c8-r6c7-r5c6-r4c7-r3c8-r2c9-r1c9-r1c8-r2c7-r3c6-r4c5-r3c4-r2c3-r1c2-r1c1-r2c1-r3c2
zipper-8: zipper r4c3-r3c2-r2c1-r1c1-r1c2-r2c3-r3c4-r4c5-r3c6-r2c7-r1c8-r1c9-r2c9-r3c8-r4c7-r5c6-r6c7-r7c8-r8c9-r9c9-r9c8-r8c7-r7c6
zipper-9: zipper r6c5-r7c6-r8c7-r9c8-r9c9-r8c9-r7c8-r6c7-r5c6-r4c7-r3c8-r2c9-r1c9-r1c8-r2c7-r3c6-r4c5-r3c4-r2c3-r1c2-r1c1-r2c1-r3c2-r4c3-r5c4
zipper-10: zipper r6c3-r5c4-r4c3-r3c2-r2c1-r1c1-r1c2-r2c3-r3c4-r4c5-r3c6-r2c7-r1c8-r1c9-r2c9-r3c8-r4c7-r5c6-r6c7-r7c8-r8c9-r9c9-r9c8-r8c7-r7c6-r6c5-r7c4
zipper-11: zipper r8c3-r7c4-r6c5-r7c6-r8c7-r9c8-r9c9-r8c9-r7c8-r6c7-r5c6-r4c7-r3c8-r2c9-r1c9-r1c8-r2c7-r3c6-r4c5-r3c4-r2c3-r1c2-r1c1-r2c1-r3c2-r4c3-r5c4-r6c3-r7c2
zipper-12: zipper r8c1-r7c2-r6c3-r5c4-r4c3-r3c2-r2c1-r1c1-r1c2-r2c3-r3c4-r4c5-r3c6-r2c7-r1c8-r1c9-r2c9-r3c8-r4c7-r5c6-r6c7-r7c8-r8c9-r9c9-r9c8-r8c7-r7c6-r6c5-r7c4-r8c3-r9c2
quadruple-1: quadruple r1c8-r1c9-r2c8-r2c9 digits [2,6,7]
quadruple-2: quadruple r3c3-r3c4-r4c3-r4c4 digits [1,6,7]
quadruple-3: quadruple r3c6-r3c7-r4c6-r4c7 digits [2,3,4]
quadruple-4: quadruple r6c6-r6c7-r7c6-r7c7 digits [1,3,5]
quadruple-5: quadruple r6c3-r6c4-r7c3-r7c4 digits [1,5,7]
quadruple-6: quadruple r8c8-r8c9-r9c8-r9c9 digits [1,3,6]
quadruple-7: quadruple r8c1-r8c2-r9c1-r9c2 digits [1,5,8]
quadruple-8: quadruple r1c1-r1c2-r2c1-r2c2 digits [3,6]
quadruple-9: quadruple r8c4-r8c5-r9c4-r9c5 digits [8]
quadruple-10: quadruple r5c1-r5c2-r6c1-r6c2 digits [4]
quadruple-11: quadruple r4c8-r4c9-r5c8-r5c9 digits [1,8]
```

**Standard Sudoku, Quadruples, Zipper Lines **

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Quadruples: Digits in a Quadruple circle must be placed at least once in the four cells touching that circle.
- Zipper Line: Along Zipper lines, pairs of digits equidistant from the center of the line have the same sum. For Zipper lines of odd length, that sum is the central digit on the line.
