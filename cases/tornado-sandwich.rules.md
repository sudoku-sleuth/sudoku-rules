---
format: open-rules
title: Tornado Sandwich
setter: Will Power
source: https://f-puzzles.com/?id=yaogp34s
case: https://sudoku-sleuth.com/cases/tornado-sandwich
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
kropki-1: kropki r9c3-r9c4 colour "white"
kropki-2: kropki r6c2-r6c3 colour "white"
kropki-3: kropki r4c1-r4c2 colour "white"
kropki-4: kropki r8c6-r8c7 colour "white"
kropki-5: kropki r6c8-r7c8 colour "white"
kropki-6: kropki r3c8-r3c9 colour "white"
sandwich-1: sandwich r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9 sum 35
sandwich-2: sandwich r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9 sum 22
sandwich-3: sandwich r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8-r3c9 sum 26
sandwich-4: sandwich r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8-r4c9 sum 30
sandwich-5: sandwich r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9 sum 13
sandwich-6: sandwich r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8-r6c9 sum 15
sandwich-7: sandwich r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8-r7c9 sum 13
sandwich-8: sandwich r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r8c9 sum 14
sandwich-9: sandwich r9c1-r9c2-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8-r9c9 sum 8
sandwich-10: sandwich r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r9c1 sum 8
sandwich-11: sandwich r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4-r8c4-r9c4 sum 32
sandwich-12: sandwich r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6-r8c6-r9c6 sum 23
sandwich-13: sandwich r1c8-r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8-r9c8 sum 8
extremum r4c5-r1c2-r8c9 type "max" exhaustive false
```

```drawing
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.5,0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"1","textColor":"#000000","fontSize":20}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.5,1.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"0","textColor":"#000000","fontSize":20}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.5,2.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"0","textColor":"#000000","fontSize":20}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.5,3.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"6","textColor":"#000000","fontSize":20}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.5,4.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"0","textColor":"#000000","fontSize":20}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.5,5.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"5","textColor":"#000000","fontSize":20}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.5,6.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"0","textColor":"#000000","fontSize":20}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.5,7.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"1","textColor":"#000000","fontSize":20}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.5,8.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"0","textColor":"#000000","fontSize":20}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,9.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"7","textColor":"#000000","fontSize":20}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,9.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"4","textColor":"#000000","fontSize":20}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,9.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"4","textColor":"#000000","fontSize":20}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,9.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"5","textColor":"#000000","fontSize":20}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,9.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"2","textColor":"#000000","fontSize":20}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,9.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"2","textColor":"#000000","fontSize":20}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,9.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"3","textColor":"#000000","fontSize":20}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,9.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"3","textColor":"#000000","fontSize":20}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,9.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"1","textColor":"#000000","fontSize":20}}
```

Normal Sudoku rules apply. Sandwich- Numbers on the LEFT and TOP outside the grid are the SUM of all numbers between the 1 and 9 in that row or column. Numbers on the RIGHT and BOTTOM outside the grid are the COUNT of all numbers between the 1 and 9 in that row or column. Numbers with a white dot between them are consecutive. Maximums- Numbers shaded gray are greater than all orthogonal neighbors. Not all possible dots and maximums are shown.
