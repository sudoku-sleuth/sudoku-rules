---
format: open-rules
title: Quartered Sandwich
setter: Timotab
source: https://sudokupad.app/slicedsudoku/quarteredsandwich
case: https://sudoku-sleuth.com/cases/quartered-sandwich
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
  givens: r1c6=3
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
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.333,0.5],"width":0,"height":0.66,"rounded":true,"thickness":0,"angle":0,"text":"15","textColor":"#b60f","fontSize":25,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.333,1.5],"width":0,"height":0.66,"rounded":true,"thickness":0,"angle":0,"text":"9","textColor":"#b60f","fontSize":25,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.333,2.5],"width":0,"height":0.66,"rounded":true,"thickness":0,"angle":0,"text":"22","textColor":"#b60f","fontSize":25,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.333,3.5],"width":0,"height":0.66,"rounded":true,"thickness":0,"angle":0,"text":"18","textColor":"#b60f","fontSize":25,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.333,4.5],"width":0,"height":0.66,"rounded":true,"thickness":0,"angle":0,"text":"6","textColor":"#b60f","fontSize":25,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.333,5.5],"width":0,"height":0.66,"rounded":true,"thickness":0,"angle":0,"text":"10","textColor":"#b60f","fontSize":25,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,-0.333],"width":0,"height":0.66,"rounded":true,"thickness":0,"angle":0,"text":"8","textColor":"#b60f","fontSize":25,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,-0.333],"width":0,"height":0.66,"rounded":true,"thickness":0,"angle":0,"text":"11","textColor":"#b60f","fontSize":25,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,-0.333],"width":0,"height":0.66,"rounded":true,"thickness":0,"angle":0,"text":"26","textColor":"#b60f","fontSize":25,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,-0.333],"width":0,"height":0.66,"rounded":true,"thickness":0,"angle":0,"text":"22","textColor":"#b60f","fontSize":25,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,-0.333],"width":0,"height":0.66,"rounded":true,"thickness":0,"angle":0,"text":"9","textColor":"#b60f","fontSize":25,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,-0.333],"width":0,"height":0.66,"rounded":true,"thickness":0,"angle":0,"text":"9","textColor":"#b60f","fontSize":25,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,0.5],"width":0.62,"height":0.62,"rounded":false,"fill":"#FFFFFF","stroke":"#888f","thickness":1.28,"angle":45}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,5.5],"width":0.62,"height":0.62,"rounded":false,"fill":"#FFFFFF","stroke":"#888f","thickness":1.28,"angle":45}}
```

• Normal Quattroquadri rules apply. Place the digits 1-9 into every box, so they do not repeat within a box, row, or column.
• Sandwich Variant: The numbers outside the grid give the sum of the digits between the highest and lowest digits in that row or column.
• Extreme Crusts: Cells containing diamonds can only contain a 1 or a 9.
