---
fog:
  initiallyLit:
    - r6c1
format: open-rules
title: "EquaLite Cages 105: Fog of War"
setter: gUBBLOR
source: https://sudokupad.app/96kbebvrkn
case: https://sudoku-sleuth.com/cases/equalite-cages-105
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
exported: 33973f0f580f0e74da15e1dc864115f4
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
equality-cage-1: equality-cage r5c1-r5c2-r6c1-r6c2
equality-cage-2: equality-cage r4c3-r5c3
equality-cage-3: equality-cage r3c1-r4c1
equality-cage-4: equality-cage r4c4-r4c5
equality-cage-5: equality-cage r6c5-r6c6
equality-cage-6: equality-cage r2c3-r2c4
equality-cage-7: equality-cage r3c3-r3c4
equality-cage-8: equality-cage r5c4-r5c5
kropki-1: kropki r5c1-r6c1 black
kropki-2: kropki r6c1-r6c2 black
kropki-3: kropki r4c2-r4c3 black
kropki-4: kropki r1c1-r2c1 white
kropki-5: kropki r3c2-r3c3 white
```

Normal 6x6 sudoku rules apply. Place the digits 1 through 6 in each empty cell. Digits must not repeat within the same row, column, or box.

EquaLite cages: Cages must have an equal number of low (1,2,3) and high (4,5,6) digits AND an equal number of even (2,4,6) and odd (1,3,5) digits. Digits may not repeat in a cage.

Kropki dots: A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are shown.

Fog of war: The grid is covered in fog. Placing correct digits will clear the fog from the surrounding cells.
