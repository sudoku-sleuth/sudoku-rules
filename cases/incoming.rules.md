---
format: open-rules
title: Incoming
setter: Blobz
source: https://sudokupad.app/blobz/incoming
case: https://sudoku-sleuth.com/cases/incoming
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
region-sum-1: region-sum r9c2-r9c3-r9c4 segments [["r9c2","r9c3"],["r9c4"]]
region-sum-2: region-sum r8c3-r8c4-r8c5 segments [["r8c3"],["r8c4","r8c5"]]
region-sum-3: region-sum r7c4-r7c5-r7c6-r6c6-r5c7-r4c7-r3c7 segments [["r7c4","r7c5","r7c6"],["r6c6"],["r5c7","r4c7"],["r3c7"]]
region-sum-4: region-sum r7c3-r6c3-r5c3-r4c4-r3c4-r3c5-r3c6 segments [["r7c3"],["r6c3","r5c3"],["r4c4"],["r3c4","r3c5","r3c6"]]
region-sum-5: region-sum r2c5-r2c6-r2c7 segments [["r2c5","r2c6"],["r2c7"]]
region-sum-6: region-sum r1c6-r1c7-r1c8 segments [["r1c6"],["r1c7","r1c8"]]
region-sum-7: region-sum r9c5-r9c6-r8c7-r8c8-r8c9 segments [["r9c5","r9c6"],["r8c7","r8c8","r8c9"]]
region-sum-8: region-sum r7c8-r7c9-r6c9 segments [["r7c8","r7c9"],["r6c9"]]
region-sum-9: region-sum r3c2-r4c2-r4c3 segments [["r3c2"],["r4c2","r4c3"]]
quadruple-1: quadruple r1c1-r1c2-r2c1-r2c2 digits [1,2]
quadruple-2: quadruple r2c2-r2c3-r3c2-r3c3 digits [2,3]
quadruple-3: quadruple r3c3-r3c4-r4c3-r4c4 digits [3,4]
quadruple-4: quadruple r4c4-r4c5-r5c4-r5c5 digits [4,5]
quadruple-5: quadruple r5c5-r5c6-r6c5-r6c6 digits [5,6]
quadruple-6: quadruple r6c6-r6c7-r7c6-r7c7 digits [6,7]
quadruple-7: quadruple r7c7-r7c8-r8c7-r8c8 digits [7,8]
quadruple-8: quadruple r8c8-r8c9-r9c8-r9c9 digits [8,9]
quadruple-9: quadruple r1c8-r1c9-r2c8-r2c9 digits [1]
```

Normal sudoku rules apply.

Box borders divide blue lines into segments with the same sum.

Digits in circles must appear in at least one of the four cells touching the circle.
