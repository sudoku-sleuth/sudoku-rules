---
format: open-rules
title: Evenly Counting
setter: sujoyku
source: https://tinyurl.com/yz8evdep
case: https://sudoku-sleuth.com/cases/evenly-counting
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
  givens: r1c6=4 r6c1=6
  regions:
    - - r1c1
      - r1c2
      - r2c1
      - r2c2
      - r3c1
      - r4c1
    - - r1c3
      - r1c4
      - r1c5
      - r1c6
      - r2c3
      - r2c6
    - - r3c2
      - r3c3
      - r4c2
      - r4c3
      - r5c2
      - r5c3
    - - r2c4
      - r2c5
      - r3c4
      - r3c5
      - r4c4
      - r4c5
    - - r5c1
      - r5c4
      - r6c1
      - r6c2
      - r6c3
      - r6c4
    - - r3c6
      - r4c6
      - r5c5
      - r5c6
      - r6c5
      - r6c6
exported: a05c02bf2aacede5251ff57e36edb4a6
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
unique-13: unique r1c1-r1c2-r2c1-r2c2-r3c1-r4c1
unique-14: unique r1c3-r1c4-r1c5-r1c6-r2c3-r2c6
unique-15: unique r3c2-r3c3-r4c2-r4c3-r5c2-r5c3
unique-16: unique r2c4-r2c5-r3c4-r3c5-r4c4-r4c5
unique-17: unique r5c1-r5c4-r6c1-r6c2-r6c3-r6c4
unique-18: unique r3c6-r4c6-r5c5-r5c6-r6c5-r6c6
quadruple-1: quadruple r2c1-r2c2-r3c1-r3c2 digits [3]
quadruple-2: quadruple r4c5-r4c6-r5c5-r5c6 digits [4]
quadruple-3: quadruple r4c2-r4c3-r5c2-r5c3 digits [1]
quadruple-4: quadruple r2c4-r2c5-r3c4-r3c5 digits [2]
quadruple-5: quadruple r3c3-r3c4-r4c3-r4c4 digits [1]
```

- Normal (irregular) 6x6 sudoku rules apply, i.e. each row, column and region has to contain the digits from 1 to 6 once each.

- Even Counting Quadruples: A digit in a circle must appear in one of the four surrounding cells. Moreover, the digit indicates the number of even digits in these cells. For example, a 2 in a circle implies that the digit 2 appears in the four surrounding cells and they contain exactly two even and two odd digits.
