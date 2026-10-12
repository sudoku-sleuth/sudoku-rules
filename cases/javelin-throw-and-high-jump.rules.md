---
format: open-rules
title: Javelin Throw and High Jump
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/javelin-throw-and-high-jump
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
kropki-1: kropki r6c5-r7c5 colour "white"
kropki-2: kropki r7c5-r8c5 colour "white"
kropki-3: kropki r5c3-r6c3 colour "white"
kropki-4: kropki r6c3-r7c3 colour "white"
kropki-5: kropki r7c3-r8c3 colour "white"
kropki-6: kropki r8c3-r9c3 colour "white"
kropki-7: kropki r5c6-r6c6 colour "white"
kropki-8: kropki r3c2-r4c2 colour "white"
kropki-9: kropki r2c2-r3c2 colour "white"
kropki-10: kropki r1c6-r1c7 colour "white"
kropki-11: kropki r1c3-r1c4 colour "white"
kropki-12: kropki r2c3-r3c3 colour "black"
kropki-13: kropki r6c2-r6c3 colour "black"
kropki-14: kropki r7c7-r8c7 colour "black"
kropki-15: kropki r3c5-r4c5 colour "black"
kropki-16: kropki r1c5-r2c5 colour "black"
kropki-17: kropki r4c6-r5c6 colour "black"
kropki-18: kropki r6c6-r7c6 colour "black"
renban-1: renban r2c5-r3c5-r4c5-r5c4-r5c6-r3c4-r2c3-r2c6
renban-2: renban r7c7-r8c7-r8c8-r7c8-r6c8-r6c9-r6c7-r5c8-r4c9
renban-3: renban r7c1-r6c2-r6c3-r6c4-r6c5-r9c3-r8c3-r7c3-r6c6
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[1.5,8.5],[2.5,8.5],[3.5,8.5],[4.5,8.5],[5.5,8.5],[6.5,8.5],[7.5,8.5],[8.5,8.5]],"color":"#98FF96","thickness":8,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[3.5,0.5],[2.5,1.5],[1.5,2.5],[0.5,3.5]],"color":"#98FF96","thickness":8,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[8.5,2.5],[7.5,3.5],[6.5,4.5],[5.5,5.5],[4.5,6.5],[3.5,7.5],[2.5,8.5]],"color":"#98FF96","thickness":8,"rounded":true}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,4.5],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFFFFF","stroke":"#C77EFA","thickness":1,"textColor":"#000000"}}
```

Normal Sudoku rules apply. RENBAN- Numbers on purple lines are each a set of non-repeating, consecutive numbers, in any order. GERMAN WISPERS- Numbers on green lines are 5 apart from their neighbors on the line, Numbers may repeat on green lines, if other rules allow. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are shown.
