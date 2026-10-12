---
format: open-rules
title: Pinball Wizard
setter: Blobz
source: https://sudokupad.app/w0mpoy9e6u
case: https://sudoku-sleuth.com/cases/pinball-wizard
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r4c1=2 r4c7=4 r8c4=5
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2 total 13 connected true
cage-2: cage r1c8-r1c9 total 13 connected true
cage-3: cage r9c1-r9c2-r9c3 total 16 connected true
cage-4: cage r9c7-r9c8-r9c9 total 18 connected true
cage-5: cage r4c2-r4c3-r5c2 total 23 connected true
cage-6: cage r5c5-r5c6-r6c5 total 12 connected true
cage-7: cage r2c8-r3c7-r3c8 total 13 connected true
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,4.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fbfbbea2","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,4.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fbfbbea2","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,5.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fbfbbea2","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,1.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fbfbbea2","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,2.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fbfbbea2","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,1.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fbfbbea2","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,6.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fbfbbea2","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,7.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fbfbbea2","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,7.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fbfbbea2","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,6.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#cfcfcf66","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,0.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#cfcfcf66","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,3.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#cfcfcf66","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,4.5],"width":0.5,"height":0.5,"rounded":true,"fill":"#4d4dff66","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,7.5],"width":0.5,"height":0.5,"rounded":true,"fill":"#4d4dff66","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,5.5],"width":0.5,"height":0.5,"rounded":true,"fill":"#4d4dff66","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,2.5],"width":0.5,"height":0.5,"rounded":true,"fill":"#4d4dff66","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,6.5],"width":0.5,"height":0.5,"rounded":true,"fill":"#4dff4d66","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,7.5],"width":0.5,"height":0.5,"rounded":true,"fill":"#4dff4d66","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,4.5],"width":0.5,"height":0.5,"rounded":true,"fill":"#4dff4d66","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,1.5],"width":0.5,"height":0.5,"rounded":true,"fill":"#4dff4d66","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,2.5],"width":0.5,"height":0.5,"rounded":true,"fill":"#ff4d4d66","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,6.5],"width":0.5,"height":0.5,"rounded":true,"fill":"#ff4d4d66","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,4.5],"width":0.5,"height":0.5,"rounded":true,"fill":"#ff4d4d66","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,1.5],"width":0.5,"height":0.5,"rounded":true,"fill":"#ff4d4d66","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,5.5],"width":0.52,"height":0.52,"rounded":false,"fill":"#4dff4d66","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,4.5],"width":0.52,"height":0.52,"rounded":false,"fill":"#4d4dff66","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,3.5],"width":0.52,"height":0.52,"rounded":false,"fill":"#ff4d4d66","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,8.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#4d4d4d66","thickness":0,"angle":0}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,7.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#4d4d4d66","thickness":0,"angle":0}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,6.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#4d4d4d66","thickness":0,"angle":0}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,2.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#4d4d4d66","thickness":0,"angle":0}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,1.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#4d4d4d66","thickness":0,"angle":0}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,0.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#4d4d4d66","thickness":0,"angle":0}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,8.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#4d4d4d66","thickness":0,"angle":0}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,8.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#4d4d4d66","thickness":0,"angle":0}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,7.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#4d4d4d66","thickness":0,"angle":0}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,1.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#4d4d4d66","thickness":0,"angle":0}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,0.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#4d4d4d66","thickness":0,"angle":0}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,0.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#4d4d4d66","thickness":0,"angle":0}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,0.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#4d4d4d66","thickness":0,"angle":0}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,1.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#4d4d4d66","thickness":0,"angle":0}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,3.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#4d4d4d66","thickness":0,"angle":0}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,5.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#4d4d4d66","thickness":0,"angle":0}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,7.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#4d4d4d66","thickness":0,"angle":0}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,8.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#4d4d4d66","thickness":0,"angle":0}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"cage","cells":[75],"label":"15","color":"#0000","labelColor":"#888"}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"cage","cells":[76],"label":"16","color":"#0000","labelColor":"#888"}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"cage","cells":[77],"label":"18","color":"#0000","labelColor":"#888"}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,7],"width":0,"height":1.674,"rounded":true,"thickness":0,"angle":0,"text":"A","textColor":"#0003","fontSize":64,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,5],"width":0,"height":1.674,"rounded":true,"thickness":0,"angle":0,"text":"B","textColor":"#0003","fontSize":64,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,2],"width":0,"height":1.674,"rounded":true,"thickness":0,"angle":0,"text":"C","textColor":"#0003","fontSize":64,"textStroke":"#ffffff","textStrokeWidth":1}}
```

Normal sudoku rules apply.

Digits in cages sum to the clue in the top left corner.

Three pinballs start at the top of the grid, trace a path around the table, and finish at the bottom of the grid. The number of cells visited by each path (including start and end cells) is given in the associated end cell.

Each ball may move sideways or downwards (diagonally or straight) any number of times, but may move upwards (diagonally or straight) at most TWICE, on its journey. Balls may not enter any cell more than once. Balls may not enter a grey shaded cell or a 'bumper' cell (given digit). Each ball must visit each of the three 'target' cages (shaded yellow) in order (ABC) along the way, passing through the indicated cells.

No path shares any cells, and while they may cross other paths diagonally, no path crosses itself.

Box borders divide the blue path into segments with the same sum.

Adjacent digits along the green path must differ by at least 5.
