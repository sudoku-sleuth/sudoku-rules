---
format: open-rules
title: Squiggle and Quads
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/7rrjbj1lxn
case: https://sudoku-sleuth.com/cases/squiggle-and-quads
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
whispers-1: whispers r4c1-r3c1-r2c2-r1c3-r1c4-r2c5-r2c6-r3c7-r4c8-r5c8-r6c8-r7c8-r8c7 gap 5
whispers-2: whispers r6c1-r7c1-r8c2-r8c3-r8c4-r7c5-r7c6-r8c7 gap 5
whispers-3: whispers r4c3-r5c2-r6c1 gap 5
whispers-4: whispers r3c4-r3c3-r4c3 gap 5
whispers-5: whispers r4c7-r4c6-r4c5-r3c4 gap 5
quadruple-1: quadruple r2c2-r2c3-r3c2-r3c3 digits [1,3,5,7]
quadruple-2: quadruple r7c2-r7c3-r8c2-r8c3 digits [2,4,5,7]
quadruple-3: quadruple r2c7-r2c8-r3c7-r3c8 digits [2,3,5,6]
quadruple-4: quadruple r7c7-r7c8-r8c7-r8c8 digits [1,3,6,7]
```

** Standard Sudoku, German Whisper, Quads **

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- German Whispers: Digits adjacent along the line differ by at least 5.
- Quadruples: Digits in a Quadruple circle appear at least once in the four cells touching the circle.
