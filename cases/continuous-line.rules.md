---
format: open-rules
title: Continuous Line
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/continuous-line
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[0.5,0.5],[0.5,1.5],[0.5,2.5],[1.5,1.5],[2.5,0.5],[2.5,1.5],[1.5,2.5],[0.5,3.5],[0.5,4.5],[0.5,5.5],[1.5,5.5],[2.5,5.5]],"color":"#00FF0D","thickness":8,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[5.5,1.5],[4.5,2.5],[4.5,3.5],[5.5,4.5],[6.5,5.5],[6.5,6.5]],"color":"#00FF0D","thickness":8,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[3.5,8.5],[2.5,8.5]],"color":"#00FF0D","thickness":8,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[3.5,8.5],[4.5,7.5],[3.5,6.5],[2.5,5.5]],"color":"#00FF0D","thickness":8,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[5.5,8.5],[5.5,7.5],[5.5,6.5],[4.5,6.5],[3.5,6.5]],"color":"#00FF0D","thickness":8,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[5.5,8.5],[6.5,8.5]],"color":"#00FF0D","thickness":8,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[6.5,8.5],[7.5,8.5],[8.5,8.5],[8.5,7.5],[8.5,6.5],[7.5,6.5],[6.5,6.5]],"color":"#00FF0D","thickness":8,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[8.5,5.5],[8.5,4.5],[7.5,3.5],[7.5,2.5],[8.5,2.5]],"color":"#00FF0D","thickness":8,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[8.5,1.5],[8.5,0.5],[7.5,0.5],[7.5,1.5],[6.5,2.5],[6.5,3.5],[6.5,4.5],[6.5,5.5]],"color":"#00FF0D","thickness":8,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[3.5,5.5],[4.5,5.5],[3.5,4.5],[3.5,3.5],[2.5,3.5],[1.5,3.5],[2.5,4.5]],"color":"#00FF0D","thickness":8,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[3.5,3.5],[4.5,4.5]],"color":"#00FF0D","thickness":8,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[7.5,4.5],[8.5,5.5]],"color":"#00FF0D","thickness":8,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[6.5,3.5],[7.5,4.5]],"color":"#00FF0D","thickness":8,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[5.5,3.5],[6.5,3.5]],"color":"#00FF0D","thickness":8,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[3.5,2.5],[4.5,3.5]],"color":"#00FF0D","thickness":8,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[4.5,5.5],[5.5,6.5]],"color":"#00FF0D","thickness":8,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[2.5,7.5],[3.5,7.5]],"color":"#00FF0D","thickness":8,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[6.5,8.5],[6.5,7.5]],"color":"#00FF0D","thickness":8,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[5.5,2.5],[6.5,2.5],[6.5,1.5],[5.5,0.5],[4.5,0.5],[3.5,0.5],[4.5,1.5]],"color":"#00FF0D","thickness":8,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[6.5,5.5],[7.5,5.5]],"color":"#00FF0D","thickness":8,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[2.5,7.5],[2.5,8.5]],"color":"#00FF0D","thickness":8,"rounded":true}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[1.5,6.5],[2.5,6.5],[1.5,7.5],[0.5,7.5],[0.5,8.5],[1.5,8.5],[2.5,7.5]],"color":"#00FF0D","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply. RESTRICTED GERMAN WHISPER LINE: Numbers on the green line are either 5 or 6 apart from their neignbors on the line. Not all possible green lines are shown. The number in row 1 column 6 and the number in row 5 column 2 are in a ratio of 2:1, in either order.
