---
format: open-rules
title: Midnight snack
setter: gUBBLOR
source: https://sudokupad.app/ohizmple1w
case: https://sudoku-sleuth.com/cases/midnight-snack
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
exported: f83787956a9d5e99aeb42e0e9780784b
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
kropki-1: kropki r1c2-r2c2 black
kropki-2: kropki r3c2-r3c3 black
renban-1: renban r1c2-r2c1
renban-2: renban r2c4-r3c4
renban-3: renban r4c2-r4c3
renban-4: renban r2c2-r3c2-r3c3-r2c3
```

Normal 4x4 sudoku rules apply. Place the digits 1 through 4 in each empty cell. Digits must not repeat within the same row, column, or box.

Renban: Digits along each renban line must be a set of consecutive digits in any order, and must not repeat.

Kropki dots: A black dot between cells indicates cell values with a 2:1 ratio. Not all dots are shown.
