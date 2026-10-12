---
format: open-rules
title: Circular Sums
setter: sujoyku
source: https://tinyurl.com/mumnbcuf
case: https://sudoku-sleuth.com/cases/circular-sums
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r6c1-r7c1 total 12 connected true
cage-2: cage r3c9-r4c9 total 12 connected true
arrow-1: arrow r8c5-r9c4 bulb ["r7c5"]
arrow-2: arrow r5c4-r4c5 bulb ["r6c4"]
arrow-3: arrow r2c5-r3c4 bulb ["r2c6"]
little-killer-1: little-killer r1c9-r2c8-r3c7-r4c6-r5c5-r6c4-r7c3-r8c2-r9c1 sum 30
little-killer-2: little-killer r7c9-r8c8-r9c7 sum 15
```

```drawing
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,5.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,3.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,4.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,0.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,2.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,4.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,6.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,3.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,1.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,0.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,2.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,4.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,6.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,1.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,3.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,5.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,4.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,5.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,2.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,6.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,8.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,2.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,4.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,6.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,8.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,3.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,5.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,7.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,7.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,-0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"18","textColor":"#000000","fontSize":20}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,4.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"18","textColor":"#000000","fontSize":20}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,-0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"18","textColor":"#000000","fontSize":20}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,-0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"18","textColor":"#000000","fontSize":20}}
```

Normal sudoku rules apply. A circled digit indicates exactly how many circles contain that digit. (Note this also includes circles with emerging arrows.) A clue outside the grid indicates the sum of the circled digits in the indicated row, column or diagonal. Digits on an arrow sum to the digit in the circle from which the arrow emerges. Digits in a cage do not repeat and sum to the clue in the top left.
