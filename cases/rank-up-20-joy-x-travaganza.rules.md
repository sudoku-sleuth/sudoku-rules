---
format: open-rules
title: Rank Up 20.joy - X-travaganza
setter: sujoyku
source: https://sudokupad.app/v6m78qt2eh
case: https://sudoku-sleuth.com/cases/rank-up-20-joy-x-travaganza
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - A feature in the source still needs a drawing definition.
  - A source line layer still needs to be included in our reading.
  - We have only read part of the published answer so far.
board:
  rows: 7
  cols: 7
  symbols:
    - 1
    - 2
    - 3
    - 4
    - 5
    - 6
    - 7
---

```rules
unique-1: unique r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7
unique-2: unique r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7
unique-3: unique r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7
unique-4: unique r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7
unique-5: unique r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7
unique-6: unique r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7
unique-7: unique r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7
unique-8: unique r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1
unique-9: unique r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2
unique-10: unique r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3
unique-11: unique r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4
unique-12: unique r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5
unique-13: unique r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6
unique-14: unique r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,2.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"9","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,0.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"12","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,6.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"10","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[5,1],[5,0],[7,0],[7,1],[6,1],[6,0]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[5,0],[4,0],[4,1]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[7,1],[7,7],[0,7],[0,6],[1,6],[1,7]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[7,2],[6,2]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[7,3],[6,3]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[7,4],[6,4]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[7,5],[6,5]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[7,6],[6,6],[6,7]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[5,7],[5,6]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[4,7],[4,6]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[3,7],[3,6]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[2,7],[2,6]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[0,6],[0,5],[1,5]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[4,0],[3,0],[3,1]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[0,5],[0,4],[1,4]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[3,0],[2,0],[2,1]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[0,4],[0,3],[1,3]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[2,0],[1,0],[1,1],[0,1],[0,3]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[1,0],[0,0],[0,1]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[0,2],[1,2]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[5,1],[6,1],[6,6],[1,6],[1,1],[5,1]],"color":"#000000","thickness":3.2,"rounded":true,"layer":"over"}}
```

- Normal 5x5 sudoku rules apply, i.e. each row and column has to contain the digits from 1 to 5 once each.

All clues outside the grid are both Full Rank and X-sum clues.

- Full Rank: A value outside of the grid represents the rank of the number formed by reading the digits in that row or column from that direction, where (1) is the lowest such row or column and (20) is the highest. 

N.B. If two ranks are tied, the value in both external cells is the lower of the two ranks being shared. For example, if the lowest four ranks are "12345", "12435", "12435" and "12534", the values in the relevant external cells would be (1), (2), (2) and (4) respectively.

- X-sums: A clue outside of the grid indicates the sum of the first X digits in the respective row or column where X is the first digit seen from the clue.
