---
fog:
  initiallyLit:
    - r1c4
    - r1c5
    - r1c6
    - r2c4
    - r2c5
    - r2c6
    - r3c4
    - r3c5
    - r3c6
format: open-rules
title: Foggy Renban Arrows
setter: Sir Moose
source: https://sudokupad.app/pk44o26ilw
case: https://sudoku-sleuth.com/cases/foggy-renban-arrows
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 81db1f0d2745c6d7160644e4f1f272d6
---

```rules
sudoku 9x9
arrow-1: arrow r3c4-r2c4 bulb ["r3c3"]
arrow-2: arrow r3c6-r2c5-r1c4 bulb ["r4c7"]
arrow-3: arrow r4c6-r4c5-r4c4 bulb ["r5c5"]
arrow-4: arrow r4c1-r4c2 bulb ["r5c1"]
arrow-5: arrow r6c5-r7c6 bulb ["r6c4"]
arrow-6: arrow r8c5-r8c6 bulb ["r9c4"]
arrow-7: arrow r9c7-r8c8 bulb ["r9c6"]
arrow-8: arrow r8c3-r7c4 bulb ["r9c3"]
arrow-9: arrow r7c2-r6c2 bulb ["r8c1"]
arrow-10: arrow r8c9-r9c8-r8c8 bulb ["r9c9"]
arrow-11: arrow r5c3-r5c2-r6c2 bulb ["r6c3"]
arrow-12: arrow r6c7-r5c7-r5c8 bulb ["r7c7"]
arrow-13: arrow r1c9-r2c8-r3c7 bulb ["r1c8"]
arrow-14: arrow r8c9-r9c8-r8c8 bulb ["r9c9"]
arrow-15: arrow r8c5-r8c6 bulb ["r9c4"]
renban-1: renban r3c4-r2c4 stated true
renban-2: renban r3c6-r2c5-r1c4 stated true
renban-3: renban r4c6-r4c5-r4c4 stated true
renban-4: renban r4c1-r4c2 stated true
renban-5: renban r6c5-r7c6 stated true
renban-6: renban r8c5-r8c6 stated true
renban-7: renban r9c7-r8c8 stated true
renban-8: renban r8c3-r7c4 stated true
renban-9: renban r7c2-r6c2 stated true
renban-10: renban r8c9-r9c8-r8c8 stated true
renban-11: renban r5c3-r5c2-r6c2 stated true
renban-12: renban r6c7-r5c7-r5c8 stated true
renban-13: renban r1c9-r2c8-r3c7 stated true
renban-14: renban r8c9-r9c8-r8c8 stated true
renban-15: renban r8c5-r8c6 stated true
```

```drawing
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,8.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#f067f0ff","thickness":1,"angle":0}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,3.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#f067f0ff","thickness":1,"angle":0}}
```

Normal Suduko Rules Apply

Renban Arrows: Digits along each arrow sum to the digit in that arrow's circle.  Additionally digits along each arrow (not including the arrow's cirlce) contain a consecutive sequence of digits with no repeats.  Arrows do not cross, but may end/begin in the same cell.

Some of the grid is covered in fog.  Placing a correct digit will clear the fog around that digit.  No guessing is required.
