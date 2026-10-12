---
format: open-rules
title: Sett Theory
setter: Marty Sears
source: https://sudokupad.app/k7knib70aj
case: https://sudoku-sleuth.com/cases/sett-theory
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
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[5,4.5],"width":9,"height":8,"rounded":false,"fill":"#e6dcccff","thickness":0,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,4.5],"width":9,"height":1,"rounded":false,"fill":"#c3f7ffff","thickness":0,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.667,3.5],"width":1.32,"height":0.88,"rounded":true,"fill":"#c3f7ffff","thickness":0,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[1,4],[1,9],[0,9],[0,8],[1,8]],"color":"#a6f0f6ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[1,4],[0,4],[0,8]],"color":"#a6f0f6ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[1,5],[0,5]],"color":"#a6f0f6ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[1,6],[0,6]],"color":"#a6f0f6ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[1,7],[0,7]],"color":"#a6f0f6ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[0,4],[0,3],[1,3],[1,2],[0,2],[0,3]],"color":"#a6f0f6ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[1,2],[1,1],[0,1],[0,2]],"color":"#a6f0f6ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[1,1],[1,0],[0,0],[0,1]],"color":"#a6f0f6ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[1,3],[1,4]],"color":"#c3f7ffff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[5,2],[5,9],[6,9],[6,8],[5,8]],"color":"#dcd5b6ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[5,8],[4,8],[4,9],[5,9]],"color":"#dcd5b6ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[6,9],[9,9],[9,1],[8,1],[8,8],[6,8],[6,7],[4,7],[4,8],[3,8],[3,9],[4,9]],"color":"#dcd5b6ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[7,9],[7,7],[6,7],[6,6],[4,6],[4,7],[3,7],[3,8],[2,8],[2,5],[6,5],[6,4],[4,4],[4,5]],"color":"#dcd5b6ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[8,9],[8,8],[9,8]],"color":"#dcd5b6ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[9,7],[7,7],[7,6],[6,6],[6,5],[7,5],[7,6]],"color":"#dcd5b6ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[7,6],[9,6]],"color":"#dcd5b6ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[9,5],[7,5],[7,4],[6,4],[6,3],[4,3],[4,4],[3,4],[3,7],[1,7],[1,6],[3,6]],"color":"#dcd5b6ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[9,4],[7,4],[7,3],[6,3],[6,2],[4,2],[4,3],[3,3],[3,4],[2,4],[2,5],[1,5],[1,6]],"color":"#dcd5b6ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[5,2],[5,1],[6,1],[6,2],[7,2],[7,3],[9,3]],"color":"#dcd5b6ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[9,2],[7,2],[7,1],[6,1],[6,0],[7,0],[7,1]],"color":"#dcd5b6ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[9,1],[9,0],[7,0]],"color":"#dcd5b6ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[3,9],[2,9],[2,8],[1,8],[1,7]],"color":"#dcd5b6ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[3,6],[4,6],[4,5]],"color":"#dcd5b6ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[2,9],[1,9],[1,8]],"color":"#dcd5b6ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[1,5],[1,4],[2,4],[2,3],[3,3],[3,2],[4,2],[4,1],[5,1],[5,0],[6,0]],"color":"#dcd5b6ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"line","points":[[7,1],[8,1],[8,0]],"color":"#dcd5b6ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"line","points":[[5,0],[4,0],[4,1],[3,1],[3,2],[2,2],[2,3],[1,3],[1,2],[2,2]],"color":"#dcd5b6ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"line","points":[[2,2],[2,1],[3,1],[3,0],[4,0]],"color":"#dcd5b6ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"line","points":[[1,2],[1,1],[2,1],[2,0],[3,0]],"color":"#dcd5b6ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"line","points":[[1,1],[1,0],[2,0]],"color":"#dcd5b6ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"line","points":[[5,2],[5,9],[6,9],[6,8],[5,8]],"color":"#ded0b1ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"line","points":[[5,8],[4,8],[4,9],[5,9]],"color":"#ded0b1ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"line","points":[[6,9],[9,9],[9,1],[8,1],[8,8],[6,8],[6,7],[4,7],[4,8],[3,8],[3,9],[4,9]],"color":"#ded0b1ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"line","points":[[7,9],[7,7],[6,7],[6,6],[4,6],[4,7],[3,7],[3,8],[2,8],[2,5],[6,5],[6,4],[4,4],[4,5]],"color":"#ded0b1ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"line","points":[[8,9],[8,8],[9,8]],"color":"#ded0b1ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"line","points":[[9,7],[7,7],[7,6],[6,6],[6,5],[7,5],[7,6]],"color":"#ded0b1ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"line","points":[[7,6],[9,6]],"color":"#ded0b1ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"line","points":[[9,5],[7,5],[7,4],[6,4],[6,3],[4,3],[4,4],[3,4],[3,7],[1,7],[1,6],[3,6]],"color":"#ded0b1ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"line","points":[[9,4],[7,4],[7,3],[6,3],[6,2],[4,2],[4,3],[3,3],[3,4],[2,4],[2,5],[1,5],[1,6]],"color":"#ded0b1ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"line","points":[[5,2],[5,1],[6,1],[6,2],[7,2],[7,3],[9,3]],"color":"#ded0b1ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"line","points":[[9,2],[7,2],[7,1],[6,1],[6,0],[7,0],[7,1]],"color":"#ded0b1ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"line","points":[[9,1],[9,0],[7,0]],"color":"#ded0b1ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"line","points":[[3,9],[2,9],[2,8],[1,8],[1,7]],"color":"#ded0b1ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"line","points":[[3,6],[4,6],[4,5]],"color":"#ded0b1ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"line","points":[[2,9],[1,9],[1,8]],"color":"#ded0b1ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"line","points":[[1,5],[1,4],[2,4],[2,3],[3,3],[3,2],[4,2],[4,1],[5,1],[5,0],[6,0]],"color":"#ded0b1ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"line","points":[[7,1],[8,1],[8,0]],"color":"#ded0b1ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"line","points":[[5,0],[4,0],[4,1],[3,1],[3,2],[2,2],[2,3],[1,3],[1,2],[2,2]],"color":"#ded0b1ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"line","points":[[2,2],[2,1],[3,1],[3,0],[4,0]],"color":"#ded0b1ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"line","points":[[1,2],[1,1],[2,1],[2,0],[3,0]],"color":"#ded0b1ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"line","points":[[1,1],[1,0],[2,0]],"color":"#ded0b1ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"line","points":[[0.833,0.167],[1,0.333],[0.833,0.333]],"color":"#57d939ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"line","points":[[1,0.333],[0.833,0.5]],"color":"#57d939ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"line","points":[[0.833,0.667],[1,0.833],[0.833,0.833]],"color":"#57d939ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"line","points":[[1,0.833],[0.833,1]],"color":"#57d939ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"line","points":[[0.833,1.167],[1,1.333],[0.833,1.333]],"color":"#57d939ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-60","rules":[],"visual":{"kind":"line","points":[[1,1.333],[0.833,1.5]],"color":"#57d939ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-61","rules":[],"visual":{"kind":"line","points":[[0.833,1.667],[1,1.833],[0.833,1.833]],"color":"#57d939ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-62","rules":[],"visual":{"kind":"line","points":[[1,1.833],[0.833,2]],"color":"#57d939ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-63","rules":[],"visual":{"kind":"line","points":[[0.833,2.167],[1,2.333],[0.833,2.333]],"color":"#57d939ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-64","rules":[],"visual":{"kind":"line","points":[[1,2.333],[0.833,2.5]],"color":"#57d939ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-65","rules":[],"visual":{"kind":"line","points":[[0.833,2.667],[1,2.833],[0.833,2.833]],"color":"#57d939ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-66","rules":[],"visual":{"kind":"line","points":[[1,2.833],[0.833,3]],"color":"#57d939ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-67","rules":[],"visual":{"kind":"line","points":[[0.833,4],[1,4.167],[0.833,4.167]],"color":"#57d939ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-68","rules":[],"visual":{"kind":"line","points":[[1,4.167],[0.833,4.333]],"color":"#57d939ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-69","rules":[],"visual":{"kind":"line","points":[[0.833,4.5],[1,4.667],[0.833,4.667]],"color":"#57d939ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-70","rules":[],"visual":{"kind":"line","points":[[1,4.667],[0.833,4.833]],"color":"#57d939ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-71","rules":[],"visual":{"kind":"line","points":[[0.833,5],[1,5.167],[0.833,5.167]],"color":"#57d939ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-72","rules":[],"visual":{"kind":"line","points":[[1,5.167],[0.833,5.333]],"color":"#57d939ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-73","rules":[],"visual":{"kind":"line","points":[[0.833,5.5],[1,5.667],[0.833,5.667]],"color":"#57d939ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-74","rules":[],"visual":{"kind":"line","points":[[1,5.667],[0.833,5.833]],"color":"#57d939ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-75","rules":[],"visual":{"kind":"line","points":[[0.833,6],[1,6.167],[0.833,6.167]],"color":"#57d939ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-76","rules":[],"visual":{"kind":"line","points":[[1,6.167],[0.833,6.333]],"color":"#57d939ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-77","rules":[],"visual":{"kind":"line","points":[[0.833,6.5],[1,6.667],[0.833,6.667]],"color":"#57d939ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-78","rules":[],"visual":{"kind":"line","points":[[1,6.667],[0.833,6.833]],"color":"#57d939ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-79","rules":[],"visual":{"kind":"line","points":[[0.833,7],[1,7.167],[0.833,7.167]],"color":"#57d939ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-80","rules":[],"visual":{"kind":"line","points":[[1,7.167],[0.833,7.333]],"color":"#57d939ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-81","rules":[],"visual":{"kind":"line","points":[[0.833,7.5],[1,7.667],[0.833,7.667]],"color":"#57d939ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-82","rules":[],"visual":{"kind":"line","points":[[1,7.667],[0.833,7.833]],"color":"#57d939ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-83","rules":[],"visual":{"kind":"line","points":[[0.833,8],[1,8.167],[0.833,8.167]],"color":"#57d939ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-84","rules":[],"visual":{"kind":"line","points":[[1,8.167],[0.833,8.333]],"color":"#57d939ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-85","rules":[],"visual":{"kind":"line","points":[[0.833,8.5],[1,8.667],[0.833,8.667]],"color":"#57d939ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-86","rules":[],"visual":{"kind":"line","points":[[1,8.667],[0.833,8.833]],"color":"#57d939ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-87","rules":[],"visual":{"kind":"line","points":[[1,0],[1,3]],"color":"#57d939ff","thickness":12,"rounded":true,"layer":"over"}}
- {"id":"drawing-88","rules":[],"visual":{"kind":"line","points":[[1,4],[1,9]],"color":"#57d939ff","thickness":12,"rounded":true,"layer":"over"}}
- {"id":"drawing-89","rules":[],"visual":{"kind":"line","points":[[-0.167,8.167],[-0.167,9.167],[9.167,9.167],[9.167,-0.167],[-0.167,-0.167],[-0.167,8.167]],"color":"#FFFFFF","thickness":20,"rounded":true,"layer":"over"}}
- {"id":"drawing-90","rules":[],"visual":{"kind":"line","points":[[-0.167,8.167],[-0.167,9.167],[9.167,9.167],[9.167,-0.167],[-0.167,-0.167],[-0.167,8.167]],"color":"#d3b28aff","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-91","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.75,4.25],"width":0.32,"height":0.32,"rounded":true,"fill":"#fcc2ddff","thickness":0,"angle":0}}
- {"id":"drawing-92","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.75,4.25],"width":0.32,"height":0.32,"rounded":true,"fill":"#fcc2ddff","thickness":0,"angle":0}}
- {"id":"drawing-93","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.75,5.25],"width":0.32,"height":0.32,"rounded":true,"fill":"#fcc2ddff","thickness":0,"angle":0}}
- {"id":"drawing-94","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.75,5.75],"width":0.32,"height":0.32,"rounded":true,"fill":"#fcc2ddff","thickness":0,"angle":0}}
- {"id":"drawing-95","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.25,4.75],"width":0.32,"height":0.32,"rounded":true,"fill":"#fcc2ddff","thickness":0,"angle":0}}
- {"id":"drawing-96","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.25,5.75],"width":0.32,"height":0.32,"rounded":true,"fill":"#fcc2ddff","thickness":0,"angle":0}}
- {"id":"drawing-97","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.75,1.25],"width":0.32,"height":0.32,"rounded":true,"fill":"#fbd559ff","thickness":0,"angle":0}}
- {"id":"drawing-98","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.75,1.75],"width":0.32,"height":0.32,"rounded":true,"fill":"#fbd559ff","thickness":0,"angle":0}}
- {"id":"drawing-99","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.25,1.75],"width":0.32,"height":0.32,"rounded":true,"fill":"#fbd559ff","thickness":0,"angle":0}}
- {"id":"drawing-100","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.75,0.25],"width":0.32,"height":0.32,"rounded":true,"fill":"#fbd559ff","thickness":0,"angle":0}}
- {"id":"drawing-101","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.75,1.75],"width":0.32,"height":0.32,"rounded":true,"fill":"#fbd559ff","thickness":0,"angle":0}}
- {"id":"drawing-102","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.25,1.75],"width":0.32,"height":0.32,"rounded":true,"fill":"#fbd559ff","thickness":0,"angle":0}}
- {"id":"drawing-103","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.25,1.25],"width":0.32,"height":0.32,"rounded":true,"fill":"#fbd559ff","thickness":0,"angle":0}}
- {"id":"drawing-104","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.25,0.75],"width":0.32,"height":0.32,"rounded":true,"fill":"#fbd559ff","thickness":0,"angle":0}}
- {"id":"drawing-105","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.75,0.75],"width":0.32,"height":0.32,"rounded":true,"fill":"#fbd559ff","thickness":0,"angle":0}}
- {"id":"drawing-106","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.75,5.25],"width":0.32,"height":0.32,"rounded":true,"fill":"#fbd559ff","thickness":0,"angle":0}}
- {"id":"drawing-107","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.75,7.25],"width":0.32,"height":0.32,"rounded":true,"fill":"#fbd559ff","thickness":0,"angle":0}}
- {"id":"drawing-108","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.25,7.25],"width":0.32,"height":0.32,"rounded":true,"fill":"#fbd559ff","thickness":0,"angle":0}}
- {"id":"drawing-109","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.25,7.75],"width":0.32,"height":0.32,"rounded":true,"fill":"#fbd559ff","thickness":0,"angle":0}}
- {"id":"drawing-110","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.75,7.75],"width":0.32,"height":0.32,"rounded":true,"fill":"#fbd559ff","thickness":0,"angle":0}}
- {"id":"drawing-111","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.75,7.25],"width":0.32,"height":0.32,"rounded":true,"fill":"#fbd559ff","thickness":0,"angle":0}}
- {"id":"drawing-112","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.75,0.75],"width":0.32,"height":0.32,"rounded":true,"fill":"#fbd559ff","thickness":0,"angle":0}}
- {"id":"drawing-113","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.75,6.75],"width":0.32,"height":0.32,"rounded":true,"fill":"#fbd559ff","thickness":0,"angle":0}}
- {"id":"drawing-114","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.75,1.25],"width":0.32,"height":0.32,"rounded":true,"fill":"#fbd559ff","thickness":0,"angle":0}}
- {"id":"drawing-115","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.25,8.25],"width":0.32,"height":0.32,"rounded":true,"fill":"#fbd559ff","thickness":0,"angle":0}}
- {"id":"drawing-116","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.75,8.25],"width":0.32,"height":0.32,"rounded":true,"fill":"#fbd559ff","thickness":0,"angle":0}}
- {"id":"drawing-117","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.75,8.75],"width":0.32,"height":0.32,"rounded":true,"fill":"#fbd559ff","thickness":0,"angle":0}}
- {"id":"drawing-118","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.25,5.75],"width":0.32,"height":0.32,"rounded":true,"fill":"#f5fd77ff","thickness":0,"angle":0}}
- {"id":"drawing-119","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.75,1.25],"width":0.32,"height":0.32,"rounded":true,"fill":"#f5fd77ff","thickness":0,"angle":0}}
- {"id":"drawing-120","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.25,0.25],"width":0.32,"height":0.32,"rounded":true,"fill":"#f5fd77ff","thickness":0,"angle":0}}
- {"id":"drawing-121","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.75,0.25],"width":0.32,"height":0.32,"rounded":true,"fill":"#f5fd77ff","thickness":0,"angle":0}}
- {"id":"drawing-122","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.75,7.75],"width":0.32,"height":0.32,"rounded":true,"fill":"#f5fd77ff","thickness":0,"angle":0}}
- {"id":"drawing-123","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.25,7.75],"width":0.32,"height":0.32,"rounded":true,"fill":"#f5fd77ff","thickness":0,"angle":0}}
- {"id":"drawing-124","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.75,0.25],"width":0.32,"height":0.32,"rounded":true,"fill":"#f5fd77ff","thickness":0,"angle":0}}
- {"id":"drawing-125","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.75,6.25],"width":0.32,"height":0.32,"rounded":true,"fill":"#f5fd77ff","thickness":0,"angle":0}}
- {"id":"drawing-126","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.25,6.25],"width":0.32,"height":0.32,"rounded":true,"fill":"#f5fd77ff","thickness":0,"angle":0}}
- {"id":"drawing-127","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.75,4.75],"width":0.32,"height":0.32,"rounded":true,"fill":"#f5fd77ff","thickness":0,"angle":0}}
- {"id":"drawing-128","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.75,5.75],"width":0.32,"height":0.32,"rounded":true,"fill":"#f5fd77ff","thickness":0,"angle":0}}
- {"id":"drawing-129","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.75,1.75],"width":0.32,"height":0.32,"rounded":true,"fill":"#f5fd77ff","thickness":0,"angle":0}}
- {"id":"drawing-130","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.75,4.75],"width":0.32,"height":0.32,"rounded":true,"fill":"#77e4fdff","thickness":0,"angle":0}}
- {"id":"drawing-131","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.75,6.25],"width":0.32,"height":0.32,"rounded":true,"fill":"#77e4fdff","thickness":0,"angle":0}}
- {"id":"drawing-132","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.25,6.75],"width":0.32,"height":0.32,"rounded":true,"fill":"#77e4fdff","thickness":0,"angle":0}}
- {"id":"drawing-133","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.75,5.75],"width":0.32,"height":0.32,"rounded":true,"fill":"#77e4fdff","thickness":0,"angle":0}}
- {"id":"drawing-134","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.75,4.25],"width":0.32,"height":0.32,"rounded":true,"fill":"#77e4fdff","thickness":0,"angle":0}}
- {"id":"drawing-135","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.75,5.25],"width":0.32,"height":0.32,"rounded":true,"fill":"#77e4fdff","thickness":0,"angle":0}}
- {"id":"drawing-136","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.75,0.25],"width":0.32,"height":0.32,"rounded":true,"fill":"#77e4fdff","thickness":0,"angle":0}}
- {"id":"drawing-137","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.25,0.75],"width":0.32,"height":0.32,"rounded":true,"fill":"#77e4fdff","thickness":0,"angle":0}}
- {"id":"drawing-138","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.25,1.75],"width":0.32,"height":0.32,"rounded":true,"fill":"#77e4fdff","thickness":0,"angle":0}}
- {"id":"drawing-139","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.25,8.75],"width":0.32,"height":0.32,"rounded":true,"fill":"#77e4fdff","thickness":0,"angle":0}}
- {"id":"drawing-140","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.75,1.5],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"🦡","textColor":"#000000","fontSize":26,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-141","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.75,7.5],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"🦡","textColor":"#000000","fontSize":26,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-142","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.75,2.5],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"🦡","textColor":"#000000","fontSize":26,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-143","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.75,2.5],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"🦡","textColor":"#000000","fontSize":26,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-144","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.75,1.5],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"🦡","textColor":"#000000","fontSize":26,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-145","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.75,4.5],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"🦡","textColor":"#000000","fontSize":26,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-146","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.75,6.5],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"🦡","textColor":"#000000","fontSize":26,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-147","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.75,8.5],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"🦡","textColor":"#000000","fontSize":26,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-148","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.75,4.25],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":45,"text":"🐞","textColor":"#000000","fontSize":5,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-149","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.75,4.25],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":45,"text":"🐞","textColor":"#000000","fontSize":5,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-150","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.75,5.25],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":45,"text":"🐞","textColor":"#000000","fontSize":5,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-151","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.75,5.75],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":45,"text":"🐞","textColor":"#000000","fontSize":5,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-152","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.75,0.25],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":315,"text":"🪲","textColor":"#000000","fontSize":5,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-153","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.75,4.75],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"🐛","textColor":"#000000","fontSize":11,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-154","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.75,6.25],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"🐛","textColor":"#000000","fontSize":11,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-155","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.75,1.25],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"🪳","textColor":"#000000","fontSize":11,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-156","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.75,1.75],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"🪳","textColor":"#000000","fontSize":11,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-157","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.25,1.75],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"🪳","textColor":"#000000","fontSize":11,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-158","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.75,5.25],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"🪳","textColor":"#000000","fontSize":11,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-159","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.75,5.75],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"🐛","textColor":"#000000","fontSize":11,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-160","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.25,5.75],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":315,"text":"🪲","textColor":"#000000","fontSize":5,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-161","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.25,6.25],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":315,"text":"🪲","textColor":"#000000","fontSize":5,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-162","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.75,6.25],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":315,"text":"🪲","textColor":"#000000","fontSize":5,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-163","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.75,6.75],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"🪳","textColor":"#000000","fontSize":11,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-164","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.25,6.75],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"🐛","textColor":"#000000","fontSize":11,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-165","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.75,0.25],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"🐛","textColor":"#000000","fontSize":11,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-166","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.75,0.75],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"🪳","textColor":"#000000","fontSize":11,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-167","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.25,0.75],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"🪳","textColor":"#000000","fontSize":11,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-168","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.75,0.25],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":315,"text":"🪲","textColor":"#000000","fontSize":5,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-169","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.25,0.25],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":315,"text":"🪲","textColor":"#000000","fontSize":5,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-170","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.25,0.75],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"🐛","textColor":"#000000","fontSize":11,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-171","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.75,0.75],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"🪳","textColor":"#000000","fontSize":11,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-172","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.75,1.25],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"🪳","textColor":"#000000","fontSize":11,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-173","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.75,1.75],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":315,"text":"🪲","textColor":"#000000","fontSize":5,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-174","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.25,1.25],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"🪳","textColor":"#000000","fontSize":11,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-175","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.25,1.75],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"🐛","textColor":"#000000","fontSize":11,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-176","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.75,0.25],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"🪳","textColor":"#000000","fontSize":11,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-177","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.75,1.25],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":315,"text":"🪲","textColor":"#000000","fontSize":5,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-178","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.75,1.75],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"🪳","textColor":"#000000","fontSize":11,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-179","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.25,1.75],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"🪳","textColor":"#000000","fontSize":11,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-180","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.75,7.75],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"🪳","textColor":"#000000","fontSize":11,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-181","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.75,7.25],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"🪳","textColor":"#000000","fontSize":11,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-182","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.25,7.25],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"🪳","textColor":"#000000","fontSize":11,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-183","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.25,7.75],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"🪳","textColor":"#000000","fontSize":11,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-184","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.75,7.25],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"🪳","textColor":"#000000","fontSize":11,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-185","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.75,7.75],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":315,"text":"🪲","textColor":"#000000","fontSize":5,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-186","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.25,7.75],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":315,"text":"🪲","textColor":"#000000","fontSize":5,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-187","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.75,5.75],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":315,"text":"🪲","textColor":"#000000","fontSize":5,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-188","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.75,5.25],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"🐛","textColor":"#000000","fontSize":11,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-189","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.25,5.75],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":45,"text":"🐞","textColor":"#000000","fontSize":5,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-190","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.75,4.75],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":315,"text":"🪲","textColor":"#000000","fontSize":5,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-191","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.75,4.25],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"🐛","textColor":"#000000","fontSize":11,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-192","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.25,4.75],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":45,"text":"🐞","textColor":"#000000","fontSize":5,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-193","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.25,8.25],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"🪳","textColor":"#000000","fontSize":11,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-194","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.75,8.25],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"🪳","textColor":"#000000","fontSize":11,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-195","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.75,8.75],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"🪳","textColor":"#000000","fontSize":11,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-196","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.25,8.75],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"🐛","textColor":"#000000","fontSize":11,"textStroke":"#ffffff","textStrokeWidth":1}}
```

- Each badger lives in a sett of the digits 1-9. A sett is an underground region of nine orthogonally connected cells.
- Digits don’t repeat in a row, column or sett.
- Every badger contains a different digit. The digit on a badger equals the number of individual bugs in its sett.
- Each bug type has a specific value, to be deduced. The digit in a bug cell equals the sum of the bugs in that cell.
