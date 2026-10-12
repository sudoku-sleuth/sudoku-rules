---
format: open-rules
title: Whispering Pentominoes
setter: Blobz
source: https://sudokupad.app/q25qxwhuxv
case: https://sudoku-sleuth.com/cases/whispering-pentominoes
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r1c1=1
---

```rules
sudoku 9x9
whispers-1: whispers r1c4-r2c5-r2c6-r3c7-r3c8-r4c9-r5c9-r6c8-r5c7-r6c6-r7c6-r8c7-r9c6-r8c5-r8c4 gap 5
whispers-2: whispers r1c4-r2c3-r3c3-r4c3-r5c2 gap 5
whispers-3: whispers r5c2-r6c2-r6c3-r6c4-r7c4-r8c3-r8c4 gap 5
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"cage","cells":[43],"label":"24","color":"#0000","labelColor":"#0000AA"}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"cage","cells":[39],"label":"26","color":"#0000","labelColor":"#0000AA"}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"cage","cells":[13],"label":"29","color":"#0000","labelColor":"#0000AA"}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"cage","cells":[65],"label":"25","color":"#0000","labelColor":"#0000AA"}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"cage","cells":[29],"label":"21","color":"#0000","labelColor":"#0000AA"}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"cage","cells":[50],"label":"25","color":"#0000","labelColor":"#0000AA"}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"cage","cells":[69],"label":"18","color":"#0000","labelColor":"#0000AA"}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"cage","cells":[67],"label":"26","color":"#0000","labelColor":"#0000AA"}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"cage","cells":[26],"label":"22","color":"#0000","labelColor":"#0000AA"}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"cage","cells":[11],"label":"24","color":"#0000","labelColor":"#0000AA"}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"cage","cells":[24],"label":"27","color":"#0000","labelColor":"#0000AA"}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"cage","cells":[46],"label":"31","color":"#0000","labelColor":"#0000AA"}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,4.5],"width":0.85,"height":0.85,"rounded":true,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"line","points":[[1.5,4.5],[2.5,4.5]],"color":"#CFCFCF","thickness":21,"rounded":true}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,2.5],"width":0.85,"height":0.85,"rounded":true,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"line","points":[[1.5,2.5],[1.5,1.5]],"color":"#CFCFCF","thickness":21,"rounded":true}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,6.5],"width":0.85,"height":0.85,"rounded":true,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"line","points":[[2.5,6.5],[2.5,5.5]],"color":"#CFCFCF","thickness":21,"rounded":true}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,8.5],"width":0.85,"height":0.85,"rounded":true,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"line","points":[[2.5,8.5],[3.5,8.5]],"color":"#CFCFCF","thickness":21,"rounded":true}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,7.5],"width":0.85,"height":0.85,"rounded":true,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"line","points":[[4.5,7.5],[5.5,7.5]],"color":"#CFCFCF","thickness":21,"rounded":true}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,5.5],"width":0.85,"height":0.85,"rounded":true,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"line","points":[[5.5,5.5],[5.5,4.5]],"color":"#CFCFCF","thickness":21,"rounded":true}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,6.5],"width":0.85,"height":0.85,"rounded":true,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"line","points":[[7.5,6.5],[7.5,7.5]],"color":"#CFCFCF","thickness":21,"rounded":true}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,4.5],"width":0.85,"height":0.85,"rounded":true,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"line","points":[[7.5,4.5],[6.5,4.5]],"color":"#CFCFCF","thickness":21,"rounded":true}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,2.5],"width":0.85,"height":0.85,"rounded":true,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"line","points":[[7.5,2.5],[7.5,1.5]],"color":"#CFCFCF","thickness":21,"rounded":true}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,1.5],"width":0.85,"height":0.85,"rounded":true,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"line","points":[[5.5,1.5],[5.5,0.5]],"color":"#CFCFCF","thickness":21,"rounded":true}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,2.5],"width":0.85,"height":0.85,"rounded":true,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"line","points":[[3.5,2.5],[4.5,2.5]],"color":"#CFCFCF","thickness":21,"rounded":true}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,3.5],"width":0.85,"height":0.85,"rounded":true,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"line","points":[[4.5,3.5],[5.5,3.5]],"color":"#CFCFCF","thickness":21,"rounded":true}}
```

Normal sudoku rules apply.

The indicated 60-cell white region contains one each of the twelve standard pentominoes (no repeats by rotation or reflection).

The green line loops through all twelve pentominoes. It passes through exactly 2 cells of a pentomino before visiting the next. Adjacent digits along the green line differ by at least 5. Also, each pentomino contains one of the 2-cell thermometers, whose digits must increase starting from the bulb end. 

The arrangement of pentominoes must be deduced.

Once placed, each pentomino behaves like a 5-cell killer cage: digits do not repeat and must sum to the value listed at the thermometer bulb.

Illustrated Pentominoes at:
https://tinyurl.com/pent-labels
