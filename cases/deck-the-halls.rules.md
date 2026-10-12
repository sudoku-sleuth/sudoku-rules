---
format: open-rules
title: Deck The Halls
setter: Blobz
source: https://sudokupad.app/blobz/deck-the-halls
case: https://sudoku-sleuth.com/cases/deck-the-halls
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
quadruple-1: quadruple r7c6-r7c7-r8c6-r8c7 digits [1,2,3]
quadruple-2: quadruple r2c1-r2c2-r3c1-r3c2 digits [8]
quadruple-3: quadruple r1c2-r1c3-r2c2-r2c3 digits [3]
quadruple-4: quadruple r2c3-r2c4-r3c3-r3c4 digits [9]
quadruple-5: quadruple r3c8-r3c9-r4c8-r4c9 digits [2]
quadruple-6: quadruple r2c7-r2c8-r3c7-r3c8 digits [8]
quadruple-7: quadruple r1c6-r1c7-r2c6-r2c7 digits [5]
quadruple-8: quadruple r1c4-r1c5-r2c4-r2c5 digits [2]
quadruple-9: quadruple r2c5-r2c6-r3c5-r3c6 digits [6]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,6.5],"width":0.45,"height":0.45,"rounded":true,"fill":"#FFFFFF","stroke":"#fbcf10ff","thickness":5.76,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[8,4],"width":1.52,"height":1.52,"rounded":true,"fill":"#efd0eea1","stroke":"#ff8cdcff","thickness":7.68,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[8,8],"width":1.52,"height":1.52,"rounded":true,"fill":"#efd0eea1","stroke":"#ff8cdcff","thickness":7.68,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[7,2],"width":1.52,"height":1.52,"rounded":true,"fill":"#efd0eea1","stroke":"#ff8cdcff","thickness":7.68,"angle":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[5.5,1.5],[5.5,0.5],[4.5,1.5],[3.5,0.5],[3.5,1.5],[2.5,1.5],[3.5,2.5],[2.5,3.5],[3.5,3.5],[3.5,4.5],[4.5,3.5],[4.5,2.5],[5.5,3.5],[5.5,2.5]],"color":"#14b114a5","thickness":9.6,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[3.5,5.5],[5.5,5.5],[6.5,4.5],[6.5,8.5],[5.5,7.5],[3.5,7.5],[2.5,6.5],[3.5,5.5]],"color":"#fedb4bff","thickness":9.6,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[6.313,1.813],[6.188,1.813],[6.125,1.875],[6.125,2.125],[6.188,2.188],[6.313,2.188]],"color":"#b2b2b2ff","thickness":2.56,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[7.313,3.813],[7.188,3.813],[7.125,3.875],[7.125,4.125],[7.188,4.188],[7.313,4.188]],"color":"#b2b2b2ff","thickness":2.56,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[7.313,7.813],[7.188,7.813],[7.125,7.875],[7.125,8.125],[7.188,8.188],[7.313,8.188]],"color":"#b2b2b2ff","thickness":2.56,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,6],"width":0.72,"height":0.72,"rounded":true,"stroke":"#fbcf10ff","thickness":5.12,"angle":0}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,1],"width":0.72,"height":0.72,"rounded":true,"stroke":"#93e8ffff","thickness":5.12,"angle":0}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,2],"width":0.72,"height":0.72,"rounded":true,"stroke":"#93e8ffff","thickness":5.12,"angle":0}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,3],"width":0.72,"height":0.72,"rounded":true,"stroke":"#93e8ffff","thickness":5.12,"angle":0}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,4],"width":0.72,"height":0.72,"rounded":true,"stroke":"#93e8ffff","thickness":5.12,"angle":0}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,5],"width":0.72,"height":0.72,"rounded":true,"stroke":"#93e8ffff","thickness":5.12,"angle":0}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,6],"width":0.72,"height":0.72,"rounded":true,"stroke":"#93e8ffff","thickness":5.12,"angle":0}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,7],"width":0.72,"height":0.72,"rounded":true,"stroke":"#93e8ffff","thickness":5.12,"angle":0}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,8],"width":0.72,"height":0.72,"rounded":true,"stroke":"#93e8ffff","thickness":5.12,"angle":0}}
```

Normal sudoku rules apply.

Adjacent digits along the holly outline (green) differ by at least 5.

Box borders divide the bell outline (yellow) into segments that sum to the same value.

Digits on baubles (pink) form a consecutive sequence in any order.

Digits in white circles must appear at least once in the surrounding 2x2 cells.
