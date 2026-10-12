---
format: open-rules
title: Taxi Rank
setter: Marty Sears
source: https://sudokupad.app/61f9s2wmr3
case: https://sudoku-sleuth.com/cases/taxi-rank
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
board:
  rows: 9
  cols: 16
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
  regions:
    - - r1c1
      - r1c2
      - r1c3
      - r2c1
      - r2c2
      - r2c3
      - r3c1
      - r3c2
      - r3c3
    - - r1c4
      - r1c5
      - r1c6
      - r2c4
      - r2c5
      - r2c6
      - r3c4
      - r3c5
      - r3c6
    - - r1c7
      - r1c8
      - r1c9
      - r2c7
      - r2c8
      - r2c9
      - r3c7
      - r3c8
      - r3c9
    - - r4c1
      - r4c2
      - r4c3
      - r5c1
      - r5c2
      - r5c3
      - r6c1
      - r6c2
      - r6c3
    - - r4c4
      - r4c5
      - r4c6
      - r5c4
      - r5c5
      - r5c6
      - r6c4
      - r6c5
      - r6c6
    - - r4c7
      - r4c8
      - r4c9
      - r5c7
      - r5c8
      - r5c9
      - r6c7
      - r6c8
      - r6c9
    - - r7c1
      - r7c2
      - r7c3
      - r8c1
      - r8c2
      - r8c3
      - r9c1
      - r9c2
      - r9c3
    - - r7c4
      - r7c5
      - r7c6
      - r8c4
      - r8c5
      - r8c6
      - r9c4
      - r9c5
      - r9c6
    - - r7c7
      - r7c8
      - r7c9
      - r8c7
      - r8c8
      - r8c9
      - r9c7
      - r9c8
      - r9c9
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
unique-19: unique r1c1-r1c2-r1c3-r2c1-r2c2-r2c3-r3c1-r3c2-r3c3
unique-20: unique r1c4-r1c5-r1c6-r2c4-r2c5-r2c6-r3c4-r3c5-r3c6
unique-21: unique r1c7-r1c8-r1c9-r2c7-r2c8-r2c9-r3c7-r3c8-r3c9
unique-22: unique r4c1-r4c2-r4c3-r5c1-r5c2-r5c3-r6c1-r6c2-r6c3
unique-23: unique r4c4-r4c5-r4c6-r5c4-r5c5-r5c6-r6c4-r6c5-r6c6
unique-24: unique r4c7-r4c8-r4c9-r5c7-r5c8-r5c9-r6c7-r6c8-r6c9
unique-25: unique r7c1-r7c2-r7c3-r8c1-r8c2-r8c3-r9c1-r9c2-r9c3
unique-26: unique r7c4-r7c5-r7c6-r8c4-r8c5-r8c6-r9c4-r9c5-r9c6
unique-27: unique r7c7-r7c8-r7c9-r8c7-r8c8-r8c9-r9c7-r9c8-r9c9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,4.5],"width":9.02,"height":9.02,"rounded":false,"fill":"#e6fbccff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,9.75],"width":0,"height":1.471,"rounded":true,"thickness":0,"angle":0,"text":"🚕","textColor":"#000000","fontSize":56.2,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[5.5,9.5],[5.5,8.5],[3.5,8.5],[3.5,7.5],[4.5,6.5],[4.5,5.5],[5.5,5.5],[5.5,6.5],[6.5,7.5],[6.5,8.5],[5.5,8.5]],"color":"#FFFFFF","thickness":21.12,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[6.5,8.5],[9.5,8.5]],"color":"#FFFFFF","thickness":21.12,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[7.5,8.5],[7.5,6.5],[8.5,7.5],[8.5,8.5]],"color":"#FFFFFF","thickness":21.12,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[3.5,7.5],[2.5,7.5],[3.5,6.5],[3.5,4.5],[4.5,4.5],[5.5,3.5],[5.5,1.5],[4.5,0.5],[6.5,0.5],[7.5,1.5],[8.5,0.5],[8.5,2.5],[7.5,3.5],[8.5,4.5],[8.5,7.5]],"color":"#FFFFFF","thickness":21.12,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[4.5,5.5],[4.5,4.5]],"color":"#FFFFFF","thickness":21.12,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[5.5,5.5],[7.5,5.5],[7.5,6.5]],"color":"#FFFFFF","thickness":21.12,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[6.5,5.5],[6.5,4.5],[7.5,3.5]],"color":"#FFFFFF","thickness":21.12,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[8.5,0.5],[9.5,-0.5]],"color":"#FFFFFF","thickness":21.12,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[6.5,4.5],[6.5,2.5],[5.5,3.5]],"color":"#FFFFFF","thickness":21.12,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[7.5,1.5],[6.5,2.5]],"color":"#FFFFFF","thickness":21.12,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[4.5,0.5],[3.5,-0.5]],"color":"#FFFFFF","thickness":21.12,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[5.5,1.5],[4.5,1.5],[3.5,2.5],[3.5,4.5]],"color":"#FFFFFF","thickness":21.12,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[3.5,2.5],[3.5,1.5],[2.5,0.5],[1.5,0.5],[1.5,2.5],[0.5,2.5],[0.5,3.5],[1.5,3.5],[3.5,1.5]],"color":"#FFFFFF","thickness":21.12,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[1.5,0.5],[-0.5,0.5]],"color":"#FFFFFF","thickness":21.12,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[0.5,2.5],[-0.5,2.5]],"color":"#FFFFFF","thickness":21.12,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[1.5,3.5],[1.5,4.5],[2.5,5.5],[2.5,6.5],[1.5,7.5],[2.5,7.5],[0.5,9.5]],"color":"#FFFFFF","thickness":21.12,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[1.5,4.5],[0.5,5.5],[0.5,7.5],[1.5,7.5]],"color":"#FFFFFF","thickness":21.12,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[0.5,7.5],[-0.5,7.5]],"color":"#FFFFFF","thickness":21.12,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[4.5,6.5],[4.5,5.5],[5.5,5.5],[5.5,6.5],[6.5,7.5],[6.5,8.214]],"color":"#9ff58bff","thickness":13.44,"rounded":true}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[2.5,6.5],[1.5,7.5],[3.5,7.5],[3.5,8.5],[4.5,8.5]],"color":"#9ff58bff","thickness":13.44,"rounded":true}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[2.5,5.5],[1.5,4.5],[1.5,3.5],[0.5,3.5],[0.5,2.5],[1.5,2.5]],"color":"#9ff58bff","thickness":13.44,"rounded":true}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[2.7,7.4],[2.8,7.5],[2.7,7.6]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[7.5,7.5],[7.5,6.5],[8.5,7.5],[8.5,8.5],[6.786,8.5]],"color":"#f5afebff","thickness":13.44,"rounded":true}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[1.5,8.5],[3.5,6.5],[3.5,3.5]],"color":"#f5afebff","thickness":13.44,"rounded":true}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[3.5,2.5],[4.5,1.5],[5.5,1.5],[4.5,0.5],[6.5,0.5]],"color":"#f5afebff","thickness":13.44,"rounded":true}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[0.5,0.5],[2.5,0.5],[3.5,1.5],[2,3],[2.071,2.929]],"color":"#91eeffff","thickness":13.44,"rounded":true}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"line","points":[[2,3],[1.714,3.286]],"color":"#91eeffff","thickness":13.44,"rounded":true}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"line","points":[[8.5,1.5],[8.5,2.5],[7.5,3.5],[8.5,4.5],[8.5,6.5]],"color":"#91eeffff","thickness":13.44,"rounded":true}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"line","points":[[8.5,0.5],[6.5,2.5],[6.5,5.5]],"color":"#91eeffff","thickness":13.44,"rounded":true}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"line","points":[[8.6,1.7],[8.5,1.8],[8.4,1.7]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"line","points":[[8.4,2.2],[8.5,2.3],[8.6,2.2]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"line","points":[[8.4,4.7],[8.5,4.8],[8.6,4.7]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"line","points":[[8.4,5.2],[8.5,5.3],[8.6,5.2]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"line","points":[[8.4,5.7],[8.5,5.8],[8.6,5.7]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"line","points":[[8.4,6.2],[8.5,6.3],[8.6,6.2]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"line","points":[[6.6,5.3],[6.5,5.2],[6.4,5.3]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"line","points":[[6.6,4.8],[6.5,4.7],[6.4,4.8]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"line","points":[[6.6,4.3],[6.5,4.2],[6.4,4.3]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"line","points":[[6.6,3.8],[6.5,3.7],[6.4,3.8]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"line","points":[[6.6,3.3],[6.5,3.2],[6.4,3.3]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"line","points":[[6.6,2.8],[6.5,2.7],[6.4,2.8]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"line","points":[[6.2,0.4],[6.3,0.5],[6.2,0.6]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"line","points":[[5.7,0.4],[5.8,0.5],[5.7,0.6]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"line","points":[[5.2,0.4],[5.3,0.5],[5.2,0.6]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"line","points":[[5.2,1.4],[5.3,1.5],[5.2,1.6]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"line","points":[[4.7,1.4],[4.8,1.5],[4.7,1.6]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"line","points":[[7.3,8.4],[7.2,8.5],[7.3,8.6]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"line","points":[[7.8,8.4],[7.7,8.5],[7.8,8.6]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"line","points":[[8.3,8.4],[8.2,8.5],[8.3,8.6]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"line","points":[[8.4,8.2],[8.5,8.3],[8.6,8.2]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"line","points":[[8.6,7.7],[8.5,7.8],[8.4,7.7]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"line","points":[[7.6,7.3],[7.5,7.2],[7.4,7.3]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"line","points":[[7.6,6.8],[7.5,6.7],[7.4,6.8]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"line","points":[[6.4,7.7],[6.5,7.8],[6.6,7.7]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"line","points":[[5.4,6.2],[5.5,6.3],[5.6,6.2]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"line","points":[[5.4,5.7],[5.5,5.8],[5.6,5.7]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"line","points":[[5.2,5.4],[5.3,5.5],[5.2,5.6]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-60","rules":[],"visual":{"kind":"line","points":[[4.7,5.4],[4.8,5.5],[4.7,5.6]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-61","rules":[],"visual":{"kind":"line","points":[[4.6,5.8],[4.5,5.7],[4.4,5.8]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-62","rules":[],"visual":{"kind":"line","points":[[4.6,6.3],[4.5,6.2],[4.4,6.3]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-63","rules":[],"visual":{"kind":"line","points":[[4.2,8.4],[4.3,8.5],[4.2,8.6]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-64","rules":[],"visual":{"kind":"line","points":[[3.4,8.2],[3.5,8.3],[3.6,8.2]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-65","rules":[],"visual":{"kind":"line","points":[[3.7,8.4],[3.8,8.5],[3.7,8.6]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-66","rules":[],"visual":{"kind":"line","points":[[3.4,7.7],[3.5,7.8],[3.6,7.7]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-67","rules":[],"visual":{"kind":"line","points":[[3.2,7.4],[3.3,7.5],[3.2,7.6]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-68","rules":[],"visual":{"kind":"line","points":[[2.2,7.4],[2.3,7.5],[2.2,7.6]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-69","rules":[],"visual":{"kind":"line","points":[[1.7,7.4],[1.8,7.5],[1.7,7.6]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-70","rules":[],"visual":{"kind":"line","points":[[3.6,3.8],[3.5,3.7],[3.4,3.8]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-71","rules":[],"visual":{"kind":"line","points":[[3.6,4.3],[3.5,4.2],[3.4,4.3]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-72","rules":[],"visual":{"kind":"line","points":[[3.6,4.8],[3.5,4.7],[3.4,4.8]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-73","rules":[],"visual":{"kind":"line","points":[[3.6,5.3],[3.5,5.2],[3.4,5.3]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-74","rules":[],"visual":{"kind":"line","points":[[3.6,5.8],[3.5,5.7],[3.4,5.8]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-75","rules":[],"visual":{"kind":"line","points":[[3.6,6.3],[3.5,6.2],[3.4,6.3]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-76","rules":[],"visual":{"kind":"line","points":[[1.4,2.8],[1.5,2.7],[1.6,2.8]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-77","rules":[],"visual":{"kind":"line","points":[[1.4,3.3],[1.5,3.2],[1.6,3.3]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-78","rules":[],"visual":{"kind":"line","points":[[1.4,3.8],[1.5,3.7],[1.6,3.8]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-79","rules":[],"visual":{"kind":"line","points":[[1.4,4.3],[1.5,4.2],[1.6,4.3]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-80","rules":[],"visual":{"kind":"line","points":[[0.7,0.4],[0.8,0.5],[0.7,0.6]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-81","rules":[],"visual":{"kind":"line","points":[[1.2,0.4],[1.3,0.5],[1.2,0.6]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-82","rules":[],"visual":{"kind":"line","points":[[1.7,0.4],[1.8,0.5],[1.7,0.6]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-83","rules":[],"visual":{"kind":"line","points":[[2.2,0.4],[2.3,0.5],[2.2,0.6]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-84","rules":[],"visual":{"kind":"line","points":[[3.85,2.35],[3.85,2.15],[3.65,2.15]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-85","rules":[],"visual":{"kind":"line","points":[[4.25,1.95],[4.25,1.75],[4.05,1.75]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-86","rules":[],"visual":{"kind":"line","points":[[4.7,0.4],[4.8,0.5],[4.7,0.6]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-87","rules":[],"visual":{"kind":"line","points":[[4.75,0.95],[4.75,0.75],[4.95,0.75]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-88","rules":[],"visual":{"kind":"line","points":[[5.25,1.45],[5.25,1.25],[5.45,1.25]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-89","rules":[],"visual":{"kind":"line","points":[[6.75,2.45],[6.75,2.25],[6.55,2.25]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-90","rules":[],"visual":{"kind":"line","points":[[7.75,1.45],[7.75,1.25],[7.55,1.25]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-91","rules":[],"visual":{"kind":"line","points":[[7.05,1.75],[7.25,1.75],[7.25,1.95]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-92","rules":[],"visual":{"kind":"line","points":[[8.05,0.75],[8.25,0.75],[8.25,0.95]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-93","rules":[],"visual":{"kind":"line","points":[[8.45,2.75],[8.25,2.75],[8.25,2.55]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-94","rules":[],"visual":{"kind":"line","points":[[7.75,3.05],[7.75,3.25],[7.95,3.25]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-95","rules":[],"visual":{"kind":"line","points":[[7.75,3.55],[7.75,3.75],[7.55,3.75]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-96","rules":[],"visual":{"kind":"line","points":[[8.25,4.05],[8.25,4.25],[8.05,4.25]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-97","rules":[],"visual":{"kind":"line","points":[[7.75,6.55],[7.75,6.75],[7.55,6.75]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-98","rules":[],"visual":{"kind":"line","points":[[8.25,7.05],[8.25,7.25],[8.05,7.25]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-99","rules":[],"visual":{"kind":"line","points":[[5.75,6.55],[5.75,6.75],[5.55,6.75]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-100","rules":[],"visual":{"kind":"line","points":[[6.25,7.05],[6.25,7.25],[6.05,7.25]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-101","rules":[],"visual":{"kind":"line","points":[[1.75,7.05],[1.75,7.25],[1.95,7.25]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-102","rules":[],"visual":{"kind":"line","points":[[1.95,4.75],[1.75,4.75],[1.75,4.95]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-103","rules":[],"visual":{"kind":"line","points":[[2.15,5.35],[2.15,5.15],[2.35,5.15]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-104","rules":[],"visual":{"kind":"line","points":[[2.35,6.85],[2.15,6.85],[2.15,6.65]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-105","rules":[],"visual":{"kind":"line","points":[[1.85,8.35],[1.85,8.15],[1.65,8.15]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-106","rules":[],"visual":{"kind":"line","points":[[2.05,7.75],[2.25,7.75],[2.25,7.95]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-107","rules":[],"visual":{"kind":"line","points":[[2.75,7.45],[2.75,7.25],[2.55,7.25]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-108","rules":[],"visual":{"kind":"line","points":[[3.25,6.95],[3.25,6.75],[3.05,6.75]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-109","rules":[],"visual":{"kind":"line","points":[[2.35,2.85],[2.15,2.85],[2.15,2.65]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-110","rules":[],"visual":{"kind":"line","points":[[1.75,3.05],[1.75,3.25],[1.95,3.25]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-111","rules":[],"visual":{"kind":"line","points":[[3.15,1.65],[3.15,1.85],[3.35,1.85]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-112","rules":[],"visual":{"kind":"line","points":[[3.25,1.05],[3.25,1.25],[3.05,1.25]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-113","rules":[],"visual":{"kind":"line","points":[[2.75,0.55],[2.75,0.75],[2.55,0.75]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-114","rules":[],"visual":{"kind":"line","points":[[1.2,2.4],[1.3,2.5],[1.2,2.6]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-115","rules":[],"visual":{"kind":"line","points":[[0.7,2.4],[0.8,2.5],[0.7,2.6]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-116","rules":[],"visual":{"kind":"line","points":[[0.6,2.8],[0.5,2.7],[0.4,2.8]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-117","rules":[],"visual":{"kind":"line","points":[[0.6,3.3],[0.5,3.2],[0.4,3.3]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-118","rules":[],"visual":{"kind":"line","points":[[0.8,3.4],[0.7,3.5],[0.8,3.6]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-119","rules":[],"visual":{"kind":"line","points":[[1.3,3.4],[1.2,3.5],[1.3,3.6]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-120","rules":[],"visual":{"kind":"line","points":[[2.7,2.1],[2.7,2.3],[2.9,2.3]],"color":"#ffffffb6","thickness":3.2,"rounded":true}}
- {"id":"drawing-121","rules":[],"visual":{"kind":"line","points":[[0,11],[9,11]],"color":"#e2e6ffff","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-122","rules":[],"visual":{"kind":"line","points":[[9,12],[0,12]],"color":"#e2e6ffff","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-123","rules":[],"visual":{"kind":"line","points":[[0,13],[9,13]],"color":"#e2e6ffff","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-124","rules":[],"visual":{"kind":"line","points":[[9,14],[0,14]],"color":"#e2e6ffff","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-125","rules":[],"visual":{"kind":"line","points":[[0,15],[9,15]],"color":"#e2e6ffff","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-126","rules":[],"visual":{"kind":"line","points":[[8,14],[8,16],[9,16],[9,10],[8,10],[8,14]],"color":"#a0b4f5ff","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-127","rules":[],"visual":{"kind":"line","points":[[8,16],[7,16],[7,10],[8,10]],"color":"#a0b4f5ff","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-128","rules":[],"visual":{"kind":"line","points":[[7,16],[6,16],[6,10],[7,10]],"color":"#a0b4f5ff","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-129","rules":[],"visual":{"kind":"line","points":[[6,16],[5,16],[5,10],[6,10]],"color":"#a0b4f5ff","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-130","rules":[],"visual":{"kind":"line","points":[[5,16],[4,16],[4,10],[5,10]],"color":"#a0b4f5ff","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-131","rules":[],"visual":{"kind":"line","points":[[4,16],[3,16],[3,10],[4,10]],"color":"#a0b4f5ff","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-132","rules":[],"visual":{"kind":"line","points":[[3,16],[2,16],[2,10],[3,10]],"color":"#a0b4f5ff","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-133","rules":[],"visual":{"kind":"line","points":[[2,16],[1,16],[1,10],[2,10]],"color":"#a0b4f5ff","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-134","rules":[],"visual":{"kind":"line","points":[[1,16],[0,16],[0,10],[1,10]],"color":"#a0b4f5ff","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-135","rules":[],"visual":{"kind":"line","points":[[6,7],[6,9],[9,9],[9,6],[6,6],[6,7]],"color":"#000000","thickness":5.12,"rounded":true,"layer":"over"}}
- {"id":"drawing-136","rules":[],"visual":{"kind":"line","points":[[6,9],[3,9],[3,6],[6,6],[6,3],[3,3],[3,6]],"color":"#000000","thickness":5.12,"rounded":true,"layer":"over"}}
- {"id":"drawing-137","rules":[],"visual":{"kind":"line","points":[[9,6],[9,0],[6,0],[6,3],[9,3]],"color":"#000000","thickness":5.12,"rounded":true,"layer":"over"}}
- {"id":"drawing-138","rules":[],"visual":{"kind":"line","points":[[3,9],[0,9],[0,6],[3,6]],"color":"#000000","thickness":5.12,"rounded":true,"layer":"over"}}
- {"id":"drawing-139","rules":[],"visual":{"kind":"line","points":[[0,6],[0,3],[3,3],[3,0],[6,0]],"color":"#000000","thickness":5.12,"rounded":true,"layer":"over"}}
- {"id":"drawing-140","rules":[],"visual":{"kind":"line","points":[[0,3],[0,0],[3,0]],"color":"#000000","thickness":5.12,"rounded":true,"layer":"over"}}
- {"id":"drawing-141","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,3.5],"width":0.8,"height":0.8,"rounded":true,"stroke":"#ffed19ff","thickness":6.4,"angle":0}}
- {"id":"drawing-142","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,8.5],"width":0.8,"height":0.8,"rounded":true,"stroke":"#ffed19ff","thickness":6.4,"angle":0}}
- {"id":"drawing-143","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,2.5],"width":0.8,"height":0.8,"rounded":true,"stroke":"#ffed19ff","thickness":6.4,"angle":0}}
- {"id":"drawing-144","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,0.5],"width":0.8,"height":0.8,"rounded":true,"stroke":"#ffed19ff","thickness":6.4,"angle":0}}
- {"id":"drawing-145","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,1.5],"width":0.8,"height":0.8,"rounded":true,"stroke":"#ffed19ff","thickness":6.4,"angle":0}}
- {"id":"drawing-146","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,0.5],"width":0.36,"height":0.36,"rounded":true,"fill":"#f5afebff","thickness":0,"angle":0}}
- {"id":"drawing-147","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,8.5],"width":0.36,"height":0.36,"rounded":true,"fill":"#9ff58bff","thickness":0,"angle":0}}
- {"id":"drawing-148","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,8.214],"width":0.36,"height":0.36,"rounded":true,"fill":"#9ff58bff","thickness":0,"angle":0}}
- {"id":"drawing-149","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.786,8.5],"width":0.36,"height":0.36,"rounded":true,"fill":"#f5afebff","thickness":0,"angle":0}}
- {"id":"drawing-150","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,3.5],"width":0.36,"height":0.36,"rounded":true,"fill":"#f5afebff","thickness":0,"angle":0}}
- {"id":"drawing-151","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,0.5],"width":0.36,"height":0.36,"rounded":true,"fill":"#91eeffff","thickness":0,"angle":0}}
- {"id":"drawing-152","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,6.5],"width":0.36,"height":0.36,"rounded":true,"fill":"#91eeffff","thickness":0,"angle":0}}
- {"id":"drawing-153","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,2.5],"width":0.36,"height":0.36,"rounded":true,"fill":"#9ff58bff","thickness":0,"angle":0}}
- {"id":"drawing-154","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.714,3.286],"width":0.36,"height":0.36,"rounded":true,"fill":"#91eeffff","thickness":0,"angle":0}}
- {"id":"drawing-155","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,0.5],"width":0.2,"height":0.2,"rounded":true,"fill":"#0000001f","thickness":0,"angle":0}}
- {"id":"drawing-156","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,8.5],"width":0.2,"height":0.2,"rounded":true,"fill":"#0000001f","thickness":0,"angle":0}}
- {"id":"drawing-157","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,8.214],"width":0.2,"height":0.2,"rounded":true,"fill":"#0000001f","thickness":0,"angle":0}}
- {"id":"drawing-158","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.786,8.5],"width":0.2,"height":0.2,"rounded":true,"fill":"#0000001f","thickness":0,"angle":0}}
- {"id":"drawing-159","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,3.5],"width":0.2,"height":0.2,"rounded":true,"fill":"#0000001f","thickness":0,"angle":0}}
- {"id":"drawing-160","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,0.5],"width":0.2,"height":0.2,"rounded":true,"fill":"#0000001f","thickness":0,"angle":0}}
- {"id":"drawing-161","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,6.5],"width":0.2,"height":0.2,"rounded":true,"fill":"#0000001f","thickness":0,"angle":0}}
- {"id":"drawing-162","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,2.5],"width":0.2,"height":0.2,"rounded":true,"fill":"#0000001f","thickness":0,"angle":0}}
- {"id":"drawing-163","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.714,3.286],"width":0.2,"height":0.2,"rounded":true,"fill":"#0000001f","thickness":0,"angle":0}}
- {"id":"drawing-164","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,0.5],"width":0.4,"height":0.4,"rounded":false,"fill":"#91eeffff","thickness":0,"angle":0}}
- {"id":"drawing-165","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,7.5],"width":0.4,"height":0.4,"rounded":false,"fill":"#f5afebff","thickness":0,"angle":0}}
- {"id":"drawing-166","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,5.5],"width":0.4,"height":0.4,"rounded":false,"fill":"#9ff58bff","thickness":0,"angle":45}}
- {"id":"drawing-167","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,6.5],"width":0.4,"height":0.4,"rounded":false,"fill":"#9ff58bff","thickness":0,"angle":45}}
- {"id":"drawing-168","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,6.5],"width":0.4,"height":0.4,"rounded":false,"fill":"#9ff58bff","thickness":0,"angle":0}}
- {"id":"drawing-169","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,2.5],"width":0.4,"height":0.4,"rounded":false,"fill":"#f5afebff","thickness":0,"angle":45}}
- {"id":"drawing-170","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,8.5],"width":0.4,"height":0.4,"rounded":false,"fill":"#f5afebff","thickness":0,"angle":45}}
- {"id":"drawing-171","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,1.5],"width":0.4,"height":0.4,"rounded":false,"fill":"#91eeffff","thickness":0,"angle":0}}
- {"id":"drawing-172","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,5.5],"width":0.4,"height":0.4,"rounded":false,"fill":"#91eeffff","thickness":0,"angle":0}}
- {"id":"drawing-173","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,3.5],"width":0.3,"height":0.21,"rounded":false,"fill":"#fff12bff","stroke":"#21c43aff","thickness":1.92,"angle":0}}
- {"id":"drawing-174","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,2.5],"width":0.3,"height":0.21,"rounded":false,"fill":"#fff12bff","stroke":"#21a0c4ff","thickness":1.92,"angle":135}}
- {"id":"drawing-175","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,8.5],"width":0.3,"height":0.21,"rounded":false,"fill":"#fff12bff","stroke":"#21c43aff","thickness":1.92,"angle":0}}
- {"id":"drawing-176","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,0.5],"width":0.3,"height":0.21,"rounded":false,"fill":"#fff12bff","stroke":"#e66ceaff","thickness":1.92,"angle":90}}
- {"id":"drawing-177","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,1.5],"width":0.3,"height":0.21,"rounded":false,"fill":"#fff12bff","stroke":"#21a0c4ff","thickness":1.92,"angle":180}}
- {"id":"drawing-178","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,9.5],"width":1,"height":9.07,"rounded":false,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-179","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,9.75],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#ffe410ff","thickness":6.4,"angle":0}}
- {"id":"drawing-180","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,9.75],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#ffe410ff","thickness":6.4,"angle":0}}
- {"id":"drawing-181","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,9.75],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#ffe410ff","thickness":6.4,"angle":0}}
- {"id":"drawing-182","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,9.75],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#ffe410ff","thickness":6.4,"angle":0}}
- {"id":"drawing-183","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,9.75],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#ffe410ff","thickness":6.4,"angle":0}}
- {"id":"drawing-184","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,9.75],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#ffe410ff","thickness":6.4,"angle":0}}
- {"id":"drawing-185","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,9.75],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#ffe410ff","thickness":6.4,"angle":0}}
- {"id":"drawing-186","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,9.75],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#ffe410ff","thickness":6.4,"angle":0}}
- {"id":"drawing-187","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,9.75],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#ffe410ff","thickness":6.4,"angle":0}}
- {"id":"drawing-188","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,9.75],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"1","textColor":"#9f9fc0ff","fontSize":40}}
- {"id":"drawing-189","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,9.75],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"2","textColor":"#9f9fc0ff","fontSize":40}}
- {"id":"drawing-190","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,9.75],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"3","textColor":"#9f9fc0ff","fontSize":40}}
- {"id":"drawing-191","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,9.75],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"4","textColor":"#9f9fc0ff","fontSize":40}}
- {"id":"drawing-192","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,9.75],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"5","textColor":"#9f9fc0ff","fontSize":40}}
- {"id":"drawing-193","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,9.75],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"6","textColor":"#9f9fc0ff","fontSize":40}}
- {"id":"drawing-194","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,9.75],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"7","textColor":"#9f9fc0ff","fontSize":40}}
- {"id":"drawing-195","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,9.75],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"8","textColor":"#9f9fc0ff","fontSize":40}}
- {"id":"drawing-196","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,9.75],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"9","textColor":"#9f9fc0ff","fontSize":40}}
```

Normal sudoku rules apply.

The digits along each coloured route can be read as a 6-digit 'route number', starting at the square and finishing at the spot. 

These nine route numbers can be ranked from lowest to highest. A circled yellow taxi on a route indicates that route's rank. (A '1' taxi would be on the route with the smallest 6-digit route number. None of the route numbers are the same, so there are no tied ranks.)

• Box borders divide a BLUE ROUTE into segments whose digits have the same sum. 
• Adjacent digits on a GREEN ROUTE have a difference of at least 5.
• Digits on a PINK ROUTE form a non-repeating, consecutive set in some order.
