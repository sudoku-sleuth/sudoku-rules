---
format: open-rules
title: They're Escaping!
setter: Marty Sears
source: https://sudokupad.app/mtr7aqublj
case: https://sudoku-sleuth.com/cases/they-re-escaping
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 48d55649c7c9bb133f6078e890c7f445
---

```rules
sudoku 9x9
cage-1: cage r5c1-r6c1-r7c1-r8c1-r9c1-r9c2-r9c3-r9c4-r9c5 connected true
cage-2: cage r3c2-r4c2-r5c2-r5c3-r6c2-r6c3 connected true
cage-3: cage r1c2-r1c3-r1c4-r2c4 connected true
cage-4: cage r3c3-r3c4-r3c5-r3c6 connected true
cage-5: cage r2c8-r2c9-r3c8 connected true
cage-6: cage r4c7-r5c7 connected true
cage-7: cage r1c7-r1c8-r2c6-r2c7 connected true
cage-8: cage r4c3-r4c4-r4c5-r5c5 connected true
cage-9: cage r8c4-r8c5 connected true
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[8.5,3.5],[8.5,5.5],[6.5,5.5],[5.5,4.5],[5.5,3.5],[6.5,2.5],[7.5,2.5]],"color":"#fdc3c3ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[7.5,1.5],[6.5,1.5],[5.5,2.5]],"color":"#fdc3c3ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[3.5,0.5],[1.5,0.5],[0.5,1.5],[0.5,3.5]],"color":"#fdc3c3ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[2.5,5.5],[3.5,5.5]],"color":"#fdc3c3ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[1.5,8.5],[2.5,8.5]],"color":"#fdc3c3ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[4.5,5.5],[4.5,6.5]],"color":"#fdc3c3ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[4.5,4.5],[5.5,5.5],[5.5,6.5],[6.5,7.5],[7.5,6.5]],"color":"#fdc3c3ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[1.5,4.5],[1.5,6.5]],"color":"#fdc3c3ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[6.5,3.5],[6.5,4.5],[7.5,4.5]],"color":"#fdc3c3ff","thickness":9.6,"rounded":true}}
```

- Normal sudoku rules apply, i.e. each row, column and 3x3 region has to contain the digits from 1 to 9 once each.

- Escaped Killers: Digits do not repeat on a killer line or in a killer cage. The total of a killer line is the same as the total of the killer cage it is escaping from.
