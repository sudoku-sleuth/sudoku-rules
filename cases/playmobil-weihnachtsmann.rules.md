---
format: open-rules
title: Playmobil Weihnachtsmann
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/playmobil-weihnachtsmann
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r1c8=6 r2c3=4 r5c5=6 r6c3=6 r7c9=6 r8c2=6
exported: cedc137488496e416fff84c115a76aa6
---

```rules
sudoku 9x9
cage-1: cage r1c4-r1c5-r1c6-r2c3-r2c4-r2c5-r2c6-r2c7 connected true
cage-2: cage r1c7-r1c8-r1c9-r2c8-r2c9-r3c9 total 34 connected true
cage-3: cage r1c1-r1c2-r1c3-r2c1-r2c2-r3c1 total 25 connected true
cage-4: cage r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8 total 36 connected true
cage-5: cage r4c8-r4c9-r5c8-r5c9-r6c8-r6c9-r7c9 total 36 connected true
cage-6: cage r4c1-r4c2-r5c1-r5c2-r6c1-r6c2-r7c1 total 38 connected true
cage-7: cage r5c3-r5c7-r6c3-r6c4-r6c5-r6c6-r6c7 total 34 connected true
cage-8: cage r7c4-r7c5-r7c6-r8c4-r8c5-r8c6-r9c5 total 36 connected true
whispers-1: whispers r2c3-r1c4-r1c5-r1c6-r2c7-r2c6-r2c5-r2c4 gap 5
whispers-2: whispers r9c1-r8c1-r7c2-r7c3-r8c3-r9c3-r9c4 gap 5
whispers-3: whispers r9c6-r9c7-r9c8-r9c9-r8c9 gap 5
whispers-4: whispers r7c8-r7c7-r8c7 gap 5
```

```drawing
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,4],"width":0.3,"height":0.3,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,3.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,3],"width":0.3,"height":0.3,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,6.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,3],"width":0.3,"height":0.3,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,2],"width":0.25,"height":0.9,"rounded":false,"fill":"#9E5410","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,7],"width":0.25,"height":0.9,"rounded":false,"fill":"#9E5410","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,3.5],"width":1,"height":0.25,"rounded":false,"fill":"#757575","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,5.5],"width":1,"height":0.25,"rounded":false,"fill":"#757575","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,4.5],"width":1,"height":0.35,"rounded":false,"fill":"#757575","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,3.5],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,5.5],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
```

Normal Sudoku rules apply. German Whispers Lines- Numbers on lines are at least 5 apart from their neighbors on the line. Numbers in cages sum to the number in the top left corner of the cage. Numbers cannot repeat on lines or in cages.
