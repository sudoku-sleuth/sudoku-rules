---
format: open-rules
title: That's 3 in the Corner
setter: Blobz
source: https://sudokupad.app/v9hxo4hdq2
case: https://sudoku-sleuth.com/cases/that-s-3-in-the-corner
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
exported: de9b5ada8ce61d7a5311408e71f1771c
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
cage-1: cage r1c1-r1c2 repeats false total 3 connected true
cage-2: cage r3c2-r3c3 repeats false total 3 connected true
kropki-1: kropki r1c3-r1c4 white
kropki-2: kropki r4c6-r5c6 white
renban-1: renban r2c3-r2c4-r2c5-r3c4-r3c5-r4c4
renban-2: renban r4c2-r4c3-r5c2-r5c3-r6c2-r6c1
quadruple-1: quadruple r1c5-r1c6-r2c5-r2c6 digits [3]
quadruple-2: quadruple r3c5-r3c6-r4c5-r4c6 digits [3]
little-killer r5c6-r6c5 sum 3
skyscraper-1: skyscraper r1c4-r2c4-r3c4-r4c4-r5c4-r6c4 visible 3
skyscraper-2: skyscraper r6c6-r6c5-r6c4-r6c3-r6c2-r6c1 visible 3
```

Normal 6x6 sudoku rules apply.

Renban: Pink lines contain a set of consecutive digits in any order.

Killer: Digits in cages must sum to the small clue in the top left corner. 

Quadruple: Digits in circles must appear in one of the cells touched by the circle.

Little Killer: Digits along a diagonal indicated by an arrow outside the grid must sum to the attached value.

Skyscraper: Digits in the grid represent the heights of skyscrapers, and clues outside the grid indicate the number of skyscrapers visible in the corresponding row or column.

Kropki: Digits separated by a white dot are consecutive. Not all such dots are shown.
