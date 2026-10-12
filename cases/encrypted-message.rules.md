---
format: open-rules
title: Encrypted Message
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/encrypted-message
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r9c1-r9c2 total 5 connected true
cage-2: cage r8c9-r9c9 total 15 connected true
cage-3: cage r8c8-r9c8 total 14 connected true
cage-4: cage r3c8-r3c9 total 12 connected true
cage-5: cage r1c1-r2c1 total 6 connected true
cage-6: cage r2c2-r3c2 total 5 connected true
cage-7: cage r7c2-r7c3 total 7 connected true
cage-8: cage r8c1-r8c2 total 9 connected true
cage-9: cage r1c8-r1c9 total 15 connected true
cage-10: cage r4c4-r5c4 total 15 connected true
cage-11: cage r6c5-r6c6 total 15 connected true
cage-12: cage r1c4-r1c5 total 5 connected true
cage-13: cage r3c5-r3c6 total 6 connected true
cage-14: cage r4c8-r4c9 total 5 connected true
kropki-1: kropki r4c5-r4c6 colour "white"
kropki-2: kropki r4c6-r4c7 colour "white"
kropki-3: kropki r8c3-r8c4 colour "white"
kropki-4: kropki r6c8-r7c8 colour "white"
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
```

Normal Sudoku rules apply. KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Not all possible dots are given. After completing the puzzle, within the shaded areas, replace the following numbers with the following letters: 1-Y, 2-D, 3-C, 4-A, 5-I, 6-H, 7-N, 8-V, 9-E.
