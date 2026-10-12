---
format: open-rules
title: "Robot Lines: level 1"
setter: Marty Sears
source: https://sudokupad.app/k1jrgwahev
case: https://sudoku-sleuth.com/cases/robot-lines-level-1
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
board:
  rows: 4
  cols: 4
  symbols:
    - 1
    - 2
    - 3
    - 4
  regions:
    - - r1c1
      - r1c2
      - r2c1
      - r2c2
    - - r1c3
      - r1c4
      - r2c3
      - r2c4
    - - r3c1
      - r3c2
      - r4c1
      - r4c2
    - - r3c3
      - r3c4
      - r4c3
      - r4c4
---

```rules
unique-1: unique r1c1-r1c2-r1c3-r1c4
unique-2: unique r2c1-r2c2-r2c3-r2c4
unique-3: unique r3c1-r3c2-r3c3-r3c4
unique-4: unique r4c1-r4c2-r4c3-r4c4
unique-5: unique r1c1-r2c1-r3c1-r4c1
unique-6: unique r1c2-r2c2-r3c2-r4c2
unique-7: unique r1c3-r2c3-r3c3-r4c3
unique-8: unique r1c4-r2c4-r3c4-r4c4
unique-9: unique r1c1-r1c2-r2c1-r2c2
unique-10: unique r1c3-r1c4-r2c3-r2c4
unique-11: unique r3c1-r3c2-r4c1-r4c2
unique-12: unique r3c3-r3c4-r4c3-r4c4
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[2,-0.167],"width":0.26,"height":2.96,"rounded":false,"fill":"#ffe945ff","thickness":0,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[2,4.167],"width":0.26,"height":2.96,"rounded":false,"fill":"#ffe945ff","thickness":0,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.167,2],"width":2.96,"height":0.27,"rounded":false,"fill":"#ffe945ff","thickness":0,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.167,2],"width":2.96,"height":0.27,"rounded":false,"fill":"#ffe945ff","thickness":0,"angle":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.167,0],"width":1.23,"height":0.25,"rounded":false,"fill":"#484848ff","thickness":0,"angle":45}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.833,0],"width":1.23,"height":0.25,"rounded":false,"fill":"#484848ff","thickness":0,"angle":45}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,0],"width":1.23,"height":0.25,"rounded":false,"fill":"#484848ff","thickness":0,"angle":45}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.167,0],"width":1.23,"height":0.25,"rounded":false,"fill":"#484848ff","thickness":0,"angle":45}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[4,0.833],"width":1.23,"height":0.25,"rounded":false,"fill":"#484848ff","thickness":0,"angle":45}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[4,1.5],"width":1.23,"height":0.25,"rounded":false,"fill":"#484848ff","thickness":0,"angle":45}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[4,2.167],"width":1.23,"height":0.25,"rounded":false,"fill":"#484848ff","thickness":0,"angle":45}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[4,2.833],"width":1.23,"height":0.25,"rounded":false,"fill":"#484848ff","thickness":0,"angle":45}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[0,1.167],"width":1.23,"height":0.25,"rounded":false,"fill":"#484848ff","thickness":0,"angle":45}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[0,1.833],"width":1.23,"height":0.25,"rounded":false,"fill":"#484848ff","thickness":0,"angle":45}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[0,2.5],"width":1.23,"height":0.25,"rounded":false,"fill":"#484848ff","thickness":0,"angle":45}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[0,3.167],"width":1.23,"height":0.25,"rounded":false,"fill":"#484848ff","thickness":0,"angle":45}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.833,4],"width":1.23,"height":0.25,"rounded":false,"fill":"#484848ff","thickness":0,"angle":45}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,4],"width":1.23,"height":0.25,"rounded":false,"fill":"#484848ff","thickness":0,"angle":45}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.167,4],"width":1.23,"height":0.25,"rounded":false,"fill":"#484848ff","thickness":0,"angle":45}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.833,4],"width":1.23,"height":0.25,"rounded":false,"fill":"#484848ff","thickness":0,"angle":45}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,0.5],"width":0.28,"height":0.28,"rounded":true,"fill":"#a8b5c9ff","thickness":0,"angle":0}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,0.5],"width":0.28,"height":0.28,"rounded":true,"fill":"#a8b5c9ff","thickness":0,"angle":0}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,0.5],"width":0.28,"height":0.28,"rounded":true,"fill":"#a8b5c9ff","thickness":0,"angle":0}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,0.5],"width":0.28,"height":0.28,"rounded":true,"fill":"#a8b5c9ff","thickness":0,"angle":0}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,1.5],"width":0.28,"height":0.28,"rounded":true,"fill":"#a8b5c9ff","thickness":0,"angle":0}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,2.5],"width":0.28,"height":0.28,"rounded":true,"fill":"#a8b5c9ff","thickness":0,"angle":0}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,3.5],"width":0.28,"height":0.28,"rounded":true,"fill":"#a8b5c9ff","thickness":0,"angle":0}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,1.5],"width":0.28,"height":0.28,"rounded":true,"fill":"#a8b5c9ff","thickness":0,"angle":0}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,2.5],"width":0.28,"height":0.28,"rounded":true,"fill":"#a8b5c9ff","thickness":0,"angle":0}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,3.5],"width":0.28,"height":0.28,"rounded":true,"fill":"#a8b5c9ff","thickness":0,"angle":0}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,1.5],"width":0.28,"height":0.28,"rounded":true,"fill":"#a8b5c9ff","thickness":0,"angle":0}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,2.5],"width":0.28,"height":0.28,"rounded":true,"fill":"#a8b5c9ff","thickness":0,"angle":0}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,3.5],"width":0.28,"height":0.28,"rounded":true,"fill":"#a8b5c9ff","thickness":0,"angle":0}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,2.5],"width":0.28,"height":0.28,"rounded":true,"fill":"#a8b5c9ff","thickness":0,"angle":0}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.071,2],"width":3.09,"height":0.12,"rounded":false,"fill":"#b4c2ccff","thickness":0,"angle":0}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.071,2],"width":3.09,"height":0.12,"rounded":false,"fill":"#b4c2ccff","thickness":0,"angle":0}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"shape","layer":"under","center":[2,4.071],"width":0.12,"height":3.09,"rounded":false,"fill":"#b4c2ccff","thickness":0,"angle":0}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"shape","layer":"under","center":[2,-0.071],"width":0.12,"height":3.09,"rounded":false,"fill":"#b4c2ccff","thickness":0,"angle":0}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"line","points":[[0.375,-0.375],[0.375,-0.125],[-0.125,-0.125],[-0.125,0.375],[-0.375,0.375]],"color":"#b4c2ccff","thickness":19.84,"rounded":true}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"line","points":[[-0.375,3.625],[-0.125,3.625],[-0.125,4.125],[0.375,4.125],[0.375,4.375]],"color":"#b4c2ccff","thickness":19.84,"rounded":true}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"line","points":[[3.625,4.375],[3.625,4.125],[4.125,4.125],[4.125,3.625],[4.375,3.625]],"color":"#b4c2ccff","thickness":19.84,"rounded":true}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"line","points":[[3.625,-0.375],[3.625,-0.125],[4.125,-0.125],[4.125,0.375],[4.375,0.375]],"color":"#b4c2ccff","thickness":19.84,"rounded":true}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"line","points":[[0.5,0.5],[0.5,3.5]],"color":"#a8b5c6ff","thickness":14.08,"rounded":true}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"line","points":[[1.5,0.5],[3.5,0.5]],"color":"#a8b5c6ff","thickness":14.08,"rounded":true}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"line","points":[[1.5,1.5],[1.5,3.5]],"color":"#a8b5c6ff","thickness":14.08,"rounded":true}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"line","points":[[3.5,1.5],[3.5,3.5],[2.5,2.5]],"color":"#a8b5c6ff","thickness":14.08,"rounded":true}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,0.5],"width":0.1,"height":0.1,"rounded":true,"fill":"#92a4beff","thickness":0,"angle":0}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,0.5],"width":0.1,"height":0.1,"rounded":true,"fill":"#92a4beff","thickness":0,"angle":0}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,0.5],"width":0.1,"height":0.1,"rounded":true,"fill":"#92a4beff","thickness":0,"angle":0}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,0.5],"width":0.1,"height":0.1,"rounded":true,"fill":"#92a4beff","thickness":0,"angle":0}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,1.5],"width":0.1,"height":0.1,"rounded":true,"fill":"#92a4beff","thickness":0,"angle":0}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,2.5],"width":0.1,"height":0.1,"rounded":true,"fill":"#92a4beff","thickness":0,"angle":0}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,3.5],"width":0.1,"height":0.1,"rounded":true,"fill":"#92a4beff","thickness":0,"angle":0}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,1.5],"width":0.1,"height":0.1,"rounded":true,"fill":"#92a4beff","thickness":0,"angle":0}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,2.5],"width":0.1,"height":0.1,"rounded":true,"fill":"#92a4beff","thickness":0,"angle":0}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,3.5],"width":0.1,"height":0.1,"rounded":true,"fill":"#92a4beff","thickness":0,"angle":0}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,1.5],"width":0.1,"height":0.1,"rounded":true,"fill":"#92a4beff","thickness":0,"angle":0}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,2.5],"width":0.1,"height":0.1,"rounded":true,"fill":"#92a4beff","thickness":0,"angle":0}}
- {"id":"drawing-60","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,3.5],"width":0.1,"height":0.1,"rounded":true,"fill":"#92a4beff","thickness":0,"angle":0}}
- {"id":"drawing-61","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,2.5],"width":0.1,"height":0.1,"rounded":true,"fill":"#92a4beff","thickness":0,"angle":0}}
- {"id":"drawing-62","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,-0.4],"width":0.26,"height":3.19,"rounded":false,"fill":"#b4c2ccff","thickness":0,"angle":0}}
- {"id":"drawing-63","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,4.4],"width":0.26,"height":3.19,"rounded":false,"fill":"#b4c2ccff","thickness":0,"angle":0}}
- {"id":"drawing-64","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.4,2],"width":3.19,"height":0.26,"rounded":false,"fill":"#b4c2ccff","thickness":0,"angle":0}}
- {"id":"drawing-65","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.4,2],"width":3.19,"height":0.26,"rounded":false,"fill":"#b4c2ccff","thickness":0,"angle":0}}
```

Normal sudoku 4x4 rules apply. 

Each line contains an inspection robot, which moves backwards and forwards along it. The starting position  must be deduced. The robot inspects this starting digit, which tells it how many cells along its line it must move. It can move in either direction, as long as there is enough room for it to move the correct distance without going off an end of the line (it can't reverse direction mid-movement.)

The robot then inspects the digit it stops at, which again tells it how many cells to move, again in either direction. The robot must repeat this process, each time obeying the digit it stops at, until it has inspected EVERY cell along the line. (It can ignore the last digit it inspects, and stops there.) 

The robot must never stop at the same cell more than once. Digits may repeat on lines if allowed by sudoku.
