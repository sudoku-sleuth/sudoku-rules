---
format: open-rules
title: Whisrenperban
setter: Chip Sounder
source: https://sudokupad.app/noog8oecq9
case: https://sudoku-sleuth.com/cases/whisrenperban
library: https://rules.sudoku-sleuth.com/
status: read
board:
  rows: 7
  cols: 7
  symbols:
    - 1
    - 2
    - 3
    - 4
    - 5
    - 6
    - 7
  regions:
    - - r1c2
      - r1c3
      - r1c4
      - r1c5
      - r1c6
      - r1c7
      - r2c6
    - - r1c1
      - r2c1
      - r2c2
      - r2c3
      - r2c4
      - r2c5
      - r3c2
    - - r2c7
      - r3c3
      - r3c4
      - r3c5
      - r3c6
      - r3c7
      - r4c7
    - - r3c1
      - r4c1
      - r4c2
      - r4c3
      - r4c4
      - r4c5
      - r5c1
    - - r4c6
      - r5c2
      - r5c3
      - r5c4
      - r5c5
      - r5c6
      - r6c4
    - - r5c7
      - r6c5
      - r6c6
      - r6c7
      - r7c5
      - r7c6
      - r7c7
    - - r6c1
      - r6c2
      - r6c3
      - r7c1
      - r7c2
      - r7c3
      - r7c4
---

```rules
unique-1: unique r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7
unique-2: unique r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7
unique-3: unique r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7
unique-4: unique r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7
unique-5: unique r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7
unique-6: unique r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7
unique-7: unique r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7
unique-8: unique r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1
unique-9: unique r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2
unique-10: unique r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3
unique-11: unique r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4
unique-12: unique r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5
unique-13: unique r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6
unique-14: unique r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7
unique-15: unique r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r2c6
unique-16: unique r1c1-r2c1-r2c2-r2c3-r2c4-r2c5-r3c2
unique-17: unique r2c7-r3c3-r3c4-r3c5-r3c6-r3c7-r4c7
unique-18: unique r3c1-r4c1-r4c2-r4c3-r4c4-r4c5-r5c1
unique-19: unique r4c6-r5c2-r5c3-r5c4-r5c5-r5c6-r6c4
unique-20: unique r5c7-r6c5-r6c6-r6c7-r7c5-r7c6-r7c7
unique-21: unique r6c1-r6c2-r6c3-r7c1-r7c2-r7c3-r7c4
kropki-1: kropki r3c1-r3c2 colour "black"
kropki-2: kropki r7c4-r7c5 colour "black"
kropki-3: kropki r2c7-r3c7 colour "white"
kropki-4: kropki r3c7-r4c7 colour "white"
whispers-1: whispers r4c7-r4c6-r4c5 loop false gap 4
whispers-2: whispers r5c4-r5c3-r5c2-r5c1 loop false gap 4
whispers-3: whispers r6c3-r7c3 loop false gap 4
whispers-4: whispers r2c5-r2c6 loop false gap 4
renban-1: renban r3c5-r3c4-r3c3
renban-2: renban r3c2-r4c3-r4c4
renban-3: renban r7c5-r6c5-r5c5
```

Normal 7x7 irregular sudoku rules apply.
Place the digits 1-7 once each in every row column and region.
Digits along a purple renban line without repeat must form a set of consecutive digits in any order.
Adjacent digits along a green line must differ by at least 4.
Cells separated by a black dot has one digit double the other (1:2 ratio)
Cells separated by a white dot must be consecutive.
Not all dots are necessarily given.
