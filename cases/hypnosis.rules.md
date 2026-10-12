---
format: open-rules
title: Hypnosis
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/hypnosis
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
---

```rules
sudoku 9x9
cage-1: cage r1c8-r2c8 total 16 connected true
cage-2: cage r8c8-r8c9 total 13 connected true
cage-3: cage r8c2-r9c2 total 6 connected true
cage-4: cage r2c1-r2c2 total 4 connected true
```

```drawing
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[5.5,7.5],[6.5,6.5],[7.5,5.5],[7.5,4.5],[7.5,3.5]],"color":"#e0e0e0","thickness":8,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[7.5,3.5],[6.5,2.5],[5.5,1.5],[4.5,1.5],[3.5,1.5]],"color":"#e0e0e0","thickness":8,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[3.5,1.5],[2.5,2.5],[1.5,3.5],[1.5,4.5],[1.5,5.5]],"color":"#e0e0e0","thickness":8,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[1.5,5.5],[2.5,6.5],[3.5,7.5],[4.5,7.5],[5.5,7.5]],"color":"#e0e0e0","thickness":8,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[4.5,2.5],[3.5,3.5],[2.5,4.5],[3.5,5.5],[4.5,6.5],[5.5,5.5],[6.5,4.5],[5.5,3.5],[4.5,4.5]],"color":"#e0e0e0","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply. CONSECUTIVE BETWEEN LINES- All numbers on the five between lines, including the endpoints, are consecutive with their neighbors on the line. Numbers do not repeat on between lines. KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage.
