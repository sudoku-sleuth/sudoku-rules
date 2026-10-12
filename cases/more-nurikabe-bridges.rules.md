---
format: open-rules
title: More Nurikabe Bridges
setter: Blobz
source: https://sudokupad.app/blobz/more-nurikabe-bridges
case: https://sudoku-sleuth.com/cases/more-nurikabe-bridges
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r1c4=8 r1c7=9 r2c2=2 r4c3=3 r4c8=2 r6c5=4 r7c1=5 r7c7=6 r8c9=1
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,8.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,6.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,3.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,2.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,0.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,4.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,6.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,1.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[0.5,4.5],[0.5,5.5],[0.5,6.5]],"color":"#88aaffcc","thickness":9.6,"rounded":true,"path":"M 288 32 c 64 -32, 64 32, 128 0","bounds":[0.3556625512061903,4.5,0.6443374487938097,6.5]}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[5.5,4.5],[6.5,4.5],[7.5,4.5]],"color":"#88aaffcc","thickness":9.6,"rounded":true,"path":"M 288 352 c -32 64, 32 64, 0 128","bounds":[5.5,4.35566255120619,7.5,4.64433744879381]}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[4.5,6.5],[5.5,6.5],[6.5,6.5]],"color":"#88aaffcc","thickness":9.6,"rounded":true,"path":"M 416 288 c 32 64, -32 64, 0 128","bounds":[4.5,6.35566255120619,6.5,6.64433744879381]}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[5.5,8.5],[6.5,8.5],[7.5,8.5]],"color":"#88aaffcc","thickness":9.6,"rounded":true,"path":"M 544 352 c -32 64, 32 64, 0 128","bounds":[5.5,8.35566255120619,7.5,8.64433744879381]}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[1.5,1.5],[0.5,2.5],[0.5,3.5]],"color":"#88aaffcc","thickness":9.6,"rounded":true,"path":"M 96 96 c 64 -72, 64 -48, 128 -64","bounds":[0.5,1.5,1.5,3.5]}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[6.5,0.5],[6.5,1.5],[5.5,2.5]],"color":"#88aaffcc","thickness":9.6,"rounded":true,"path":"M 32 416 c 72 -16, 64 0, 128 -64","bounds":[5.5,0.5,6.5,2.5]}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[3.5,2.5],[4.5,2.5],[5.5,3.5]],"color":"#88aaffcc","thickness":9.6,"rounded":true,"path":"M 160 224 c 16 72, 0 64, 64 128","bounds":[3.5,2.5,5.5,3.5]}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[2.5,2.5],[1.5,3.5],[2.5,4.5]],"color":"#88aaffcc","thickness":9.6,"rounded":true,"path":"M 160 160 c 64 -64, 64 -64, 128 0","bounds":[1.75,2.5,2.5,4.5]}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"cage","cells":[78]}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"cage","cells":[59]}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"cage","cells":[64]}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"cage","cells":[37]}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"cage","cells":[18]}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"cage","cells":[0]}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"cage","cells":[12]}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"cage","cells":[21]}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"cage","cells":[15]}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"cage","cells":[5]}}
```

Normal sudoku rules apply.

Divide the grid into a number of islands -- orthogonally connected groups of cells. Every island contains a single circled cell; the digit in the circle indicates the number of cells making up the island. 

The islands are surrounded by a waterway -- a single orthogonally connected group of cells. All caged cells are waterway cells; the digit in a caged cell indicates how many waterway cells are seen orthogonally from that position, including itself (island cells block vision). The waterway cannot form any 2x2 areas.

The islands are connected by a series of "regional" bridges (blue lines). The end cells of a bridge are on two different islands; the middle cell of a bridge is a waterway cell. Box borders divide the bridges into segments with the same sum.
