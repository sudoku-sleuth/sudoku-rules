---
format: open-rules
title: Corset
setter: Blobz
source: https://sudokupad.app/blobz/corset
case: https://sudoku-sleuth.com/cases/corset
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
exported: d34be2fd5a3ac372ba8faecdb9dec19d
---

```rules
sudoku 9x9
renban-1: renban r1c1-r2c1-r2c2-r1c2
renban-2: renban r8c1-r8c2-r9c2-r9c1
renban-3: renban r7c8-r8c8-r8c9-r7c9
renban-4: renban r2c8-r3c8-r3c9-r2c9
quadruple-1: quadruple r4c1-r4c2-r5c1-r5c2 digits [5,8,9]
quadruple-2: quadruple r7c2-r7c3-r8c2-r8c3 digits [2,4,5,9]
quadruple-3: quadruple r2c2-r2c3-r3c2-r3c3 digits [1,6,8,9]
quadruple-4: quadruple r1c7-r1c8-r2c7-r2c8 digits [3,7,8,9]
quadruple-5: quadruple r8c7-r8c8-r9c7-r9c8 digits [1,2,6,9]
quadruple-6: quadruple r5c1-r5c2-r6c1-r6c2 digits [2,4,9]
quadruple-7: quadruple r3c8-r3c9-r4c8-r4c9 digits [7]
quadruple-8: quadruple r6c8-r6c9-r7c8-r7c9 digits [1]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[0.5,2.5],[1.5,3.5]],"color":"#CFCFCF","thickness":16,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[1.5,2.5],[2.5,3.5]],"color":"#CFCFCF","thickness":16,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[2.5,2.5],[3.5,3.5]],"color":"#CFCFCF","thickness":16,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[3.5,2.5],[4.5,3.5]],"color":"#CFCFCF","thickness":16,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[4.5,2.5],[5.5,3.5]],"color":"#CFCFCF","thickness":16,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[5.5,2.5],[6.5,3.5]],"color":"#CFCFCF","thickness":16,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[6.5,2.5],[7.5,3.5]],"color":"#CFCFCF","thickness":16,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[7.5,2.5],[8.5,3.5]],"color":"#CFCFCF","thickness":16,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[0.5,6.5],[1.5,5.5]],"color":"#CFCFCF","thickness":16,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[1.5,6.5],[2.5,5.5]],"color":"#CFCFCF","thickness":16,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[2.5,6.5],[3.5,5.5]],"color":"#CFCFCF","thickness":16,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[3.5,6.5],[4.5,5.5]],"color":"#CFCFCF","thickness":16,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[4.5,6.5],[5.5,5.5]],"color":"#CFCFCF","thickness":16,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[5.5,6.5],[6.5,5.5]],"color":"#CFCFCF","thickness":16,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[6.5,6.5],[7.5,5.5]],"color":"#CFCFCF","thickness":16,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[7.5,6.5],[8.5,5.5]],"color":"#CFCFCF","thickness":16,"rounded":true}}
```

Normal sudoku rules apply. 

All grey lines (palindromes) contain repeated digits.

Digits along pink lines form a consecutive sequence in any order.

Digits in circles must appear in the surrounding 2x2 area.
