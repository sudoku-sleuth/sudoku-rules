---
format: open-rules
title: Flurry
setter: Marty Sears
source: https://tinyurl.com/yvhw8q2t
case: https://sudoku-sleuth.com/cases/flurry
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
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
exported: 33211bafe58a20d27b9e6bed171d03cf
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
kropki-1: kropki r4c4-r5c4 white
kropki-2: kropki r3c1-r4c1 white
kropki-3: kropki r7c6-r7c7 white
kropki-4: kropki r8c7-r8c8 white
kropki-5: kropki r5c8-r6c8 white
kropki-6: kropki r5c5-r5c6 white
counting-circles r1c4-r1c5-r1c6-r1c7-r2c5-r2c6-r2c7-r2c8-r3c4-r3c6-r4c1-r4c3-r4c5-r4c7-r5c2-r5c5-r5c6-r5c7-r5c8-r6c2-r6c5-r6c6-r6c7-r6c8-r7c1-r7c2-r7c6-r7c7-r7c8-r8c1-r8c4-r8c5-r8c6-r8c7-r8c8
```

```drawing
- {"id":"drawing-36","rules":[],"visual":{"kind":"line","points":[[8,4],[8,8],[0,8],[0,0],[8,0],[8,4]],"color":"#000000","thickness":6,"rounded":true,"layer":"over"}}
```

• Divide the grid into eight 2x4 boxes. Each box could be placed either horizontally or vertically.
• Fill the grid with the digits 1-8, so that no digit repeats in a row, column or box.
• A digit in a circle indicates exactly how many circles contain that digit.
• Digits joined by a small white dot are consecutive. Not all possible white dots are shown.
