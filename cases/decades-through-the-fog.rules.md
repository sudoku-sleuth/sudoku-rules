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
title: Decades through the Fog
setter: Meggen033
source: https://sudokupad.app/n13gh05aco
case: https://sudoku-sleuth.com/cases/decades-through-the-fog
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
kropki-1: kropki r2c3-r3c3 colour "white"
kropki-2: kropki r1c1-r2c1 colour "white"
kropki-3: kropki r1c4-r2c4 colour "white"
kropki-4: kropki r2c7-r2c8 colour "white"
kropki-5: kropki r5c2-r5c3 colour "white"
kropki-6: kropki r4c3-r5c3 colour "white"
kropki-7: kropki r5c1-r6c1 colour "white"
kropki-8: kropki r4c6-r4c7 colour "white"
kropki-9: kropki r4c7-r4c8 colour "white"
kropki-10: kropki r8c8-r9c8 colour "white"
kropki-11: kropki r9c6-r9c7 colour "white"
kropki-12: kropki r2c2-r3c2 colour "black"
kropki-13: kropki r1c2-r2c2 colour "black"
kropki-14: kropki r2c4-r2c5 colour "black"
kropki-15: kropki r7c5-r7c6 colour "black"
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[2.5,2.5],[1.5,1.5],[0.5,0.5],[0.5,1.5],[0.5,2.5],[0.5,3.5]],"color":"#FF4255","thickness":9.6,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[2.5,1.5],[1.5,0.5],[2.5,0.5],[3.5,0.5]],"color":"#FF4255","thickness":9.6,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[1.5,4.5],[0.5,3.5]],"color":"#FF4255","thickness":9.6,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[2.5,5.5],[1.5,4.5]],"color":"#FF4255","thickness":9.6,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[0.5,7.5],[0.5,6.5],[1.5,6.5],[2.5,5.5]],"color":"#FF4255","thickness":9.6,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[2.5,6.5],[1.5,7.5],[0.5,7.5]],"color":"#FF4255","thickness":9.6,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[5.5,1.5],[4.5,1.5],[3.5,1.5],[3.5,0.5]],"color":"#FF4255","thickness":9.6,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[7.5,2.5],[6.5,2.5],[5.5,1.5]],"color":"#FF4255","thickness":9.6,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[7.5,4.5],[8.5,3.5],[8.5,2.5],[7.5,2.5]],"color":"#FF4255","thickness":9.6,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[5.5,4.5],[6.5,4.5],[7.5,4.5]],"color":"#FF4255","thickness":9.6,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[5.5,5.5],[4.5,4.5],[5.5,4.5]],"color":"#FF4255","thickness":9.6,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[4.5,7.5],[3.5,6.5],[2.5,6.5]],"color":"#FF4255","thickness":9.6,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[5.5,8.5],[4.5,7.5]],"color":"#FF4255","thickness":9.6,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[5.5,5.5],[6.5,6.5],[7.5,7.5],[8.5,7.5],[7.5,8.5],[6.5,7.5],[6.5,8.5],[5.5,8.5]],"color":"#FF4255","thickness":9.6,"rounded":true}}
```

•    Normal Sudoku rules apply. 
•    The grid is partially covered with fog. Correctly placed digits will clear the fog around that cell. No guessing is required.
•    THERE IS ONE, AND ONLY ONE, red Ten Line where contiguous groups of cells sum to 10. These groups of cells cannot overlap. Digits may repeat freely on the line, even within sums.
•    A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are given.
