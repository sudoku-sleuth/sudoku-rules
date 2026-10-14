---
format: open-rules
title: Adding to My Exes
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/irvefu2wb1
case: https://sudoku-sleuth.com/cases/adding-to-my-exes
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
exported: 01879a19ed2f65bf898df60a85eba3b1
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
x-sum-1: x-sum r1c1-r1c2-r1c3-r1c4-r1c5-r1c6 sum 21
x-sum-2: x-sum r6c1-r5c1-r4c1-r3c1-r2c1-r1c1 sum 3
x-sum-3: x-sum r4c1-r4c2-r4c3-r4c4-r4c5-r4c6 sum 6
x-sum-4: x-sum r3c6-r3c5-r3c4-r3c3-r3c2-r3c1 sum 5
x-sum-5: x-sum r1c5-r2c5-r3c5-r4c5-r5c5-r6c5 sum 18
x-sum-6: x-sum r6c6-r6c5-r6c4-r6c3-r6c2-r6c1 sum 8
x-sum-7: x-sum r1c3-r2c3-r3c3-r4c3-r5c3-r6c3 sum 6
x-sum-8: x-sum r6c2-r5c2-r4c2-r3c2-r2c2-r1c2 sum 20
```

Normal 6x6 sudoku rules apply. Each row, column, and box must contain a complete set of the digits 1-6.

X-Sums: Digits outside the grid give the total of the first X digits in the row or column (starting next to the number outside the grid) where X is the first digit along that row or column.
