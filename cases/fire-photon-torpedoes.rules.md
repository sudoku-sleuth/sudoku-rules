---
format: open-rules
title: Fire Photon Torpedoes!
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/fire-photon-torpedoes
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
kropki-1: kropki r9c1-r9c2 colour "black"
kropki-2: kropki r1c8-r1c9 colour "black"
kropki-3: kropki r5c5-r6c5 colour "black"
kropki-4: kropki r7c9-r8c9 colour "black"
kropki-5: kropki r1c1-r2c1 colour "black"
kropki-6: kropki r4c1-r4c2 colour "black"
renban-1: renban r7c8-r7c9-r6c9
renban-2: renban r8c8-r9c8-r9c7
pair-1: pair r5c3-r6c3 relation {"op":"sum","value":5}
pair-2: pair r3c6-r4c6 relation {"op":"sum","value":5}
parity-cells r1c8-r2c7-r3c6-r4c5-r5c4-r6c3-r7c2-r8c1-r7c7-r8c8-r9c9-r2c2-r3c3 parity "odd"
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[5.5,3.5],[6.5,4.5],[6.5,5.5],[5.5,6.5],[4.5,6.5],[3.5,5.5],[2.5,4.5]],"color":"#6392FF","thickness":8,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[2.5,4.5],[1.5,3.5],[1.5,2.5],[2.5,1.5],[3.5,1.5],[4.5,2.5],[5.5,3.5]],"color":"#6392FF","thickness":8,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[4.5,1.5],[5.5,2.5],[6.5,3.5]],"color":"#6392FF","thickness":8,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[1.5,4.5],[2.5,5.5],[3.5,6.5]],"color":"#6392FF","thickness":8,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[6.5,3.5],[7.5,4.5]],"color":"#6392FF","thickness":8,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[3.5,6.5],[4.5,7.5]],"color":"#6392FF","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply. Numbers on blue lines are in a ratio of 2:1 with their neighbors on the line. Numbers with a black dot between them are in a ratio of 2:1. Numbers on purple lines are a set of non-repeating consecutive numbers in any order. Numbers with a V between them sum to 5. Numbers on gray circles are odd.
