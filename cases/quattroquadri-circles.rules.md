---
format: open-rules
title: Quattroquadri Circles
setter: EPH
source: https://sudokupad.app/pf7xhwlqgl
case: https://sudoku-sleuth.com/cases/quattroquadri-circles
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
unique-13: unique r1c1-r1c2-r1c3-r2c1-r2c2-r2c3-r3c1-r3c2-r3c3
unique-14: unique r1c4-r1c5-r1c6-r2c4-r2c5-r2c6-r3c4-r3c5-r3c6
unique-15: unique r4c1-r4c2-r4c3-r5c1-r5c2-r5c3-r6c1-r6c2-r6c3
unique-16: unique r4c4-r4c5-r4c6-r5c4-r5c5-r5c6-r6c4-r6c5-r6c6
arrow-1: arrow r1c4-r1c5-r1c6 bulb ["r1c3"]
arrow-2: arrow r6c2-r6c3-r6c4 bulb ["r6c1"]
pair-1: pair r4c5-r4c6 sum 10
pair-2: pair r3c3-r4c3 sum 5
negative relations [{"op":"sum","value":10},{"op":"sum","value":5}] except [["r3c3","r4c3"],["r4c5","r4c6"]]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,1.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,5.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,5.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,3.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,1.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,0.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,0.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,2.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,4.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,4.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
```

Standard quattroquadri rules: Place the all digits 1-9 into each 3x3 region, such that no digit repeats in a row or column.
XV: Digits in cells separated by an X must sum to 10; digits in cells separated by a V must sum to 5.  ALL Xs and Vs are given, so there is a NEGATIVE CONSTRAINT.
Arrows: Digits on a blue/grey arrow must sum to the value in the attached blue/grey bulb.
Counting Circles: Digits in black circles say how many times that digit appears in a black circle in the grid.
