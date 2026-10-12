---
format: open-rules
title: Britannia
setter: Blobz
source: https://sudokupad.app/blobz/britannia
case: https://sudoku-sleuth.com/cases/britannia
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r1c8=8 r2c1=8 r2c3=7 r3c8=2 r7c2=6 r8c7=9 r8c9=6 r9c2=7
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r2c2 total 10 connected true
cage-2: cage r1c3-r1c4-r2c4 total 9 connected true
cage-3: cage r1c5-r2c5-r3c5 total 13 connected true
cage-4: cage r1c6-r1c7-r2c6 total 17 connected true
cage-5: cage r1c9-r2c8-r2c9 total 18 connected true
cage-6: cage r3c9-r4c8-r4c9 total 8 connected true
cage-7: cage r5c7-r5c8-r5c9 total 13 connected true
cage-8: cage r6c8-r6c9-r7c9 total 24 connected true
cage-9: cage r8c8-r9c8-r9c9 total 7 connected true
cage-10: cage r8c6-r9c6-r9c7 total 15 connected true
cage-11: cage r7c5-r8c5-r9c5 total 16 connected true
cage-12: cage r8c4-r9c3-r9c4 total 19 connected true
cage-13: cage r8c1-r8c2-r9c1 total 14 connected true
cage-14: cage r6c1-r6c2-r7c1 total 17 connected true
cage-15: cage r5c1-r5c2-r5c3 total 16 connected true
cage-16: cage r3c1-r4c1-r4c2 total 11 connected true
diagonal-1: diagonal direction "main"
diagonal-2: diagonal direction "anti"
index-1: index r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5 axis "column"
index-2: index r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9 axis "row"
```

```drawing
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,3.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#8fb7ed9b","thickness":0,"angle":0}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,3.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#8fb7ed9b","thickness":0,"angle":0}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,2.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#8fb7ed9b","thickness":0,"angle":0}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,5.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#8fb7ed9b","thickness":0,"angle":0}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,5.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#8fb7ed9b","thickness":0,"angle":0}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,6.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#8fb7ed9b","thickness":0,"angle":0}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,0.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#8fb7ed9b","thickness":0,"angle":0}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,0.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#8fb7ed9b","thickness":0,"angle":0}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,1.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#8fb7ed9b","thickness":0,"angle":0}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,1.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#8fb7ed9b","thickness":0,"angle":0}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,0.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#8fb7ed9b","thickness":0,"angle":0}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,0.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#8fb7ed9b","thickness":0,"angle":0}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,7.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#8fb7ed9b","thickness":0,"angle":0}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,8.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#8fb7ed9b","thickness":0,"angle":0}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,8.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#8fb7ed9b","thickness":0,"angle":0}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,7.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#8fb7ed9b","thickness":0,"angle":0}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,8.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#8fb7ed9b","thickness":0,"angle":0}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,8.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#8fb7ed9b","thickness":0,"angle":0}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,6.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#8fb7ed9b","thickness":0,"angle":0}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,5.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#8fb7ed9b","thickness":0,"angle":0}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,5.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#8fb7ed9b","thickness":0,"angle":0}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,2.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#8fb7ed9b","thickness":0,"angle":0}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,3.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#8fb7ed9b","thickness":0,"angle":0}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,3.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#8fb7ed9b","thickness":0,"angle":0}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"line","points":[[8.5,0.5],[4.5,4.5],[8.5,8.5]],"color":"#efaaaaff","thickness":24.32,"rounded":true}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"line","points":[[0.5,8.5],[4.5,4.5],[0.5,0.5]],"color":"#efaaaaff","thickness":24.32,"rounded":true}}
```

Normal sudoku rules apply.

Digits in row 5 index the position of 5's in their column. Likewise, digits in column 5 index the position of 5's in their row. For example, if r4c5 is a 2, then r4c2 is a 5.

Digits do not repeat along the two marked diagonals.

Digits in cages do not repeat, and sum to the value given.
