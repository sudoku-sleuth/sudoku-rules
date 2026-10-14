---
format: open-rules
title: Arrow Sudoku Snack
setter: sujoyku
source: https://sudokupad.app/q8g5lbobv9
case: https://sudoku-sleuth.com/cases/arrow-sudoku-snack
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
    - - r1c1
      - r2c1
      - r2c2
      - r3c1
      - r3c2
      - r3c3
      - r4c2
    - - r1c2
      - r1c3
      - r1c4
      - r1c5
      - r2c3
      - r2c4
      - r2c5
    - - r1c6
      - r1c7
      - r2c6
      - r2c7
      - r3c4
      - r3c5
      - r3c6
    - - r3c7
      - r4c3
      - r4c4
      - r4c5
      - r4c6
      - r4c7
      - r5c6
    - - r5c5
      - r5c7
      - r6c5
      - r6c6
      - r6c7
      - r7c6
      - r7c7
    - - r4c1
      - r5c1
      - r5c2
      - r5c3
      - r6c1
      - r6c2
      - r7c1
    - - r5c4
      - r6c3
      - r6c4
      - r7c2
      - r7c3
      - r7c4
      - r7c5
exported: 5ea65aea1be3816245163a0bfbf95baa
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
unique-15: unique r1c1-r2c1-r2c2-r3c1-r3c2-r3c3-r4c2
unique-16: unique r1c2-r1c3-r1c4-r1c5-r2c3-r2c4-r2c5
unique-17: unique r1c6-r1c7-r2c6-r2c7-r3c4-r3c5-r3c6
unique-18: unique r3c7-r4c3-r4c4-r4c5-r4c6-r4c7-r5c6
unique-19: unique r5c5-r5c7-r6c5-r6c6-r6c7-r7c6-r7c7
unique-20: unique r4c1-r5c1-r5c2-r5c3-r6c1-r6c2-r7c1
unique-21: unique r5c4-r6c3-r6c4-r7c2-r7c3-r7c4-r7c5
diagonal-1: diagonal direction "main"
diagonal-2: diagonal direction "anti"
arrow-1: arrow r2c3-r2c4-r2c5 bulb ["r2c2"]
arrow-2: arrow r6c5-r6c4-r6c3 bulb ["r6c6"]
arrow-3: arrow r5c1-r4c2-r3c3 bulb ["r6c2"]
arrow-4: arrow r3c7-r4c6-r5c5 bulb ["r2c6"]
```

Normal irregular 7x7 Sudoku rules apply, i.e. each row, column and region has to contain the digits from 1 to 7. Digits on an arrow sum to the digit in the circle from which the arrow emerges. On the main diagonals digits do not repeat.
