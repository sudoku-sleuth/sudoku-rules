---
format: open-rules
title: Xclusive Knights
setter: Blobz
source: https://sudokupad.app/blobz/xclusive-knights
case: https://sudoku-sleuth.com/cases/xclusive-knights
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
anti-knight
pair-1: pair r2c3-r3c3 relation {"op":"sum","value":10}
pair-2: pair r7c1-r8c1 relation {"op":"sum","value":10}
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"cage","cells":[1,10,11]}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"cage","cells":[22]}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"cage","cells":[32,41]}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"cage","cells":[16,17,25,26]}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[42,44,51,52,53]}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[60,61,70,78,79,80]}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"cage","cells":[57,58,66,67,68,75,76]}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"cage","cells":[54,55,56,63,64,65,73,74]}}
```

Normal sudoku rules apply.

Each N-sized cage contains the digits 1-N exclusively.

Cells separated by a chess knight's move cannot contain the same digit.

Cells separated by an X sum to 10; not all such X's are given.
