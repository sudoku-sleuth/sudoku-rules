---
format: open-rules
title: Playstation 5
setter: Will Power
source: https://f-puzzles.com/?id=y8qfjmjy
case: https://sudoku-sleuth.com/cases/playstation-5
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: b535a3f672007cb0efcd322f2bd11d52
---

```rules
sudoku 9x9
cage-1: cage r8c7-r8c8 total 5 connected true
cage-2: cage r9c2-r9c3 total 5 connected true
cage-3: cage r6c1-r7c1 total 5 connected true
cage-4: cage r4c8-r4c9 total 5 connected true
cage-5: cage r2c7-r3c7 total 5 connected true
pair-1: pair r2c9-r3c9 difference 5
pair-2: pair r2c2-r2c3 difference 5
pair-3: pair r3c7-r3c8 difference 5
pair-4: pair r4c4-r4c5 difference 5
pair-5: pair r3c2-r3c3 difference 5
pair-6: pair r8c8-r8c9 difference 5
pair-7: pair r9c8-r9c9 difference 5
pair-8: pair r9c6-r9c7 difference 5
pair-9: pair r8c6-r8c7 difference 5
pair-10: pair r7c6-r8c6 difference 5
pair-11: pair r7c7-r8c7 difference 5
pair-12: pair r7c6-r7c7 difference 5
pair-13: pair r7c5-r8c5 difference 5
pair-14: pair r7c3-r7c4 difference 5
pair-15: pair r7c1-r8c1 difference 5
pair-16: pair r6c9-r7c9 difference 5
pair-17: pair r7c2-r8c2 difference 5
pair-18: pair r4c1-r5c1 difference 5
pair-19: pair r5c5-r5c6 difference 5
pair-20: pair r5c8-r6c8 difference 5
pair-21: pair r1c1-r1c2 difference 5
pair-22: pair r3c5-r4c5 difference 5
pair-23: pair r6c5-r6c6 difference 5
whispers-1: whispers r4c1-r3c2-r3c3-r4c4-r4c5-r4c6-r3c7-r3c8-r4c9 gap 5
whispers-2: whispers r1c5-r2c6-r3c5-r4c5 gap 5
whispers-3: whispers r6c9-r7c9-r8c9-r8c8-r7c7-r7c6-r7c5-r7c4-r7c3-r8c2-r8c1-r7c1 gap 5
```

```drawing
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,1.5],"width":0.5,"height":0.5,"rounded":false,"fill":"#B3B3B3","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,0.5],"width":0.5,"height":0.5,"rounded":false,"fill":"#B3B3B3","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,2.5],"width":0.5,"height":0.5,"rounded":false,"fill":"#B3B3B3","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,1.5],"width":0.5,"height":0.5,"rounded":false,"fill":"#B3B3B3","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,3],"width":1,"height":1,"rounded":true,"fill":"#9E9E9E","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,6],"width":1,"height":1,"rounded":true,"fill":"#9E9E9E","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,7.5],"width":0.5,"height":0.5,"rounded":true,"fill":"#527EDE","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,8.5],"width":0.5,"height":0.5,"rounded":true,"fill":"#DE5959","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,6.5],"width":0.5,"height":0.5,"rounded":true,"fill":"#F2B7B4","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,7.5],"width":0.5,"height":0.5,"rounded":true,"fill":"#85F279","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
```

Normal sudoku rules apply. German Whispers Lines- Numbers on lines are at least 5 away from their neighbors on the line. Numbers in cages sum to 5. Numbers with a white dot between them have a DIFFERENCE of 5. Not all possible cages and dots are given. The sum of the 4 colored circles is 15.
