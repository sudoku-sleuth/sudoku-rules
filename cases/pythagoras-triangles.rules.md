---
format: open-rules
title: Pythagoras Triangles
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/pythagoras-triangles
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
exported: dcce98372f6b13db3ea0a428e0358d50
---

```rules
sudoku 9x9
cage-1: cage r2c9-r3c9 total 8 connected true
cage-2: cage r1c3-r1c4 total 14 connected true
kropki-1: kropki r2c4-r2c5 white
kropki-2: kropki r2c7-r2c8 white
kropki-3: kropki r7c6-r8c6 white
```

```drawing
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[3.5,3.5],[4.5,4.5],[4.5,3.5]],"color":"#FF6961","thickness":8,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[4.5,3.5],[3.5,3.5]],"color":"#FF6961","thickness":8,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[5.5,0.5],[6.5,1.5],[5.5,1.5]],"color":"#FF6961","thickness":8,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[5.5,1.5],[5.5,0.5]],"color":"#FF6961","thickness":8,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[6.5,1.5],[6.5,2.5],[7.5,2.5]],"color":"#FF6961","thickness":8,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[6.5,1.5],[7.5,2.5]],"color":"#FF6961","thickness":8,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[7.5,6.5],[8.5,6.5],[8.5,5.5]],"color":"#FF6961","thickness":8,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[7.5,6.5],[8.5,5.5]],"color":"#FF6961","thickness":8,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[3.5,7.5],[3.5,8.5],[4.5,8.5]],"color":"#FF6961","thickness":8,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[3.5,7.5],[4.5,8.5]],"color":"#FF6961","thickness":8,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[2.5,6.5],[3.5,7.5],[2.5,7.5]],"color":"#FF6961","thickness":8,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[2.5,7.5],[2.5,6.5]],"color":"#FF6961","thickness":8,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[0.5,4.5],[0.5,5.5],[1.5,5.5]],"color":"#FF6961","thickness":8,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[0.5,4.5],[1.5,5.5]],"color":"#FF6961","thickness":8,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[0.5,0.5],[1.5,1.5],[1.5,0.5]],"color":"#FF6961","thickness":8,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[0.5,0.5],[1.5,0.5]],"color":"#FF6961","thickness":8,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[4.5,2.5],[5.5,2.5],[5.5,3.5]],"color":"#5EFFFF","thickness":8,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[5.5,3.5],[4.5,2.5]],"color":"#5EFFFF","thickness":8,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[7.5,3.5],[8.5,3.5],[8.5,4.5]],"color":"#5EFFFF","thickness":8,"rounded":true}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[7.5,3.5],[8.5,4.5]],"color":"#5EFFFF","thickness":8,"rounded":true}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[6.5,0.5],[6.5,1.5],[7.5,1.5]],"color":"#5EFFFF","thickness":8,"rounded":true}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[6.5,0.5],[7.5,1.5]],"color":"#5EFFFF","thickness":8,"rounded":true}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[3.5,6.5],[3.5,7.5],[4.5,7.5]],"color":"#5EFFFF","thickness":8,"rounded":true}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[4.5,7.5],[3.5,6.5]],"color":"#5EFFFF","thickness":8,"rounded":true}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[1.5,4.5],[1.5,5.5],[2.5,5.5]],"color":"#5EFFFF","thickness":8,"rounded":true}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[1.5,4.5],[2.5,5.5]],"color":"#5EFFFF","thickness":8,"rounded":true}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"line","points":[[6.5,6.5],[6.5,7.5],[7.5,7.5]],"color":"#FFF352","thickness":8,"rounded":true}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"line","points":[[6.5,6.5],[7.5,7.5]],"color":"#FFF352","thickness":8,"rounded":true}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"line","points":[[5.5,8.5],[4.5,8.5],[4.5,7.5]],"color":"#FFF352","thickness":8,"rounded":true}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"line","points":[[4.5,7.5],[5.5,8.5]],"color":"#FFF352","thickness":8,"rounded":true}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"line","points":[[1.5,6.5],[2.5,5.5],[2.5,6.5]],"color":"#FFF352","thickness":8,"rounded":true}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"line","points":[[1.5,6.5],[2.5,6.5]],"color":"#FFF352","thickness":8,"rounded":true}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"line","points":[[7.5,1.5],[7.5,2.5],[8.5,2.5]],"color":"#FFF352","thickness":8,"rounded":true}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"line","points":[[7.5,1.5],[8.5,2.5]],"color":"#FFF352","thickness":8,"rounded":true}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"line","points":[[7.5,7.5],[7.5,8.5],[8.5,8.5]],"color":"#C77EFA","thickness":8,"rounded":true}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"line","points":[[7.5,7.5],[8.5,8.5]],"color":"#C77EFA","thickness":8,"rounded":true}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"line","points":[[6.5,3.5],[5.5,4.5],[6.5,4.5]],"color":"#C77EFA","thickness":8,"rounded":true}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"line","points":[[6.5,3.5],[6.5,4.5]],"color":"#C77EFA","thickness":8,"rounded":true}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"line","points":[[0.5,7.5],[1.5,6.5],[0.5,6.5]],"color":"#C77EFA","thickness":8,"rounded":true}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"line","points":[[0.5,6.5],[0.5,7.5]],"color":"#C77EFA","thickness":8,"rounded":true}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"line","points":[[3.5,5.5],[4.5,5.5],[4.5,6.5]],"color":"#C77EFA","thickness":8,"rounded":true}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"line","points":[[3.5,5.5],[4.5,6.5]],"color":"#C77EFA","thickness":8,"rounded":true}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"line","points":[[2.5,4.5],[1.5,3.5],[2.5,3.5]],"color":"#C77EFA","thickness":8,"rounded":true}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"line","points":[[2.5,3.5],[2.5,4.5]],"color":"#C77EFA","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply. Numbers in cages sum to the number in the toip left corner of the cage. Numbers with a white dot between them are consecutive. Not all possible dots are shown. Numbers on triangles represent a unique right triangle for each color. The size of the triangle is found by ADDING the two numbers on each side to get a 3-4-5 triangle, a 6-8-10 triangle and a 9-12-15 triangle. The largest number added will always be the diagonal of the triangle. ONE OF THE COLORS IS A LIAR. The numbers on this color do not follow any of the above rules. ALL FOUR COLORS each have the same three numbers on them. All possible triangles are shown. Note for colorblind people: There are 8 Red, 5 Purple, 5 Blue, and 4 Yellow triangles shown.
