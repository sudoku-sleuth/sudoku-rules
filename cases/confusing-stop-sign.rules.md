---
format: open-rules
title: Confusing STOP Sign?
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/confusing-stop-sign
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
kropki-1: kropki r9c5-r9c6 colour "white"
kropki-2: kropki r9c6-r9c7 colour "white"
kropki-3: kropki r9c7-r9c8 colour "white"
kropki-4: kropki r4c1-r5c1 colour "white"
kropki-5: kropki r1c4-r1c5 colour "white"
kropki-6: kropki r1c5-r1c6 colour "white"
kropki-7: kropki r4c9-r5c9 colour "white"
kropki-8: kropki r9c3-r9c4 colour "white"
kropki-9: kropki r7c2-r7c3 colour "white"
whispers-1: whispers r6c4-r5c4-r4c4 gap 5
whispers-2: whispers r4c3-r4c4-r4c5 gap 5
whispers-3: whispers r6c2-r6c3-r5c3-r5c2-r4c2-r4c3 gap 5
renban-1: renban r4c6-r5c6
renban-2: renban r4c7-r5c7-r6c7-r4c8-r5c8
renban-3: renban r4c6-r4c5-r5c5-r6c5-r6c6-r5c6
pair-1: pair r3c2-r3c3 relation {"op":"sum","value":10}
pair-2: pair r3c5-r3c6 relation {"op":"sum","value":10}
pair-3: pair r7c3-r7c4 relation {"op":"sum","value":10}
pair-4: pair r7c6-r7c7 relation {"op":"sum","value":10}
pair-5: pair r4c3-r4c4 relation {"op":"sum","value":10}
pair-6: pair r5c3-r5c4 relation {"op":"sum","value":10}
pair-7: pair r6c3-r6c4 relation {"op":"sum","value":10}
pair-8: pair r4c6-r5c6 relation {"op":"sum","value":10}
pair-9: pair r5c5-r6c5 relation {"op":"sum","value":10}
pair-10: pair r8c5-r9c5 relation {"op":"sum","value":5}
negative relations [{"op":"difference","value":1}] except [["r9c5","r9c6"],["r9c6","r9c7"],["r9c7","r9c8"],["r4c1","r5c1"],["r1c4","r1c5"],["r1c5","r1c6"],["r4c9","r5c9"],["r9c3","r9c4"],["r7c2","r7c3"],["r3c2","r3c3"],["r3c5","r3c6"],["r7c3","r7c4"],["r7c6","r7c7"],["r8c5","r9c5"],["r4c3","r4c4"],["r5c3","r5c4"],["r6c3","r6c4"],["r4c6","r5c6"],["r5c5","r6c5"]]
```

```drawing
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[2.5,8.5],[3.5,8.5],[4.5,8.5],[5.5,8.5],[6.5,8.5]],"color":"#e0e0e0","thickness":8,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[8.5,2.5],[8.5,3.5],[8.5,4.5],[8.5,5.5],[8.5,6.5]],"color":"#e0e0e0","thickness":8,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[2.5,0.5],[3.5,0.5],[4.5,0.5],[5.5,0.5],[6.5,0.5]],"color":"#e0e0e0","thickness":8,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[0.5,2.5],[0.5,3.5],[0.5,4.5],[0.5,5.5],[0.5,6.5]],"color":"#e0e0e0","thickness":8,"rounded":true}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[0.5,6.5],[1.5,7.5],[2.5,8.5]],"color":"#e0e0e0","thickness":8,"rounded":true}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[6.5,8.5],[7.5,7.5],[8.5,6.5]],"color":"#e0e0e0","thickness":8,"rounded":true}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[8.5,2.5],[7.5,1.5],[6.5,0.5]],"color":"#e0e0e0","thickness":8,"rounded":true}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"line","points":[[2.5,0.5],[1.5,1.5],[0.5,2.5]],"color":"#e0e0e0","thickness":8,"rounded":true}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"line","points":[[2.5,0.5],[2.5,1.5],[2.5,2.5],[2.5,3.5],[2.5,4.5],[2.5,5.5],[2.5,6.5],[2.5,7.5],[2.5,8.5]],"color":"#e0e0e0","thickness":8,"rounded":true}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"line","points":[[6.5,0.5],[6.5,1.5],[6.5,2.5],[6.5,3.5],[6.5,4.5],[6.5,5.5],[6.5,6.5],[6.5,7.5],[6.5,8.5]],"color":"#e0e0e0","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply. Numbers on red lines are a set of non-repeating, consecutive numbers in any order. Numbers on green lines are at least 5 apart from their neighbors on the line. Numbers with an X between them sum to 10. Numbers with a V between them sum to 5. Not all X and V are given. Numbers with white dots between them are consecutive. Not all possible white dots are given.  However, all possible white dots on the octagonal border ARE given.
