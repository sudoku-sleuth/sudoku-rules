---
format: open-rules
title: Eiffel Tower and Fireworks
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/eiffel-tower-and-fireworks
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 3f6da6dbae4062a7ad202a981261bb7e
---

```rules
sudoku 9x9
whispers-1: whispers r9c7-r8c6 gap 5
whispers-2: whispers r8c4-r8c5-r8c6-r7c6-r6c6-r5c5 gap 5
whispers-3: whispers r1c5-r2c5-r3c5-r4c5-r5c5-r6c4-r7c4-r8c4-r9c3 gap 5
pair-1: pair r5c8-r6c8 sum 10
pair-2: pair r9c6-r9c7 sum 10
pair-3: pair r3c7-r4c7 sum 5
pair-4: pair r4c3-r5c3 sum 5
pair-5: pair r2c6-r2c7 sum 5
pair-6: pair r5c1-r5c2 sum 5
pair-7: pair r9c5-r9c6 sum 5
pair-8: pair r9c1-r9c2 sum 5
pair-9: pair r7c8-r8c8 sum 5
pair-10: pair r6c9-r7c9 sum 5
negative relations [{"op":"sum","value":5}] except [["r3c7","r4c7"],["r4c3","r5c3"],["r2c6","r2c7"],["r5c1","r5c2"],["r9c5","r9c6"],["r9c1","r9c2"],["r7c8","r8c8"],["r6c9","r7c9"],["r5c8","r6c8"],["r9c6","r9c7"]]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,6.5],"width":0.85,"height":0.85,"rounded":true,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[2.5,6.5],[2.5,5.5],[2.5,4.5]],"color":"#CFCFCF","thickness":21,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,6.5],"width":0.85,"height":0.85,"rounded":true,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[2.5,6.5],[1.5,6.5],[0.5,6.5]],"color":"#CFCFCF","thickness":21,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,6.5],"width":0.85,"height":0.85,"rounded":true,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[2.5,6.5],[2.5,7.5],[2.5,8.5]],"color":"#CFCFCF","thickness":21,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,6.5],"width":0.85,"height":0.85,"rounded":true,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[2.5,6.5],[3.5,6.5],[4.5,6.5]],"color":"#CFCFCF","thickness":21,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,6.5],"width":0.85,"height":0.85,"rounded":true,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[2.5,6.5],[3.5,5.5],[4.5,4.5]],"color":"#CFCFCF","thickness":21,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,6.5],"width":0.85,"height":0.85,"rounded":true,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[2.5,6.5],[1.5,5.5],[0.5,4.5]],"color":"#CFCFCF","thickness":21,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,6.5],"width":0.85,"height":0.85,"rounded":true,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[2.5,6.5],[1.5,7.5],[0.5,8.5]],"color":"#CFCFCF","thickness":21,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,1.5],"width":0.85,"height":0.85,"rounded":true,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[4.5,1.5],[5.5,2.5],[6.5,3.5]],"color":"#CFCFCF","thickness":21,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,1.5],"width":0.85,"height":0.85,"rounded":true,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[4.5,1.5],[4.5,2.5],[4.5,3.5]],"color":"#CFCFCF","thickness":21,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,1.5],"width":0.85,"height":0.85,"rounded":true,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[4.5,1.5],[3.5,1.5],[2.5,1.5]],"color":"#CFCFCF","thickness":21,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,1.5],"width":0.85,"height":0.85,"rounded":true,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[4.5,1.5],[3.5,0.5]],"color":"#CFCFCF","thickness":21,"rounded":true}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,1.5],"width":0.85,"height":0.85,"rounded":true,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[4.5,1.5],[4.5,0.5]],"color":"#CFCFCF","thickness":21,"rounded":true}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,1.5],"width":0.85,"height":0.85,"rounded":true,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[4.5,1.5],[5.5,0.5]],"color":"#CFCFCF","thickness":21,"rounded":true}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,1.5],"width":0.85,"height":0.85,"rounded":true,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[4.5,1.5],[5.5,1.5],[6.5,1.5]],"color":"#CFCFCF","thickness":21,"rounded":true}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,1.5],"width":0.85,"height":0.85,"rounded":true,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"line","points":[[4.5,1.5],[3.5,2.5],[2.5,3.5]],"color":"#CFCFCF","thickness":21,"rounded":true}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,6.5],"width":0.85,"height":0.85,"rounded":true,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"line","points":[[2.5,6.5],[3.5,7.5]],"color":"#CFCFCF","thickness":21,"rounded":true}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"line","points":[[0.5,8.5],[1.5,7.5],[2.5,6.5],[3.5,5.5],[4.5,4.5]],"color":"#FF423C","thickness":8,"rounded":true}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"line","points":[[3.5,7.5],[2.5,6.5],[1.5,5.5],[0.5,4.5]],"color":"#FF423C","thickness":8,"rounded":true}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"line","points":[[3.5,0.5],[4.5,1.5],[5.5,2.5],[6.5,3.5]],"color":"#FF423C","thickness":8,"rounded":true}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"line","points":[[2.5,3.5],[3.5,2.5],[4.5,1.5],[5.5,0.5]],"color":"#FF423C","thickness":8,"rounded":true}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"line","points":[[0.5,6.5],[1.5,6.5],[2.5,6.5],[3.5,6.5],[4.5,6.5]],"color":"#756EFF","thickness":8,"rounded":true}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"line","points":[[2.5,8.5],[2.5,7.5],[2.5,6.5],[2.5,5.5],[2.5,4.5]],"color":"#756EFF","thickness":8,"rounded":true}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"line","points":[[2.5,1.5],[3.5,1.5],[4.5,1.5],[5.5,1.5],[6.5,1.5]],"color":"#756EFF","thickness":8,"rounded":true}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"line","points":[[4.5,3.5],[4.5,2.5],[4.5,1.5],[4.5,0.5]],"color":"#756EFF","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply. Numbers on green lines are at least 5 apart from their neighbors. Numbers on fireworks increase from the center. Numbers with a V between them sum to 5.  ALL POSSIBLE V ARE GIVEN. Numbers with an X between them sum to 10. Not all possible X are given.
