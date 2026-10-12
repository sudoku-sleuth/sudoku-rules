---
format: open-rules
title: Freeze
setter: Jobo
source: https://sudokupad.app/wen680tguv
case: https://sudoku-sleuth.com/cases/freeze
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
region-sum-1: region-sum r1c3-r1c4-r2c4-r3c5-r4c4-r4c3-r5c2-r4c1-r3c3-r3c2-r2c1 segments [["r1c3"],["r1c4","r2c4","r3c5"],["r4c4"],["r4c3","r5c2","r4c1"],["r3c3","r3c2","r2c1"]]
region-sum-2: region-sum r2c5-r3c6-r4c6-r5c7-r4c8-r4c9-r3c9-r3c7-r2c7-r1c8 segments [["r2c5","r3c6"],["r4c6"],["r5c7","r4c8","r4c9"],["r3c9"],["r3c7","r2c7","r1c8"]]
region-sum-3: region-sum r5c4-r5c5-r6c6-r7c6-r8c7-r8c8-r9c9-r6c7-r6c8 segments [["r5c4","r5c5","r6c6"],["r7c6"],["r8c7","r8c8","r9c9"],["r6c7","r6c8"]]
region-sum-4: region-sum r7c1-r6c2-r6c3-r6c4-r7c3-r8c3-r9c2-r7c4-r8c5-r9c5 segments [["r7c1"],["r6c2","r6c3"],["r6c4"],["r7c3","r8c3","r9c2"],["r7c4","r8c5","r9c5"]]
```

Normal sudoku rules apply.

Box borders divide blue lines into segments with the same sum.
