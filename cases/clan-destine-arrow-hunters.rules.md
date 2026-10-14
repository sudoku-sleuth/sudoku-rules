---
format: open-rules
title: Clan-Destine Arrow Hunters
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/clan-destine-arrow-hunters
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r1c9=8 r3c3=6 r5c7=1 r6c5=9 r7c6=8 r9c6=6 r9c9=9
exported: 58a202812ef3805c0beddbf5ae4101b5
---

```rules
sudoku 9x9
arrow-1: arrow r7c2-r6c2 bulb ["r8c3"]
arrow-2: arrow r6c3-r7c2-r8c1 bulb ["r5c4"]
arrow-3: arrow r6c2-r6c3 bulb ["r6c1"]
arrow-4: arrow r6c6-r7c7-r8c8 bulb ["r5c6"]
arrow-5: arrow r2c3-r3c2-r3c1 bulb ["r2c4"]
arrow-6: arrow r3c2-r3c3-r3c4 bulb ["r4c1"]
arrow-7: arrow r2c3-r3c4-r4c5 bulb ["r1c2"]
arrow-8: arrow r6c6-r6c7-r6c8 bulb ["r7c5"]
arrow-9: arrow r5c9-r6c8 bulb ["r6c9"]
arrow-10: arrow r7c8-r8c8 bulb ["r8c7"]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[3.5,4.5],[2.5,3.5],[1.5,2.5],[0.5,1.5]],"color":"#B34043","thickness":8,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[5.5,8.5],[4.5,8.5],[5.5,7.5]],"color":"#B34043","thickness":8,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[5.5,0.5],[5.5,1.5],[5.5,2.5]],"color":"#B34043","thickness":8,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[4.5,5.5],[5.5,5.5],[6.5,6.5],[7.5,7.5]],"color":"#3E48AD","thickness":8,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[4.5,3.5],[5.5,2.5],[6.5,1.5],[7.5,0.5]],"color":"#3E48AD","thickness":8,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[1.5,3.5],[1.5,2.5],[2.5,1.5],[2.5,0.5]],"color":"#3E48AD","thickness":8,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[7.5,2.5],[6.5,1.5],[5.5,1.5]],"color":"#49AD43","thickness":8,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[3.5,0.5],[2.5,1.5],[2.5,2.5],[2.5,3.5]],"color":"#49AD43","thickness":8,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[7.5,6.5],[6.5,7.5],[7.5,7.5]],"color":"#49AD43","thickness":8,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[6.5,4.5],[5.5,5.5],[5.5,6.5],[5.5,7.5]],"color":"#BAAE45","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply.  Circles form the sum of the digits on the arrow connected to them.  Colors are to confirm arrow locations only.  Digits may repeat on arrows if other rules allow.
