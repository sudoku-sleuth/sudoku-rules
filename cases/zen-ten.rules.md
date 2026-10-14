---
format: open-rules
title: Zen-Ten
setter: EPH
source: https://tinyurl.com/3tmrheea
case: https://sudoku-sleuth.com/cases/zen-ten
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
exported: 32d9ebb79c61149fdabd7027cb767aae
---

```rules
sudoku 9x9
cage-1: cage r1c4-r1c5-r1c6 total 10 connected true
cage-2: cage r4c1-r5c1-r6c1 total 10 connected true
cage-3: cage r9c4-r9c5-r9c6 total 15 connected true
cage-4: cage r4c9-r5c9-r6c9 total 15 connected true
```

```drawing
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[1.5,0.5],[0.5,0.5],[0.5,1.5],[0.5,2.5],[1.5,2.5]],"color":"#FF0000","thickness":8,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[0.5,7.5],[0.5,8.5],[1.5,8.5],[2.5,8.5],[2.5,7.5]],"color":"#FF0000","thickness":8,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[7.5,8.5],[8.5,8.5],[8.5,7.5],[8.5,6.5],[7.5,6.5]],"color":"#FF0000","thickness":8,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[6.5,1.5],[6.5,0.5],[7.5,0.5],[8.5,0.5],[8.5,1.5]],"color":"#FF0000","thickness":8,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[2.5,4.5],[2.5,3.5],[3.5,2.5]],"color":"#FF0000","thickness":8,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[4.5,2.5],[5.5,2.5],[6.5,3.5]],"color":"#FF0000","thickness":8,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[6.5,4.5],[6.5,5.5],[5.5,6.5]],"color":"#FF0000","thickness":8,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[4.5,6.5],[3.5,6.5],[2.5,5.5]],"color":"#FF0000","thickness":8,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[3.5,4.5],[3.5,5.5]],"color":"#FF0000","thickness":8,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[4.5,5.5],[5.5,5.5]],"color":"#FF0000","thickness":8,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[5.5,4.5],[5.5,3.5]],"color":"#FF0000","thickness":8,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[4.5,3.5],[3.5,3.5]],"color":"#FF0000","thickness":8,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[1.5,3.5],[2.5,2.5]],"color":"#FF0000","thickness":8,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[2.5,6.5],[3.5,7.5]],"color":"#FF0000","thickness":8,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[6.5,6.5],[7.5,5.5]],"color":"#FF0000","thickness":8,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[6.5,2.5],[5.5,1.5]],"color":"#FF0000","thickness":8,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,1.5],"width":0.25,"height":0.25,"rounded":true,"fill":"#FF0000","stroke":"#00000000","thickness":1,"textColor":"#00000000","opacity":0.5}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,8.5],"width":0.25,"height":0.25,"rounded":true,"fill":"#FF0000","stroke":"#00000000","thickness":1,"textColor":"#00000000","opacity":0.5}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,7.5],"width":0.25,"height":0.25,"rounded":true,"fill":"#FF0000","stroke":"#00000000","thickness":1,"textColor":"#00000000","opacity":0.5}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,0.5],"width":0.25,"height":0.25,"rounded":true,"fill":"#FF0000","stroke":"#00000000","thickness":1,"textColor":"#00000000","opacity":0.5}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,3.5],"width":0.25,"height":0.25,"rounded":true,"fill":"#FF0000","stroke":"#00000000","thickness":1,"textColor":"#00000000","opacity":0.5}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,2.5],"width":0.25,"height":0.25,"rounded":true,"fill":"#FF0000","stroke":"#00000000","thickness":1,"textColor":"#00000000","opacity":0.5}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,5.5],"width":0.25,"height":0.25,"rounded":true,"fill":"#FF0000","stroke":"#00000000","thickness":1,"textColor":"#00000000","opacity":0.5}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,6.5],"width":0.25,"height":0.25,"rounded":true,"fill":"#FF0000","stroke":"#00000000","thickness":1,"textColor":"#00000000","opacity":0.5}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,5],"width":0.25,"height":0.25,"rounded":true,"fill":"#FF0000","stroke":"#00000000","thickness":1,"textColor":"#00000000","opacity":0.5}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,5.5],"width":0.25,"height":0.25,"rounded":true,"fill":"#FF0000","stroke":"#00000000","thickness":1,"textColor":"#00000000","opacity":0.5}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,4],"width":0.25,"height":0.25,"rounded":true,"fill":"#FF0000","stroke":"#00000000","thickness":1,"textColor":"#00000000","opacity":0.5}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,3.5],"width":0.25,"height":0.25,"rounded":true,"fill":"#FF0000","stroke":"#00000000","thickness":1,"textColor":"#00000000","opacity":0.5}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,3],"width":0.25,"height":0.25,"rounded":true,"fill":"#FF0000","stroke":"#00000000","thickness":1,"textColor":"#00000000","opacity":0.5}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,7],"width":0.25,"height":0.25,"rounded":true,"fill":"#FF0000","stroke":"#00000000","thickness":1,"textColor":"#00000000","opacity":0.5}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,6],"width":0.25,"height":0.25,"rounded":true,"fill":"#FF0000","stroke":"#00000000","thickness":1,"textColor":"#00000000","opacity":0.5}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,2],"width":0.25,"height":0.25,"rounded":true,"fill":"#FF0000","stroke":"#00000000","thickness":1,"textColor":"#00000000","opacity":0.5}}
```

Standard sudoku rules apply: each row, column, and 3x3 box must contain all the digits from 1 to 9.

Cells within cages must sum to the number in the top left corner of the cage.

The red lines are Anti-Palindrome lines: the Nth cell from one end plus the Nth cell from the other end must equal 10.
