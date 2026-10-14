---
format: open-rules
title: Dialectics
setter: Kennet's Dad
source: https://sudokupad.app/usixg636r0
case: https://sudoku-sleuth.com/cases/dialectics
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: d93d47d828dfcbc6d87b990dabb142c8
---

```rules
sudoku 9x9
cage-1: cage r2c1-r2c2-r2c3 total 15 connected true
cage-2: cage r8c7-r8c8-r8c9 total 15 connected true
cage-3: cage r5c1-r6c1-r6c2 total 12 connected true
cage-4: cage r4c2-r4c3-r5c3 total 18 connected true
cage-5: cage r4c8-r4c9-r5c9 total 6 connected true
cage-6: cage r5c7-r6c7-r6c8 total 24 connected true
cage-7: cage r1c8-r1c9 total 13 connected true
cage-8: cage r2c8-r2c9 total 13 connected true
cage-9: cage r9c1-r9c2 total 10 connected true
cage-10: cage r8c1-r8c2 total 10 connected true
cage-11: cage r7c4-r7c5 total 12 connected true
cage-12: cage r3c5-r3c6 total 12 connected true
entropic-1: entropic r5c1-r6c1-r6c2
entropic-2: entropic r4c2-r4c3-r5c3
entropic-3: entropic r9c7-r8c7-r7c7-r7c8-r8c8-r9c8-r9c9-r8c9-r7c9
entropic-4: entropic r9c1-r8c1-r8c2-r9c2
entropic-5: entropic r2c5-r3c5-r3c6-r2c6
entropic-6: entropic r8c6-r9c6-r9c5
entropic-7: entropic r7c6-r6c6-r5c5
```

```drawing
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[2.5,0.5],[0.5,0.5],[0.5,1.5],[2.5,1.5],[2.5,2.5],[0.5,2.5]],"color":"#3baf","thickness":10,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[5.5,7.5],[5.5,6.5],[4.5,6.5]],"color":"#3baf","thickness":10,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[3.5,7.5],[3.5,8.5],[4.5,8.5]],"color":"#3baf","thickness":10,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[0.5,7.5],[1.5,7.5],[1.5,8.5],[0.5,8.5]],"color":"#3baf","thickness":10,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[7.5,3.5],[6.5,3.5],[6.5,4.5],[7.5,4.5]],"color":"#3baf","thickness":10,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[1.5,3.5],[0.5,3.5],[0.5,4.5]],"color":"#3baf","thickness":10,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[2.5,3.5],[3.5,3.5],[4.5,4.5]],"color":"#3baf","thickness":10,"rounded":true}}
```

Normal sudoku rules apply. Digits in a cage sum to the number given in the top left corner of that cage. Any set of three adjacent digits on a teal line must have one digit from each modulo 3 set: 147, 258, 369. Any set of three adjacent digits on a tan line must have one digit from each entropic set: 123, 456, 789.
