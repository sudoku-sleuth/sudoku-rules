---
format: open-rules
title: "Equality Cages 137: Double irregularity"
setter: gUBBLOR and Jasura
source: https://sudokupad.app/182alkxiqw
case: https://sudoku-sleuth.com/cases/equality-cages-137-double-irregularity
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
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
  regions:
    - - r1c1
      - r2c1
      - r2c2
      - r3c1
      - r4c1
      - r5c1
      - r6c1
      - r7c1
      - r8c1
    - - r1c2
      - r1c3
      - r1c4
      - r1c5
      - r1c6
      - r1c7
      - r2c3
      - r2c4
      - r2c6
    - - r1c8
      - r2c7
      - r2c8
      - r3c6
      - r3c7
      - r3c8
      - r4c7
      - r4c8
      - r5c7
    - - r1c9
      - r2c9
      - r3c9
      - r4c9
      - r5c8
      - r5c9
      - r6c7
      - r6c8
      - r6c9
    - - r2c5
      - r3c2
      - r3c3
      - r3c4
      - r3c5
      - r4c2
      - r4c3
      - r5c2
      - r5c3
    - - r4c4
      - r4c5
      - r4c6
      - r5c4
      - r5c5
      - r5c6
      - r6c4
      - r6c5
      - r6c6
    - - r6c2
      - r6c3
      - r7c2
      - r8c2
      - r8c3
      - r8c4
      - r8c5
      - r8c6
      - r8c7
    - - r7c3
      - r7c4
      - r7c5
      - r7c6
      - r7c7
      - r7c8
      - r7c9
      - r8c9
      - r9c9
    - - r8c8
      - r9c1
      - r9c2
      - r9c3
      - r9c4
      - r9c5
      - r9c6
      - r9c7
      - r9c8
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
unique-19: unique r1c1-r2c1-r2c2-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1
unique-20: unique r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r2c3-r2c4-r2c6
unique-21: unique r1c8-r2c7-r2c8-r3c6-r3c7-r3c8-r4c7-r4c8-r5c7
unique-22: unique r1c9-r2c9-r3c9-r4c9-r5c8-r5c9-r6c7-r6c8-r6c9
unique-23: unique r2c5-r3c2-r3c3-r3c4-r3c5-r4c2-r4c3-r5c2-r5c3
unique-24: unique r4c4-r4c5-r4c6-r5c4-r5c5-r5c6-r6c4-r6c5-r6c6
unique-25: unique r6c2-r6c3-r7c2-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7
unique-26: unique r7c3-r7c4-r7c5-r7c6-r7c7-r7c8-r7c9-r8c9-r9c9
unique-27: unique r8c8-r9c1-r9c2-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8
equality-cage-1: equality-cage r8c8-r9c8
equality-cage-2: equality-cage r1c8-r1c9
equality-cage-3: equality-cage r2c8-r3c8
equality-cage-4: equality-cage r6c7-r6c8
equality-cage-5: equality-cage r1c3-r1c4-r2c3-r2c4
equality-cage-6: equality-cage r2c1-r2c2
equality-cage-7: equality-cage r9c1-r9c2
equality-cage-8: equality-cage r4c1-r5c1
equality-cage-9: equality-cage r3c4-r3c5-r3c6-r4c4
equality-cage-10: equality-cage r6c4-r6c5
equality-cage-11: equality-cage r5c8-r5c9
kropki-1: kropki r8c8-r9c8 colour "black"
kropki-2: kropki r1c6-r1c7 colour "black"
kropki-3: kropki r1c1-r1c2 colour "white"
kropki-4: kropki r5c6-r6c6 colour "white"
pair-1: pair r3c2-r4c2 relation {"op":"sum","value":10}
pair-2: pair r7c5-r7c6 relation {"op":"sum","value":10}
pair-3: pair r7c1-r7c2 relation {"op":"sum","value":5}
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#ff1c1c33","thickness":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#ff1c1c33","thickness":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#ff1c1c33","thickness":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#ff1c1c33","thickness":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#ff1c1c33","thickness":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#ff1c1c33","thickness":0}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#ff1c1c33","thickness":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#ff1c1c33","thickness":0}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#ff1c1c33","thickness":0}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#0f8af433","thickness":0}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#0f8af433","thickness":0}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#0f8af433","thickness":0}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#0f8af433","thickness":0}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#0f8af433","thickness":0}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#0f8af433","thickness":0}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#0f8af433","thickness":0}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#0f8af433","thickness":0}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#0f8af433","thickness":0}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#27ff1c2f","thickness":0}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#27ff1c2f","thickness":0}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#27ff1c2f","thickness":0}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#27ff1c2f","thickness":0}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#27ff1c2f","thickness":0}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#27ff1c2f","thickness":0}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#27ff1c2f","thickness":0}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#27ff1c2f","thickness":0}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#27ff1c2f","thickness":0}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#f3e20033","thickness":0}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#f3e20033","thickness":0}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#f3e20033","thickness":0}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#f3e20033","thickness":0}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#f3e20033","thickness":0}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#f3e20033","thickness":0}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#f3e20033","thickness":0}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#f3e20033","thickness":0}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#f3e20033","thickness":0}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#7800bb2d","thickness":0}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#7800bb2d","thickness":0}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#7800bb2d","thickness":0}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#7800bb2d","thickness":0}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#7800bb2d","thickness":0}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#7800bb2d","thickness":0}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#7800bb2d","thickness":0}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#7800bb2d","thickness":0}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#7800bb2d","thickness":0}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#ff44d433","thickness":0}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#ff44d433","thickness":0}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#ff44d433","thickness":0}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#ff44d433","thickness":0}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#ff44d433","thickness":0}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#ff44d433","thickness":0}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#ff44d433","thickness":0}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#ff44d433","thickness":0}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#ff44d433","thickness":0}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#08ffd333","thickness":0}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#08ffd333","thickness":0}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#08ffd333","thickness":0}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#08ffd333","thickness":0}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#08ffd333","thickness":0}}
- {"id":"drawing-60","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#08ffd333","thickness":0}}
- {"id":"drawing-61","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#08ffd333","thickness":0}}
- {"id":"drawing-62","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#08ffd333","thickness":0}}
- {"id":"drawing-63","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#08ffd333","thickness":0}}
- {"id":"drawing-64","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#eb980033","thickness":0}}
- {"id":"drawing-65","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#eb980033","thickness":0}}
- {"id":"drawing-66","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#eb980033","thickness":0}}
- {"id":"drawing-67","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#eb980033","thickness":0}}
- {"id":"drawing-68","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#eb980033","thickness":0}}
- {"id":"drawing-69","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#eb980033","thickness":0}}
- {"id":"drawing-70","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#eb980033","thickness":0}}
- {"id":"drawing-71","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#eb980033","thickness":0}}
- {"id":"drawing-72","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#eb980033","thickness":0}}
- {"id":"drawing-73","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#00000021","thickness":0}}
- {"id":"drawing-74","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#00000021","thickness":0}}
- {"id":"drawing-75","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#00000021","thickness":0}}
- {"id":"drawing-76","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#00000021","thickness":0}}
- {"id":"drawing-77","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#00000021","thickness":0}}
- {"id":"drawing-78","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#00000021","thickness":0}}
- {"id":"drawing-79","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#00000021","thickness":0}}
- {"id":"drawing-80","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#00000021","thickness":0}}
- {"id":"drawing-81","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#00000021","thickness":0}}
- {"id":"drawing-82","rules":[],"visual":{"kind":"line","points":[[0,2],[0,7],[1,7],[1,6],[2,6],[2,5],[3,5],[3,6],[5,6],[5,7],[4,7],[4,8],[0,8],[0,7]],"color":"#000000","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-83","rules":[],"visual":{"kind":"line","points":[[0,2],[0,1],[1,1],[1,2],[2,2],[2,4],[1,4],[1,5],[2,5]],"color":"#000000","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-84","rules":[],"visual":{"kind":"line","points":[[0,8],[0,9],[9,9],[9,8],[7,8],[7,7],[8,7],[8,0],[9,0],[9,8]],"color":"#000000","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-85","rules":[],"visual":{"kind":"line","points":[[3,5],[3,3],[6,3],[6,6],[5,6]],"color":"#000000","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-86","rules":[],"visual":{"kind":"line","points":[[6,6],[6,9]],"color":"#000000","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-87","rules":[],"visual":{"kind":"line","points":[[7,7],[7,2],[6,2],[6,3]],"color":"#000000","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-88","rules":[],"visual":{"kind":"line","points":[[8,1],[5,1],[5,3]],"color":"#000000","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-89","rules":[],"visual":{"kind":"line","points":[[8,0],[0,0],[0,1]],"color":"#000000","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-90","rules":[],"visual":{"kind":"line","points":[[2,2],[2,1],[5,1]],"color":"#000000","thickness":3.84,"rounded":true,"layer":"over"}}
```

Double irregular sudoku: Place the digits 1 to 9 once each in every row, column and colored/outlined region.

Equality cages: Cages must have an equal number of low (1,2,3,4) and high (6,7,8,9) digits AND an equal number of even (2,4,6,8) and odd (1,3,7,9) digits. Equality cages can never contain 5. Digits may not repeat in a cage.

Kropki dots: A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are shown.

XV: Adjacent cells connected with an X must sum to 10. Adjacent cells connected with a V must sum to 5. Not all X's or V's are shown.
