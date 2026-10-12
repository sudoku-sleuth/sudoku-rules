---
format: open-rules
title: Even Pressure
setter: Kennet's Dad
source: https://sudokupad.app/j87azggrzi
case: https://sudoku-sleuth.com/cases/even-pressure
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
whispers-1: whispers r1c1-r1c2-r1c3-r1c4-r1c5-r1c6 loop false gap 3
whispers-2: whispers r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r3c6 loop false gap 3
whispers-3: whispers r3c3-r4c3-r5c3-r6c3 loop false gap 3
whispers-4: whispers r3c4-r4c4-r5c4-r6c4 loop false gap 3
whispers-5: whispers r5c1-r6c1 loop false gap 3
```

```drawing
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[-0.273,3.727],[-0.061,3.939]],"color":"#000000","thickness":3.2,"headLength":0.15,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[2.727,-0.273],[2.939,-0.061]],"color":"#000000","thickness":3.2,"headLength":0.15,"rounded":true}}
```

-Normal 6x6 sudoku rules apply: place the digits 1-6 once each in every row, column, and 2x3 box. 
-Adjacent digits along a green line must differ by at least 3. 
-The sum of digits along the diagonal pointed at by an arrow outside the grid must be of the same parity (odd/even) as the other arrow.
