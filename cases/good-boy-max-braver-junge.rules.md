---
format: open-rules
title: Good Boy, Max! (braver Junge)
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/good-boy-max-braver-junge
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r1c4-r2c4 total 10 connected true
cage-2: cage r8c3-r8c4 total 9 connected true
cage-3: cage r5c5-r5c6 total 11 connected true
cage-4: cage r4c5-r4c6 total 10 connected true
cage-5: cage r6c1-r7c1 total 12 connected true
cage-6: cage r2c9-r3c9 total 6 connected true
kropki-1: kropki r6c9-r7c9 colour "white"
kropki-2: kropki r7c8-r7c9 colour "white"
kropki-3: kropki r7c8-r8c8 colour "white"
kropki-4: kropki r8c8-r9c8 colour "white"
kropki-5: kropki r1c1-r2c1 colour "white"
kropki-6: kropki r2c1-r2c2 colour "white"
kropki-7: kropki r3c1-r3c2 colour "white"
kropki-8: kropki r1c3-r2c3 colour "white"
kropki-9: kropki r4c9-r5c9 colour "white"
kropki-10: kropki r8c5-r9c5 colour "white"
kropki-11: kropki r6c7-r6c8 colour "white"
whispers r9c6-r8c5-r8c4-r8c3-r8c2-r7c1-r6c1-r5c1-r5c2-r5c3-r5c4-r4c4-r3c5-r3c6-r2c7-r1c8-r2c8-r3c8-r4c8-r5c9 gap 5
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#FFE060","thickness":0,"opacity":0.5}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#FFE060","thickness":0,"opacity":0.5}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#FFE060","thickness":0,"opacity":0.5}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#FFE060","thickness":0,"opacity":0.5}}
```

Normal Sudoku rules apply. German Whispers- Numbers on green line are at least 5 apart from their neighbors on the line. Numbers may repeat on the line, if other rules allow. Numbers with a white dot between them are consecutive. Not all possible dots are given. Numbers in cages sum to the number in the top left corner of the cage. Numbers on each of the three flag colors add to 20.
