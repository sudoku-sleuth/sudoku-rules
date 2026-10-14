---
format: open-rules
title: "Dutch Flat Mates: Multiple Lines"
setter: Marty Sears
source: https://sudokupad.app/191t7peym8
case: https://sudoku-sleuth.com/cases/dutch-flat-mates-multiple-lines
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r5c5=8
exported: b0230768fcff243f2f2adf62132937f1
---

```rules
sudoku 9x9
flat-mates digit 5 above 1 below 9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[8.5,0.5],[1.5,0.5]],"color":"#FFFFFF","thickness":19.2,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[4.5,2.5],[3.5,2.5],[2.5,3.5],[4.5,5.5]],"color":"#FFFFFF","thickness":19.2,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[4.5,3.5],[6.5,5.5],[5.5,6.5],[4.5,6.5]],"color":"#FFFFFF","thickness":19.2,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[6.5,3.5],[6.5,4.5]],"color":"#FFFFFF","thickness":19.2,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[7.5,4.5],[7.5,5.5]],"color":"#FFFFFF","thickness":19.2,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[1.5,3.5],[1.5,4.5]],"color":"#FFFFFF","thickness":19.2,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[2.5,4.5],[2.5,5.5]],"color":"#FFFFFF","thickness":19.2,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[0.5,8.5],[7.5,8.5]],"color":"#FFFFFF","thickness":19.2,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[0.5,6.5],[1.5,7.5],[0.5,7.5],[0.5,6.5]],"color":"#FFFFFF","thickness":19.2,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[7.5,1.5],[8.5,1.5],[8.5,2.5],[7.5,1.5]],"color":"#FFFFFF","thickness":19.2,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[0.5,6.5],[0.5,7.5],[1.5,7.5],[0.5,6.5]],"color":"#88f1b5ff","thickness":12.16,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[7.5,1.5],[8.5,2.5],[8.5,1.5],[7.5,1.5]],"color":"#88f1b5ff","thickness":12.16,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[1.5,3.5],[1.5,4.5]],"color":"#f7f285ff","thickness":12.16,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[2.5,4.5],[2.5,5.5]],"color":"#f7f285ff","thickness":12.16,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[6.5,3.5],[6.5,4.5]],"color":"#f7f285ff","thickness":12.16,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[7.5,4.5],[7.5,5.5]],"color":"#f7f285ff","thickness":12.16,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[4.5,2.5],[3.5,2.5],[2.5,3.5],[4.5,5.5]],"color":"#80e6f0ff","thickness":12.16,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[4.5,3.5],[6.5,5.5],[5.5,6.5],[4.5,6.5]],"color":"#80e6f0ff","thickness":12.16,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[8.5,0.5],[1.5,0.5]],"color":"#e3bbf0ff","thickness":12.16,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[7.5,8.5],[0.5,8.5]],"color":"#e3bbf0ff","thickness":12.16,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[8.833,9.167],[9.167,9.167],[9.167,-0.167],[-0.167,-0.167],[-0.167,9.167],[8.833,9.167]],"color":"#8aaae9ff","thickness":17.28,"rounded":true}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[9.25,8.25],[9.25,9.25],[-0.25,9.25],[-0.25,-0.25],[9.25,-0.25],[9.25,8.25]],"color":"#b9cdf3ff","thickness":17.28,"rounded":true}}
```

Normal sudoku rules apply.

Every 5 in the grid must have a 1 directly above it, or a 9 directly below it. It may have both, but it doesn't need both.

For two adjacent digits along a coloured line, dividing one by the other gives an exact integer (one is a multiple of the other.)
