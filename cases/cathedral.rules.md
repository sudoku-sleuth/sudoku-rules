---
format: open-rules
title: Cathedral
setter: Jobo
source: https://sudokupad.app/jwza3si4f7
case: https://sudoku-sleuth.com/cases/cathedral
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
anti-king
arrow-1: arrow r4c2-r5c2-r6c2 bulb ["r3c2"]
arrow-2: arrow r4c8-r5c8-r6c8 bulb ["r3c8"]
arrow-3: arrow r7c5-r8c5-r9c5 bulb ["r6c5"]
region-sum-1: region-sum r9c1-r8c1-r7c1-r6c1-r5c1-r4c1-r3c1-r2c1-r2c2-r2c3-r3c3-r4c3-r5c3-r5c4-r4c4-r4c5-r4c6-r5c6-r5c7-r4c7-r3c7-r2c7-r2c8-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9 segments [["r9c1","r8c1","r7c1"],["r6c1","r5c1","r4c1"],["r3c1","r2c1","r2c2","r2c3","r3c3"],["r4c3","r5c3"],["r5c4","r4c4","r4c5","r4c6","r5c6"],["r5c7","r4c7"],["r3c7","r2c7","r2c8","r2c9","r3c9"],["r4c9","r5c9","r6c9"],["r7c9","r8c9"]]
region-sum-2: region-sum r9c2-r8c2-r7c2-r7c3-r7c4-r8c4-r9c4 segments [["r9c2","r8c2","r7c2","r7c3"],["r7c4","r8c4","r9c4"]]
region-sum-3: region-sum r9c6-r8c6-r7c6-r7c7-r7c8-r8c8-r9c8 segments [["r9c6","r8c6","r7c6"],["r7c7","r7c8","r8c8","r9c8"]]
pair-1: pair r6c3-r6c4 sum 10
pair-2: pair r6c6-r6c7 sum 10
```

Normal sudoku rules apply.

Digits along an arrow must sum to the digit in that arrow's circle.

Box borders divide blue lines into segments with the same sum.

Digits separated by an X must sum to 10. Not all X are given.

Cells separated by a king's move cannot contain the same digit.
