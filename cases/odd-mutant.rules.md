---
format: open-rules
title: Odd Mutant
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/odd-mutant
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
---

```rules
sudoku 9x9
cage-1: cage r1c4-r1c5-r1c6-r1c7-r2c7 total 25 connected true
cage-2: cage r3c5-r3c6 total 4 connected true
cage-3: cage r1c1-r2c1 total 4 connected true
cage-4: cage r7c2-r7c3 total 4 connected true
cage-5: cage r7c6-r8c5-r8c6-r9c6-r9c7 total 25 connected true
cage-6: cage r9c8-r9c9 total 4 connected true
cage-7: cage r5c9-r6c9 total 6 connected true
cage-8: cage r3c8-r4c8 total 12 connected true
cage-9: cage r4c4-r5c4 total 4 connected true
cage-10: cage r3c3-r4c3 total 10 connected true
cage-11: cage r1c9-r2c9 total 6 connected true
parity-cells r1c1-r2c1-r2c2-r2c3-r3c3-r1c4-r1c5-r1c6-r3c6-r3c5-r1c7-r2c7-r2c8-r3c8-r3c7-r4c7-r4c8-r5c8-r5c9-r6c9-r7c9-r8c9-r9c9-r9c8-r9c7-r9c6-r8c6-r7c6-r8c5-r7c4-r6c5-r6c4-r5c4-r4c5-r4c4-r4c3-r5c3-r5c2-r6c2-r6c1-r7c2-r7c3-r8c2-r8c1-r9c1 parity "odd"
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#60D060","thickness":0,"opacity":0.5}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#60D060","thickness":0,"opacity":0.5}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#60D060","thickness":0,"opacity":0.5}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#60D060","thickness":0,"opacity":0.5}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#60D060","thickness":0,"opacity":0.5}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#60D060","thickness":0,"opacity":0.5}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#8080F0","thickness":0,"opacity":0.5}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#60D060","thickness":0,"opacity":0.5}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#60D060","thickness":0,"opacity":0.5}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[8.5,0.5],[7.5,0.5],[7.5,1.5],[6.5,1.5],[6.5,2.5],[6.5,3.5],[5.5,3.5],[5.5,4.5]],"color":"#ABABAB","thickness":8,"rounded":true}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[0.5,0.5],[1.5,0.5],[1.5,1.5],[1.5,2.5],[2.5,2.5],[3.5,2.5],[4.5,2.5],[4.5,1.5],[5.5,1.5],[5.5,0.5]],"color":"#ABABAB","thickness":8,"rounded":true}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[5.5,1.5],[6.5,1.5]],"color":"#ABABAB","thickness":8,"rounded":true}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[5.5,3.5],[4.5,3.5],[3.5,3.5],[3.5,4.5],[2.5,4.5],[2.5,5.5],[2.5,6.5],[1.5,6.5],[0.5,6.5],[0.5,5.5],[0.5,4.5],[0.5,3.5]],"color":"#ABABAB","thickness":8,"rounded":true}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[1.5,6.5],[1.5,7.5],[2.5,7.5],[3.5,7.5],[3.5,6.5]],"color":"#ABABAB","thickness":8,"rounded":true}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"line","points":[[3.5,7.5],[4.5,7.5],[4.5,8.5],[5.5,8.5],[6.5,8.5],[7.5,8.5],[8.5,8.5],[8.5,7.5],[8.5,6.5],[8.5,5.5],[7.5,5.5],[6.5,5.5]],"color":"#ABABAB","thickness":8,"rounded":true}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"line","points":[[7.5,5.5],[7.5,4.5]],"color":"#ABABAB","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply. Numbers in gray circles are odd. Numbers in cages sum to the number in the top left corner of the cage. Numbers cannot repeat in cages. Numbers in GREEN cells are the SUM of two of the orthogonally adjacent odd numbers. Numbers in RED cells are the DIFFERENCE of two of the orthogonally adjacent odd numbers. The number in the BLUE cell has BOTH green and red properties. All possible green, red and blue cells are shown.
