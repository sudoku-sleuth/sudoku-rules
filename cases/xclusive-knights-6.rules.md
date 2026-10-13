---
format: open-rules
title: Xclusive Knights 6
setter: Blobz
source: https://sudokupad.app/a79muhwj1v
case: https://sudoku-sleuth.com/cases/xclusive-knights-6
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
pair r9c1-r9c2 sum 10
anti-knight
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"cage","cells":[11,18,19,20,27]}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"cage","cells":[28,36,37,46,47,56]}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"cage","cells":[57,66,74,75]}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"cage","cells":[68]}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[60,69,71,78,79,80]}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[34,35,43,44,52]}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"cage","cells":[40,41,50]}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"cage","cells":[5,12,13,14,22,31,32]}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"cage","cells":[7,8,15,16,24]}}
```

Normal sudoku rules apply.

Each N-sized cage contains the digits 1-N exclusively.

Cells a (chess) knight's move apart cannot contain the same digit.

Cells separated by an X sum to 10; not all such X's are given.
