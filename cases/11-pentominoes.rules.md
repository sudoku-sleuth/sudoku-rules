---
format: open-rules
title: 11 Pentominoes
setter: Blobz
source: https://sudokupad.app/xszumddipw
case: https://sudoku-sleuth.com/cases/11-pentominoes
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r1c1=1 r9c9=1
---

```rules
sudoku 9x9
pair-1: pair r2c3-r3c3 difference 3
pair-2: pair r3c1-r3c2 difference 2
pair-3: pair r3c4-r4c4 difference 6
pair-4: pair r2c7-r3c7 difference 5
pair-5: pair r2c8-r3c8 difference 6
pair-6: pair r4c8-r5c8 difference 6
kropki-1: kropki r6c6-r6c7 colour "white"
pair-7: pair r7c8-r7c9 difference 4
kropki-2: kropki r8c6-r8c7 colour "white"
pair-8: pair r7c4-r8c4 difference 6
pair-9: pair r7c2-r8c2 difference 3
pair-10: pair r5c3-r5c4 difference 3
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"cage","cells":[39],"label":"21","color":"#0000","labelColor":"#0000aa"}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"cage","cells":[50],"label":"24","color":"#0000","labelColor":"#0000aa"}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"cage","cells":[62],"label":"22","color":"#0000","labelColor":"#0000aa"}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"cage","cells":[18],"label":"25","color":"#0000","labelColor":"#0000aa"}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"cage","cells":[30],"label":"28","color":"#0000","labelColor":"#0000aa"}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"cage","cells":[64],"label":"25","color":"#0000","labelColor":"#0000aa"}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"cage","cells":[43],"label":"23","color":"#0000","labelColor":"#0000aa"}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"cage","cells":[24],"label":"18","color":"#0000","labelColor":"#0000aa"}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"cage","cells":[57],"label":"28","color":"#0000","labelColor":"#0000aa"}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"cage","cells":[20],"label":"20","color":"#0000","labelColor":"#0000aa"}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"cage","cells":[69],"label":"29","color":"#0000","labelColor":"#0000aa"}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"cage","cells":[16],"label":"26","color":"#0000","labelColor":"#0000aa"}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"line","points":[[4.5,2.5],[3.5,1.5],[2.5,1.5]],"color":"#76D4E3","thickness":9.6,"rounded":true}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"line","points":[[2.5,1.5],[1.5,1.5],[1.5,2.5]],"color":"#76D4E3","thickness":9.6,"rounded":true}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"line","points":[[1.5,2.5],[2.5,3.5],[2.5,4.5]],"color":"#76D4E3","thickness":9.6,"rounded":true}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"line","points":[[2.5,4.5],[1.5,5.5],[1.5,6.5]],"color":"#76D4E3","thickness":9.6,"rounded":true}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"line","points":[[1.5,6.5],[2.5,7.5],[2.5,8.5]],"color":"#76D4E3","thickness":9.6,"rounded":true}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"line","points":[[2.5,8.5],[3.5,7.5]],"color":"#76D4E3","thickness":9.6,"rounded":true}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"line","points":[[3.5,7.5],[4.5,6.5],[5.5,6.5],[5.5,7.5]],"color":"#76D4E3","thickness":9.6,"rounded":true}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"line","points":[[5.5,7.5],[6.5,7.5],[6.5,6.5]],"color":"#76D4E3","thickness":9.6,"rounded":true}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"line","points":[[6.5,6.5],[7.5,5.5],[7.5,4.5]],"color":"#76D4E3","thickness":9.6,"rounded":true}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"line","points":[[7.5,4.5],[7.5,3.5],[7.5,2.5]],"color":"#76D4E3","thickness":9.6,"rounded":true}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"line","points":[[7.5,2.5],[6.5,2.5],[6.5,1.5],[5.5,1.5],[4.5,2.5]],"color":"#76D4E3","thickness":9.6,"rounded":true}}
```

Normal sudoku rules apply.

The indicated 60-cell white region contains one each of the twelve standard pentominoes (no repeats by rotation or reflection).

The blue line loops through all twelve pentominoes. It passes through exactly 2 cells of a pentomino before visiting the next. In every case, those two digits sum to 11. Also, each pentomino contains a domino marked with a difference dot, where digits either side differ by the amount shown.

The arrangement of pentominoes must be deduced.

Once placed, each pentomino behaves like a 5-cell killer cage: digits do not repeat and must sum to the small clue that appears in one of its cells.

Illustrated Pentominoes at:
https://tinyurl.com/pent-labels
