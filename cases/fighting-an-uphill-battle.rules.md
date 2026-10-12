---
format: open-rules
title: Fighting an Uphill Battle
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/fighting-an-uphill-battle
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r5c6-r6c6 total 15 connected true
cage-2: cage r5c8-r6c8 total 15 connected true
cage-3: cage r4c1-r4c2-r5c1 total 21 connected true
arrow-1: arrow r8c2-r7c3-r6c4 bulb ["r9c1"]
arrow-2: arrow r9c4-r9c5 bulb ["r9c3"]
arrow-3: arrow r7c8-r7c7-r7c6 bulb ["r7c9"]
arrow-4: arrow r5c8-r5c7 bulb ["r5c9"]
arrow-5: arrow r2c8-r3c7 bulb ["r1c9"]
arrow-6: arrow r2c6-r3c5 bulb ["r1c7"]
arrow-7: arrow r4c2-r3c3 bulb ["r5c1"]
arrow-8: arrow r6c2-r5c3-r4c4 bulb ["r7c1"]
arrow-9: arrow r6c3-r5c4 bulb ["r7c2"]
```

```drawing
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,2],"width":0.3,"height":0.3,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,3],"width":0.3,"height":0.3,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,4],"width":0.3,"height":0.3,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,5],"width":0.3,"height":0.3,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,6],"width":0.3,"height":0.3,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2}}
```

Normal Sudoku rules apply. Numbers on arrows sum to the number in that arrow's circle. ALL NUMBERS ON ARROWS STRICTLY DECREASE MOVING AWAY FROM THE ARROW'S CIRCLE. Numbers in cages sum to the number in the top left corner of the cage.
