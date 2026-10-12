---
format: open-rules
title: This Hits Different
setter: Marty Sears
source: https://sudokupad.app/xvrdqbvla1
case: https://sudoku-sleuth.com/cases/this-hits-different
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
board:
  rows: 11
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
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[2.5,5.5],[1.5,5.5],[1.5,1.5],[0.5,0.5],[1.5,1.5]],"color":"#FFFFFF","thickness":12.8,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[0.5,3.5],[0.5,5.5]],"color":"#FFFFFF","thickness":12.8,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[1.5,6.5],[1.5,7.5],[0.5,8.5],[0.5,6.5]],"color":"#FFFFFF","thickness":12.8,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[2.5,6.5],[2.5,7.5],[3.5,8.5],[5.5,8.5],[5.5,7.5]],"color":"#FFFFFF","thickness":12.8,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[3.5,6.5],[5.5,6.5]],"color":"#FFFFFF","thickness":12.8,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[3.5,5.5],[5.5,5.5]],"color":"#FFFFFF","thickness":12.8,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[3.5,4.5],[5.5,4.5]],"color":"#FFFFFF","thickness":12.8,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[3.5,3.5],[5.5,3.5]],"color":"#FFFFFF","thickness":12.8,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[3.5,2.5],[5.5,2.5]],"color":"#FFFFFF","thickness":12.8,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[4.5,0.5],[5.5,0.5],[5.5,1.5]],"color":"#FFFFFF","thickness":12.8,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[6.5,6.5],[7.5,5.5],[8.5,6.5],[6.5,8.5]],"color":"#FFFFFF","thickness":12.8,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[7.5,3.5],[8.5,3.5],[8.5,4.5],[7.5,4.5]],"color":"#FFFFFF","thickness":12.8,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[2.5,4.5],[2.5,0.5],[3.5,0.5],[3.5,1.5]],"color":"#FFFFFF","thickness":12.8,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[8.5,0.5],[7.5,1.5],[7.5,2.5],[6.5,1.5],[6.5,5.5]],"color":"#FFFFFF","thickness":12.8,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[0.5,0.5],[1.5,1.5],[1.5,5.5],[2.5,5.5]],"color":"#e5c895ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[0.5,3.5],[0.5,5.5]],"color":"#e5c895ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[1.5,6.5],[1.5,7.5],[0.5,8.5],[0.5,6.5]],"color":"#e5c895ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[2.5,6.5],[2.5,7.5],[3.5,8.5],[5.5,8.5],[5.5,7.5]],"color":"#e5c895ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[3.5,6.5],[5.5,6.5]],"color":"#e5c895ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[3.5,5.5],[5.5,5.5]],"color":"#e5c895ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[3.5,4.5],[5.5,4.5]],"color":"#e5c895ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[3.5,3.5],[5.5,3.5]],"color":"#e5c895ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[3.5,2.5],[5.5,2.5]],"color":"#e5c895ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[4.5,0.5],[5.5,0.5],[5.5,1.5]],"color":"#e5c895ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[6.5,6.5],[7.5,5.5],[8.5,6.5],[6.5,8.5]],"color":"#e5c895ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[7.5,3.5],[8.5,3.5],[8.5,4.5],[7.5,4.5]],"color":"#e5c895ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[2.5,4.5],[2.5,0.5],[3.5,0.5],[3.5,1.5]],"color":"#e5c895ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"line","points":[[6.5,5.5],[6.5,1.5],[7.5,2.5],[7.5,1.5],[8.5,0.5]],"color":"#e5c895ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"line","points":[[11,-0.167],[-0.167,-0.167],[-0.167,9.167],[11,9.167]],"color":"#7adbfeff","thickness":17.28,"rounded":true}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"line","points":[[11.1,8.9],[11.1,9.3],[-0.3,9.3],[-0.3,-0.3],[11.1,-0.3],[11.1,8.9]],"color":"#7adbfe7a","thickness":11.52,"rounded":true}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"line","points":[[11.1,8.9],[11.1,9.3],[-0.3,9.3],[-0.3,-0.3],[11.1,-0.3],[11.1,8.9]],"color":"#7adbfe49","thickness":23.04,"rounded":true}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"line","points":[[3.7,6.4],[3.7,6.3],[3.3,6.3],[3.3,6.7],[3.7,6.7],[3.7,6.6]],"color":"#FFFFFF","thickness":2.56,"rounded":true}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"line","points":[[5.3,5.4],[5.3,5.3],[5.7,5.3],[5.7,5.7],[5.3,5.7],[5.3,5.6]],"color":"#FFFFFF","thickness":2.56,"rounded":true}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"line","points":[[5.3,4.4],[5.3,4.3],[5.7,4.3],[5.7,4.7],[5.3,4.7],[5.3,4.6]],"color":"#FFFFFF","thickness":2.56,"rounded":true}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"line","points":[[7.7,4.4],[7.7,4.3],[7.3,4.3],[7.3,4.7],[7.7,4.7],[7.7,4.6]],"color":"#FFFFFF","thickness":2.56,"rounded":true}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"line","points":[[5.4,1.3],[5.3,1.3],[5.3,1.7],[5.7,1.7],[5.7,1.3],[5.6,1.3]],"color":"#FFFFFF","thickness":2.56,"rounded":true}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"line","points":[[2.6,4.3],[2.7,4.3],[2.7,4.7],[2.3,4.7],[2.3,4.3],[2.4,4.3]],"color":"#FFFFFF","thickness":2.56,"rounded":true}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"line","points":[[2.3,5.4],[2.3,5.3],[2.7,5.3],[2.7,5.7],[2.3,5.7],[2.3,5.6]],"color":"#FFFFFF","thickness":2.56,"rounded":true}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"line","points":[[0.6,3.7],[0.7,3.7],[0.7,3.3],[0.3,3.3],[0.3,3.7],[0.4,3.7]],"color":"#FFFFFF","thickness":2.56,"rounded":true}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"line","points":[[1.6,6.7],[1.7,6.7],[1.7,6.3],[1.3,6.3],[1.3,6.7],[1.4,6.7]],"color":"#FFFFFF","thickness":2.56,"rounded":true}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"line","points":[[2.6,6.7],[2.7,6.7],[2.7,6.3],[2.3,6.3],[2.3,6.7],[2.4,6.7]],"color":"#FFFFFF","thickness":2.56,"rounded":true}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"line","points":[[6.6,6.3],[6.3,6.3],[6.3,6.7],[6.7,6.7],[6.7,6.4]],"color":"#FFFFFF","thickness":2.56,"rounded":true}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"line","points":[[5.3,3.4],[5.3,3.3],[5.7,3.3],[5.7,3.7],[5.3,3.7],[5.3,3.6]],"color":"#FFFFFF","thickness":2.56,"rounded":true}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"line","points":[[5.3,2.6],[5.3,2.7],[5.7,2.7],[5.7,2.3],[5.3,2.3],[5.3,2.4]],"color":"#FFFFFF","thickness":2.56,"rounded":true}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"line","points":[[8.3,0.6],[8.3,0.3],[8.7,0.3],[8.7,0.7],[8.4,0.7]],"color":"#FFFFFF","thickness":2.56,"rounded":true}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"line","points":[[6.5,6.5],[7,6]],"color":"#e5c895ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"line","points":[[8,1],[8.5,0.5]],"color":"#e5c895ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"line","points":[[9,0],[11,0],[11,1],[10,1],[10,0]],"color":"#FFFFFF","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"line","points":[[11,1],[11,9],[10,9],[10,8],[11,8]],"color":"#FFFFFF","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"line","points":[[11,2],[10,2],[10,1],[9,1]],"color":"#FFFFFF","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"line","points":[[11,3],[10,3],[10,2],[9,2]],"color":"#FFFFFF","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"line","points":[[11,4],[10,4],[10,3],[9,3]],"color":"#FFFFFF","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"line","points":[[11,5],[10,5],[10,4],[9,4]],"color":"#FFFFFF","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"line","points":[[11,6],[10,6],[10,5],[9,5]],"color":"#FFFFFF","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"line","points":[[11,7],[10,7],[10,6],[9,6]],"color":"#FFFFFF","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"line","points":[[10,9],[9,9]],"color":"#FFFFFF","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"line","points":[[9,7],[10,7],[10,8],[9,8]],"color":"#FFFFFF","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"line","points":[[7,6],[9,6],[9,9],[6,9],[6,6],[7,6]],"color":"#000000","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-60","rules":[],"visual":{"kind":"line","points":[[9,6],[9,3],[6,3],[6,6],[3,6],[3,9],[6,9]],"color":"#000000","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-61","rules":[],"visual":{"kind":"line","points":[[9,3],[9,0],[6,0],[6,3],[3,3],[3,6],[0,6],[0,9],[3,9]],"color":"#000000","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-62","rules":[],"visual":{"kind":"line","points":[[6,0],[3,0],[3,3],[0,3],[0,6]],"color":"#000000","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-63","rules":[],"visual":{"kind":"line","points":[[3,0],[0,0],[0,3]],"color":"#000000","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-64","rules":[],"visual":{"kind":"line","points":[[9.083,9.083],[9.083,-0.083]],"color":"#7adbfeff","thickness":5.76,"rounded":true,"layer":"over"}}
- {"id":"drawing-65","rules":[],"visual":{"kind":"line","points":[[11,9.167],[11,-0.167]],"color":"#7adbfeff","thickness":17.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-66","rules":[],"visual":{"kind":"shape","layer":"over","center":[10,4.5],"width":9.08,"height":1.73,"rounded":false,"stroke":"#5d9bfcff","thickness":5.12,"angle":0}}
- {"id":"drawing-67","rules":[],"visual":{"kind":"shape","layer":"over","center":[10.375,8],"width":0,"height":0.816,"rounded":true,"thickness":0,"angle":0,"text":"NOTES","textColor":"#dfdfdfff","fontSize":31}}
- {"id":"drawing-68","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,6.5],"width":0.4,"height":0.4,"rounded":false,"fill":"#e5c895ff","thickness":0,"angle":0}}
- {"id":"drawing-69","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,5.5],"width":0.4,"height":0.4,"rounded":false,"fill":"#e5c895ff","thickness":0,"angle":0}}
- {"id":"drawing-70","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,4.5],"width":0.4,"height":0.4,"rounded":false,"fill":"#e5c895ff","thickness":0,"angle":0}}
- {"id":"drawing-71","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,3.5],"width":0.4,"height":0.4,"rounded":false,"fill":"#e5c895ff","thickness":0,"angle":0}}
- {"id":"drawing-72","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,1.5],"width":0.4,"height":0.4,"rounded":false,"fill":"#e5c895ff","thickness":0,"angle":0}}
- {"id":"drawing-73","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,4.5],"width":0.4,"height":0.4,"rounded":false,"fill":"#e5c895ff","thickness":0,"angle":0}}
- {"id":"drawing-74","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,6.5],"width":0.4,"height":0.4,"rounded":false,"fill":"#e5c895ff","thickness":0,"angle":0}}
- {"id":"drawing-75","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,6.5],"width":0.4,"height":0.4,"rounded":false,"fill":"#e5c895ff","thickness":0,"angle":0}}
- {"id":"drawing-76","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,5.5],"width":0.4,"height":0.4,"rounded":false,"fill":"#e5c895ff","thickness":0,"angle":0}}
- {"id":"drawing-77","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,3.5],"width":0.4,"height":0.4,"rounded":false,"fill":"#e5c895ff","thickness":0,"angle":0}}
- {"id":"drawing-78","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,6.5],"width":0.4,"height":0.4,"rounded":false,"fill":"#e5c895ff","thickness":0,"angle":0}}
- {"id":"drawing-79","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,4.5],"width":0.4,"height":0.4,"rounded":false,"fill":"#e5c895ff","thickness":0,"angle":0}}
- {"id":"drawing-80","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,2.5],"width":0.4,"height":0.4,"rounded":false,"fill":"#e5c895ff","thickness":0,"angle":0}}
- {"id":"drawing-81","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,0.5],"width":0.4,"height":0.4,"rounded":false,"fill":"#e5c895ff","thickness":0,"angle":0}}
```

Normal sudoku rules apply.

Digits do not repeat on a beige hitline. The 'hit total' of a hitline is the sum of any digits that match their position along the line, starting from the square (which is position 1.) Eg: A line reading 8214 would have a hit total of 6, the sum of 2 and 4 (2 is in the 2nd position and 4 is in the 4th position.)

In this puzzle, no two hitlines have the same hit total.
