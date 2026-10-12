---
format: open-rules
title: Nurikabe Archipelago
setter: Blobz
source: https://sudokupad.app/blobz/nurikabe-archipelago
case: https://sudoku-sleuth.com/cases/nurikabe-archipelago
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r1c5=3 r2c3=2 r3c1=1 r6c1=8 r6c5=5 r6c9=7 r7c3=3 r8c8=4 r9c2=2
---

```rules
sudoku 9x9
negative relations [{"op":"difference","value":1}] except []
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,4.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,2.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,0.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,8.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,4.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,0.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,2.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,1.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,7.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"cage","cells":[1]}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"cage","cells":[3]}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"cage","cells":[15]}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"cage","cells":[23]}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"cage","cells":[41]}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"cage","cells":[54]}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"cage","cells":[68]}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"cage","cells":[61]}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"cage","cells":[28]}}
```

Normal sudoku rules apply.

Divide the grid into a number of islands -- orthogonally connected groups of cells. Every island contains a single circled cell; the digit in the circle indicates the number of cells making up the island. 

The islands are surrounded by a waterway -- a single orthogonally connected group of cells. All caged cells are waterway cells; the digit in a caged cell indicates how many waterway cells are seen orthogonally from that position, including itself (island cells block vision). The waterway cannot form any 2x2 areas.

Cells that are orthogonally adjacent cannot contain consecutive digits.
