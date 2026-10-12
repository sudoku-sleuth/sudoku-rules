---
format: open-rules
title: "Dutch Flat Mates: Split Ends"
setter: Marty Sears
source: https://sudokupad.app/n44kqgll5s
case: https://sudoku-sleuth.com/cases/dutch-flat-mates-split-ends
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
flat-mates digit 5 above 1 below 9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[7.7,3.5],[5.3,3.5]],"color":"#FFFFFF","thickness":17.28,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[4.7,3.5],[3.5,3.5],[3.5,7.7]],"color":"#FFFFFF","thickness":17.28,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[0.3,3.5],[3.5,3.5],[3.5,1.5],[6.7,1.5]],"color":"#FFFFFF","thickness":17.28,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[6.5,1.5],[6.3,1.5]],"color":"#FFFFFF","thickness":17.28,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[1.5,6.7],[1.5,1.5],[3.5,1.5],[3.5,0.3]],"color":"#FFFFFF","thickness":17.28,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[0.3,1.5],[1.5,1.5],[1.5,1.3]],"color":"#FFFFFF","thickness":17.28,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[8.7,5.5],[8.5,5.5],[8.5,8.5],[8.7,8.5]],"color":"#FFFFFF","thickness":17.28,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[8.5,8.7],[8.5,8.5],[6.3,8.5]],"color":"#FFFFFF","thickness":17.28,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[2.3,5.5],[8.5,5.5],[8.5,2.3]],"color":"#FFFFFF","thickness":17.28,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[5.7,8.5],[5.5,8.5],[5.5,8.7]],"color":"#FFFFFF","thickness":17.28,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[5.5,4.3],[5.5,8.5],[3.3,8.5]],"color":"#FFFFFF","thickness":17.28,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[2.7,8.5],[0.3,8.5]],"color":"#FFFFFF","thickness":17.28,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[1.5,6.7],[1.5,1.3]],"color":"#f6e497ff","thickness":12.8,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[3.5,7.7],[3.5,0.3]],"color":"#f6e497ff","thickness":12.8,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[5.5,8.7],[5.5,4.3]],"color":"#f6e497ff","thickness":12.8,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[8.5,8.7],[8.5,2.3]],"color":"#f6e497ff","thickness":12.8,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[6.7,1.5],[0.3,1.5]],"color":"#c3a388ff","thickness":12.8,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[4.7,3.5],[0.3,3.5]],"color":"#c3a388ff","thickness":12.8,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[7.7,3.5],[5.3,3.5]],"color":"#c3a388ff","thickness":12.8,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[8.7,5.5],[2.3,5.5]],"color":"#c3a388ff","thickness":12.8,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[8.7,8.5],[6.3,8.5]],"color":"#c3a388ff","thickness":12.8,"rounded":true}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[5.7,8.5],[3.3,8.5]],"color":"#c3a388ff","thickness":12.8,"rounded":true}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[2.7,8.5],[0.3,8.5]],"color":"#c3a388ff","thickness":12.8,"rounded":true}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[9.25,0.75],[9.25,9.25],[-0.25,9.25],[-0.25,-0.25],[9.25,-0.25],[9.25,0.75]],"color":"#b1e3f5ff","thickness":19.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[1,9.25],[1.5,9.25]],"color":"#b1e3f5ff","thickness":19.2,"rounded":true,"layer":"over"}}
```

Normal sudoku rules apply.

Every 5 in the grid must have a 1 directly above it or a 9 directly below it. It may have both, but it doesn't need both.

Each horizontal blonde line sums to a 2 digit number. These two digits are at the start and end of its row, in some order.

Each vertical brunette line also sums to a 2 digit number. These two digits are at the top and bottom of its column, in some order.
