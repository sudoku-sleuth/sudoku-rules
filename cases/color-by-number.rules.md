---
format: open-rules
title: Color By Number
setter: Will Power
source: https://sudokupad.app/t8zajw5gjq
case: https://sudoku-sleuth.com/cases/color-by-number
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
kropki r5c5-r6c5 colour "black"
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[6.5,1.5],[5.5,2.5],[4.5,3.5],[3.5,4.5],[2.5,5.5],[1.5,6.5]],"color":"#98FF96","thickness":8,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[7.5,2.5],[6.5,3.5],[5.5,4.5],[4.5,5.5],[3.5,6.5],[2.5,7.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[1.5,2.5],[2.5,3.5],[3.5,4.5],[4.5,5.5],[5.5,6.5],[6.5,7.5]],"color":"#FF7383","thickness":8,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[2.5,1.5],[3.5,2.5],[4.5,3.5],[5.5,4.5],[6.5,5.5],[7.5,6.5]],"color":"#FFA666","thickness":8,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[7.5,1.5],[7.5,0.5]],"color":"#FF7383","thickness":8,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[7.5,1.5],[8.5,1.5]],"color":"#FF7383","thickness":8,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[7.5,1.5],[8.5,0.5]],"color":"#FF7383","thickness":8,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[8.5,1.5],[8.5,0.5]],"color":"#98FF96","thickness":8,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[7.5,0.5],[8.5,0.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[1.5,8.5],[1.5,7.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[0.5,8.5],[1.5,8.5]],"color":"#FF7383","thickness":8,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[0.5,8.5],[1.5,7.5]],"color":"#FF7383","thickness":8,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[0.5,8.5],[0.5,7.5]],"color":"#FF7383","thickness":8,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[0.5,7.5],[1.5,7.5]],"color":"#98FF96","thickness":8,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[0.5,0.5],[1.5,1.5]],"color":"#98FF96","thickness":8,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[1.5,0.5],[1.5,1.5]],"color":"#FFA666","thickness":8,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[0.5,1.5],[1.5,0.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[7.5,8.5],[8.5,7.5]],"color":"#98FF96","thickness":8,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[8.5,8.5],[8.5,7.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply. SUMMING LINES- Different colored lines each have a different VALUE. The number in a cell that contains one or more lines is the sum of the VALUES of all lines that go to the center of that cell. The red in box 3 and box 7 are each considered only ONE RED LINE. Cells without any lines can be any number. KROPKI PAIRS- Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given.
