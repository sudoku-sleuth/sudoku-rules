---
format: open-rules
title: Extenban Quads
setter: Blobz
source: https://sudokupad.app/cvnhbfn2eh
case: https://sudoku-sleuth.com/cases/extenban-quads
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
exported: 2444f0dc6a53543682714b941d0d90af
---

```rules
sudoku 9x9
quadruple-1: quadruple r8c8-r8c9-r9c8-r9c9 digits [4,5,7]
quadruple-2: quadruple r1c8-r1c9-r2c8-r2c9 digits [4,5,6]
quadruple-3: quadruple r1c1-r1c2-r2c1-r2c2 digits [3,5,6]
quadruple-4: quadruple r8c1-r8c2-r9c1-r9c2 digits [3,7]
quadruple-5: quadruple r3c6-r3c7-r4c6-r4c7 digits [4,6,9,9]
quadruple-6: quadruple r6c3-r6c4-r7c3-r7c4 digits [3,7,8,8]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[6.5,0.5],[5.5,1.5],[4.5,2.5],[3.5,2.5]],"color":"#EE88EECC","thickness":11.2,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[8.5,2.5],[7.5,3.5],[6.5,4.5],[6.5,5.5]],"color":"#EE88EECC","thickness":11.2,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[7.5,5.5],[6.5,6.5],[5.5,7.5],[4.5,7.5],[3.5,7.5]],"color":"#EE88EECC","thickness":11.2,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[3.5,1.5],[2.5,2.5],[1.5,3.5],[1.5,4.5],[1.5,5.5]],"color":"#EE88EECC","thickness":11.2,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[1.5,2.5],[1.5,1.5],[2.5,1.5],[3.5,0.5]],"color":"#EE88EECC","thickness":11.2,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[2.5,4.5],[3.5,3.5],[4.5,4.5],[5.5,5.5]],"color":"#EE88EECC","thickness":11.2,"rounded":true}}
```

Normal sudoku rules apply.

Quadruples: Digits in circles must appear in the 2x2 area around the circle. 

Extended Renbans: Digits along a pink line form a consecutive group in any order. Digits do not repeat on the line EXCEPT for the ends, which are the SAME digit.

For example, possible fills for a line of length 5 might be 64756, 25342, 34123, etc.
