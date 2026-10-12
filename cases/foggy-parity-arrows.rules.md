---
fog:
  initiallyLit:
    - 16
    - 33
    - 34
    - 35
    - 42
    - 44
    - 51
    - 52
    - 53
    - 70
format: open-rules
title: Foggy Parity Arrows
setter: Sir Moose
source: https://sudokupad.app/di0fyn770d
case: https://sudoku-sleuth.com/cases/foggy-parity-arrows
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
arrow-1: arrow r5c9-r6c9 bulb ["r4c9"]
arrow-2: arrow r3c7-r2c8 bulb ["r4c8"]
arrow-3: arrow r7c7-r8c8 bulb ["r6c8"]
arrow-4: arrow r5c7-r6c7 bulb ["r4c7"]
arrow-5: arrow r4c6-r5c6-r6c6 bulb ["r4c5"]
arrow-6: arrow r3c6-r3c5-r3c4 bulb ["r2c6"]
arrow-7: arrow r6c4-r5c5 bulb ["r6c5"]
arrow-8: arrow r5c3-r4c3 bulb ["r6c3"]
arrow-9: arrow r4c2-r3c2 bulb ["r5c2"]
arrow-10: arrow r2c3-r2c2 bulb ["r1c4"]
arrow-11: arrow r7c3-r8c4 bulb ["r8c2"]
```

Normal Sudoku Rules Apply.

Even digits cannot be orthogonally adjacent to even digits.

Digits along an arrow sum to the digit in that arrow's circle.  Arrows may not intersect or cross, but may end/begin in the same cell.

Some of the grid is covered in fog.  Placing correct digits will clear the fog in surrounding cells.  No guesses are required.
