---
format: open-rules
title: Xclusive Knights 5
setter: Blobz
source: https://sudokupad.app/vnrej15a4j
case: https://sudoku-sleuth.com/cases/xclusive-knights-5
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
pair-1: pair r5c5-r5c6 sum 10
pair-2: pair r3c8-r3c9 sum 10
anti-knight
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"cage","cells":[3,4,5],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"cage","cells":[16,17,26],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"cage","cells":[9,10,11,18,20],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"cage","cells":[28],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[46,47,48,57,58,67],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[76,77],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"cage","cells":[54,55,56,64,65,73],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"cage","cells":[70,71,79,80],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"cage","cells":[41,42,43,51],"color":"#000000","labelColor":"#000000"}}
```

Normal sudoku rules apply.

Each N-sized cage contains the digits 1-N exclusively.

Cells a (chess) knight's move apart cannot contain the same digit.

Cells separated by an X sum to 10; not all such X's are given.
