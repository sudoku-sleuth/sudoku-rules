---
format: open-rules
title: Jump Shot and Defender
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/jump-shot-and-defender
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
exported: 52d2556528e63bc60a2fea51b0a546de
---

```rules
sudoku 9x9
kropki-1: kropki r6c4-r7c4 black
kropki-2: kropki r5c4-r6c4 black
kropki-3: kropki r4c4-r5c4 black
kropki-4: kropki r4c9-r5c9 black
parity r9c4-r8c5-r7c5-r6c4
renban-1: renban r8c3-r8c2-r7c2-r7c3
renban-2: renban r5c7-r5c8-r6c8-r6c7
renban-3: renban r5c3-r5c4-r6c4-r6c3
renban-4: renban r3c3-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8-r3c8-r3c9
```

```drawing
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[8.5,2.5],[8.5,1.5],[8.5,0.5],[7.5,0.5],[6.5,0.5],[5.5,1.5],[4.5,2.5]],"color":"#96D4FA","thickness":8,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[5.5,5.5],[6.5,6.5],[6.5,7.5],[6.5,8.5],[7.5,7.5],[7.5,6.5],[7.5,5.5]],"color":"#96D4FA","thickness":8,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[1.5,7.5],[0.5,7.5],[0.5,6.5],[0.5,5.5],[0.5,4.5],[0.5,3.5],[0.5,2.5],[1.5,2.5]],"color":"#96D4FA","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply. Numbers on blue lines are CONSECUTIVE with their neighbors on the line. Numbers on purple lines are each a set of consecutive numbers, arranged in any order. Numbers on the gray line are alternating ODD/EVEN along the line. Numbers do not repeat on any lines. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given. The orange line is the basket, and has no effect on the puzzle.
