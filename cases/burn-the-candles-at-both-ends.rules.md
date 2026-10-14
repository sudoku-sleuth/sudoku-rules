---
format: open-rules
title: Burn the Candles at Both Ends
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/burn-the-candles-at-both-ends
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 5579ec57abf3c3128bccd778636da640
---

```rules
sudoku 9x9
cage-1: cage r8c6-r9c6 total 5 connected true
cage-2: cage r5c2-r6c2 total 12 connected true
```

```drawing
- {"id":"drawing-3","rules":[],"visual":{"kind":"cage","cells":[8],"label":"14","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"cage","cells":[7],"label":"5","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[61],"label":"14","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[72],"label":"10","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"cage","cells":[2],"label":"11","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"cage","cells":[0],"label":"11","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"cage","cells":[27],"label":"8","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"cage","cells":[3],"label":"8","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"cage","cells":[4],"label":"9","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"cage","cells":[6],"label":"10","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[0.5,8.5],[1.5,8.5],[2.5,8.5],[3.5,8.5],[4.5,8.5]],"color":"#e0e0e0","thickness":8,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[8.5,8.5],[7.5,8.5],[6.5,8.5],[5.5,7.5],[4.5,7.5],[3.5,7.5],[2.5,6.5],[1.5,6.5],[0.5,6.5]],"color":"#e0e0e0","thickness":8,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[0.5,7.5],[1.5,7.5],[2.5,7.5]],"color":"#e0e0e0","thickness":8,"rounded":true}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[0.5,4.5],[1.5,4.5],[2.5,4.5],[3.5,5.5],[4.5,5.5],[5.5,6.5],[6.5,6.5],[7.5,6.5]],"color":"#e0e0e0","thickness":8,"rounded":true}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[8.5,7.5],[7.5,7.5],[6.5,7.5]],"color":"#e0e0e0","thickness":8,"rounded":true}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"line","points":[[8.5,6.5],[8.5,5.5],[8.5,4.5],[8.5,3.5],[8.5,2.5],[8.5,1.5],[8.5,0.5]],"color":"#e0e0e0","thickness":8,"rounded":true}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"line","points":[[7.5,2.5],[7.5,1.5],[6.5,1.5],[5.5,1.5],[5.5,0.5],[4.5,0.5],[3.5,0.5]],"color":"#e0e0e0","thickness":8,"rounded":true}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"line","points":[[5.5,2.5],[4.5,1.5],[3.5,1.5],[2.5,0.5],[1.5,0.5],[0.5,0.5]],"color":"#e0e0e0","thickness":8,"rounded":true}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"line","points":[[0.5,2.5],[1.5,2.5],[2.5,2.5],[3.5,3.5],[4.5,3.5],[5.5,4.5],[6.5,4.5],[7.5,4.5]],"color":"#e0e0e0","thickness":8,"rounded":true}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"line","points":[[0.5,3.5],[1.5,3.5],[2.5,3.5],[3.5,4.5],[4.5,4.5],[5.5,5.5]],"color":"#e0e0e0","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply. Numbers on lines are between the numbers in the circles at the ends of the line. Numbers can repeat on lines, if other rules allow. Numbers in two-cell cages sum to the clue in the top left corner of the cage. Clues in the top left corner of cages with a circle are the sum of the numbers in the two circles on that line.
