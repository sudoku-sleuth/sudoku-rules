---
format: open-rules
title: Morning snack
setter: gUBBLOR
source: https://sudokupad.app/0huzg1afm9
case: https://sudoku-sleuth.com/cases/morning-snack
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
exported: 1919e084f8fa84ffddb76bb272aa075b
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
arrow-1: arrow r2c2-r1c3 bulb ["r3c1"]
arrow-2: arrow r3c3-r2c3 bulb ["r4c4"]
```

Normal 4x4 sudoku rules apply. Place the digits 1 through 4 in each empty cell. Digits must not repeat within the same row, column, or box.

Arrows: The digits along each arrow must sum to the digit in the circled cell. Digits may repeat on arrows.
