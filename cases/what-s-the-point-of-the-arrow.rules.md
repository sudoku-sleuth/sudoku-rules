---
format: open-rules
title: What's the Point of The Arrow?
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/m2eddlnd6f
case: https://sudoku-sleuth.com/cases/what-s-the-point-of-the-arrow
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
exported: f3cf638e99fdc83399f4a056da7b8d72
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
cage r1c1-r1c2-r2c1 repeats false total 8 connected true
kropki r4c1-r4c2 white
modular-1: modular r1c1-r2c2-r3c3 loop false modulus 3
modular-2: modular r4c2-r4c3-r4c4-r3c4-r2c4 loop false modulus 3
```

-Normal 4x4 sudoku rules apply: every row, column, and box must contain a complete set of the digits 1-4.

-Along teal modular lines, every set of three adjacent digits has three different remainders when divided by 3.

-Digits in a cage must sum to the number given in the upper left corner of the cage.

-Digits separated by a white dot form a consecutive pair. Not all possible dots are given.
