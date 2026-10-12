---
format: open-rules
title: Head into the Maelstrom
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/head-into-the-maelstrom
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r4c5-r4c6 total 3 connected true
cage-2: cage r4c4-r5c4 total 9 connected true
cage-3: cage r5c6-r5c7 total 15 connected true
pair-1: pair r1c5-r2c5 relation {"op":"sum","value":5}
pair-2: pair r3c5-r4c5 relation {"op":"sum","value":5}
pair-3: pair r5c3-r5c4 relation {"op":"sum","value":5}
pair-4: pair r5c1-r5c2 relation {"op":"sum","value":5}
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#FFE060","thickness":0,"opacity":0.5}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#FFE060","thickness":0,"opacity":0.5}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#FFE060","thickness":0,"opacity":0.5}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#FFE060","thickness":0,"opacity":0.5}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#FFE060","thickness":0,"opacity":0.5}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#FFE060","thickness":0,"opacity":0.5}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#FFE060","thickness":0,"opacity":0.5}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#FFE060","thickness":0,"opacity":0.5}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[5.5,4.5],[6.5,3.5],[6.5,2.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[5.5,5.5],[6.5,5.5],[7.5,4.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[4.5,5.5],[5.5,6.5],[6.5,6.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[3.5,5.5],[3.5,6.5],[4.5,7.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[3.5,4.5],[2.5,5.5],[2.5,6.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[3.5,3.5],[2.5,3.5],[1.5,4.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[4.5,3.5],[3.5,2.5],[2.5,2.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[5.5,3.5],[5.5,2.5],[4.5,1.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[6.5,7.5],[7.5,6.5],[8.5,6.5]],"color":"#FFA666","thickness":8,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[1.5,6.5],[2.5,7.5],[3.5,8.5]],"color":"#FFA666","thickness":8,"rounded":true}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[2.5,1.5],[1.5,2.5],[0.5,2.5]],"color":"#FFA666","thickness":8,"rounded":true}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[5.5,0.5],[6.5,1.5],[7.5,2.5]],"color":"#FFA666","thickness":8,"rounded":true}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[5.5,8.5],[6.5,8.5],[7.5,8.5]],"color":"#FFA666","thickness":8,"rounded":true}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[8.5,3.5],[8.5,2.5],[8.5,1.5]],"color":"#FFA666","thickness":8,"rounded":true}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[3.5,0.5],[2.5,0.5],[1.5,0.5]],"color":"#FFA666","thickness":8,"rounded":true}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[0.5,5.5],[0.5,6.5],[0.5,7.5]],"color":"#FFA666","thickness":8,"rounded":true}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[4.5,3.5],[4.5,4.5],[4.5,5.5]],"color":"#FF7383","thickness":8,"rounded":true}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"line","points":[[3.5,4.5],[4.5,4.5],[5.5,4.5]],"color":"#FF7383","thickness":8,"rounded":true}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"line","points":[[5.5,3.5],[4.5,4.5],[3.5,5.5]],"color":"#FF7383","thickness":8,"rounded":true}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"line","points":[[3.5,3.5],[4.5,4.5],[5.5,5.5]],"color":"#FF7383","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply. Numbers on ALL lines sum to 15. The four straight lines, of length three, crossing the middle of the puzzle are all to be considered separate from one another when calculating their sum. Numbers in cages sum to the number in the top left corner of the cage. Numbers with a V between them sum to 5. Not all possible V are given. Orange cells are all the same number.
