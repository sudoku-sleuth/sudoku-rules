---
format: open-rules
title: Pumpkin Patch
setter: Marty Sears
source: https://sudokupad.app/nzfy94z0eg
case: https://sudoku-sleuth.com/cases/pumpkin-patch
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
exported: 1cfa50f34c4038bc6a2c10d18d030831
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
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[1,3],[6,3],[6,6],[0,6],[0,3],[1,3]],"color":"#b6ad88ff","thickness":5.12,"rounded":true,"layer":"over"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[6,3],[6,0],[0,0],[0,3]],"color":"#b6ad88ff","thickness":5.12,"rounded":true,"layer":"over"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[4,6],[4,0]],"color":"#b6ad88ff","thickness":5.12,"rounded":true,"layer":"over"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[2,6],[2,0]],"color":"#b6ad88ff","thickness":5.12,"rounded":true,"layer":"over"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[6,1],[5,1],[5,2],[6,2]],"color":"#b6ad88ff","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[3,6],[3,5],[6,5]],"color":"#b6ad88ff","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[5,6],[5,2],[3,2],[3,5],[1,5],[1,6]],"color":"#b6ad88ff","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[6,4],[1,4],[1,5],[0,5]],"color":"#b6ad88ff","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[5,0],[5,1],[3,1],[3,2],[1,2],[1,4],[0,4]],"color":"#b6ad88ff","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[3,0],[3,1],[1,1],[1,2],[0,2]],"color":"#b6ad88ff","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[0,1],[1,1],[1,0]],"color":"#b6ad88ff","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.667,-0.333],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.333,-0.333],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,-0.333],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.667,-0.333],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.333,-0.333],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,-0.333],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.667,-0.333],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.333,-0.333],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,-0.333],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.667,-0.333],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.333,-0.333],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.333,-0.333],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"over","center":[0,-0.333],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.333,-0.333],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.667,-0.333],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,-0.333],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,-0.333],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.333,-0.333],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.667,-0.333],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,-0.333],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.333,-0.333],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.333,0],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.333,0.333],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.333,0.667],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.333,1],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.333,1.333],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.333,1.667],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.333,2],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.333,2.333],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.333,0],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.333,0.333],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.333,0.667],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.333,1],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.333,1.333],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.333,1.667],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.333,2],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.333,2.333],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.333,2.667],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.333,3],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.333,3.333],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.333,3.667],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.333,4],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.333,4.333],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.333,4.667],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.333,5],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.333,5.333],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-60","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.333,5.667],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-61","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.333,6],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-62","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.333,6.333],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-63","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.333,6.333],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-64","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,6.333],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-65","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.667,6.333],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-66","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.333,6.333],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-67","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,6.333],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-68","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.667,6.333],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-69","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.333,6.333],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-70","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,6.333],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-71","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.667,6.333],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-72","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.333,6.333],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-73","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,6.333],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-74","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.667,6.333],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-75","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.333,6.333],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-76","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,6.333],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-77","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.667,6.333],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-78","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.333,6.333],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-79","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,6.333],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-80","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.667,6.333],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-81","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.333,6.333],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-82","rules":[],"visual":{"kind":"shape","layer":"over","center":[0,6.333],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-83","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.333,3.667],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-84","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.333,4],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-85","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.333,4.333],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-86","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.333,4.667],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-87","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.333,5],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-88","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.333,5.333],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-89","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.333,5.667],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-90","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.333,6],"width":0.26,"height":0.26,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-91","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.333,1.5],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-92","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.333,1.167],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-93","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.333,1.833],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-94","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.333,2.167],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-95","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.333,0.833],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-96","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.333,0.5],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-97","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.333,0.167],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-98","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.333,-0.167],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-99","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.167,-0.333],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-100","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.833,-0.333],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-101","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,-0.333],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-102","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.167,-0.333],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-103","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.833,-0.333],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-104","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,-0.333],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-105","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.167,-0.333],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-106","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.833,-0.333],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-107","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,-0.333],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-108","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.167,-0.333],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-109","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.833,-0.333],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-110","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,-0.333],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-111","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.167,-0.333],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-112","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.833,-0.333],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-113","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,-0.333],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-114","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.167,-0.333],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-115","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.833,-0.333],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-116","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,-0.333],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-117","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.167,-0.333],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-118","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.167,-0.333],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-119","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.333,-0.167],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-120","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.333,0.167],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-121","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.333,0.5],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-122","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.333,0.833],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-123","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.333,1.167],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-124","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.333,1.5],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-125","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.333,1.833],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-126","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.333,2.167],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-127","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.333,2.5],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-128","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.333,2.833],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-129","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.333,3.167],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-130","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.333,3.5],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-131","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.333,3.833],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-132","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.333,4.167],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-133","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.333,4.5],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-134","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.333,4.833],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-135","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.333,5.167],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-136","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.333,5.5],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-137","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.333,5.833],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-138","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.333,6.167],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-139","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.167,6.333],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-140","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.167,6.333],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-141","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,6.333],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-142","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.833,6.333],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-143","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.167,6.333],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-144","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,6.333],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-145","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.833,6.333],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-146","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.167,6.333],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-147","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,6.333],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-148","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.833,6.333],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-149","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.167,6.333],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-150","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,6.333],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-151","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.833,6.333],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-152","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.167,6.333],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-153","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,6.333],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-154","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.833,6.333],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-155","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.167,6.333],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-156","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,6.333],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-157","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.833,6.333],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-158","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.167,6.333],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-159","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.333,6.167],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-160","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.333,5.833],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-161","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.333,5.5],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-162","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.333,5.167],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-163","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.333,4.833],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-164","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.333,4.5],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-165","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.333,4.167],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-166","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.333,3.833],"width":0.22,"height":0.22,"rounded":true,"fill":"#55bf86ff","thickness":0,"angle":0}}
- {"id":"drawing-167","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.167,0.667],"width":0.08,"height":0.23,"rounded":false,"fill":"#55bf86ff","thickness":0,"angle":51}}
- {"id":"drawing-168","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.167,2.667],"width":0.08,"height":0.23,"rounded":false,"fill":"#55bf86ff","thickness":0,"angle":51}}
- {"id":"drawing-169","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.167,2.667],"width":0.08,"height":0.23,"rounded":false,"fill":"#55bf86ff","thickness":0,"angle":51}}
- {"id":"drawing-170","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.167,0.667],"width":0.08,"height":0.23,"rounded":false,"fill":"#55bf86ff","thickness":0,"angle":51}}
- {"id":"drawing-171","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.167,3.667],"width":0.08,"height":0.23,"rounded":false,"fill":"#55bf86ff","thickness":0,"angle":51}}
- {"id":"drawing-172","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.167,0.667],"width":0.08,"height":0.23,"rounded":false,"fill":"#55bf86ff","thickness":0,"angle":51}}
- {"id":"drawing-173","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,3.5],"width":0.83,"height":0.73,"rounded":true,"fill":"#fccb52ff","stroke":"#f9b721ff","thickness":3.2,"angle":0}}
- {"id":"drawing-174","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,2.5],"width":0.83,"height":0.73,"rounded":true,"fill":"#fccb52ff","stroke":"#f9b721ff","thickness":3.2,"angle":0}}
- {"id":"drawing-175","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,2.5],"width":0.83,"height":0.73,"rounded":true,"fill":"#fccb52ff","stroke":"#f9b721ff","thickness":3.2,"angle":0}}
- {"id":"drawing-176","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,0.5],"width":0.83,"height":0.73,"rounded":true,"fill":"#fccb52ff","stroke":"#f9b721ff","thickness":3.2,"angle":0}}
- {"id":"drawing-177","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,0.5],"width":0.83,"height":0.73,"rounded":true,"fill":"#fccb52ff","stroke":"#f9b721ff","thickness":3.2,"angle":0}}
- {"id":"drawing-178","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,0.5],"width":0.83,"height":0.73,"rounded":true,"fill":"#fccb52ff","stroke":"#f9b721ff","thickness":3.2,"angle":0}}
- {"id":"drawing-179","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.357,2.357],"width":0.1,"height":0.1,"rounded":false,"fill":"#f5b124ff","thickness":0,"angle":45}}
- {"id":"drawing-180","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.357,2.643],"width":0.1,"height":0.1,"rounded":false,"fill":"#f5b124ff","thickness":0,"angle":45}}
- {"id":"drawing-181","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.357,3.357],"width":0.1,"height":0.1,"rounded":false,"fill":"#f5b124ff","thickness":0,"angle":45}}
- {"id":"drawing-182","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.357,3.643],"width":0.1,"height":0.1,"rounded":false,"fill":"#f5b124ff","thickness":0,"angle":45}}
- {"id":"drawing-183","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.357,2.357],"width":0.1,"height":0.1,"rounded":false,"fill":"#f5b124ff","thickness":0,"angle":45}}
- {"id":"drawing-184","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.357,2.643],"width":0.1,"height":0.1,"rounded":false,"fill":"#f5b124ff","thickness":0,"angle":45}}
- {"id":"drawing-185","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.357,0.357],"width":0.1,"height":0.1,"rounded":false,"fill":"#f5b124ff","thickness":0,"angle":45}}
- {"id":"drawing-186","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.357,0.643],"width":0.1,"height":0.1,"rounded":false,"fill":"#f5b124ff","thickness":0,"angle":45}}
- {"id":"drawing-187","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.357,0.357],"width":0.1,"height":0.1,"rounded":false,"fill":"#f5b124ff","thickness":0,"angle":45}}
- {"id":"drawing-188","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.357,0.643],"width":0.1,"height":0.1,"rounded":false,"fill":"#f5b124ff","thickness":0,"angle":45}}
- {"id":"drawing-189","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.643,0.5],"width":0.13,"height":0.13,"rounded":false,"fill":"#f5b124ff","thickness":0,"angle":45}}
- {"id":"drawing-190","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.643,0.357],"width":0.13,"height":0.13,"rounded":false,"fill":"#f5b124ff","thickness":0,"angle":45}}
- {"id":"drawing-191","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.643,0.643],"width":0.13,"height":0.13,"rounded":false,"fill":"#f5b124ff","thickness":0,"angle":45}}
- {"id":"drawing-192","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.643,2.357],"width":0.13,"height":0.13,"rounded":false,"fill":"#f5b124ff","thickness":0,"angle":45}}
- {"id":"drawing-193","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.643,2.5],"width":0.13,"height":0.13,"rounded":false,"fill":"#f5b124ff","thickness":0,"angle":45}}
- {"id":"drawing-194","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.643,2.643],"width":0.13,"height":0.13,"rounded":false,"fill":"#f5b124ff","thickness":0,"angle":45}}
- {"id":"drawing-195","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.643,0.357],"width":0.13,"height":0.13,"rounded":false,"fill":"#f5b124ff","thickness":0,"angle":45}}
- {"id":"drawing-196","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.643,0.5],"width":0.13,"height":0.13,"rounded":false,"fill":"#f5b124ff","thickness":0,"angle":45}}
- {"id":"drawing-197","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.643,0.643],"width":0.13,"height":0.13,"rounded":false,"fill":"#f5b124ff","thickness":0,"angle":45}}
- {"id":"drawing-198","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.643,2.357],"width":0.13,"height":0.13,"rounded":false,"fill":"#f5b124ff","thickness":0,"angle":45}}
- {"id":"drawing-199","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.643,2.5],"width":0.13,"height":0.13,"rounded":false,"fill":"#f5b124ff","thickness":0,"angle":45}}
- {"id":"drawing-200","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.643,2.643],"width":0.13,"height":0.13,"rounded":false,"fill":"#f5b124ff","thickness":0,"angle":45}}
- {"id":"drawing-201","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.643,3.357],"width":0.13,"height":0.13,"rounded":false,"fill":"#f5b124ff","thickness":0,"angle":45}}
- {"id":"drawing-202","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.643,3.5],"width":0.13,"height":0.13,"rounded":false,"fill":"#f5b124ff","thickness":0,"angle":45}}
- {"id":"drawing-203","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.643,3.643],"width":0.13,"height":0.13,"rounded":false,"fill":"#f5b124ff","thickness":0,"angle":45}}
- {"id":"drawing-204","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.357,0.357],"width":0.1,"height":0.1,"rounded":false,"fill":"#f5b124ff","thickness":0,"angle":45}}
- {"id":"drawing-205","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.357,0.643],"width":0.1,"height":0.1,"rounded":false,"fill":"#f5b124ff","thickness":0,"angle":45}}
- {"id":"drawing-206","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.643,0.5],"width":0.13,"height":0.13,"rounded":false,"fill":"#f5b124ff","thickness":0,"angle":45}}
- {"id":"drawing-207","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.643,0.643],"width":0.13,"height":0.13,"rounded":false,"fill":"#f5b124ff","thickness":0,"angle":45}}
- {"id":"drawing-208","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.643,0.357],"width":0.13,"height":0.13,"rounded":false,"fill":"#f5b124ff","thickness":0,"angle":45}}
```

Normal 6 x 6 sudoku rules apply.

The digit on a pumpkin indicates exactly how many instances of that digit can see that pumpkin diagonally from their cell (the pumpkin cell itself is included in the count.)  

No two pumpkins contain the same digit.
