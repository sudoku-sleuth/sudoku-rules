---
format: open-rules
title: "Inner Squish: Index Lines"
setter: Marty Sears
source: https://sudokupad.app/1rw863iyes
case: https://sudoku-sleuth.com/cases/inner-squish-index-lines
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
index-line-1: index-line r5c8-r4c7-r3c6-r2c5
index-line-2: index-line r3c8-r2c7
index-line-3: index-line r8c9-r7c8-r6c7-r5c6-r4c5-r3c4-r2c3-r1c2
index-line-4: index-line r4c1-r5c2-r6c3-r7c4-r8c5-r9c4
index-line-5: index-line r8c3-r9c3-r9c2-r8c1
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[9.167,8.5],[9.167,9.167],[-0.167,9.167],[-0.167,-0.167],[9.167,-0.167],[9.167,8.5]],"color":"#00b2abba","thickness":14.08,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[9.167,8.5],[9.167,9.167],[-0.167,9.167],[-0.167,-0.167],[9.167,-0.167],[9.167,8.5]],"color":"#00b2ab61","thickness":28.8,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[-0.5,4.25],[-0.5,4.75]],"color":"#FFFFFF","thickness":9.6,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[4.25,-0.5],[4.75,-0.5]],"color":"#FFFFFF","thickness":9.6,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[9.5,4.25],[9.5,4.75]],"color":"#FFFFFF","thickness":9.6,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[4.25,9.5],[4.75,9.5]],"color":"#FFFFFF","thickness":9.6,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[7.5,0.5],[8.5,1.5],[8.5,2.5],[7.5,2.5]],"color":"#f067f0ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[3.5,0.5],[7.5,4.5],[8.5,3.5]],"color":"#f067f0ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[0.5,1.5],[7.5,8.5]],"color":"#f067f0ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[1.5,4.5],[4.5,7.5]],"color":"#f067f0ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[1.5,6.5],[2.5,7.5]],"color":"#f067f0ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[1,7],[1,9],[2,9],[2,8],[1,8]],"color":"#efefefff","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[1,8],[0,8],[0,9],[1,9]],"color":"#efefefff","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[2,9],[9,9],[9,0],[8,0],[8,9]],"color":"#efefefff","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[3,9],[3,8],[2,8],[2,7],[0,7],[0,8]],"color":"#efefefff","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[1,7],[1,6],[2,6],[2,7],[3,7],[3,8],[4,8],[4,9]],"color":"#efefefff","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[5,9],[5,8],[4,8],[4,7],[3,7],[3,6],[2,6],[2,5],[3,5],[3,6]],"color":"#efefefff","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[6,9],[6,8],[5,8],[5,7],[4,7],[4,6],[3,6]],"color":"#efefefff","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[7,9],[7,8],[6,8],[6,7],[5,7],[5,6],[4,6],[4,5],[3,5],[3,4],[4,4],[4,5]],"color":"#efefefff","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[9,8],[7,8],[7,7],[6,7],[6,6],[5,6],[5,5],[4,5]],"color":"#efefefff","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[9,7],[7,7],[7,6],[6,6],[6,5],[5,5],[5,4],[4,4],[4,3],[5,3],[5,4]],"color":"#efefefff","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[9,6],[7,6],[7,5],[6,5],[6,4],[5,4]],"color":"#efefefff","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[9,5],[7,5],[7,4],[6,4],[6,3],[5,3],[5,2],[6,2],[6,3]],"color":"#efefefff","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[9,4],[7,4],[7,3],[6,3]],"color":"#efefefff","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[9,3],[7,3],[7,2],[6,2],[6,1],[7,1],[7,2]],"color":"#efefefff","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[9,2],[7,2]],"color":"#efefefff","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[9,1],[7,1],[7,0],[8,0]],"color":"#efefefff","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[0,7],[0,6],[1,6],[1,5],[2,5],[2,4],[3,4],[3,3],[4,3],[4,2],[5,2],[5,1],[6,1],[6,0],[7,0]],"color":"#efefefff","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"line","points":[[0,6],[0,5],[1,5],[1,4],[2,4],[2,3],[3,3],[3,2],[4,2],[4,1],[5,1],[5,0],[6,0]],"color":"#efefefff","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"line","points":[[0,5],[0,4],[1,4],[1,3],[2,3],[2,2],[3,2],[3,1],[4,1],[4,0],[5,0]],"color":"#efefefff","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"line","points":[[0,4],[0,3],[1,3],[1,2],[2,2],[2,1],[3,1],[3,0],[4,0]],"color":"#efefefff","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"line","points":[[0,3],[0,2],[1,2],[1,1],[2,1],[2,0],[3,0]],"color":"#efefefff","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"line","points":[[0,2],[0,1],[1,1],[1,0],[2,0]],"color":"#efefefff","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"line","points":[[0,1],[0,0],[1,0]],"color":"#efefefff","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"line","points":[[9,0],[9,9],[0,9],[0,0],[9,0]],"color":"#00b2abff","thickness":14.08,"rounded":true,"layer":"over"}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"line","points":[[7.5,8.167],[7.833,8.5],[7.5,8.833],[7.167,8.5],[7.5,8.167]],"color":"#FFFFFF","thickness":7.04,"rounded":true,"layer":"over"}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"line","points":[[2.5,7.167],[2.833,7.5],[2.5,7.833],[2.167,7.5],[2.5,7.167]],"color":"#FFFFFF","thickness":7.04,"rounded":true,"layer":"over"}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"line","points":[[4.333,7.667],[4.5,7.833],[4.833,7.5],[4.5,7.167],[4.167,7.5],[4.333,7.667]],"color":"#FFFFFF","thickness":7.04,"rounded":true,"layer":"over"}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"line","points":[[7.5,2.167],[7.833,2.5],[7.5,2.833],[7.167,2.5],[7.5,2.167]],"color":"#FFFFFF","thickness":7.04,"rounded":true,"layer":"over"}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"line","points":[[3.167,0.5],[3.5,0.833],[3.833,0.5],[3.5,0.167],[3.167,0.5]],"color":"#FFFFFF","thickness":7.04,"rounded":true,"layer":"over"}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"line","points":[[3.5,3.333],[3.5,3.667]],"color":"#c2abe0ff","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"line","points":[[3.667,3.5],[3.333,3.5]],"color":"#c2abe0ff","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"line","points":[[5.5,3.333],[5.5,3.667]],"color":"#c2abe0ff","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"line","points":[[5.667,3.5],[5.333,3.5]],"color":"#c2abe0ff","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"line","points":[[3.833,3.5],[4.167,3.5]],"color":"#c2abe0ff","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"line","points":[[4.333,3.5],[4.667,3.5]],"color":"#c2abe0ff","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"line","points":[[4.833,3.5],[5.167,3.5]],"color":"#c2abe0ff","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"line","points":[[3.5,3.167],[3.5,2.833]],"color":"#c2abe0ff","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"line","points":[[3.5,2.667],[3.5,2.333]],"color":"#c2abe0ff","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-60","rules":[],"visual":{"kind":"line","points":[[3.5,2.167],[3.5,1.833]],"color":"#c2abe0ff","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-61","rules":[],"visual":{"kind":"line","points":[[3.5,1.667],[3.5,1.333]],"color":"#c2abe0ff","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-62","rules":[],"visual":{"kind":"line","points":[[3.5,1.167],[3.5,1],[8,1],[8,1.167]],"color":"#c2abe0ff","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-63","rules":[],"visual":{"kind":"line","points":[[3.5,1],[1,1],[1,4.167]],"color":"#c2abe0ff","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-64","rules":[],"visual":{"kind":"line","points":[[5.5,1],[5.5,1.167]],"color":"#c2abe0ff","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-65","rules":[],"visual":{"kind":"line","points":[[8,1],[8,2.167]],"color":"#c2abe0ff","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-66","rules":[],"visual":{"kind":"line","points":[[1,3.5],[1.167,3.5]],"color":"#c2abe0ff","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-67","rules":[],"visual":{"kind":"line","points":[[1,4],[1,8],[8,8],[8,5],[8,5.167]],"color":"#c2abe0ff","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-68","rules":[],"visual":{"kind":"line","points":[[8,3.167],[8,1.833]],"color":"#c2abe0ff","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-69","rules":[],"visual":{"kind":"line","points":[[8,4.167],[8,2.833]],"color":"#c2abe0ff","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-70","rules":[],"visual":{"kind":"line","points":[[8,3.833],[8,5],[8,4.833]],"color":"#c2abe0ff","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-71","rules":[],"visual":{"kind":"line","points":[[8,1.667],[8,1.333]],"color":"#c2abe0ff","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-72","rules":[],"visual":{"kind":"line","points":[[8,2.333],[8,2.667]],"color":"#c2abe0ff","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-73","rules":[],"visual":{"kind":"line","points":[[8,3.333],[8,3.667]],"color":"#c2abe0ff","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-74","rules":[],"visual":{"kind":"line","points":[[8,3.5],[7.833,3.5]],"color":"#c2abe0ff","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-75","rules":[],"visual":{"kind":"line","points":[[7.667,3.5],[7.333,3.5]],"color":"#c2abe0ff","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-76","rules":[],"visual":{"kind":"line","points":[[7.167,3.5],[6.833,3.5]],"color":"#c2abe0ff","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-77","rules":[],"visual":{"kind":"line","points":[[6.667,3.5],[6.333,3.5]],"color":"#c2abe0ff","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-78","rules":[],"visual":{"kind":"line","points":[[6.167,3.5],[5.833,3.5]],"color":"#c2abe0ff","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-79","rules":[],"visual":{"kind":"line","points":[[5.5,1.333],[5.5,1.667]],"color":"#c2abe0ff","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-80","rules":[],"visual":{"kind":"line","points":[[5.5,1.833],[5.5,2.167]],"color":"#c2abe0ff","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-81","rules":[],"visual":{"kind":"line","points":[[5.5,2.333],[5.5,2.667]],"color":"#c2abe0ff","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-82","rules":[],"visual":{"kind":"line","points":[[5.5,2.833],[5.5,3.167]],"color":"#c2abe0ff","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-83","rules":[],"visual":{"kind":"line","points":[[5.5,3.833],[5.5,4.167]],"color":"#c2abe0ff","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-84","rules":[],"visual":{"kind":"line","points":[[5.5,4.333],[5.5,4.667]],"color":"#c2abe0ff","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-85","rules":[],"visual":{"kind":"line","points":[[5.5,5.167],[5.5,4.833]],"color":"#c2abe0ff","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-86","rules":[],"visual":{"kind":"line","points":[[5.5,5.333],[5.5,5.667]],"color":"#c2abe0ff","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-87","rules":[],"visual":{"kind":"line","points":[[5.667,5.5],[5.333,5.5]],"color":"#c2abe0ff","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-88","rules":[],"visual":{"kind":"line","points":[[5.833,5.5],[6.167,5.5]],"color":"#c2abe0ff","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-89","rules":[],"visual":{"kind":"line","points":[[6.333,5.5],[6.667,5.5]],"color":"#c2abe0ff","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-90","rules":[],"visual":{"kind":"line","points":[[6.833,5.5],[7.167,5.5]],"color":"#c2abe0ff","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-91","rules":[],"visual":{"kind":"line","points":[[7.333,5.5],[7.667,5.5]],"color":"#c2abe0ff","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-92","rules":[],"visual":{"kind":"line","points":[[7.833,5.5],[8,5.5],[8,5.667]],"color":"#c2abe0ff","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-93","rules":[],"visual":{"kind":"line","points":[[8,5.5],[8,5.333]],"color":"#c2abe0ff","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-94","rules":[],"visual":{"kind":"line","points":[[8,4.333],[8,4.667]],"color":"#c2abe0ff","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-95","rules":[],"visual":{"kind":"line","points":[[5.5,5.833],[5.5,6.167]],"color":"#c2abe0ff","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-96","rules":[],"visual":{"kind":"line","points":[[5.5,6.333],[5.5,6.667]],"color":"#c2abe0ff","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-97","rules":[],"visual":{"kind":"line","points":[[5.5,6.833],[5.5,7.167]],"color":"#c2abe0ff","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-98","rules":[],"visual":{"kind":"line","points":[[5.5,7.333],[5.5,7.667]],"color":"#c2abe0ff","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-99","rules":[],"visual":{"kind":"line","points":[[5.5,7.833],[5.5,8]],"color":"#c2abe0ff","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-100","rules":[],"visual":{"kind":"line","points":[[5.167,5.5],[4.833,5.5]],"color":"#c2abe0ff","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-101","rules":[],"visual":{"kind":"line","points":[[4.667,5.5],[4.333,5.5]],"color":"#c2abe0ff","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-102","rules":[],"visual":{"kind":"line","points":[[4.167,5.5],[3.833,5.5]],"color":"#c2abe0ff","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-103","rules":[],"visual":{"kind":"line","points":[[3.667,5.5],[3.5,5.5],[3.5,5.667]],"color":"#c2abe0ff","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-104","rules":[],"visual":{"kind":"line","points":[[3.333,5.5],[3.5,5.5],[3.5,5.333]],"color":"#c2abe0ff","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-105","rules":[],"visual":{"kind":"line","points":[[3.5,5.167],[3.5,4.833]],"color":"#c2abe0ff","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-106","rules":[],"visual":{"kind":"line","points":[[3.5,4.667],[3.5,4.333]],"color":"#c2abe0ff","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-107","rules":[],"visual":{"kind":"line","points":[[3.5,3.833],[3.5,4.167]],"color":"#c2abe0ff","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-108","rules":[],"visual":{"kind":"line","points":[[3.167,3.5],[2.833,3.5]],"color":"#c2abe0ff","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-109","rules":[],"visual":{"kind":"line","points":[[2.667,3.5],[2.333,3.5]],"color":"#c2abe0ff","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-110","rules":[],"visual":{"kind":"line","points":[[2.167,3.5],[1.833,3.5]],"color":"#c2abe0ff","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-111","rules":[],"visual":{"kind":"line","points":[[1.333,3.5],[1.667,3.5]],"color":"#c2abe0ff","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-112","rules":[],"visual":{"kind":"line","points":[[1,5.5],[1.167,5.5]],"color":"#c2abe0ff","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-113","rules":[],"visual":{"kind":"line","points":[[1.333,5.5],[1.667,5.5]],"color":"#c2abe0ff","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-114","rules":[],"visual":{"kind":"line","points":[[1.833,5.5],[2.167,5.5]],"color":"#c2abe0ff","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-115","rules":[],"visual":{"kind":"line","points":[[2.333,5.5],[2.667,5.5]],"color":"#c2abe0ff","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-116","rules":[],"visual":{"kind":"line","points":[[2.833,5.5],[3.167,5.5]],"color":"#c2abe0ff","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-117","rules":[],"visual":{"kind":"line","points":[[3.5,5.833],[3.5,6.167]],"color":"#c2abe0ff","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-118","rules":[],"visual":{"kind":"line","points":[[3.5,6.333],[3.5,6.667]],"color":"#c2abe0ff","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-119","rules":[],"visual":{"kind":"line","points":[[3.5,6.833],[3.5,7.167]],"color":"#c2abe0ff","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-120","rules":[],"visual":{"kind":"line","points":[[3.5,7.333],[3.5,7.667]],"color":"#c2abe0ff","thickness":4.48,"rounded":true,"layer":"over"}}
- {"id":"drawing-121","rules":[],"visual":{"kind":"line","points":[[3.5,7.833],[3.5,8]],"color":"#c2abe0ff","thickness":4.48,"rounded":true,"layer":"over"}}
```

Latin square: fill the 9x9 grid with the digits 1-9 so that digits don't repeat in any row or column.

Squishdoku: in the purple 7x7 grid, digits may not repeat in a 3x3 box. These boxes overlap - cells on box borders (dashed lines) are shared between multiple boxes.

Index lines:
Along a teal line, the digit in position N (starting from the diamond) indicates the position along the line where the digit N appears. Eg: A 5 on the diamond (position 1) indicates that position 5 contains a 1.
