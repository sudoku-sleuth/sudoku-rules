---
fog:
  initiallyLit:
    - 4
    - 5
    - 14
    - 15
    - 24
    - 25
    - 34
    - 35
    - 36
    - 44
    - 45
    - 46
    - 55
    - 56
    - 65
    - 66
    - 75
    - 76
format: open-rules
title: Disjoint Bowling in the Fog
setter: Meggen033
source: https://sudokupad.app/axp69saofo
case: https://sudoku-sleuth.com/cases/disjoint-bowling-in-the-fog
library: https://rules.sudoku-sleuth.com/
status: read
board:
  rows: 9
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
cage-1: cage r5c1-r6c1-r6c2 total 24 connected true
cage-2: cage r8c4-r9c4-r9c5 total 24 connected true
cage-3: cage r2c7-r3c7-r3c8 total 24 connected true
cage-4: cage r1c5-r1c6-r2c6 total 6 connected true
cage-5: cage r4c8-r4c9-r5c9 total 6 connected true
cage-6: cage r7c2-r7c3-r8c3 total 6 connected true
cage-7: cage r7c8-r8c8-r9c8 total 16 connected true
little-killer-1: little-killer r1c4-r2c3-r3c2-r4c1 sum 20
little-killer-2: little-killer r1c2-r2c1 sum 10
little-killer-3: little-killer r4c9-r5c8-r6c7-r7c6-r8c5-r9c4 sum 30
unique-28: unique r1c1-r1c4-r1c7-r4c1-r4c4-r4c7-r7c1-r7c4-r7c7 stated true
unique-29: unique r1c2-r1c5-r1c8-r4c2-r4c5-r4c8-r7c2-r7c5-r7c8 stated true
unique-30: unique r1c3-r1c6-r1c9-r4c3-r4c6-r4c9-r7c3-r7c6-r7c9 stated true
unique-31: unique r2c1-r2c4-r2c7-r5c1-r5c4-r5c7-r8c1-r8c4-r8c7 stated true
unique-32: unique r2c2-r2c5-r2c8-r5c2-r5c5-r5c8-r8c2-r8c5-r8c8 stated true
unique-33: unique r2c3-r2c6-r2c9-r5c3-r5c6-r5c9-r8c3-r8c6-r8c9 stated true
unique-34: unique r3c1-r3c4-r3c7-r6c1-r6c4-r6c7-r9c1-r9c4-r9c7 stated true
unique-35: unique r3c2-r3c5-r3c8-r6c2-r6c5-r6c8-r9c2-r9c5-r9c8 stated true
unique-36: unique r3c3-r3c6-r3c9-r6c3-r6c6-r6c9-r9c3-r9c6-r9c9 stated true
```

•	Normal Sudoku rules apply. 
•	Disjoint Set: Cells in the same relative position in different boxes cannot contain the same digits.
•	The grid is partially covered with fog. Correctly placed digits will clear the fog around that cell.  No guessing is required.
•	Digits in a cage do not repeat and sum to the clue in the top left.
•	Digits along marked diagonals sum to the number indicated outside the grid.
