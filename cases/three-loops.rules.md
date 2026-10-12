---
format: open-rules
title: Three Loops
setter: Blobz
source: https://sudokupad.app/dnlzg0711f
case: https://sudoku-sleuth.com/cases/three-loops
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
givens: r1c3=7 r2c4=9 r3c7=3 r3c9=9 r5c6=1 r6c2=9 r9c1=4 r9c8=9
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[5.5,2.5],[4.5,3.5],[3.5,4.5],[4.5,5.5]],"color":"#CCCCCC","thickness":11.2,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[4.5,5.5],[3.5,6.5],[4.5,6.5]],"color":"#CCCCCC","thickness":11.2,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[4.5,6.5],[5.5,7.5],[5.5,6.5],[5.5,5.5],[6.5,5.5],[5.5,4.5],[6.5,4.5],[7.5,3.5],[6.5,3.5],[6.5,2.5],[5.5,2.5]],"color":"#CCCCCC","thickness":11.2,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[2.5,3.5],[1.5,4.5],[1.5,5.5],[0.5,6.5]],"color":"#CCCCCC","thickness":11.2,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[0.5,6.5],[1.5,7.5]],"color":"#CCCCCC","thickness":11.2,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[1.5,7.5],[2.5,7.5],[3.5,8.5],[4.5,7.5],[5.5,8.5],[6.5,7.5]],"color":"#CCCCCC","thickness":11.2,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[6.5,7.5],[7.5,6.5]],"color":"#CCCCCC","thickness":11.2,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[7.5,6.5],[7.5,5.5],[7.5,4.5],[8.5,3.5]],"color":"#CCCCCC","thickness":11.2,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[8.5,3.5],[7.5,2.5],[7.5,1.5],[6.5,0.5]],"color":"#CCCCCC","thickness":11.2,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[2.5,0.5],[3.5,1.5],[4.5,0.5],[5.5,0.5],[6.5,0.5]],"color":"#CCCCCC","thickness":11.2,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[1.5,2.5],[2.5,3.5]],"color":"#CCCCCC","thickness":11.2,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[1.5,2.5],[0.5,1.5],[1.5,0.5],[2.5,0.5]],"color":"#CCCCCC","thickness":11.2,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[2.5,4.5],[3.5,5.5]],"color":"#BBBBBB","thickness":11.2,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[2.5,4.5],[2.5,5.5],[2.5,6.5],[1.5,6.5]],"color":"#BBBBBB","thickness":11.2,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[0.5,5.5],[1.5,6.5]],"color":"#BBBBBB","thickness":11.2,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[0.5,5.5],[0.5,4.5],[1.5,3.5],[2.5,2.5]],"color":"#BBBBBB","thickness":11.2,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[2.5,1.5],[2.5,2.5]],"color":"#BBBBBB","thickness":11.2,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[2.5,1.5],[3.5,0.5]],"color":"#BBBBBB","thickness":11.2,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[3.5,0.5],[4.5,1.5],[4.5,2.5]],"color":"#BBBBBB","thickness":11.2,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[4.5,2.5],[5.5,3.5],[4.5,4.5],[3.5,5.5]],"color":"#BBBBBB","thickness":11.2,"rounded":true}}
```

Normal sudoku rules apply.

The grid contains three loops. A loop may be "German Whisper", "Entropic", or "Region Sum". The nature of the loops (which may repeat) are to be determined by the solver.

German Whisper: Adjacent digits along a German Whisper line must differ by at least 5. 

Entropic: Any set of three sequential cells along an Entropic line must contain a low (1-3) digit, a middly (4-6) digit, and a high (7-9) digit.

Region Sum: Digits on the line have an equal sum N within each box it passes through. If a line passes through the same box more than once, each individual segment of such a line within that box sums to N separately.
