---
fog:
  initiallyLit:
    - r2c2
    - r2c3
    - r2c4
    - r2c5
    - r2c6
    - r2c7
    - r2c8
    - r2c9
    - r2c10
    - r3c2
    - r3c3
    - r3c4
    - r3c5
    - r3c6
    - r3c7
    - r3c8
    - r3c9
    - r3c10
    - r4c2
    - r4c3
    - r4c4
    - r4c5
    - r4c6
    - r4c7
    - r4c8
    - r4c9
    - r4c10
    - r5c2
    - r5c3
    - r5c4
    - r5c5
    - r5c6
    - r5c7
    - r5c8
    - r5c9
    - r5c10
    - r6c2
    - r6c3
    - r6c4
    - r6c5
    - r6c6
    - r6c7
    - r6c8
    - r6c9
    - r6c10
    - r7c2
    - r7c3
    - r7c4
    - r7c5
    - r7c6
    - r7c7
    - r7c8
    - r7c9
    - r7c10
    - r8c2
    - r8c3
    - r8c4
    - r8c5
    - r8c6
    - r8c7
    - r8c8
    - r8c9
    - r8c10
    - r9c2
    - r9c3
    - r9c4
    - r9c5
    - r9c6
    - r9c7
    - r9c8
    - r9c9
    - r9c10
    - r10c2
    - r10c3
    - r10c4
    - r10c5
    - r10c6
    - r10c7
    - r10c8
    - r10c9
    - r10c10
  links:
    - trigger:
        - r4c2
        - r6c4
        - r8c3
        - r7c5
        - r9c6
        - r10c8
        - r5c9
        - r3c7
        - r2c10
      lights:
        - r1c1
        - r1c2
        - r1c3
        - r1c4
        - r1c5
        - r1c6
        - r1c7
        - r1c8
        - r1c9
        - r1c10
        - r2c1
        - r3c1
        - r4c1
        - r5c1
        - r6c1
        - r7c1
        - r8c1
        - r9c1
        - r10c1
format: open-rules
title: High - Low 2
setter: The Bard
source: https://sudokupad.app/u53ufmhsto
case: https://sudoku-sleuth.com/cases/high-low-2
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Our reading of the board gives a house more cells than available digits; we need to check its layout.
board:
  rows: 10
  cols: 10
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
exported: c1a54c701e5cb2147d7f48c9809edb9c
---

```rules
unique-1: unique r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9-r1c10 stated true
unique-2: unique r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9-r2c10 stated true
unique-3: unique r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8-r3c9-r3c10 stated true
unique-4: unique r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8-r4c9-r4c10 stated true
unique-5: unique r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9-r5c10 stated true
unique-6: unique r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8-r6c9-r6c10 stated true
unique-7: unique r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8-r7c9-r7c10 stated true
unique-8: unique r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r8c9-r8c10 stated true
unique-9: unique r9c1-r9c2-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8-r9c9-r9c10 stated true
unique-10: unique r10c1-r10c2-r10c3-r10c4-r10c5-r10c6-r10c7-r10c8-r10c9-r10c10 stated true
unique-11: unique r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r9c1-r10c1 stated true
unique-12: unique r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2-r9c2-r10c2 stated true
unique-13: unique r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3-r9c3-r10c3 stated true
unique-14: unique r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4-r8c4-r9c4-r10c4 stated true
unique-15: unique r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5-r10c5 stated true
unique-16: unique r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6-r8c6-r9c6-r10c6 stated true
unique-17: unique r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7-r9c7-r10c7 stated true
unique-18: unique r1c8-r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8-r9c8-r10c8 stated true
unique-19: unique r1c9-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9-r10c9 stated true
unique-20: unique r1c10-r2c10-r3c10-r4c10-r5c10-r6c10-r7c10-r8c10-r9c10-r10c10 stated true
kropki r9c5-r9c6 white
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,2.5],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"14","textColor":"#000000","fontSize":34,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,4.5],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"16","textColor":"#000000","fontSize":34,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,5.5],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"3","textColor":"#000000","fontSize":34,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,7.5],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"8","textColor":"#000000","fontSize":34,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,9.5],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"17","textColor":"#000000","fontSize":34,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,0.5],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"15","textColor":"#000000","fontSize":34,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,0.5],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"8","textColor":"#000000","fontSize":34,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,0.5],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"12","textColor":"#000000","fontSize":34,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,0.5],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"4","textColor":"#000000","fontSize":34,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[1.5,3.5],[1.5,1.5],[3.5,1.5]],"color":"#feb348ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[1.5,7.5],[1.5,9.5],[3.5,9.5]],"color":"#feb348ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[2.5,6.5],[5.5,9.5]],"color":"#feb348ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[3.5,6.5],[6.5,9.5]],"color":"#feb348ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[4.5,6.5],[7.5,9.5]],"color":"#feb348ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[5.5,6.5],[8.5,9.5]],"color":"#feb348ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[7.5,7.5],[9.5,7.5],[9.5,8.5],[8.5,8.5]],"color":"#feb348ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[9.5,5.5],[6.5,5.5],[6.5,6.5]],"color":"#feb348ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[6.5,5.5],[6.5,4.5]],"color":"#feb348ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[9.5,3.5],[8.5,2.5],[9.5,1.5]],"color":"#feb348ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[8.5,1.5],[5.5,4.5]],"color":"#feb348ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[7.5,1.5],[4.5,4.5]],"color":"#feb348ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[6.5,1.5],[3.5,4.5]],"color":"#feb348ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[5.5,1.5],[2.5,4.5]],"color":"#feb348ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[2,4],[10,4],[10,10],[7,10],[7,7],[10,7]],"color":"#000000","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[2,4],[1,4],[1,7],[7,7],[7,1],[10,1],[10,4]],"color":"#000000","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[7,10],[4,10],[4,1],[7,1]],"color":"#000000","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[4,1],[1,1],[1,4]],"color":"#000000","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[4,10],[1,10],[1,7]],"color":"#000000","thickness":3.2,"rounded":true,"layer":"over"}}
```

Normal sudoku rules apply. Place the digits 1-9 in each row, column, and box.
High – Low Lines: Digits on each individual line either are only high digits {5-9} or low digits {1-5}. The 5 can be on either line.
Consecutive Pairs: Digits separated by a white dot must be consecutive.
Sandwich: The numbers outside the grid give the sum of the digits between the 1 and the 9 in that row or column.
Dynamic Fog: Placing correct digits will remove the fog.
