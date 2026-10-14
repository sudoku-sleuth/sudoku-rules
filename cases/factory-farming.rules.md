---
format: open-rules
title: Factory Farming
setter: Marty Sears
source: https://sudokupad.app/7vbc7y1pjh
case: https://sudoku-sleuth.com/cases/factory-farming
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
exported: 6ce46527719a164d8f61a4537e96123e
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
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,0.5],"width":0,"height":1.331,"rounded":true,"thickness":0,"angle":19,"text":"🥚","textColor":"#000000","fontSize":50.8,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,2.5],"width":0,"height":1.331,"rounded":true,"thickness":0,"angle":19,"text":"🥚","textColor":"#000000","fontSize":50.8,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,2.5],"width":0,"height":1.331,"rounded":true,"thickness":0,"angle":19,"text":"🥚","textColor":"#000000","fontSize":50.8,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,3.5],"width":0,"height":1.331,"rounded":true,"thickness":0,"angle":19,"text":"🥚","textColor":"#000000","fontSize":50.8,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,4.5],"width":0,"height":1.331,"rounded":true,"thickness":0,"angle":19,"text":"🥚","textColor":"#000000","fontSize":50.8,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,4.5],"width":0,"height":1.331,"rounded":true,"thickness":0,"angle":19,"text":"🥚","textColor":"#000000","fontSize":50.8,"textStroke":"#ffffff","textStrokeWidth":1}}
```

Normal 6 x 6 sudoku rules apply. Each egg contains a different digit, and sits inside a cage of orthogonally connected cells (to be found.) These cages don't overlap.

All the digits in a cage are a factor of its egg's digit, which also indicates the size of the cage.
