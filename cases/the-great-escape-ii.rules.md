---
format: open-rules
title: The Great Escape II
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/the-great-escape-ii
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
  - The source describes Renban lines that are not yet included in our reading.
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#B0FFB0","thickness":0,"opacity":0.5}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[6.5,0.5],[7.5,0.5],[6.5,1.5]],"color":"#FFACA6","thickness":8,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[7.5,2.5],[7.5,1.5],[8.5,1.5],[8.5,2.5]],"color":"#FFACA6","thickness":8,"rounded":true}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[7.5,3.5],[6.5,4.5]],"color":"#FFACA6","thickness":8,"rounded":true}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[7.5,4.5],[8.5,4.5]],"color":"#FFACA6","thickness":8,"rounded":true}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[6.5,7.5],[7.5,6.5],[7.5,7.5],[7.5,8.5],[8.5,8.5],[8.5,7.5]],"color":"#FFACA6","thickness":8,"rounded":true}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[4.5,6.5],[5.5,7.5],[5.5,6.5]],"color":"#FFACA6","thickness":8,"rounded":true}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[3.5,6.5],[3.5,7.5],[4.5,8.5],[5.5,8.5],[4.5,7.5],[3.5,8.5]],"color":"#FFACA6","thickness":8,"rounded":true}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[0.5,6.5],[1.5,7.5],[2.5,8.5],[1.5,8.5]],"color":"#FFACA6","thickness":8,"rounded":true}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[1.5,6.5],[2.5,7.5],[2.5,6.5]],"color":"#FFACA6","thickness":8,"rounded":true}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"line","points":[[0.5,5.5],[1.5,5.5]],"color":"#FFACA6","thickness":8,"rounded":true}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"line","points":[[0.5,3.5],[0.5,4.5]],"color":"#FFACA6","thickness":8,"rounded":true}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"line","points":[[2.5,3.5],[1.5,4.5],[2.5,4.5]],"color":"#FFACA6","thickness":8,"rounded":true}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"line","points":[[0.5,0.5],[0.5,1.5],[1.5,2.5]],"color":"#FFACA6","thickness":8,"rounded":true}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"line","points":[[0.5,2.5],[1.5,1.5],[2.5,1.5],[2.5,0.5]],"color":"#FFACA6","thickness":8,"rounded":true}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"line","points":[[3.5,2.5],[3.5,1.5],[4.5,1.5],[4.5,0.5],[5.5,0.5]],"color":"#FFACA6","thickness":8,"rounded":true}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"line","points":[[4.5,2.5],[5.5,2.5]],"color":"#FFACA6","thickness":8,"rounded":true}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"line","points":[[3.5,3.5],[3.5,4.5],[4.5,4.5],[5.5,3.5]],"color":"#FFACA6","thickness":8,"rounded":true}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"line","points":[[3.5,5.5],[4.5,5.5],[5.5,4.5]],"color":"#FFACA6","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply.  All numbers on pink RENBAN+ Lines are CONSECUTIVE WITH THEIR NEIGHBORS on the line.  ALL possible RENBAN+ Lines THAT DO NOT CROSS BOX BOUNDARIES are shown. You have escaped the prison in my previous Sudoku called "The Great Escape", and now you must get out of the country. You enter the grid from the right of the GREEN cell.  When you are on an even number, you must go straight. When you are on an odd number, you must turn left or right. Gray boxes are mountains, and you cannot travel there. You must enter all other cells, which are on a single orthogonal path that visits all boxes. No mountains contain a value of 3 or 4. Boxes may be visited twice. No cell may be visited twice.
