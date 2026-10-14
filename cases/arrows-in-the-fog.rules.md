---
fog:
  initiallyLit:
    - r1c3
    - r2c3
format: open-rules
title: Arrows in the Fog
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/3sofz1622k
case: https://sudoku-sleuth.com/cases/arrows-in-the-fog
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
  givens: r1c3=5
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
exported: 5148e2c6af758ecb0b28c75199269ca9
---

```rules
unique-1: unique r1c1-r1c2-r1c3-r1c4-r1c5-r1c6 stated true
unique-2: unique r2c1-r2c2-r2c3-r2c4-r2c5-r2c6 stated true
unique-3: unique r3c1-r3c2-r3c3-r3c4-r3c5-r3c6 stated true
unique-4: unique r4c1-r4c2-r4c3-r4c4-r4c5-r4c6 stated true
unique-5: unique r5c1-r5c2-r5c3-r5c4-r5c5-r5c6 stated true
unique-6: unique r6c1-r6c2-r6c3-r6c4-r6c5-r6c6 stated true
unique-7: unique r1c1-r2c1-r3c1-r4c1-r5c1-r6c1 stated true
unique-8: unique r1c2-r2c2-r3c2-r4c2-r5c2-r6c2 stated true
unique-9: unique r1c3-r2c3-r3c3-r4c3-r5c3-r6c3 stated true
unique-10: unique r1c4-r2c4-r3c4-r4c4-r5c4-r6c4 stated true
unique-11: unique r1c5-r2c5-r3c5-r4c5-r5c5-r6c5 stated true
unique-12: unique r1c6-r2c6-r3c6-r4c6-r5c6-r6c6 stated true
unique-13: unique r1c1-r1c2-r1c3-r2c1-r2c2-r2c3 stated true
unique-14: unique r1c4-r1c5-r1c6-r2c4-r2c5-r2c6 stated true
unique-15: unique r3c1-r3c2-r3c3-r4c1-r4c2-r4c3 stated true
unique-16: unique r3c4-r3c5-r3c6-r4c4-r4c5-r4c6 stated true
unique-17: unique r5c1-r5c2-r5c3-r6c1-r6c2-r6c3 stated true
unique-18: unique r5c4-r5c5-r5c6-r6c4-r6c5-r6c6 stated true
arrow-1: arrow r1c3-r1c2 bulb ["r2c3"]
arrow-2: arrow r1c5-r1c6 bulb ["r1c4"]
arrow-3: arrow r2c4-r2c5 bulb ["r1c4"]
arrow-4: arrow r3c4-r3c3-r3c2 bulb ["r3c5"]
arrow-5: arrow r4c5-r4c4 bulb ["r3c5"]
arrow-6: arrow r5c3-r5c4 bulb ["r4c3"]
arrow-7: arrow r5c1-r6c1 bulb ["r4c1"]
```

-Normal sudoku rules apply: the digits 1 to 9 must be placed in each row, column and 3x3 box without repetition.
-Digits along an arrow must sum to the number in the circle attached to the arrow.
-Fog will lift, possibly revealing more clues, as correct digits are placed.
