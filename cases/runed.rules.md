---
format: open-rules
title: Runed!
setter: Timotab
source: https://sudokupad.app/8yl3jkjmox
case: https://sudoku-sleuth.com/cases/runed
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r1c3 total 24 connected true
cage-2: cage r2c4-r2c5-r2c6 total 23 connected true
cage-3: cage r3c7-r3c8-r3c9 total 22 connected true
cage-4: cage r9c7-r9c8-r9c9 total 6 connected true
cage-5: cage r8c4-r8c5-r8c6 total 7 connected true
cage-6: cage r7c1-r7c2-r7c3 total 8 connected true
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[2.5,0.5],[0.5,0.5],[0.5,1.5],[2.5,1.5]],"color":"#ed8acbff","thickness":9.6,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[0.5,2.5],[2.5,2.5]],"color":"#ed8acbff","thickness":9.6,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[0.5,3.5],[1.5,4.5],[2.5,4.5]],"color":"#ed8acbff","thickness":9.6,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[2.5,3.5],[1.5,4.5],[0.5,4.5]],"color":"#ed8acbff","thickness":9.6,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[1.5,4.5],[0.5,5.5]],"color":"#ed8acbff","thickness":9.6,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[2.5,7.5],[2.5,6.5],[1.5,7.5],[2.5,8.5]],"color":"#ed8acbff","thickness":9.6,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[1.5,7.5],[0.5,8.5]],"color":"#ed8acbff","thickness":9.6,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[0.5,6.5],[1.5,6.5]],"color":"#ed8acbff","thickness":9.6,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[6.5,6.5],[8.5,6.5],[7.5,7.5]],"color":"#ed8acbff","thickness":9.6,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[7.5,6.5],[6.5,7.5]],"color":"#ed8acbff","thickness":9.6,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[8.5,1.5],[8.5,0.5],[7.5,1.5],[8.5,2.5]],"color":"#ed8acbff","thickness":9.6,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[6.5,2.5],[7.5,1.5],[6.5,0.5]],"color":"#ed8acbff","thickness":9.6,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[5.5,2.5],[3.5,2.5],[3.5,0.5]],"color":"#ed8acbff","thickness":9.6,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[4.5,2.5],[4.5,1.5]],"color":"#ed8acbff","thickness":9.6,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[3.5,7.5],[3.5,6.5],[5.5,8.5]],"color":"#ed8acbff","thickness":9.6,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[6.5,3.5],[8.5,5.5],[6.5,5.5]],"color":"#ed8acbff","thickness":9.6,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[3.5,3.5],[5.5,5.5]],"color":"#ed8acbff","thickness":9.6,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[4.5,5.5],[4.5,4.5],[5.5,4.5]],"color":"#ed8acbff","thickness":9.6,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[4.5,4.5],[4.5,3.5]],"color":"#ed8acbff","thickness":9.6,"rounded":true}}
```

• Normal sudoku rules apply.
• Killer cages: digits in cages sum to the value in the top left corner
• Magic sigils: within each 3x3 box, straight magenta line segments have the same sum.
