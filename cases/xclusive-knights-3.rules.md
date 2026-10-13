---
format: open-rules
title: Xclusive Knights 3
setter: Blobz
source: https://sudokupad.app/rdvri2cy25
case: https://sudoku-sleuth.com/cases/xclusive-knights-3
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
anti-knight
pair-1: pair r6c1-r6c2 sum 10
pair-2: pair r7c8-r7c9 sum 10
pair-3: pair r2c3-r3c3 sum 10
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"cage","cells":[6]}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"cage","cells":[12,21]}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"cage","cells":[54,55,56]}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"cage","cells":[67,68,76,77]}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[60,61,70,71,80]}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[24,33,34,35,42,43]}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"cage","cells":[27,28,29,36,38,46,47]}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"cage","cells":[31,32,39,40,41,48,49,50]}}
```

Normal sudoku rules apply.

Each N-sized cage contains the digits 1-N exclusively. 

Cells separated by a chess knight's move cannot contain the same digit.

Cells separated by an X sum to 10; not all such X's are given.
