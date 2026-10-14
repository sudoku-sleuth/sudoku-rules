---
format: open-rules
title: X Marks the Quad
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/g2hglmdzqc
case: https://sudoku-sleuth.com/cases/x-marks-the-quad
library: https://rules.sudoku-sleuth.com/
status: read
exported: 32e0c2877de7640ed7b0cf1026085250
---

```rules
sudoku 9x9
diagonal-1: diagonal direction "main"
diagonal-2: diagonal direction "anti"
quadruple-1: quadruple r4c4-r4c5-r5c4-r5c5 digits [1,2]
quadruple-2: quadruple r5c5-r5c6-r6c5-r6c6 digits [3,4]
quadruple-3: quadruple r4c5-r4c6-r5c5-r5c6 digits [5,6]
quadruple-4: quadruple r5c4-r5c5-r6c4-r6c5 digits [7,8]
quadruple-5: quadruple r7c7-r7c8-r8c7-r8c8 digits [1,2]
quadruple-6: quadruple r1c1-r1c2-r2c1-r2c2 digits [1,2]
quadruple-7: quadruple r2c2-r2c3-r3c2-r3c3 digits [3,4]
quadruple-8: quadruple r1c8-r1c9-r2c8-r2c9 digits [5,6]
quadruple-9: quadruple r2c7-r2c8-r3c7-r3c8 digits [7,8]
quadruple-10: quadruple r7c2-r7c3-r8c2-r8c3 digits [5,6]
quadruple-11: quadruple r8c1-r8c2-r9c1-r9c2 digits [7,8]
quadruple-12: quadruple r8c8-r8c9-r9c8-r9c9 digits [3,4]
quadruple-13: quadruple r8c5-r8c6-r9c5-r9c6 digits [3,7]
quadruple-14: quadruple r7c4-r7c5-r8c4-r8c5 digits [1,5]
quadruple-15: quadruple r4c8-r4c9-r5c8-r5c9 digits [3,5]
quadruple-16: quadruple r5c7-r5c8-r6c7-r6c8 digits [1,7]
quadruple-17: quadruple r1c4-r1c5-r2c4-r2c5 digits [2,5]
quadruple-18: quadruple r2c5-r2c6-r3c5-r3c6 digits [4,8]
quadruple-19: quadruple r5c1-r5c2-r6c1-r6c2 digits [1,8]
quadruple-20: quadruple r4c2-r4c3-r5c2-r5c3 digits [4,6]
quadruple-21: quadruple r1c6-r1c7-r2c6-r2c7 digits [6,8]
quadruple-22: quadruple r6c8-r6c9-r7c8-r7c9 digits [1,4]
quadruple-23: quadruple r8c3-r8c4-r9c3-r9c4 digits [5,9]
quadruple-24: quadruple r3c1-r3c2-r4c1-r4c2 digits [3,3]
```

Diagonals, Quadruples

- Normal sudoku rules apply.
- Diagonals: digits cannot repeat along the marked diagonals.
- Quadruples: Each digit shown in a Quadruple circle must appear at least once in the four surrounding cells. If a digit appears twice in the Quad, it must appear twice in the surrounding cells.
