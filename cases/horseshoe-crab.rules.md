---
format: open-rules
title: Horseshoe Crab
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/horseshoe-crab
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r7c8-r7c9-r8c9 total 13 connected true
cage-2: cage r9c7-r9c8-r9c9 total 19 connected true
cage-3: cage r9c2-r9c3 total 11 connected true
cage-4: cage r9c4-r9c5 total 11 connected true
kropki-1: kropki r5c7-r5c8 colour "black"
kropki-2: kropki r5c1-r6c1 colour "black"
kropki-3: kropki r4c1-r5c1 colour "black"
pair-1: pair r3c8-r4c8 relation {"op":"sum","value":5}
pair-2: pair r3c7-r3c8 relation {"op":"sum","value":5}
pair-3: pair r4c8-r4c9 relation {"op":"sum","value":5}
pair-4: pair r8c3-r8c4 relation {"op":"sum","value":5}
pair-5: pair r7c2-r8c2 relation {"op":"sum","value":5}
pair-6: pair r4c3-r4c4 relation {"op":"sum","value":5}
pair-7: pair r6c4-r6c5 relation {"op":"sum","value":5}
```

```drawing
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[0.5,4.5],[0.5,5.5],[0.5,6.5],[1.5,6.5],[2.5,7.5],[2.5,8.5],[3.5,8.5],[4.5,8.5]],"color":"#87A1FF","thickness":8,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[0.5,7.5],[1.5,7.5],[1.5,8.5]],"color":"#87A1FF","thickness":8,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[4.5,0.5],[5.5,0.5],[6.5,1.5],[7.5,2.5],[8.5,3.5],[8.5,4.5]],"color":"#87A1FF","thickness":8,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[4.5,6.5],[3.5,7.5],[2.5,6.5],[1.5,5.5],[2.5,4.5],[3.5,3.5]],"color":"#87A1FF","thickness":8,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[1.5,4.5],[1.5,3.5],[0.5,3.5]],"color":"#87A1FF","thickness":8,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[3.5,5.5],[4.5,4.5],[5.5,3.5]],"color":"#87A1FF","thickness":8,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[4.5,2.5],[5.5,3.5],[6.5,4.5]],"color":"#87A1FF","thickness":8,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[6.5,6.5],[6.5,7.5],[6.5,8.5],[7.5,8.5]],"color":"#87A1FF","thickness":8,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[8.5,8.5],[8.5,7.5],[8.5,6.5],[7.5,6.5]],"color":"#87A1FF","thickness":8,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[5.5,6.5],[5.5,7.5],[5.5,8.5]],"color":"#87A1FF","thickness":8,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[0.5,2.5],[1.5,2.5],[2.5,2.5]],"color":"#87A1FF","thickness":8,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[1.5,0.5],[2.5,0.5],[3.5,0.5],[3.5,1.5]],"color":"#87A1FF","thickness":8,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[7.5,0.5],[8.5,0.5],[8.5,1.5],[7.5,1.5]],"color":"#87A1FF","thickness":8,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[7.5,1.5],[7.5,0.5]],"color":"#87A1FF","thickness":8,"rounded":true}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,3],"width":0,"height":0,"rounded":false,"thickness":0,"text":"     11","textColor":"#000000","fontSize":14}}
```

Normal Sudoku rules apply. Numbers on blue lines sum to 20. Numbers in cages sum to the number in the top left corner of the cage. Where the number is blocked by a line, the number is repeated below for visibility. Numbers with a black dot between them are in a ratio of 2:1. Numbers with a V between them sum to 5. Not all possible dots and V are given.
