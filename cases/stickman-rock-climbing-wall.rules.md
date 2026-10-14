---
format: open-rules
title: Stickman Rock Climbing Wall
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/stickman-rock-climbing-wall
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 745e4444f9ff6a30018bdf33de13aa8e
---

```rules
sudoku 9x9
kropki-1: kropki r2c2-r2c3 white
kropki-2: kropki r2c3-r2c4 white
kropki-3: kropki r2c4-r2c5 white
kropki-4: kropki r6c8-r6c9 white
kropki-5: kropki r5c9-r6c9 white
kropki-6: kropki r1c6-r1c7 white
kropki-7: kropki r1c7-r1c8 white
kropki-8: kropki r6c8-r7c8 white
kropki-9: kropki r7c8-r7c9 white
kropki-10: kropki r6c4-r6c5 white
kropki-11: kropki r5c4-r6c4 white
kropki-12: kropki r6c2-r7c2 white
kropki-13: kropki r6c1-r6c2 white
kropki-14: kropki r3c7-r4c7 black
kropki-15: kropki r2c8-r3c8 black
kropki-16: kropki r8c8-r8c9 black
kropki-17: kropki r7c9-r8c9 black
renban-1: renban r2c4-r3c4-r3c5-r2c5
renban-2: renban r2c7-r3c6-r4c5-r4c4-r4c3-r3c2-r1c6-r6c5-r5c5
renban-3: renban r6c8-r5c7-r6c6-r7c5-r7c4-r7c3-r8c3-r9c3
```

```drawing
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[5.5,6.5],[5.5,7.5],[5.5,8.5],[4.5,8.5]],"color":"#73DDFA","thickness":8,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[8.5,1.5],[8.5,2.5],[8.5,3.5]],"color":"#73DDFA","thickness":8,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[2.5,0.5],[2.5,1.5],[2.5,2.5]],"color":"#73DDFA","thickness":8,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[0.5,4.5],[0.5,5.5],[0.5,6.5]],"color":"#73DDFA","thickness":8,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[0.5,7.5],[1.5,7.5],[1.5,8.5]],"color":"#73DDFA","thickness":8,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[2.5,6.5],[3.5,6.5],[3.5,7.5]],"color":"#73DDFA","thickness":8,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[6.5,5.5],[6.5,6.5]],"color":"#73DDFA","thickness":8,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[4.5,3.5],[4.5,4.5],[4.5,5.5]],"color":"#73DDFA","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply. Numbers on purple lines are each a set of non-repeating, consecutive numbers, in any order. Numbers on each blue line sum to 16. Numbers do not repeat on blue lines. Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are shown.
