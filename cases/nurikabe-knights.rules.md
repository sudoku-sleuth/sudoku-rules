---
format: open-rules
title: Nurikabe Knights
setter: Blobz
source: https://sudokupad.app/blobz/nurikabe-knights
case: https://sudoku-sleuth.com/cases/nurikabe-knights
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: 1.2..........1.....................5.4..6.3..9.......1...............1.38........
exported: 4dfb5a890551e2d816ba075e4fb77d68
---

```rules
sudoku 9x9
anti-knight
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,0.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,0.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,1.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,2.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,4.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,8.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,6.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,8.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,8.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,6.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,4.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"cage","cells":[64]}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"cage","cells":[65]}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"cage","cells":[47]}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"cage","cells":[48]}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"cage","cells":[9]}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"cage","cells":[11]}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"cage","cells":[24]}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"cage","cells":[7]}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"cage","cells":[8]}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"cage","cells":[44]}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"cage","cells":[62]}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"cage","cells":[61]}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"cage","cells":[41]}}
```

Normal sudoku rules apply.

Divide the grid into a number of islands -- orthogonally connected groups of cells. Every island contains a single circled cell; the digit in the circle indicates the number of cells making up the island. 

The islands are surrounded by a waterway -- a single orthogonally connected group of cells. All caged cells are waterway cells; the digit in a caged cell indicates how many waterway cells are seen orthogonally from that position, including itself (island cells block vision). The waterway cannot form any 2x2 areas.

Cells a chess knight's move apart cannot contain the same digit.
