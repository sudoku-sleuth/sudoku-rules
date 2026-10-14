---
format: open-rules
title: Go The Entropic Way For Math
setter: Chip Sounder
source: https://sudokupad.app/esthfen3gi
case: https://sudoku-sleuth.com/cases/go-the-entropic-way-for-math
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
exported: 61a4411931e9bbf6a723f3340b0e3b2f
---

```rules
sudoku 9x9
cage-1: cage r4c8-r5c8-r6c8 total 15 connected true
cage-2: cage r1c8-r2c8 total 8 connected true
cage-3: cage r8c8-r9c8 total 5 connected true
cage-4: cage r5c1-r5c2 total 15 connected true
cage-5: cage r8c1-r8c2 total 7 connected true
cage-6: cage r6c3-r6c4 total 12 connected true
kropki-1: kropki r6c2-r7c2 black
kropki-2: kropki r3c4-r4c4 white
kropki-3: kropki r4c8-r4c9 white
kropki-4: kropki r7c9-r8c9 white
pair r6c2-r6c3 sum 5
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[8.5,0.5],[8.5,2.5],[7.5,3.5],[7.5,5.5],[6.5,6.5],[6.5,8.5],[2.5,8.5],[2.5,6.5],[1.5,5.5],[1.5,3.5],[0.5,2.5],[0.5,0.5]],"color":"#cdaaffff","thickness":7.04,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[2.5,0.5],[2.5,2.5],[3.5,3.5],[3.5,6.5],[5.5,6.5],[5.5,3.5],[6.5,2.5],[6.5,0.5]],"color":"#cdaaffff","thickness":7.04,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[4.5,0.5],[4.5,5.5]],"color":"#cdaaffff","thickness":7.04,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[5.5,6.5],[7.5,4.5]],"color":"#aaaf","thickness":17.28,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[1.5,2.5],[3.5,4.5]],"color":"#aaaf","thickness":17.28,"rounded":true}}
```

Normal sudoku rules apply.
Cells on a purple entropic line must alternate between low (123), medium (456) and high (789), any group of 3 connected cells on the line MUST contain one of each entropy.
Digits in a dotted cage sum to the total given in the top left corner of the cage without repeat.
Digits on a grey line must read the same forwards as backwards.
Cells separated by a black dot has one digit double the other (1:2 ratio).
Cells separated by a white dot are consecutive.
Cells separated by a V sum to 5.
No negative constraints.
