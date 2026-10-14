---
format: open-rules
title: Garter Snakes
setter: Kennet's Dad
source: https://sudokupad.app/1u41frhn5f
case: https://sudoku-sleuth.com/cases/garter-snakes
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r6c4=1
exported: 35706489da5ff711c81c0f8095f8aeef
---

```rules
sudoku 9x9
pair-1: pair r1c7-r1c8 sum 10
pair-2: pair r8c9-r9c9 sum 10
pair-3: pair r9c7-r9c8 sum 10
pair-4: pair r2c3-r3c3 sum 10
pair-5: pair r6c1-r6c2 sum 10
pair-6: pair r4c6-r4c7 sum 10
pair-7: pair r2c7-r3c7 sum 10
pair-8: pair r4c6-r5c6 sum 10
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[2.5,2.5],[2.5,0.5],[3.5,0.5],[3.5,2.5]],"color":"#e6261fff","thickness":5,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[3.5,6.5],[3.5,8.5],[2.5,8.5],[2.5,6.5],[1.5,6.5],[1.5,8.5],[0.5,8.5],[0.5,7.5]],"color":"#e6261fff","thickness":5,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[2.5,5.5],[2.5,3.5],[3.5,3.5],[3.5,5.5]],"color":"#e6261fff","thickness":5,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[4.5,7.5],[4.5,8.5],[5.5,8.5],[5.5,6.5],[6.5,6.5],[6.5,8.5]],"color":"#e6261fff","thickness":5,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[7.5,3.5],[8.5,3.5],[8.5,2.5],[7.5,2.5]],"color":"#e6261fff","thickness":5,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[0.5,6.5],[0.5,5.5],[1.5,5.5],[1.5,4.5],[0.5,4.5],[0.5,3.5],[1.5,3.5],[1.5,2.5],[0.5,1.5]],"color":"#fff53dff","thickness":10,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[4.5,2.5],[5.5,2.5],[5.5,1.5],[4.5,1.5],[4.5,0.5],[6.5,0.5]],"color":"#fff53dff","thickness":10,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[5.5,4.5],[5.5,3.5],[6.5,3.5],[6.5,4.5],[7.5,4.5]],"color":"#1693ffff","thickness":15,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[8.5,8.5],[7.5,8.5],[7.5,7.5],[8.5,7.5],[8.5,6.5],[7.5,6.5],[7.5,5.5],[8.5,5.5],[8.5,4.5]],"color":"#1693ffff","thickness":15,"rounded":true}}
```

Garden Path Lines, X/V Pairs

Normal sudoku rules apply. Digits in cells joined by an X sum to 10. Box borders divide lines into segments with different sums: for red lines, one sum is double the other; for yellow lines, one sum is triple the other; for blue lines; one sum is quadruple the other.

For colorblindness: red is size 8; yellow is size 16; blue is size 24
