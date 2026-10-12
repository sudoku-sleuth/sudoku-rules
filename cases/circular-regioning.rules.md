---
format: open-rules
title: Circular Regioning
setter: sujoyku
source: https://tinyurl.com/mpebm5jh
case: https://sudoku-sleuth.com/cases/circular-regioning
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
thermo r1c8-r1c9
kropki r7c4-r7c5 colour "white"
region-sum-1: region-sum r6c8-r5c7-r5c6-r4c5-r3c4-r2c5-r3c6-r3c7-r2c8-r1c7 segments [["r6c8","r5c7"],["r5c6","r4c5"],["r3c4","r2c5","r3c6"],["r3c7","r2c8","r1c7"]]
region-sum-2: region-sum r6c6-r6c5-r6c4-r5c5-r4c6-r4c7-r4c8-r5c8-r5c9-r6c9-r7c9-r8c9-r8c8-r8c7-r7c6-r7c5-r8c4-r9c4-r9c3-r8c2-r7c2-r6c2-r6c3-r5c3-r5c2-r4c3-r4c2-r3c2-r2c2-r1c2 segments [["r6c6","r6c5","r6c4","r5c5","r4c6"],["r4c7","r4c8","r5c8","r5c9","r6c9"],["r7c9","r8c9","r8c8","r8c7"],["r7c6","r7c5","r8c4","r9c4"],["r9c3","r8c2","r7c2"],["r6c2","r6c3","r5c3","r5c2","r4c3","r4c2"],["r3c2","r2c2","r1c2"]]
```

```drawing
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,0.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,0.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,0.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,0.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,0.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,0.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,0.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,1.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,2.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,4.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,4.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,5.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,5.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,6.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,7.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,8.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,6.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,3.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,3.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,8.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,6.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,7.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,2.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,3.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,4.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,5.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,5.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,4.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,7.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,7.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
```

Normal sudoku rules apply. A circled digit indicates exactly how many circles contain that digit. (Note: This also includes the circle in the bulb of the thermometer.) The red and the blue line are region sum lines, i.e. in each 3x3 box the digits on such a line sum to the same value. (The value of the blue line may differ from the value of the red line.) Along a thermometer digits are strictly increasing from the bulb end. Digits joined by a white dot are consecutive. (Not all dots are given.)
