---
format: open-rules
title: "RAT RUN 2: Tenacity"
setter: Marty Sears
source: https://sudokupad.app/r8rkmo7jaz
case: https://sudoku-sleuth.com/cases/rat-run-2-tenacity
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
board:
  rows: 8
  cols: 8
  symbols:
    - 1
    - 2
    - 3
    - 4
    - 5
    - 6
    - 7
    - 8
  regions:
    - - r1c1
      - r1c2
      - r1c3
      - r1c4
      - r2c1
      - r2c2
      - r2c3
      - r2c4
    - - r1c5
      - r1c6
      - r1c7
      - r1c8
      - r2c5
      - r2c6
      - r2c7
      - r2c8
    - - r3c1
      - r3c2
      - r3c3
      - r3c4
      - r4c1
      - r4c2
      - r4c3
      - r4c4
    - - r3c5
      - r3c6
      - r3c7
      - r3c8
      - r4c5
      - r4c6
      - r4c7
      - r4c8
    - - r5c1
      - r5c2
      - r5c3
      - r5c4
      - r6c1
      - r6c2
      - r6c3
      - r6c4
    - - r5c5
      - r5c6
      - r5c7
      - r5c8
      - r6c5
      - r6c6
      - r6c7
      - r6c8
    - - r7c1
      - r7c2
      - r7c3
      - r7c4
      - r8c1
      - r8c2
      - r8c3
      - r8c4
    - - r7c5
      - r7c6
      - r7c7
      - r7c8
      - r8c5
      - r8c6
      - r8c7
      - r8c8
---

```rules
unique-1: unique r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8
unique-2: unique r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8
unique-3: unique r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8
unique-4: unique r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8
unique-5: unique r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8
unique-6: unique r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8
unique-7: unique r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8
unique-8: unique r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8
unique-9: unique r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1
unique-10: unique r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2
unique-11: unique r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3
unique-12: unique r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4-r8c4
unique-13: unique r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5
unique-14: unique r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6-r8c6
unique-15: unique r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7
unique-16: unique r1c8-r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8
unique-17: unique r1c1-r1c2-r1c3-r1c4-r2c1-r2c2-r2c3-r2c4
unique-18: unique r1c5-r1c6-r1c7-r1c8-r2c5-r2c6-r2c7-r2c8
unique-19: unique r3c1-r3c2-r3c3-r3c4-r4c1-r4c2-r4c3-r4c4
unique-20: unique r3c5-r3c6-r3c7-r3c8-r4c5-r4c6-r4c7-r4c8
unique-21: unique r5c1-r5c2-r5c3-r5c4-r6c1-r6c2-r6c3-r6c4
unique-22: unique r5c5-r5c6-r5c7-r5c8-r6c5-r6c6-r6c7-r6c8
unique-23: unique r7c1-r7c2-r7c3-r7c4-r8c1-r8c2-r8c3-r8c4
unique-24: unique r7c5-r7c6-r7c7-r7c8-r8c5-r8c6-r8c7-r8c8
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[-0.25,8.25],[8.25,8.25],[8.25,-0.25],[-0.25,-0.25],[-0.25,8.25]],"color":"#f1d6a9ff","thickness":20,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[2,0],[2,8]],"color":"#FFFFFF","thickness":8,"rounded":true,"layer":"over"}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[4,0],[4,4],[0,4]],"color":"#FFFFFF","thickness":8,"rounded":true,"layer":"over"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[4,8],[4,4],[8,4]],"color":"#FFFFFF","thickness":8,"rounded":true,"layer":"over"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[6,0],[6,8]],"color":"#FFFFFF","thickness":8,"rounded":true,"layer":"over"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[1,0],[1,8]],"color":"#e4e4e4ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[0,7],[3,7],[3,8]],"color":"#e4e4e4ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[0,6],[3,6],[3,7],[5,7],[5,8]],"color":"#e4e4e4ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[0,5],[3,5],[3,6],[5,6],[5,7],[7,7],[7,8]],"color":"#e4e4e4ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[8,7],[7,7],[7,6],[5,6],[5,5],[3,5],[3,3],[0,3]],"color":"#e4e4e4ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[8,6],[7,6],[7,5],[5,5],[5,3],[3,3],[3,2],[0,2]],"color":"#e4e4e4ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[8,5],[7,5],[7,3],[5,3],[5,2],[3,2],[3,1],[0,1]],"color":"#e4e4e4ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[8,3],[7,3],[7,2],[5,2],[5,1],[3,1],[3,0]],"color":"#e4e4e4ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[8,2],[7,2],[7,1],[5,1],[5,0]],"color":"#e4e4e4ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[8,1],[7,1],[7,0]],"color":"#e4e4e4ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[2,0],[2,8]],"color":"#FFFFFF","thickness":6,"rounded":true,"layer":"over"}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[4,0],[4,4],[0,4]],"color":"#FFFFFF","thickness":6,"rounded":true,"layer":"over"}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[4,8],[4,4],[8,4]],"color":"#FFFFFF","thickness":6,"rounded":true,"layer":"over"}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[6,0],[6,8]],"color":"#FFFFFF","thickness":6,"rounded":true,"layer":"over"}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[2,0],[2,8]],"color":"#cbcbcb4e","thickness":6,"rounded":true,"layer":"over"}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[4,0],[4,4],[0,4]],"color":"#cbcbcb4e","thickness":6,"rounded":true,"layer":"over"}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[4,8],[4,4],[8,4]],"color":"#cbcbcb4e","thickness":6,"rounded":true,"layer":"over"}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[6,0],[6,8]],"color":"#cbcbcb4e","thickness":6,"rounded":true,"layer":"over"}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[4,-0.5],[4,0]],"color":"#c6a14971","thickness":6,"rounded":true,"layer":"over"}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[6,-0.5],[6,0]],"color":"#c6a14971","thickness":6,"rounded":true,"layer":"over"}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[8,4],[8.5,4]],"color":"#c6a14971","thickness":6,"rounded":true,"layer":"over"}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[6,8],[6,8.5]],"color":"#c6a14971","thickness":6,"rounded":true,"layer":"over"}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[4,8],[4,8.5]],"color":"#c6a14971","thickness":6,"rounded":true,"layer":"over"}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"line","points":[[2,8],[2,8.5]],"color":"#c6a14971","thickness":6,"rounded":true,"layer":"over"}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"line","points":[[-0.5,4],[0,4]],"color":"#c6a14971","thickness":6,"rounded":true,"layer":"over"}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"line","points":[[2,-0.5],[2,0]],"color":"#c6a14971","thickness":6,"rounded":true,"layer":"over"}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"line","points":[[7,3],[7,2],[6,2],[6,0],[8,0],[8,8],[0,8],[0,6],[1,6]],"color":"#c6a149ff","thickness":14,"rounded":true,"layer":"over"}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"line","points":[[7,2],[7,1]],"color":"#c6a149ff","thickness":14,"rounded":true,"layer":"over"}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"line","points":[[6,0],[0,0],[0,6]],"color":"#c6a149ff","thickness":14,"rounded":true,"layer":"over"}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"line","points":[[6,8],[6,7]],"color":"#c6a149ff","thickness":14,"rounded":true,"layer":"over"}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"line","points":[[4,8],[4,5]],"color":"#c6a149ff","thickness":14,"rounded":true,"layer":"over"}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"line","points":[[0,4],[1,4]],"color":"#c6a149ff","thickness":14,"rounded":true,"layer":"over"}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"line","points":[[2,7],[2,3],[1,3]],"color":"#c6a149ff","thickness":14,"rounded":true,"layer":"over"}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"line","points":[[2,5],[1,5]],"color":"#c6a149ff","thickness":14,"rounded":true,"layer":"over"}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"line","points":[[7,7],[7,4],[5,4],[5,1]],"color":"#c6a149ff","thickness":14,"rounded":true,"layer":"over"}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"line","points":[[4,3],[4,1],[1,1]],"color":"#c6a149ff","thickness":14,"rounded":true,"layer":"over"}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"line","points":[[4,4],[3,4],[3,7]],"color":"#c6a149ff","thickness":14,"rounded":true,"layer":"over"}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"line","points":[[3,4],[3,3]],"color":"#c6a149ff","thickness":14,"rounded":true,"layer":"over"}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"line","points":[[1,2],[2,2]],"color":"#c6a149ff","thickness":14,"rounded":true,"layer":"over"}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"line","points":[[5,5],[6,5],[6,6]],"color":"#c6a149ff","thickness":14,"rounded":true,"layer":"over"}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"line","points":[[5,6],[5,7]],"color":"#c6a149ff","thickness":14,"rounded":true,"layer":"over"}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"line","points":[[1.5,-0.5],[6.5,-0.5]],"color":"#FFFFFF","thickness":10,"rounded":true,"layer":"over"}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"line","points":[[8.5,3.5],[8.5,4.5]],"color":"#FFFFFF","thickness":10,"rounded":true,"layer":"over"}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"line","points":[[6.5,8.5],[1.5,8.5]],"color":"#FFFFFF","thickness":10,"rounded":true,"layer":"over"}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"line","points":[[-0.5,3.5],[-0.5,4.5]],"color":"#FFFFFF","thickness":10,"rounded":true,"layer":"over"}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.65,7.5],"width":0,"height":0.582,"rounded":true,"thickness":0,"angle":0,"text":"🧁","textColor":"#000000","fontSize":26,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.65,1.5],"width":0,"height":0.582,"rounded":true,"thickness":0,"angle":0,"text":"🐀","textColor":"#000000","fontSize":26,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,1],"width":0.32,"height":0.32,"rounded":true,"fill":"#c6a149ff","thickness":0,"angle":0}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,3],"width":0.32,"height":0.32,"rounded":true,"fill":"#c6a149ff","thickness":0,"angle":0}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,1],"width":0.32,"height":0.32,"rounded":true,"fill":"#c6a149ff","thickness":0,"angle":0}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,2],"width":0.32,"height":0.32,"rounded":true,"fill":"#c6a149ff","thickness":0,"angle":0}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,2],"width":0.32,"height":0.32,"rounded":true,"fill":"#c6a149ff","thickness":0,"angle":0}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,3],"width":0.32,"height":0.32,"rounded":true,"fill":"#c6a149ff","thickness":0,"angle":0}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,3],"width":0.32,"height":0.32,"rounded":true,"fill":"#c6a149ff","thickness":0,"angle":0}}
- {"id":"drawing-60","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,5],"width":0.32,"height":0.32,"rounded":true,"fill":"#c6a149ff","thickness":0,"angle":0}}
- {"id":"drawing-61","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,4],"width":0.32,"height":0.32,"rounded":true,"fill":"#c6a149ff","thickness":0,"angle":0}}
- {"id":"drawing-62","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,6],"width":0.32,"height":0.32,"rounded":true,"fill":"#c6a149ff","thickness":0,"angle":0}}
- {"id":"drawing-63","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,7],"width":0.32,"height":0.32,"rounded":true,"fill":"#c6a149ff","thickness":0,"angle":0}}
- {"id":"drawing-64","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,7],"width":0.32,"height":0.32,"rounded":true,"fill":"#c6a149ff","thickness":0,"angle":0}}
- {"id":"drawing-65","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,4],"width":0.32,"height":0.32,"rounded":true,"fill":"#c6a149ff","thickness":0,"angle":0}}
- {"id":"drawing-66","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,3],"width":0.32,"height":0.32,"rounded":true,"fill":"#c6a149ff","thickness":0,"angle":0}}
- {"id":"drawing-67","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,5],"width":0.32,"height":0.32,"rounded":true,"fill":"#c6a149ff","thickness":0,"angle":0}}
- {"id":"drawing-68","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,6],"width":0.32,"height":0.32,"rounded":true,"fill":"#c6a149ff","thickness":0,"angle":0}}
- {"id":"drawing-69","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,7],"width":0.32,"height":0.32,"rounded":true,"fill":"#c6a149ff","thickness":0,"angle":0}}
- {"id":"drawing-70","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,7],"width":0.32,"height":0.32,"rounded":true,"fill":"#c6a149ff","thickness":0,"angle":0}}
- {"id":"drawing-71","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,6],"width":0.32,"height":0.32,"rounded":true,"fill":"#c6a149ff","thickness":0,"angle":0}}
- {"id":"drawing-72","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,5],"width":0.32,"height":0.32,"rounded":true,"fill":"#c6a149ff","thickness":0,"angle":0}}
- {"id":"drawing-73","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,5],"width":0.32,"height":0.32,"rounded":true,"fill":"#c6a149ff","thickness":0,"angle":0}}
- {"id":"drawing-74","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,4],"width":0.32,"height":0.32,"rounded":true,"fill":"#c6a149ff","thickness":0,"angle":0}}
- {"id":"drawing-75","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,7],"width":0.32,"height":0.32,"rounded":true,"fill":"#c6a149ff","thickness":0,"angle":0}}
- {"id":"drawing-76","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,3],"width":0.32,"height":0.32,"rounded":true,"fill":"#c6a149ff","thickness":0,"angle":0}}
- {"id":"drawing-77","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,1],"width":0.32,"height":0.32,"rounded":true,"fill":"#c6a149ff","thickness":0,"angle":0}}
- {"id":"drawing-78","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,2],"width":0.32,"height":0.32,"rounded":true,"fill":"#c6a149ff","thickness":0,"angle":0}}
- {"id":"drawing-79","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,1],"width":0.32,"height":0.32,"rounded":true,"fill":"#c6a149ff","thickness":0,"angle":0}}
- {"id":"drawing-80","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,4],"width":0.32,"height":0.32,"rounded":true,"fill":"#c6a149ff","thickness":0,"angle":0}}
- {"id":"drawing-81","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,0.2],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-82","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,0.4],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-83","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,0.6],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-84","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,0.8],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-85","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,1],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-86","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,1.2],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-87","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,1.4],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-88","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,1.6],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-89","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,1.8],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-90","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,2],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-91","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,2.2],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-92","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,2.4],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-93","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,2.8],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-94","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,2.6],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-95","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,3],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-96","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,3.2],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-97","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,3.6],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-98","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,3.4],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-99","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,3.8],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-100","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,4],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-101","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.2,4],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-102","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.6,4],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-103","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.4,4],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-104","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.8,4],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-105","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.2,4],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-106","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,4],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-107","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.4,4],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-108","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.6,4],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-109","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.8,4],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-110","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,0],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-111","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,4],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-112","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,0],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-113","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,0.2],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-114","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,0.4],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-115","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,0.6],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-116","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,0.8],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-117","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,1],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-118","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,1.4],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-119","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,1.2],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-120","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,1.6],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-121","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,1.8],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-122","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,2],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-123","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,2.2],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-124","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,2.4],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-125","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,2.6],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-126","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,2.8],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-127","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,3],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-128","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,3.2],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-129","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,3.4],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-130","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,3.6],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-131","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,3.8],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-132","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,4],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-133","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.2,4],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-134","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.4,4],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-135","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.6,4],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-136","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.8,4],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-137","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,4],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-138","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.2,4],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-139","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.4,4],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-140","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.6,4],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-141","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.8,4],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-142","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,4.2],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-143","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,4.4],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-144","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,4.6],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-145","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,4.8],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-146","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,5],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-147","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,5.2],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-148","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,5.4],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-149","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,5.6],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-150","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,5.8],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-151","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,6],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-152","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,6.2],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-153","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,6.4],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-154","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,6.6],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-155","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,6.8],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-156","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,7],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-157","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,7.4],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-158","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,7.2],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-159","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,7.6],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-160","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,7.8],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-161","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,8],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-162","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,4.2],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-163","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,4.4],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-164","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,4.6],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-165","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,4.8],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-166","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,5],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-167","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,5.2],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-168","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,5.4],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-169","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,5.6],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-170","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,5.8],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-171","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,6],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-172","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,6.2],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-173","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,6.4],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-174","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,6.6],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-175","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,6.8],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-176","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,7],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-177","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,7.2],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-178","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,7.6],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-179","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,7.4],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-180","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,7.8],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-181","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,8],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-182","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,0],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-183","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,0.2],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-184","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,0.4],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-185","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,0.6],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-186","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,0.8],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-187","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,1],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-188","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,1.2],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-189","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,1.4],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-190","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,1.6],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-191","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,1.8],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-192","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,2],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-193","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,2.2],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-194","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,2.4],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-195","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,2.6],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-196","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,2.8],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-197","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,3],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-198","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,3.2],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-199","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,3.4],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-200","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,3.6],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-201","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,4],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-202","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,3.8],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-203","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,4.2],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-204","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,4.6],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-205","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,4.4],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-206","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,4.8],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-207","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,5.2],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-208","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,5],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-209","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,5.4],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-210","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,5.6],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-211","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,5.8],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-212","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,6],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-213","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,6.4],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-214","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,6.2],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-215","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,6.6],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-216","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,6.8],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-217","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,7],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-218","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,7.2],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-219","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,7.4],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-220","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,7.6],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-221","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,7.8],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-222","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,8],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-223","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.2,4],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-224","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.6,4],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-225","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.4,4],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-226","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.8,4],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-227","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,4],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-228","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.2,4],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-229","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.4,4],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-230","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.6,4],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-231","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.8,4],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-232","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.8,4],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-233","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.6,4],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-234","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.4,4],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-235","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.2,4],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-236","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,4],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-237","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.8,4],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-238","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.6,4],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-239","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.4,4],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-240","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.2,4],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-241","rules":[],"visual":{"kind":"shape","layer":"over","center":[0,4],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
```

Normal 8x8 sudoku rules apply; fill the grid with the digits 1-8 so that no digit repeats in a row, column, or marked 4x2 box.

AIM OF EXPERIMENT: 
Finkz the rat must reach the cupcake by finding a path through the maze. The path will be a snaking line that passes through the centres of cells, without visiting any cell more than once, crossing itself or passing through any thick maze walls.

As well as moving orthogonally, Finkz may move diagonally if there's a 2x2 space in which to do so, but may never pass diagonally through the rounded end / corner of a wall.

TEST CONSTRAINT:
In this experiment, any two adjacent cells along the correct path must sum to at least ten.
