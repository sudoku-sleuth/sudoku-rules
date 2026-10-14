---
format: open-rules
title: An Exercise in Colouring
setter: Dr Logic
source: https://sudokupad.app/gbfe56ugoe
case: https://sudoku-sleuth.com/cases/an-exercise-in-colouring
library: https://rules.sudoku-sleuth.com/
status: read
board:
  rows: 8
  cols: 8
  symbols:
    - 1
    - 2
    - 3
    - 4
    - 5
    - 6
    - 7
    - 8
  regions:
    - - r1c1
      - r1c2
      - r1c3
      - r1c4
      - r2c1
      - r2c2
      - r3c1
      - r4c1
    - - r2c3
      - r2c4
      - r3c2
      - r3c3
      - r3c4
      - r4c2
      - r4c3
      - r4c4
    - - r1c5
      - r1c6
      - r1c7
      - r1c8
      - r2c7
      - r2c8
      - r3c8
      - r4c8
    - - r2c5
      - r2c6
      - r3c5
      - r3c6
      - r3c7
      - r4c5
      - r4c6
      - r4c7
    - - r5c1
      - r6c1
      - r7c1
      - r7c2
      - r8c1
      - r8c2
      - r8c3
      - r8c4
    - - r5c2
      - r5c3
      - r5c4
      - r6c2
      - r6c3
      - r6c4
      - r7c3
      - r7c4
    - - r5c8
      - r6c8
      - r7c7
      - r7c8
      - r8c5
      - r8c6
      - r8c7
      - r8c8
    - - r5c5
      - r5c6
      - r5c7
      - r6c5
      - r6c6
      - r6c7
      - r7c5
      - r7c6
exported: f9dfe988a4839600f3af0d176e1d056e
---

```rules
unique-1: unique r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8
unique-2: unique r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8
unique-3: unique r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8
unique-4: unique r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8
unique-5: unique r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8
unique-6: unique r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8
unique-7: unique r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8
unique-8: unique r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8
unique-9: unique r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1
unique-10: unique r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2
unique-11: unique r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3
unique-12: unique r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4-r8c4
unique-13: unique r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5
unique-14: unique r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6-r8c6
unique-15: unique r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7
unique-16: unique r1c8-r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8
unique-17: unique r1c1-r1c2-r1c3-r1c4-r2c1-r2c2-r3c1-r4c1
unique-18: unique r2c3-r2c4-r3c2-r3c3-r3c4-r4c2-r4c3-r4c4
unique-19: unique r1c5-r1c6-r1c7-r1c8-r2c7-r2c8-r3c8-r4c8
unique-20: unique r2c5-r2c6-r3c5-r3c6-r3c7-r4c5-r4c6-r4c7
unique-21: unique r5c1-r6c1-r7c1-r7c2-r8c1-r8c2-r8c3-r8c4
unique-22: unique r5c2-r5c3-r5c4-r6c2-r6c3-r6c4-r7c3-r7c4
unique-23: unique r5c8-r6c8-r7c7-r7c8-r8c5-r8c6-r8c7-r8c8
unique-24: unique r5c5-r5c6-r5c7-r6c5-r6c6-r6c7-r7c5-r7c6
anti-knight
anti-king
thermo-1: thermo r7c2-r8c3
thermo-2: thermo r7c2-r6c1
kropki r1c4-r1c5 black
arrow r8c7-r8c6-r8c5 bulb ["r7c7"]
whispers-1: whispers r4c1-r3c2-r2c3-r1c4 loop false gap 5
whispers-2: whispers r1c5-r2c6-r3c7-r4c8 loop false gap 5
whispers-3: whispers r5c1-r6c2-r7c3-r8c4 loop false gap 5
whispers-4: whispers r8c5-r7c6-r6c7-r5c8 loop false gap 5
renban-1: renban r3c1-r2c2-r1c3
renban-2: renban r1c6-r2c7-r3c8
```

Normal 8x8 Sudoku Rules Apply. Place the digits 1-8 once each in every row, column and marked region.

Adjacent cells along a green german whispers line differ by at least 5.

Digits along the arrow sum to the digit in the attatched circle.

Normal thermometer rules: digits increase in size from the bulb end.

Cells separated by a black dot are in a 1:2 ratio, not all such dots are given.

Cells along a pink renban line form a string of consecutive numbers, in any order

Finally, digits that see each other by knight or kings move (in chess) cannot be the same.
