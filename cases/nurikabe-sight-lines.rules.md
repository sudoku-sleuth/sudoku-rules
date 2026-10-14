---
format: open-rules
title: Nurikabe Sight Lines
setter: Blobz
source: https://sudokupad.app/blobz/nurikabe-sight-lines
case: https://sudoku-sleuth.com/cases/nurikabe-sight-lines
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r1c5=4 r1c9=2 r2c2=1 r3c4=3 r4c2=3 r4c9=4 r6c6=4 r6c9=5 r8c1=2 r8c7=8 r9c5=5
exported: 9c265505e6d735d52a9787a9a1610e43
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,1.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,8.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,5.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,8.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,0.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,4.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,4.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,8.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,1.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,3.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"cage","cells":[79]}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"cage","cells":[0]}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"cage","cells":[46]}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"cage","cells":[40]}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"cage","cells":[14]}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"cage","cells":[17]}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"cage","cells":[42]}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"cage","cells":[64]}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"cage","cells":[16]}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"cage","cells":[43]}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"cage","cells":[45]}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"cage","cells":[80]}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"cage","cells":[62]}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"cage","cells":[68]}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"cage","cells":[20]}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"cage","cells":[30]}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"cage","cells":[18]}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"cage","cells":[74]}}
```

Normal sudoku rules apply.

Divide the grid into a number of islands -- orthogonally connected groups of cells. Every island contains a single circled cell; the digit in the circle indicates the number of cells making up the island.

The islands are surrounded by a waterway -- a single orthogonally connected group of cells. All caged cells are waterway cells; The digit in a caged cell indicates how many waterway cells are seen orthogonally from that position, including itself (island cells block vision). The waterway cannot form any 2x2 areas.
