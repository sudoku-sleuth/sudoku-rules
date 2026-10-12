---
format: open-rules
title: Red Square Blue Square
setter: Marty Sears
source: https://tinyurl.com/72va8th9
case: https://sudoku-sleuth.com/cases/red-square-blue-square
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
board:
  rows: 10
  cols: 10
  symbols:
    - 0
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
unique-1: unique r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9-r1c10
unique-2: unique r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9-r2c10
unique-3: unique r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8-r3c9-r3c10
unique-4: unique r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8-r4c9-r4c10
unique-5: unique r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9-r5c10
unique-6: unique r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8-r6c9-r6c10
unique-7: unique r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8-r7c9-r7c10
unique-8: unique r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r8c9-r8c10
unique-9: unique r9c1-r9c2-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8-r9c9-r9c10
unique-10: unique r10c1-r10c2-r10c3-r10c4-r10c5-r10c6-r10c7-r10c8-r10c9-r10c10
unique-11: unique r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r9c1-r10c1
unique-12: unique r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2-r9c2-r10c2
unique-13: unique r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3-r9c3-r10c3
unique-14: unique r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4-r8c4-r9c4-r10c4
unique-15: unique r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5-r10c5
unique-16: unique r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6-r8c6-r9c6-r10c6
unique-17: unique r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7-r9c7-r10c7
unique-18: unique r1c8-r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8-r9c8-r10c8
unique-19: unique r1c9-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9-r10c9
unique-20: unique r1c10-r2c10-r3c10-r4c10-r5c10-r6c10-r7c10-r8c10-r9c10-r10c10
constructed-regions size 10 borders [] joins []
```

```drawing
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[1.5,8.7],[1.5,8.83],[1.55,8.83],[1.5,8.9],[1.45,8.83],[1.5,8.83]],"color":"#000000","fill":"#000000","thickness":4.2,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[2.5,4.7],[2.5,4.84],[2.55,4.84],[2.5,4.9],[2.45,4.84],[2.5,4.84]],"color":"#000000","fill":"#000000","thickness":4.2,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[3.3,8.5],[3.17,8.5],[3.17,8.55],[3.1,8.5],[3.17,8.45],[3.17,8.5]],"color":"#000000","fill":"#000000","thickness":4.2,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[3.3,9.5],[3.17,9.5],[3.17,9.55],[3.1,9.5],[3.17,9.45],[3.17,9.5]],"color":"#000000","fill":"#000000","thickness":4.2,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[4.5,1.7],[4.5,1.84],[4.55,1.84],[4.5,1.9],[4.45,1.84],[4.5,1.84]],"color":"#000000","fill":"#000000","thickness":4.2,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[4.5,8.7],[4.5,8.83],[4.55,8.83],[4.5,8.9],[4.45,8.83],[4.5,8.83]],"color":"#000000","fill":"#000000","thickness":4.2,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[5.3,0.5],[5.17,0.5],[5.17,0.55],[5.1,0.5],[5.17,0.45],[5.17,0.5]],"color":"#000000","fill":"#000000","thickness":4.2,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[5.3,6.5],[5.17,6.5],[5.17,6.55],[5.1,6.5],[5.17,6.45],[5.17,6.5]],"color":"#000000","fill":"#000000","thickness":4.2,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[6.3,2.5],[6.17,2.5],[6.17,2.55],[6.1,2.5],[6.17,2.45],[6.17,2.5]],"color":"#000000","fill":"#000000","thickness":4.2,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[7.7,2.5],[7.84,2.5],[7.84,2.45],[7.9,2.5],[7.84,2.55],[7.84,2.5]],"color":"#000000","fill":"#000000","thickness":4.2,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[8.5,0.7],[8.5,0.84],[8.55,0.84],[8.5,0.9],[8.45,0.84],[8.5,0.84]],"color":"#000000","fill":"#000000","thickness":4.2,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[8.7,1.5],[8.83,1.5],[8.83,1.45],[8.9,1.5],[8.83,1.55],[8.83,1.5]],"color":"#000000","fill":"#000000","thickness":4.2,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[8.5,3.7],[8.5,3.84],[8.55,3.84],[8.5,3.9],[8.45,3.84],[8.5,3.84]],"color":"#000000","fill":"#000000","thickness":4.2,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[8.7,5.5],[8.83,5.5],[8.83,5.45],[8.9,5.5],[8.83,5.55],[8.83,5.5]],"color":"#000000","fill":"#000000","thickness":4.2,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[9.5,6.7],[9.5,6.84],[9.55,6.84],[9.5,6.9],[9.45,6.84],[9.5,6.84]],"color":"#000000","fill":"#000000","thickness":4.2,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[9.5,7.7],[9.5,7.84],[9.55,7.84],[9.5,7.9],[9.45,7.84],[9.5,7.84]],"color":"#000000","fill":"#000000","thickness":4.2,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[9.3,9.5],[9.17,9.5],[9.17,9.55],[9.1,9.5],[9.17,9.45],[9.17,9.5]],"color":"#000000","fill":"#000000","thickness":4.2,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[0.92,3.08],[0.07999999999999999,3.08],[0.07999999999999999,3.92],[0.92,3.92],[0.92,3.08]],"color":"#0000FF","thickness":1.7,"rounded":true,"layer":"grid"}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[0.92,9.08],[0.07999999999999999,9.08],[0.07999999999999999,9.92],[0.92,9.92],[0.92,9.08]],"color":"#FF0000","thickness":1.7,"rounded":true,"layer":"grid"}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[1.92,2.08],[1.08,2.08],[1.08,2.92],[1.92,2.92],[1.92,2.08]],"color":"#FF0000","thickness":1.7,"rounded":true,"layer":"grid"}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[1.92,3.08],[1.08,3.08],[1.08,3.92],[1.92,3.92],[1.92,3.08]],"color":"#FF0000","thickness":1.7,"rounded":true,"layer":"grid"}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[1.92,5.08],[1.08,5.08],[1.08,5.92],[1.92,5.92],[1.92,5.08]],"color":"#FF0000","thickness":1.7,"rounded":true,"layer":"grid"}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[1.92,8.08],[1.08,8.08],[1.08,8.92],[1.92,8.92],[1.92,8.08]],"color":"#0000FF","thickness":1.7,"rounded":true,"layer":"grid"}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[1.92,9.08],[1.08,9.08],[1.08,9.92],[1.92,9.92],[1.92,9.08]],"color":"#FF0000","thickness":1.7,"rounded":true,"layer":"grid"}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[2.92,0.07999999999999999],[2.08,0.07999999999999999],[2.08,0.92],[2.92,0.92],[2.92,0.07999999999999999]],"color":"#0000FF","thickness":1.7,"rounded":true,"layer":"grid"}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[2.92,2.08],[2.08,2.08],[2.08,2.92],[2.92,2.92],[2.92,2.08]],"color":"#0000FF","thickness":1.7,"rounded":true,"layer":"grid"}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[2.92,8.08],[2.08,8.08],[2.08,8.92],[2.92,8.92],[2.92,8.08]],"color":"#0000FF","thickness":1.7,"rounded":true,"layer":"grid"}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"line","points":[[3.92,4.08],[3.08,4.08],[3.08,4.92],[3.92,4.92],[3.92,4.08]],"color":"#0000FF","thickness":1.7,"rounded":true,"layer":"grid"}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"line","points":[[3.92,6.08],[3.08,6.08],[3.08,6.92],[3.92,6.92],[3.92,6.08]],"color":"#0000FF","thickness":1.7,"rounded":true,"layer":"grid"}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"line","points":[[4.92,1.08],[4.08,1.08],[4.08,1.92],[4.92,1.92],[4.92,1.08]],"color":"#0000FF","thickness":1.7,"rounded":true,"layer":"grid"}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"line","points":[[4.92,7.08],[4.08,7.08],[4.08,7.92],[4.92,7.92],[4.92,7.08]],"color":"#0000FF","thickness":1.7,"rounded":true,"layer":"grid"}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"line","points":[[5.92,1.08],[5.08,1.08],[5.08,1.92],[5.92,1.92],[5.92,1.08]],"color":"#0000FF","thickness":1.7,"rounded":true,"layer":"grid"}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"line","points":[[5.92,2.08],[5.08,2.08],[5.08,2.92],[5.92,2.92],[5.92,2.08]],"color":"#FF0000","thickness":1.7,"rounded":true,"layer":"grid"}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"line","points":[[6.92,4.08],[6.08,4.08],[6.08,4.92],[6.92,4.92],[6.92,4.08]],"color":"#FF0000","thickness":1.7,"rounded":true,"layer":"grid"}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"line","points":[[7.92,2.08],[7.08,2.08],[7.08,2.92],[7.92,2.92],[7.92,2.08]],"color":"#FF0000","thickness":1.7,"rounded":true,"layer":"grid"}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"line","points":[[7.92,5.08],[7.08,5.08],[7.08,5.92],[7.92,5.92],[7.92,5.08]],"color":"#FF0000","thickness":1.7,"rounded":true,"layer":"grid"}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"line","points":[[9.92,3.08],[9.08,3.08],[9.08,3.92],[9.92,3.92],[9.92,3.08]],"color":"#FF0000","thickness":1.7,"rounded":true,"layer":"grid"}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"cage","cells":[3],"color":"#00000000"}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"cage","cells":[18],"color":"#00000000"}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"cage","cells":[28],"color":"#00000000"}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"cage","cells":[36],"color":"#00000000"}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"cage","cells":[47],"color":"#00000000"}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"cage","cells":[34],"color":"#00000000"}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"cage","cells":[22],"color":"#00000000"}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"cage","cells":[20],"color":"#00000000"}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"cage","cells":[41],"color":"#00000000"}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"cage","cells":[51],"color":"#00000000"}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"cage","cells":[12],"color":"#00000000"}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"cage","cells":[13],"color":"#00000000"}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"cage","cells":[15],"color":"#00000000"}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"cage","cells":[9],"color":"#00000000"}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"cage","cells":[19],"color":"#00000000"}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"cage","cells":[52],"color":"#00000000"}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"cage","cells":[64],"color":"#00000000"}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"cage","cells":[72],"color":"#00000000"}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"cage","cells":[75],"color":"#00000000"}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"cage","cells":[93],"color":"#00000000"}}
```

• Divide the grid into ten orthogonally connected 10-cell regions. 
• Each digit from 0-9 appears in one red square and one blue square, and also once in every row, column and region.
• Each region contains one red square and one blue square, whose digits sum to 9.
• A digit in an arrow cell indicates the number of borders (separating two regions) it sees in a straight line in the direction of the arrow. Borders on the outer perimeter of the grid don’t count, because they aren’t separating two regions.
