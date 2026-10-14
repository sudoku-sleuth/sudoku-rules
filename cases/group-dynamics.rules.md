---
format: open-rules
title: Group Dynamics
setter: Will Power
source: https://sudokupad.app/7w413hjxxw
case: https://sudoku-sleuth.com/cases/group-dynamics
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: a0b3db034026b7054d68404719a968f0
---

```rules
sudoku 9x9
cage-1: cage r5c8-r6c8 total 9 connected true
cage-2: cage r6c1-r6c2-r7c1-r7c2 total 11 connected true
cage-3: cage r7c7-r7c8-r8c7 total 22 connected true
cage-4: cage r8c9-r9c8-r9c9 total 17 connected true
cage-5: cage r3c3-r3c4-r4c3-r4c4 total 27 connected true
cage-6: cage r1c4-r1c5-r2c4-r2c5 total 12 connected true
cage-7: cage r3c8-r3c9-r4c8 total 8 connected true
cage-8: cage r1c1-r1c2-r2c1 total 20 connected true
cage-9: cage r1c8-r1c9-r2c8-r2c9 total 30 connected true
cage-10: cage r8c5-r8c6-r9c5-r9c6 total 13 connected true
kropki-1: kropki r3c3-r3c4 white
kropki-2: kropki r3c4-r3c5 white
kropki-3: kropki r3c5-r3c6 white
kropki-4: kropki r3c6-r3c7 white
```

```drawing
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[5.5,2.5],[4.5,3.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[3.5,4.5],[2.5,5.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[4.5,4.5],[5.5,5.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[7.5,4.5],[7.5,5.5],[6.5,6.5],[5.5,7.5],[4.5,7.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[2.5,0.5],[1.5,1.5],[0.5,2.5],[0.5,3.5],[0.5,4.5],[1.5,5.5],[1.5,6.5],[2.5,7.5],[3.5,7.5],[4.5,8.5]],"color":"#FFAB24","thickness":8,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[4.5,0.5],[5.5,1.5],[6.5,1.5],[7.5,2.5],[7.5,3.5],[8.5,4.5],[8.5,5.5],[8.5,6.5],[7.5,7.5],[6.5,8.5]],"color":"#FFAB24","thickness":8,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[0.5,6.5],[0.5,7.5],[1.5,8.5],[2.5,8.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[5.5,0.5],[6.5,0.5],[7.5,1.5],[8.5,2.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[2.5,1.5],[3.5,1.5],[4.5,1.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[1.5,2.5],[1.5,3.5],[1.5,4.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,7],"width":0,"height":0,"rounded":false,"thickness":0,"text":"     8","textColor":"#000000","fontSize":12}}
```

Normal Sudoku rules apply. RECURRENT LINES- Any three consecutive numbers on an orange line have the same set of numbers. AVERAGE LINES- The sum of all numbers on each blue line has an average of 5. SUMMED REGIONS- Numbers in dashed regions sum to the number in the top left corner of the region. Numbers may repeat on blue lines and in regions, if other rules allow. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Not all possible dots are shown.
