---
format: open-rules
title: Wine, Scotch and Martini
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/wine-scotch-and-martini
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
kropki-1: kropki r3c1-r4c1 colour "white"
kropki-2: kropki r4c2-r4c3 colour "white"
kropki-3: kropki r6c7-r6c8 colour "white"
kropki-4: kropki r7c1-r8c1 colour "white"
kropki-5: kropki r5c7-r5c8 colour "white"
kropki-6: kropki r6c5-r6c6 colour "white"
kropki-7: kropki r6c4-r6c5 colour "white"
kropki-8: kropki r6c3-r6c4 colour "white"
kropki-9: kropki r6c3-r7c3 colour "white"
kropki-10: kropki r1c8-r2c8 colour "white"
kropki-11: kropki r1c7-r2c7 colour "white"
kropki-12: kropki r3c2-r3c3 colour "black"
kropki-13: kropki r2c2-r2c3 colour "black"
kropki-14: kropki r2c1-r3c1 colour "black"
whispers-1: whispers r3c9-r3c8-r3c7-r3c6-r3c5-r4c6-r5c7-r4c8 gap 5
whispers-2: whispers r4c8-r3c9 gap 5
whispers-3: whispers r3c7-r4c8 gap 5
whispers-4: whispers r3c6-r4c7 gap 5
palindrome-1: palindrome r6c5-r6c4-r6c3-r7c3-r8c3-r7c4-r8c4-r8c5-r8c6-r7c6
palindrome-2: palindrome r6c5-r6c6-r7c6
pair-1: pair r4c1-r4c2 sum 10
pair-2: pair r2c1-r2c2 sum 10
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[8.5,0.5],[8.5,1.5],[8.5,2.5]],"color":"#B8B8B8","thickness":8,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[8.5,1.5],[7.5,1.5],[6.5,1.5],[5.5,1.5],[4.5,1.5]],"color":"#B8B8B8","thickness":8,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[0.5,0.5],[0.5,1.5],[0.5,2.5]],"color":"#B8B8B8","thickness":8,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[8.5,5.5],[8.5,6.5],[8.5,7.5]],"color":"#B8B8B8","thickness":8,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[8.5,6.5],[7.5,6.5],[6.5,6.5],[5.5,6.5],[4.5,6.5]],"color":"#B8B8B8","thickness":8,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[2.5,4.5],[1.5,3.5]],"color":"#B8B8B8","thickness":8,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[1.5,3.5],[1.5,4.5],[1.5,5.5],[1.5,6.5],[1.5,7.5]],"color":"#B8B8B8","thickness":8,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[1.5,7.5],[1.5,8.5]],"color":"#B8B8B8","thickness":8,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[4.5,1.5],[3.5,1.5]],"color":"#B8B8B8","thickness":8,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[0.5,0.5],[1.5,0.5]],"color":"#B8B8B8","thickness":8,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[0.5,2.5],[1.5,2.5]],"color":"#B8B8B8","thickness":8,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[5.5,2.5],[4.5,2.5],[4.5,3.5],[4.5,4.5],[4.5,5.5],[5.5,5.5]],"color":"#B8B8B8","thickness":8,"rounded":true}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,5.5],"width":0.25,"height":0.25,"rounded":false,"fill":"#FFFFFF","text":"V","textColor":"#000000","thickness":0,"fontSize":25}}
```

Normal Sudoku rules apply. Numbers on green lines are at least 5 apart from their neighbors on the line. Numbers may repeat on the green line. Numbers on the orange line are a palindrome. The solver must determine where the palindrome starts and ends. The red line has no effect on the puzzle. Numbers with an X between them sum to 10. Numbers with a black dot between them are in a ratio of 2:1. Numbers with a white dot between them are consecutive. Not all possible X and dots are given.
