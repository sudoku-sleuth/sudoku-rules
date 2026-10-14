---
format: open-rules
title: Colorful Arrows
setter: Sir Moose
source: https://sudokupad.app/2gfgqbxwhx
case: https://sudoku-sleuth.com/cases/colorful-arrows
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - The source describes Renban lines that are not yet included in our reading.
exported: 603dedc3a6fe83f691d3511cf614a67d
---

```rules
sudoku 9x9
arrow-1: arrow r5c3-r5c4-r5c5 bulb ["r5c2"]
arrow-2: arrow r9c3-r9c2 bulb ["r9c4"]
arrow-3: arrow r1c2-r1c3 bulb ["r2c2"]
arrow-4: arrow r2c6-r3c7 bulb ["r2c5"]
arrow-5: arrow r4c6-r3c6 bulb ["r4c7"]
arrow-6: arrow r3c9-r2c8 bulb ["r4c9"]
arrow-7: arrow r2c1-r3c1-r4c1 bulb ["r1c1"]
arrow-8: arrow r4c4-r4c3-r4c2 bulb ["r4c5"]
arrow-9: arrow r6c6-r6c7 bulb ["r6c5"]
arrow-10: arrow r2c4-r3c4 bulb ["r1c4"]
arrow-11: arrow r1c6-r1c7 bulb ["r1c5"]
```

```drawing
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[6.5,1.895],[6.5,6.5],[7.5,6.5]],"color":"#2ecbffff","thickness":7.68,"headLength":0.35,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,1],"width":1.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#aaaf","thickness":1.28,"angle":0}}
```

Normal Sudoku Rules Apply

Numbers along an arrow sum to the number in that arrows bulb. Two digit bulbs are read left to right.

Each arrow also has a separate rule: These rules do not affect the digit in the bulb of the arrow.]

Digits along along the red orange lines must alternate parity (odd/even).

Digits along the purple renban lines must be consecutive digits in any order.

Digits along blue lines must sum to the same number in each 3x3 region the line enters.
