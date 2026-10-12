---
format: open-rules
title: XOV to Philadelphia
setter: The Bard
source: https://sudokupad.app/1uznwhuk18
case: https://sudoku-sleuth.com/cases/xov-to-philadelphia
library: https://rules.sudoku-sleuth.com/
status: read
board:
  rows: 9
  cols: 9
  symbols:
    - 0
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
      - r1c3
      - r2c1
      - r2c2
      - r2c3
      - r3c1
      - r3c2
      - r3c3
    - - r1c4
      - r1c5
      - r1c6
      - r2c4
      - r2c5
      - r2c6
      - r3c4
      - r3c5
      - r3c6
    - - r1c7
      - r1c8
      - r1c9
      - r2c7
      - r2c8
      - r2c9
      - r3c7
      - r3c8
      - r3c9
    - - r4c1
      - r4c2
      - r4c3
      - r5c1
      - r5c2
      - r5c3
      - r6c1
      - r6c2
      - r6c3
    - - r4c4
      - r4c5
      - r4c6
      - r5c4
      - r5c5
      - r5c6
      - r6c4
      - r6c5
      - r6c6
    - - r4c7
      - r4c8
      - r4c9
      - r5c7
      - r5c8
      - r5c9
      - r6c7
      - r6c8
      - r6c9
    - - r7c1
      - r7c2
      - r7c3
      - r8c1
      - r8c2
      - r8c3
      - r9c1
      - r9c2
      - r9c3
    - - r7c4
      - r7c5
      - r7c6
      - r8c4
      - r8c5
      - r8c6
      - r9c4
      - r9c5
      - r9c6
    - - r7c7
      - r7c8
      - r7c9
      - r8c7
      - r8c8
      - r8c9
      - r9c7
      - r9c8
      - r9c9
---

```rules
unique-1: unique r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9
unique-2: unique r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9
unique-3: unique r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8-r3c9
unique-4: unique r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8-r4c9
unique-5: unique r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9
unique-6: unique r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8-r6c9
unique-7: unique r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8-r7c9
unique-8: unique r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r8c9
unique-9: unique r9c1-r9c2-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8-r9c9
unique-10: unique r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r9c1
unique-11: unique r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2-r9c2
unique-12: unique r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3-r9c3
unique-13: unique r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4-r8c4-r9c4
unique-14: unique r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5
unique-15: unique r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6-r8c6-r9c6
unique-16: unique r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7-r9c7
unique-17: unique r1c8-r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8-r9c8
unique-18: unique r1c9-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9
unique-19: unique r1c1-r1c2-r1c3-r2c1-r2c2-r2c3-r3c1-r3c2-r3c3
unique-20: unique r1c4-r1c5-r1c6-r2c4-r2c5-r2c6-r3c4-r3c5-r3c6
unique-21: unique r1c7-r1c8-r1c9-r2c7-r2c8-r2c9-r3c7-r3c8-r3c9
unique-22: unique r4c1-r4c2-r4c3-r5c1-r5c2-r5c3-r6c1-r6c2-r6c3
unique-23: unique r4c4-r4c5-r4c6-r5c4-r5c5-r5c6-r6c4-r6c5-r6c6
unique-24: unique r4c7-r4c8-r4c9-r5c7-r5c8-r5c9-r6c7-r6c8-r6c9
unique-25: unique r7c1-r7c2-r7c3-r8c1-r8c2-r8c3-r9c1-r9c2-r9c3
unique-26: unique r7c4-r7c5-r7c6-r8c4-r8c5-r8c6-r9c4-r9c5-r9c6
unique-27: unique r7c7-r7c8-r7c9-r8c7-r8c8-r8c9-r9c7-r9c8-r9c9
anti-knight
kropki-1: kropki r6c5-r7c5 colour "white"
kropki-2: kropki r9c6-r9c7 colour "white"
kropki-3: kropki r3c1-r3c2 colour "white"
kropki-4: kropki r9c8-r9c9 colour "white"
pair-1: pair r3c3-r3c4 relation {"op":"sum","value":10}
pair-2: pair r4c3-r4c4 relation {"op":"sum","value":10}
pair-3: pair r5c3-r5c4 relation {"op":"sum","value":10}
pair-4: pair r6c3-r6c4 relation {"op":"sum","value":10}
pair-5: pair r7c3-r7c4 relation {"op":"sum","value":10}
pair-6: pair r8c3-r8c4 relation {"op":"sum","value":10}
pair-7: pair r2c3-r2c4 relation {"op":"sum","value":10}
pair-8: pair r4c6-r4c7 relation {"op":"sum","value":10}
pair-9: pair r6c6-r6c7 relation {"op":"sum","value":10}
pair-10: pair r4c1-r4c2 relation {"op":"sum","value":10}
pair-11: pair r6c1-r6c2 relation {"op":"sum","value":10}
pair-12: pair r4c8-r4c9 relation {"op":"sum","value":10}
pair-13: pair r6c8-r6c9 relation {"op":"sum","value":10}
pair-14: pair r1c7-r1c8 relation {"op":"sum","value":10}
pair-15: pair r3c7-r3c8 relation {"op":"sum","value":10}
pair-16: pair r2c5-r2c6 relation {"op":"sum","value":10}
pair-17: pair r5c5-r5c6 relation {"op":"sum","value":10}
pair-18: pair r1c9-r2c9 relation {"op":"sum","value":10}
pair-19: pair r3c5-r3c6 relation {"op":"sum","value":10}
pair-20: pair r7c8-r8c8 relation {"op":"sum","value":10}
pair-21: pair r8c2-r9c2 relation {"op":"sum","value":10}
pair-22: pair r2c2-r3c2 relation {"op":"sum","value":10}
pair-23: pair r1c5-r1c6 relation {"op":"sum","value":10}
pair-24: pair r1c1-r1c2 relation {"op":"sum","value":10}
pair-25: pair r8c5-r8c6 relation {"op":"sum","value":10}
pair-26: pair r4c3-r5c3 relation {"op":"sum","value":10}
pair-27: pair r1c1-r2c1 relation {"op":"sum","value":5}
pair-28: pair r8c1-r9c1 relation {"op":"sum","value":5}
pair-29: pair r1c3-r1c4 relation {"op":"sum","value":5}
pair-30: pair r9c3-r9c4 relation {"op":"sum","value":5}
```

Extended sudoku rules apply, place the digits 0-9 in each row, column, and box; however one digit will not fit.

XV: Digits separated by an X add to 10, those separated by a V add to 5.

Kropki: Digits between white dot are consecutive.

Knights Move: Digits separated by a chess knights move cannot contain the same digit.
