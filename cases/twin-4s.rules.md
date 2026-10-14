---
format: open-rules
title: Twin 4s
setter: Sir Moose
source: https://sudokupad.app/njia60zkyb
case: https://sudoku-sleuth.com/cases/twin-4s
library: https://rules.sudoku-sleuth.com/
status: read
board:
  rows: 4
  cols: 9
  symbols:
    - 1
    - 2
    - 3
    - 4
    - 5
    - 6
    - 7
    - 8
    - 9
  regions:
    - - r1c1
      - r1c2
      - r1c6
      - r1c7
      - r2c1
      - r2c2
      - r2c6
      - r2c7
    - - r1c3
      - r1c4
      - r1c8
      - r1c9
      - r2c3
      - r2c4
      - r2c8
      - r2c9
    - - r3c1
      - r3c2
      - r3c6
      - r3c7
      - r4c1
      - r4c2
      - r4c6
      - r4c7
    - - r3c3
      - r3c4
      - r3c8
      - r3c9
      - r4c3
      - r4c4
      - r4c8
      - r4c9
exported: 68ec36be9cc4e2eee20a181e655d190a
---

```rules
unique-1: unique r1c1-r1c2-r1c6-r1c7-r2c1-r2c2-r2c6-r2c7
unique-2: unique r1c3-r1c4-r1c8-r1c9-r2c3-r2c4-r2c8-r2c9
unique-3: unique r3c1-r3c2-r3c6-r3c7-r4c1-r4c2-r4c6-r4c7
unique-4: unique r3c3-r3c4-r3c8-r3c9-r4c3-r4c4-r4c8-r4c9
thermo r4c4-r3c4
arrow-1: arrow r4c7-r4c8-r3c8 bulb ["r3c6"]
arrow-2: arrow r1c1-r1c2-r1c3 bulb ["r2c1"]
arrow-3: arrow r3c2-r2c2 bulb ["r4c3"]
arrow-4: arrow r2c6-r3c7 bulb ["r2c7"]
```

Place 8 of the digits 1-9 into the sudoku grids.  Digits cannot repeat in any column, row, or 2*2 box, and the left puzzle and right puzzle each have 4 unique digits.

Digits on an arrow sum to the digit in that arrows circle.

Digits increase from the bulb of the thermometer.
