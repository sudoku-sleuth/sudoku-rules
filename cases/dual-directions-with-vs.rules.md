---
format: open-rules
title: Dual directions with Vs
setter: Chip Sounder
source: https://sudokupad.app/slouniiqfo
case: https://sudoku-sleuth.com/cases/dual-directions-with-vs
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 84c964b267213bcc9005edcf867de577
---

```rules
sudoku 9x9
pair-1: pair r1c9-r2c9 sum 5
pair-2: pair r6c7-r6c8 sum 5
pair-3: pair r6c5-r7c5 sum 5
pair-4: pair r3c6-r3c7 sum 5
pair-5: pair r4c4-r4c5 sum 5
pair-6: pair r1c2-r2c2 sum 5
pair-7: pair r3c1-r3c2 sum 5
pair-8: pair r9c6-r9c7 sum 5
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[0.5,8.5],[5.5,8.5],[5.5,4.5],[3.5,4.5],[2.5,5.5],[3.5,6.5],[4.5,6.5],[4.5,7.5]],"color":"#aaaf","thickness":3.2,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[5.5,4.5],[5.5,1.5],[0.5,1.5]],"color":"#aaaf","thickness":3.2,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[2.5,5.5],[2.5,3.5],[1.5,2.5]],"color":"#aaaf","thickness":3.2,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[6.5,4.5],[6.5,8.5]],"color":"#aaaf","thickness":3.2,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[8.5,3.5],[7.5,4.5],[7.5,2.5],[6.5,2.5]],"color":"#aaaf","thickness":3.2,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[8.5,1.5],[6.5,1.5],[7.5,0.5],[6.5,0.5]],"color":"#aaaf","thickness":3.2,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[8.5,5.5],[7.5,6.5],[7.5,8.5]],"color":"#aaaf","thickness":3.2,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,8.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#aaaf","thickness":1.28}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,8.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#aaaf","thickness":1.28}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,4.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#aaaf","thickness":1.28}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,5.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#aaaf","thickness":1.28}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,7.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#aaaf","thickness":1.28}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,1.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#aaaf","thickness":1.28}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,4.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#aaaf","thickness":1.28}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,8.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#aaaf","thickness":1.28}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,1.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#aaaf","thickness":1.28}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,2.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#aaaf","thickness":1.28}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,3.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#aaaf","thickness":1.28}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,2.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#aaaf","thickness":1.28}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,1.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#aaaf","thickness":1.28}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,0.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#aaaf","thickness":1.28}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,5.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#aaaf","thickness":1.28}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,8.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#aaaf","thickness":1.28}}
```

Normal sudoku rules apply. Place the digits 1-9 once each in every row, column and 3x3 box.
Digits along a line sum to the same total as the sum of the two connected circle digits, digits may repeat if other rules allow.
Cells separated by a V sum to 5.
