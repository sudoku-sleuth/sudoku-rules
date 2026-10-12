---
format: open-rules
title: Quads, But Who Shuffled!?
setter: The Bard
source: https://sudokupad.app/z39f69gl3c
case: https://sudoku-sleuth.com/cases/quads-but-who-shuffled
library: https://rules.sudoku-sleuth.com/
status: read
board:
  rows: 9
  cols: 9
  symbols:
    - 1
    - 2
    - 3
    - 4
    - 5
    - 6
    - 7
    - 8
    - 9
  regions:
    - - r1c1
      - r2c1
      - r3c1
      - r4c1
      - r5c1
      - r5c2
      - r5c3
      - r5c4
      - r6c4
    - - r1c2
      - r2c2
      - r2c4
      - r2c5
      - r3c2
      - r3c4
      - r4c2
      - r4c3
      - r4c4
    - - r1c3
      - r1c4
      - r1c5
      - r1c6
      - r1c7
      - r1c8
      - r1c9
      - r2c3
      - r3c3
    - - r4c5
      - r5c5
      - r6c3
      - r6c5
      - r7c3
      - r7c4
      - r7c5
      - r7c6
      - r7c7
    - - r2c6
      - r2c7
      - r3c5
      - r3c6
      - r3c7
      - r3c8
      - r4c6
      - r5c6
      - r6c6
    - - r2c8
      - r2c9
      - r3c9
      - r4c7
      - r4c8
      - r4c9
      - r5c7
      - r5c8
      - r5c9
    - - r6c1
      - r6c2
      - r7c1
      - r8c1
      - r9c1
      - r9c2
      - r9c3
      - r9c4
      - r9c5
    - - r7c2
      - r7c8
      - r8c2
      - r8c3
      - r8c4
      - r8c5
      - r8c6
      - r8c7
      - r8c8
    - - r6c7
      - r6c8
      - r6c9
      - r7c9
      - r8c9
      - r9c6
      - r9c7
      - r9c8
      - r9c9
---

```rules
unique-1: unique r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9
unique-2: unique r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9
unique-3: unique r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8-r3c9
unique-4: unique r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8-r4c9
unique-5: unique r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9
unique-6: unique r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8-r6c9
unique-7: unique r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8-r7c9
unique-8: unique r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r8c9
unique-9: unique r9c1-r9c2-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8-r9c9
unique-10: unique r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r9c1
unique-11: unique r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2-r9c2
unique-12: unique r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3-r9c3
unique-13: unique r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4-r8c4-r9c4
unique-14: unique r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5
unique-15: unique r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6-r8c6-r9c6
unique-16: unique r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7-r9c7
unique-17: unique r1c8-r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8-r9c8
unique-18: unique r1c9-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9
unique-19: unique r1c1-r2c1-r3c1-r4c1-r5c1-r5c2-r5c3-r5c4-r6c4
unique-20: unique r1c2-r2c2-r2c4-r2c5-r3c2-r3c4-r4c2-r4c3-r4c4
unique-21: unique r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9-r2c3-r3c3
unique-22: unique r4c5-r5c5-r6c3-r6c5-r7c3-r7c4-r7c5-r7c6-r7c7
unique-23: unique r2c6-r2c7-r3c5-r3c6-r3c7-r3c8-r4c6-r5c6-r6c6
unique-24: unique r2c8-r2c9-r3c9-r4c7-r4c8-r4c9-r5c7-r5c8-r5c9
unique-25: unique r6c1-r6c2-r7c1-r8c1-r9c1-r9c2-r9c3-r9c4-r9c5
unique-26: unique r7c2-r7c8-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8
unique-27: unique r6c7-r6c8-r6c9-r7c9-r8c9-r9c6-r9c7-r9c8-r9c9
quadruple-1: quadruple r2c2-r2c3-r3c2-r3c3 digits [2,4,6,8]
quadruple-2: quadruple r6c2-r6c3-r7c2-r7c3 digits [3,7,8,9]
quadruple-3: quadruple r6c7-r6c8-r7c7-r7c8 digits [3,5,6,7]
quadruple-4: quadruple r2c7-r2c8-r3c7-r3c8 digits [1,7,8,9]
quadruple-5: quadruple r3c6-r3c7-r4c6-r4c7 digits [3,5,6,9]
quadruple-6: quadruple r3c3-r3c4-r4c3-r4c4 digits [1,3,4,5]
quadruple-7: quadruple r5c3-r5c4-r6c3-r6c4 digits [2,8,8,9]
quadruple-8: quadruple r5c6-r5c7-r6c6-r6c7 digits [2,4,6,7]
quadruple-9: quadruple r8c3-r8c4-r9c3-r9c4 digits [1,3,5,6]
quadruple-10: quadruple r8c6-r8c7-r9c6-r9c7 digits [1,2,7,9]
quadruple-11: quadruple r2c1-r2c2-r3c1-r3c2 digits [2]
quadruple-12: quadruple r4c2-r4c3-r5c2-r5c3 digits [3]
```

Normal Irregular Sudoku rules apply. Place the digits 1-9 in each row, column and marked region without repetition.
Quadruples: Digits in a Quadruple circle must be placed at least once in the four cells touching that circle. Digits that appear twice in circles must be placed twice in the cells touching that circle.
