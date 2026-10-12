---
fog:
  initiallyLit:
    - 0
    - 1
    - 4
    - 5
format: open-rules
title: Foglets
setter: FullDeck and Missing a Few Cards
source: ""
case: https://sudoku-sleuth.com/cases/foglets
library: https://rules.sudoku-sleuth.com/
status: read
board:
  rows: 4
  cols: 4
  symbols:
    - 1
    - 2
    - 3
    - 4
  givens: r1c1=1
  regions:
    - - r1c1
      - r1c2
      - r2c1
      - r2c2
    - - r1c3
      - r1c4
      - r2c3
      - r2c4
    - - r3c1
      - r3c2
      - r4c1
      - r4c2
    - - r3c3
      - r3c4
      - r4c3
      - r4c4
---

```rules
unique-1: unique r1c1-r1c2-r1c3-r1c4
unique-2: unique r2c1-r2c2-r2c3-r2c4
unique-3: unique r3c1-r3c2-r3c3-r3c4
unique-4: unique r4c1-r4c2-r4c3-r4c4
unique-5: unique r1c1-r2c1-r3c1-r4c1
unique-6: unique r1c2-r2c2-r3c2-r4c2
unique-7: unique r1c3-r2c3-r3c3-r4c3
unique-8: unique r1c4-r2c4-r3c4-r4c4
unique-9: unique r1c1-r1c2-r2c1-r2c2
unique-10: unique r1c3-r1c4-r2c3-r2c4
unique-11: unique r3c1-r3c2-r4c1-r4c2
unique-12: unique r3c3-r3c4-r4c3-r4c4
cage-1: cage r1c2-r1c3 repeats false total 6 connected true
cage-2: cage r2c1-r3c1 repeats false total 7 connected true
cage-3: cage r2c2-r3c2 repeats false total 3 connected true
cage-4: cage r3c3-r3c4-r4c3 repeats false total 6 connected true
```

Standard 4x4 sudoku rules apply: every row, column, and 2x2 box indicated by darker shaded lines must contain a complete set of the digits 1-4.

Killer cages: digits inside cages marked by dashed lines cannot repeat and must sum to the number shown in the top left corner of the cage.

Fog: Only part of the grid is visible. As correct digits are placed, the fog will lift, revealing more clues. It is not necessary to guess; digits can be placed correctly using logic with only the visible portion of the grid.
