---
format: open-rules
title: Under the Influence
setter: Marty Sears
source: https://sudokupad.app/qrnn8xl8ry
case: https://sudoku-sleuth.com/cases/under-the-influence
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
exported: bed0c19c3ac9568e0f807d68fabf82cb
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[0.5,7.5],[1.5,7.5],[1.5,8.5],[2.5,8.5],[2.5,5.5],[3.5,5.5],[3.5,4.5]],"color":"#FFFFFF","thickness":16,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[4.5,2.5],[6.5,2.5]],"color":"#FFFFFF","thickness":16,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[7.5,2.5],[7.5,3.5],[8.5,3.5],[8.5,2.5],[7.5,2.5]],"color":"#FFFFFF","thickness":16,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[5.5,5.5],[6.5,5.5],[5.5,6.5],[5.5,5.5]],"color":"#FFFFFF","thickness":16,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[2.5,3.5],[3.5,2.5],[3.5,3.5],[2.5,3.5]],"color":"#FFFFFF","thickness":16,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[0.5,7.5],[1.5,7.5],[1.5,8.5],[2.5,8.5],[2.5,5.5],[3.5,5.5],[3.5,4.5]],"color":"#66d7ffff","thickness":11.52,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[4.5,2.5],[6.5,2.5]],"color":"#66d7ffff","thickness":11.52,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[7.5,2.5],[7.5,3.5],[8.5,3.5],[8.5,2.5],[7.5,2.5]],"color":"#66d7ffff","thickness":11.52,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[5.5,5.5],[6.5,5.5],[5.5,6.5],[5.5,5.5]],"color":"#66d7ffff","thickness":11.52,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[2.5,3.5],[3.5,2.5],[3.5,3.5],[2.5,3.5]],"color":"#66d7ffff","thickness":11.52,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[8.833,9.167],[9.167,9.167],[9.167,-0.167],[-0.167,-0.167],[-0.167,9.167],[8.833,9.167]],"color":"#668eff29","thickness":26.88,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[8.833,9.167],[9.167,9.167],[9.167,-0.167],[-0.167,-0.167],[-0.167,9.167],[8.833,9.167]],"color":"#668eff48","thickness":16.64,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[8.875,9.125],[9.125,9.125],[9.125,-0.125],[-0.125,-0.125],[-0.125,9.125],[8.875,9.125]],"color":"#668effb0","thickness":12.8,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[4,-0.5],[5,-0.5]],"color":"#FFFFFF","thickness":9.6,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[9.5,4],[9.5,5]],"color":"#FFFFFF","thickness":9.6,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[5,9.5],[4,9.5]],"color":"#FFFFFF","thickness":9.6,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[-0.5,4],[-0.5,5]],"color":"#FFFFFF","thickness":9.6,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"cage","cells":[16],"label":"9"}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"cage","cells":[9,10],"label":"6"}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"cage","cells":[19],"label":"6"}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"cage","cells":[2,11],"label":"6"}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"cage","cells":[18],"label":"6"}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"cage","cells":[54],"label":"8"}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"cage","cells":[69,70],"label":"12"}}
```

Normal sudoku rules apply.

INFLUENCER CELLS:
The grid contains nine 'influencer cells', each in a different row, column and box, and each containing a different digit.

Every cell in the grid has a value equal to its own digit plus the digits in any orthogonally adjacent influencer cells.

Eg: a cell containing a digit 2 would have a value of 10 if it neighbours an influencer 3 and an influencer 5, because 2 + 3 + 5 = 10.

CAGES:
The small clue in the corner of a cage indicates the total value of the cells in that cage.

REGION SUM LINES:
3 x 3 box borders divide blue lines into segments. The values on each segment have the same sum, though this sum can be different for different lines.
