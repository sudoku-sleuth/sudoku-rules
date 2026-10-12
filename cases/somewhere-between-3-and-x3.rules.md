---
format: open-rules
title: Somewhere Between +3 and x3
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/somewhere-between-3-and-x3
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r4c6=7 r4c9=5 r6c1=7
---

```rules
sudoku 9x9
cage-1: cage r2c4-r3c4 total 15 connected true
cage-2: cage r1c1-r1c2 total 17 connected true
pair-1: pair r1c6-r1c7 relation {"op":"difference","value":3}
pair-2: pair r9c2-r9c3 relation {"op":"difference","value":3}
pair-3: pair r8c3-r9c3 relation {"op":"difference","value":3}
pair-4: pair r4c7-r5c7 relation {"op":"ratio","value":3}
pair-5: pair r3c7-r4c7 relation {"op":"ratio","value":3}
pair-6: pair r3c7-r3c8 relation {"op":"ratio","value":3}
pair-7: pair r2c8-r3c8 relation {"op":"ratio","value":3}
pair-8: pair r5c1-r5c2 relation {"op":"ratio","value":3}
pair-9: pair r8c7-r8c8 relation {"op":"ratio","value":3}
pair-10: pair r5c5-r6c5 relation {"op":"ratio","value":3}
pair-11: pair r3c1-r3c2 relation {"op":"ratio","value":3}
pair-12: pair r8c9-r9c9 relation {"op":"ratio","value":3}
```

```drawing
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[3.5,8.5],[4.5,8.5],[5.5,8.5]],"color":"#e0e0e0","thickness":8,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[3.5,0.5],[4.5,0.5],[5.5,0.5]],"color":"#e0e0e0","thickness":8,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[3.5,3.5],[4.5,3.5],[5.5,3.5]],"color":"#e0e0e0","thickness":8,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[5.5,3.5],[5.5,4.5],[5.5,5.5]],"color":"#e0e0e0","thickness":8,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[5.5,5.5],[4.5,5.5],[3.5,5.5]],"color":"#e0e0e0","thickness":8,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[3.5,5.5],[3.5,4.5],[3.5,3.5]],"color":"#e0e0e0","thickness":8,"rounded":true}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[5.5,0.5],[5.5,1.5],[5.5,2.5],[5.5,3.5]],"color":"#e0e0e0","thickness":8,"rounded":true}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[5.5,5.5],[5.5,6.5],[5.5,7.5],[5.5,8.5]],"color":"#e0e0e0","thickness":8,"rounded":true}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"line","points":[[3.5,0.5],[2.5,1.5],[1.5,2.5],[0.5,3.5]],"color":"#e0e0e0","thickness":8,"rounded":true}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"line","points":[[0.5,3.5],[0.5,4.5],[0.5,5.5]],"color":"#e0e0e0","thickness":8,"rounded":true}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"line","points":[[0.5,5.5],[1.5,6.5],[2.5,7.5],[3.5,8.5]],"color":"#e0e0e0","thickness":8,"rounded":true}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"line","points":[[0.5,3.5],[1.5,3.5],[2.5,3.5],[3.5,3.5]],"color":"#e0e0e0","thickness":8,"rounded":true}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"line","points":[[0.5,5.5],[1.5,5.5],[2.5,5.5],[3.5,5.5]],"color":"#e0e0e0","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply. Numbers on lines are between the numbers in the circles at the end of that line. Lines end when they reach a dot, and do not pass through dots. Numbers do not repeat on lines. Numbers with a black dot between them are in a ratio of 3:1. Numbers with a white dot between them have a difference of 3. Not all possible dots are given. Numbers in cages sum to the number in the top left corner of the cage.
