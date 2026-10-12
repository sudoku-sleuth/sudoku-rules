---
format: open-rules
title: Shelob's Lair
setter: Blobz
source: https://sudokupad.app/blobz/shelobs-lair
case: https://sudoku-sleuth.com/cases/shelob-s-lair
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[8.65,6.5],[7.35,6.5]],"color":"#0000004c","thickness":3,"headLength":0.25,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"cage","cells":[0],"label":"3"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"cage","cells":[11],"label":"13"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[13],"label":"9"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[22],"label":"11"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"cage","cells":[15],"label":"5"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"cage","cells":[26],"label":"14"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"cage","cells":[28],"label":"7"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"cage","cells":[29],"label":"5"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"cage","cells":[46],"label":"7"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"cage","cells":[41],"label":"9"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"cage","cells":[49],"label":"6"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"cage","cells":[53],"label":"15"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"cage","cells":[33],"label":"7"}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"cage","cells":[35],"label":"10"}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"cage","cells":[54],"label":"12"}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"cage","cells":[72],"label":"11"}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"cage","cells":[73],"label":"10"}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"cage","cells":[66],"label":"8"}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"cage","cells":[67],"label":"12"}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"cage","cells":[69],"label":"17"}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"cage","cells":[80],"label":"6"}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"cage","cells":[61],"label":"9"}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,5],"width":0,"height":1.206,"rounded":true,"thickness":0,"angle":0,"text":"🕸️","textColor":"#000000","fontSize":46,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,7.5],"width":0,"height":1.206,"rounded":true,"thickness":0,"angle":0,"text":"🕸️","textColor":"#000000","fontSize":46,"textStroke":"#ffffff","textStrokeWidth":1}}
```

Presently they were under the shadow, and there in the midst of it they saw the opening of a cave. 'This is the way in,' said Gollum softly. 'This is the entrance to the tunnel.'

Normal sudoku rules apply.

Shade some cells (the walls) such that the unshaded cells (the tunnels) form an orthogonally connected area (with no loops) where no 2x2 group of cells is either fully shaded or unshaded. Different parts of the tunnel may touch diagonally (checkerboard patterns ARE allowed). Note that walls do not need to connect to the edge of the grid.

The tunnels are completely tiled with non-overlapping dominoes. The first domino at the entrance to Shelob's Lair is shown.

Caged cells are always tunnel cells and indicate two things:
(a) the digit placed in the cage shows how many tunnel cells (including itself) can be seen orthogonally from that position (walls obstruct the view).
(b) the small clue in the corner of the cage shows the total sum of the corresponding domino.

ALL dominoes include a cage. 

Digits bound together by a cobweb must be consecutive.
