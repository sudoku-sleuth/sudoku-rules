---
format: open-rules
title: Extended Renbans
setter: Blobz
source: https://sudokupad.app/0oqhelat6t
case: https://sudoku-sleuth.com/cases/extended-renbans
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r1c8=7 r2c9=4 r9c2=4
exported: 1c1b218976f1956c9f5a2325186d387e
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[5.5,3.5],[4.5,3.5],[3.5,3.5],[2.5,2.5]],"color":"#FA76D9","thickness":11.2,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[5.5,4.5],[4.5,4.5],[3.5,4.5],[2.5,3.5],[1.5,2.5]],"color":"#FA76D9","thickness":11.2,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[5.5,5.5],[4.5,5.5],[3.5,5.5],[2.5,4.5],[1.5,3.5],[0.5,2.5]],"color":"#FA76D9","thickness":11.2,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[5.5,2.5],[6.5,3.5],[6.5,4.5],[6.5,5.5]],"color":"#FA76D9","thickness":11.2,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[5.5,1.5],[6.5,2.5],[7.5,3.5],[7.5,4.5],[7.5,5.5]],"color":"#FA76D9","thickness":11.2,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[7.5,0.5],[7.5,1.5],[7.5,2.5],[8.5,3.5]],"color":"#FA76D9","thickness":11.2,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[8.5,5.5],[8.5,6.5],[7.5,6.5],[7.5,7.5],[6.5,7.5]],"color":"#FA76D9","thickness":11.2,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[8.5,7.5],[7.5,8.5],[6.5,8.5],[5.5,8.5]],"color":"#FA76D9","thickness":11.2,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[2.5,1.5],[3.5,1.5],[4.5,2.5],[3.5,2.5]],"color":"#FA76D9","thickness":11.2,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[6.5,1.5],[5.5,0.5],[4.5,0.5]],"color":"#FA76D9","thickness":11.2,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[3.5,0.5],[2.5,0.5],[1.5,1.5]],"color":"#FA76D9","thickness":11.2,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[6.5,6.5],[5.5,6.5],[5.5,7.5],[4.5,7.5],[4.5,8.5],[3.5,8.5]],"color":"#FA76D9","thickness":11.2,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[4.5,6.5],[3.5,6.5],[2.5,5.5]],"color":"#FA76D9","thickness":11.2,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[3.5,7.5],[2.5,6.5],[1.5,6.5],[1.5,7.5],[0.5,7.5],[0.5,6.5]],"color":"#FA76D9","thickness":11.2,"rounded":true}}
```

Normal sudoku rules apply.

Digits along a pink line form a consecutive group in any order. Digits do not repeat on the line EXCEPT for the ends, which are the SAME digit.

For example, possible fills for a line of length 5 might be 64756, 25342, 34123, etc.
