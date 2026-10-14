---
fog:
  initiallyLit:
    - r2c3
    - r3c6
    - r4c4
format: open-rules
title: Hide and Speak - Grid A
setter: Marty Sears
source: https://sudokupad.app/9zbuhjq762
case: https://sudoku-sleuth.com/cases/hide-and-speak-grid-a
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Our reading of these rules doesn't match the published answer yet; we're checking it.
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
exported: a6b9e62be748633ee2d46dc23cd70e71
---

```rules
unique-1: unique r1c1-r1c2-r1c3-r1c4-r1c5-r1c6 stated true
unique-2: unique r2c1-r2c2-r2c3-r2c4-r2c5-r2c6 stated true
unique-3: unique r3c1-r3c2-r3c3-r3c4-r3c5-r3c6 stated true
unique-4: unique r4c1-r4c2-r4c3-r4c4-r4c5-r4c6 stated true
unique-5: unique r5c1-r5c2-r5c3-r5c4-r5c5-r5c6 stated true
unique-6: unique r6c1-r6c2-r6c3-r6c4-r6c5-r6c6 stated true
unique-7: unique r1c1-r2c1-r3c1-r4c1-r5c1-r6c1 stated true
unique-8: unique r1c2-r2c2-r3c2-r4c2-r5c2-r6c2 stated true
unique-9: unique r1c3-r2c3-r3c3-r4c3-r5c3-r6c3 stated true
unique-10: unique r1c4-r2c4-r3c4-r4c4-r5c4-r6c4 stated true
unique-11: unique r1c5-r2c5-r3c5-r4c5-r5c5-r6c5 stated true
unique-12: unique r1c6-r2c6-r3c6-r4c6-r5c6-r6c6 stated true
unique-13: unique r1c1-r1c2-r1c3-r2c1-r2c2-r2c3 stated true
unique-14: unique r1c4-r1c5-r1c6-r2c4-r2c5-r2c6 stated true
unique-15: unique r3c1-r3c2-r3c3-r4c1-r4c2-r4c3 stated true
unique-16: unique r3c4-r3c5-r3c6-r4c4-r4c5-r4c6 stated true
unique-17: unique r5c1-r5c2-r5c3-r6c1-r6c2-r6c3 stated true
unique-18: unique r5c4-r5c5-r5c6-r6c4-r6c5-r6c6 stated true
renban-1: renban r1c4-r2c5-r3c5
renban-2: renban r1c3-r2c3-r3c2
region-sum r4c4-r3c3 segments [["r4c4"],["r3c3"]]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,2.5],"width":0.4,"height":0.4,"rounded":true,"fill":"#d4b2fdd8","thickness":0,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.333,0.5],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"1","textColor":"#868686ff","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,-0.333],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"1","textColor":"#868686ff","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.333,1.5],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"2","textColor":"#868686ff","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,-0.333],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"2","textColor":"#868686ff","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.333,2.5],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"3","textColor":"#868686ff","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,-0.333],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"3","textColor":"#868686ff","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.333,3.5],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"4","textColor":"#868686ff","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,-0.333],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"4","textColor":"#868686ff","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.333,4.5],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"5","textColor":"#868686ff","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,-0.333],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"5","textColor":"#868686ff","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.333,5.5],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"6","textColor":"#868686ff","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,-0.333],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"6","textColor":"#868686ff","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[2.5,5.5],[4.5,5.5],[5.5,4.5]],"color":"#ffe538ff","thickness":10,"rounded":true}}
```

- This puzzle is designed to be played as a pair. Both players can only see one grid, and can communicate openly about what they can see. 
- Fill both grids with the digits 1-6, so that digits don't repeat in a row, column or box. Both grids have a different layout of clues, but have the same solution (eg: if there's a 5 in r1c1 in grid A, r1c1 in grid B will be a 5 too.)
- Use of the colouring tool is allowed, but use of the line drawing tool is discouraged.
- FOG: Both grids are covered in fog. Fog will clear as correct digits are entered. No guessing is necessary.
- REGION SUM LINES: Box borders divide a blue line into segments that have the same total.
- RENBANS: Digits along a bright pink line form a consecutive non-repeating sequence that can be arranged in any order along the line.
- ZIPPER LINES: Digits the same distance from the central spot on a lavender line sum to the digit on that central spot.
- EQUALINES: Digits on both yellow lines have the same total.
