---
format: open-rules
title: Between Friends
setter: Blobz
source: https://sudokupad.app/blobz/between-friends
case: https://sudoku-sleuth.com/cases/between-friends
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 76013833fa10c685746ae378631cf6d6
---

```rules
sudoku 9x9
cage-1: cage r5c2-r5c3 total 10 connected true
cage-2: cage r5c7-r5c8 total 10 connected true
cage-3: cage r1c5-r2c5 total 11 connected true
cage-4: cage r8c5-r9c5 total 11 connected true
cage-5: cage r4c9-r5c9-r6c9 total 14 connected true
cage-6: cage r8c1-r9c1-r9c2 total 10 connected true
cage-7: cage r9c6-r9c7 total 8 connected true
cage-8: cage r4c4-r4c5 total 8 connected true
cage-9: cage r6c5-r6c6 total 8 connected true
cage-10: cage r4c1-r5c1-r6c1 total 10 connected true
cage-11: cage r1c8-r1c9-r2c9 total 17 connected true
cage-12: cage r1c3-r1c4 total 12 connected true
cage-13: cage r3c3-r4c3 total 16 connected true
cage-14: cage r8c8-r8c9-r9c8 total 6 connected true
cage-15: cage r1c2-r2c1-r2c2 total 14 connected true
cage-16: cage r6c7-r7c7 total 17 connected true
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[2.5,4.5],[6.5,4.5]],"color":"#aaa","thickness":6,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[2.5,3.5],[3.5,3.5],[4.5,2.5],[5.5,3.5],[6.5,3.5]],"color":"#aaa","thickness":6,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[2.5,5.5],[3.5,5.5],[4.5,6.5],[5.5,5.5],[6.5,5.5]],"color":"#aaa","thickness":6,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[3.5,6.5],[3.5,7.5],[4.5,8.5],[5.5,7.5],[5.5,6.5]],"color":"#aaa","thickness":6,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[3.5,2.5],[3.5,1.5],[4.5,0.5],[5.5,1.5],[5.5,2.5]],"color":"#aaa","thickness":6,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[1.5,1.5],[0.5,2.5],[0.5,6.5],[1.5,7.5]],"color":"#aaa","thickness":6,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[7.5,1.5],[8.5,2.5],[8.5,6.5],[7.5,7.5]],"color":"#aaa","thickness":6,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[6.5,2.5],[7.5,3.5],[7.5,5.5],[6.5,6.5]],"color":"#aaa","thickness":6,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[2.5,2.5],[1.5,3.5],[1.5,5.5],[2.5,6.5]],"color":"#aaa","thickness":6,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[8.5,7.5],[7.5,8.5],[6.5,7.5]],"color":"#aaa","thickness":6,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[3.5,0.5],[2.5,1.5],[1.5,0.5]],"color":"#aaa","thickness":6,"rounded":true}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,4.5],"width":0.86,"height":0.86,"rounded":true,"fill":"#fff","stroke":"#555","thickness":4,"opacity":0.5}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,4.5],"width":0.86,"height":0.86,"rounded":true,"fill":"#fff","stroke":"#555","thickness":4,"opacity":0.5}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,3.5],"width":0.86,"height":0.86,"rounded":true,"fill":"#fff","stroke":"#555","thickness":4,"opacity":0.5}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,3.5],"width":0.86,"height":0.86,"rounded":true,"fill":"#fff","stroke":"#555","thickness":4,"opacity":0.5}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,5.5],"width":0.86,"height":0.86,"rounded":true,"fill":"#fff","stroke":"#555","thickness":4,"opacity":0.5}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,5.5],"width":0.86,"height":0.86,"rounded":true,"fill":"#fff","stroke":"#555","thickness":4,"opacity":0.5}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,6.5],"width":0.86,"height":0.86,"rounded":true,"fill":"#fff","stroke":"#555","thickness":4,"opacity":0.5}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,6.5],"width":0.86,"height":0.86,"rounded":true,"fill":"#fff","stroke":"#555","thickness":4,"opacity":0.5}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,2.5],"width":0.86,"height":0.86,"rounded":true,"fill":"#fff","stroke":"#555","thickness":4,"opacity":0.5}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,2.5],"width":0.86,"height":0.86,"rounded":true,"fill":"#fff","stroke":"#555","thickness":4,"opacity":0.5}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,1.5],"width":0.86,"height":0.86,"rounded":true,"fill":"#fff","stroke":"#555","thickness":4,"opacity":0.5}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,7.5],"width":0.86,"height":0.86,"rounded":true,"fill":"#fff","stroke":"#555","thickness":4,"opacity":0.5}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,1.5],"width":0.86,"height":0.86,"rounded":true,"fill":"#fff","stroke":"#555","thickness":4,"opacity":0.5}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,7.5],"width":0.86,"height":0.86,"rounded":true,"fill":"#fff","stroke":"#555","thickness":4,"opacity":0.5}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,2.5],"width":0.86,"height":0.86,"rounded":true,"fill":"#fff","stroke":"#555","thickness":4,"opacity":0.5}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,6.5],"width":0.86,"height":0.86,"rounded":true,"fill":"#fff","stroke":"#555","thickness":4,"opacity":0.5}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,2.5],"width":0.86,"height":0.86,"rounded":true,"fill":"#fff","stroke":"#555","thickness":4,"opacity":0.5}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,6.5],"width":0.86,"height":0.86,"rounded":true,"fill":"#fff","stroke":"#555","thickness":4,"opacity":0.5}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,7.5],"width":0.86,"height":0.86,"rounded":true,"fill":"#fff","stroke":"#555","thickness":4,"opacity":0.5}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,7.5],"width":0.86,"height":0.86,"rounded":true,"fill":"#fff","stroke":"#555","thickness":4,"opacity":0.5}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,0.5],"width":0.86,"height":0.86,"rounded":true,"fill":"#fff","stroke":"#555","thickness":4,"opacity":0.5}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,0.5],"width":0.86,"height":0.86,"rounded":true,"fill":"#fff","stroke":"#555","thickness":4,"opacity":0.5}}
```

Normal sudoku rules apply. 

Digits along grey lines must be between the digits in the circled ends of the line. 

Digits in cages must sum to the given value.
