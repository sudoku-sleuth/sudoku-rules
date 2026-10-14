---
format: open-rules
title: Afternoon snack
setter: gUBBLOR
source: https://sudokupad.app/0ofttjtwvv
case: https://sudoku-sleuth.com/cases/afternoon-snack
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
exported: 944665410f874ce7b1c4dc6ef9a2feb6
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
kropki r2c2-r2c3 black
whispers-1: whispers r3c1-r2c2-r2c3-r1c4 loop false gap 2
whispers-2: whispers r3c4-r4c3 loop false gap 2
whispers-3: whispers r1c1-r1c2 loop false gap 2
```

Normal 4x4 sudoku rules apply. Place the digits 1 through 4 in each empty cell. Digits must not repeat within the same row, column, or box.

German Whispers: Adjacent digits along each German Whisper line must have a difference of at least 2. Digits may repeat on the line.

Kropki dots: A black dot between cells indicates cell values with a 2:1 ratio. Not all dots are shown.
