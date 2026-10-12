---
format: open-rules
title: Pentomino Loop
setter: Blobz
source: https://sudokupad.app/8o2f2ns4ud
case: https://sudoku-sleuth.com/cases/pentomino-loop
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r1c7=2 r4c5=1 r5c4=3 r5c5=5 r5c6=7 r6c5=9 r9c3=7 r9c9=1
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"cage","cells":[51],"label":"10/15","color":"#0000","labelColor":"#000000"}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"cage","cells":[44],"label":"13/24","color":"#0000","labelColor":"#000000"}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"cage","cells":[59],"label":"15/25","color":"#0000","labelColor":"#000000"}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"cage","cells":[47],"label":"16/24","color":"#0000","labelColor":"#000000"}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"cage","cells":[78],"label":"23/34","color":"#0000","labelColor":"#000000"}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"cage","cells":[43],"label":"23/28","color":"#0000","labelColor":"#000000"}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"cage","cells":[15],"label":"22/28","color":"#0000","labelColor":"#000000"}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"cage","cells":[75],"label":"10/26","color":"#0000","labelColor":"#000000"}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"cage","cells":[38],"label":"21/28","color":"#0000","labelColor":"#000000"}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"cage","cells":[13],"label":"13/22","color":"#0000","labelColor":"#000000"}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"cage","cells":[27],"label":"11/26","color":"#0000","labelColor":"#000000"}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"cage","cells":[11],"label":"16/26","color":"#0000","labelColor":"#000000"}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"line","points":[[0.5,2.5],[1.5,3.5],[1.5,4.5],[0.5,4.5],[0.5,5.5],[1.5,6.5],[2.5,5.5],[3.5,6.5],[4.5,7.5],[3.5,7.5],[3.5,8.5],[4.5,8.5],[5.5,8.5],[5.5,7.5],[5.5,6.5],[5.5,5.5],[6.5,4.5],[6.5,5.5],[6.5,6.5],[7.5,5.5],[8.5,6.5],[8.5,5.5],[8.5,4.5],[8.5,3.5],[7.5,2.5],[6.5,1.5],[5.5,2.5],[5.5,1.5],[4.5,0.5],[3.5,0.5],[3.5,1.5],[4.5,1.5],[4.5,2.5],[3.5,3.5],[2.5,2.5]],"color":"#DDDDDD","thickness":9.6,"rounded":true}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"line","points":[[2.5,2.5],[1.5,2.5],[0.5,2.5]],"color":"#DDDDDD","thickness":9.6,"rounded":true}}
```

Normal sudoku rules apply.

The indicated 60-cell white region contains one each of the twelve standard pentominoes (no repeats by rotation or reflection).

The grey line loops through all twelve pentominoes. It passes through exactly 3 cells of a pentomino before visiting the next. The arrangement of pentominoes must be deduced.

Once placed, each pentomino behaves like a 5-cell killer cage: digits do not repeat and must sum to the appropriate value. 

Each pentomino contains a clue where the first value is the sum of digits along the line, and the second value is the cage total.

Illustrated Pentominoes at:
https://tinyurl.com/pent-labels
