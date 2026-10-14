---
format: open-rules
title: Quad-wrangle
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/uzf15tiyaw
case: https://sudoku-sleuth.com/cases/quad-wrangle
library: https://rules.sudoku-sleuth.com/
status: read
exported: b3090eff71f6e30f365b22e3385dde0d
---

```rules
sudoku 9x9
quadruple-1: quadruple r1c1-r1c2-r2c1-r2c2 digits [1,2,3]
quadruple-2: quadruple r1c8-r1c9-r2c8-r2c9 digits [6,7,8]
quadruple-3: quadruple r8c8-r8c9-r9c8-r9c9 digits [1,2,3]
quadruple-4: quadruple r8c1-r8c2-r9c1-r9c2 digits [6,7,8]
quadruple-5: quadruple r3c4-r3c5-r4c4-r4c5 digits [1,6]
quadruple-6: quadruple r3c5-r3c6-r4c5-r4c6 digits [2,7]
quadruple-7: quadruple r4c6-r4c7-r5c6-r5c7 digits [3,8]
quadruple-8: quadruple r5c6-r5c7-r6c6-r6c7 digits [3,4]
quadruple-9: quadruple r6c5-r6c6-r7c5-r7c6 digits [4,9]
quadruple-10: quadruple r6c4-r6c5-r7c4-r7c5 digits [5,8]
quadruple-11: quadruple r5c3-r5c4-r6c3-r6c4 digits [3,7]
quadruple-12: quadruple r4c3-r4c4-r5c3-r5c4 digits [1,9]
little-killer-1: little-killer r3c1-r2c2-r1c3 sum 10
little-killer-2: little-killer r1c7-r2c8-r3c9 sum 22
little-killer-3: little-killer r7c9-r8c8-r9c7 sum 11
little-killer-4: little-killer r9c3-r8c2-r7c1 sum 21
little-killer-5: little-killer r1c2-r2c1 sum 11
little-killer-6: little-killer r2c9-r1c8 sum 13
little-killer-7: little-killer r9c8-r8c9 sum 12
little-killer-8: little-killer r8c1-r9c2 sum 12
```

- Normal sudoku rules apply.
- Quadruples: Digits in a Quadruples circle must appear at least once in the four cells touching the circle.
- Little Killers: Clues outside the grid give the sum of the digits along the indicated diagonal.
