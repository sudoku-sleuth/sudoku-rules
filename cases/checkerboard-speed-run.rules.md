---
format: open-rules
title: Checkerboard Speed Run
setter: Will Power
source: https://sudokupad.app/fqut5vpwru
case: https://sudoku-sleuth.com/cases/checkerboard-speed-run
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r4c5-r5c5-r6c5 total 22 connected true
cage-2: cage r2c1-r3c1-r3c2 total 23 connected true
cage-3: cage r1c7-r1c8-r2c7 total 23 connected true
cage-4: cage r7c8-r7c9-r8c9 total 22 connected true
cage-5: cage r8c3-r9c2-r9c3 total 21 connected true
whispers r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r8c9 gap 4
pair-1: pair r5c4-r6c4 sum 10
pair-2: pair r4c4-r4c5 sum 10
pair-3: pair r4c6-r5c6 sum 10
pair-4: pair r6c5-r6c6 sum 10
pair-5: pair r1c8-r1c9 sum 10
pair-6: pair r8c9-r9c9 sum 10
pair-7: pair r9c1-r9c2 sum 10
pair-8: pair r5c1-r5c2 sum 10
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
```

Normal Sudoku Rules apply. Red cells are greater than 5.

DUTCH WHISPERS- Numbers on the red line are at least 4 apart from their neighbors on the line.

XV PAIRS- Numbers with an X between them sum to 10. Not all possible X are given.

KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage. No two-cell cage, with a sum of less than 6, can be made anywhere in this puzzle.

Post your time on LMD in the comments, if you like. Bonus for less than 10 minutes. Double bonus for less than 8 Minutes.
