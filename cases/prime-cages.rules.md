---
format: open-rules
title: Prime Cages
setter: Chip Sounder
source: https://sudokupad.app/laadgu1960
case: https://sudoku-sleuth.com/cases/prime-cages
library: https://rules.sudoku-sleuth.com/
status: read
board:
  rows: 8
  cols: 8
  symbols:
    - 1
    - 2
    - 3
    - 4
    - 5
    - 6
    - 7
    - 8
  regions:
    - - r1c1
      - r1c2
      - r1c3
      - r1c4
      - r2c1
      - r2c2
      - r2c3
      - r2c4
    - - r1c5
      - r1c6
      - r1c7
      - r1c8
      - r2c5
      - r2c6
      - r2c7
      - r2c8
    - - r3c1
      - r3c2
      - r3c3
      - r3c4
      - r4c1
      - r4c2
      - r4c3
      - r4c4
    - - r3c5
      - r3c6
      - r3c7
      - r3c8
      - r4c5
      - r4c6
      - r4c7
      - r4c8
    - - r5c1
      - r5c2
      - r5c3
      - r5c4
      - r6c1
      - r6c2
      - r6c3
      - r6c4
    - - r5c5
      - r5c6
      - r5c7
      - r5c8
      - r6c5
      - r6c6
      - r6c7
      - r6c8
    - - r7c1
      - r7c2
      - r7c3
      - r7c4
      - r8c1
      - r8c2
      - r8c3
      - r8c4
    - - r7c5
      - r7c6
      - r7c7
      - r7c8
      - r8c5
      - r8c6
      - r8c7
      - r8c8
---

```rules
unique-1: unique r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8
unique-2: unique r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8
unique-3: unique r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8
unique-4: unique r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8
unique-5: unique r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8
unique-6: unique r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8
unique-7: unique r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8
unique-8: unique r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8
unique-9: unique r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1
unique-10: unique r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2
unique-11: unique r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3
unique-12: unique r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4-r8c4
unique-13: unique r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5
unique-14: unique r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6-r8c6
unique-15: unique r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7
unique-16: unique r1c8-r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8
unique-17: unique r1c1-r1c2-r1c3-r1c4-r2c1-r2c2-r2c3-r2c4
unique-18: unique r1c5-r1c6-r1c7-r1c8-r2c5-r2c6-r2c7-r2c8
unique-19: unique r3c1-r3c2-r3c3-r3c4-r4c1-r4c2-r4c3-r4c4
unique-20: unique r3c5-r3c6-r3c7-r3c8-r4c5-r4c6-r4c7-r4c8
unique-21: unique r5c1-r5c2-r5c3-r5c4-r6c1-r6c2-r6c3-r6c4
unique-22: unique r5c5-r5c6-r5c7-r5c8-r6c5-r6c6-r6c7-r6c8
unique-23: unique r7c1-r7c2-r7c3-r7c4-r8c1-r8c2-r8c3-r8c4
unique-24: unique r7c5-r7c6-r7c7-r7c8-r8c5-r8c6-r8c7-r8c8
cage-1: cage r7c1-r8c1 repeats false total 11 connected true
cage-2: cage r1c8-r2c8 repeats false total 11 connected true
cage-3: cage r1c1-r2c1 repeats false total 7 connected true
cage-4: cage r7c8-r8c8 repeats false total 7 connected true
cage-5: cage r6c6-r7c6 repeats false total 11 connected true
cage-6: cage r2c3-r3c3 repeats false total 11 connected true
cage-7: cage r6c3-r7c3 repeats false total 7 connected true
cage-8: cage r2c6-r3c6 repeats false total 7 connected true
cage-9: cage r8c2-r8c3-r8c4 repeats false total 17 connected true
cage-10: cage r1c5-r1c6-r1c7 repeats false total 17 connected true
cage-11: cage r4c5-r5c5 repeats false total 13 connected true
cage-12: cage r4c4-r5c4 repeats false total 13 connected true
kropki-1: kropki r1c6-r1c7 colour "black"
kropki-2: kropki r8c2-r8c3 colour "black"
whispers-1: whispers r6c3-r7c2-r8c1 loop false gap 4
whispers-2: whispers r8c8-r7c7-r6c6 loop false gap 4
whispers-3: whispers r1c8-r2c7-r3c6 loop false gap 4
whispers-4: whispers r3c3-r2c2-r1c1 loop false gap 4
whispers-5: whispers r3c7-r3c8 loop false gap 4
```

Normal sudoku rules apply. Place the digits 1-8 once each in every row, column and 2x4 box.
Digits in a dotted cage without repeat sum to the total given in the top left corner of the cage.
Adjacent digits along a green line must differ by at least 4.
Cells separated by a black dot has one digit double the other (1:2 ratio).
