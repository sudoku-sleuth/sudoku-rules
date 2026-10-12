---
format: open-rules
title: "RAT RUN 1: Primer"
setter: Marty Sears
source: https://sudokupad.app/hz8h07f9t1
case: https://sudoku-sleuth.com/cases/rat-run-1-primer
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
board:
  rows: 6
  cols: 6
  symbols:
    - 1
    - 2
    - 3
    - 4
    - 5
    - 6
  regions:
    - - r1c1
      - r1c2
      - r1c3
      - r2c1
      - r2c2
      - r2c3
    - - r1c4
      - r1c5
      - r1c6
      - r2c4
      - r2c5
      - r2c6
    - - r3c1
      - r3c2
      - r3c3
      - r4c1
      - r4c2
      - r4c3
    - - r3c4
      - r3c5
      - r3c6
      - r4c4
      - r4c5
      - r4c6
    - - r5c1
      - r5c2
      - r5c3
      - r6c1
      - r6c2
      - r6c3
    - - r5c4
      - r5c5
      - r5c6
      - r6c4
      - r6c5
      - r6c6
---

```rules
unique-1: unique r1c1-r1c2-r1c3-r1c4-r1c5-r1c6
unique-2: unique r2c1-r2c2-r2c3-r2c4-r2c5-r2c6
unique-3: unique r3c1-r3c2-r3c3-r3c4-r3c5-r3c6
unique-4: unique r4c1-r4c2-r4c3-r4c4-r4c5-r4c6
unique-5: unique r5c1-r5c2-r5c3-r5c4-r5c5-r5c6
unique-6: unique r6c1-r6c2-r6c3-r6c4-r6c5-r6c6
unique-7: unique r1c1-r2c1-r3c1-r4c1-r5c1-r6c1
unique-8: unique r1c2-r2c2-r3c2-r4c2-r5c2-r6c2
unique-9: unique r1c3-r2c3-r3c3-r4c3-r5c3-r6c3
unique-10: unique r1c4-r2c4-r3c4-r4c4-r5c4-r6c4
unique-11: unique r1c5-r2c5-r3c5-r4c5-r5c5-r6c5
unique-12: unique r1c6-r2c6-r3c6-r4c6-r5c6-r6c6
unique-13: unique r1c1-r1c2-r1c3-r2c1-r2c2-r2c3
unique-14: unique r1c4-r1c5-r1c6-r2c4-r2c5-r2c6
unique-15: unique r3c1-r3c2-r3c3-r4c1-r4c2-r4c3
unique-16: unique r3c4-r3c5-r3c6-r4c4-r4c5-r4c6
unique-17: unique r5c1-r5c2-r5c3-r6c1-r6c2-r6c3
unique-18: unique r5c4-r5c5-r5c6-r6c4-r6c5-r6c6
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[-0.25,5.25],[-0.25,6.25],[6.25,6.25],[6.25,-0.25],[-0.25,-0.25],[-0.25,5.25]],"color":"#9643d4ff","thickness":23.04,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[2,0],[2,6]],"color":"#FFFFFF","thickness":7.68,"rounded":true,"layer":"over"}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[6,3],[0,3]],"color":"#FFFFFF","thickness":7.68,"rounded":true,"layer":"over"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[4,6],[4,0]],"color":"#FFFFFF","thickness":7.68,"rounded":true,"layer":"over"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[1,0],[1,6]],"color":"#e4e4e4ff","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[2,6],[2,5],[0,5]],"color":"#e4e4e4ff","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[3,6],[3,5],[2,5],[2,4],[0,4]],"color":"#e4e4e4ff","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[4,6],[4,5],[3,5],[3,4],[2,4],[2,3],[0,3]],"color":"#e4e4e4ff","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[5,6],[5,5],[4,5],[4,4],[3,4],[3,3],[2,3],[2,2],[0,2]],"color":"#e4e4e4ff","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[6,5],[5,5],[5,4],[4,4],[4,3],[3,3],[3,2],[2,2],[2,1],[0,1]],"color":"#e4e4e4ff","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[6,4],[5,4],[5,3],[4,3],[4,2],[3,2],[3,1],[2,1],[2,0]],"color":"#e4e4e4ff","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[6,3],[5,3],[5,2],[4,2],[4,1],[3,1],[3,0]],"color":"#e4e4e4ff","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[6,2],[5,2],[5,1],[4,1],[4,0]],"color":"#e4e4e4ff","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[6,1],[5,1],[5,0]],"color":"#e4e4e4ff","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[2,0],[2,6]],"color":"#FFFFFF","thickness":5.12,"rounded":true,"layer":"over"}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[6,3],[0,3]],"color":"#FFFFFF","thickness":5.12,"rounded":true,"layer":"over"}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[4,6],[4,0]],"color":"#FFFFFF","thickness":5.12,"rounded":true,"layer":"over"}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[2,0],[2,6]],"color":"#cbcbcb4e","thickness":5.12,"rounded":true,"layer":"over"}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[6,3],[0,3]],"color":"#cbcbcb4e","thickness":5.12,"rounded":true,"layer":"over"}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[4,6],[4,0]],"color":"#cbcbcb4e","thickness":5.12,"rounded":true,"layer":"over"}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[3,1],[4,1],[4,3]],"color":"#6802acff","thickness":12.16,"rounded":true,"layer":"over"}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[5,4],[5,5],[4,5],[4,4],[3,4]],"color":"#6802acff","thickness":12.16,"rounded":true,"layer":"over"}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[1,2],[0,2],[0,6],[6,6],[6,0],[0,0],[0,2]],"color":"#6802acff","thickness":12.16,"rounded":true,"layer":"over"}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[0,3],[1,3]],"color":"#6802acff","thickness":12.16,"rounded":true,"layer":"over"}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[3,2],[2,2],[2,5],[3,5]],"color":"#6802acff","thickness":12.16,"rounded":true,"layer":"over"}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[2,2],[2,1],[1,1]],"color":"#6802acff","thickness":12.16,"rounded":true,"layer":"over"}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[1,4],[1,5]],"color":"#6802acff","thickness":12.16,"rounded":true,"layer":"over"}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[2,-0.5],[2,0]],"color":"#5d169761","thickness":5.76,"rounded":true,"layer":"over"}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"line","points":[[4,-0.5],[4,0]],"color":"#5d169761","thickness":5.76,"rounded":true,"layer":"over"}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"line","points":[[6,3],[6.5,3]],"color":"#5d169761","thickness":5.76,"rounded":true,"layer":"over"}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"line","points":[[4,6],[4,6.5]],"color":"#5d169761","thickness":5.76,"rounded":true,"layer":"over"}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"line","points":[[2,6],[2,6.5]],"color":"#5d169761","thickness":5.76,"rounded":true,"layer":"over"}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"line","points":[[-0.5,3],[0,3]],"color":"#5d169761","thickness":5.76,"rounded":true,"layer":"over"}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"line","points":[[1.5,-0.5],[4.5,-0.5]],"color":"#FFFFFF","thickness":8.96,"rounded":true,"layer":"over"}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"line","points":[[-0.5,2.5],[-0.5,3.5]],"color":"#FFFFFF","thickness":8.96,"rounded":true,"layer":"over"}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"line","points":[[1.5,6.5],[4.5,6.5]],"color":"#FFFFFF","thickness":8.96,"rounded":true,"layer":"over"}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"line","points":[[6.5,2.5],[6.5,3.5]],"color":"#FFFFFF","thickness":8.96,"rounded":true,"layer":"over"}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.7,4.5],"width":0,"height":0.691,"rounded":true,"thickness":0,"angle":0,"text":"🧁","textColor":"#000000","fontSize":26.2,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.8,2.5],"width":0,"height":0.722,"rounded":true,"thickness":0,"angle":0,"text":"🐀","textColor":"#000000","fontSize":27.4,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,1],"width":0.28,"height":0.28,"rounded":true,"fill":"#6802acff","thickness":0,"angle":0}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,1],"width":0.28,"height":0.28,"rounded":true,"fill":"#6802acff","thickness":0,"angle":0}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,2],"width":0.28,"height":0.28,"rounded":true,"fill":"#6802acff","thickness":0,"angle":0}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,5],"width":0.28,"height":0.28,"rounded":true,"fill":"#6802acff","thickness":0,"angle":0}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,5],"width":0.28,"height":0.28,"rounded":true,"fill":"#6802acff","thickness":0,"angle":0}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,4],"width":0.28,"height":0.28,"rounded":true,"fill":"#6802acff","thickness":0,"angle":0}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,4],"width":0.28,"height":0.28,"rounded":true,"fill":"#6802acff","thickness":0,"angle":0}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,5],"width":0.28,"height":0.28,"rounded":true,"fill":"#6802acff","thickness":0,"angle":0}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,5],"width":0.28,"height":0.28,"rounded":true,"fill":"#6802acff","thickness":0,"angle":0}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,5],"width":0.28,"height":0.28,"rounded":true,"fill":"#6802acff","thickness":0,"angle":0}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,4],"width":0.28,"height":0.28,"rounded":true,"fill":"#6802acff","thickness":0,"angle":0}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,3],"width":0.28,"height":0.28,"rounded":true,"fill":"#6802acff","thickness":0,"angle":0}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,2],"width":0.28,"height":0.28,"rounded":true,"fill":"#6802acff","thickness":0,"angle":0}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,1],"width":0.28,"height":0.28,"rounded":true,"fill":"#6802acff","thickness":0,"angle":0}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,1],"width":0.28,"height":0.28,"rounded":true,"fill":"#6802acff","thickness":0,"angle":0}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,3],"width":0.28,"height":0.28,"rounded":true,"fill":"#6802acff","thickness":0,"angle":0}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,4],"width":0.28,"height":0.28,"rounded":true,"fill":"#6802acff","thickness":0,"angle":0}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,0],"width":0.1,"height":0.1,"rounded":true,"fill":"#2e0260cf","thickness":0,"angle":0}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,0.2],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,0.4],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-60","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,0.6],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-61","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,0.8],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-62","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,1],"width":0.1,"height":0.1,"rounded":true,"fill":"#2e0260cf","thickness":0,"angle":0}}
- {"id":"drawing-63","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,1.2],"width":0.1,"height":0.1,"rounded":true,"fill":"#2e0260cf","thickness":0,"angle":0}}
- {"id":"drawing-64","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,1.4],"width":0.1,"height":0.1,"rounded":true,"fill":"#2e0260cf","thickness":0,"angle":0}}
- {"id":"drawing-65","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,1.6],"width":0.1,"height":0.1,"rounded":true,"fill":"#2e0260cf","thickness":0,"angle":0}}
- {"id":"drawing-66","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,1.8],"width":0.1,"height":0.1,"rounded":true,"fill":"#2e0260cf","thickness":0,"angle":0}}
- {"id":"drawing-67","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,2],"width":0.1,"height":0.1,"rounded":true,"fill":"#2e0260cf","thickness":0,"angle":0}}
- {"id":"drawing-68","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,2.2],"width":0.1,"height":0.1,"rounded":true,"fill":"#2e0260cf","thickness":0,"angle":0}}
- {"id":"drawing-69","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,2.4],"width":0.1,"height":0.1,"rounded":true,"fill":"#2e0260cf","thickness":0,"angle":0}}
- {"id":"drawing-70","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,2.6],"width":0.1,"height":0.1,"rounded":true,"fill":"#2e0260cf","thickness":0,"angle":0}}
- {"id":"drawing-71","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,2.8],"width":0.1,"height":0.1,"rounded":true,"fill":"#2e0260cf","thickness":0,"angle":0}}
- {"id":"drawing-72","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,3],"width":0.1,"height":0.1,"rounded":true,"fill":"#2e0260cf","thickness":0,"angle":0}}
- {"id":"drawing-73","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.8,3],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-74","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.6,3],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-75","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.4,3],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-76","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.2,3],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-77","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,3],"width":0.1,"height":0.1,"rounded":true,"fill":"#2e0260cf","thickness":0,"angle":0}}
- {"id":"drawing-78","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.8,3],"width":0.1,"height":0.1,"rounded":true,"fill":"#2e0260cf","thickness":0,"angle":0}}
- {"id":"drawing-79","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.6,3],"width":0.1,"height":0.1,"rounded":true,"fill":"#2e0260cf","thickness":0,"angle":0}}
- {"id":"drawing-80","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.4,3],"width":0.1,"height":0.1,"rounded":true,"fill":"#2e0260cf","thickness":0,"angle":0}}
- {"id":"drawing-81","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.2,3],"width":0.1,"height":0.1,"rounded":true,"fill":"#2e0260cf","thickness":0,"angle":0}}
- {"id":"drawing-82","rules":[],"visual":{"kind":"shape","layer":"over","center":[0,3],"width":0.1,"height":0.1,"rounded":true,"fill":"#2e0260cf","thickness":0,"angle":0}}
- {"id":"drawing-83","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,3.2],"width":0.1,"height":0.1,"rounded":true,"fill":"#2e0260cf","thickness":0,"angle":0}}
- {"id":"drawing-84","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,3.4],"width":0.1,"height":0.1,"rounded":true,"fill":"#2e0260cf","thickness":0,"angle":0}}
- {"id":"drawing-85","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,3.6],"width":0.1,"height":0.1,"rounded":true,"fill":"#2e0260cf","thickness":0,"angle":0}}
- {"id":"drawing-86","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,3.8],"width":0.1,"height":0.1,"rounded":true,"fill":"#2e0260cf","thickness":0,"angle":0}}
- {"id":"drawing-87","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,4],"width":0.1,"height":0.1,"rounded":true,"fill":"#2e0260cf","thickness":0,"angle":0}}
- {"id":"drawing-88","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,4.2],"width":0.1,"height":0.1,"rounded":true,"fill":"#2e0260cf","thickness":0,"angle":0}}
- {"id":"drawing-89","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,4.4],"width":0.1,"height":0.1,"rounded":true,"fill":"#2e0260cf","thickness":0,"angle":0}}
- {"id":"drawing-90","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,4.6],"width":0.1,"height":0.1,"rounded":true,"fill":"#2e0260cf","thickness":0,"angle":0}}
- {"id":"drawing-91","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,4.8],"width":0.1,"height":0.1,"rounded":true,"fill":"#2e0260cf","thickness":0,"angle":0}}
- {"id":"drawing-92","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,5],"width":0.1,"height":0.1,"rounded":true,"fill":"#2e0260cf","thickness":0,"angle":0}}
- {"id":"drawing-93","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,5.2],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-94","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,5.4],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-95","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,5.6],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-96","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,5.8],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-97","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,6],"width":0.1,"height":0.1,"rounded":true,"fill":"#2e0260cf","thickness":0,"angle":0}}
- {"id":"drawing-98","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,3],"width":0.1,"height":0.1,"rounded":true,"fill":"#2e0260cf","thickness":0,"angle":0}}
- {"id":"drawing-99","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.8,3],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-100","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.6,3],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-101","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.4,3],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-102","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.2,3],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-103","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,3],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-104","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.8,3],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-105","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.6,3],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-106","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.4,3],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-107","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.2,3],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-108","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,0.2],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-109","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,0.4],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-110","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,0.8],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-111","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,0.6],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-112","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,1],"width":0.1,"height":0.1,"rounded":true,"fill":"#2e0260cf","thickness":0,"angle":0}}
- {"id":"drawing-113","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,1.2],"width":0.1,"height":0.1,"rounded":true,"fill":"#2e0260cf","thickness":0,"angle":0}}
- {"id":"drawing-114","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,1.4],"width":0.1,"height":0.1,"rounded":true,"fill":"#2e0260cf","thickness":0,"angle":0}}
- {"id":"drawing-115","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,1.6],"width":0.1,"height":0.1,"rounded":true,"fill":"#2e0260cf","thickness":0,"angle":0}}
- {"id":"drawing-116","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,1.8],"width":0.1,"height":0.1,"rounded":true,"fill":"#2e0260cf","thickness":0,"angle":0}}
- {"id":"drawing-117","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,2],"width":0.1,"height":0.1,"rounded":true,"fill":"#2e0260cf","thickness":0,"angle":0}}
- {"id":"drawing-118","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,2.2],"width":0.1,"height":0.1,"rounded":true,"fill":"#2e0260cf","thickness":0,"angle":0}}
- {"id":"drawing-119","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,2.4],"width":0.1,"height":0.1,"rounded":true,"fill":"#2e0260cf","thickness":0,"angle":0}}
- {"id":"drawing-120","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,2.6],"width":0.1,"height":0.1,"rounded":true,"fill":"#2e0260cf","thickness":0,"angle":0}}
- {"id":"drawing-121","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,2.8],"width":0.1,"height":0.1,"rounded":true,"fill":"#2e0260cf","thickness":0,"angle":0}}
- {"id":"drawing-122","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.2,3],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-123","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.4,3],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-124","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.6,3],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-125","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.8,3],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-126","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,3],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-127","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.2,3],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-128","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.4,3],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-129","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.6,3],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-130","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.8,3],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-131","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,3.2],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-132","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,3.4],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-133","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,3.6],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-134","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,3.8],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-135","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,4],"width":0.1,"height":0.1,"rounded":true,"fill":"#2e0260cf","thickness":0,"angle":0}}
- {"id":"drawing-136","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,4.2],"width":0.1,"height":0.1,"rounded":true,"fill":"#2e0260cf","thickness":0,"angle":0}}
- {"id":"drawing-137","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,4.4],"width":0.1,"height":0.1,"rounded":true,"fill":"#2e0260cf","thickness":0,"angle":0}}
- {"id":"drawing-138","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,4.6],"width":0.1,"height":0.1,"rounded":true,"fill":"#2e0260cf","thickness":0,"angle":0}}
- {"id":"drawing-139","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,4.8],"width":0.1,"height":0.1,"rounded":true,"fill":"#2e0260cf","thickness":0,"angle":0}}
- {"id":"drawing-140","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,5],"width":0.1,"height":0.1,"rounded":true,"fill":"#2e0260cf","thickness":0,"angle":0}}
- {"id":"drawing-141","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,5.2],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-142","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,5.4],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-143","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,5.6],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-144","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,5.8],"width":0.1,"height":0.1,"rounded":true,"fill":"#00000030","thickness":0,"angle":0}}
- {"id":"drawing-145","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,6],"width":0.1,"height":0.1,"rounded":true,"fill":"#2e0260cf","thickness":0,"angle":0}}
- {"id":"drawing-146","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,0],"width":0.1,"height":0.1,"rounded":true,"fill":"#2e0260cf","thickness":0,"angle":0}}
- {"id":"drawing-147","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,3],"width":0.1,"height":0.1,"rounded":true,"fill":"#2e0260cf","thickness":0,"angle":0}}
```

Normal 6x6 sudoku rules apply.

AIM OF EXPERIMENT: 
Finkz the rat must reach the cupcake by finding a path through the maze. The path will be a snaking line that passes through the centres of cells, without visiting any cell more than once, crossing itself or passing through any thick maze walls.

As well as moving orthogonally, Finkz may move diagonally if there's a 2x2 space in which to do so, but may never pass diagonally through the rounded end / corner of a wall.

TEST CONSTRAINT:
In this experiment, any two cells that are adjacent along the correct path must sum to a prime number. Also, ALL digits within a marked 3x2 box that lie anywhere on the correct path must sum to a prime number too.
