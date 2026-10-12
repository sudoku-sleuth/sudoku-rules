---
format: open-rules
title: Extra Ball
setter: Blobz
source: https://sudokupad.app/blobz/extra-ball
case: https://sudoku-sleuth.com/cases/extra-ball
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r4c7=6 r5c3=3 r7c7=3 r8c4=3
---

```rules
sudoku 9x9
cage-1: cage r3c3-r3c4-r3c5-r4c4 total 29 connected true
cage-2: cage r5c6-r6c5-r6c6-r6c7 total 16 connected true
cage-3: cage r9c1-r9c2 total 12 connected true
cage-4: cage r9c8-r9c9 total 7 connected true
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,2.5],"width":0.86,"height":0.86,"rounded":true,"fill":"#a39f9f66","stroke":"#89898997","thickness":4,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,6.5],"width":0.86,"height":0.86,"rounded":true,"fill":"#a39f9f66","stroke":"#89898997","thickness":4,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,6.5],"width":0.86,"height":0.86,"rounded":true,"fill":"#a39f9f66","stroke":"#89898997","thickness":4,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,3.5],"width":0.86,"height":0.86,"rounded":true,"fill":"#a39f9f66","stroke":"#89898997","thickness":4,"angle":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,0.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#a39f9f66","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,2.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#a39f9f66","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,4.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#a39f9f66","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,6.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#a39f9f66","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,8.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#a39f9f66","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,0.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#a39f9f66","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,0.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#a39f9f66","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,0.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#a39f9f66","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,0.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#a39f9f66","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,0.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#a39f9f66","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,0.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#a39f9f66","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,0.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#a39f9f66","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,0.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#a39f9f66","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,1.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#a39f9f66","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,1.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#a39f9f66","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,8.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#a39f9f66","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,8.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#a39f9f66","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,8.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#a39f9f66","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,8.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#a39f9f66","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,8.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#a39f9f66","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,8.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#a39f9f66","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,8.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#a39f9f66","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,8.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#a39f9f66","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,7.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#a39f9f66","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,4.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#a39f9f66","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,2.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fefe5040","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,3.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fefe5040","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,4.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fefe5040","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,3.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fefe5040","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,5.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fefe5040","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,5.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fefe5040","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,4.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fefe5040","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,6.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fefe5040","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,7.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#a39f9f66","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,1.5],"width":0.52,"height":0.52,"rounded":true,"fill":"#b5cef4ff","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,3.5],"width":0.52,"height":0.52,"rounded":true,"fill":"#adf7b2ff","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,5.5],"width":0.52,"height":0.52,"rounded":true,"fill":"#f5acadff","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,7.5],"width":0.52,"height":0.52,"rounded":true,"fill":"#ffe3b1ff","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,2.5],"width":0.42,"height":0.42,"rounded":false,"fill":"#adf7b2ff","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,3.5],"width":0.42,"height":0.42,"rounded":false,"fill":"#ffe3b1ff","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,5.5],"width":0.42,"height":0.42,"rounded":false,"fill":"#f5acadff","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,6.5],"width":0.42,"height":0.42,"rounded":false,"fill":"#b5cef4ff","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"line","points":[[8,7],[9,7],[9,5],[8,5],[8,4],[9,4],[9,2],[7,2],[7,1],[0,1],[0,2],[1,2],[1,3],[0,3],[0,4],[1,4],[1,5],[0,5],[0,6],[1,6],[1,7],[0,7],[0,8],[7,8],[7,7],[8,7]],"color":"#89898997","thickness":8,"rounded":true,"layer":"over"}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"line","points":[[4,5],[5,5],[5,4],[6,4],[6,7],[5,7],[5,6],[4,6],[4,5]],"color":"#ffec269f","thickness":8,"rounded":true,"layer":"over"}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"line","points":[[2,2],[3,2],[3,3],[4,3],[4,4],[3,4],[3,5],[2,5],[2,2]],"color":"#ffec269f","thickness":8,"rounded":true,"layer":"over"}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"cage","cells":[74],"label":"11","color":"#0000","labelColor":"#cf40feff"}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"cage","cells":[75],"label":"12","color":"#0000","labelColor":"#cf40feff"}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"cage","cells":[77],"label":"10","color":"#0000","labelColor":"#cf40feff"}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"cage","cells":[78],"label":"10","color":"#0000","labelColor":"#cf40feff"}}
```

Normal sudoku rules apply.

Digits in cages do not repeat, and sum to the clue in the top left corner.

Four pinballs start at the top of the grid, trace a path around the table, and finish at the bottom of the grid. The number of cells visited by each path (including start and end cells) is given in the associated end cell.

Each ball may move sideways or downwards (diagonally or straight) any number of times, but may NOT move upwards, on its journey. Balls may not enter any cell more than once. Balls may not enter a grey shaded cell or a "bumper" cell (given digit). Each ball must visit both of the "target" cages (shaded yellow) along the way.

No path shares any cells, and while they may cross other paths diagonally, no path crosses itself.

Box borders divide the BLUE path into segments with the same sum.

Adjacent digits along the GREEN path must differ by at least 5. 

Digits along the RED path must be 5 or higher.
