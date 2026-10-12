---
format: open-rules
title: "RAT RUN: One Year Earlier"
setter: Marty Sears
source: https://sudokupad.app/kqd1h2hzev
case: https://sudoku-sleuth.com/cases/rat-run-one-year-earlier
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
kropki-1: kropki r7c1-r8c1 colour "black"
kropki-2: kropki r4c1-r5c1 colour "black"
kropki-3: kropki r1c5-r1c6 colour "black"
kropki-4: kropki r2c6-r3c6 colour "black"
kropki-5: kropki r3c6-r3c7 colour "black"
kropki-6: kropki r9c8-r9c9 colour "black"
kropki-7: kropki r8c9-r9c9 colour "black"
kropki-8: kropki r9c1-r9c2 colour "black"
kropki-9: kropki r2c3-r2c4 colour "black"
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[5.5,9.167],[9.167,9.167],[9.167,-0.167],[-0.167,-0.167],[-0.167,9.167],[5.5,9.167]],"color":"#d4bea5ff","thickness":23.04,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[-0.5,4],[-0.5,5]],"color":"#FFFFFF","thickness":2.56,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[4,-0.5],[5,-0.5]],"color":"#FFFFFF","thickness":2.56,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[9.5,4],[9.5,5]],"color":"#FFFFFF","thickness":2.56,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[4,9.5],[5,9.5]],"color":"#FFFFFF","thickness":2.56,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[1,7],[1,9],[2,9],[2,8],[1,8]],"color":"#ecececff","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[1,8],[0,8],[0,9],[1,9]],"color":"#ecececff","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[2,9],[9,9],[9,0],[8,0],[8,9]],"color":"#ecececff","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[3,9],[3,8],[2,8],[2,7],[0,7],[0,8]],"color":"#ecececff","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[1,7],[1,6],[2,6],[2,7],[3,7],[3,8],[4,8],[4,9]],"color":"#ecececff","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[5,9],[5,8],[4,8],[4,7],[3,7],[3,6],[2,6],[2,5],[3,5],[3,6]],"color":"#ecececff","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[6,9],[6,8],[5,8],[5,7],[4,7],[4,6],[3,6]],"color":"#ecececff","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[7,9],[7,8],[6,8],[6,7],[5,7],[5,6],[4,6],[4,5],[3,5],[3,4],[4,4],[4,5]],"color":"#ecececff","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[9,8],[7,8],[7,7],[6,7],[6,6],[5,6],[5,5],[4,5]],"color":"#ecececff","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[9,7],[7,7],[7,6],[6,6],[6,5],[5,5],[5,4],[4,4],[4,3],[5,3],[5,4]],"color":"#ecececff","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[9,6],[7,6],[7,5],[6,5],[6,4],[5,4]],"color":"#ecececff","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[9,5],[7,5],[7,4],[6,4],[6,3],[5,3],[5,2],[6,2],[6,3]],"color":"#ecececff","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[9,4],[7,4],[7,3],[6,3]],"color":"#ecececff","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[9,3],[7,3],[7,2],[6,2],[6,1],[7,1],[7,2]],"color":"#ecececff","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[9,2],[7,2]],"color":"#ecececff","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[9,1],[7,1],[7,0],[8,0]],"color":"#ecececff","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[0,7],[0,6],[1,6],[1,5],[2,5],[2,4],[3,4],[3,3],[4,3],[4,2],[5,2],[5,1],[6,1],[6,0],[7,0]],"color":"#ecececff","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[0,6],[0,5],[1,5],[1,4],[2,4],[2,3],[3,3],[3,2],[4,2],[4,1],[5,1],[5,0],[6,0]],"color":"#ecececff","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[0,5],[0,4],[1,4],[1,3],[2,3],[2,2],[3,2],[3,1],[4,1],[4,0],[5,0]],"color":"#ecececff","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[4,0],[3,0],[3,1],[2,1],[2,2],[1,2],[1,3],[0,3],[0,4]],"color":"#ecececff","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[0,3],[0,2],[1,2],[1,1],[2,1],[2,0],[3,0]],"color":"#ecececff","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[0,2],[0,1],[1,1],[1,0],[2,0]],"color":"#ecececff","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[0,1],[0,0],[1,0]],"color":"#ecececff","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"line","points":[[9,7],[9,9],[0,9],[0,0],[9,0],[9,7]],"color":"#c39c80ff","thickness":12.16,"rounded":true,"layer":"over"}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.75,3.167],"width":0.24,"height":0.24,"rounded":true,"fill":"#ffffff8d","thickness":0,"angle":0}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.833,7.167],"width":0.24,"height":0.24,"rounded":true,"fill":"#ffffff8d","thickness":0,"angle":0}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.833,4.167],"width":0.24,"height":0.24,"rounded":true,"fill":"#ffffff8d","thickness":0,"angle":0}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.833,6.167],"width":0.24,"height":0.24,"rounded":true,"fill":"#ffffff8d","thickness":0,"angle":0}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.833,1.167],"width":0.24,"height":0.24,"rounded":true,"fill":"#ffffff8d","thickness":0,"angle":0}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.833,1.167],"width":0.24,"height":0.24,"rounded":true,"fill":"#ffffff8d","thickness":0,"angle":0}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.833,7.167],"width":0.24,"height":0.24,"rounded":true,"fill":"#ffffff8d","thickness":0,"angle":0}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.833,7.167],"width":0.24,"height":0.24,"rounded":true,"fill":"#ffffff8d","thickness":0,"angle":0}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.75,4.167],"width":0.24,"height":0.24,"rounded":true,"fill":"#ffffff8d","thickness":0,"angle":0}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,7],"width":0.35,"height":0.41,"rounded":true,"fill":"#93e77fff","stroke":"#FFFFFF","thickness":3.2,"angle":17}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,5],"width":0.35,"height":0.41,"rounded":true,"fill":"#93e77fff","stroke":"#FFFFFF","thickness":3.2,"angle":17}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,1],"width":0.35,"height":0.41,"rounded":true,"fill":"#93e77fff","stroke":"#FFFFFF","thickness":3.2,"angle":17}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,0.5],"width":0.33,"height":0.33,"rounded":true,"fill":"#ff0606ff","stroke":"#FFFFFF","thickness":3.2,"angle":0}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,3],"width":0.35,"height":0.41,"rounded":true,"fill":"#93e77fff","stroke":"#FFFFFF","thickness":3.2,"angle":17}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,0.5],"width":0.33,"height":0.33,"rounded":true,"fill":"#000000","stroke":"#FFFFFF","thickness":3.2,"angle":0}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,0.5],"width":0.33,"height":0.33,"rounded":true,"fill":"#000000","stroke":"#FFFFFF","thickness":3.2,"angle":0}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,5],"width":0.33,"height":0.33,"rounded":true,"fill":"#000000","stroke":"#FFFFFF","thickness":3.2,"angle":0}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,5.5],"width":0.33,"height":0.33,"rounded":true,"fill":"#000000","stroke":"#FFFFFF","thickness":3.2,"angle":0}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,6],"width":0.33,"height":0.33,"rounded":true,"fill":"#000000","stroke":"#FFFFFF","thickness":3.2,"angle":0}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,8],"width":0.33,"height":0.33,"rounded":true,"fill":"#000000","stroke":"#FFFFFF","thickness":3.2,"angle":0}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,8.5],"width":0.33,"height":0.33,"rounded":true,"fill":"#000000","stroke":"#FFFFFF","thickness":3.2,"angle":0}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,1],"width":0.33,"height":0.33,"rounded":true,"fill":"#000000","stroke":"#FFFFFF","thickness":3.2,"angle":0}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,7.5],"width":0.33,"height":0.33,"rounded":true,"fill":"#ff0606ff","stroke":"#FFFFFF","thickness":3.2,"angle":0}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,2],"width":0.33,"height":0.33,"rounded":true,"fill":"#ff0606ff","stroke":"#FFFFFF","thickness":3.2,"angle":0}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,3],"width":0.33,"height":0.33,"rounded":true,"fill":"#000000","stroke":"#FFFFFF","thickness":3.2,"angle":0}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,1.5],"width":0.35,"height":0.41,"rounded":true,"fill":"#93e77fff","stroke":"#FFFFFF","thickness":3.2,"angle":17}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,7],"width":0.3,"height":0.36,"rounded":true,"fill":"#93e77fff","thickness":0,"angle":17}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,5],"width":0.3,"height":0.36,"rounded":true,"fill":"#93e77fff","thickness":0,"angle":17}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,1],"width":0.3,"height":0.36,"rounded":true,"fill":"#93e77fff","thickness":0,"angle":17}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,0.5],"width":0.28,"height":0.28,"rounded":true,"fill":"#ff0606ff","thickness":0,"angle":0}}
- {"id":"drawing-60","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,3],"width":0.3,"height":0.36,"rounded":true,"fill":"#93e77fff","thickness":0,"angle":17}}
- {"id":"drawing-69","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,7.5],"width":0.28,"height":0.28,"rounded":true,"fill":"#ff0606ff","thickness":0,"angle":0}}
- {"id":"drawing-70","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,2],"width":0.28,"height":0.28,"rounded":true,"fill":"#ff0606ff","thickness":0,"angle":0}}
- {"id":"drawing-71","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,1.5],"width":0.3,"height":0.36,"rounded":true,"fill":"#93e77fff","thickness":0,"angle":17}}
- {"id":"drawing-73","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.643,3.5],"width":0,"height":0.738,"rounded":true,"thickness":0,"angle":0,"text":"🐀","textColor":"#000000","fontSize":28,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-74","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.643,4.5],"width":0,"height":0.738,"rounded":true,"thickness":0,"angle":0,"text":"🐀","textColor":"#000000","fontSize":28,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-75","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.643,7.5],"width":0,"height":0.738,"rounded":true,"thickness":0,"angle":0,"text":"🐀","textColor":"#000000","fontSize":28,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-76","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.643,4.5],"width":0,"height":0.738,"rounded":true,"thickness":0,"angle":0,"text":"🐀","textColor":"#000000","fontSize":28,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-77","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.643,1.5],"width":0,"height":0.738,"rounded":true,"thickness":0,"angle":0,"text":"🐀","textColor":"#000000","fontSize":28,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-78","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.643,7.5],"width":0,"height":0.738,"rounded":true,"thickness":0,"angle":0,"text":"🐀","textColor":"#000000","fontSize":28,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-79","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.643,6.5],"width":0,"height":0.738,"rounded":true,"thickness":0,"angle":0,"text":"🐀","textColor":"#000000","fontSize":28,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-80","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.643,1.5],"width":0,"height":0.738,"rounded":true,"thickness":0,"angle":0,"text":"🐀","textColor":"#000000","fontSize":28,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-81","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.643,7.5],"width":0,"height":0.738,"rounded":true,"thickness":0,"angle":0,"text":"🐀","textColor":"#000000","fontSize":28,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-82","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.75,3.167],"width":0,"height":0.395,"rounded":true,"thickness":0,"angle":0,"text":"H","textColor":"#000000","fontSize":14.8}}
- {"id":"drawing-83","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.75,4.167],"width":0,"height":0.395,"rounded":true,"thickness":0,"angle":0,"text":"I","textColor":"#000000","fontSize":14.8}}
- {"id":"drawing-84","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.833,1.167],"width":0,"height":0.395,"rounded":true,"thickness":0,"angle":0,"text":"E","textColor":"#000000","fontSize":14.8}}
- {"id":"drawing-85","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.833,1.167],"width":0,"height":0.395,"rounded":true,"thickness":0,"angle":0,"text":"B","textColor":"#000000","fontSize":14.8}}
- {"id":"drawing-86","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.833,4.167],"width":0,"height":0.395,"rounded":true,"thickness":0,"angle":0,"text":"F","textColor":"#000000","fontSize":14.8}}
- {"id":"drawing-87","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.833,6.167],"width":0,"height":0.395,"rounded":true,"thickness":0,"angle":0,"text":"C","textColor":"#000000","fontSize":14.8}}
- {"id":"drawing-88","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.833,7.167],"width":0,"height":0.395,"rounded":true,"thickness":0,"angle":0,"text":"D","textColor":"#000000","fontSize":14.8}}
- {"id":"drawing-89","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.833,7.167],"width":0,"height":0.395,"rounded":true,"thickness":0,"angle":0,"text":"A","textColor":"#000000","fontSize":14.8}}
- {"id":"drawing-90","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.833,7.167],"width":0,"height":0.395,"rounded":true,"thickness":0,"angle":0,"text":"G","textColor":"#000000","fontSize":14.8}}
- {"id":"drawing-91","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.65,1.65],"width":0.88,"height":0.3,"rounded":false,"fill":"#00000029","thickness":0,"angle":358}}
- {"id":"drawing-92","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.65,3.65],"width":0.88,"height":0.3,"rounded":false,"fill":"#00000029","thickness":0,"angle":358}}
- {"id":"drawing-93","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.65,7.65],"width":0.88,"height":0.3,"rounded":false,"fill":"#00000029","thickness":0,"angle":358}}
- {"id":"drawing-94","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.65,0.65],"width":0.88,"height":0.3,"rounded":false,"fill":"#00000029","thickness":0,"angle":2}}
- {"id":"drawing-95","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.65,2.65],"width":0.88,"height":0.3,"rounded":false,"fill":"#00000029","thickness":0,"angle":2}}
- {"id":"drawing-96","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.65,4.65],"width":0.88,"height":0.3,"rounded":false,"fill":"#00000029","thickness":0,"angle":2}}
- {"id":"drawing-97","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.65,6.65],"width":0.88,"height":0.3,"rounded":false,"fill":"#00000029","thickness":0,"angle":2}}
- {"id":"drawing-98","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.65,8.65],"width":0.88,"height":0.3,"rounded":false,"fill":"#00000029","thickness":0,"angle":2}}
- {"id":"drawing-99","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.65,5.65],"width":0.88,"height":0.3,"rounded":false,"fill":"#00000029","thickness":0,"angle":358}}
- {"id":"drawing-100","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.6,0.6],"width":0.88,"height":0.3,"rounded":false,"fill":"#f9f0afff","thickness":0,"angle":2}}
- {"id":"drawing-101","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.6,2.6],"width":0.88,"height":0.3,"rounded":false,"fill":"#f9f0afff","thickness":0,"angle":2}}
- {"id":"drawing-102","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.6,4.6],"width":0.88,"height":0.3,"rounded":false,"fill":"#f9f0afff","thickness":0,"angle":2}}
- {"id":"drawing-103","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.6,6.6],"width":0.88,"height":0.3,"rounded":false,"fill":"#f9f0afff","thickness":0,"angle":2}}
- {"id":"drawing-104","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.6,8.6],"width":0.88,"height":0.3,"rounded":false,"fill":"#f9f0afff","thickness":0,"angle":2}}
- {"id":"drawing-105","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.6,7.6],"width":0.88,"height":0.3,"rounded":false,"fill":"#f9f0afff","thickness":0,"angle":358}}
- {"id":"drawing-106","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.6,5.6],"width":0.88,"height":0.3,"rounded":false,"fill":"#f9f0afff","thickness":0,"angle":358}}
- {"id":"drawing-107","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.6,3.6],"width":0.88,"height":0.3,"rounded":false,"fill":"#f9f0afff","thickness":0,"angle":358}}
- {"id":"drawing-108","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.6,1.6],"width":0.88,"height":0.3,"rounded":false,"fill":"#f9f0afff","thickness":0,"angle":358}}
- {"id":"drawing-109","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.6,0.6],"width":0,"height":0.348,"rounded":true,"thickness":0,"angle":2,"text":"ALBIE","textColor":"#000000","fontSize":13}}
- {"id":"drawing-110","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.6,1.6],"width":0,"height":0.348,"rounded":true,"thickness":0,"angle":357,"text":"BRUSH","textColor":"#000000","fontSize":13}}
- {"id":"drawing-111","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.6,2.6],"width":0,"height":0.348,"rounded":true,"thickness":0,"angle":2,"text":"CONKER","textColor":"#000000","fontSize":13}}
- {"id":"drawing-112","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.6,3.6],"width":0,"height":0.348,"rounded":true,"thickness":0,"angle":357,"text":"DYLAN","textColor":"#000000","fontSize":13}}
- {"id":"drawing-113","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.6,4.6],"width":0,"height":0.348,"rounded":true,"thickness":0,"angle":2,"text":"ELBA","textColor":"#000000","fontSize":13}}
- {"id":"drawing-114","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.6,5.6],"width":0,"height":0.348,"rounded":true,"thickness":0,"angle":357,"text":"FINKZ","textColor":"#000000","fontSize":13}}
- {"id":"drawing-115","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.6,6.6],"width":0,"height":0.348,"rounded":true,"thickness":0,"angle":2,"text":"GLITCH","textColor":"#000000","fontSize":13}}
- {"id":"drawing-116","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.6,7.6],"width":0,"height":0.348,"rounded":true,"thickness":0,"angle":357,"text":"HOLLY","textColor":"#000000","fontSize":13}}
- {"id":"drawing-117","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.6,8.6],"width":0,"height":0.348,"rounded":true,"thickness":0,"angle":2,"text":"IBBLE","textColor":"#000000","fontSize":13}}
```

For the final preliminary 'free-roam' trial, the nine shortlisted rats were placed in a 9x9 space, and their movements were observed and recorded. Each of the digits 1-9 appeared in each row and column.

OBSERVATIONS:

• Every cell in the grid was visited, exactly once.
• No rat's path contained any repeated digits.
• No rat chose to move diagonally at any point.
• Every 2x2 area was visited by at least 2 rats.
• No two rats started on the same digit.
• No two rats ended on the same digit.
• All blackcurrants and redcurrants were eaten.
• No grapes were eaten.

BLACKCURRANTS:
If a blackcurrant sits between two digits, one is double the other.

REDCURRANTS:
If a redcurrant sits between two digits, one is odd and the other is even.

GRAPES:
If a grape sits between two digits, they have a difference of at least 5.
