---
format: open-rules
title: Allergic to 10
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/allergic-to-10
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r5c5-r5c6-r6c5 total 7 repeats true connected true
cage-2: cage r1c3-r1c4-r1c5-r1c6-r2c3-r2c6-r2c7-r2c8-r3c2-r3c3-r3c8-r3c9-r4c1-r4c2-r4c9-r5c1-r5c9-r6c1-r6c8-r6c9-r7c1-r7c2-r7c7-r7c8-r8c2-r8c3-r8c4-r8c7-r9c4-r9c5-r9c6-r9c7 total 80 repeats true connected true
```

```drawing
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,8.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,8.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,8.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,2.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,2.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,2],"width":0.3,"height":0.3,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,2],"width":0.3,"height":0.3,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,6.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,4],"width":0.3,"height":0.3,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,6.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2}}
```

Normal Sudoku rules apply. Numbers in cages sum to the number in the top left corner of the cage. Numbers can repeat in cages. Numbers with dots between them are consecutive. Not all possible dots are given. No 2 adjacent numbers can sum to 10 (no X are possible).
