---
format: open-rules
title: Domino Trails
setter: Blobz
source: https://sudokupad.app/3dv7bjul4j
case: https://sudoku-sleuth.com/cases/domino-trails
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"cage","cells":[0],"label":"8","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"cage","cells":[27],"label":"9","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"cage","cells":[45],"label":"10","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"cage","cells":[73],"label":"12","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[55],"label":"7","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[11],"label":"11","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"cage","cells":[29],"label":"5","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"cage","cells":[38],"label":"10","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"cage","cells":[66],"label":"10","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"cage","cells":[58],"label":"9","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"cage","cells":[22],"label":"12","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"cage","cells":[4],"label":"12","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"cage","cells":[23],"label":"9","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"cage","cells":[41],"label":"7","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"cage","cells":[68],"label":"3","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"cage","cells":[42],"label":"11","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"cage","cells":[6],"label":"6","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"cage","cells":[7],"label":"5","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"cage","cells":[17],"label":"12","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"cage","cells":[35],"label":"7","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"cage","cells":[62],"label":"9","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"cage","cells":[80],"label":"16","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"cage","cells":[79],"label":"6","color":"#000000","labelColor":"#000000"}}
```

Normal sudoku rules apply.

Shade some cells (the hedges) such that the unshaded cells (the trails) form an orthogonally connected area (with no loops) where no 2x2 group of cells is either fully shaded or unshaded. Different parts of the trail may touch diagonally (checkerboard patterns ARE allowed). Note that hedges do not need to connect to the edge of the grid.

The trails are completely tiled with a set of non-overlapping dominoes.

Caged cells are always trail cells and indicate two things:
(a) the digit placed in the cage shows how many trail cells (including itself) can be seen orthogonally from that position (hedges obstruct the view).
(b) the small clue in the corner of the cage shows the total sum of the corresponding domino.

Not all dominoes are marked with a cage.
