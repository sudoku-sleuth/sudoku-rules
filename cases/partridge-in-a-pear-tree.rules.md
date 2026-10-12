---
format: open-rules
title: Partridge in a Pear Tree
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/partridge-in-a-pear-tree
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
---

```rules
sudoku 9x9
cage-1: cage r8c1-r8c2-r8c3 total 15 connected true
cage-2: cage r1c7-r1c8-r1c9 total 15 connected true
cage-3: cage r2c4-r2c5-r2c6 total 19 connected true
cage-4: cage r3c1-r3c2-r3c3 total 12 connected true
cage-5: cage r9c1-r9c2-r9c3 total 6 connected true
cage-6: cage r7c7-r7c8-r7c9 total 8 connected true
cage-7: cage r8c7-r9c7 total 7 connected true
cage-8: cage r4c8-r4c9 total 7 connected true
kropki-1: kropki r7c7-r7c8 colour "white"
kropki-2: kropki r1c5-r2c5 colour "black"
whispers-1: whispers r4c9-r3c8-r2c7-r1c6-r1c5-r2c4 gap 4
whispers-2: whispers r6c8-r5c7-r4c6-r3c6 gap 4
whispers-3: whispers r3c6-r2c5-r2c4 gap 4
whispers-4: whispers r2c7-r3c7-r4c8-r5c9 gap 4
renban-1: renban r4c2-r5c3-r6c4-r7c4-r8c3-r8c2-r7c1-r6c1-r5c2
renban-2: renban r4c5-r5c6-r6c7-r6c8-r6c9-r7c6-r8c5-r9c4
renban-3: renban r3c2-r4c2-r4c4-r3c3-r3c1-r1c1-r2c2-r1c2-r3c4
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,7],"width":0,"height":0,"rounded":false,"thickness":0,"text":"     7","textColor":"#000000","fontSize":14}}
```

Normal Sudoku rules apply. DUTCH WHISPERS- Numbers on red lines are at least 4 apart from their neighbors on the line. Numbers may repeat on the red line. RENBAN- Numbers on brown lines are each a set of consecutive numbers, in any order. RENBAN+ LINES- Numbers on the green line (pear) are CONSECUTIVE with their neighbors on the line. Numbers do not repeat on green and brown lines. KROPKI PAIRS- Numbers with white dots between them are consecutive. Numbers with black dots between them are in a ratio of 2:1. Not all possible dots are given. Two out of three numbers in all six shaded areas are the same numbers as one another.
