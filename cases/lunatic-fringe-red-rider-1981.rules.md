---
format: open-rules
title: Lunatic Fringe, Red Rider 1981
setter: Will Power
source: https://sudokupad.app/bf1uklhqof
case: https://sudoku-sleuth.com/cases/lunatic-fringe-red-rider-1981
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
---

```rules
sudoku 9x9
cage-1: cage r7c5-r7c6-r7c7-r7c8-r7c9 total 18 connected true
cage-2: cage r8c1-r8c2-r8c3-r8c4-r8c5 total 18 connected true
whispers-1: whispers r1c1-r2c2 gap 4
whispers-2: whispers r9c1-r8c2 gap 4
whispers-3: whispers r5c8-r6c9 gap 4
whispers-4: whispers r3c9-r4c8 gap 4
whispers-5: whispers r3c1-r4c2 gap 4
whispers-6: whispers r6c1-r5c2 gap 4
whispers-7: whispers r9c9-r8c8 gap 5
whispers-8: whispers r9c7-r8c6 gap 5
whispers-9: whispers r9c4-r8c3 gap 5
whispers-10: whispers r1c9-r2c8 gap 5
whispers-11: whispers r1c7-r2c6 gap 5
whispers-12: whispers r1c3-r2c4 gap 5
whispers-13: whispers r8c5-r9c5 gap 5
whispers-14: whispers r2c5-r2c4 gap 5
```

```drawing
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,1.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"30","textColor":"#000000","fontSize":20}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,4.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"27","textColor":"#000000","fontSize":20}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,6.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"16","textColor":"#000000","fontSize":20}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,8.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"25","textColor":"#000000","fontSize":20}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,9.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"20","textColor":"#000000","fontSize":20}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,9.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"22","textColor":"#000000","fontSize":20}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,9.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"9","textColor":"#000000","fontSize":20}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,9.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"15","textColor":"#000000","fontSize":20}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.5,8.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"27","textColor":"#000000","fontSize":20}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.5,6.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"24","textColor":"#000000","fontSize":20}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.5,4.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"18","textColor":"#000000","fontSize":20}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.5,1.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"16","textColor":"#000000","fontSize":20}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,-0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"23","textColor":"#000000","fontSize":20}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,-0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"31","textColor":"#000000","fontSize":20}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,-0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"21","textColor":"#000000","fontSize":20}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,-0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"25","textColor":"#000000","fontSize":20}}
```

Normal Sudoku rules apply. SKYSCRAPER SUMS- Numbers in the grid represent buildings of that height, at that location. Smaller buildings cannot be seen if they are behind taller buildings. The numbers outside the grid show the SUM OF THE HEIGHTS of all buildings that can be seen from that location, looking orthogonally into the grid. KILLER CAGE CLONES- The two cages have the same numbers, in the same locations, as one another. The numbers in both cages sum to 18. GERMAN WHISPERS- Numbers on green lines are at least 5 apart from their neighbors on the line. DUTCH WHISPERS- Numbers on red lines are at least 4 apart from their neighbors on the line. Numbers do not repeat on green and red lines.
