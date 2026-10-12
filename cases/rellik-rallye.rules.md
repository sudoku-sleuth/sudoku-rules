---
format: open-rules
title: Rellik Rallye
setter: sujoyku
source: https://tinyurl.com/4mrthdrx
case: https://sudoku-sleuth.com/cases/rellik-rallye
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
---

```rules
sudoku 9x9
kropki r5c1-r6c1 colour "white"
arrow-1: arrow r7c7-r7c6-r8c6 bulb ["r7c8"]
arrow-2: arrow r4c2-r4c3 bulb ["r4c1"]
extremum r8c9-r8c2-r2c7 type "max" exhaustive false
```

```drawing
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[0.6,0.94],[0.5,0.89],[0.4,0.94]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[0.94,0.6],[0.89,0.5],[0.94,0.4]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[4.06,4.4],[4.11,4.5],[4.06,4.6]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[4.6,4.94],[4.5,4.89],[4.4,4.94]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[4.94,4.6],[4.89,4.5],[4.94,4.4]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[4.4,4.06],[4.5,4.11],[4.6,4.06]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,8.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,3.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,0.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,1.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,7.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,5.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,4.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,0.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,7.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
```

- Normal sudoku rules apply.

- Minimum/Maximum: A digit in a minimum (resp. maximum) cell is strictly smaller (resp. greater) than a digit in any orthogonally adjacent cell.

- Arrows: Digits on an arrow sum to the digit in the circle from which the arrow emerges.

- Dots: Digits joined by a white dot must be consecutive. (Not all dots are given.)

- Rellik Path: Draw a path from R1C1 to R8C9 that meets the following conditions:

1) The path only moves orthogonally. It is continuous, never branches and never touches itself orthogonally or diagonally. Moreover, the path visits EACH 2x2-square in the grid. 

2) Each indicated minimum and maximum cell is on the path. Cells containing an arrow or any circle (including arrow circles) CANNOT appear on the path.

3) A digit in a circle indicates the number of cells surrounding the circle (orthogonally and diagonally) which are on the path. This rule ALSO includes circles with emerging arrows.

4) In each 3x3 box, the cells on the path form one orthogonally connected component. In box N, the cells on the path form a Rellik Cage with given value N. (The boxes are listed from left to right and top to bottom; i.e. Box 1 is in the top left, Box 9 in the bottom right etc.) Any combination of one or more digits within a Rellik Cage CANNOT sum to the given value. For example, the Rellik Cage in Box 6 cannot contain 1&2&3, 1&5, 2&4 or a single 6.
