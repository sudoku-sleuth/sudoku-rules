---
format: open-rules
title: Star in the Sky
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/6nxpxkzkeg
case: https://sudoku-sleuth.com/cases/star-in-the-sky
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
kropki-1: kropki r8c8-r9c8 colour "white"
kropki-2: kropki r1c6-r2c6 colour "white"
kropki-3: kropki r3c2-r4c2 colour "black"
kropki-4: kropki r1c1-r2c1 colour "black"
kropki-5: kropki r2c6-r2c7 colour "black"
kropki-6: kropki r1c8-r1c9 colour "black"
kropki-7: kropki r8c4-r9c4 colour "black"
kropki-8: kropki r9c2-r9c3 colour "black"
kropki-9: kropki r3c8-r4c8 colour "black"
kropki-10: kropki r5c4-r5c5 colour "black"
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[1.5,3.5],[2.5,4.5],[1.5,5.5]],"color":"#E7CD4B","thickness":8,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[2.5,4.5],[3.5,4.5],[4.5,3.5],[5.5,4.5],[4.5,5.5]],"color":"#E7CD4B","thickness":8,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[4.5,5.5],[3.5,4.5]],"color":"#E7CD4B","thickness":8,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[4.5,5.5],[4.5,6.5],[3.5,7.5]],"color":"#E7CD4B","thickness":8,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[4.5,6.5],[5.5,7.5],[5.5,8.5]],"color":"#E7CD4B","thickness":8,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[5.5,7.5],[6.5,7.5]],"color":"#E7CD4B","thickness":8,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[5.5,4.5],[6.5,4.5],[7.5,5.5]],"color":"#E7CD4B","thickness":8,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[6.5,4.5],[7.5,3.5],[7.5,2.5]],"color":"#E7CD4B","thickness":8,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[7.5,3.5],[8.5,3.5]],"color":"#E7CD4B","thickness":8,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[4.5,3.5],[4.5,2.5],[5.5,1.5]],"color":"#E7CD4B","thickness":8,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[4.5,2.5],[3.5,1.5],[3.5,0.5]],"color":"#E7CD4B","thickness":8,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[3.5,1.5],[2.5,1.5]],"color":"#E7CD4B","thickness":8,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[1.5,5.5],[0.5,5.5]],"color":"#E7CD4B","thickness":8,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[1.5,5.5],[1.5,6.5]],"color":"#E7CD4B","thickness":8,"rounded":true}}
```

Originally credited "by Santa," set as a Secret Santa gift for Zegres, December 2023.

- Normal Sudoku rules apply.
- Any three adjacent cells along the line must contain digits with three different remainders when divided by 4.
- Cells separated by a black dot have a 1:2 ratio. Cells separated by a white dot must be consecutive. Not all dots are necessarily given.
