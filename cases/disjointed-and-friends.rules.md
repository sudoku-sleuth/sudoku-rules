---
format: open-rules
title: Disjointed and friends
setter: Chip Sounder
source: https://sudokupad.app/viaon0c1ao
case: https://sudoku-sleuth.com/cases/disjointed-and-friends
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
kropki-1: kropki r1c6-r2c6 colour "black"
kropki-2: kropki r2c6-r3c6 colour "white"
kropki-3: kropki r3c6-r4c6 colour "white"
arrow-1: arrow r2c3 bulb ["r1c4"]
arrow-2: arrow r5c5-r6c5 bulb ["r4c4"]
pair-1: pair r2c5-r3c5 sum 5
pair-2: pair r1c1-r1c2 sum 5
pair-3: pair r4c1-r4c2 sum 5
pair-4: pair r5c3-r6c3 sum 5
little-killer r3c6-r4c5-r5c4-r6c3 sum 13
unique-19: unique r1c1-r1c4-r3c1-r3c4-r5c1-r5c4
unique-20: unique r1c2-r1c5-r3c2-r3c5-r5c2-r5c5
unique-21: unique r1c3-r1c6-r3c3-r3c6-r5c3-r5c6
unique-22: unique r2c1-r2c4-r4c1-r4c4-r6c1-r6c4
unique-23: unique r2c2-r2c5-r4c2-r4c5-r6c2-r6c5
unique-24: unique r2c3-r2c6-r4c3-r4c6-r6c3-r6c6
```

Normal 6x6 sudoku rules apply. Place the digits 1-6 once each in every row column and 2x3 box. Conflict checker must be off.
Cells in the same relative position within a 2x3 box cannot contain the same digit.
Clues outside the grid sum the digits along the indicated diagonal digits may repeat if other rules allow.
Digits on a grey arrow sum to the digit in the connected circle.
Cells separated by a V sum to 5.
Cells separated by a black dot has one digit double the other (1:2 ratio).
Cells separated by a white dot are consecutive.
No negative constraints.
