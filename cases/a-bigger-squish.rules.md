---
format: open-rules
title: A Bigger Squish
setter: Marty Sears
source: https://tinyurl.com/yorew8h7
case: https://sudoku-sleuth.com/cases/a-bigger-squish
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: e18457c5ce63faa78296a73c761096c6
---

```rules
sudoku 9x9
entropic-1: entropic r5c1-r4c2-r3c2
entropic-2: entropic r2c1-r1c2-r2c3
zipper-1: zipper r7c3-r7c2-r8c2-r9c2-r9c3
zipper-2: zipper r6c6-r5c5-r5c6
zipper-3: zipper r9c4-r8c4-r8c5
nabner-1: nabner r3c7-r2c6-r1c7 distinct true
nabner-2: nabner r4c1-r3c1-r2c2 distinct true
nabner-3: nabner r3c9-r4c8 distinct true
```

```drawing
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[5.5,2.5],[2.5,2.5],[2.5,3.5],[0.5,3.5]],"color":"#87ffed","thickness":12,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[8.5,6.5],[8.5,4.5]],"color":"#87ffed","thickness":12,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[6.5,0.5],[5.5,0.5],[5.5,1.5]],"color":"#87ffed","thickness":12,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[3.5,6.5],[5.5,6.5]],"color":"#87ffed","thickness":12,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[0.167,2.5],[0.333,2.5]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[0.667,2.5],[0.833,2.5]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[1.167,2.5],[1.333,2.5]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[1.667,2.5],[1.833,2.5]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[2.167,2.5],[2.333,2.5]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[2.667,2.5],[2.833,2.5]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[3.167,2.5],[3.333,2.5]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[3.667,2.5],[3.833,2.5]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[4.167,2.5],[4.333,2.5]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[4.667,2.5],[4.833,2.5]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[5.167,2.5],[5.333,2.5]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[5.667,2.5],[5.833,2.5]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[6.167,2.5],[6.333,2.5]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[6.667,2.5],[6.833,2.5]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[7.167,2.5],[7.333,2.5]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[7.667,2.5],[7.833,2.5]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[8.167,2.5],[8.333,2.5]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[8.667,2.5],[8.833,2.5]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[0.167,4.5],[0.333,4.5]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"line","points":[[0.667,4.5],[0.833,4.5]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"line","points":[[1.167,4.5],[1.333,4.5]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"line","points":[[1.667,4.5],[1.833,4.5]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"line","points":[[2.167,4.5],[2.333,4.5]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"line","points":[[2.667,4.5],[2.833,4.5]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"line","points":[[3.167,4.5],[3.333,4.5]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"line","points":[[3.667,4.5],[3.833,4.5]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"line","points":[[4.167,4.5],[4.333,4.5]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"line","points":[[4.667,4.5],[4.833,4.5]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"line","points":[[5.167,4.5],[5.333,4.5]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"line","points":[[5.667,4.5],[5.833,4.5]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"line","points":[[6.167,4.5],[6.333,4.5]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"line","points":[[6.667,4.5],[6.833,4.5]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"line","points":[[7.167,4.5],[7.333,4.5]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"line","points":[[7.667,4.5],[7.833,4.5]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"line","points":[[8.167,4.5],[8.333,4.5]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"line","points":[[8.667,4.5],[8.833,4.5]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"line","points":[[8.667,6.5],[8.833,6.5]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"line","points":[[8.167,6.5],[8.333,6.5]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"line","points":[[7.667,6.5],[7.833,6.5]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"line","points":[[7.167,6.5],[7.333,6.5]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"line","points":[[6.667,6.5],[6.833,6.5]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"line","points":[[6.167,6.5],[6.333,6.5]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"line","points":[[5.667,6.5],[5.833,6.5]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"line","points":[[5.167,6.5],[5.333,6.5]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"line","points":[[4.667,6.5],[4.833,6.5]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"line","points":[[4.167,6.5],[4.333,6.5]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"line","points":[[3.667,6.5],[3.833,6.5]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"line","points":[[3.167,6.5],[3.333,6.5]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"line","points":[[2.667,6.5],[2.833,6.5]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"line","points":[[2.167,6.5],[2.333,6.5]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-60","rules":[],"visual":{"kind":"line","points":[[1.667,6.5],[1.833,6.5]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-61","rules":[],"visual":{"kind":"line","points":[[1.167,6.5],[1.333,6.5]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-62","rules":[],"visual":{"kind":"line","points":[[0.667,6.5],[0.833,6.5]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-63","rules":[],"visual":{"kind":"line","points":[[0.167,6.5],[0.333,6.5]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-70","rules":[],"visual":{"kind":"line","points":[[8.167,5.5],[8,5.5],[8.375,5.5]],"color":"#ffa209","thickness":12,"rounded":true}}
- {"id":"drawing-71","rules":[],"visual":{"kind":"line","points":[[8,5.5],[6.5,5.5]],"color":"#ffa209","thickness":12,"rounded":true}}
- {"id":"drawing-72","rules":[],"visual":{"kind":"line","points":[[9,8],[9,9],[6,9],[6,0],[9,0],[9,8]],"color":"#000000","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-73","rules":[],"visual":{"kind":"line","points":[[6,0],[3,0],[3,9],[6,9]],"color":"#000000","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-74","rules":[],"visual":{"kind":"line","points":[[3,0],[0,0],[0,9],[3,9]],"color":"#000000","thickness":5,"rounded":true,"layer":"over"}}
```

Fill the grid with the digits 1-9 so that no digit repeats in a row, column, or 3x3 region. Twelve 3x3 regions have been squished into this grid - a digit on a dashed line is simultaneously part of the regions on both sides of the dashed line.

SAME DIFFERENCE LINE (turquoise): Each pair of adjacent digits on a turquoise line has the same difference, but this 'difference value' can be different for different turquoise lines.

NABNER LINE (yellow): No two digits anywhere on a yellow line may be consecutive (or the same.)

ENTROPIC LINE (orange): An orange line must contain one low digit (1, 2 or 3), one medium digit (4, 5 or 6), and one high digit (7, 8 or 9).

ZIPPER LINE (lavender): Each pair of digits that are the same distance from the centre spot of a lavender line sum to the digit on that centre spot.
