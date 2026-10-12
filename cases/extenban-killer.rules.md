---
format: open-rules
title: Extenban Killer
setter: Blobz
source: https://sudokupad.app/d0g3m51z53
case: https://sudoku-sleuth.com/cases/extenban-killer
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
---

```rules
sudoku 9x9
cage-1: cage r4c3-r5c3-r6c3 total 11 connected true
cage-2: cage r4c7-r5c7-r6c7 total 19 connected true
cage-3: cage r9c4-r9c5 total 13 connected true
cage-4: cage r2c1-r3c1 total 13 connected true
```

```drawing
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[4.5,2.5],[4.5,3.5],[3.5,4.5],[3.5,5.5],[3.5,6.5]],"color":"#FF7AED","thickness":11.2,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[4.5,6.5],[4.5,5.5],[5.5,4.5],[5.5,3.5],[5.5,2.5]],"color":"#FF7AED","thickness":11.2,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[3.5,3.5],[2.5,3.5],[1.5,3.5],[0.5,2.5]],"color":"#FF7AED","thickness":11.2,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[0.5,3.5],[0.5,4.5],[0.5,5.5],[1.5,6.5]],"color":"#FF7AED","thickness":11.2,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[5.5,5.5],[6.5,5.5],[7.5,5.5],[8.5,4.5]],"color":"#FF7AED","thickness":11.2,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[8.5,3.5],[8.5,2.5],[7.5,1.5],[7.5,0.5]],"color":"#FF7AED","thickness":11.2,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[2.5,2.5],[2.5,1.5],[2.5,0.5],[3.5,0.5]],"color":"#FF7AED","thickness":11.2,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[8.5,6.5],[7.5,6.5],[6.5,6.5],[5.5,7.5]],"color":"#FF7AED","thickness":11.2,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[6.5,0.5],[6.5,1.5],[7.5,2.5],[7.5,3.5]],"color":"#FF7AED","thickness":11.2,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[4.5,7.5],[3.5,7.5],[2.5,7.5],[1.5,7.5],[0.5,8.5],[1.5,8.5],[2.5,8.5]],"color":"#FF7AED","thickness":11.2,"rounded":true}}
```

Normal sudoku rules apply.

Killer: Digits in a cage sum to the small number given.

Extended Renbans: Digits along a pink line form a consecutive group in any order. Digits do not repeat on the line EXCEPT for the ends, which are the SAME digit.

For example, possible fills for a line of length 5 might be 64756, 25342, 34123, etc.
