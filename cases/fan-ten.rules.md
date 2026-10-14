---
format: open-rules
title: Fan Ten
setter: EPH
source: https://sudokupad.app/tg0wtm0p6m
case: https://sudoku-sleuth.com/cases/fan-ten
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
exported: a937e31defc9668fb87466b0dfc22467
---

```rules
sudoku 9x9
kropki-1: kropki r2c8-r3c8 white
kropki-2: kropki r4c7-r5c7 white
kropki-3: kropki r6c1-r6c2 white
kropki-4: kropki r5c1-r6c1 white
kropki-5: kropki r2c2-r2c3 black
kropki-6: kropki r2c3-r2c4 black
kropki-7: kropki r4c6-r4c7 black
kropki-8: kropki r8c6-r8c7 black
kropki-9: kropki r7c2-r7c3 black
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[1.5,0.5],[0.5,0.5],[0.5,1.5],[1.5,1.5]],"color":"#FF757E","thickness":8,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[0.5,7.5],[0.5,8.5],[1.5,8.5],[1.5,7.5]],"color":"#FF757E","thickness":8,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[7.5,7.5],[8.5,7.5],[8.5,8.5],[7.5,8.5]],"color":"#FF757E","thickness":8,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[7.5,1.5],[7.5,0.5],[8.5,0.5],[8.5,1.5]],"color":"#FF757E","thickness":8,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[3.5,0.5],[4.5,0.5],[5.5,0.5],[5.5,1.5],[5.5,2.5]],"color":"#FF757E","thickness":8,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[2.5,3.5],[1.5,3.5],[0.5,3.5],[0.5,4.5],[0.5,5.5]],"color":"#FF757E","thickness":8,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[3.5,6.5],[3.5,7.5],[3.5,8.5],[4.5,8.5],[5.5,8.5]],"color":"#FF757E","thickness":8,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[6.5,5.5],[7.5,5.5],[8.5,5.5],[8.5,4.5],[8.5,3.5]],"color":"#FF757E","thickness":8,"rounded":true}}
```

Standard sudoku rules apply: each row, column, and 3x3 box must contain all the digits from 1 to 9.

Anti-Palindrome: On a light red line, the sum of the Nth digit from one end and the Nth digit from the other end must be 10.

Kropki pairs: Black dots separate digits in a 2:1 ratio.  White dots separate digits with a difference of 1.
