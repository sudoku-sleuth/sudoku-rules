---
format: open-rules
title: Slowly heated sandwiches
setter: Chip Sounder
source: https://sudokupad.app/02m9bt8062
case: https://sudoku-sleuth.com/cases/slowly-heated-sandwiches-2
library: https://rules.sudoku-sleuth.com/
status: read
board:
  rows: 10
  cols: 10
  symbols:
    - 0
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
      - r1c2
      - r1c3
      - r1c4
      - r1c5
      - r2c1
      - r2c2
      - r2c3
      - r2c4
      - r2c5
    - - r1c6
      - r1c7
      - r1c8
      - r1c9
      - r1c10
      - r2c6
      - r2c7
      - r2c8
      - r2c9
      - r2c10
    - - r3c1
      - r3c2
      - r3c3
      - r3c4
      - r3c5
      - r4c1
      - r4c2
      - r4c3
      - r4c4
      - r4c5
    - - r3c6
      - r3c7
      - r3c8
      - r3c9
      - r3c10
      - r4c6
      - r4c7
      - r4c8
      - r4c9
      - r4c10
    - - r5c1
      - r5c2
      - r5c3
      - r5c4
      - r5c5
      - r6c1
      - r6c2
      - r6c3
      - r6c4
      - r6c5
    - - r5c6
      - r5c7
      - r5c8
      - r5c9
      - r5c10
      - r6c6
      - r6c7
      - r6c8
      - r6c9
      - r6c10
    - - r7c1
      - r7c2
      - r7c3
      - r7c4
      - r7c5
      - r8c1
      - r8c2
      - r8c3
      - r8c4
      - r8c5
    - - r7c6
      - r7c7
      - r7c8
      - r7c9
      - r7c10
      - r8c6
      - r8c7
      - r8c8
      - r8c9
      - r8c10
    - - r9c1
      - r9c2
      - r9c3
      - r9c4
      - r9c5
      - r10c1
      - r10c2
      - r10c3
      - r10c4
      - r10c5
    - - r9c6
      - r9c7
      - r9c8
      - r9c9
      - r9c10
      - r10c6
      - r10c7
      - r10c8
      - r10c9
      - r10c10
exported: e585a2bd8ffefa6855e4e256fa386df4
---

```rules
unique-1: unique r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9-r1c10
unique-2: unique r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9-r2c10
unique-3: unique r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8-r3c9-r3c10
unique-4: unique r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8-r4c9-r4c10
unique-5: unique r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9-r5c10
unique-6: unique r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8-r6c9-r6c10
unique-7: unique r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8-r7c9-r7c10
unique-8: unique r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r8c9-r8c10
unique-9: unique r9c1-r9c2-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8-r9c9-r9c10
unique-10: unique r10c1-r10c2-r10c3-r10c4-r10c5-r10c6-r10c7-r10c8-r10c9-r10c10
unique-11: unique r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r9c1-r10c1
unique-12: unique r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2-r9c2-r10c2
unique-13: unique r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3-r9c3-r10c3
unique-14: unique r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4-r8c4-r9c4-r10c4
unique-15: unique r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5-r10c5
unique-16: unique r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6-r8c6-r9c6-r10c6
unique-17: unique r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7-r9c7-r10c7
unique-18: unique r1c8-r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8-r9c8-r10c8
unique-19: unique r1c9-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9-r10c9
unique-20: unique r1c10-r2c10-r3c10-r4c10-r5c10-r6c10-r7c10-r8c10-r9c10-r10c10
unique-21: unique r1c1-r1c2-r1c3-r1c4-r1c5-r2c1-r2c2-r2c3-r2c4-r2c5
unique-22: unique r1c6-r1c7-r1c8-r1c9-r1c10-r2c6-r2c7-r2c8-r2c9-r2c10
unique-23: unique r3c1-r3c2-r3c3-r3c4-r3c5-r4c1-r4c2-r4c3-r4c4-r4c5
unique-24: unique r3c6-r3c7-r3c8-r3c9-r3c10-r4c6-r4c7-r4c8-r4c9-r4c10
unique-25: unique r5c1-r5c2-r5c3-r5c4-r5c5-r6c1-r6c2-r6c3-r6c4-r6c5
unique-26: unique r5c6-r5c7-r5c8-r5c9-r5c10-r6c6-r6c7-r6c8-r6c9-r6c10
unique-27: unique r7c1-r7c2-r7c3-r7c4-r7c5-r8c1-r8c2-r8c3-r8c4-r8c5
unique-28: unique r7c6-r7c7-r7c8-r7c9-r7c10-r8c6-r8c7-r8c8-r8c9-r8c10
unique-29: unique r9c1-r9c2-r9c3-r9c4-r9c5-r10c1-r10c2-r10c3-r10c4-r10c5
unique-30: unique r9c6-r9c7-r9c8-r9c9-r9c10-r10c6-r10c7-r10c8-r10c9-r10c10
kropki-1: kropki r7c1-r8c1 black
kropki-2: kropki r4c10-r5c10 black
kropki-3: kropki r4c8-r5c8 black
kropki-4: kropki r5c8-r5c9 black
kropki-5: kropki r9c5-r9c6 black
kropki-6: kropki r1c1-r2c1 white
kropki-7: kropki r9c6-r10c6 white
kropki-8: kropki r8c7-r8c8 white
slow-thermo-1: slow-thermo r1c5-r2c6-r3c7-r4c8-r5c9-r6c9-r7c8-r8c7-r9c6-r10c5
slow-thermo-2: slow-thermo r1c2-r2c3-r2c4-r3c5-r4c6-r5c7-r6c7-r7c6-r8c5-r9c4-r10c3
slow-thermo-3: slow-thermo r3c2-r4c3-r5c4-r6c3-r7c2
sandwich-1: sandwich r10c1-r10c2-r10c3-r10c4-r10c5-r10c6-r10c7-r10c8-r10c9-r10c10 crusts [0,9] sum 15
sandwich-2: sandwich r9c10-r9c9-r9c8-r9c7-r9c6-r9c5-r9c4-r9c3-r9c2-r9c1 crusts [0,9] sum 5
sandwich-3: sandwich r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r9c1-r10c1 crusts [0,9] sum 36
sandwich-4: sandwich r1c10-r1c9-r1c8-r1c7-r1c6-r1c5-r1c4-r1c3-r1c2-r1c1 crusts [0,9] sum 1
sandwich-5: sandwich r1c10-r2c10-r3c10-r4c10-r5c10-r6c10-r7c10-r8c10-r9c10-r10c10 crusts [0,9] sum 33
sandwich-6: sandwich r5c10-r5c9-r5c8-r5c7-r5c6-r5c5-r5c4-r5c3-r5c2-r5c1 crusts [0,9] sum 21
sandwich-7: sandwich r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5-r10c5 crusts [0,9] sum 11
sandwich-8: sandwich r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8-r7c9-r7c10 crusts [0,9] sum 13
```

Normal sudoku rules apply. Place the digits 0-9 once each in every row, column and 2x5 box.
Clues outside the grid sum the digits between the 0 and 9 in their respective row/column.
Digits along a slow thermometer must never decrease from the bulb end.
Cells separated by a black dot has one digit double the other (1:2 ratio).
Cells separated by a white dot are consecutive.
No negative constraints.
