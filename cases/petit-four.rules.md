---
format: open-rules
title: Petit Four
setter: Blobz
source: https://sudokupad.app/y8tao2pruv
case: https://sudoku-sleuth.com/cases/petit-four
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
cage r6c5-r6c6 repeats false total 4 connected true
renban-1: renban r1c3-r1c4-r1c5-r2c5-r3c5-r2c4
renban-2: renban r2c3-r2c2-r2c1-r3c1-r4c1-r3c2
renban-3: renban r6c4-r6c3-r6c2-r5c2-r4c2-r5c3
renban-4: renban r3c6-r4c6-r5c6-r5c5-r5c4-r4c5
quadruple-1: quadruple r2c3-r2c4-r3c3-r3c4 digits [4]
quadruple-2: quadruple r4c3-r4c4-r5c3-r5c4 digits [4]
quadruple-3: quadruple r3c1-r3c2-r4c1-r4c2 digits [4]
quadruple-4: quadruple r3c5-r3c6-r4c5-r4c6 digits [4]
little-killer r1c2-r2c1 sum 4
skyscraper-1: skyscraper r6c5-r5c5-r4c5-r3c5-r2c5-r1c5 visible 4
skyscraper-2: skyscraper r4c1-r4c2-r4c3-r4c4-r4c5-r4c6 visible 4
```

Normal sudoku rules apply.

Renban: Pink lines contain a set of consecutive digits in any order.

Killer: Digits in cages must sum to the small clue in the top left corner. 

Quadruple: Digits in circles must appear in one of the cells touched by the circle.

Little Killer: Digits along a diagonal indicated by an arrow outside the grid must sum to the attached value.

Skyscraper: Digits in the grid represent the heights of skyscrapers, and clues outside the grid indicate the number of skyscrapers visible in the corresponding row or column.
