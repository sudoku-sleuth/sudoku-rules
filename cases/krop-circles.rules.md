---
format: open-rules
title: Krop Circles
setter: Marty Sears
source: https://sudokupad.app/a8eltxzbpb
case: https://sudoku-sleuth.com/cases/krop-circles
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
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
kropki-1: kropki r6c1-r7c1 colour "black"
kropki-2: kropki r6c2-r7c2 colour "black"
kropki-3: kropki r8c2-r8c3 colour "black"
kropki-4: kropki r4c1-r4c2 colour "black"
kropki-5: kropki r2c2-r2c3 colour "black"
kropki-6: kropki r2c4-r3c4 colour "black"
kropki-7: kropki r2c5-r3c5 colour "black"
kropki-8: kropki r1c6-r1c7 colour "black"
kropki-9: kropki r1c8-r2c8 colour "black"
kropki-10: kropki r4c6-r4c7 colour "black"
kropki-11: kropki r4c5-r5c5 colour "black"
kropki-12: kropki r4c8-r5c8 colour "black"
kropki-13: kropki r5c6-r5c7 colour "black"
kropki-14: kropki r6c8-r7c8 colour "black"
kropki-15: kropki r8c6-r8c7 colour "black"
kropki-16: kropki r7c2-r7c3 colour "black"
kropki-17: kropki r5c4-r6c4 colour "black"
kropki-18: kropki r7c5-r7c6 colour "black"
kropki-19: kropki r5c7-r5c8 colour "black"
constructed-regions size 8 borders [] joins []
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.2,5.4],"width":0.42,"height":0.32,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.6,4.9],"width":0.42,"height":0.24,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.6,3.9],"width":0.42,"height":0.24,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,5],"width":0.42,"height":0.36,"rounded":true,"fill":"#FFFFFF","stroke":"#000000fe","thickness":4,"angle":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.625,4.875],"width":0.46,"height":0.32,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[2.167,7.5],[2.833,7.5]],"color":"#8fe50c","thickness":4,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[0.167,4.5],[0.833,4.5]],"color":"#8fe50c","thickness":4,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[2.167,1.5],[2.833,1.5]],"color":"#8fe50c","thickness":4,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[4.167,0.5],[4.833,0.5]],"color":"#8fe50c","thickness":4,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[7.167,4.5],[7.833,4.5]],"color":"#8fe50c","thickness":4,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[0.167,0.5],[0.833,0.5]],"color":"#8fe50c","thickness":4,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[5.833,6.5],[5.167,6.5]],"color":"#8fe50c","thickness":4,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[3.167,3.5],[3.833,3.5]],"color":"#8fe50c","thickness":4,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[5.833,2.5],[5.167,2.5]],"color":"#8fe50c","thickness":4,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[3.45,2.85],[3.5,2.9],[3.9,2.5],[3.5,2.1],[3.1,2.5],[3.45,2.85]],"color":"#f7ef00","thickness":5,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[0.65,5.15],[0.8,5.3]],"color":"#8b4513","thickness":6,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[4.3,0.3],[4.4,0.4]],"color":"#8fe50c","thickness":4,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[4.1,0.3],[4.2,0.4]],"color":"#8fe50c","thickness":4,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[4.5,0.3],[4.6,0.4]],"color":"#8fe50c","thickness":4,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[4.5,0.7],[4.6,0.6]],"color":"#8fe50c","thickness":4,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[4.3,0.7],[4.4,0.6]],"color":"#8fe50c","thickness":4,"rounded":true}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[4.1,0.7],[4.2,0.6]],"color":"#8fe50c","thickness":4,"rounded":true}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[2.1,1.3],[2.2,1.4]],"color":"#8fe50c","thickness":4,"rounded":true}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[2.3,1.3],[2.4,1.4]],"color":"#8fe50c","thickness":4,"rounded":true}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[2.5,1.3],[2.6,1.4]],"color":"#8fe50c","thickness":4,"rounded":true}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[2.1,1.7],[2.2,1.6]],"color":"#8fe50c","thickness":4,"rounded":true}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[2.3,1.7],[2.4,1.6]],"color":"#8fe50c","thickness":4,"rounded":true}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[2.5,1.7],[2.6,1.6]],"color":"#8fe50c","thickness":4,"rounded":true}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"line","points":[[0.1,4.3],[0.2,4.4]],"color":"#8fe50c","thickness":4,"rounded":true}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"line","points":[[0.3,4.3],[0.4,4.4]],"color":"#8fe50c","thickness":4,"rounded":true}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"line","points":[[0.5,4.3],[0.6,4.4]],"color":"#8fe50c","thickness":4,"rounded":true}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"line","points":[[0.1,4.7],[0.2,4.6]],"color":"#8fe50c","thickness":4,"rounded":true}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"line","points":[[0.3,4.7],[0.4,4.6]],"color":"#8fe50c","thickness":4,"rounded":true}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"line","points":[[0.5,4.7],[0.6,4.6]],"color":"#8fe50c","thickness":4,"rounded":true}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"line","points":[[2.1,7.3],[2.2,7.4]],"color":"#8fe50c","thickness":4,"rounded":true}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"line","points":[[2.3,7.3],[2.4,7.4]],"color":"#8fe50c","thickness":4,"rounded":true}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"line","points":[[2.5,7.3],[2.6,7.4]],"color":"#8fe50c","thickness":4,"rounded":true}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"line","points":[[2.5,7.7],[2.6,7.6]],"color":"#8fe50c","thickness":4,"rounded":true}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"line","points":[[2.3,7.7],[2.4,7.6]],"color":"#8fe50c","thickness":4,"rounded":true}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"line","points":[[2.1,7.7],[2.2,7.6]],"color":"#8fe50c","thickness":4,"rounded":true}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"line","points":[[7.1,4.3],[7.2,4.4]],"color":"#8fe50c","thickness":4,"rounded":true}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"line","points":[[7.3,4.3],[7.4,4.4]],"color":"#8fe50c","thickness":4,"rounded":true}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"line","points":[[7.5,4.3],[7.6,4.4]],"color":"#8fe50c","thickness":4,"rounded":true}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"line","points":[[7.1,4.7],[7.2,4.6]],"color":"#8fe50c","thickness":4,"rounded":true}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"line","points":[[7.3,4.7],[7.4,4.6]],"color":"#8fe50c","thickness":4,"rounded":true}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"line","points":[[7.5,4.7],[7.6,4.6]],"color":"#8fe50c","thickness":4,"rounded":true}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"line","points":[[0.1,0.3],[0.2,0.4]],"color":"#8fe50c","thickness":4,"rounded":true}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"line","points":[[0.3,0.3],[0.4,0.4]],"color":"#8fe50c","thickness":4,"rounded":true}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"line","points":[[0.5,0.3],[0.6,0.4]],"color":"#8fe50c","thickness":4,"rounded":true}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"line","points":[[0.1,0.7],[0.2,0.6]],"color":"#8fe50c","thickness":4,"rounded":true}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"line","points":[[0.3,0.7],[0.4,0.6]],"color":"#8fe50c","thickness":4,"rounded":true}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"line","points":[[0.5,0.7],[0.6,0.6]],"color":"#8fe50c","thickness":4,"rounded":true}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"line","points":[[5.1,6.3],[5.2,6.4]],"color":"#8fe50c","thickness":4,"rounded":true}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"line","points":[[5.3,6.3],[5.4,6.4]],"color":"#8fe50c","thickness":4,"rounded":true}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"line","points":[[5.5,6.3],[5.6,6.4]],"color":"#8fe50c","thickness":4,"rounded":true}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"line","points":[[5.1,6.7],[5.2,6.6]],"color":"#8fe50c","thickness":4,"rounded":true}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"line","points":[[5.3,6.7],[5.4,6.6]],"color":"#8fe50c","thickness":4,"rounded":true}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"line","points":[[5.5,6.7],[5.6,6.6]],"color":"#8fe50c","thickness":4,"rounded":true}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"line","points":[[3.1,3.3],[3.2,3.4]],"color":"#8fe50c","thickness":4,"rounded":true}}
- {"id":"drawing-60","rules":[],"visual":{"kind":"line","points":[[3.3,3.3],[3.4,3.4]],"color":"#8fe50c","thickness":4,"rounded":true}}
- {"id":"drawing-61","rules":[],"visual":{"kind":"line","points":[[3.5,3.3],[3.6,3.4]],"color":"#8fe50c","thickness":4,"rounded":true}}
- {"id":"drawing-62","rules":[],"visual":{"kind":"line","points":[[3.1,3.7],[3.2,3.6]],"color":"#8fe50c","thickness":4,"rounded":true}}
- {"id":"drawing-63","rules":[],"visual":{"kind":"line","points":[[3.3,3.7],[3.4,3.6]],"color":"#8fe50c","thickness":4,"rounded":true}}
- {"id":"drawing-64","rules":[],"visual":{"kind":"line","points":[[3.5,3.7],[3.6,3.6]],"color":"#8fe50c","thickness":4,"rounded":true}}
- {"id":"drawing-65","rules":[],"visual":{"kind":"line","points":[[5.1,2.3],[5.2,2.4]],"color":"#8fe50c","thickness":4,"rounded":true}}
- {"id":"drawing-66","rules":[],"visual":{"kind":"line","points":[[5.3,2.3],[5.4,2.4]],"color":"#8fe50c","thickness":4,"rounded":true}}
- {"id":"drawing-67","rules":[],"visual":{"kind":"line","points":[[5.5,2.3],[5.6,2.4]],"color":"#8fe50c","thickness":4,"rounded":true}}
- {"id":"drawing-68","rules":[],"visual":{"kind":"line","points":[[5.1,2.7],[5.2,2.6]],"color":"#8fe50c","thickness":4,"rounded":true}}
- {"id":"drawing-69","rules":[],"visual":{"kind":"line","points":[[5.3,2.7],[5.4,2.6]],"color":"#8fe50c","thickness":4,"rounded":true}}
- {"id":"drawing-70","rules":[],"visual":{"kind":"line","points":[[5.5,2.7],[5.6,2.6]],"color":"#8fe50c","thickness":4,"rounded":true}}
- {"id":"drawing-71","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,0.5],"width":0.7,"height":0.7,"rounded":true,"stroke":"#212121","thickness":4,"angle":0}}
- {"id":"drawing-72","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,0.5],"width":0.7,"height":0.7,"rounded":true,"stroke":"#212121","thickness":4,"angle":0}}
- {"id":"drawing-73","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,0.5],"width":0.7,"height":0.7,"rounded":true,"stroke":"#212121","thickness":4,"angle":0}}
- {"id":"drawing-74","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,3.5],"width":0.7,"height":0.7,"rounded":true,"stroke":"#212121","thickness":4,"angle":0}}
- {"id":"drawing-75","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,6.5],"width":0.7,"height":0.7,"rounded":true,"stroke":"#212121","thickness":4,"angle":0}}
- {"id":"drawing-76","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,5.5],"width":0.7,"height":0.7,"rounded":true,"stroke":"#212121","thickness":4,"angle":0}}
- {"id":"drawing-77","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,3.5],"width":0.7,"height":0.7,"rounded":true,"stroke":"#212121","thickness":4,"angle":0}}
- {"id":"drawing-78","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,4.5],"width":0.7,"height":0.7,"rounded":true,"stroke":"#212121","thickness":4,"angle":0}}
```

• Normal sudoku rules apply.
• Divide the grid into 8 fields (regions of orthogonally connected cells.) Fill the grid with the digits 1-8 so that no digit repeats in any row, column or field.
• Digits joined by a black dot are in a 1:2 ratio (one is double the other.)
• Black dots may not sit on a field border.
• A circled digit indicates how many black dots appear in its field.
• The digit in the yellow diamond indicates how many fields contain at least one plant.
• The sickle cuts to the left, into the smaller of the two digits it sits between
