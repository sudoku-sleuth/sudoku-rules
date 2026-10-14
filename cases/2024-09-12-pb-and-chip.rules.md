---
format: open-rules
title: 2024-09-12:PB and Chip
setter: Chip Sounder
source: https://sudokupad.app/duy38j7tv8
case: https://sudoku-sleuth.com/cases/2024-09-12-pb-and-chip
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
exported: a294e15e4c62627808c75ef3fbd8214a
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
kropki-1: kropki r6c2-r6c3 white
kropki-2: kropki r6c1-r6c2 white
kropki-3: kropki r3c6-r4c6 black
kropki-4: kropki r3c4-r4c4 black
little-killer-1: little-killer r2c1-r3c2-r4c3-r5c4-r6c5 sum 15
little-killer-2: little-killer r5c1-r6c2 sum 10
little-killer-3: little-killer r1c4-r2c5-r3c6 sum 14
little-killer-4: little-killer r4c6-r5c5-r6c4 sum 13
sandwich-1: sandwich r2c6-r2c5-r2c4-r2c3-r2c2-r2c1 crusts [1,6] sum 0
sandwich-2: sandwich r6c3-r5c3-r4c3-r3c3-r2c3-r1c3 crusts [1,6] sum 7
```

Standard 6x6 sudoku rules apply: each row, column, and 2x3 box must contain all the digits from 1 to 6.

Little Killer: clues outside the grid with an arrow show the sum of the digits along the indicated diagonal.

Sandwich: clues outside the grid without an arrow show the sum of the digits between the 1 and the 6 in the row or column.

Kropki pairs: black dots separate digits in a 1:2 ratio; white dots separate consecutive digits.  Not all possible dots are necessarily given.
