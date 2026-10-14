---
format: open-rules
title: Above Thy Neighbour
setter: Marty Sears
source: https://tinyurl.com/yc85khwu
case: https://sudoku-sleuth.com/cases/above-thy-neighbour
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
board:
  rows: 9
  cols: 9
  symbols:
    - 0
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
exported: 3077f26699416e4d2140b7c097355e62
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
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,2],"width":4,"height":1,"rounded":false,"fill":"#23C5FF","stroke":"#C0E0FF","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,2],"width":4,"height":1,"rounded":false,"fill":"#23C5FF","stroke":"#C0E0FF","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,5],"width":2,"height":1,"rounded":false,"fill":"#FFDE00","stroke":"#C0E0FF","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,5],"width":2,"height":1,"rounded":false,"fill":"#FFDE00","stroke":"#C0E0FF","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,7.5],"width":3,"height":1,"rounded":false,"fill":"#23C5FF","stroke":"#C0E0FF","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,7.5],"width":3,"height":1,"rounded":false,"fill":"#23C5FF","stroke":"#C0E0FF","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#23C5FF","stroke":"#C0E0FF","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#23C5FF","stroke":"#C0E0FF","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,2],"width":2,"height":1,"rounded":false,"fill":"#FFDE00","stroke":"#C0E0FF","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,2],"width":2,"height":1,"rounded":false,"fill":"#FFDE00","stroke":"#C0E0FF","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#23C5FF","stroke":"#C0E0FF","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#23C5FF","stroke":"#C0E0FF","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,6.5],"width":5,"height":1,"rounded":false,"fill":"#FFDE00","stroke":"#C0E0FF","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,6.5],"width":5,"height":1,"rounded":false,"fill":"#FFDE00","stroke":"#C0E0FF","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#FFDE00","stroke":"#C0E0FF","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#FFDE00","stroke":"#C0E0FF","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,4],"width":6,"height":1,"rounded":false,"fill":"#23C5FF","stroke":"#C0E0FF","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,4],"width":6,"height":1,"rounded":false,"fill":"#23C5FF","stroke":"#C0E0FF","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,8],"width":2,"height":1,"rounded":false,"fill":"#FFDE00","stroke":"#C0E0FF","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,8],"width":2,"height":1,"rounded":false,"fill":"#FFDE00","stroke":"#C0E0FF","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,1],"width":2,"height":1,"rounded":false,"fill":"#FFDE00","stroke":"#C0E0FF","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,1],"width":2,"height":1,"rounded":false,"fill":"#FFDE00","stroke":"#C0E0FF","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,4],"width":4,"height":1,"rounded":false,"fill":"#23C5FF","stroke":"#C0E0FF","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,4],"width":4,"height":1,"rounded":false,"fill":"#23C5FF","stroke":"#C0E0FF","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"under","center":[4,7.5],"width":3,"height":2,"rounded":false,"fill":"#FFDE00","stroke":"#C0E0FF","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"under","center":[4,7.5],"width":3,"height":2,"rounded":false,"fill":"#FFDE00","stroke":"#C0E0FF","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#23C5FF","stroke":"#C0E0FF","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#23C5FF","stroke":"#C0E0FF","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#FFDE00","stroke":"#C0E0FF","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#FFDE00","stroke":"#C0E0FF","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#23C5FF","stroke":"#C0E0FF","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#23C5FF","stroke":"#C0E0FF","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"under","center":[5,4],"width":2,"height":2,"rounded":false,"fill":"#FFDE00","stroke":"#C0E0FF","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"under","center":[5,4],"width":2,"height":2,"rounded":false,"fill":"#FFDE00","stroke":"#C0E0FF","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#23C5FF","stroke":"#C0E0FF","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#23C5FF","stroke":"#C0E0FF","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,1.5],"width":3,"height":1,"rounded":false,"fill":"#23C5FF","stroke":"#C0E0FF","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,1.5],"width":3,"height":1,"rounded":false,"fill":"#23C5FF","stroke":"#C0E0FF","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,6],"width":2,"height":1,"rounded":false,"fill":"#23C5FF","stroke":"#C0E0FF","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,6],"width":2,"height":1,"rounded":false,"fill":"#23C5FF","stroke":"#C0E0FF","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"shape","layer":"under","center":[6,8],"width":2,"height":2,"rounded":false,"fill":"#FFDE00","stroke":"#C0E0FF","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"shape","layer":"under","center":[6,8],"width":2,"height":2,"rounded":false,"fill":"#FFDE00","stroke":"#C0E0FF","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"shape","layer":"under","center":[7,0.5],"width":1,"height":2,"rounded":false,"fill":"#23C5FF","stroke":"#C0E0FF","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"shape","layer":"under","center":[7,0.5],"width":1,"height":2,"rounded":false,"fill":"#23C5FF","stroke":"#C0E0FF","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"shape","layer":"under","center":[7,1.5],"width":1,"height":2,"rounded":false,"fill":"#FFDE00","stroke":"#C0E0FF","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"shape","layer":"under","center":[7,1.5],"width":1,"height":2,"rounded":false,"fill":"#FFDE00","stroke":"#C0E0FF","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,4.5],"width":5,"height":1,"rounded":false,"fill":"#23C5FF","stroke":"#C0E0FF","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,4.5],"width":5,"height":1,"rounded":false,"fill":"#23C5FF","stroke":"#C0E0FF","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#23C5FF","stroke":"#C0E0FF","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#23C5FF","stroke":"#C0E0FF","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,5.5],"width":5,"height":1,"rounded":false,"fill":"#FFDE00","stroke":"#C0E0FF","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,5.5],"width":5,"height":1,"rounded":false,"fill":"#FFDE00","stroke":"#C0E0FF","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#23C5FF","stroke":"#C0E0FF","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#23C5FF","stroke":"#C0E0FF","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,1],"width":2,"height":1,"rounded":false,"fill":"#23C5FF","stroke":"#C0E0FF","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,1],"width":2,"height":1,"rounded":false,"fill":"#23C5FF","stroke":"#C0E0FF","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,4.5],"width":5,"height":1,"rounded":false,"fill":"#FFDE00","stroke":"#C0E0FF","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,4.5],"width":5,"height":1,"rounded":false,"fill":"#FFDE00","stroke":"#C0E0FF","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-60","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,8],"width":2,"height":1,"rounded":false,"fill":"#23C5FF","stroke":"#C0E0FF","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-61","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,8],"width":2,"height":1,"rounded":false,"fill":"#23C5FF","stroke":"#C0E0FF","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-62","rules":[],"visual":{"kind":"line","points":[[1.3000000000000003,4.7],[0.7000000000000001,5.300000000000001]],"color":"#FFFFFF","thickness":3.4,"rounded":true}}
- {"id":"drawing-63","rules":[],"visual":{"kind":"line","points":[[2.3,2.5],[1.7000000000000002,2.5]],"color":"#FFFFFF","thickness":3.4,"rounded":true}}
- {"id":"drawing-64","rules":[],"visual":{"kind":"line","points":[[2.3,4.3],[1.7000000000000002,3.7]],"color":"#FFFFFF","thickness":3.4,"rounded":true}}
- {"id":"drawing-65","rules":[],"visual":{"kind":"line","points":[[4.3,3.5000000000000004],[3.7,3.5000000000000004]],"color":"#FFFFFF","thickness":3.4,"rounded":true}}
- {"id":"drawing-66","rules":[],"visual":{"kind":"line","points":[[5.5,2.3],[5.5,1.7000000000000002]],"color":"#FFFFFF","thickness":3.4,"rounded":true}}
- {"id":"drawing-67","rules":[],"visual":{"kind":"line","points":[[7.3,1.3000000000000003],[6.7,0.7000000000000001]],"color":"#FFFFFF","thickness":3.4,"rounded":true}}
- {"id":"drawing-68","rules":[],"visual":{"kind":"line","points":[[8.5,1.3000000000000003],[8.5,0.7000000000000001]],"color":"#FFFFFF","thickness":3.4,"rounded":true}}
- {"id":"drawing-69","rules":[],"visual":{"kind":"line","points":[[8.5,3.3000000000000003],[8.5,2.7]],"color":"#FFFFFF","thickness":3.4,"rounded":true}}
- {"id":"drawing-71","rules":[],"visual":{"kind":"line","points":[[0,3],[9,3]],"color":"#000000","thickness":4.3,"rounded":true,"layer":"over"}}
- {"id":"drawing-72","rules":[],"visual":{"kind":"line","points":[[0,6],[9,6]],"color":"#000000","thickness":4.3,"rounded":true,"layer":"over"}}
- {"id":"drawing-73","rules":[],"visual":{"kind":"line","points":[[3,0],[3,9]],"color":"#000000","thickness":4.3,"rounded":true,"layer":"over"}}
- {"id":"drawing-74","rules":[],"visual":{"kind":"line","points":[[6,0],[6,9]],"color":"#000000","thickness":4.3,"rounded":true,"layer":"over"}}
```

• Each row, column and box must contain the digits 0-8 once each.
• The digit in a yellow cell indicates exactly how many neighbours it has (orthogonally or diagonally) with a lower value than itself. Blue cells never have this property. Eg: a yellow 6 would have exactly 6 neighbours lower than 6, but a blue 6 wouldn’t. All cells are correctly coloured.
• White lines connect two digits that sum to 8. Not all possible white lines are given.
