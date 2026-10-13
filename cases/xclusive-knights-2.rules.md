---
format: open-rules
title: Xclusive Knights 2
setter: Blobz
source: https://sudokupad.app/blobz/xclusive-knights-2
case: https://sudoku-sleuth.com/cases/xclusive-knights-2
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
anti-knight
pair r5c7-r5c8 sum 10
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"cage","cells":[0,1,2,9,11,18,19,20]}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"cage","cells":[3,4,12,13,14,21,22]}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"cage","cells":[6,7,8,15,24,25]}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"cage","cells":[37]}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[54,55,56,63]}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[67,75,76]}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"cage","cells":[61,62,69,70,79]}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"cage","cells":[44,53]}}
```

Normal sudoku rules apply.

Every N-sized cage contains the digits 1-N exclusively.

Cells separated by a chess knight's move cannot contain the same digit.

Cells separated by an X sum to 10; not all such X's are given.
