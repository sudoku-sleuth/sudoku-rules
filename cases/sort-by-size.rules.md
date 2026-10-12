---
format: open-rules
title: Sort by Size
setter: Marty Sears
source: https://sudokupad.app/70njbfg1zs
case: https://sudoku-sleuth.com/cases/sort-by-size
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
board:
  rows: 9
  cols: 9
  symbols:
    - 1
    - 2
    - 3
    - 4
    - 5
    - 6
    - 7
    - 8
    - 9
---

```rules
unique-1: unique r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9
unique-2: unique r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9
unique-3: unique r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8-r3c9
unique-4: unique r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8-r4c9
unique-5: unique r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9
unique-6: unique r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8-r6c9
unique-7: unique r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8-r7c9
unique-8: unique r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r8c9
unique-9: unique r9c1-r9c2-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8-r9c9
unique-10: unique r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r9c1
unique-11: unique r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2-r9c2
unique-12: unique r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3-r9c3
unique-13: unique r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4-r8c4-r9c4
unique-14: unique r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5
unique-15: unique r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6-r8c6-r9c6
unique-16: unique r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7-r9c7
unique-17: unique r1c8-r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8-r9c8
unique-18: unique r1c9-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[4.5,5.5],[3.5,6.5]],"color":"#FFFFFF","thickness":22.4,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[5.5,8.5],[6.5,8.5]],"color":"#FFFFFF","thickness":22.4,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[7.5,3.5],[7.5,1.5],[4.5,1.5],[4.5,2.5]],"color":"#FFFFFF","thickness":22.4,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[1.5,0.5],[1.5,1.5]],"color":"#FFFFFF","thickness":22.4,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[1.5,4.5],[1.5,5.5],[2.5,6.5]],"color":"#FFFFFF","thickness":16,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[0.5,6.5],[0.5,8.5]],"color":"#FFFFFF","thickness":16,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[5.5,5.5],[6.5,5.5],[7.5,6.5]],"color":"#FFFFFF","thickness":16,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[0.5,8.5],[0.5,6.5]],"color":"#fcaf","thickness":9.6,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[7.5,6.5],[6.5,5.5],[5.5,5.5]],"color":"#fcaf","thickness":9.6,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[1.5,4.5],[1.5,5.5],[2.5,6.5]],"color":"#fcaf","thickness":9.6,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[9.125,8.625],[9.125,9.125],[-0.125,9.125],[-0.125,-0.125],[9.125,-0.125],[9.125,8.625]],"color":"#76a2ebff","thickness":15.36,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[9.375,8.875],[9.375,9.375],[-0.375,9.375],[-0.375,-0.375],[9.375,-0.375],[9.375,8.875]],"color":"#ccdff7ff","thickness":15.36,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[9,9.25],[9.25,9.25],[9.25,-0.25],[-0.25,-0.25],[-0.25,9.25],[9,9.25]],"color":"#9abaeeff","thickness":12.16,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[4.5,5.5],[3.5,6.5]],"color":"#cccf","thickness":16,"rounded":true,"layer":"over"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[5.5,8.5],[6.5,8.5]],"color":"#cccf","thickness":16,"rounded":true,"layer":"over"}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[7.5,3.5],[7.5,1.5],[4.5,1.5],[4.5,2.5]],"color":"#cccf","thickness":16,"rounded":true,"layer":"over"}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[1.5,0.5],[1.5,1.5]],"color":"#cccf","thickness":16,"rounded":true,"layer":"over"}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[8,9],[9,9],[9,8],[8,8],[8,9]],"color":"#000000","thickness":0.64,"rounded":true,"layer":"over"}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[8,9],[7,9],[7,8],[8,8],[8,7],[9,7],[9,8]],"color":"#000000","thickness":0.64,"rounded":true,"layer":"over"}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[9,7],[9,6],[8,6],[8,7],[7,7],[7,8],[6,8],[6,9],[7,9]],"color":"#000000","thickness":0.64,"rounded":true,"layer":"over"}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[9,6],[9,5],[8,5],[8,6],[6,6],[6,8],[5,8],[5,9],[6,9]],"color":"#000000","thickness":0.64,"rounded":true,"layer":"over"}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[9,5],[9,4],[8,4],[8,5],[7,5],[7,7],[5,7],[5,8],[4,8],[4,7],[5,7]],"color":"#000000","thickness":0.64,"rounded":true,"layer":"over"}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[5,9],[4,9],[4,8],[3,8],[3,6],[4,6],[4,7],[3,7]],"color":"#000000","thickness":0.64,"rounded":true,"layer":"over"}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[5,7],[5,6],[6,6],[6,5],[5,5],[5,6]],"color":"#000000","thickness":0.64,"rounded":true,"layer":"over"}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[5,6],[4,6],[4,5],[5,5],[5,4],[4,4],[4,5]],"color":"#000000","thickness":0.64,"rounded":true,"layer":"over"}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[9,4],[9,3],[8,3],[8,4],[7,4],[7,5],[6,5],[6,4],[7,4]],"color":"#000000","thickness":0.64,"rounded":true,"layer":"over"}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[9,3],[9,2],[8,2],[8,3],[7,3],[7,4]],"color":"#000000","thickness":0.64,"rounded":true,"layer":"over"}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[4,9],[3,9],[3,8],[2,8],[2,5],[3,5],[3,6],[2,6]],"color":"#000000","thickness":0.64,"rounded":true,"layer":"over"}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"line","points":[[4,5],[3,5],[3,4],[4,4],[4,3],[3,3],[3,4]],"color":"#000000","thickness":0.64,"rounded":true,"layer":"over"}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"line","points":[[9,2],[9,1],[8,1],[8,2],[7,2],[7,3],[6,3],[6,4],[5,4],[5,3],[6,3]],"color":"#000000","thickness":0.64,"rounded":true,"layer":"over"}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"line","points":[[9,1],[9,0],[8,0],[8,1],[7,1],[7,2],[6,2],[6,3]],"color":"#000000","thickness":0.64,"rounded":true,"layer":"over"}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"line","points":[[3,7],[1,7],[1,4],[2,4],[2,5],[1,5]],"color":"#000000","thickness":0.64,"rounded":true,"layer":"over"}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"line","points":[[3,4],[2,4],[2,3],[3,3],[3,2],[2,2],[2,3]],"color":"#000000","thickness":0.64,"rounded":true,"layer":"over"}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"line","points":[[8,0],[7,0],[7,1],[6,1],[6,2],[5,2],[5,3],[4,3],[4,2],[5,2]],"color":"#000000","thickness":0.64,"rounded":true,"layer":"over"}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"line","points":[[7,0],[6,0],[6,1],[5,1],[5,2]],"color":"#000000","thickness":0.64,"rounded":true,"layer":"over"}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"line","points":[[2,6],[0,6],[0,3],[1,3],[1,4],[0,4]],"color":"#000000","thickness":0.64,"rounded":true,"layer":"over"}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"line","points":[[2,3],[1,3],[1,2],[2,2],[2,1],[1,1],[1,2]],"color":"#000000","thickness":0.64,"rounded":true,"layer":"over"}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"line","points":[[6,0],[5,0],[5,1],[4,1],[4,2],[3,2],[3,1],[4,1]],"color":"#000000","thickness":0.64,"rounded":true,"layer":"over"}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"line","points":[[5,0],[4,0],[4,1]],"color":"#000000","thickness":0.64,"rounded":true,"layer":"over"}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"line","points":[[1,5],[0,5]],"color":"#000000","thickness":0.64,"rounded":true,"layer":"over"}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"line","points":[[1,2],[0,2],[0,3]],"color":"#000000","thickness":0.64,"rounded":true,"layer":"over"}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"line","points":[[4,0],[3,0],[3,1],[2,1],[2,0],[3,0]],"color":"#000000","thickness":0.64,"rounded":true,"layer":"over"}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"line","points":[[2,0],[0,0],[0,2]],"color":"#000000","thickness":0.64,"rounded":true,"layer":"over"}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"line","points":[[0,1],[1,1],[1,0]],"color":"#000000","thickness":0.64,"rounded":true,"layer":"over"}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"line","points":[[0,6],[0,7],[1,7],[1,8],[2,8],[2,9],[3,9]],"color":"#000000","thickness":0.64,"rounded":true,"layer":"over"}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"line","points":[[0,7],[0,8],[1,8],[1,9],[2,9]],"color":"#000000","thickness":0.64,"rounded":true,"layer":"over"}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"line","points":[[0,8],[0,9],[1,9]],"color":"#000000","thickness":0.64,"rounded":true,"layer":"over"}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,1.5],"width":0.76,"height":0.76,"rounded":true,"fill":"#cccf","stroke":"#FFFFFF","thickness":3.84,"angle":0}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,8.5],"width":0.76,"height":0.76,"rounded":true,"fill":"#cccf","stroke":"#FFFFFF","thickness":3.84,"angle":0}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,5.5],"width":0.76,"height":0.76,"rounded":true,"fill":"#cccf","stroke":"#FFFFFF","thickness":3.84,"angle":0}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,3.5],"width":0.76,"height":0.76,"rounded":true,"fill":"#cccf","stroke":"#FFFFFF","thickness":3.84,"angle":0}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,3.25],"width":0.33,"height":0.25,"rounded":false,"fill":"#cccf","thickness":0,"angle":0}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,1.25],"width":0.33,"height":0.25,"rounded":false,"fill":"#cccf","thickness":0,"angle":0}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.25,5.75],"width":0.33,"height":0.25,"rounded":false,"fill":"#cccf","thickness":0,"angle":135}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.75,8.5],"width":0.33,"height":0.25,"rounded":false,"fill":"#cccf","thickness":0,"angle":90}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,1.5],"width":0.5,"height":0.01,"rounded":false,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,1.5],"width":0.5,"height":0.01,"rounded":false,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,1.5],"width":0.5,"height":0.01,"rounded":false,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,2],"width":0.5,"height":0.01,"rounded":false,"fill":"#000000","thickness":0,"angle":90}}
- {"id":"drawing-60","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,2],"width":0.5,"height":0.01,"rounded":false,"fill":"#000000","thickness":0,"angle":90}}
- {"id":"drawing-61","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,3],"width":0.5,"height":0.01,"rounded":false,"fill":"#000000","thickness":0,"angle":90}}
- {"id":"drawing-62","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,1],"width":0.5,"height":0.01,"rounded":false,"fill":"#000000","thickness":0,"angle":90}}
- {"id":"drawing-63","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,5],"width":0.5,"height":0.01,"rounded":false,"fill":"#000000","thickness":0,"angle":90}}
- {"id":"drawing-64","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,6],"width":0.59,"height":0.01,"rounded":false,"fill":"#000000","thickness":0,"angle":90}}
- {"id":"drawing-65","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,7],"width":0.5,"height":0.01,"rounded":false,"fill":"#000000","thickness":0,"angle":90}}
- {"id":"drawing-66","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,8],"width":0.5,"height":0.01,"rounded":false,"fill":"#000000","thickness":0,"angle":90}}
- {"id":"drawing-67","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,5.5],"width":0.5,"height":0.01,"rounded":false,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-68","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,6],"width":0.59,"height":0.01,"rounded":false,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-69","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,6],"width":0.5,"height":0.01,"rounded":false,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-70","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,6],"width":0.5,"height":0.01,"rounded":false,"fill":"#000000","thickness":0,"angle":90}}
```

ISOFILL:
Divide the grid into 9 regions, each containing 9 orthogonally connected cells. All cells in the same region must contain the same digit. All of the digits 1-9 must appear in the grid.

ENTROPIC LINES:
Each peach line must contain one low digit (1, 2 or 3), one medium digit (4, 5 or 6) and one high digit (7, 8 or 9.)

THERMOMETERS:
Digits along a thermometer must keep increasing as they move from bulb to tip.
