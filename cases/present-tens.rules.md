---
format: open-rules
title: Present Tens
setter: sujoyku
source: https://sudokupad.app/21oh5o89ab
case: https://sudoku-sleuth.com/cases/present-tens
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
arrow-1: arrow r2c1-r3c1 bulb ["r1c1"]
arrow-2: arrow r1c2-r1c3 bulb ["r1c1"]
arrow-3: arrow r1c6-r1c5-r1c4 bulb ["r1c7"]
arrow-4: arrow r6c8-r5c8 bulb ["r7c8"]
arrow-5: arrow r8c1-r7c1-r6c1 bulb ["r9c1"]
arrow-6: arrow r7c6-r8c6-r9c6 bulb ["r7c5"]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[2.5,2.5],[2.5,1.5],[1.5,1.5],[1.5,3.5]],"color":"#FFFFFF","thickness":12.8,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[1.5,5.5],[1.5,6.5],[3.5,6.5],[3.5,8.5]],"color":"#FFFFFF","thickness":12.8,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[2.5,7.5],[0.5,7.5],[0.5,8.5],[1.5,8.5]],"color":"#FFFFFF","thickness":12.8,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[4.5,1.5],[4.5,5.5]],"color":"#FFFFFF","thickness":12.8,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[5.5,6.5],[7.5,6.5],[7.5,8.5],[6.5,8.5]],"color":"#FFFFFF","thickness":12.8,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[7.5,2.5],[8.5,2.5],[8.5,3.5],[7.5,3.5],[7.5,4.5],[8.5,4.5]],"color":"#FFFFFF","thickness":12.8,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[2.5,2.5],[2.5,1.5],[1.5,1.5],[1.5,3.5]],"color":"#f9b0bbff","thickness":9.6,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[2.5,7.5],[0.5,7.5],[0.5,8.5],[1.5,8.5]],"color":"#f9b0bbff","thickness":9.6,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[1.5,5.5],[1.5,6.5],[3.5,6.5],[3.5,8.5]],"color":"#f9b0bbff","thickness":9.6,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[5.5,6.5],[7.5,6.5],[7.5,8.5],[6.5,8.5]],"color":"#f9b0bbff","thickness":9.6,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[8.5,4.5],[7.5,4.5],[7.5,3.5],[8.5,3.5],[8.5,2.5],[7.5,2.5]],"color":"#f9b0bbff","thickness":9.6,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[4.5,1.5],[4.5,5.5]],"color":"#f9b0bbff","thickness":9.6,"rounded":true}}
```

- Normal sudoku rules apply, i.e. each row, column, and 3x3 region has to contain the digits from 1 to 9 once each.

- Ten Lines: Each red line can be split into contiguous, non-overlapping segments that sum to exactly 10. If allowed by other rules, digits inside a segment may repeat.

- Arrows: Digits on an arrow sum to the digit in the circle from which the arrow emerges.
