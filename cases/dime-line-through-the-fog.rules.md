---
fog:
  initiallyLit:
    - 0
    - 1
    - 2
    - 9
    - 10
    - 11
    - 18
    - 19
    - 20
format: open-rules
title: Dime Line through the Fog
setter: Meggen033
source: https://sudokupad.app/aa5laxisg9
case: https://sudoku-sleuth.com/cases/dime-line-through-the-fog
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
kropki-1: kropki r3c1-r4c1 colour "white"
kropki-2: kropki r1c3-r1c4 colour "white"
kropki-3: kropki r4c2-r4c3 colour "white"
kropki-4: kropki r1c5-r2c5 colour "white"
kropki-5: kropki r3c5-r3c6 colour "white"
kropki-6: kropki r8c8-r9c8 colour "white"
kropki-7: kropki r7c6-r7c7 colour "white"
kropki-8: kropki r6c4-r7c4 colour "white"
kropki-9: kropki r3c2-r3c3 colour "black"
kropki-10: kropki r2c3-r3c3 colour "black"
kropki-11: kropki r3c9-r4c9 colour "black"
kropki-12: kropki r6c8-r7c8 colour "black"
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[1.5,2.5],[0.5,1.5],[0.5,2.5]],"color":"#FF0000","thickness":8,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[0.5,3.5],[0.5,2.5]],"color":"#FF0000","thickness":8,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[2.5,1.5],[1.5,0.5],[2.5,0.5],[3.5,0.5]],"color":"#FF0000","thickness":8,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[3.5,1.5],[3.5,0.5]],"color":"#FF0000","thickness":8,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[1.5,3.5],[0.5,3.5]],"color":"#FF0000","thickness":8,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[3.5,2.5],[3.5,1.5]],"color":"#FF0000","thickness":8,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[2.5,3.5],[1.5,3.5]],"color":"#FF0000","thickness":8,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[0.5,5.5],[1.5,4.5],[2.5,3.5]],"color":"#FF0000","thickness":8,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[4.5,2.5],[3.5,2.5]],"color":"#FF0000","thickness":8,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[1.5,8.5],[1.5,7.5],[1.5,6.5],[0.5,6.5],[0.5,5.5]],"color":"#FF0000","thickness":8,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[3.5,8.5],[2.5,8.5],[1.5,8.5]],"color":"#FF0000","thickness":8,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[4.5,7.5],[3.5,8.5]],"color":"#FF0000","thickness":8,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[6.5,8.5],[5.5,8.5],[5.5,7.5],[5.5,6.5],[4.5,6.5],[4.5,7.5]],"color":"#FF0000","thickness":8,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[7.5,5.5],[7.5,6.5],[7.5,7.5],[6.5,8.5]],"color":"#FF0000","thickness":8,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[4.5,2.5],[5.5,2.5],[6.5,1.5],[6.5,0.5],[7.5,1.5],[8.5,1.5],[7.5,2.5],[8.5,3.5],[8.5,4.5],[8.5,5.5],[7.5,5.5]],"color":"#FF0000","thickness":8,"rounded":true}}
```

•    Normal Sudoku rules apply.
•    The grid is partially covered with fog. Correctly placed digits will clear the fog around that cell. No guessing is required.
•    THERE IS ONE, AND ONLY ONE, red Ten Line where contiguous groups of cells sum to 10. These groups of cells cannot overlap. Digits may repeat freely on the line, even within sums.
•    A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are given.
