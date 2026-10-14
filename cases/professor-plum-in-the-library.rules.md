---
format: open-rules
title: Professor Plum in the Library
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/professor-plum-in-the-library
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: f51c303722db10478ebe76852b5f746c
---

```rules
sudoku 9x9
kropki-1: kropki r2c8-r2c9 black
kropki-2: kropki r2c7-r2c8 black
kropki-3: kropki r1c9-r2c9 black
kropki-4: kropki r2c5-r2c6 black
kropki-5: kropki r1c3-r2c3 black
kropki-6: kropki r5c5-r6c5 black
kropki-7: kropki r4c5-r4c6 black
kropki-8: kropki r5c8-r6c8 black
kropki-9: kropki r3c4-r4c4 black
kropki-10: kropki r6c9-r7c9 black
kropki-11: kropki r7c7-r8c7 black
kropki-12: kropki r8c6-r9c6 black
kropki-13: kropki r7c4-r8c4 black
kropki-14: kropki r8c3-r8c4 black
kropki-15: kropki r8c3-r9c3 black
kropki-16: kropki r3c3-r3c4 black
kropki-17: kropki r8c6-r8c7 black
kropki-18: kropki r3c4-r3c5 black
renban-1: renban r6c2-r7c2-r8c3-r9c3-r8c2-r9c1
renban-2: renban r3c2-r4c2-r4c3-r3c3
renban-3: renban r7c1-r6c1-r5c2-r6c3-r6c4
negative relations [{"op":"ratio","value":2}] except [["r2c8","r2c9"],["r2c7","r2c8"],["r1c9","r2c9"],["r2c5","r2c6"],["r1c3","r2c3"],["r5c5","r6c5"],["r4c5","r4c6"],["r5c8","r6c8"],["r3c4","r4c4"],["r6c9","r7c9"],["r7c7","r8c7"],["r8c6","r9c6"],["r7c4","r8c4"],["r8c3","r8c4"],["r8c3","r9c3"],["r3c3","r3c4"],["r8c6","r8c7"],["r3c4","r3c5"]]
```

```drawing
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[0.5,8.5],[1.5,8.5]],"color":"#CC873C","thickness":8,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[0.5,7.5],[1.5,7.5]],"color":"#CC873C","thickness":8,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[0.5,6.5],[1.5,6.5]],"color":"#CC873C","thickness":8,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[0.5,5.5],[1.5,5.5]],"color":"#CC873C","thickness":8,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[0.5,4.5],[1.5,4.5]],"color":"#CC873C","thickness":8,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[0.5,3.5],[1.5,3.5]],"color":"#CC873C","thickness":8,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[0.5,2.5],[1.5,2.5]],"color":"#CC873C","thickness":8,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[0.5,0.5],[1.5,0.5]],"color":"#CC873C","thickness":8,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[2.5,8.5],[3.5,8.5]],"color":"#CC623F","thickness":8,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[2.5,7.5],[3.5,7.5]],"color":"#CC623F","thickness":8,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[2.5,6.5],[3.5,6.5]],"color":"#CC623F","thickness":8,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[2.5,5.5],[3.5,5.5]],"color":"#CC623F","thickness":8,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[2.5,3.5],[3.5,3.5]],"color":"#CC623F","thickness":8,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[2.5,0.5],[3.5,0.5]],"color":"#CC623F","thickness":8,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[6.5,8.5],[7.5,8.5]],"color":"#8C9AFF","thickness":8,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[6.5,7.5],[7.5,7.5]],"color":"#8C9AFF","thickness":8,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[6.5,6.5],[7.5,6.5]],"color":"#8C9AFF","thickness":8,"rounded":true}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[6.5,4.5],[7.5,4.5]],"color":"#8C9AFF","thickness":8,"rounded":true}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[4.5,8.5],[5.5,8.5]],"color":"#FC4A47","thickness":8,"rounded":true}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[4.5,7.5],[5.5,7.5]],"color":"#FC4A47","thickness":8,"rounded":true}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[4.5,5.5],[5.5,5.5]],"color":"#FC4A47","thickness":8,"rounded":true}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[4.5,2.5],[5.5,2.5]],"color":"#FC4A47","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply. RENBAN- Numbers on the 3 purple lines (Professor Plum) are each a set of non-repeating, consecutive numbers, in any order. CONSECUTIVE PAIRS- Two-cell vertical lines of four different colors (library books) only appear on shelves between rows 1 and 2, 3 and 4, 5 and 6, or 7 and 8 respectively. A book indicates the pair is consecutive. No book means that the vertical pair is NOT consecutive. If Professor Plum is in front of a possible book (3 places), there is no negative constraint. Horizontal consecutiveness is also not negatively constrained/ considered in the puzzle. BLACK KROPKI DOTS- Numbers with a black dot between them are in a ratio of 2:1. ALL possible black dots between orthogonal neighbors (vertical AND horizontal), throughout the ENTIRE PUZZLE, are shown. Professor Plum says he is looking for a candlestick (no effect on the puzzle).
