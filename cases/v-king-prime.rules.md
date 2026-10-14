---
format: open-rules
title: V King Prime
setter: Marty Sears
source: https://sudokupad.app/z4xa5x3d8n
case: https://sudoku-sleuth.com/cases/v-king-prime
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
board:
  rows: 8
  cols: 8
  symbols:
    - 1
    - 2
    - 3
    - 4
    - 5
    - 6
    - 7
    - 8
exported: 1b04b59da230a63766a3b9f54e99b4c0
---

```rules
unique-1: unique r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8
unique-2: unique r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8
unique-3: unique r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8
unique-4: unique r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8
unique-5: unique r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8
unique-6: unique r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8
unique-7: unique r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8
unique-8: unique r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8
unique-9: unique r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1
unique-10: unique r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2
unique-11: unique r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3
unique-12: unique r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4-r8c4
unique-13: unique r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5
unique-14: unique r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6-r8c6
unique-15: unique r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7
unique-16: unique r1c8-r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8
pair-1: pair r5c1-r6c1 sum 5
pair-2: pair r1c5-r1c6 sum 5
pair-3: pair r8c6-r8c7 sum 5
pair-4: pair r6c8-r7c8 sum 5
scoped-move move "king" relation "consecutive" digits [1,2,3,4,5,6,7,8]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[7,1],[7,8],[8,8],[8,7],[7,7]],"color":"#e1e1e1ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[7,7],[6,7],[6,8],[7,8]],"color":"#e1e1e1ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[8,7],[8,6],[6,6],[6,7],[5,7],[5,8],[6,8]],"color":"#e1e1e1ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[8,6],[8,5],[5,5],[5,7],[4,7],[4,5],[5,5]],"color":"#e1e1e1ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[8,5],[8,4],[6,4],[6,6],[3,6],[3,4],[4,4],[4,5],[3,5]],"color":"#e1e1e1ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[8,4],[8,3],[6,3],[6,4],[5,4],[5,3],[6,3]],"color":"#e1e1e1ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[8,3],[8,2],[6,2],[6,3]],"color":"#e1e1e1ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[8,2],[8,1],[6,1],[6,2],[5,2],[5,3],[4,3],[4,4],[5,4],[5,5]],"color":"#e1e1e1ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[7,1],[7,0],[8,0],[8,1]],"color":"#e1e1e1ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[5,8],[4,8],[4,7],[3,7],[3,6],[2,6],[2,5],[3,5]],"color":"#e1e1e1ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[4,8],[3,8],[3,7],[2,7],[2,6],[1,6],[1,8],[2,8],[2,7]],"color":"#e1e1e1ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[7,0],[6,0],[6,1],[5,1],[5,2],[4,2],[4,3],[3,3],[3,4],[2,4],[2,5],[1,5],[1,6],[0,6],[0,8],[1,8]],"color":"#e1e1e1ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[3,8],[2,8]],"color":"#e1e1e1ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[2,7],[0,7]],"color":"#e1e1e1ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[6,0],[5,0],[5,1],[4,1],[4,2],[3,2],[3,3],[2,3],[2,4],[1,4],[1,5],[0,5],[0,6]],"color":"#e1e1e1ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[5,0],[4,0],[4,1],[3,1],[3,2],[2,2],[2,3],[1,3],[1,4],[0,4],[0,5]],"color":"#e1e1e1ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[4,0],[3,0],[3,1],[2,1],[2,2],[1,2],[1,3],[0,3],[0,4]],"color":"#e1e1e1ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[3,0],[2,0],[2,1],[1,1],[1,2],[0,2],[0,3]],"color":"#e1e1e1ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[2,0],[1,0],[1,1],[0,1],[0,2]],"color":"#e1e1e1ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[1,0],[0,0],[0,1]],"color":"#e1e1e1ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[4.5,0.5],[3.5,0.5],[3.5,2.5],[2.5,2.5],[1.5,3.5],[0.5,3.5],[0.5,4.5]],"color":"#bb88f5ff","thickness":13,"rounded":true,"layer":"over"}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[7.5,6.5],[7.5,7.5],[6.5,7.5]],"color":"#bb88f5ff","thickness":13,"rounded":true,"layer":"over"}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[3.5,7.5],[3.5,4.5],[4.5,4.5],[4.5,3.5],[7.5,3.5]],"color":"#bb88f5ff","thickness":13,"rounded":true,"layer":"over"}}
```

Fill the grid with the digits 1-8 so that digits don't repeat in a row or column.

V: Cells separated by a V sum to 5.

KING: Cells separated by a chess king's move may not contain consecutive digits (but could potentially be the same.)

PRIME: Any two adjacent cells along a purple line sum to a prime number.
