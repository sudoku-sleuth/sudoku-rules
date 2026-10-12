---
format: open-rules
title: The Magic Column
setter: Marty Sears
source: https://sudokupad.app/njv2olnw9m
case: https://sudoku-sleuth.com/cases/the-magic-column
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Our reading of the board gives a house more cells than available digits; we need to check its layout.
board:
  rows: 10
  cols: 10
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
  givens: r1c4=3 r1c7=6 r2c1=3 r2c3=8 r4c7=5 r8c8=9
---

```rules
unique-1: unique r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9-r1c10
unique-2: unique r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8-r3c9-r3c10
unique-3: unique r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8-r6c9-r6c10
unique-4: unique r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r8c9-r8c10
unique-5: unique r9c1-r9c2-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8-r9c9-r9c10
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#d8f2ffff","thickness":0,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#d8f2ffff","thickness":0,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#d8f2ffff","thickness":0,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#d8f2ffff","thickness":0,"angle":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#d8f2ffff","thickness":0,"angle":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,9.5],"width":1,"height":1,"rounded":false,"fill":"#d8f2ffff","thickness":0,"angle":0}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#d8f2ffff","thickness":0,"angle":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#d8f2ffff","thickness":0,"angle":0}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#d8f2ffff","thickness":0,"angle":0}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#d8f2ffff","thickness":0,"angle":0}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#d8f2ffff","thickness":0,"angle":0}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#d8f2ffff","thickness":0,"angle":0}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#d8f2ffff","thickness":0,"angle":0}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#d8f2ffff","thickness":0,"angle":0}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#d8f2ffff","thickness":0,"angle":0}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#d8f2ffff","thickness":0,"angle":0}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#d8f2ffff","thickness":0,"angle":0}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"under","center":[9.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#d8f2ffff","thickness":0,"angle":0}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#d8f2ffff","thickness":0,"angle":0}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#d8f2ffff","thickness":0,"angle":0}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#d8f2ffff","thickness":0,"angle":0}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#d8f2ffff","thickness":0,"angle":0}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#d8f2ffff","thickness":0,"angle":0}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#d8f2ffff","thickness":0,"angle":0}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#d8f2ffff","thickness":0,"angle":0}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"under","center":[9.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#d8f2ffff","thickness":0,"angle":0}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#d8f2ffff","thickness":0,"angle":0}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#d8f2ffff","thickness":0,"angle":0}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#d8f2ffff","thickness":0,"angle":0}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#d8f2ffff","thickness":0,"angle":0}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#d8f2ffff","thickness":0,"angle":0}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#d8f2ffff","thickness":0,"angle":0}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#d8f2ffff","thickness":0,"angle":0}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"under","center":[9.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#d8f2ffff","thickness":0,"angle":0}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#d8f2ffff","thickness":0,"angle":0}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#d8f2ffff","thickness":0,"angle":0}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#d8f2ffff","thickness":0,"angle":0}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#d8f2ffff","thickness":0,"angle":0}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#d8f2ffff","thickness":0,"angle":0}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#d8f2ffff","thickness":0,"angle":0}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#d8f2ffff","thickness":0,"angle":0}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"shape","layer":"under","center":[9.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#d8f2ffff","thickness":0,"angle":0}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#d8f2ffff","thickness":0,"angle":0}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#d8f2ffff","thickness":0,"angle":0}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#d8f2ffff","thickness":0,"angle":0}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#d8f2ffff","thickness":0,"angle":0}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,9.5],"width":1,"height":1,"rounded":false,"fill":"#d8f2ffff","thickness":0,"angle":0}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,9.5],"width":1,"height":1,"rounded":false,"fill":"#d8f2ffff","thickness":0,"angle":0}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,9.5],"width":1,"height":1,"rounded":false,"fill":"#d8f2ffff","thickness":0,"angle":0}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"shape","layer":"under","center":[9.5,9.5],"width":1,"height":1,"rounded":false,"fill":"#d8f2ffff","thickness":0,"angle":0}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"line","points":[[10.25,9.25],[10.25,10.25],[-0.25,10.25],[-0.25,-0.25],[10.25,-0.25],[10.25,9.25]],"color":"#b7b8e3ff","thickness":30.72,"rounded":true}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"line","points":[[2.5,0.5],[2.5,7.5]],"color":"#28d4fcff","thickness":14.08,"rounded":true}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"line","points":[[3.5,9.5],[0.5,9.5]],"color":"#28d4fcff","thickness":14.08,"rounded":true}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"line","points":[[0.5,4.5],[0.5,5.5]],"color":"#28d4fcff","thickness":14.08,"rounded":true}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"line","points":[[4.5,0.5],[4.5,1.5],[5.5,2.5]],"color":"#28d4fcff","thickness":14.08,"rounded":true}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"line","points":[[4.5,2.5],[4.5,3.5]],"color":"#28d4fcff","thickness":14.08,"rounded":true}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"line","points":[[5.5,4.5],[4.5,5.5],[5.5,6.5]],"color":"#28d4fcff","thickness":14.08,"rounded":true}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"line","points":[[4.5,7.5],[4.5,8.5]],"color":"#28d4fcff","thickness":14.08,"rounded":true}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"line","points":[[5.5,8.5],[4.5,9.5]],"color":"#28d4fcff","thickness":14.08,"rounded":true}}
- {"id":"drawing-60","rules":[],"visual":{"kind":"line","points":[[8.5,7.5],[9.5,7.5]],"color":"#28d4fcff","thickness":14.08,"rounded":true}}
- {"id":"drawing-61","rules":[],"visual":{"kind":"line","points":[[7.5,0.5],[8.5,0.5]],"color":"#28d4fcff","thickness":14.08,"rounded":true}}
- {"id":"drawing-62","rules":[],"visual":{"kind":"line","points":[[9.5,1.5],[9.5,4.5]],"color":"#28d4fcff","thickness":14.08,"rounded":true}}
- {"id":"drawing-63","rules":[],"visual":{"kind":"line","points":[[0.5,7.5],[1.5,7.5]],"color":"#28d4fcff","thickness":14.08,"rounded":true}}
```

Each column contains the digits 1-9 once (with no repeats), plus one empty cell (which can be shaded green when found).

Additionally, no digit may be repeated along any diagonal. However, digits may be repeated within a row.

One of the columns is magic! Each digit in the magic column tells you how many times that digit appears in its row. Eg: the 3 in the magic column has exactly three 3s in its row (including itself.)

Digits along a blue line always add up to 10. Blue lines never pass through any empty cells.
