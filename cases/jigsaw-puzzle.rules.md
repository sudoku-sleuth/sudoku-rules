---
format: open-rules
title: Jigsaw Puzzle
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/jigsaw-puzzle
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r4c5-r4c6 total 11 connected true
cage-2: cage r4c4-r5c4 total 11 connected true
cage-3: cage r5c5-r5c6 total 11 connected true
cage-4: cage r6c5-r6c6 total 11 connected true
cage-5: cage r9c2-r9c3 total 8 connected true
cage-6: cage r7c2-r7c3 total 10 connected true
cage-7: cage r7c7-r8c7 total 10 connected true
cage-8: cage r6c9-r7c9 total 10 connected true
cage-9: cage r2c6-r2c7 total 10 connected true
cage-10: cage r1c4-r2c4 total 14 connected true
pair-1: pair r1c6-r2c6 relation {"op":"sum","value":5}
pair-2: pair r2c8-r3c8 relation {"op":"sum","value":5}
pair-3: pair r6c2-r7c2 relation {"op":"sum","value":5}
pair-4: pair r7c4-r8c4 relation {"op":"sum","value":5}
pair-5: pair r8c7-r9c7 relation {"op":"sum","value":5}
pair-6: pair r5c8-r5c9 relation {"op":"sum","value":5}
pair-7: pair r3c1-r4c1 relation {"op":"sum","value":5}
pair-8: pair r5c4-r6c4 relation {"op":"sum","value":5}
```

```drawing
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[6.5,7.5],[5.5,7.5],[4.5,7.5],[3.5,7.5],[2.5,7.5]],"color":"#7DCBFF","thickness":8,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[3.5,7.5],[3.5,8.5],[4.5,8.5],[5.5,8.5]],"color":"#7DCBFF","thickness":8,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[5.5,8.5],[5.5,7.5]],"color":"#7DCBFF","thickness":8,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[3.5,7.5],[3.5,6.5]],"color":"#7DCBFF","thickness":8,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[5.5,7.5],[5.5,6.5]],"color":"#7DCBFF","thickness":8,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[0.5,3.5],[0.5,4.5],[0.5,5.5]],"color":"#7DCBFF","thickness":8,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[0.5,4.5],[1.5,4.5],[2.5,4.5],[3.5,4.5]],"color":"#7DCBFF","thickness":8,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[2.5,3.5],[2.5,4.5],[2.5,5.5]],"color":"#7DCBFF","thickness":8,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[5.5,4.5],[6.5,4.5],[7.5,4.5],[8.5,4.5]],"color":"#7DCBFF","thickness":8,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[8.5,3.5],[8.5,4.5],[8.5,5.5]],"color":"#7DCBFF","thickness":8,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[6.5,3.5],[6.5,4.5],[6.5,5.5]],"color":"#7DCBFF","thickness":8,"rounded":true}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[2.5,1.5],[3.5,1.5],[4.5,1.5],[5.5,1.5],[6.5,1.5]],"color":"#7DCBFF","thickness":8,"rounded":true}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[3.5,1.5],[3.5,0.5],[4.5,0.5],[5.5,0.5],[5.5,1.5],[5.5,2.5]],"color":"#7DCBFF","thickness":8,"rounded":true}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[3.5,1.5],[3.5,2.5]],"color":"#7DCBFF","thickness":8,"rounded":true}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[2.5,6.5],[1.5,6.5],[0.5,6.5],[0.5,7.5],[0.5,8.5],[1.5,8.5],[2.5,8.5]],"color":"#FF8088","thickness":8,"rounded":true}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[1.5,5.5],[1.5,6.5],[1.5,7.5],[1.5,8.5]],"color":"#FF8088","thickness":8,"rounded":true}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[2.5,0.5],[1.5,0.5],[0.5,0.5],[0.5,1.5],[0.5,2.5],[1.5,2.5],[2.5,2.5]],"color":"#FF8088","thickness":8,"rounded":true}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[1.5,3.5],[1.5,2.5],[1.5,1.5],[1.5,0.5]],"color":"#FF8088","thickness":8,"rounded":true}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"line","points":[[6.5,0.5],[7.5,0.5],[8.5,0.5],[8.5,1.5],[8.5,2.5],[7.5,2.5],[6.5,2.5]],"color":"#FF8088","thickness":8,"rounded":true}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"line","points":[[7.5,3.5],[7.5,2.5],[7.5,1.5],[7.5,0.5]],"color":"#FF8088","thickness":8,"rounded":true}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"line","points":[[6.5,6.5],[7.5,6.5],[8.5,6.5],[8.5,7.5],[8.5,8.5],[7.5,8.5],[6.5,8.5]],"color":"#FF8088","thickness":8,"rounded":true}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"line","points":[[7.5,8.5],[7.5,7.5],[7.5,6.5],[7.5,5.5]],"color":"#FF8088","thickness":8,"rounded":true}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"line","points":[[4.5,2.5],[4.5,3.5],[4.5,4.5],[4.5,5.5],[4.5,6.5]],"color":"#FF8088","thickness":8,"rounded":true}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"line","points":[[3.5,5.5],[4.5,5.5],[5.5,5.5]],"color":"#FF8088","thickness":8,"rounded":true}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"line","points":[[3.5,3.5],[4.5,3.5],[5.5,3.5]],"color":"#FF8088","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply. Numbers on lines have the same sum as all other lines. Numbers on blue lines may repeat. Numbers on red lines do not repeat. Numbers in cages sum to the number in the top left corner of the cage. Numbers with a V between them sum to 5. Not all V are given.
