---
format: open-rules
title: Downtown (Innenstadt) 市中心
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/downtown-innenstadt
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
exported: 9d76efacf1107985ffabb02c7bc47b1e
---

```rules
sudoku 9x9
cage r7c1-r7c2-r8c2 total 10 connected true
pair-1: pair r5c7-r5c8 sum 10
pair-2: pair r8c5-r9c5 sum 10
pair-3: pair r4c3-r4c4 sum 10
pair-4: pair r2c1-r2c2 sum 10
pair-5: pair r4c6-r4c7 sum 10
pair-6: pair r7c8-r7c9 sum 10
pair-7: pair r8c8-r9c8 sum 10
pair-8: pair r8c4-r9c4 sum 10
pair-9: pair r9c3-r9c4 sum 10
pair-10: pair r6c6-r6c7 sum 10
pair-11: pair r6c6-r7c6 sum 10
negative relations [{"op":"sum","value":10}] except [["r5c7","r5c8"],["r8c5","r9c5"],["r4c3","r4c4"],["r2c1","r2c2"],["r4c6","r4c7"],["r7c8","r7c9"],["r8c8","r9c8"],["r8c4","r9c4"],["r9c3","r9c4"],["r6c6","r6c7"],["r6c6","r7c6"]]
```

```drawing
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,3.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"22","textColor":"#000000","fontSize":20}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,4.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"34","textColor":"#000000","fontSize":20}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,5.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"16","textColor":"#000000","fontSize":20}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.5,3.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"19","textColor":"#000000","fontSize":20}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.5,4.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"9","textColor":"#000000","fontSize":20}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.5,5.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"30","textColor":"#000000","fontSize":20}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,-0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"16","textColor":"#000000","fontSize":20}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,-0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"17","textColor":"#000000","fontSize":20}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,-0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"24","textColor":"#000000","fontSize":20}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,9.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"17","textColor":"#000000","fontSize":20}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,9.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"22","textColor":"#000000","fontSize":20}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,9.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"22","textColor":"#000000","fontSize":20}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,-0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"23","textColor":"#000000","fontSize":20}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,9.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"19","textColor":"#000000","fontSize":20}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,8.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"9","textColor":"#000000","fontSize":20}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.5,8.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"23","textColor":"#000000","fontSize":20}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,-0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"35","textColor":"#000000","fontSize":20}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,2.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"20","textColor":"#000000","fontSize":20}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,-0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"30","textColor":"#000000","fontSize":20}}
```

Normal Sudoku rules apply. The center box (#5) is a magic square (All three rows, three columns and two major diagonals each sum to 15). SKYSCRAPER SUMS- Numbers inside the grid correspond to a building of that height, in that location. Numbers outside the grid are the sum of the heights of all buildings that can be seen, looking orthogonally into the grid. Taller buildings block the view of smaller ones behind them. X PAIRS- Numbers with an X between them sum to 10. All possible X are given. KILLER CAGE- Numbers in the cage sum to the number in the top left corner of the cage.
