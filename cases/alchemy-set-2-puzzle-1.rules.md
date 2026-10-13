---
format: open-rules
title: alchemy set 2. Puzzle 1
setter: Chip Sounder
source: https://sudokupad.app/24jk7rmop1
case: https://sudoku-sleuth.com/cases/alchemy-set-2-puzzle-1
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
kropki-1: kropki r1c1-r1c2 colour "white"
kropki-2: kropki r2c6-r3c6 colour "black"
arrow r3c4-r2c5-r2c4 bulb ["r4c3"]
whispers-1: whispers r2c5-r1c5-r1c4-r2c3 loop false gap 2
whispers-2: whispers r1c4-r1c3-r1c2 loop false gap 2
region-sum r6c6-r5c6-r4c6-r3c6-r2c6-r1c6 segments [["r6c6","r5c6"],["r4c6","r3c6"],["r2c6","r1c6"]]
slow-thermo r1c1-r2c2-r3c3-r4c4-r5c5-r6c6
pair r1c2-r1c3 sum 5
```

Any clue type throughout the set may appear only once.
Normal 6x6 sudoku rules apply. Place the digits 1-6 once each in every row column and 2x3 box.
Cells separated by a white dot are consecutive.
Adjacent digits along a orange line must differ by at least 2.
Digits on a slow thermometer must never decrease from the bulb end.
Cells separated by a V sum to 5.
Box borders separate the blue line into equal sums.
 Cells separated by a black dot has one digit double the other. (1:2 ratio)
Digits on an arrowed grey line must sum to to digit in the connected circle, digits may repeat (if other rules allow).
