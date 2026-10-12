---
format: open-rules
title: Xclusive Knights 4
setter: Blobz
source: https://sudokupad.app/g4muushf12
case: https://sudoku-sleuth.com/cases/xclusive-knights-4
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
anti-knight
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"cage","cells":[7,8,15,16,24,33]}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"cage","cells":[11,20]}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"cage","cells":[29,36,37,38]}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"cage","cells":[30,31,39]}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[41,50,51,52,59]}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[60,61,62,70,71,79,80]}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"cage","cells":[77]}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"cage","cells":[55,63,64,65,72,73,74,75]}}
```

Normal sudoku rules apply.

Each N-sized cage contains the digits 1-N exclusively. 

Cells separated by a (chess) knight's move cannot contain the same digit.
