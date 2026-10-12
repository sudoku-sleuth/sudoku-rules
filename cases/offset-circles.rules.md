---
format: open-rules
title: Offset Circles
setter: Blobz
source: https://sudokupad.app/blobz/offset-circles
case: https://sudoku-sleuth.com/cases/offset-circles
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
kropki-1: kropki r1c5-r1c6 colour "white"
kropki-2: kropki r4c9-r5c9 colour "white"
kropki-3: kropki r9c7-r9c8 colour "white"
kropki-4: kropki r6c1-r7c1 colour "white"
quadruple-1: quadruple r2c2-r2c3-r3c2-r3c3 digits [1]
quadruple-2: quadruple r2c5-r2c6-r3c5-r3c6 digits [2]
quadruple-3: quadruple r2c8-r2c9-r3c8-r3c9 digits [3]
quadruple-4: quadruple r5c2-r5c3-r6c2-r6c3 digits [4]
quadruple-5: quadruple r5c5-r5c6-r6c5-r6c6 digits [5]
quadruple-6: quadruple r5c8-r5c9-r6c8-r6c9 digits [6]
quadruple-7: quadruple r8c2-r8c3-r9c2-r9c3 digits [7]
quadruple-8: quadruple r8c5-r8c6-r9c5-r9c6 digits [8]
quadruple-9: quadruple r8c8-r8c9-r9c8-r9c9 digits [9]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,0.5],"width":0.88,"height":0.88,"rounded":true,"fill":"#FFFFFF","stroke":"#0029f76f","thickness":5,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,3.5],"width":0.88,"height":0.88,"rounded":true,"fill":"#FFFFFF","stroke":"#0029f76f","thickness":5,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,6.5],"width":0.88,"height":0.88,"rounded":true,"fill":"#FFFFFF","stroke":"#0029f76f","thickness":5,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,0.5],"width":0.88,"height":0.88,"rounded":true,"fill":"#FFFFFF","stroke":"#0029f76f","thickness":5,"angle":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,3.5],"width":0.88,"height":0.88,"rounded":true,"fill":"#FFFFFF","stroke":"#0029f76f","thickness":5,"angle":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,6.5],"width":0.88,"height":0.88,"rounded":true,"fill":"#FFFFFF","stroke":"#0029f76f","thickness":5,"angle":0}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,3.5],"width":0.88,"height":0.88,"rounded":true,"fill":"#FFFFFF","stroke":"#0029f76f","thickness":5,"angle":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,6.5],"width":0.88,"height":0.88,"rounded":true,"fill":"#FFFFFF","stroke":"#0029f76f","thickness":5,"angle":0}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,1.5],"width":0.88,"height":0.88,"rounded":true,"fill":"#FFFFFF","stroke":"#0029f76f","thickness":5,"angle":0}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,2],"width":1.16,"height":1.16,"rounded":true,"stroke":"#f77bfb72","thickness":10,"angle":0}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,6],"width":1.16,"height":1.16,"rounded":true,"stroke":"#f77bfb72","thickness":10,"angle":0}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,3],"width":1.16,"height":1.16,"rounded":true,"stroke":"#f77bfb72","thickness":10,"angle":0}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,6],"width":1.16,"height":1.16,"rounded":true,"stroke":"#f77bfb72","thickness":10,"angle":0}}
```

Normal sudoku rules apply.

Digits in black circles must appear in one of the four cells touching that circle. 

Digits in blue circles indicate how many blue circles contain that digit. 

Digits along pink circles form a non-repeating consecutive sequence.

Digits separated by a white dot are consecutive.
