---
format: open-rules
title: My Cup Runneth On
setter: EPH
source: https://sudokupad.app/hcxz0r21uq
case: https://sudoku-sleuth.com/cases/my-cup-runneth-on
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
  - The source describes Renban lines that are not yet included in our reading.
---

```rules
sudoku 9x9
cage r7c3-r7c4 total 13 connected true
```

```drawing
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[6.5,2.5],[6.5,1.5],[5.5,2.5],[4.5,3.5],[3.5,2.5]],"color":"#F067F0","thickness":8,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[2.5,1.5],[3.5,2.5],[4.5,3.5],[5.5,2.5],[6.5,1.5]],"color":"#F067F0","thickness":8,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[2.5,2.5],[2.5,1.5],[3.5,2.5],[4.5,3.5],[5.5,2.5]],"color":"#F067F0","thickness":8,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[2.5,3.5],[2.5,2.5],[2.5,1.5],[3.5,2.5],[4.5,3.5]],"color":"#F067F0","thickness":8,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[2.5,4.5],[2.5,3.5],[2.5,2.5],[2.5,1.5],[3.5,2.5]],"color":"#F067F0","thickness":8,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[2.5,5.5],[2.5,4.5],[2.5,3.5],[2.5,2.5],[2.5,1.5]],"color":"#F067F0","thickness":8,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[2.5,6.5],[2.5,5.5],[2.5,4.5],[2.5,3.5],[2.5,2.5]],"color":"#F067F0","thickness":8,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[2.5,7.5],[2.5,6.5],[2.5,5.5],[2.5,4.5],[2.5,3.5]],"color":"#F067F0","thickness":8,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[3.5,6.5],[2.5,7.5],[2.5,6.5],[2.5,5.5],[2.5,4.5]],"color":"#F067F0","thickness":8,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[4.5,5.5],[3.5,6.5],[2.5,7.5],[2.5,6.5],[2.5,5.5]],"color":"#F067F0","thickness":8,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[5.5,6.5],[4.5,5.5],[3.5,6.5],[2.5,7.5],[2.5,6.5]],"color":"#F067F0","thickness":8,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[6.5,7.5],[5.5,6.5],[4.5,5.5],[3.5,6.5],[2.5,7.5]],"color":"#F067F0","thickness":8,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[6.5,6.5],[6.5,7.5],[5.5,6.5],[4.5,5.5],[3.5,6.5]],"color":"#F067F0","thickness":8,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[6.5,5.5],[6.5,6.5],[6.5,7.5],[5.5,6.5],[4.5,5.5]],"color":"#F067F0","thickness":8,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[6.5,4.5],[6.5,5.5],[6.5,6.5],[6.5,7.5],[5.5,6.5]],"color":"#F067F0","thickness":8,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[6.5,3.5],[6.5,4.5],[6.5,5.5],[6.5,6.5],[6.5,7.5]],"color":"#F067F0","thickness":8,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[7.5,1.5],[7.5,2.5],[7.5,3.5],[7.5,4.5],[7.5,5.5]],"color":"#F067F0","thickness":8,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[1.5,3.5],[1.5,4.5],[1.5,5.5],[1.5,6.5],[1.5,7.5]],"color":"#F067F0","thickness":8,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[2.5,8.5],[1.5,7.5],[1.5,6.5],[1.5,5.5],[1.5,4.5]],"color":"#F067F0","thickness":8,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[3.5,8.5],[2.5,8.5],[1.5,7.5],[1.5,6.5],[1.5,5.5]],"color":"#F067F0","thickness":8,"rounded":true}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[2.5,0.5],[3.5,1.5]],"color":"#F067F0","thickness":8,"rounded":true}}
```

Standard sudoku rules apply: each row, column, and 3x3 box must contain all the digits from 1 to 9.

Purple lines:
A purple line of length up to, and including 5 is a renban.  The digits along the line must be a non-repeating set of consecutive digits in any order.
A longer purple line is a run-on renban; every group of 5 sequential cells along the line is a 5 cell renban.  That is, it forms a set of overlapping renbans.

Cage: digits in a cage must sum to the value in the corner of the cage.
