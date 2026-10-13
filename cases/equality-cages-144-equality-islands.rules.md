---
format: open-rules
title: "Equality Cages 144: Equality Islands"
setter: gUBBLOR
source: https://sudokupad.app/6v2f1qxff2
case: https://sudoku-sleuth.com/cases/equality-cages-144-equality-islands
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
pair-1: pair r7c3-r8c3 sum 10
pair-2: pair r3c6-r3c7 sum 5
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,8.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,5.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,8.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,7.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,0.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,0.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,1.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,4.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"cage","cells":[7]}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"cage","cells":[24]}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"cage","cells":[35]}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"cage","cells":[13]}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"cage","cells":[20]}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"cage","cells":[1]}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"cage","cells":[79]}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"cage","cells":[59]}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"cage","cells":[73]}}
```

Normal Sudoku rules apply. Place the digits 1 through 9 in each empty cell. Digits must not repeat within the same row, column, or box.

Nurikabe: Color the grid so that some cells are islands and some cells are water. Islands are a group of orthogonally connected cells, the size and shape of which must be deduced by the solver. All the water must be orthogonally connected. Islands may not touch each other orthogonally. NO 2x2 AREA MAY BE FULLY WATER OR FULLY ISLAND.

Circles: All the circles are water, and the digit inside the circle indicates how many water cells can be seen in any orthogonal direction (including itself). Island cells block vision.

Cages: All the cage cells are on an island, and the digit inside the cage indicates the size of the island. There is exactly one cage cell on each island, and it's shape must be deduced by the solver.

Equality cages: All islands are their own equality cage. Islands must have an equal number of low (1,2,3,4) and high (6,7,8,9) digits AND an equal number of even (2,4,6,8) and odd (1,3,7,9) digits. Islands can never contain 5. Digits may not repeat on an island.

XV: Adjacent cells connected with an X must sum to 10. Adjacent cells connected with a V must sum to 5. Not all X's or V's are shown.
