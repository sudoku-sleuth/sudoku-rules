---
format: open-rules
title: Arrow Parallelodoku
setter: sujoyku
source: https://sudokupad.app/96zxn45828
case: https://sudoku-sleuth.com/cases/arrow-parallelodoku
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - A source line layer still needs to be included in our reading.
  - We have only read part of the published answer so far.
board:
  rows: 6
  cols: 12
  symbols:
    - 1
    - 2
    - 3
    - 4
    - 5
    - 6
    - 7
    - 8
    - 9
---

```rules
arrow-1: arrow r4c7-r5c7-r6c7 bulb ["r3c8"]
arrow-2: arrow r3c6-r2c6-r1c6 bulb ["r4c5"]
arrow-3: arrow r5c5-r5c4 bulb ["r4c6"]
arrow-4: arrow r2c8-r2c9 bulb ["r3c7"]
arrow-5: arrow r6c5-r6c4 bulb ["r5c6"]
arrow-6: arrow r1c8-r1c9 bulb ["r2c7"]
arrow-7: arrow r5c2-r6c1 bulb ["r4c3"]
arrow-8: arrow r5c3-r4c4 bulb ["r6c2"]
arrow-9: arrow r1c11-r2c10 bulb ["r1c12"]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[5,0],[4,0],[4,1],[3,1],[3,2],[2,2],[2,3],[1,3],[1,4],[0,4],[0,5]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[4,0],[3,0],[3,1],[2,1],[2,2],[1,2],[1,3],[0,3],[0,4]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[3,0],[2,0],[2,1],[1,1],[1,2],[0,2],[0,3]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[2,0],[1,0],[1,1],[0,1],[0,2]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[1,0],[0,0],[0,1]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[6,7],[6,8],[5,8],[5,10],[6,10],[6,11],[5,11],[5,12],[6,12],[6,11]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[5,12],[4,12],[4,11],[5,11],[5,10],[4,10],[4,11]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[6,10],[6,9],[4,9],[4,10],[3,10],[3,11],[4,11]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[4,12],[3,12],[3,11],[2,11],[2,12],[3,12]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[6,9],[6,8]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[2,12],[1,12]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[1,9],[3,9],[3,10],[2,10],[2,11],[1,11],[1,12],[0,12],[0,8],[1,8],[1,9]],"color":"#000000","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[0,8],[0,6],[6,6],[6,7],[5,7],[5,8],[4,8],[4,9],[3,9],[3,7],[2,7],[2,6]],"color":"#000000","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[6,6],[6,4],[5,4],[5,3],[3,3],[3,5],[4,5],[4,6]],"color":"#000000","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[0,6],[0,5],[1,5],[1,4],[2,4],[2,3],[3,3],[3,2],[4,2],[4,1],[5,1],[5,0],[6,0],[6,4]],"color":"#000000","thickness":3.84,"rounded":true,"layer":"over"}}
```

- Place the digits 1 to 7 such that digits do not repeat in any Row, Column, and (outlined) seven-cell Region.

- Arrows: Digits on an arrow must sum to the digit in the circle from which the arrow emerges.
