---
format: open-rules
title: Remove and Repeat
setter: Marty Sears
source: https://sudokupad.app/gzh1mds80w
case: https://sudoku-sleuth.com/cases/remove-and-repeat
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Our reading of these rules doesn't match the published answer yet; we're checking it.
board:
  rows: 8
  cols: 8
  symbols:
    - 1
    - 2
    - 3
    - 4
    - 5
    - 6
    - 7
    - 8
exported: 6502674df4c6afd4d32ae9f5b901fbd5
---

```rules
unique-1: unique r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8
unique-2: unique r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8
unique-3: unique r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8
unique-4: unique r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8
unique-5: unique r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8
unique-6: unique r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8
unique-7: unique r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8
unique-8: unique r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8
unique-9: unique r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1
unique-10: unique r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2
unique-11: unique r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3
unique-12: unique r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4-r8c4
unique-13: unique r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5
unique-14: unique r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6-r8c6
unique-15: unique r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7
unique-16: unique r1c8-r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8
cage-1: cage r2c7-r3c7-r4c7-r5c7-r6c7-r7c7 repeats false total 19 connected true
cage-2: cage r6c6-r7c6 repeats false total 7 connected true
kropki-1: kropki r2c2-r3c2 black
kropki-2: kropki r4c2-r5c2 black
kropki-3: kropki r6c2-r7c2 black
kropki-4: kropki r6c4-r7c4 black
kropki-5: kropki r5c5-r6c5 black
kropki-6: kropki r4c6-r4c7 black
kropki-7: kropki r5c6-r5c7 white
kropki-8: kropki r5c4-r5c5 white
kropki-9: kropki r7c3-r7c4 white
kropki-10: kropki r3c2-r4c2 white
kropki-11: kropki r5c2-r5c3 white
renban-1: renban r4c3-r4c4-r4c5-r4c6-r4c7
renban-2: renban r7c2-r7c3-r6c3-r5c3-r4c3-r3c3-r2c3
renban-3: renban r3c5-r3c6-r3c7
pair-1: pair r2c3-r2c4 sum 10
pair-2: pair r2c5-r2c6 sum 10
pair-3: pair r2c4-r3c4 sum 10
pair-4: pair r2c5-r3c5 sum 10
```

```drawing
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[1,4],[1,7],[7,7],[7,8],[8,8],[8,7],[7,7]],"color":"#FFFFFF","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[1,5],[0,5],[0,7],[1,7],[1,8],[2,8],[2,7]],"color":"#FFFFFF","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[1,6],[0,6]],"color":"#FFFFFF","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[1,8],[0,8],[0,7]],"color":"#FFFFFF","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[3,7],[3,8],[2,8]],"color":"#FFFFFF","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[4,7],[4,8],[3,8]],"color":"#FFFFFF","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[5,7],[5,8],[4,8]],"color":"#FFFFFF","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[6,7],[6,8],[5,8]],"color":"#FFFFFF","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[7,7],[7,6],[8,6],[8,7]],"color":"#FFFFFF","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[6,8],[7,8]],"color":"#FFFFFF","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[0,5],[0,4],[1,4],[1,1],[7,1],[7,6]],"color":"#FFFFFF","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[8,6],[8,5],[7,5]],"color":"#FFFFFF","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[0,4],[0,3],[1,3]],"color":"#FFFFFF","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[1,2],[0,2],[0,3]],"color":"#FFFFFF","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[2,1],[2,0],[3,0],[3,1]],"color":"#FFFFFF","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[4,1],[4,0],[3,0]],"color":"#FFFFFF","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[5,1],[5,0],[4,0]],"color":"#FFFFFF","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[6,1],[6,0],[5,0]],"color":"#FFFFFF","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[7,2],[8,2],[8,1],[7,1],[7,0],[6,0]],"color":"#FFFFFF","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[8,1],[8,0],[7,0]],"color":"#FFFFFF","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[7,3],[8,3],[8,2]],"color":"#FFFFFF","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[7,4],[8,4],[8,3]],"color":"#FFFFFF","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[8,4],[8,5]],"color":"#FFFFFF","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[0,2],[0,1],[1,1],[1,0],[2,0]],"color":"#FFFFFF","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[0,1],[0,0],[1,0]],"color":"#FFFFFF","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"line","points":[[1,5],[1,7],[7,7],[7,1],[1,1],[1,5]],"color":"#000000","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,0.25],"width":0.72,"height":0.7,"rounded":false,"fill":"#5fe6fdff","thickness":0,"angle":0}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,0.25],"width":0.72,"height":0.7,"rounded":false,"fill":"#5fe6fdff","thickness":0,"angle":0}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,0.25],"width":0.72,"height":0.7,"rounded":false,"fill":"#5fe6fdff","thickness":0,"angle":0}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,0.25],"width":0.72,"height":0.7,"rounded":false,"fill":"#5fe6fdff","thickness":0,"angle":0}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,0.25],"width":0.72,"height":0.7,"rounded":false,"fill":"#5fe6fdff","thickness":0,"angle":0}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,0.25],"width":0.72,"height":0.7,"rounded":false,"fill":"#5fe6fdff","thickness":0,"angle":0}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.25,2.5],"width":0.7,"height":0.72,"rounded":false,"fill":"#5fe6fdff","thickness":0,"angle":0}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.25,3.5],"width":0.7,"height":0.72,"rounded":false,"fill":"#5fe6fdff","thickness":0,"angle":0}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.25,4.5],"width":0.7,"height":0.72,"rounded":false,"fill":"#5fe6fdff","thickness":0,"angle":0}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.25,5.5],"width":0.7,"height":0.72,"rounded":false,"fill":"#5fe6fdff","thickness":0,"angle":0}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.25,6.5],"width":0.7,"height":0.72,"rounded":false,"fill":"#5fe6fdff","thickness":0,"angle":0}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,7.75],"width":0.72,"height":0.7,"rounded":false,"fill":"#ff6565ff","thickness":0,"angle":0}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,7.75],"width":0.72,"height":0.7,"rounded":false,"fill":"#ff6565ff","thickness":0,"angle":0}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,7.75],"width":0.72,"height":0.7,"rounded":false,"fill":"#ff6565ff","thickness":0,"angle":0}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,7.75],"width":0.72,"height":0.7,"rounded":false,"fill":"#ff6565ff","thickness":0,"angle":0}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,7.75],"width":0.72,"height":0.7,"rounded":false,"fill":"#ff6565ff","thickness":0,"angle":0}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,7.75],"width":0.72,"height":0.7,"rounded":false,"fill":"#ff6565ff","thickness":0,"angle":0}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.75,1.5],"width":0.7,"height":0.72,"rounded":false,"fill":"#ff6565ff","thickness":0,"angle":0}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.75,2.5],"width":0.7,"height":0.72,"rounded":false,"fill":"#ff6565ff","thickness":0,"angle":0}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.75,3.5],"width":0.7,"height":0.72,"rounded":false,"fill":"#ff6565ff","thickness":0,"angle":0}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.75,4.5],"width":0.7,"height":0.72,"rounded":false,"fill":"#ff6565ff","thickness":0,"angle":0}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.75,5.5],"width":0.7,"height":0.72,"rounded":false,"fill":"#ff6565ff","thickness":0,"angle":0}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.75,6.5],"width":0.7,"height":0.72,"rounded":false,"fill":"#ff6565ff","thickness":0,"angle":0}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,0.625],"width":0.5,"height":0.5,"rounded":false,"fill":"#5fe6fdff","thickness":0,"angle":45}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,0.625],"width":0.5,"height":0.5,"rounded":false,"fill":"#5fe6fdff","thickness":0,"angle":45}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,0.625],"width":0.5,"height":0.5,"rounded":false,"fill":"#5fe6fdff","thickness":0,"angle":45}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,0.625],"width":0.5,"height":0.5,"rounded":false,"fill":"#5fe6fdff","thickness":0,"angle":45}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,0.625],"width":0.5,"height":0.5,"rounded":false,"fill":"#5fe6fdff","thickness":0,"angle":45}}
- {"id":"drawing-60","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,0.625],"width":0.5,"height":0.5,"rounded":false,"fill":"#5fe6fdff","thickness":0,"angle":45}}
- {"id":"drawing-61","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.375,1.5],"width":0.5,"height":0.5,"rounded":false,"fill":"#ff6565ff","thickness":0,"angle":45}}
- {"id":"drawing-62","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.375,2.5],"width":0.5,"height":0.5,"rounded":false,"fill":"#ff6565ff","thickness":0,"angle":45}}
- {"id":"drawing-63","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.375,3.5],"width":0.5,"height":0.5,"rounded":false,"fill":"#ff6565ff","thickness":0,"angle":45}}
- {"id":"drawing-64","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.375,4.5],"width":0.5,"height":0.5,"rounded":false,"fill":"#ff6565ff","thickness":0,"angle":45}}
- {"id":"drawing-65","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.375,5.5],"width":0.5,"height":0.5,"rounded":false,"fill":"#ff6565ff","thickness":0,"angle":45}}
- {"id":"drawing-66","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.375,6.5],"width":0.5,"height":0.5,"rounded":false,"fill":"#ff6565ff","thickness":0,"angle":45}}
- {"id":"drawing-67","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.625,2.5],"width":0.5,"height":0.5,"rounded":false,"fill":"#5fe6fdff","thickness":0,"angle":45}}
- {"id":"drawing-68","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.625,3.5],"width":0.5,"height":0.5,"rounded":false,"fill":"#5fe6fdff","thickness":0,"angle":45}}
- {"id":"drawing-69","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.625,4.5],"width":0.5,"height":0.5,"rounded":false,"fill":"#5fe6fdff","thickness":0,"angle":45}}
- {"id":"drawing-70","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.625,5.5],"width":0.5,"height":0.5,"rounded":false,"fill":"#5fe6fdff","thickness":0,"angle":45}}
- {"id":"drawing-71","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.625,6.5],"width":0.5,"height":0.5,"rounded":false,"fill":"#5fe6fdff","thickness":0,"angle":45}}
- {"id":"drawing-72","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,7.375],"width":0.5,"height":0.5,"rounded":false,"fill":"#ff6565ff","thickness":0,"angle":45}}
- {"id":"drawing-73","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,7.375],"width":0.5,"height":0.5,"rounded":false,"fill":"#ff6565ff","thickness":0,"angle":45}}
- {"id":"drawing-74","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,7.375],"width":0.5,"height":0.5,"rounded":false,"fill":"#ff6565ff","thickness":0,"angle":45}}
- {"id":"drawing-75","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,7.375],"width":0.5,"height":0.5,"rounded":false,"fill":"#ff6565ff","thickness":0,"angle":45}}
- {"id":"drawing-76","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,7.375],"width":0.5,"height":0.5,"rounded":false,"fill":"#ff6565ff","thickness":0,"angle":45}}
- {"id":"drawing-77","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,7.375],"width":0.5,"height":0.5,"rounded":false,"fill":"#ff6565ff","thickness":0,"angle":45}}
- {"id":"drawing-78","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.625,1.5],"width":0.5,"height":0.5,"rounded":false,"fill":"#5fe6fdff","thickness":0,"angle":45}}
- {"id":"drawing-79","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.25,1.5],"width":0.7,"height":0.72,"rounded":false,"fill":"#5fe6fdff","thickness":0,"angle":0}}
- {"id":"drawing-95","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,2.5],"width":0.4,"height":0.4,"rounded":true,"fill":"#dec3f4ff","thickness":0,"angle":0}}
- {"id":"drawing-96","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,5.5],"width":0.4,"height":0.4,"rounded":true,"fill":"#dec3f4ff","thickness":0,"angle":0}}
- {"id":"drawing-97","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,7.5],"width":0,"height":0.457,"rounded":true,"thickness":0,"angle":315,"text":"Removed","textColor":"#ff6565ff","fontSize":17.2}}
- {"id":"drawing-98","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,0.5],"width":0,"height":0.457,"rounded":true,"thickness":0,"angle":315,"text":"Repeated","textColor":"#04defdff","fontSize":17.2}}
- {"id":"drawing-99","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,0],"width":0.23,"height":6,"rounded":false,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-100","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,8],"width":0.23,"height":6,"rounded":false,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-101","rules":[],"visual":{"kind":"shape","layer":"over","center":[0,4],"width":6,"height":0.23,"rounded":false,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-102","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,4],"width":6,"height":0.23,"rounded":false,"fill":"#FFFFFF","thickness":0,"angle":0}}
```

The grid contains the digits 1-6. In each row and column, one digit has been removed, and one digit is repeated. Eg: 352156 - 4 has been removed, and 5 is repeated.

Each digit 1-6 is repeated in exactly one row and one column, and removed in exactly one row and one column. The red and blue side arrows can be used to keep track.

• Digits joined by an X sum to 10.
• Digits joined by a white dot are consecutive.
• Digits joined by a black dot are in a 1:2 ratio.
• Digits in a cage sum to the clue in the corner.
• Digits on a pink renban form a non-repeating consecutive sequence which can be in any order.
• Digits an equal distance from the central spot on a lavender zipper line sum to the digit on the central spot.
