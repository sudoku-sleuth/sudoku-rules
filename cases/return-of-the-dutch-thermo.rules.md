---
format: open-rules
title: Return of the Dutch-Thermo
setter: The Bard
source: ""
case: https://sudoku-sleuth.com/cases/return-of-the-dutch-thermo
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
pair-1: pair r7c5-r7c6 relation {"op":"sum","value":10}
pair-2: pair r6c8-r6c9 relation {"op":"sum","value":10}
pair-3: pair r2c7-r2c8 relation {"op":"sum","value":10}
pair-4: pair r7c1-r8c1 relation {"op":"sum","value":10}
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[8.5,4.5],[7.5,3.5],[6.5,2.5],[5.5,1.5],[4.5,0.5],[3.5,1.5],[2.5,2.5],[1.5,3.5],[0.5,4.5]],"color":"#FFA200","thickness":11.2,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[1.5,4.5],[2.5,5.5],[3.5,6.5],[4.5,7.5],[5.5,6.5],[6.5,5.5],[7.5,4.5]],"color":"#FFA200","thickness":11.2,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[5.5,3.5],[4.5,2.5],[3.5,3.5]],"color":"#FFA200","thickness":11.2,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[5.5,5.5],[4.5,6.5],[3.5,5.5]],"color":"#FFA200","thickness":11.2,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[8.5,8.5],[7.5,8.5],[6.5,8.5],[5.5,8.5]],"color":"#FFA200","thickness":11.2,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[0.5,7.5],[0.5,8.5],[1.5,8.5],[2.5,8.5],[3.5,8.5]],"color":"#FFA200","thickness":11.2,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,4.5],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFA200","stroke":"#FFA200","thickness":1,"textColor":"#FFA200","opacity":0.5}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,4.5],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFA200","stroke":"#FFA200","thickness":1,"textColor":"#FFA200","opacity":0.5}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,3.5],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFA200","stroke":"#FFA200","thickness":1,"textColor":"#FFA200","opacity":0.5}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,5.5],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFA200","stroke":"#FFA200","thickness":1,"textColor":"#FFA200","opacity":0.5}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,8.5],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFA200","stroke":"#FFA200","thickness":1,"textColor":"#FFA200","opacity":0.5}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,7.5],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFA200","stroke":"#FFA200","thickness":1,"textColor":"#FFA200","opacity":0.5}}
```

Normal Sudoku rules apply, place the digits 1-9 in each row, column, and box.
Dutch-Thermos: Digits along the thermos exist in two distinct sets which alternate positions along the line, both sets increase in value from the bulb end but are independent from each other regarding their increasing values, also all digits on the line must have a difference of at least four between each consecutive digit regardless of which set they belong to.
Digits with an X between them add to 10.
