---
format: open-rules
title: Dorlir's Line
setter: Marty Sears
source: https://sudokupad.app/d7bws7kqmr
case: https://sudoku-sleuth.com/cases/dorlir-s-line
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[7.5,6.5],[6.5,7.5],[5.5,7.5],[4.5,8.5],[4.5,6.5],[2.5,8.5],[0.5,6.5],[1.5,5.5],[2.5,5.5],[3.5,4.5]],"color":"#9eb370ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[0.5,2.5],[0.5,1.5],[1.5,0.5],[2.5,1.5],[3.5,1.5],[4.5,2.5],[4.5,0.5],[6.5,0.5],[7.5,1.5],[7.5,2.5],[8.5,2.5]],"color":"#9eb370ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[3.5,2.5],[5.5,4.5],[6.5,4.5]],"color":"#9eb370ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[6.5,6.5],[5.5,6.5],[5.5,5.5]],"color":"#9eb370ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[5.5,3.5],[7.5,3.5]],"color":"#9eb370ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[7.5,7.5],[8.5,7.5],[8.5,8.5]],"color":"#9eb370ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[3.5,3.5],[2.5,3.5],[2.5,2.5]],"color":"#9eb370ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[1.5,3.5],[1.5,1.5]],"color":"#9eb370ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[8.5,5.5],[8.5,4.5],[7.5,4.5]],"color":"#9eb370ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[9.125,8.625],[9.125,9.125],[-0.125,9.125],[-0.125,-0.125],[9.125,-0.125],[9.125,8.625]],"color":"#9ecf74ff","thickness":13.44,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[9.25,4.75],[9.25,9.25],[-0.25,9.25],[-0.25,-0.25],[9.25,-0.25],[9.25,5.25]],"color":"#cce38bff","thickness":16,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[-0.25,2.75],[-0.25,3.75]],"color":"#cce38bff","thickness":16,"rounded":true}}
```

Normal sudoku rules apply. On each line, there is exactly one cell whose value is greater than the sum of any other two cells on that line.
