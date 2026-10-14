---
format: open-rules
title: Whispering Nurikabe
setter: Blobz
source: https://sudokupad.app/blobz/whispering-nurikabe
case: https://sudoku-sleuth.com/cases/whispering-nurikabe
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: 3......8...............6.3..7.....................2.5..8.....6............3..8..5
exported: a793e00d283ab0fcef9331813417dde5
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,7.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,2.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,1.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,1.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,0.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,5.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,7.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,5.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"cage","cells":[62]}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"cage","cells":[42]}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"cage","cells":[15]}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"cage","cells":[4]}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"cage","cells":[21]}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"cage","cells":[38]}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"cage","cells":[49]}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"cage","cells":[59]}}
```

Normal sudoku rules apply.

Divide the grid into a number of islands -- orthogonally connected groups of cells. Every island contains a single circled cell; the digit in the circle indicates the number of cells making up the island. 

The islands are surrounded by a waterway -- a single orthogonally connected group of cells. All caged cells are waterway cells; the digit in a caged cell indicates how many waterway cells are seen orthogonally from that position, including itself (island cells block vision). The waterway cannot form any 2x2 areas.

On islands, orthogonally adjacent digits differ by at least 5.

The given 8's are island cells; the given 5's are waterway cells.
