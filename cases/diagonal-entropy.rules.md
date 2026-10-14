---
format: open-rules
title: Diagonal Entropy
setter: Sir Moose
source: https://sudokupad.app/g8kuynjbti
case: https://sudoku-sleuth.com/cases/diagonal-entropy
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: d11ad1bfa603c3eb4b32d79cb24dd1b2
---

```rules
sudoku 9x9
diagonal direction "anti"
kropki r2c6-r2c7 black
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[2.5,0.5],[3.5,1.5]],"color":"#f067f0ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[5.5,3.5],[6.5,2.5]],"color":"#f067f0ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[3.5,5.5],[4.5,4.5]],"color":"#f067f0ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[7.5,1.5],[8.5,1.5]],"color":"#f067f0ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[1.5,5.5],[2.5,6.5]],"color":"#f067f0ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[0.5,8.5],[1.5,8.5]],"color":"#f067f0ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[0.5,7.5],[1.5,6.5]],"color":"#f067f0ff","thickness":9.6,"rounded":true}}
```

Normal Sudoku Rules Apply
Cells on a purple line contain consecutive digits.
Digits separated by a black dot are in a 1:2 ratio.
Digits cannot repeat along the positive diagonal.

Along each positive diagonal, each 3 consecutive cells must contain a low digit (1,2,3), middle digit (4,5,6) and high digit (7,8,9).
