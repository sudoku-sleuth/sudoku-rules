---
format: open-rules
title: 159-Squared
setter: Meggen033
source: https://sudokupad.app/ya4ojvj0fo
case: https://sudoku-sleuth.com/cases/159-squared
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
---

```rules
sudoku 9x9
cage-1: cage r4c4-r5c4 total 5 connected true
cage-2: cage r9c8-r9c9 total 5 connected true
cage-3: cage r2c2-r3c2 total 12 connected true
cage-4: cage r2c5-r2c6 total 13 connected true
cage-5: cage r3c7-r4c7 total 8 connected true
cage-6: cage r7c4-r7c5 total 9 connected true
cage-7: cage r5c3-r6c3 total 7 connected true
cage-8: cage r7c6-r8c6-r9c6 total 11 connected true
cage-9: cage r4c1-r4c2-r4c3 total 11 connected true
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
```

•	Normal Sudoku rules apply. 
•	Box 1-5-9:  Each digit in box 1 indexes the 1 in that digit’s box in its corresponding box position.  The same rule applies to box 5 digits indexing 5 in that digit’s box and corresponding position, and box 9 digits indexing 9 in that digit’s box and corresponding position (i.e if R3C1=6 then R6C7=1, if R4C6=7 then R7C3=5, & if R8C8=3 then R2C8=9).
•	Digits in a cage do not repeat and sum to the clue in the top left.
