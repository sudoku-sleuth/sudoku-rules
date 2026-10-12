---
format: open-rules
title: Squeeze
setter: Jobo
source: https://sudokupad.app/wonpa15z88
case: https://sudoku-sleuth.com/cases/squeeze
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
between-1: between r1c1 ends ["r1c2","r2c1"]
between-2: between r3c5-r4c5-r4c4 ends ["r2c5","r4c3"]
between-3: between r9c2 ends ["r9c1","r9c3"]
between-4: between r6c4-r5c3-r6c2 ends ["r7c5","r7c1"]
between-5: between r6c7 ends ["r5c6","r6c8"]
between-6: between r2c8 ends ["r1c7","r3c9"]
between-7: between r9c8 ends ["r9c7","r9c9"]
pair r5c1-r6c1 relation {"op":"sum","value":5}
```

```drawing
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[1.5,4.5],[1.5,2.5],[3.5,2.5]],"color":"#67f067ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[0.5,1.5],[1.5,1.5],[1.5,0.5]],"color":"#67f067ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[8.5,0.5],[7.5,1.5],[8.5,2.5]],"color":"#67f067ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[0.5,6.5],[2.5,6.5],[2.5,8.5]],"color":"#67f067ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[4.5,5.5],[4.5,6.5],[5.5,7.5]],"color":"#67f067ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[6.5,0.5],[6.5,1.5],[5.5,2.5],[6.5,3.5],[6.5,4.5]],"color":"#67f067ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[8.5,6.5],[7.5,7.5],[8.5,8.5]],"color":"#67f067ff","thickness":9.6,"rounded":true}}
```

Normal sudoku rules apply.

Digits on gray between lines must be between the digits in the attached circles.

Adjacent digits along a green line must differ by at least 5.

Digits separated by a V must sum to 5. Not all V are given.
