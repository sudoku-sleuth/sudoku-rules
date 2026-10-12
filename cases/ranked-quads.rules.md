---
format: open-rules
title: Ranked Quads
setter: Marty Sears
source: https://sudokupad.app/d3tqaq0an5
case: https://sudoku-sleuth.com/cases/ranked-quads
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
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
quadruple-1: quadruple r2c1-r2c2-r3c1-r3c2 digits [2,2]
quadruple-2: quadruple r4c2-r4c3-r5c2-r5c3 digits [1,1]
quadruple-3: quadruple r2c2-r2c3-r3c2-r3c3 digits [6]
quadruple-4: quadruple r5c2-r5c3-r6c2-r6c3 digits [5]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[6.1,5.7],[6.1,6.1],[-0.1,6.1],[-0.1,-0.1],[6.1,-0.1],[6.1,5.7]],"color":"#bee255ff","thickness":12.16,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[6.2,5.8],[6.2,6.2],[-0.2,6.2],[-0.2,-0.2],[6.2,-0.2],[6.2,5.8]],"color":"#e6f3abff","thickness":10.24,"rounded":true}}
```

Normal 6x6 sudoku rules apply.

QUAD CLUES: Each digit in a circle must appear in the surrounding 2x2 area. (If a digit appears twice in the circle it must appear twice in the 2x2 area.)

RANKED QUADS: The 25 2x2 areas in the grid each contain a 4-digit number (read in normal reading order from top left to bottom right.) If all these 4-digit numbers are ranked from lowest to highest (with rank 1 being the lowest and rank 25 being the highest), the number in a circle also gives the rank of its surrounding 2x2 area. All the 4-digit numbers are different, so there are no tied ranks.
