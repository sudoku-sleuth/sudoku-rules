---
format: open-rules
title: Same Difference
setter: Marty Sears
source: https://sudokupad.app/j6vya0fy36
case: https://sudoku-sleuth.com/cases/same-difference
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 167eeaded20f48a283066ae82e50de94
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,4.5],"width":0.494,"height":0.494,"rounded":false,"fill":"#FFD966","thickness":0,"opacity":0.5,"angle":45}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,4.5],"width":0.494,"height":0.494,"rounded":false,"fill":"#FFD966","thickness":0,"opacity":0.5,"angle":45}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,3.5],"width":0.494,"height":0.494,"rounded":false,"fill":"#FFD966","thickness":0,"opacity":0.5,"angle":45}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,3.5],"width":0.494,"height":0.494,"rounded":false,"fill":"#FFD966","thickness":0,"opacity":0.5,"angle":45}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,5.5],"width":0.494,"height":0.494,"rounded":false,"fill":"#FFD966","thickness":0,"opacity":0.5,"angle":45}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,5.5],"width":0.494,"height":0.494,"rounded":false,"fill":"#FFD966","thickness":0,"opacity":0.5,"angle":45}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,4.5],"width":0.494,"height":0.494,"rounded":false,"fill":"#FFD966","thickness":0,"opacity":0.5,"angle":45}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,4.5],"width":0.494,"height":0.494,"rounded":false,"fill":"#FFD966","thickness":0,"opacity":0.5,"angle":45}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[1.5,0.5],[0.5,1.5],[1.5,2.5]],"color":"#92FFF5","thickness":11,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[0.5,8.5],[1.5,7.5],[2.5,8.5]],"color":"#92FFF5","thickness":11,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[1.5,3.5],[2.5,2.5],[1.5,1.5],[2.5,0.5],[3.5,1.5],[3.5,0.5]],"color":"#92FFF5","thickness":11,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[2.5,4.5],[2.5,6.5]],"color":"#92FFF5","thickness":11,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[3.5,3.5],[4.5,2.5],[5.5,2.5]],"color":"#92FFF5","thickness":11,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[3.5,5.5],[5.5,3.5],[7.5,3.5]],"color":"#92FFF5","thickness":11,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[3.5,8.5],[4.5,8.5],[5.5,7.5]],"color":"#92FFF5","thickness":11,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[4.5,6.5],[6.5,4.5]],"color":"#92FFF5","thickness":11,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[5.5,8.5],[6.5,8.5],[7.5,7.5]],"color":"#92FFF5","thickness":11,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[6.5,0.5],[8.5,0.5]],"color":"#92FFF5","thickness":11,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[6.5,7.5],[6.5,6.5],[7.5,5.5]],"color":"#92FFF5","thickness":11,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[7.5,4.5],[8.5,4.5],[8.5,5.5]],"color":"#92FFF5","thickness":11,"rounded":true}}
```

• Normal sudoku rules apply

• Turquoise lines are 'Same Difference' lines. Each pair of adjacent digits on one of these lines has the same difference. However, this 'difference value' may be different for different lines.

• A digit in an orange diamond indicates how many lines have a difference value equal to that diamond digit. Eg: a 3 in a diamond indicates that there are 3 lines whose adjacent digits differ by 3.
