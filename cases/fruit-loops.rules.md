---
format: open-rules
title: Fruit Loops
setter: Blobz
source: https://sudokupad.app/blobz/fruit-loops
case: https://sudoku-sleuth.com/cases/fruit-loops
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r9c4=1
---

```rules
sudoku 9x9
pair-1: pair r8c3-r8c4 relation {"op":"sum","value":10}
pair-2: pair r3c2-r4c2 relation {"op":"sum","value":10}
pair-3: pair r1c2-r1c3 relation {"op":"sum","value":10}
pair-4: pair r9c7-r9c8 relation {"op":"sum","value":10}
pair-5: pair r6c2-r6c3 relation {"op":"sum","value":10}
pair-6: pair r2c5-r3c5 relation {"op":"sum","value":10}
pair-7: pair r3c9-r4c9 relation {"op":"sum","value":10}
pair-8: pair r1c1-r2c1 relation {"op":"sum","value":10}
pair-9: pair r8c1-r9c1 relation {"op":"sum","value":10}
pair-10: pair r8c9-r9c9 relation {"op":"sum","value":10}
pair-11: pair r1c9-r2c9 relation {"op":"sum","value":10}
pair-12: pair r1c7-r2c7 relation {"op":"sum","value":10}
pair-13: pair r3c1-r3c2 relation {"op":"sum","value":10}
pair-14: pair r6c1-r7c1 relation {"op":"sum","value":10}
pair-15: pair r8c3-r9c3 relation {"op":"sum","value":10}
pair-16: pair r6c4-r6c5 relation {"op":"sum","value":10}
pair-17: pair r6c8-r7c8 relation {"op":"sum","value":10}
pair-18: pair r7c8-r7c9 relation {"op":"sum","value":10}
negative relations [{"op":"sum","value":10}] except [["r8c3","r8c4"],["r3c2","r4c2"],["r1c2","r1c3"],["r9c7","r9c8"],["r6c2","r6c3"],["r2c5","r3c5"],["r3c9","r4c9"],["r1c1","r2c1"],["r8c1","r9c1"],["r8c9","r9c9"],["r1c9","r2c9"],["r1c7","r2c7"],["r3c1","r3c2"],["r6c1","r7c1"],["r8c3","r9c3"],["r6c4","r6c5"],["r6c8","r7c8"],["r7c8","r7c9"]]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[3.5,4.5],[4.5,3.5],[5.5,4.5],[4.5,5.5],[3.5,4.5]],"color":"#67f067aa","thickness":9.6,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[0.5,7.5],[1.5,7.5],[1.5,8.5],[0.5,8.5],[0.5,7.5]],"color":"#67f067aa","thickness":9.6,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[7.5,0.5],[8.5,0.5],[8.5,1.5],[7.5,1.5],[7.5,0.5]],"color":"#67f067aa","thickness":9.6,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[0.5,0.5],[0.5,1.5],[1.5,1.5],[1.5,0.5],[0.5,0.5]],"color":"#67f067aa","thickness":9.6,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[7.5,7.5],[7.5,8.5],[8.5,8.5],[8.5,7.5],[7.5,7.5]],"color":"#67f067aa","thickness":9.6,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[2.5,4.5],[3.5,5.5],[2.5,6.5],[2.5,4.5]],"color":"#f067f0aa","thickness":9.6,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[6.5,2.5],[6.5,4.5],[7.5,3.5],[6.5,2.5]],"color":"#f067f0aa","thickness":9.6,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[4.5,6.5],[5.5,5.5],[6.5,6.5],[4.5,6.5]],"color":"#f067f0aa","thickness":9.6,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[2.5,2.5],[3.5,1.5],[4.5,2.5],[2.5,2.5]],"color":"#f067f0aa","thickness":9.6,"rounded":true}}
```

Normal sudoku rules apply.

Along green loops, adjacent digits differ by 5 or more. 

Pink loops contain a non-repeating set of contiguous digits in any order.

Digits separated by X sum to 10; ALL possible X’s are shown.
