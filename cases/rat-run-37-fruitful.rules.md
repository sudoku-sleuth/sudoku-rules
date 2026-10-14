---
format: open-rules
title: "RAT RUN 37: Fruitful"
setter: Marty Sears
source: https://sudokupad.app/9qx3iprv0x
case: https://sudoku-sleuth.com/cases/rat-run-37-fruitful
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Our reading of the board gives a house more cells than available digits; we need to check its layout.
board:
  rows: 11
  cols: 11
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
exported: a23bf483dce4fd656f7125ed2bb30d8e
---

```rules
unique-1: unique r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9-r1c10-r1c11
unique-2: unique r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9-r2c10-r2c11
unique-3: unique r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8-r3c9-r3c10-r3c11
unique-4: unique r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8-r4c9-r4c10-r4c11
unique-5: unique r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9-r5c10-r5c11
unique-6: unique r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8-r6c9-r6c10-r6c11
unique-7: unique r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8-r7c9-r7c10-r7c11
unique-8: unique r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r8c9-r8c10-r8c11
unique-9: unique r9c1-r9c2-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8-r9c9-r9c10-r9c11
unique-10: unique r10c1-r10c2-r10c3-r10c4-r10c5-r10c6-r10c7-r10c8-r10c9-r10c10-r10c11
unique-11: unique r11c1-r11c2-r11c3-r11c4-r11c5-r11c6-r11c7-r11c8-r11c9-r11c10-r11c11
unique-12: unique r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r9c1-r10c1-r11c1
unique-13: unique r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2-r9c2-r10c2-r11c2
unique-14: unique r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3-r9c3-r10c3-r11c3
unique-15: unique r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4-r8c4-r9c4-r10c4-r11c4
unique-16: unique r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5-r10c5-r11c5
unique-17: unique r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6-r8c6-r9c6-r10c6-r11c6
unique-18: unique r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7-r9c7-r10c7-r11c7
unique-19: unique r1c8-r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8-r9c8-r10c8-r11c8
unique-20: unique r1c9-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9-r10c9-r11c9
unique-21: unique r1c10-r2c10-r3c10-r4c10-r5c10-r6c10-r7c10-r8c10-r9c10-r10c10-r11c10
unique-22: unique r1c11-r2c11-r3c11-r4c11-r5c11-r6c11-r7c11-r8c11-r9c11-r10c11-r11c11
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[1,1],"width":0.28,"height":0.28,"rounded":true,"fill":"#a21769ff","thickness":0,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[1,10],"width":0.28,"height":0.28,"rounded":true,"fill":"#a21769ff","thickness":0,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[10,10],"width":0.28,"height":0.28,"rounded":true,"fill":"#a21769ff","thickness":0,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[10,1],"width":0.28,"height":0.28,"rounded":true,"fill":"#a21769ff","thickness":0,"angle":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[4,5],"width":0.28,"height":0.28,"rounded":true,"fill":"#a21769ff","thickness":0,"angle":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[7,1],[10,1],[10,11],[11,11],[11,10],[10,10]],"color":"#FFFFFF","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[8,1],[8,0],[9,0],[9,1]],"color":"#FFFFFF","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[10,2],[11,2],[11,1],[10,1],[10,0],[9,0]],"color":"#FFFFFF","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[11,1],[11,0],[10,0]],"color":"#FFFFFF","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[10,3],[11,3],[11,2]],"color":"#FFFFFF","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[10,4],[11,4],[11,3]],"color":"#FFFFFF","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[10,5],[11,5],[11,4]],"color":"#FFFFFF","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[10,6],[11,6],[11,5]],"color":"#FFFFFF","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[10,7],[11,7],[11,6]],"color":"#FFFFFF","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[10,8],[11,8],[11,7]],"color":"#FFFFFF","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[10,9],[11,9],[11,8]],"color":"#FFFFFF","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[10,10],[9,10],[9,11],[10,11]],"color":"#FFFFFF","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[11,9],[11,10]],"color":"#FFFFFF","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[8,0],[7,0],[7,1],[1,1],[1,10],[9,10]],"color":"#FFFFFF","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[9,11],[8,11],[8,10]],"color":"#FFFFFF","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[7,0],[6,0],[6,1]],"color":"#FFFFFF","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[5,1],[5,0],[6,0]],"color":"#FFFFFF","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[4,1],[4,0],[5,0]],"color":"#FFFFFF","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[3,1],[3,0],[4,0]],"color":"#FFFFFF","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[2,1],[2,0],[3,0]],"color":"#FFFFFF","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[1,2],[0,2],[0,9],[1,9]],"color":"#FFFFFF","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[1,3],[0,3]],"color":"#FFFFFF","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[1,4],[0,4]],"color":"#FFFFFF","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"line","points":[[1,5],[0,5]],"color":"#FFFFFF","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"line","points":[[1,6],[0,6]],"color":"#FFFFFF","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"line","points":[[1,7],[0,7]],"color":"#FFFFFF","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"line","points":[[1,8],[0,8]],"color":"#FFFFFF","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"line","points":[[2,10],[2,11],[1,11],[1,10],[0,10],[0,9]],"color":"#FFFFFF","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"line","points":[[1,11],[0,11],[0,10]],"color":"#FFFFFF","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"line","points":[[3,10],[3,11],[2,11]],"color":"#FFFFFF","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"line","points":[[4,10],[4,11],[3,11]],"color":"#FFFFFF","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"line","points":[[5,10],[5,11],[4,11]],"color":"#FFFFFF","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"line","points":[[6,10],[6,11],[5,11]],"color":"#FFFFFF","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"line","points":[[7,10],[7,11],[6,11]],"color":"#FFFFFF","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"line","points":[[7,11],[8,11]],"color":"#FFFFFF","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"line","points":[[2,0],[1,0],[1,1],[0,1],[0,2]],"color":"#FFFFFF","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"line","points":[[1,0],[0,0],[0,1]],"color":"#FFFFFF","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"line","points":[[2,1],[2,10]],"color":"#e4e4e4ff","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"line","points":[[3,10],[3,9],[1,9]],"color":"#e4e4e4ff","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"line","points":[[4,10],[4,9],[3,9],[3,8],[1,8]],"color":"#e4e4e4ff","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"line","points":[[5,10],[5,9],[4,9],[4,8],[3,8],[3,7],[1,7]],"color":"#e4e4e4ff","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"line","points":[[6,10],[6,9],[5,9],[5,8],[4,8],[4,7],[3,7],[3,6],[1,6]],"color":"#e4e4e4ff","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"line","points":[[7,10],[7,9],[6,9],[6,8],[5,8],[5,7],[4,7],[4,6],[3,6],[3,5],[1,5]],"color":"#e4e4e4ff","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"line","points":[[8,10],[8,9],[7,9],[7,8],[6,8],[6,7],[5,7],[5,6],[4,6],[4,5],[3,5],[3,4],[1,4]],"color":"#e4e4e4ff","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"line","points":[[9,10],[9,9],[8,9],[8,8],[7,8],[7,7],[6,7],[6,6],[5,6],[5,5],[4,5],[4,4],[3,4],[3,3],[1,3]],"color":"#e4e4e4ff","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"line","points":[[10,9],[9,9],[9,8],[8,8],[8,7],[7,7],[7,6],[6,6],[6,5],[5,5],[5,4],[4,4],[4,3],[3,3],[3,2],[1,2]],"color":"#e4e4e4ff","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"line","points":[[10,8],[9,8],[9,7],[8,7],[8,6],[7,6],[7,5],[6,5],[6,4],[5,4],[5,3],[4,3],[4,2],[3,2],[3,1]],"color":"#e4e4e4ff","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"line","points":[[10,7],[9,7],[9,6],[8,6],[8,5],[7,5],[7,4],[6,4],[6,3],[5,3],[5,2],[4,2],[4,1]],"color":"#e4e4e4ff","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"line","points":[[10,4],[7,4],[7,3],[6,3],[6,2],[5,2],[5,1]],"color":"#e4e4e4ff","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"line","points":[[10,5],[8,5],[8,3],[7,3],[7,2],[6,2],[6,1]],"color":"#e4e4e4ff","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"line","points":[[10,6],[9,6],[9,3],[8,3],[8,2],[7,2],[7,1]],"color":"#e4e4e4ff","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"line","points":[[10,3],[9,3],[9,2],[8,2],[8,1]],"color":"#e4e4e4ff","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"line","points":[[10,2],[9,2],[9,1]],"color":"#e4e4e4ff","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"line","points":[[10.25,9.25],[10.25,10.25],[0.75,10.25],[0.75,0.75],[10.25,0.75],[10.25,9.25]],"color":"#a21769ff","thickness":20.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-60","rules":[],"visual":{"kind":"line","points":[[3,7],[1,7],[1,10],[10,10],[10,1],[8,1],[8,2]],"color":"#7e114fff","thickness":12.16,"rounded":true,"layer":"over"}}
- {"id":"drawing-61","rules":[],"visual":{"kind":"line","points":[[1,7],[1,3],[2,3]],"color":"#7e114fff","thickness":12.16,"rounded":true,"layer":"over"}}
- {"id":"drawing-62","rules":[],"visual":{"kind":"line","points":[[8,10],[8,9]],"color":"#7e114fff","thickness":12.16,"rounded":true,"layer":"over"}}
- {"id":"drawing-63","rules":[],"visual":{"kind":"line","points":[[8,1],[1,1],[1,3]],"color":"#7e114fff","thickness":12.16,"rounded":true,"layer":"over"}}
- {"id":"drawing-64","rules":[],"visual":{"kind":"line","points":[[5,7],[6,7]],"color":"#7e114fff","thickness":12.16,"rounded":true,"layer":"over"}}
- {"id":"drawing-65","rules":[],"visual":{"kind":"line","points":[[3,2],[5,2],[5,6],[2,6]],"color":"#7e114fff","thickness":12.16,"rounded":true,"layer":"over"}}
- {"id":"drawing-66","rules":[],"visual":{"kind":"line","points":[[9,9],[9,8],[7,8]],"color":"#7e114fff","thickness":12.16,"rounded":true,"layer":"over"}}
- {"id":"drawing-67","rules":[],"visual":{"kind":"line","points":[[6,8],[2,8]],"color":"#7e114fff","thickness":12.16,"rounded":true,"layer":"over"}}
- {"id":"drawing-68","rules":[],"visual":{"kind":"line","points":[[5,9],[2,9]],"color":"#7e114fff","thickness":12.16,"rounded":true,"layer":"over"}}
- {"id":"drawing-69","rules":[],"visual":{"kind":"line","points":[[9,2],[9,3]],"color":"#7e114fff","thickness":12.16,"rounded":true,"layer":"over"}}
- {"id":"drawing-70","rules":[],"visual":{"kind":"line","points":[[8,3],[6,3]],"color":"#7e114fff","thickness":12.16,"rounded":true,"layer":"over"}}
- {"id":"drawing-71","rules":[],"visual":{"kind":"line","points":[[7,4],[7,5]],"color":"#7e114fff","thickness":12.16,"rounded":true,"layer":"over"}}
- {"id":"drawing-72","rules":[],"visual":{"kind":"line","points":[[8,5],[9,5]],"color":"#7e114fff","thickness":12.16,"rounded":true,"layer":"over"}}
- {"id":"drawing-73","rules":[],"visual":{"kind":"line","points":[[2,5],[2,4],[4,4]],"color":"#7e114fff","thickness":12.16,"rounded":true,"layer":"over"}}
- {"id":"drawing-74","rules":[],"visual":{"kind":"line","points":[[6,6],[7,6]],"color":"#7e114fff","thickness":12.16,"rounded":true,"layer":"over"}}
- {"id":"drawing-75","rules":[],"visual":{"kind":"line","points":[[7,7],[8,7]],"color":"#7e114fff","thickness":12.16,"rounded":true,"layer":"over"}}
- {"id":"drawing-76","rules":[],"visual":{"kind":"line","points":[[8,4],[9,4]],"color":"#7e114fff","thickness":12.16,"rounded":true,"layer":"over"}}
- {"id":"drawing-77","rules":[],"visual":{"kind":"line","points":[[5.6,9.1],[5.5,9],[5.6,8.9]],"color":"#FFFFFF","thickness":8.32,"rounded":true,"layer":"over"}}
- {"id":"drawing-78","rules":[],"visual":{"kind":"line","points":[[5.4,8.9],[5.5,9],[5.4,9.1]],"color":"#FFFFFF","thickness":8.32,"rounded":true,"layer":"over"}}
- {"id":"drawing-79","rules":[],"visual":{"kind":"line","points":[[4.6,7.1],[4.5,7],[4.6,6.9]],"color":"#FFFFFF","thickness":8.32,"rounded":true,"layer":"over"}}
- {"id":"drawing-80","rules":[],"visual":{"kind":"line","points":[[4.4,6.9],[4.5,7],[4.4,7.1]],"color":"#FFFFFF","thickness":8.32,"rounded":true,"layer":"over"}}
- {"id":"drawing-81","rules":[],"visual":{"kind":"line","points":[[7.6,5.9],[7.5,6],[7.6,6.1]],"color":"#FFFFFF","thickness":8.32,"rounded":true,"layer":"over"}}
- {"id":"drawing-82","rules":[],"visual":{"kind":"line","points":[[7.4,6.1],[7.5,6],[7.4,5.9]],"color":"#FFFFFF","thickness":8.32,"rounded":true,"layer":"over"}}
- {"id":"drawing-83","rules":[],"visual":{"kind":"line","points":[[7.1,6.6],[7,6.5],[7.1,6.4]],"color":"#FFFFFF","thickness":8.32,"rounded":true,"layer":"over"}}
- {"id":"drawing-84","rules":[],"visual":{"kind":"line","points":[[6.9,6.4],[7,6.5],[6.9,6.6]],"color":"#FFFFFF","thickness":8.32,"rounded":true,"layer":"over"}}
- {"id":"drawing-85","rules":[],"visual":{"kind":"line","points":[[5.6,5.1],[5.5,5],[5.6,4.9]],"color":"#FFFFFF","thickness":8.32,"rounded":true,"layer":"over"}}
- {"id":"drawing-86","rules":[],"visual":{"kind":"line","points":[[5.4,4.9],[5.5,5],[5.4,5.1]],"color":"#FFFFFF","thickness":8.32,"rounded":true,"layer":"over"}}
- {"id":"drawing-87","rules":[],"visual":{"kind":"line","points":[[3.6,5.1],[3.5,5],[3.6,4.9]],"color":"#FFFFFF","thickness":8.32,"rounded":true,"layer":"over"}}
- {"id":"drawing-88","rules":[],"visual":{"kind":"line","points":[[3.4,4.9],[3.5,5],[3.4,5.1]],"color":"#FFFFFF","thickness":8.32,"rounded":true,"layer":"over"}}
- {"id":"drawing-89","rules":[],"visual":{"kind":"line","points":[[5.6,9.1],[5.5,9],[5.6,8.9]],"color":"#f40000ff","thickness":5.12,"rounded":true,"layer":"over"}}
- {"id":"drawing-90","rules":[],"visual":{"kind":"line","points":[[5.4,8.9],[5.5,9],[5.4,9.1]],"color":"#f40000ff","thickness":5.12,"rounded":true,"layer":"over"}}
- {"id":"drawing-91","rules":[],"visual":{"kind":"line","points":[[4.6,7.1],[4.5,7],[4.6,6.9]],"color":"#f40000ff","thickness":5.12,"rounded":true,"layer":"over"}}
- {"id":"drawing-92","rules":[],"visual":{"kind":"line","points":[[4.4,6.9],[4.5,7],[4.4,7.1]],"color":"#f40000ff","thickness":5.12,"rounded":true,"layer":"over"}}
- {"id":"drawing-93","rules":[],"visual":{"kind":"line","points":[[7.6,5.9],[7.5,6],[7.6,6.1]],"color":"#f40000ff","thickness":5.12,"rounded":true,"layer":"over"}}
- {"id":"drawing-94","rules":[],"visual":{"kind":"line","points":[[7.4,6.1],[7.5,6],[7.4,5.9]],"color":"#f40000ff","thickness":5.12,"rounded":true,"layer":"over"}}
- {"id":"drawing-95","rules":[],"visual":{"kind":"line","points":[[7.1,6.6],[7,6.5],[7.1,6.4]],"color":"#f40000ff","thickness":5.12,"rounded":true,"layer":"over"}}
- {"id":"drawing-96","rules":[],"visual":{"kind":"line","points":[[6.9,6.4],[7,6.5],[6.9,6.6]],"color":"#f40000ff","thickness":5.12,"rounded":true,"layer":"over"}}
- {"id":"drawing-97","rules":[],"visual":{"kind":"line","points":[[5.6,5.1],[5.5,5],[5.6,4.9]],"color":"#f40000ff","thickness":5.12,"rounded":true,"layer":"over"}}
- {"id":"drawing-98","rules":[],"visual":{"kind":"line","points":[[5.4,4.9],[5.5,5],[5.4,5.1]],"color":"#f40000ff","thickness":5.12,"rounded":true,"layer":"over"}}
- {"id":"drawing-99","rules":[],"visual":{"kind":"line","points":[[3.6,5.1],[3.5,5],[3.6,4.9]],"color":"#f40000ff","thickness":5.12,"rounded":true,"layer":"over"}}
- {"id":"drawing-100","rules":[],"visual":{"kind":"line","points":[[3.4,4.9],[3.5,5],[3.4,5.1]],"color":"#f40000ff","thickness":5.12,"rounded":true,"layer":"over"}}
- {"id":"drawing-101","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,3.5],"width":0,"height":0.785,"rounded":true,"thickness":0,"angle":0,"text":"🧁","textColor":"#000000","fontSize":29.8,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-102","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,3.5],"width":0,"height":0.785,"rounded":true,"thickness":0,"angle":0,"text":"🐀","textColor":"#000000","fontSize":29.8,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-103","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,2.5],"width":0,"height":0.785,"rounded":true,"thickness":0,"angle":0,"text":"🐀","textColor":"#000000","fontSize":29.8,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-104","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,6.5],"width":0,"height":0.785,"rounded":true,"thickness":0,"angle":0,"text":"🧁","textColor":"#000000","fontSize":29.8,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-105","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.5,6],"width":0.33,"height":0.39,"rounded":true,"fill":"#93e77fff","stroke":"#FFFFFF","thickness":1.92,"angle":17}}
- {"id":"drawing-106","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,9],"width":0.33,"height":0.39,"rounded":true,"fill":"#93e77fff","stroke":"#FFFFFF","thickness":1.92,"angle":17}}
- {"id":"drawing-107","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,7.5],"width":0.31,"height":0.31,"rounded":true,"fill":"#000000","stroke":"#FFFFFF","thickness":1.92,"angle":0}}
- {"id":"drawing-108","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,7.5],"width":0.31,"height":0.31,"rounded":true,"fill":"#000000","stroke":"#FFFFFF","thickness":1.92,"angle":0}}
- {"id":"drawing-109","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,7.5],"width":0.31,"height":0.31,"rounded":true,"fill":"#000000","stroke":"#FFFFFF","thickness":1.92,"angle":0}}
- {"id":"drawing-110","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,7.5],"width":0.31,"height":0.31,"rounded":true,"fill":"#000000","stroke":"#FFFFFF","thickness":1.92,"angle":0}}
- {"id":"drawing-111","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.5,9],"width":0.33,"height":0.39,"rounded":true,"fill":"#93e77fff","stroke":"#FFFFFF","thickness":1.92,"angle":7}}
- {"id":"drawing-112","rules":[],"visual":{"kind":"shape","layer":"over","center":[9,7.5],"width":0.31,"height":0.31,"rounded":true,"fill":"#000000","stroke":"#FFFFFF","thickness":1.92,"angle":0}}
- {"id":"drawing-113","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,7.5],"width":0.31,"height":0.31,"rounded":true,"fill":"#ffea07ff","stroke":"#FFFFFF","thickness":1.92,"angle":0}}
- {"id":"drawing-114","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,9],"width":0.31,"height":0.31,"rounded":true,"fill":"#ffea07ff","stroke":"#FFFFFF","thickness":1.92,"angle":0}}
- {"id":"drawing-115","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,9],"width":0.31,"height":0.31,"rounded":true,"fill":"#ffea07ff","stroke":"#FFFFFF","thickness":1.92,"angle":0}}
- {"id":"drawing-116","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,9],"width":0.31,"height":0.31,"rounded":true,"fill":"#ff2e2eff","stroke":"#FFFFFF","thickness":1.92,"angle":0}}
- {"id":"drawing-117","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,8],"width":0.33,"height":0.39,"rounded":true,"fill":"#93e77fff","stroke":"#FFFFFF","thickness":1.92,"angle":17}}
- {"id":"drawing-118","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,2],"width":0.33,"height":0.39,"rounded":true,"fill":"#93e77fff","stroke":"#FFFFFF","thickness":1.92,"angle":17}}
- {"id":"drawing-119","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,4],"width":0.33,"height":0.39,"rounded":true,"fill":"#93e77fff","stroke":"#FFFFFF","thickness":1.92,"angle":17}}
- {"id":"drawing-120","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,6],"width":0.33,"height":0.39,"rounded":true,"fill":"#93e77fff","stroke":"#FFFFFF","thickness":1.92,"angle":17}}
- {"id":"drawing-121","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.5,2],"width":0.33,"height":0.39,"rounded":true,"fill":"#93e77fff","stroke":"#FFFFFF","thickness":1.92,"angle":17}}
- {"id":"drawing-122","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.5,4],"width":0.33,"height":0.39,"rounded":true,"fill":"#93e77fff","stroke":"#FFFFFF","thickness":1.92,"angle":17}}
- {"id":"drawing-123","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,2.5],"width":0.31,"height":0.31,"rounded":true,"fill":"#ff2e2eff","stroke":"#FFFFFF","thickness":1.92,"angle":0}}
- {"id":"drawing-124","rules":[],"visual":{"kind":"shape","layer":"over","center":[9,4.5],"width":0.31,"height":0.31,"rounded":true,"fill":"#ff2e2eff","stroke":"#FFFFFF","thickness":1.92,"angle":0}}
- {"id":"drawing-125","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,2.5],"width":0.33,"height":0.39,"rounded":true,"fill":"#93e77fff","stroke":"#FFFFFF","thickness":1.92,"angle":17}}
- {"id":"drawing-126","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,3],"width":0.31,"height":0.31,"rounded":true,"fill":"#ff2e2eff","stroke":"#FFFFFF","thickness":1.92,"angle":0}}
- {"id":"drawing-127","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,2],"width":0.31,"height":0.31,"rounded":true,"fill":"#ff2e2eff","stroke":"#FFFFFF","thickness":1.92,"angle":0}}
- {"id":"drawing-128","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,8.5],"width":0.33,"height":0.39,"rounded":true,"fill":"#93e77fff","stroke":"#FFFFFF","thickness":1.92,"angle":17}}
- {"id":"drawing-129","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,3.5],"width":0.31,"height":0.31,"rounded":true,"fill":"#ff2e2eff","stroke":"#FFFFFF","thickness":1.92,"angle":0}}
- {"id":"drawing-130","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,6.5],"width":0.31,"height":0.31,"rounded":true,"fill":"#ff2e2eff","stroke":"#FFFFFF","thickness":1.92,"angle":0}}
- {"id":"drawing-131","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,2],"width":0.31,"height":0.31,"rounded":true,"fill":"#ff2e2eff","stroke":"#FFFFFF","thickness":1.92,"angle":0}}
- {"id":"drawing-132","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,3],"width":0.31,"height":0.31,"rounded":true,"fill":"#000000","stroke":"#FFFFFF","thickness":1.92,"angle":0}}
- {"id":"drawing-133","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,1.5],"width":0.33,"height":0.39,"rounded":true,"fill":"#93e77fff","stroke":"#FFFFFF","thickness":1.92,"angle":17}}
- {"id":"drawing-134","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,1.5],"width":0.31,"height":0.31,"rounded":true,"fill":"#000000","stroke":"#FFFFFF","thickness":1.92,"angle":0}}
- {"id":"drawing-135","rules":[],"visual":{"kind":"shape","layer":"over","center":[9,5.5],"width":0.33,"height":0.39,"rounded":true,"fill":"#93e77fff","stroke":"#FFFFFF","thickness":1.92,"angle":17}}
- {"id":"drawing-136","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,5.5],"width":0.31,"height":0.31,"rounded":true,"fill":"#ffea07ff","stroke":"#FFFFFF","thickness":1.92,"angle":0}}
- {"id":"drawing-137","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,7.5],"width":0.31,"height":0.31,"rounded":true,"fill":"#ffea07ff","stroke":"#FFFFFF","thickness":1.92,"angle":0}}
- {"id":"drawing-138","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,2],"width":0.31,"height":0.31,"rounded":true,"fill":"#ff2e2eff","stroke":"#FFFFFF","thickness":1.92,"angle":0}}
- {"id":"drawing-139","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,1.5],"width":0.31,"height":0.31,"rounded":true,"fill":"#ff2e2eff","stroke":"#FFFFFF","thickness":1.92,"angle":0}}
- {"id":"drawing-140","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,7],"width":0.31,"height":0.31,"rounded":true,"fill":"#ffea07ff","stroke":"#FFFFFF","thickness":1.92,"angle":0}}
- {"id":"drawing-141","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,5],"width":0.31,"height":0.31,"rounded":true,"fill":"#ff2e2eff","stroke":"#FFFFFF","thickness":1.92,"angle":0}}
- {"id":"drawing-142","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,6],"width":0.31,"height":0.31,"rounded":true,"fill":"#ffea07ff","stroke":"#FFFFFF","thickness":1.92,"angle":0}}
- {"id":"drawing-143","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,4.5],"width":0.31,"height":0.31,"rounded":true,"fill":"#000000","stroke":"#FFFFFF","thickness":1.92,"angle":0}}
- {"id":"drawing-144","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,5.5],"width":0.31,"height":0.31,"rounded":true,"fill":"#000000","stroke":"#FFFFFF","thickness":1.92,"angle":0}}
- {"id":"drawing-145","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,3.5],"width":0.31,"height":0.31,"rounded":true,"fill":"#ff2e2eff","stroke":"#FFFFFF","thickness":1.92,"angle":0}}
- {"id":"drawing-146","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,2.5],"width":0.33,"height":0.39,"rounded":true,"fill":"#93e77fff","stroke":"#FFFFFF","thickness":1.92,"angle":17}}
- {"id":"drawing-147","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,4.5],"width":0.31,"height":0.31,"rounded":true,"fill":"#ff2e2eff","stroke":"#FFFFFF","thickness":1.92,"angle":0}}
- {"id":"drawing-148","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,10.5],"width":0.31,"height":0.31,"rounded":true,"fill":"#000000","stroke":"#FFFFFF","thickness":1.92,"angle":0}}
- {"id":"drawing-149","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,5],"width":0.33,"height":0.39,"rounded":true,"fill":"#93e77fff","stroke":"#FFFFFF","thickness":1.92,"angle":17}}
- {"id":"drawing-150","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,5],"width":0.31,"height":0.31,"rounded":true,"fill":"#ff2e2eff","stroke":"#FFFFFF","thickness":1.92,"angle":0}}
- {"id":"drawing-151","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,6.5],"width":0.31,"height":0.31,"rounded":true,"fill":"#ffea07ff","stroke":"#FFFFFF","thickness":1.92,"angle":0}}
- {"id":"drawing-152","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,6.5],"width":0.31,"height":0.31,"rounded":true,"fill":"#ffea07ff","stroke":"#FFFFFF","thickness":1.92,"angle":0}}
- {"id":"drawing-153","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,10.5],"width":0.33,"height":0.39,"rounded":true,"fill":"#93e77fff","stroke":"#FFFFFF","thickness":1.92,"angle":17}}
- {"id":"drawing-154","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,4],"width":0.33,"height":0.39,"rounded":true,"fill":"#93e77fff","stroke":"#FFFFFF","thickness":1.92,"angle":17}}
- {"id":"drawing-155","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,9],"width":0.32,"height":0.32,"rounded":true,"fill":"#7e114fff","thickness":0,"angle":0}}
- {"id":"drawing-156","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,9],"width":0.32,"height":0.32,"rounded":true,"fill":"#7e114fff","thickness":0,"angle":0}}
- {"id":"drawing-157","rules":[],"visual":{"kind":"shape","layer":"over","center":[9,7],"width":0.32,"height":0.32,"rounded":true,"fill":"#7e114fff","thickness":0,"angle":0}}
- {"id":"drawing-158","rules":[],"visual":{"kind":"shape","layer":"over","center":[9,6],"width":0.32,"height":0.32,"rounded":true,"fill":"#7e114fff","thickness":0,"angle":0}}
- {"id":"drawing-159","rules":[],"visual":{"kind":"shape","layer":"over","center":[9,5],"width":0.32,"height":0.32,"rounded":true,"fill":"#7e114fff","thickness":0,"angle":0}}
- {"id":"drawing-160","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,7],"width":0.32,"height":0.32,"rounded":true,"fill":"#7e114fff","thickness":0,"angle":0}}
- {"id":"drawing-161","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,2],"width":0.32,"height":0.32,"rounded":true,"fill":"#7e114fff","thickness":0,"angle":0}}
- {"id":"drawing-162","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,2],"width":0.32,"height":0.32,"rounded":true,"fill":"#7e114fff","thickness":0,"angle":0}}
- {"id":"drawing-163","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,6],"width":0.32,"height":0.32,"rounded":true,"fill":"#7e114fff","thickness":0,"angle":0}}
- {"id":"drawing-164","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,6],"width":0.32,"height":0.32,"rounded":true,"fill":"#7e114fff","thickness":0,"angle":0}}
- {"id":"drawing-165","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,5],"width":0.32,"height":0.32,"rounded":true,"fill":"#7e114fff","thickness":0,"angle":0}}
- {"id":"drawing-166","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,2],"width":0.32,"height":0.32,"rounded":true,"fill":"#7e114fff","thickness":0,"angle":0}}
- {"id":"drawing-167","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,5],"width":0.32,"height":0.32,"rounded":true,"fill":"#7e114fff","thickness":0,"angle":0}}
- {"id":"drawing-168","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,2],"width":0.32,"height":0.32,"rounded":true,"fill":"#7e114fff","thickness":0,"angle":0}}
- {"id":"drawing-169","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,4],"width":0.32,"height":0.32,"rounded":true,"fill":"#7e114fff","thickness":0,"angle":0}}
- {"id":"drawing-170","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,2],"width":0.32,"height":0.32,"rounded":true,"fill":"#7e114fff","thickness":0,"angle":0}}
- {"id":"drawing-171","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,7],"width":0.32,"height":0.32,"rounded":true,"fill":"#7e114fff","thickness":0,"angle":0}}
- {"id":"drawing-172","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,7],"width":0.32,"height":0.32,"rounded":true,"fill":"#7e114fff","thickness":0,"angle":0}}
- {"id":"drawing-173","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,6],"width":0.32,"height":0.32,"rounded":true,"fill":"#7e114fff","thickness":0,"angle":0}}
- {"id":"drawing-174","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,4],"width":0.32,"height":0.32,"rounded":true,"fill":"#7e114fff","thickness":0,"angle":0}}
- {"id":"drawing-175","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,3],"width":0.32,"height":0.32,"rounded":true,"fill":"#7e114fff","thickness":0,"angle":0}}
- {"id":"drawing-176","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,5],"width":0.32,"height":0.32,"rounded":true,"fill":"#7e114fff","thickness":0,"angle":0}}
- {"id":"drawing-177","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,5],"width":0.32,"height":0.32,"rounded":true,"fill":"#7e114fff","thickness":0,"angle":0}}
- {"id":"drawing-178","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,6],"width":0.32,"height":0.32,"rounded":true,"fill":"#7e114fff","thickness":0,"angle":0}}
- {"id":"drawing-179","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,7],"width":0.32,"height":0.32,"rounded":true,"fill":"#7e114fff","thickness":0,"angle":0}}
- {"id":"drawing-180","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,8],"width":0.32,"height":0.32,"rounded":true,"fill":"#7e114fff","thickness":0,"angle":0}}
- {"id":"drawing-181","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,9],"width":0.32,"height":0.32,"rounded":true,"fill":"#7e114fff","thickness":0,"angle":0}}
- {"id":"drawing-182","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,9],"width":0.32,"height":0.32,"rounded":true,"fill":"#7e114fff","thickness":0,"angle":0}}
- {"id":"drawing-183","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,8],"width":0.32,"height":0.32,"rounded":true,"fill":"#7e114fff","thickness":0,"angle":0}}
- {"id":"drawing-184","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,3],"width":0.32,"height":0.32,"rounded":true,"fill":"#7e114fff","thickness":0,"angle":0}}
- {"id":"drawing-185","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,3],"width":0.32,"height":0.32,"rounded":true,"fill":"#7e114fff","thickness":0,"angle":0}}
- {"id":"drawing-186","rules":[],"visual":{"kind":"shape","layer":"over","center":[9,2],"width":0.32,"height":0.32,"rounded":true,"fill":"#7e114fff","thickness":0,"angle":0}}
- {"id":"drawing-187","rules":[],"visual":{"kind":"shape","layer":"over","center":[9,3],"width":0.32,"height":0.32,"rounded":true,"fill":"#7e114fff","thickness":0,"angle":0}}
- {"id":"drawing-188","rules":[],"visual":{"kind":"shape","layer":"over","center":[9,4],"width":0.32,"height":0.32,"rounded":true,"fill":"#7e114fff","thickness":0,"angle":0}}
- {"id":"drawing-189","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,4],"width":0.32,"height":0.32,"rounded":true,"fill":"#7e114fff","thickness":0,"angle":0}}
- {"id":"drawing-190","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,4],"width":0.32,"height":0.32,"rounded":true,"fill":"#7e114fff","thickness":0,"angle":0}}
- {"id":"drawing-191","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,5],"width":0.32,"height":0.32,"rounded":true,"fill":"#7e114fff","thickness":0,"angle":0}}
- {"id":"drawing-192","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,5],"width":0.32,"height":0.32,"rounded":true,"fill":"#7e114fff","thickness":0,"angle":0}}
- {"id":"drawing-193","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,7],"width":0.32,"height":0.32,"rounded":true,"fill":"#7e114fff","thickness":0,"angle":0}}
- {"id":"drawing-194","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,7],"width":0.32,"height":0.32,"rounded":true,"fill":"#7e114fff","thickness":0,"angle":0}}
- {"id":"drawing-195","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,8],"width":0.32,"height":0.32,"rounded":true,"fill":"#7e114fff","thickness":0,"angle":0}}
- {"id":"drawing-196","rules":[],"visual":{"kind":"shape","layer":"over","center":[9,8],"width":0.32,"height":0.32,"rounded":true,"fill":"#7e114fff","thickness":0,"angle":0}}
- {"id":"drawing-197","rules":[],"visual":{"kind":"shape","layer":"over","center":[9,9],"width":0.32,"height":0.32,"rounded":true,"fill":"#7e114fff","thickness":0,"angle":0}}
- {"id":"drawing-198","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,9],"width":0.32,"height":0.32,"rounded":true,"fill":"#7e114fff","thickness":0,"angle":0}}
- {"id":"drawing-199","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,6],"width":0.32,"height":0.32,"rounded":true,"fill":"#7e114fff","thickness":0,"angle":0}}
- {"id":"drawing-200","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.5,0.75],"width":0.3,"height":0.3,"rounded":false,"fill":"#89cdffff","thickness":0,"angle":45}}
- {"id":"drawing-201","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,0.75],"width":0.3,"height":0.3,"rounded":false,"fill":"#89cdffff","thickness":0,"angle":45}}
- {"id":"drawing-202","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,0.75],"width":0.3,"height":0.3,"rounded":false,"fill":"#89cdffff","thickness":0,"angle":45}}
- {"id":"drawing-203","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,0.75],"width":0.3,"height":0.3,"rounded":false,"fill":"#89cdffff","thickness":0,"angle":45}}
- {"id":"drawing-204","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,0.75],"width":0.3,"height":0.3,"rounded":false,"fill":"#89cdffff","thickness":0,"angle":45}}
- {"id":"drawing-205","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,0.75],"width":0.3,"height":0.3,"rounded":false,"fill":"#89cdffff","thickness":0,"angle":45}}
- {"id":"drawing-206","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,0.75],"width":0.3,"height":0.3,"rounded":false,"fill":"#89cdffff","thickness":0,"angle":45}}
- {"id":"drawing-207","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,0.75],"width":0.3,"height":0.3,"rounded":false,"fill":"#89cdffff","thickness":0,"angle":45}}
- {"id":"drawing-208","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,0.75],"width":0.3,"height":0.3,"rounded":false,"fill":"#89cdffff","thickness":0,"angle":45}}
- {"id":"drawing-209","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.75,1.5],"width":0.3,"height":0.3,"rounded":false,"fill":"#89cdffff","thickness":0,"angle":45}}
- {"id":"drawing-210","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.75,2.5],"width":0.3,"height":0.3,"rounded":false,"fill":"#89cdffff","thickness":0,"angle":45}}
- {"id":"drawing-211","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.75,3.5],"width":0.3,"height":0.3,"rounded":false,"fill":"#89cdffff","thickness":0,"angle":45}}
- {"id":"drawing-212","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.75,4.5],"width":0.3,"height":0.3,"rounded":false,"fill":"#89cdffff","thickness":0,"angle":45}}
- {"id":"drawing-213","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.75,5.5],"width":0.3,"height":0.3,"rounded":false,"fill":"#89cdffff","thickness":0,"angle":45}}
- {"id":"drawing-214","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.75,6.5],"width":0.3,"height":0.3,"rounded":false,"fill":"#89cdffff","thickness":0,"angle":45}}
- {"id":"drawing-215","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.75,7.5],"width":0.3,"height":0.3,"rounded":false,"fill":"#89cdffff","thickness":0,"angle":45}}
- {"id":"drawing-216","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.75,8.5],"width":0.3,"height":0.3,"rounded":false,"fill":"#89cdffff","thickness":0,"angle":45}}
- {"id":"drawing-217","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.75,9.5],"width":0.3,"height":0.3,"rounded":false,"fill":"#89cdffff","thickness":0,"angle":45}}
- {"id":"drawing-218","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,10.25],"width":0.3,"height":0.3,"rounded":false,"fill":"#ffa689ff","thickness":0,"angle":45}}
- {"id":"drawing-219","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,10.25],"width":0.3,"height":0.3,"rounded":false,"fill":"#ffa689ff","thickness":0,"angle":45}}
- {"id":"drawing-220","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,10.25],"width":0.3,"height":0.3,"rounded":false,"fill":"#ffa689ff","thickness":0,"angle":45}}
- {"id":"drawing-221","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,10.25],"width":0.3,"height":0.3,"rounded":false,"fill":"#ffa689ff","thickness":0,"angle":45}}
- {"id":"drawing-222","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,10.25],"width":0.3,"height":0.3,"rounded":false,"fill":"#ffa689ff","thickness":0,"angle":45}}
- {"id":"drawing-223","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,10.25],"width":0.3,"height":0.3,"rounded":false,"fill":"#ffa689ff","thickness":0,"angle":45}}
- {"id":"drawing-224","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,10.25],"width":0.3,"height":0.3,"rounded":false,"fill":"#ffa689ff","thickness":0,"angle":45}}
- {"id":"drawing-225","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,10.25],"width":0.3,"height":0.3,"rounded":false,"fill":"#ffa689ff","thickness":0,"angle":45}}
- {"id":"drawing-226","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.5,10.25],"width":0.3,"height":0.3,"rounded":false,"fill":"#ffa689ff","thickness":0,"angle":45}}
- {"id":"drawing-227","rules":[],"visual":{"kind":"shape","layer":"over","center":[10.25,9.5],"width":0.3,"height":0.3,"rounded":false,"fill":"#ffa689ff","thickness":0,"angle":45}}
- {"id":"drawing-228","rules":[],"visual":{"kind":"shape","layer":"over","center":[10.25,8.5],"width":0.3,"height":0.3,"rounded":false,"fill":"#ffa689ff","thickness":0,"angle":45}}
- {"id":"drawing-229","rules":[],"visual":{"kind":"shape","layer":"over","center":[10.25,7.5],"width":0.3,"height":0.3,"rounded":false,"fill":"#ffa689ff","thickness":0,"angle":45}}
- {"id":"drawing-230","rules":[],"visual":{"kind":"shape","layer":"over","center":[10.25,6.5],"width":0.3,"height":0.3,"rounded":false,"fill":"#ffa689ff","thickness":0,"angle":45}}
- {"id":"drawing-231","rules":[],"visual":{"kind":"shape","layer":"over","center":[10.25,5.5],"width":0.3,"height":0.3,"rounded":false,"fill":"#ffa689ff","thickness":0,"angle":45}}
- {"id":"drawing-232","rules":[],"visual":{"kind":"shape","layer":"over","center":[10.25,4.5],"width":0.3,"height":0.3,"rounded":false,"fill":"#ffa689ff","thickness":0,"angle":45}}
- {"id":"drawing-233","rules":[],"visual":{"kind":"shape","layer":"over","center":[10.25,3.5],"width":0.3,"height":0.3,"rounded":false,"fill":"#ffa689ff","thickness":0,"angle":45}}
- {"id":"drawing-234","rules":[],"visual":{"kind":"shape","layer":"over","center":[10.25,2.5],"width":0.3,"height":0.3,"rounded":false,"fill":"#ffa689ff","thickness":0,"angle":45}}
- {"id":"drawing-235","rules":[],"visual":{"kind":"shape","layer":"over","center":[10.25,1.5],"width":0.3,"height":0.3,"rounded":false,"fill":"#ffa689ff","thickness":0,"angle":45}}
- {"id":"drawing-236","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,1.5],"width":0.63,"height":0.63,"rounded":false,"fill":"#89cdffff","thickness":0,"angle":0}}
- {"id":"drawing-237","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,2.5],"width":0.63,"height":0.63,"rounded":false,"fill":"#89cdffff","thickness":0,"angle":0}}
- {"id":"drawing-238","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,3.5],"width":0.63,"height":0.63,"rounded":false,"fill":"#89cdffff","thickness":0,"angle":0}}
- {"id":"drawing-239","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,4.5],"width":0.63,"height":0.63,"rounded":false,"fill":"#89cdffff","thickness":0,"angle":0}}
- {"id":"drawing-240","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,5.5],"width":0.63,"height":0.63,"rounded":false,"fill":"#89cdffff","thickness":0,"angle":0}}
- {"id":"drawing-241","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,6.5],"width":0.63,"height":0.63,"rounded":false,"fill":"#89cdffff","thickness":0,"angle":0}}
- {"id":"drawing-242","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,7.5],"width":0.63,"height":0.63,"rounded":false,"fill":"#89cdffff","thickness":0,"angle":0}}
- {"id":"drawing-243","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,8.5],"width":0.63,"height":0.63,"rounded":false,"fill":"#89cdffff","thickness":0,"angle":0}}
- {"id":"drawing-244","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,9.5],"width":0.63,"height":0.63,"rounded":false,"fill":"#89cdffff","thickness":0,"angle":0}}
- {"id":"drawing-245","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.5,0.5],"width":0.63,"height":0.63,"rounded":false,"fill":"#89cdffff","thickness":0,"angle":0}}
- {"id":"drawing-246","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,0.5],"width":0.63,"height":0.63,"rounded":false,"fill":"#89cdffff","thickness":0,"angle":0}}
- {"id":"drawing-247","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,0.5],"width":0.63,"height":0.63,"rounded":false,"fill":"#89cdffff","thickness":0,"angle":0}}
- {"id":"drawing-248","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,0.5],"width":0.63,"height":0.63,"rounded":false,"fill":"#89cdffff","thickness":0,"angle":0}}
- {"id":"drawing-249","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,0.5],"width":0.63,"height":0.63,"rounded":false,"fill":"#89cdffff","thickness":0,"angle":0}}
- {"id":"drawing-250","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,0.5],"width":0.63,"height":0.63,"rounded":false,"fill":"#89cdffff","thickness":0,"angle":0}}
- {"id":"drawing-251","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,0.5],"width":0.63,"height":0.63,"rounded":false,"fill":"#89cdffff","thickness":0,"angle":0}}
- {"id":"drawing-252","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,0.5],"width":0.63,"height":0.63,"rounded":false,"fill":"#89cdffff","thickness":0,"angle":0}}
- {"id":"drawing-253","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,0.5],"width":0.63,"height":0.63,"rounded":false,"fill":"#89cdffff","thickness":0,"angle":0}}
- {"id":"drawing-254","rules":[],"visual":{"kind":"shape","layer":"over","center":[10.5,1.5],"width":0.63,"height":0.63,"rounded":false,"fill":"#ffa689ff","thickness":0,"angle":0}}
- {"id":"drawing-255","rules":[],"visual":{"kind":"shape","layer":"over","center":[10.5,2.5],"width":0.63,"height":0.63,"rounded":false,"fill":"#ffa689ff","thickness":0,"angle":0}}
- {"id":"drawing-256","rules":[],"visual":{"kind":"shape","layer":"over","center":[10.5,3.5],"width":0.63,"height":0.63,"rounded":false,"fill":"#ffa689ff","thickness":0,"angle":0}}
- {"id":"drawing-257","rules":[],"visual":{"kind":"shape","layer":"over","center":[10.5,4.5],"width":0.63,"height":0.63,"rounded":false,"fill":"#ffa689ff","thickness":0,"angle":0}}
- {"id":"drawing-258","rules":[],"visual":{"kind":"shape","layer":"over","center":[10.5,5.5],"width":0.63,"height":0.63,"rounded":false,"fill":"#ffa689ff","thickness":0,"angle":0}}
- {"id":"drawing-259","rules":[],"visual":{"kind":"shape","layer":"over","center":[10.5,6.5],"width":0.63,"height":0.63,"rounded":false,"fill":"#ffa689ff","thickness":0,"angle":0}}
- {"id":"drawing-260","rules":[],"visual":{"kind":"shape","layer":"over","center":[10.5,7.5],"width":0.63,"height":0.63,"rounded":false,"fill":"#ffa689ff","thickness":0,"angle":0}}
- {"id":"drawing-261","rules":[],"visual":{"kind":"shape","layer":"over","center":[10.5,8.5],"width":0.63,"height":0.63,"rounded":false,"fill":"#ffa689ff","thickness":0,"angle":0}}
- {"id":"drawing-262","rules":[],"visual":{"kind":"shape","layer":"over","center":[10.5,9.5],"width":0.63,"height":0.63,"rounded":false,"fill":"#ffa689ff","thickness":0,"angle":0}}
- {"id":"drawing-263","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.5,10.5],"width":0.63,"height":0.63,"rounded":false,"fill":"#ffa689ff","thickness":0,"angle":0}}
- {"id":"drawing-264","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,10.5],"width":0.63,"height":0.63,"rounded":false,"fill":"#ffa689ff","thickness":0,"angle":0}}
- {"id":"drawing-265","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,10.5],"width":0.63,"height":0.63,"rounded":false,"fill":"#ffa689ff","thickness":0,"angle":0}}
- {"id":"drawing-266","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,10.5],"width":0.63,"height":0.63,"rounded":false,"fill":"#ffa689ff","thickness":0,"angle":0}}
- {"id":"drawing-267","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,10.5],"width":0.63,"height":0.63,"rounded":false,"fill":"#ffa689ff","thickness":0,"angle":0}}
- {"id":"drawing-268","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,10.5],"width":0.63,"height":0.63,"rounded":false,"fill":"#ffa689ff","thickness":0,"angle":0}}
- {"id":"drawing-269","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,10.5],"width":0.63,"height":0.63,"rounded":false,"fill":"#ffa689ff","thickness":0,"angle":0}}
- {"id":"drawing-270","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,10.5],"width":0.63,"height":0.63,"rounded":false,"fill":"#ffa689ff","thickness":0,"angle":0}}
- {"id":"drawing-271","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,10.5],"width":0.63,"height":0.63,"rounded":false,"fill":"#ffa689ff","thickness":0,"angle":0}}
```

Fill the grid with the digits 1-9, so that in each row and column, one of the digits 1-9 is missing, and one of the digits is repeated. Every digit from 1-9 is missing from exactly one row and one column, and repeated in exactly one row and one column. Use the orange arrows to keep track of missing digits, and the blue arrows to keep track of repeated digits.

AIM OF EXPERIMENT: Finkz and Phinx must both reach different cupcakes by finding a path through the maze. The paths must not visit any cell more than once, share cells, cross themselves or each other, or pass through any thick maze walls.

As well as moving orthogonally, they may move diagonally if there's a 2x2 space in which to do so, but may never pass diagonally through a round wall-spot on the corner of a cell.

FORBIDDEN DOORS: A red X may not be passed through, and sits between two digits that sum to 10. 

BLACKCURRANTS: If a blackcurrant sits between two digits, one is double the other.

REDCURRANTS: If a redcurrant sits between two digits, one is odd and the other is even.

GRAPES: If a grape sits between two digits, they have a difference of at least 5.

GOLDENBERRIES: If a goldenberry sits between two digits, they are not consecutive (or the same.)

TEST CONSTRAINT: In this experiment, a rat's path is divided into segments by any fruit she eats. The digits on each segment have the same sum, to be determined. This 'segment sum' may be different for Finkz and Phinx.
