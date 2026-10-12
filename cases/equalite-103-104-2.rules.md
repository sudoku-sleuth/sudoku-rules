---
format: open-rules
title: "EquaLite Cages 104: Region Sum Lines"
setter: gUBBLOR
source: https://sudokupad.app/31mxsxobn9
case: https://sudoku-sleuth.com/cases/equalite-103-104-2
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
equality-cage-1: equality-cage r1c5-r2c5
equality-cage-2: equality-cage r5c5-r6c5
equality-cage-3: equality-cage r2c2-r3c2
equality-cage-4: equality-cage r1c2-r1c3
region-sum-1: region-sum r2c2-r2c3-r3c4-r2c5-r1c5 segments [["r2c2","r2c3"],["r3c4"],["r2c5","r1c5"]]
region-sum-2: region-sum r6c4-r5c4-r4c3-r5c3-r6c2 segments [["r6c4","r5c4"],["r4c3"],["r5c3","r6c2"]]
region-sum-3: region-sum r4c2-r5c1 segments [["r4c2"],["r5c1"]]
```

Normal 6x6 sudoku rules apply. Place the digits 1 through 6 in each empty cell. Digits must not repeat within the same row, column, or box.

EquaLite cages: Cages must have an equal number of low (1,2,3) and high (4,5,6) digits AND an equal number of even (2,4,6) and odd (1,3,5) digits. Digits may not repeat in a cage.

Region sum lines: Digits along region sum lines have the same sum within each box the line passes through. I.e. if a line has 1,2,3 on it in one box, and only 1 digit in another box that digit has to be 6. If the line enters a third box with 2 digits on it, those would have to be either 2,4 or 1,5, so the total is 6 in all the boxes. Digits may repeat on lines.
