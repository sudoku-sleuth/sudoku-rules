---
format: open-rules
title: Nuts and Bolts
setter: Kennet's Dad
source: https://tinyurl.com/2cpma9ec
case: https://sudoku-sleuth.com/cases/nuts-and-bolts
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - A feature in the source still needs a drawing definition.
exported: 27b9697445da0f94cf6d5aa732161bff
---

```rules
sudoku 9x9
cage-1: cage r7c1-r8c1-r9c1 total 8 connected true
cage-2: cage r7c4-r8c4-r9c4 total 9 connected true
cage-3: cage r1c6-r2c6-r3c6 total 8 connected true
cage-4: cage r1c9-r2c9-r3c9 total 9 connected true
kropki r2c2-r3c2 black
region-sum-1: region-sum r3c8-r4c8-r4c9-r3c9 segments [["r3c8","r3c9"],["r4c8","r4c9"]]
region-sum-2: region-sum r6c4-r7c4-r7c5-r6c5 segments [["r6c4","r6c5"],["r7c4","r7c5"]]
region-sum-3: region-sum r5c6-r6c7-r5c8-r4c7 segments [["r5c6"],["r6c7","r5c8","r4c7"]]
region-sum-4: region-sum r2c4-r3c3-r2c2-r1c3 segments [["r2c4"],["r3c3","r2c2","r1c3"]]
```

```drawing
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[3.75,7.5],[4,7.75],[5,7.75],[5.75,7],[5.75,6],[5,5.25],[4,5.25],[3.25,6],[3.25,7],[3.75,7.5]],"color":"#2ecbff","thickness":5,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[3.25,2],[3.25,3],[4,3.75],[5,3.75],[5.75,3],[5.75,2],[5,1.25],[4,1.25],[3.25,2]],"color":"#2ecbff","thickness":5,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[4.875,3.125],[5.5,2.5],[4.5,1.5],[3.5,2.5],[4.5,3.5],[4.875,3.125]],"color":"#2ecbff","thickness":5,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[7.75,5.25],[8,5.25],[8.75,6],[8.75,7],[8,7.75],[7,7.75],[6.25,7],[6.25,6],[7,5.25],[7.75,5.25]],"color":"#2ecbff","thickness":5,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[8.25,6.25],[8.5,6.5],[7.5,7.5],[6.5,6.5],[7.5,5.5],[8.25,6.25]],"color":"#2ecbff","thickness":5,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[1,1.25],[2,1.25],[2.75,2],[2.75,3],[2,3.75],[1,3.75],[0.25,3],[0.25,2],[1,1.25]],"color":"#2ecbff","thickness":5,"rounded":true}}
```

Normal sudoku rules apply. Box borders divide each line into segments with the same sum. Digits in a cage sum to the number in the top left corner of that cage.   One digit is double the other in cells separated by a black dot.
