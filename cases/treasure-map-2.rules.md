---
format: open-rules
title: Treasure Map
setter: Blobz
source: https://sudokupad.app/blobz/treasure-map
case: https://sudoku-sleuth.com/cases/treasure-map-2
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r5c7=8 r8c3=3 r9c1=2 r9c6=1
---

```rules
sudoku 9x9
kropki r8c8-r8c9 colour "white"
pair-1: pair r2c2-r2c3 sum 10
pair-2: pair r1c6-r1c7 sum 10
pair-3: pair r4c1-r5c1 sum 10
pair-4: pair r6c7-r7c7 sum 10
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,7.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,6.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,5.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,0.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,2.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,5.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,5.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,3.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,0.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"cage","cells":[61]}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"cage","cells":[69]}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"cage","cells":[67]}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"cage","cells":[47]}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"cage","cells":[16]}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"cage","cells":[55]}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"cage","cells":[40]}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"cage","cells":[30]}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"cage","cells":[21]}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"cage","cells":[74]}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"cage","cells":[34]}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"cage","cells":[14]}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"cage","cells":[13]}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"cage","cells":[4]}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"cage","cells":[2]}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"cage","cells":[18]}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"cage","cells":[28]}}
```

Normal sudoku rules apply.

Divide the grid into a number of islands -- orthogonally connected groups of cells. Every island contains a single circled cell; the digit in the circle indicates the number of cells making up the island.

The islands are surrounded by a waterway -- a single orthogonally connected group of cells. All caged cells are waterway cells; The digit in a caged cell indicates how many waterway cells are seen orthogonally from that position, including itself (island cells block vision). The waterway cannot form any 2x2 areas.

The X's separate two island digits that sum to 10; The white dot separates two island digits that are consecutive.
