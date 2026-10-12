---
format: open-rules
title: I'm Blue
setter: sujoyku
source: https://sudokupad.app/2n7efk46a1
case: https://sudoku-sleuth.com/cases/i-m-blue
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
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[1.5,7.5],[1.5,5.5],[2.5,5.5],[3.5,4.5],[2.5,3.5],[0.5,3.5]],"color":"oklch(88.739% 0.07926 208.88)","thickness":9.6,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[3.5,0.5],[3.5,2.5],[4.5,3.5],[5.5,2.5],[5.5,1.5],[7.5,1.5]],"color":"oklch(88.739% 0.07926 208.88)","thickness":9.6,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[4.5,2.5],[4.5,0.5],[8.5,0.5],[8.5,2.5]],"color":"oklch(88.739% 0.07926 208.88)","thickness":9.6,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[2.5,4.5],[0.5,4.5],[0.5,8.5],[1.5,8.5]],"color":"oklch(88.739% 0.07926 208.88)","thickness":9.6,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[2.5,6.5],[2.5,8.5],[3.5,8.5],[3.5,7.5]],"color":"oklch(88.739% 0.07926 208.88)","thickness":9.6,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[6.5,2.5],[7.5,2.5],[7.5,4.5]],"color":"oklch(88.739% 0.07926 208.88)","thickness":9.6,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[3.5,3.5],[1.5,1.5]],"color":"oklch(88.739% 0.07926 208.88)","thickness":9.6,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[5.5,7.5],[5.5,8.5],[6.5,7.5],[7.5,7.5],[7.5,6.5],[6.5,6.5],[7.5,5.5],[8.5,5.5]],"color":"oklch(88.739% 0.07926 208.88)","thickness":9.6,"rounded":true}}
```

- Normal sudoku rules apply, i.e. each row, column, and 3x3 region has to contain the digits from 1 to 9 once each.

- Region Sum Lines: Box borders divide the blue lines into segments with the same sum. (Different lines may have different sums.)
