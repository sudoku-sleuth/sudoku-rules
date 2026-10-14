---
fog:
  initiallyLit:
    - r1c1
    - r1c2
    - r1c3
    - r1c4
    - r1c5
    - r1c6
    - r1c7
    - r1c8
    - r1c9
    - r2c1
    - r2c2
    - r2c3
    - r2c4
    - r2c5
    - r2c6
    - r2c7
    - r2c8
    - r2c9
    - r3c1
    - r3c2
    - r3c3
    - r3c7
    - r3c8
    - r3c9
    - r4c1
    - r4c2
    - r4c3
    - r4c7
    - r4c8
    - r4c9
    - r5c1
    - r5c2
    - r5c3
    - r5c7
    - r5c8
    - r5c9
    - r6c1
    - r6c2
    - r6c3
    - r6c7
    - r6c8
    - r6c9
    - r7c1
    - r7c2
    - r7c3
    - r7c4
    - r7c5
    - r7c6
    - r7c7
    - r7c8
    - r7c9
    - r8c1
    - r8c2
    - r8c3
    - r8c4
    - r8c5
    - r8c6
    - r8c7
    - r8c8
    - r8c9
format: open-rules
title: Overlapping 6x6
setter: Sir Moose
source: https://sudokupad.app/y3sy3bhn8s
case: https://sudoku-sleuth.com/cases/overlapping-6x6
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Our reading does not yet cover all the puzzle's stated conditions.
board:
  rows: 8
  cols: 9
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
    - - r7c4
      - r7c5
      - r7c6
      - r8c4
      - r8c5
      - r8c6
    - - r3c7
      - r3c8
      - r3c9
      - r4c7
      - r4c8
      - r4c9
    - - r5c7
      - r5c8
      - r5c9
      - r6c7
      - r6c8
      - r6c9
    - - r7c7
      - r7c8
      - r7c9
      - r8c7
      - r8c8
      - r8c9
exported: ad5c57a39bb9878b1e8ce0626df1402f
---

```rules

```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,0.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,1.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,2.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,2.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,1.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,0.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,7.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,8.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,8.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,7.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,6.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,6.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[6.101,8.5],[5.5,8.5],[5.5,7.5]],"color":"#aaaf","thickness":3.2,"headLength":0.35,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[4.5,7.101],[4.5,6.5],[5.5,6.5]],"color":"#aaaf","thickness":3.2,"headLength":0.35,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[4.101,7.5],[3.5,7.5],[3.5,6.5]],"color":"#aaaf","thickness":3.2,"headLength":0.35,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[7.218,4.782],[6.5,5.5],[7.5,6.5]],"color":"#aaaf","thickness":3.2,"headLength":0.35,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,8.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#aaaf","thickness":1.28,"angle":0}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,7.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#aaaf","thickness":1.28,"angle":0}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,4.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#aaaf","thickness":1.28,"angle":0}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,2.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,2],"width":1.02,"height":1.02,"rounded":false,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,1],"width":1.02,"height":1.02,"rounded":false,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,7],"width":1.02,"height":1.02,"rounded":false,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,1],"width":0.33,"height":0.33,"rounded":true,"fill":"#000000","thickness":0,"text":"","textColor":"#FFFFFF"}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,2],"width":0.33,"height":0.33,"rounded":true,"fill":"#000000","thickness":0,"text":"","textColor":"#FFFFFF"}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,0.5],"width":0.33,"height":0.33,"rounded":true,"fill":"#000000","thickness":0,"text":"","textColor":"#FFFFFF"}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,1.5],"width":0.33,"height":0.33,"rounded":true,"fill":"#000000","thickness":0,"text":"","textColor":"#FFFFFF"}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,2],"width":0.33,"height":0.33,"rounded":true,"fill":"#000000","thickness":0,"text":"","textColor":"#FFFFFF"}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,5.5],"width":0.33,"height":0.33,"rounded":true,"fill":"#000000","thickness":0,"text":"","textColor":"#FFFFFF"}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,5.5],"width":0.33,"height":0.33,"rounded":true,"fill":"#000000","thickness":0,"text":"","textColor":"#FFFFFF"}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,3.5],"width":0.34,"height":0.34,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"text":"","textColor":"#000000"}}
```

The grid is made up of 2 overlapping 6x6 sudokus. Place the digits 1-6 once each in row, column, and 2x3 region of each 6x6 sudoku.  Because of the overlap, some rows and columns of the entire puzzle will repeat.

Digits along an arrow sum the the digit in that arrows circle. 

Digits separated by a black dot are in a 1:2 ratio, and those separated by a white dot are consecutive.

The grid is partially covered by fog.  Placing correct digits will clear the fog.
