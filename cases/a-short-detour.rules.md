---
format: open-rules
title: A Short Detour
setter: Blobz
source: https://sudokupad.app/blobz/a-short-detour
case: https://sudoku-sleuth.com/cases/a-short-detour
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
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
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,0.5],"width":0.34,"height":0.34,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,5.5],"width":0.34,"height":0.34,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,5.5],"width":0.34,"height":0.34,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,3.5],"width":0.34,"height":0.34,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,4.5],"width":0.34,"height":0.34,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,4.5],"width":0.34,"height":0.34,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,0.5],"width":0.34,"height":0.34,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,1.5],"width":0.34,"height":0.34,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,1.5],"width":0.34,"height":0.34,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,3.5],"width":0.34,"height":0.34,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,4.5],"width":0.34,"height":0.34,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,3.5],"width":0.34,"height":0.34,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,2.5],"width":0.34,"height":0.34,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,1.5],"width":0.34,"height":0.34,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
```

Normal sudoku rules apply: Place the digits 1 to 6 in every row, column, and 2x3 box.

Draw a loop (using orthogonal line segments through the centers of cells) such that it visits every cell marked with a diamond. The loop may cross itself, but can only change direction (turn through 90 degrees) at a diamond. Thus, all "corners" of the loop are on diamonds. However, not all diamonds mark loop corners -- "non-corner" diamonds lay on a line segment _between_ two corners.

The loop has a specific direction, such that each digit in a "corner" diamond equals the number of cells needed to move along the line segment to reach the next corner. Each digit in a "non-corner" diamond must equal the sum of the two corner cells of its line segment.
