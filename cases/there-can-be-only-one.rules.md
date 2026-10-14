---
format: open-rules
title: There Can Be Only One
setter: sujoyku
source: https://sudokupad.app/64s7970tni
case: https://sudoku-sleuth.com/cases/there-can-be-only-one
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 8edd5dd672ac75cebadde38b6716406c
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[0.5,1.5],[1.5,1.5],[1.5,2.5],[0.5,3.5],[0.5,4.5]],"color":"#FFFFFF","thickness":12.8,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[2.5,6.5],[1.5,7.5],[1.5,8.5]],"color":"#FFFFFF","thickness":12.8,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[2.5,8.5],[4.5,8.5]],"color":"#FFFFFF","thickness":12.8,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[2.5,7.5],[3.5,6.5],[3.5,5.5],[1.5,3.5]],"color":"#FFFFFF","thickness":12.8,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[0.5,0.5],[1.5,0.5],[2.5,1.5],[2.5,2.5],[3.5,3.5],[4.5,3.5],[5.5,4.5],[5.5,5.5],[6.5,6.5],[7.5,6.5],[8.5,7.5],[8.5,8.5]],"color":"#FFFFFF","thickness":12.8,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[5.5,7.5],[5.5,6.5],[3.5,4.5]],"color":"#FFFFFF","thickness":12.8,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[5.5,3.5],[7.5,5.5]],"color":"#FFFFFF","thickness":12.8,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[7.5,4.5],[5.5,2.5]],"color":"#FFFFFF","thickness":12.8,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[7.5,1.5],[8.5,1.5],[8.5,2.5]],"color":"#FFFFFF","thickness":12.8,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[5.5,1.5],[3.5,1.5],[2.5,0.5]],"color":"#FFFFFF","thickness":12.8,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[0.5,0.5],[1.5,0.5],[2.5,1.5],[2.5,2.5],[3.5,3.5],[4.5,3.5],[5.5,4.5],[5.5,5.5],[6.5,6.5],[7.5,6.5],[8.5,7.5],[8.5,8.5]],"color":"#b5cb99ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[0.5,1.5],[1.5,1.5],[1.5,2.5],[0.5,3.5],[0.5,4.5]],"color":"#b5cb99ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[3.5,4.5],[5.5,6.5],[5.5,7.5]],"color":"#b5cb99ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[1.5,3.5],[3.5,5.5],[3.5,6.5],[2.5,7.5]],"color":"#b5cb99ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[5.5,1.5],[3.5,1.5],[2.5,0.5]],"color":"#b5cb99ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[7.5,1.5],[8.5,1.5],[8.5,2.5]],"color":"#b5cb99ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[1.5,8.5],[1.5,7.5],[2.5,6.5]],"color":"#b5cb99ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[7.5,5.5],[5.5,3.5]],"color":"#b5cb99ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[7.5,4.5],[5.5,2.5]],"color":"#b5cb99ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[2.5,8.5],[4.5,8.5]],"color":"#b5cb99ff","thickness":9.6,"rounded":true}}
```

- Normal sudoku rules apply, i.e. each Row, Column, and 3x3 region has to contain the digits from 1 to 9 once each.

- Greatest Lines: On each line, there is exactly one cell whose value is greater than the sum of any other two cells on that line.
