---
format: open-rules
title: One way or the other
setter: sujoyku
source: https://tinyurl.com/yc65bvrk
case: https://sudoku-sleuth.com/cases/one-way-or-the-other
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: cd5dd820be42918a35557588bb509ce3
---

```rules
sudoku 9x9
cage-1: cage r2c1-r2c2 total 10 connected true
cage-2: cage r2c8-r2c9 total 10 connected true
cage-3: cage r1c5-r2c5 total 10 connected true
cage-4: cage r3c7-r4c7 total 12 connected true
cage-5: cage r3c3-r3c4 total 11 connected true
cage-6: cage r7c6-r7c7 total 13 connected true
cage-7: cage r6c3-r7c3 total 14 connected true
cage-8: cage r5c1-r5c2 total 9 connected true
cage-9: cage r8c2-r9c2 total 6 connected true
cage-10: cage r9c8-r9c9 total 5 connected true
cage-11: cage r4c9-r5c9 total 15 connected true
cage-12: cage r7c4-r7c5 total 7 connected true
cage-13: cage r3c5-r3c6 total 9 connected true
arrow r3c2-r4c3 bulb ["r3c1"]
```

```drawing
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,0.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,2.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,6.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,8.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,0.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,2.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,6.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,8.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,3.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,7.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,5.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,1.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,3.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,4.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,5.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
```

Normal sudoku rules apply. Exclusivity: No digit from 1 to 9 may appear in both a circle and a killer cage. In other words: If a digit appears in a circle, it may not be contained in any killer cage and vice versa. Digits in a cage sum to the clue in the top left. Digits on an arrow sum to the digit in the circle from which the arrow emerges. A circled digit indicates exactly how many circles contain that digit. (Note that this also includes circles with emerging arrows.)
