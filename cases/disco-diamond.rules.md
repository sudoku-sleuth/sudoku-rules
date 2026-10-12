---
format: open-rules
title: Disco Diamond
setter: Tingo
source: https://sudokupad.app/fmmwjplijd
case: https://sudoku-sleuth.com/cases/disco-diamond
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
diagonal-1: diagonal direction "main"
diagonal-2: diagonal direction "anti"
kropki-1: kropki r3c5-r4c5 colour "black"
kropki-2: kropki r5c3-r5c4 colour "black"
kropki-3: kropki r6c5-r7c5 colour "black"
kropki-4: kropki r5c6-r5c7 colour "black"
pair-1: pair r6c4-r7c4 relation {"op":"sum","value":10}
pair-2: pair r6c6-r7c6 relation {"op":"sum","value":10}
pair-3: pair r3c2-r4c2 relation {"op":"sum","value":10}
pair-4: pair r3c6-r3c7 relation {"op":"sum","value":10}
pair-5: pair r5c3-r6c3 relation {"op":"sum","value":10}
pair-6: pair r4c4-r5c4 relation {"op":"sum","value":10}
pair-7: pair r4c7-r4c8 relation {"op":"sum","value":10}
pair-8: pair r5c5-r6c5 relation {"op":"sum","value":5}
pair-9: pair r3c9-r4c9 relation {"op":"sum","value":5}
pair-10: pair r7c6-r7c7 relation {"op":"sum","value":5}
pair-11: pair r4c8-r4c9 relation {"op":"sum","value":5}
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[0.5,8.5],[0.5,7.5],[0.5,6.5],[0.5,5.5],[0.5,4.5],[0.5,3.5],[0.5,2.5],[0.5,1.5],[0.5,0.5]],"color":"#00FF00","thickness":8,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[8.5,8.5],[8.5,7.5],[8.5,6.5],[8.5,5.5],[8.5,4.5],[8.5,3.5],[8.5,2.5],[8.5,1.5],[8.5,0.5]],"color":"#00FF00","thickness":8,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[6.5,8.5],[6.5,7.5],[6.5,6.5],[6.5,5.5],[6.5,4.5],[6.5,3.5],[6.5,2.5],[6.5,1.5],[6.5,0.5]],"color":"#00FF00","thickness":8,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[4.5,8.5],[4.5,7.5],[4.5,6.5],[4.5,5.5],[4.5,4.5],[4.5,3.5],[4.5,2.5],[4.5,1.5],[4.5,0.5]],"color":"#00FF00","thickness":8,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[2.5,0.5],[2.5,1.5],[2.5,2.5],[2.5,3.5],[2.5,4.5],[2.5,5.5],[2.5,6.5],[2.5,7.5],[2.5,8.5]],"color":"#00FF00","thickness":8,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[0.5,0.5],[1.5,0.5],[2.5,0.5],[3.5,0.5]],"color":"#FF00FF","thickness":8,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[8.5,0.5],[7.5,0.5],[6.5,0.5],[5.5,0.5],[4.5,0.5],[3.5,0.5]],"color":"#FF00FF","thickness":8,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[0.5,2.5],[1.5,2.5],[2.5,2.5],[3.5,2.5],[4.5,2.5],[5.5,2.5],[6.5,2.5],[7.5,2.5],[8.5,2.5]],"color":"#FF00FF","thickness":8,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[8.5,4.5],[7.5,4.5],[6.5,4.5],[5.5,4.5],[4.5,4.5],[3.5,4.5],[2.5,4.5],[1.5,4.5],[0.5,4.5]],"color":"#FF00FF","thickness":8,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[0.5,6.5],[1.5,6.5],[2.5,6.5],[3.5,6.5],[4.5,6.5],[5.5,6.5],[6.5,6.5],[7.5,6.5],[8.5,6.5]],"color":"#FF00FF","thickness":8,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[8.5,8.5],[7.5,8.5],[6.5,8.5],[5.5,8.5],[4.5,8.5],[3.5,8.5],[2.5,8.5],[1.5,8.5],[0.5,8.5]],"color":"#FF00FF","thickness":8,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[0.5,4.5],[1.5,3.5],[2.5,2.5],[3.5,1.5],[4.5,0.5]],"color":"#00FFFF","thickness":8,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[4.5,8.5],[5.5,7.5],[6.5,6.5],[7.5,5.5],[8.5,4.5]],"color":"#00FFFF","thickness":8,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[8.5,4.5],[7.5,3.5],[6.5,2.5],[5.5,1.5],[4.5,0.5]],"color":"#FF5900","thickness":8,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[0.5,4.5],[1.5,5.5],[2.5,6.5],[3.5,7.5],[4.5,8.5]],"color":"#FF5900","thickness":8,"rounded":true}}
```

Normal Sudoku Rules Apply
Digits may not repeat on either diagonal.
Cells joined by "V" sum to 5. Cells joined by "X" sum to 10. Not all Xs and Vs are given.
Black dots separate cells of 2:1 ratio values. Not all black dots are given.
Digits along colored lines cannot be consecutive with their adjacent neighbors. The different colors are only used to indicate unique lines. Digits along unique lines may repeat if allowed by other rules. Note: The anti-consecutive rule DOES NOT apply to the diagonals.
