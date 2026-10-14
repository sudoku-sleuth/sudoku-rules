---
format: open-rules
title: Nurikabe Bridges
setter: Blobz
source: https://sudokupad.app/blobz/nurikabe-bridges
case: https://sudoku-sleuth.com/cases/nurikabe-bridges
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r1c9=4 r2c1=1 r2c3=4 r2c6=5 r5c1=6 r6c4=3 r6c8=9 r7c3=3 r9c8=6
exported: 979eb286eddc8b25cf6d1a417acca945
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,2.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,7.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,0.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,3.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,5.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,2.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,0.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,7.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[1.5,0.5],[2.5,0.5],[3.5,0.5]],"color":"#60e160cc","thickness":9.6,"rounded":true,"path":"M 32 96 c -32 64, 32 64, 0 128","bounds":[1.5,0.3556625512061903,3.5,0.6443374487938097]}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[0.5,3.5],[0.5,4.5],[0.5,5.5]],"color":"#60e160cc","thickness":9.6,"rounded":true,"path":"M 224 32 c 64 -32, 64 32, 128 0","bounds":[0.3556625512061903,3.5,0.6443374487938097,5.5]}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[7.5,2.5],[7.5,3.5],[7.5,4.5]],"color":"#60e160cc","thickness":9.6,"rounded":true,"path":"M 160 480 c 64 -32, 64 32, 128 0","bounds":[7.35566255120619,2.5,7.64433744879381,4.5]}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[5.5,7.5],[6.5,7.5],[7.5,7.5]],"color":"#60e160cc","thickness":9.6,"rounded":true,"path":"M 480 352 c -32 64, 32 64, 0 128","bounds":[5.5,7.35566255120619,7.5,7.64433744879381]}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[1.5,2.5],[2.5,3.5],[3.5,3.5]],"color":"#60e160cc","thickness":9.6,"rounded":true,"path":"M 156 96 c 48 48, 64 32, 64 128","bounds":[1.5,2.4375,3.5,3.4375]}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[4.5,1.5],[4.5,2.5],[5.5,3.5]],"color":"#60e160cc","thickness":9.6,"rounded":true,"path":"M 96 288 c 54 0, 96 16, 116 64","bounds":[4.5,1.5,5.5,3.3125]}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[1.5,7.5],[2.5,7.5],[3.5,8.5]],"color":"#60e160cc","thickness":9.6,"rounded":true,"path":"M 480 96 c 32 116, 42 116, 64 128","bounds":[1.5,7.5,3.5,8.5]}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"cage","cells":[60]}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"cage","cells":[8]}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"cage","cells":[10]}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"cage","cells":[72]}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"cage","cells":[21]}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"cage","cells":[4]}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"cage","cells":[33]}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"cage","cells":[76]}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"cage","cells":[54]}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"cage","cells":[71]}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"cage","cells":[57]}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"cage","cells":[59]}}
```

Normal sudoku rules apply.

Divide the grid into a number of islands -- orthogonally connected groups of cells. Every island contains a single circled cell; the digit in the circle indicates the number of cells making up the island. 

The islands are surrounded by a waterway -- a single orthogonally connected group of cells. All caged cells are waterway cells; the digit in a caged cell indicates how many waterway cells are seen orthogonally from that position, including itself (island cells block vision). The waterway cannot form any 2x2 areas.

The islands are connected by a series of "whispering" bridges (green lines). The end cells of a bridge are on two different islands; the middle cell of a bridge is a waterway cell. Adjacent digits along a bridge differ by at least 5.
