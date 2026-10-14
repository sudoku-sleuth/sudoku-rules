---
format: open-rules
title: Quincunx of quads
setter: Chip Sounder
source: https://sudokupad.app/6hvj1736l9
case: https://sudoku-sleuth.com/cases/quincunx-of-quads
library: https://rules.sudoku-sleuth.com/
status: read
board:
  rows: 6
  cols: 6
  symbols:
    - 1
    - 2
    - 3
    - 4
    - 5
    - 6
  regions:
    - - r1c1
      - r1c2
      - r1c3
      - r2c1
      - r2c2
      - r2c3
    - - r1c4
      - r1c5
      - r1c6
      - r2c4
      - r2c5
      - r2c6
    - - r3c1
      - r3c2
      - r3c3
      - r4c1
      - r4c2
      - r4c3
    - - r3c4
      - r3c5
      - r3c6
      - r4c4
      - r4c5
      - r4c6
    - - r5c1
      - r5c2
      - r5c3
      - r6c1
      - r6c2
      - r6c3
    - - r5c4
      - r5c5
      - r5c6
      - r6c4
      - r6c5
      - r6c6
exported: d1a5ce3162a0afede5851b7c4bba3213
---

```rules
unique-1: unique r1c1-r1c2-r1c3-r1c4-r1c5-r1c6
unique-2: unique r2c1-r2c2-r2c3-r2c4-r2c5-r2c6
unique-3: unique r3c1-r3c2-r3c3-r3c4-r3c5-r3c6
unique-4: unique r4c1-r4c2-r4c3-r4c4-r4c5-r4c6
unique-5: unique r5c1-r5c2-r5c3-r5c4-r5c5-r5c6
unique-6: unique r6c1-r6c2-r6c3-r6c4-r6c5-r6c6
unique-7: unique r1c1-r2c1-r3c1-r4c1-r5c1-r6c1
unique-8: unique r1c2-r2c2-r3c2-r4c2-r5c2-r6c2
unique-9: unique r1c3-r2c3-r3c3-r4c3-r5c3-r6c3
unique-10: unique r1c4-r2c4-r3c4-r4c4-r5c4-r6c4
unique-11: unique r1c5-r2c5-r3c5-r4c5-r5c5-r6c5
unique-12: unique r1c6-r2c6-r3c6-r4c6-r5c6-r6c6
unique-13: unique r1c1-r1c2-r1c3-r2c1-r2c2-r2c3
unique-14: unique r1c4-r1c5-r1c6-r2c4-r2c5-r2c6
unique-15: unique r3c1-r3c2-r3c3-r4c1-r4c2-r4c3
unique-16: unique r3c4-r3c5-r3c6-r4c4-r4c5-r4c6
unique-17: unique r5c1-r5c2-r5c3-r6c1-r6c2-r6c3
unique-18: unique r5c4-r5c5-r5c6-r6c4-r6c5-r6c6
anti-king
kropki-1: kropki r1c1-r2c1 black
kropki-2: kropki r5c6-r6c6 white
kropki-3: kropki r6c2-r6c3 white
quadruple-1: quadruple r1c1-r1c2-r2c1-r2c2 digits [1,5]
quadruple-2: quadruple r1c5-r1c6-r2c5-r2c6 digits [2,4]
quadruple-3: quadruple r5c5-r5c6-r6c5-r6c6 digits [4,6]
quadruple-4: quadruple r5c1-r5c2-r6c1-r6c2 digits [1,3]
quadruple-5: quadruple r3c3-r3c4-r4c3-r4c4 digits [2,6]
little-killer r1c5-r2c6 sum 8
```

Normal 6x6 sudoku rules apply. Place the digits 1-6 once each in every row, column and 2x3 box.
Cells separated by a king's move (in chess) cannot contain the same digit.
Digits in a circle must appear within the 2x2 of cells the circle touches. Digits may repeat if other rules allow.
Clues outside the grid sum the digits along the indicated diagonal digits may repeat if other rules allow.
Cells separated by a black dot has one digit double the other (1:2 ratio).
Cells separated by a white dot are consecutive.
No negative constraints.
