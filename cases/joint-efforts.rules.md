---
format: open-rules
title: Joint Efforts
setter: sujoyku
source: https://tinyurl.com/wj39yttr
case: https://sudoku-sleuth.com/cases/joint-efforts
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
arrow-1: arrow r5c5-r4c5-r3c5 bulb ["r6c5"]
arrow-2: arrow r6c1-r5c1-r4c1 bulb ["r6c2"]
arrow-3: arrow r2c3-r1c4-r2c5 bulb ["r1c2"]
arrow-4: arrow r3c3-r2c2 bulb ["r3c4"]
whispers r9c1-r9c2-r9c3-r8c3-r7c3-r7c4-r7c5-r7c6-r8c6-r9c6 gap 5
nabner-1: nabner r5c7-r6c7-r7c7-r8c7 distinct true
nabner-2: nabner r9c9-r8c9-r7c9-r6c8 distinct true
nabner-3: nabner r6c9-r5c8-r4c8-r4c9 distinct true
nabner-4: nabner r3c9-r3c8-r3c7-r2c7 distinct true
pair-1: pair r4c3-r4c4 sum 10
pair-2: pair r8c6-r8c7 sum 10
```

```drawing
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,0.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,0.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,1.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,1.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,3.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,3.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,4.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,4.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,1.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,0.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,5.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,3.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,6.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,8.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,6.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,8.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,6.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,7.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,7.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,7.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,5.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,3.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,4.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,1.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,1.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
```

Normal sudoku rules apply. A circled digit indicates exactly how many circles contain that digit. (Note: This also includes circles with emerging arrows.) Digits on an arrow sum to the digit in the circle from which the arrow emerges. Adjacent digits on a green line must have a difference of at least 5. The golden lines are Nabner lines, i.e. on a golden line there may not be consecutive or repeat digits. Digits joined by an X sum to 10. (Not all Xs are given.)
