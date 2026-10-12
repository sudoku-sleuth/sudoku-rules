---
format: open-rules
title: Happy Birthday, FastSandals!
setter: Timotab
source: https://sudokupad.app/fyxpq9z9zs
case: https://sudoku-sleuth.com/cases/happy-birthday-fastsandals
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r2c2=6 r2c5=7 r2c7=1 r2c8=3
---

```rules
sudoku 9x9
cage-1: cage r6c8-r6c9 total 11 connected true
cage-2: cage r3c2-r3c3 total 11 connected true
cage-3: cage r3c5-r4c5-r4c6 total 11 connected true
cage-4: cage r7c6-r7c7 total 11 connected true
cage-5: cage r6c4-r7c4 total 11 connected true
little-killer-1: little-killer r7c1-r6c2-r5c3-r4c4-r3c5-r2c6-r1c7 sum 11
little-killer-2: little-killer r3c1-r2c2-r1c3 sum 11
little-killer-3: little-killer r3c9-r2c8-r1c7 sum 11
little-killer-4: little-killer r9c6-r8c7-r7c8-r6c9 sum 11
little-killer-5: little-killer r1c2-r2c1 sum 11
little-killer-6: little-killer r6c1-r7c2-r8c3-r9c4 sum 11
little-killer-7: little-killer r9c2-r8c1 sum 11
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#0003","thickness":0}}
```

• Normal Sudoku rules apply: Place the digits 1-9 in each row, column, and box, once each.
• Clones: Shaded areas are clones. Digits in clones must be identical and in identical positions in each clone.
• Little Killers: Numbers outside the grid give the sum of the indicated diagonal. These digits can repeat if allowed by other rules. 
• Killer Cages: Digits in cages cannot repeat, and must sum to the value in the top left corner of the cage.
