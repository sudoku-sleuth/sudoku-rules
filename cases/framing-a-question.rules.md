---
format: open-rules
title: Framing a Question
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/x17jt0r6zc
case: https://sudoku-sleuth.com/cases/framing-a-question
library: https://rules.sudoku-sleuth.com/
status: read
board:
  rows: 5
  cols: 5
  symbols:
    - 1
    - 2
    - 3
    - 4
    - 5
  regions:
    - - r1c1
      - r1c2
      - r1c3
      - r1c4
      - r2c4
    - - r1c5
      - r2c5
      - r3c5
      - r4c4
      - r4c5
    - - r4c2
      - r5c2
      - r5c3
      - r5c4
      - r5c5
    - - r2c1
      - r2c2
      - r3c1
      - r4c1
      - r5c1
    - - r2c3
      - r3c2
      - r3c3
      - r3c4
      - r4c3
---

```rules
unique-1: unique r1c1-r1c2-r1c3-r1c4-r1c5
unique-2: unique r2c1-r2c2-r2c3-r2c4-r2c5
unique-3: unique r3c1-r3c2-r3c3-r3c4-r3c5
unique-4: unique r4c1-r4c2-r4c3-r4c4-r4c5
unique-5: unique r5c1-r5c2-r5c3-r5c4-r5c5
unique-6: unique r1c1-r2c1-r3c1-r4c1-r5c1
unique-7: unique r1c2-r2c2-r3c2-r4c2-r5c2
unique-8: unique r1c3-r2c3-r3c3-r4c3-r5c3
unique-9: unique r1c4-r2c4-r3c4-r4c4-r5c4
unique-10: unique r1c5-r2c5-r3c5-r4c5-r5c5
unique-11: unique r1c1-r1c2-r1c3-r1c4-r2c4
unique-12: unique r1c5-r2c5-r3c5-r4c4-r4c5
unique-13: unique r4c2-r5c2-r5c3-r5c4-r5c5
unique-14: unique r2c1-r2c2-r3c1-r4c1-r5c1
unique-15: unique r2c3-r3c2-r3c3-r3c4-r4c3
kropki-1: kropki r3c3-r3c4 colour "white"
kropki-2: kropki r3c5-r4c5 colour "white"
kropki-3: kropki r2c2-r2c3 colour "black"
modular-1: modular r3c1-r2c1-r1c1-r1c2 loop false modulus 3
modular-2: modular r1c3-r1c4-r1c5-r2c5 loop false modulus 3
modular-3: modular r3c5-r4c5-r5c5-r5c4 loop false modulus 3
modular-4: modular r5c3-r5c2-r5c1-r4c1 loop false modulus 3
```

Normal 5x5 irregular sudoku rules apply: Every row, column, and outlined region must contain a complete set of the digits 1-5.

Any three adjacent digits along a teal modular line must contain three different remainders when divided by 3.

Digits separated by a white dot are consecutive. Digits separated by a black dot are in a 1:2 ratio. Not all possible dots are necessarily given.
