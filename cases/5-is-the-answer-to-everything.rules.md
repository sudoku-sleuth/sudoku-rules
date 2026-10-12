---
format: open-rules
title: 5 is the Answer to Everything
setter: Will Power
source: https://sudokupad.app/5vy2hq2jod
case: https://sudoku-sleuth.com/cases/5-is-the-answer-to-everything
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
kropki-1: kropki r1c2-r2c2 colour "white"
kropki-2: kropki r7c4-r7c5 colour "white"
pair-1: pair r7c1-r8c1 relation {"op":"sum","value":5}
pair-2: pair r6c2-r6c3 relation {"op":"sum","value":5}
pair-3: pair r7c4-r8c4 relation {"op":"sum","value":5}
pair-4: pair r7c8-r8c8 relation {"op":"sum","value":5}
pair-5: pair r8c7-r9c7 relation {"op":"sum","value":5}
pair-6: pair r5c9-r6c9 relation {"op":"sum","value":5}
pair-7: pair r2c8-r3c8 relation {"op":"sum","value":5}
pair-8: pair r6c5-r7c5 relation {"op":"sum","value":5}
pair-9: pair r5c5-r5c6 relation {"op":"sum","value":5}
pair-10: pair r2c1-r3c1 relation {"op":"sum","value":5}
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[0.5,0.5],[1.5,1.5]],"color":"#37FF00","thickness":8,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[1.5,8.5],[2.5,7.5]],"color":"#37FF00","thickness":8,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[4.5,0.5],[3.5,1.5]],"color":"#37FF00","thickness":8,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[2.5,2.5],[1.5,3.5]],"color":"#37FF00","thickness":8,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[0.5,3.5],[1.5,3.5]],"color":"#37FF00","thickness":8,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[4.5,8.5],[5.5,7.5]],"color":"#37FF00","thickness":8,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[6.5,8.5],[7.5,7.5]],"color":"#37FF00","thickness":8,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[3.5,4.5],[4.5,5.5],[5.5,6.5]],"color":"#37FF00","thickness":8,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[0.5,7.5],[1.5,6.5]],"color":"#37FF00","thickness":8,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[8.5,7.5],[8.5,6.5]],"color":"#37FF00","thickness":8,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[6.5,5.5],[6.5,4.5]],"color":"#37FF00","thickness":8,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[5.5,3.5],[6.5,4.5]],"color":"#37FF00","thickness":8,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[4.5,2.5],[5.5,3.5]],"color":"#37FF00","thickness":8,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[7.5,1.5],[7.5,0.5]],"color":"#37FF00","thickness":8,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[6.5,1.5],[6.5,0.5]],"color":"#37FF00","thickness":8,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[2.5,1.5],[1.5,0.5]],"color":"#37FF00","thickness":8,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[8.5,3.5],[7.5,3.5]],"color":"#37FF00","thickness":8,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[7.5,4.5],[8.5,5.5]],"color":"#37FF00","thickness":8,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[7.5,8.5],[6.5,7.5]],"color":"#37FF00","thickness":8,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[4.5,4.5],[5.5,5.5]],"color":"#37FF00","thickness":8,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[2.5,6.5],[1.5,7.5]],"color":"#37FF00","thickness":8,"rounded":true}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[0.5,2.5],[0.5,3.5]],"color":"#37FF00","thickness":8,"rounded":true}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[4.5,1.5],[5.5,1.5]],"color":"#37FF00","thickness":8,"rounded":true}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[5.5,2.5],[6.5,2.5],[7.5,3.5]],"color":"#37FF00","thickness":8,"rounded":true}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[2.5,4.5],[3.5,3.5],[3.5,2.5],[4.5,2.5]],"color":"#37FF00","thickness":8,"rounded":true}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[1.5,4.5],[2.5,5.5]],"color":"#37FF00","thickness":8,"rounded":true}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[3.5,6.5],[4.5,7.5]],"color":"#37FF00","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply.  Numbers separated by a V sum to 5.  All numbers on green Whispers Lines are EXACTLY 5 apart from their neighbors on the line.  Numbers can repeat on Whispers Lines, if other rules allow.  Numbers separated by a white dot are consecutive.
