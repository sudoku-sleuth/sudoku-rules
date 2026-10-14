---
format: open-rules
title: St. Patrick
setter: Will Power
source: https://f-puzzles.com/?id=y9vcxz26
case: https://sudoku-sleuth.com/cases/st-patrick
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: a0f5e7031dc09e8198e7b57b181f3599
---

```rules
sudoku 9x9
cage-1: cage r4c4-r4c5-r4c6-r5c5 total 30 connected true
cage-2: cage r3c8-r3c9 total 5 connected true
cage-3: cage r7c2-r7c3 total 17 connected true
cage-4: cage r8c7-r8c8 total 16 connected true
cage-5: cage r8c1-r8c2-r8c3-r8c4 total 10 connected true
cage-6: cage r9c5-r9c6-r9c7-r9c8 total 11 connected true
cage-7: cage r6c7-r6c8 total 14 connected true
cage-8: cage r7c8-r7c9 total 5 connected true
kropki-1: kropki r3c7-r3c8 white
kropki-2: kropki r3c4-r3c5 white
kropki-3: kropki r4c1-r4c2 white
kropki-4: kropki r1c2-r1c3 white
whispers-1: whispers r3c3-r3c4-r2c4-r1c4-r1c5-r1c6-r2c6-r3c6-r3c7 gap 5
whispers-2: whispers r6c3-r7c3-r8c3-r9c3 gap 5
whispers-3: whispers r6c7-r7c7-r8c7-r9c7 gap 5
whispers-4: whispers r5c3-r6c2-r7c2-r8c2 gap 5
whispers-5: whispers r5c7-r6c8-r7c8-r8c8 gap 5
```

```drawing
- {"id":"drawing-63","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,4],"width":0.25,"height":0.25,"rounded":true,"fill":"#45C9BE","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-64","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,5],"width":0.25,"height":0.25,"rounded":true,"fill":"#45C9BE","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
```

Normal sudoku rules apply. German Whispers Lines- Numbers on lines are at least 5 away from their neighbors on the line. Numbers on lines may repeat. Numbers in cages sum to the number in the top left corner of the cage. Numbers with a white dot between them are consecutive. Not all possible dots are given.
