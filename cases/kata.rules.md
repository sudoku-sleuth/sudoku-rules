---
format: open-rules
title: Kata
setter: Timotab
source: https://sudokupad.app/edc1bsyz6h
case: https://sudoku-sleuth.com/cases/kata
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - A feature in the source still needs a drawing definition.
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,1.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#cccf","thickness":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,5.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#cccf","thickness":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,7.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#cccf","thickness":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,3.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#cccf","thickness":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,8.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#cccf","thickness":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[0.5,1.5],[3.5,1.5],[4.5,0.5]],"color":"#cccf","thickness":19,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[0.5,1.5],[3.5,1.5],[4.5,2.5]],"color":"#cccf","thickness":19,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[0.5,1.5],[1.5,1.5],[1.5,2.5]],"color":"#cccf","thickness":19,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[7.5,5.5],[4.5,5.5],[4.5,4.5]],"color":"#cccf","thickness":19,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[7.5,5.5],[3.5,5.5]],"color":"#cccf","thickness":19,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[7.5,5.5],[6.5,5.5],[7.5,4.5]],"color":"#cccf","thickness":19,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[7.5,5.5],[6.5,5.5],[7.5,6.5]],"color":"#cccf","thickness":19,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[3.5,7.5],[7.5,7.5]],"color":"#cccf","thickness":19,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[3.5,7.5],[6.5,7.5],[5.5,8.5]],"color":"#cccf","thickness":19,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[3.5,7.5],[4.5,7.5],[4.5,6.5]],"color":"#cccf","thickness":19,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[5.5,3.5],[6.5,2.5],[7.5,3.5],[7.5,2.5]],"color":"#cccf","thickness":19,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[1.5,8.5],[1.5,4.5],[0.5,3.5]],"color":"#cccf","thickness":19,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[1.5,8.5],[1.5,4.5],[0.5,5.5]],"color":"#cccf","thickness":19,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[1.5,8.5],[1.5,7.5],[0.5,7.5]],"color":"#cccf","thickness":19,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,1.5],"width":0.4,"height":0.2,"rounded":false,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,5.5],"width":0.4,"height":0.2,"rounded":false,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,7.5],"width":0.4,"height":0.2,"rounded":false,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,1.5],"width":0.4,"height":0.2,"rounded":false,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,5.5],"width":0.4,"height":0.2,"rounded":false,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,5],"width":0.2,"height":0.4,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,7],"width":0.2,"height":0.4,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
```

Oops - it looks like one of the students left his belt somewhere else in the Dojo!

• Normal sudoku rules apply.
• Digits along a grey karateka strictly increase from the head end.
• Digits separated by a white belt are consecutive. Digits separated by a black belt are in a 2:1 ratio.
