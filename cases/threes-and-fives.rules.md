---
format: open-rules
title: Threes and Fives
setter: Will Power
source: https://f-puzzles.com/?id=y5htrgfd
case: https://sudoku-sleuth.com/cases/threes-and-fives
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
exported: ea09953fc952b1f3b10495c3bad00f99
---

```rules
sudoku 9x9
pair-1: pair r7c8-r8c8 sum 5
pair-2: pair r7c4-r8c4 sum 5
pair-3: pair r6c2-r6c3 sum 5
pair-4: pair r2c8-r3c8 sum 5
pair-5: pair r5c5-r5c6 sum 5
pair-6: pair r2c1-r3c1 sum 5
pair-7: pair r5c9-r6c9 sum 5
pair-8: pair r6c5-r7c5 sum 5
pair-9: pair r7c1-r8c1 sum 5
pair-10: pair r9c2-r9c3 sum 5
pair-11: pair r9c6-r9c7 sum 5
pair-12: pair r8c7-r9c7 sum 5
negative relations [{"op":"sum","value":5}] except [["r7c8","r8c8"],["r7c4","r8c4"],["r6c2","r6c3"],["r2c8","r3c8"],["r5c5","r5c6"],["r2c1","r3c1"],["r5c9","r6c9"],["r6c5","r7c5"],["r7c1","r8c1"],["r9c2","r9c3"],["r9c6","r9c7"],["r8c7","r9c7"]]
little-killer-1: little-killer r1c1-r2c2-r3c3-r4c4-r5c5-r6c6-r7c7-r8c8-r9c9 sum 43
little-killer-2: little-killer r3c1-r4c2-r5c3-r6c4-r7c5-r8c6-r9c7 sum 33
little-killer-3: little-killer r5c1-r6c2-r7c3-r8c4-r9c5 sum 23
little-killer-4: little-killer r7c1-r8c2-r9c3 sum 13
little-killer-5: little-killer r1c9-r2c8-r3c7-r4c6-r5c5-r6c4-r7c3-r8c2-r9c1 sum 50
little-killer-6: little-killer r3c9-r4c8-r5c7-r6c6-r7c5-r8c4-r9c3 sum 35
little-killer-7: little-killer r5c9-r6c8-r7c7-r8c6-r9c5 sum 25
little-killer-8: little-killer r7c9-r8c8-r9c7 sum 15
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[8.5,6.5],[7.5,7.5]],"color":"#FFBBB5","thickness":8,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[7.5,6.5],[6.5,7.5]],"color":"#FFBBB5","thickness":8,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[6.5,6.5],[5.5,7.5]],"color":"#FFBBB5","thickness":8,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[6.5,5.5],[5.5,6.5],[4.5,7.5]],"color":"#FFBBB5","thickness":8,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[4.5,5.5],[3.5,6.5]],"color":"#FFBBB5","thickness":8,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[1.5,7.5],[0.5,8.5]],"color":"#FFBBB5","thickness":8,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[2.5,5.5],[1.5,6.5]],"color":"#FFBBB5","thickness":8,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[1.5,4.5],[0.5,5.5]],"color":"#FFBBB5","thickness":8,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[1.5,1.5],[0.5,2.5]],"color":"#FFBBB5","thickness":8,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[2.5,1.5],[1.5,2.5]],"color":"#FFBBB5","thickness":8,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[2.5,3.5],[3.5,2.5],[4.5,1.5]],"color":"#FFBBB5","thickness":8,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[4.5,2.5],[5.5,1.5]],"color":"#FFBBB5","thickness":8,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[8.5,0.5],[7.5,1.5]],"color":"#FFBBB5","thickness":8,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[8.5,2.5],[7.5,3.5]],"color":"#FFBBB5","thickness":8,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[7.5,4.5],[8.5,3.5]],"color":"#FFBBB5","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply.  Little Killer Sums- The numbers outside the grid are the sum of the digits on the indicated diagonal.  Numbers can repeat on diagonals.  Orthogonally adjacent numbers with a "V" between them sum to 5.  All V's are given.  Numbers on pink lines are consecutive with their neighbors.  Numbers can repeat on pink lines.  All possible pink lines on POSITIVE SLOPED DIAGONALS are given.
