---
format: open-rules
title: Baby Steps Only
setter: EPH
source: https://tinyurl.com/3fypv3br
case: https://sudoku-sleuth.com/cases/baby-steps-only
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - The source describes Renban lines that are not yet included in our reading.
givens: r9c9=9
exported: 491d0530abb77a563bed78ce249e3701
---

```rules
sudoku 9x9
whispers-1: whispers r2c8-r1c7-r2c6-r1c5-r2c4-r1c3-r2c2 gap 5
whispers-2: whispers r3c1-r4c2-r5c1-r6c2-r7c1-r8c2-r9c1 gap 5
whispers-3: whispers r5c9-r4c8-r5c7 gap 5
whispers-4: whispers r9c5-r8c4-r7c5 gap 5
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[1.5,8.5],[2.5,7.5],[1.5,6.5],[2.5,5.5],[1.5,4.5]],"color":"#F067F0","thickness":8,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[5.5,4.5],[4.5,5.5],[5.5,6.5],[4.5,7.5],[5.5,8.5]],"color":"#F067F0","thickness":8,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[6.5,5.5],[5.5,4.5],[4.5,5.5],[5.5,6.5],[4.5,7.5]],"color":"#F067F0","thickness":8,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[7.5,4.5],[6.5,5.5],[5.5,4.5],[4.5,5.5],[5.5,6.5]],"color":"#F067F0","thickness":8,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[8.5,5.5],[7.5,4.5],[6.5,5.5],[5.5,4.5],[4.5,5.5]],"color":"#F067F0","thickness":8,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[2.5,3.5],[1.5,4.5],[2.5,5.5],[1.5,6.5],[2.5,7.5]],"color":"#F067F0","thickness":8,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[1.5,2.5],[2.5,3.5],[1.5,4.5],[2.5,5.5],[1.5,6.5]],"color":"#F067F0","thickness":8,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[2.5,1.5],[1.5,2.5],[2.5,3.5],[1.5,4.5],[2.5,5.5]],"color":"#F067F0","thickness":8,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[3.5,2.5],[2.5,1.5],[1.5,2.5],[2.5,3.5],[1.5,4.5]],"color":"#F067F0","thickness":8,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[4.5,1.5],[3.5,2.5],[2.5,1.5],[1.5,2.5],[2.5,3.5]],"color":"#F067F0","thickness":8,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[5.5,2.5],[4.5,1.5],[3.5,2.5],[2.5,1.5],[1.5,2.5]],"color":"#F067F0","thickness":8,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[6.5,1.5],[5.5,2.5],[4.5,1.5],[3.5,2.5],[2.5,1.5]],"color":"#F067F0","thickness":8,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[7.5,2.5],[6.5,1.5],[5.5,2.5],[4.5,1.5],[3.5,2.5]],"color":"#F067F0","thickness":8,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[8.5,1.5],[7.5,2.5],[6.5,1.5],[5.5,2.5],[4.5,1.5]],"color":"#F067F0","thickness":8,"rounded":true}}
```

Standard sudoku rules apply: each row, column, and 3x3 box must contain all the digits from 1 to 9.

Green lines are German Whispers: cells with a green line between them must differ by at least 5.

Purple lines are Run On Renbans: any sequence of five cells along the purple lines must contain a run of five consecutive digits in any order without repeats (like overlapping five cell renban lines).
