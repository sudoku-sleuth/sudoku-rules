---
format: open-rules
title: Spread Out Quietly
setter: EPH
source: https://tinyurl.com/2s4yr264
case: https://sudoku-sleuth.com/cases/spread-out-quietly
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r1c1=4 r5c5=8 r9c9=4
exported: d7547452f998d9afeb1ce665af662a5e
---

```rules
sudoku 9x9
entropic-1: entropic r9c2-r8c1-r7c2-r6c3-r7c4-r6c5-r5c6-r4c5-r3c4-r2c5-r1c6-r2c7-r3c8-r4c9
entropic-2: entropic r1c2-r2c3-r3c2-r4c1
entropic-3: entropic r6c7-r7c8-r8c9-r9c8
```

```drawing
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[2.5,5.5],[3.5,4.5],[4.5,3.5],[5.5,4.5],[6.5,5.5],[7.5,4.5],[8.5,3.5]],"color":"#67F067","thickness":6,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[3.5,6.5],[2.5,5.5]],"color":"#67F067","thickness":6,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[7.5,2.5],[8.5,3.5]],"color":"#67F067","thickness":6,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[1.5,8.5],[2.5,7.5],[3.5,6.5]],"color":"#67F067","thickness":6,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[5.5,0.5],[6.5,1.5],[7.5,2.5]],"color":"#67F067","thickness":6,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[0.5,7.5],[1.5,8.5]],"color":"#67F067","thickness":6,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[0.5,1.5],[1.5,0.5],[2.5,1.5]],"color":"#67F067","thickness":6,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[6.5,7.5],[7.5,6.5],[8.5,7.5]],"color":"#67F067","thickness":6,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[5.5,8.5],[6.5,7.5]],"color":"#67F067","thickness":6,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[3.5,2.5],[2.5,1.5]],"color":"#67F067","thickness":6,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[4.5,1.5],[3.5,2.5]],"color":"#67F067","thickness":6,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[4.5,7.5],[5.5,8.5]],"color":"#67F067","thickness":6,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[0.5,1.5],[1.5,2.5],[2.5,1.5],[3.5,0.5]],"color":"#FFCCAA","thickness":5,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[5.5,6.5],[6.5,7.5],[7.5,8.5],[8.5,7.5]],"color":"#FFCCAA","thickness":5,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[8.5,1.5],[7.5,0.5],[6.5,1.5],[5.5,2.5],[6.5,3.5],[5.5,4.5],[4.5,5.5],[3.5,4.5],[2.5,3.5],[1.5,4.5],[0.5,5.5],[1.5,6.5],[2.5,7.5],[3.5,8.5]],"color":"#FFCCAA","thickness":5,"rounded":true}}
```

Standard sudoku rules apply: each row, column, and 3x3 box must contain all the digits from 1 to 9.

Digits in cells separated by a green line must differ by at least 5.

The pink(?) lines are entropic lines: any consecutive group of three cells along an entropic line must contain a low (123), a medium (456), and a high (789) digit.
