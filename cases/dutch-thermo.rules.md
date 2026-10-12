---
format: open-rules
title: Dutch-Thermo
setter: The Bard
source: ""
case: https://sudoku-sleuth.com/cases/dutch-thermo
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[6.5,0.5],[6.5,1.5],[6.5,2.5],[7.5,3.5],[7.5,4.5],[7.5,5.5],[8.5,6.5],[8.5,7.5],[8.5,8.5]],"color":"#FF9100","thickness":12.8,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[2.5,0.5],[2.5,1.5],[2.5,2.5],[1.5,3.5],[1.5,4.5],[1.5,5.5],[0.5,6.5],[0.5,7.5],[0.5,8.5]],"color":"#FF9100","thickness":12.8,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[6.5,3.5],[5.5,4.5],[4.5,5.5],[3.5,6.5],[2.5,7.5]],"color":"#FF9100","thickness":12.8,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[5.5,1.5],[4.5,2.5],[3.5,3.5],[2.5,4.5]],"color":"#FF9100","thickness":12.8,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[7.5,6.5],[6.5,7.5],[5.5,8.5]],"color":"#FF9100","thickness":12.8,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[8.5,3.5],[8.5,2.5],[8.5,1.5],[8.5,0.5]],"color":"#FF9100","thickness":12.8,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,0.5],"width":0.7,"height":0.7,"rounded":true,"fill":"#FF9100","stroke":"#FFFFFF","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,0.5],"width":0.7,"height":0.7,"rounded":true,"fill":"#FF9100","stroke":"#FFFFFF","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,3.5],"width":0.7,"height":0.7,"rounded":true,"fill":"#FF9100","stroke":"#FFFFFF","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,4.5],"width":0.7,"height":0.7,"rounded":true,"fill":"#FF9100","stroke":"#FFFFFF","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,6.5],"width":0.7,"height":0.7,"rounded":true,"fill":"#FF9100","stroke":"#FFFFFF","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,3.5],"width":0.7,"height":0.7,"rounded":true,"fill":"#FF9100","stroke":"#FFFFFF","thickness":1,"textColor":"#000000","opacity":0.5}}
```

Introducing Dutch-Thermos!
A new rule set for the new year 2024.
Normal Sudoku rules apply, place the digits 1-9 in each row, column, and box.
Dutch-Thermos: Digits along the thermos exist in two distinct sets which alternate positions along the line, both sets increase in value from the bulb end but are independent from each other regarding their increasing values, also all digits on the line must have a difference of at least four between each consecutive digit regardless of which set they belong to.
