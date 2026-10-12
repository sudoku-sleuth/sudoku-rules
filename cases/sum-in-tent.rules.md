---
format: open-rules
title: Sum In Tent
setter: sujoyku
source: https://sudokupad.app/e2o2valf7f
case: https://sudoku-sleuth.com/cases/sum-in-tent
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
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[1.5,1.5],[1.5,2.5],[0.5,3.5],[0.5,4.5],[1.5,4.5]],"color":"#FFFFFF","thickness":17.92,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[2.5,8.5],[2.5,7.5],[4.5,7.5],[4.5,8.5]],"color":"#FFFFFF","thickness":17.92,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[5.5,8.5],[7.5,8.5]],"color":"#FFFFFF","thickness":17.92,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[8.5,7.5],[7.5,7.5],[7.5,4.5],[8.5,4.5]],"color":"#FFFFFF","thickness":17.92,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[8.5,3.5],[7.5,3.5],[7.5,1.5]],"color":"#FFFFFF","thickness":17.92,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[5.5,1.5],[5.5,2.5],[4.5,2.5],[4.5,3.5],[5.5,3.5],[5.5,4.5]],"color":"#FFFFFF","thickness":17.92,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[4.5,5.5],[2.5,3.5],[5.5,0.5]],"color":"#FFFFFF","thickness":17.92,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[5.5,0.5],[2.5,3.5],[4.5,5.5]],"color":"#63ddf1ff","thickness":15.36,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[5.5,1.5],[5.5,2.5],[4.5,2.5],[4.5,3.5],[5.5,3.5],[5.5,4.5]],"color":"#63ddf1ff","thickness":15.36,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[8.5,7.5],[7.5,7.5],[7.5,4.5],[8.5,4.5]],"color":"#63ddf1ff","thickness":15.36,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[2.5,8.5],[2.5,7.5],[4.5,7.5],[4.5,8.5]],"color":"#63ddf1ff","thickness":15.36,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[8.5,3.5],[7.5,3.5],[7.5,1.5]],"color":"#63ddf1ff","thickness":15.36,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[5.5,8.5],[7.5,8.5]],"color":"#63ddf1ff","thickness":15.36,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[1.5,4.5],[0.5,4.5],[0.5,3.5],[1.5,2.5],[1.5,1.5]],"color":"#63ddf1ff","thickness":15.36,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[7.5,1.5],[7.5,3.5],[8.5,3.5]],"color":"#FFFFFF","thickness":7.68,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[8.5,4.5],[7.5,4.5],[7.5,7.5],[8.5,7.5]],"color":"#FFFFFF","thickness":7.68,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[7.5,8.5],[5.5,8.5]],"color":"#FFFFFF","thickness":7.68,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[4.5,8.5],[4.5,7.5],[2.5,7.5],[2.5,8.5]],"color":"#FFFFFF","thickness":7.68,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[1.5,4.5],[0.5,4.5],[0.5,3.5],[1.5,2.5],[1.5,1.5]],"color":"#FFFFFF","thickness":7.68,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[5.5,0.5],[2.5,3.5],[4.5,5.5]],"color":"#FFFFFF","thickness":7.68,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[5.5,4.5],[5.5,3.5],[4.5,3.5],[4.5,2.5],[5.5,2.5],[5.5,1.5]],"color":"#FFFFFF","thickness":7.68,"rounded":true}}
```

Sudoku: Put the digits 1 to 9 once each into every row, column & 3 by 3 box.

Region Sum lines: The box borders divide each hollow blue line into sections which must have the same sum. This sum may be different for different lines.

Each Region Sum line is also a German Whispers line, a Parity line, or both.

German Whispers lines: Each pair of cells along the line must contain digits that are at least 5 apart.

Parity lines: Each pair of cells along the line must consist of an odd and an even digit.

The solver must determine which line is which.
