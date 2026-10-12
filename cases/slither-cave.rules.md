---
format: open-rules
title: Slither Cave
setter: Blobz
source: https://sudokupad.app/6ls5y3o6jf
case: https://sudoku-sleuth.com/cases/slither-cave
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r7c8=4 r9c3=7
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"cage","cells":[0],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"cage","cells":[15],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"cage","cells":[43],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"cage","cells":[57],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[74],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,0.5],"width":0.6,"height":0.6,"rounded":false,"fill":"#FFFFFF80","stroke":"#000000","thickness":1,"textColor":"#000000","angle":45}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,5.5],"width":0.6,"height":0.6,"rounded":false,"fill":"#FFFFFF80","stroke":"#000000","thickness":1,"textColor":"#000000","angle":45}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,0.5],"width":0.6,"height":0.6,"rounded":false,"fill":"#FFFFFF80","stroke":"#000000","thickness":1,"textColor":"#000000","angle":45}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,8.5],"width":0.6,"height":0.6,"rounded":false,"fill":"#FFFFFF80","stroke":"#000000","thickness":1,"textColor":"#000000","angle":45}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,7.5],"width":0.6,"height":0.6,"rounded":false,"fill":"#FFFFFF80","stroke":"#000000","thickness":1,"textColor":"#000000","angle":45}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,0.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF80","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,1.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF80","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,0.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF80","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,4.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF80","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,5.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF80","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,5.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF80","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,2.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF80","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,4.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF80","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,7.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF80","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,8.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF80","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,1.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF80","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,4.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF80","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,7.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF80","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,5.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF80","stroke":"#000000","thickness":1,"textColor":"#000000"}}
```

Normal sudoku rules apply.

Shade some cells (the walls) and leave some cells unshaded (the cave) such that:

(a) the cave is a single orthogonally connected area containing all caged cells.
(b) digits within cages indicate the number of cave cells (including itself) that are seen orthogonally from that position (walls block vision).
(c) each wall segment is an orthogonally connected group of cells where at least one cell touches the edge of the grid.
(d) each wall segment includes exactly one diamond, and contains the digits 1-N, where N is placed in the diamond.
(e) circles are wall cells where the digit indicates the number of orthgonally adjacent cave cells.
