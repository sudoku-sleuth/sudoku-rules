---
format: open-rules
title: Thrice 23
setter: Blobz
source: https://sudokupad.app/qj805x3eyf
case: https://sudoku-sleuth.com/cases/thrice-23
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r3c1=2 r3c2=3 r7c8=2 r7c9=3 r8c5=2 r9c5=3
exported: 2ca3f127387ef1a9a522ba924bbc462a
---

```rules
sudoku 9x9
cage-1: cage r4c1-r4c2-r4c3-r5c1-r5c2-r6c1 total 23 connected true
cage-2: cage r4c8-r4c9-r5c7-r5c8-r6c8-r6c9 total 23 connected true
cage-3: cage r1c4-r1c5-r1c6-r2c4-r2c5-r3c4 total 23 connected true
cage-4: cage r7c4-r8c4-r8c5-r9c4-r9c5-r9c6 total 23 connected true
cage-5: cage r4c5-r5c5-r5c6-r6c5 total 23 connected true
cage-6: cage r8c1-r9c1-r9c2 total 23 connected true
cage-7: cage r1c9-r2c8-r2c9-r3c9 total 23 connected true
cage-8: cage r8c7-r8c8-r8c9-r9c8 total 23 connected true
cage-9: cage r1c2-r2c2-r2c3-r3c3 total 23 connected true
quadruple-1: quadruple r1c1-r1c2-r2c1-r2c2 digits [6,9]
quadruple-2: quadruple r1c8-r1c9-r2c8-r2c9 digits [6,9]
quadruple-3: quadruple r8c8-r8c9-r9c8-r9c9 digits [6,9]
quadruple-4: quadruple r8c1-r8c2-r9c1-r9c2 digits [6,9]
```

```drawing
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[5.5,2.5],[5.5,3.5],[6.5,3.5],[6.5,2.5]],"color":"#CCCCCC","thickness":11.2,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[5.5,2.5],[6.5,2.5]],"color":"#CCCCCC","thickness":11.2,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[2.5,2.5],[3.5,2.5]],"color":"#CCCCCC","thickness":11.2,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[2.5,2.5],[2.5,3.5]],"color":"#CCCCCC","thickness":11.2,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[2.5,3.5],[3.5,3.5]],"color":"#CCCCCC","thickness":11.2,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[3.5,2.5],[3.5,3.5]],"color":"#CCCCCC","thickness":11.2,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[5.5,5.5],[5.5,6.5]],"color":"#CCCCCC","thickness":11.2,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[5.5,6.5],[6.5,6.5]],"color":"#CCCCCC","thickness":11.2,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[5.5,5.5],[6.5,5.5]],"color":"#CCCCCC","thickness":11.2,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[6.5,5.5],[6.5,6.5]],"color":"#CCCCCC","thickness":11.2,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[6.5,7.5],[5.5,7.5],[4.5,7.5],[3.5,7.5],[2.5,7.5],[1.5,7.5]],"color":"#CCCCCC","thickness":11.2,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[1.5,6.5],[1.5,5.5],[1.5,4.5],[1.5,3.5],[1.5,2.5],[1.5,1.5]],"color":"#CCCCCC","thickness":11.2,"rounded":true}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[7.5,6.5],[7.5,5.5],[7.5,4.5],[7.5,3.5],[7.5,2.5],[7.5,1.5]],"color":"#CCCCCC","thickness":11.2,"rounded":true}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[8.5,2.5],[8.5,3.5],[8.5,4.5],[8.5,5.5],[8.5,6.5],[8.5,7.5]],"color":"#CCCCCC","thickness":11.2,"rounded":true}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[4.5,4.5],[3.5,5.5],[2.5,5.5]],"color":"#CCCCCC","thickness":11.2,"rounded":true}}
```

Normal sudoku rules apply.

Digits in circles must appear in the surrounding 2x2 cells.

Digits in cages and along lines must sum to 23.

Digits may repeat along lines, if allowed by other rules.
