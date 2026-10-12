---
format: open-rules
title: Stairway To Heaven LedZeppelin
setter: Will Power
source: https://sudokupad.app/h3w6ldm0ok
case: https://sudoku-sleuth.com/cases/stairway-to-heaven-ledzeppelin
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r9c1-r9c2 total 5 connected true
cage-2: cage r8c2-r8c3 total 6 connected true
cage-3: cage r7c3-r7c4 total 7 connected true
cage-4: cage r6c4-r6c5 total 8 connected true
cage-5: cage r5c5-r5c6 total 9 connected true
cage-6: cage r4c6-r4c7 total 10 connected true
cage-7: cage r3c7-r3c8 total 11 connected true
cage-8: cage r2c8-r2c9 total 12 connected true
cage-9: cage r9c5-r9c6 total 6 connected true
cage-10: cage r8c6-r8c7 total 7 connected true
cage-11: cage r7c7-r7c8 total 8 connected true
cage-12: cage r6c8-r6c9 total 9 connected true
cage-13: cage r8c9-r9c8-r9c9 total 18 connected true
cage-14: cage r1c1-r1c2-r2c1 total 20 connected true
cage-15: cage r4c1-r5c1 total 6 connected true
cage-16: cage r3c2-r4c2 total 7 connected true
cage-17: cage r2c3-r3c3 total 8 connected true
cage-18: cage r1c4-r2c4 total 9 connected true
cage-19: cage r4c9-r5c9 total 4 connected true
kropki-1: kropki r3c4-r3c5 colour "white"
kropki-2: kropki r3c5-r3c6 colour "white"
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#FFE060","thickness":0,"opacity":0.5}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#FFE060","thickness":0,"opacity":0.5}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#FFE060","thickness":0,"opacity":0.5}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#FFE060","thickness":0,"opacity":0.5}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#FFE060","thickness":0,"opacity":0.5}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#FFE060","thickness":0,"opacity":0.5}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#FFE060","thickness":0,"opacity":0.5}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#FFE060","thickness":0,"opacity":0.5}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#FFE060","thickness":0,"opacity":0.5}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#FFE060","thickness":0,"opacity":0.5}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#FFE060","thickness":0,"opacity":0.5}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#FFE060","thickness":0,"opacity":0.5}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#FFE060","thickness":0,"opacity":0.5}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#FFE060","thickness":0,"opacity":0.5}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#FFE060","thickness":0,"opacity":0.5}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#FFE060","thickness":0,"opacity":0.5}}
```

'There's a lady who's sure all that glitters is gold...' (Led Zeppelin 1971) Normal Sudoku rules apply. KILLER CAGES(+)- Numbers in cages sum to the number in the top left corner of the cage. Cages with the same total have the same digits in them. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Not all possible dots are shown.
