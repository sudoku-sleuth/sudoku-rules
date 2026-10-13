---
format: open-rules
title: Domino Wheels
setter: Jobo
source: https://sudokupad.app/7qbo7096py
case: https://sudoku-sleuth.com/cases/domino-wheels
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Our reading of these rules doesn't match the published answer yet; we're checking it.
---

```rules
sudoku 9x9
kropki-1: kropki r4c1-r4c2 colour "white"
kropki-2: kropki r6c8-r6c9 colour "white"
kropki-3: kropki r8c2-r9c2 colour "white"
kropki-4: kropki r1c8-r2c8 colour "white"
pair-1: pair r5c4-r6c4 sum 10
pair-2: pair r3c6-r4c6 sum 10
pair-3: pair r2c8-r2c9 sum 10
pair-4: pair r2c4-r2c5 sum 10
pair-5: pair r5c8-r6c8 sum 10
pair-6: pair r7c6-r8c6 sum 10
pair-7: pair r8c2-r8c3 sum 10
pair-8: pair r4c2-r5c2 sum 10
pair-9: pair r6c4-r7c4 sum 5
pair-10: pair r4c6-r5c6 sum 5
pair-11: pair r2c7-r2c8 sum 5
pair-12: pair r2c3-r2c4 sum 5
pair-13: pair r6c8-r7c8 sum 5
pair-14: pair r8c6-r9c6 sum 5
pair-15: pair r8c1-r8c2 sum 5
pair-16: pair r3c2-r4c2 sum 5
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,3.5],"width":1.52,"height":1.52,"rounded":true,"stroke":"#cccf","thickness":7.68,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,7.5],"width":1.52,"height":1.52,"rounded":true,"stroke":"#cccf","thickness":7.68,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,1.5],"width":1.52,"height":1.52,"rounded":true,"stroke":"#cccf","thickness":7.68,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,5.5],"width":1.52,"height":1.52,"rounded":true,"stroke":"#cccf","thickness":7.68,"angle":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,3.5],"width":1.52,"height":1.52,"rounded":true,"stroke":"#cccf","thickness":7.68,"angle":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,7.5],"width":1.52,"height":1.52,"rounded":true,"stroke":"#cccf","thickness":7.68,"angle":0}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,5.5],"width":1.52,"height":1.52,"rounded":true,"stroke":"#cccf","thickness":7.68,"angle":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,1.5],"width":1.52,"height":1.52,"rounded":true,"stroke":"#cccf","thickness":7.68,"angle":0}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,5.5],"width":0.26,"height":0.26,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,5.5],"width":0.26,"height":0.26,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,3.5],"width":0.26,"height":0.26,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,3.5],"width":0.26,"height":0.26,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,3],"width":0.26,"height":0.26,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,4],"width":0.26,"height":0.26,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,7],"width":0.26,"height":0.26,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,8],"width":0.26,"height":0.26,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,7.5],"width":0.26,"height":0.26,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,7.5],"width":0.26,"height":0.26,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,5.5],"width":0.26,"height":0.26,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,1.5],"width":0.26,"height":0.26,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,1.5],"width":0.26,"height":0.26,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,1],"width":0.26,"height":0.26,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,2],"width":0.26,"height":0.26,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,5.5],"width":0.26,"height":0.26,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,8],"width":0.26,"height":0.26,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
```

Normal sudoku rules apply.

Digits separated by a V must sum to 5. Digits separated by an X must sum to 10.
Digits separated by a white dot must be consecutive.
Not all dots and XV are given.

Clues on a wheel have to be placed in the same circular order on the cell borders inside the wheel. Wheels have to be rotated 90° clockwise N times from the current position to place clues in the correct position, where N is the digit in the cell inside the wheel.
