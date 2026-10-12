---
format: open-rules
title: Unknown Origin 6
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/unknown-origin-6
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
---

```rules
sudoku 9x9
cage-1: cage r7c1-r7c2-r7c3 total 11 connected true
cage-2: cage r7c6-r8c6-r9c6 total 18 connected true
cage-3: cage r3c4-r3c5 total 13 connected true
cage-4: cage r3c7-r3c8-r3c9 total 13 connected true
anti-king
arrow-1: arrow r4c4-r4c3-r4c2-r4c1-r5c1-r5c2-r5c3-r6c3-r6c2-r6c1-r7c1-r7c2-r7c3 bulb ["r5c4","r5c5"]
arrow-2: arrow r4c5-r3c5-r3c4-r3c3-r3c2-r3c1-r2c1-r1c1-r1c2-r1c3-r2c3-r2c2 bulb ["r5c4","r5c5"]
arrow-3: arrow r4c6-r3c6-r2c6-r2c5-r2c4-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9-r2c9-r2c8-r2c7 bulb ["r5c4","r5c5"]
arrow-4: arrow r6c4-r7c4-r8c4-r8c3-r8c2-r8c1-r9c1-r9c2-r9c3-r9c4-r9c5-r8c5-r7c5 bulb ["r5c4","r5c5"]
arrow-5: arrow r6c5-r7c6-r8c6-r9c6-r9c7-r9c8-r9c9-r8c9-r7c9-r7c8-r7c7-r8c7-r8c8 bulb ["r5c4","r5c5"]
arrow-6: arrow r5c6-r6c6-r6c7-r6c8-r6c9-r5c9-r4c9-r3c9-r3c8-r3c7-r4c7-r4c8-r5c8 bulb ["r5c4","r5c5"]
```

```drawing
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,9.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"28","textColor":"#000000","fontSize":20}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.5,5.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"14","textColor":"#000000","fontSize":20}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,-0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"27","textColor":"#000000","fontSize":20}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,9.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"18","textColor":"#000000","fontSize":20}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,-0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"14","textColor":"#000000","fontSize":20}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,2.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"26","textColor":"#000000","fontSize":20}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.5,6.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"22","textColor":"#000000","fontSize":20}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,8.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"23","textColor":"#000000","fontSize":20}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,-0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"12","textColor":"#000000","fontSize":20}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"21","textColor":"#000000","fontSize":20}}
```

Normal sudoku rules apply. Numbers that are a chess KING's move apart cannot have the same digit. Numbers on arrows sum to the number in the pill at the arrow's origin. Numbers in cages sum to the number in the top left corner of the cage. SKYSCRAPER SUMS- Numbers in the grid represent a building of that height, at that location.  Higher buildings block the view of all lower ones behind them.  Numbers outside the grid are the SUM of all building HEIGHTS that can be seen, looking orthogonally into the grid, from that location.
