---
format: open-rules
title: Three choices
setter: sujoyku
source: https://tinyurl.com/y5rsewc9
case: https://sudoku-sleuth.com/cases/three-choices
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
arrow-1: arrow r7c4-r8c5-r8c6 bulb ["r6c3"]
arrow-2: arrow r6c1-r5c1-r4c1 bulb ["r7c1"]
region-sum r7c2-r7c3-r8c4-r9c5-r9c6-r9c7-r8c7-r7c7-r7c8-r6c7-r6c8-r5c9-r4c8-r3c8-r3c7-r2c7-r1c7-r1c6-r2c5-r2c4-r2c3-r3c3-r4c3-r5c3 segments [["r7c2","r7c3"],["r8c4","r9c5","r9c6"],["r9c7","r8c7","r7c7","r7c8"],["r6c7","r6c8","r5c9","r4c8"],["r3c8","r3c7","r2c7","r1c7"],["r1c6","r2c5","r2c4"],["r2c3","r3c3"],["r4c3","r5c3"]]
```

```drawing
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,2.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,1.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,2.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,3.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,4.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,3.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,4.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,5.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,5.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,8.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,7.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,8.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,6.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,7.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,8.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,7.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,8.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,3.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,4.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,5.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,0.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,2.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,0.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,0.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,1.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
```

Normal sudoku rules apply. A circled digit indicates exactly how many circles contain that digit. (Note: This also includes circles with emerging arrows.) The red line is a region sum line, i.e. in each 3x3 box it passes through the digits on the line sum to the same value. Digits on an arrow sum to the digit in the circle from which the arrow emerges.
