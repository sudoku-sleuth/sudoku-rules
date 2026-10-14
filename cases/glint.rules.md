---
format: open-rules
title: Glint
setter: Blobz
source: https://sudokupad.app/blobz/glint
case: https://sudoku-sleuth.com/cases/glint
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c5=2 r5c1=3 r5c9=4 r9c5=1
exported: 2ec0577d2769192318b1a2d90ec83154
---

```rules
sudoku 9x9
region-sum-1: region-sum r8c4-r9c3 segments [["r8c4"],["r9c3"]]
region-sum-2: region-sum r8c6-r9c7 segments [["r8c6"],["r9c7"]]
region-sum-3: region-sum r7c9-r6c8-r5c9 segments [["r7c9"],["r6c8","r5c9"]]
region-sum-4: region-sum r7c1-r6c2-r5c1 segments [["r7c1"],["r6c2","r5c1"]]
region-sum-5: region-sum r3c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8 segments [["r3c2"],["r4c3"],["r4c4","r4c5","r4c6"],["r4c7","r4c8"]]
region-sum-6: region-sum r5c3-r6c4 segments [["r5c3"],["r6c4"]]
region-sum-7: region-sum r5c7-r6c6 segments [["r5c7"],["r6c6"]]
region-sum-8: region-sum r1c4-r1c5-r1c6-r1c7-r2c8-r3c9-r4c9-r5c8-r6c7-r7c6-r8c5-r7c4-r6c3-r5c2-r4c1-r3c1-r2c2-r1c3 segments [["r1c4","r1c5","r1c6"],["r1c7","r2c8","r3c9"],["r4c9","r5c8","r6c7"],["r7c6","r8c5","r7c4"],["r6c3","r5c2","r4c1"],["r3c1","r2c2","r1c3"]]
pair-1: pair r9c2-r9c3 sum 10
pair-2: pair r2c8-r2c9 sum 10
pair-3: pair r3c1-r3c2 sum 10
pair-4: pair r7c9-r8c9 sum 10
quadruple-1: quadruple r2c7-r2c8-r3c7-r3c8 digits [8]
quadruple-2: quadruple r7c2-r7c3-r8c2-r8c3 digits [9]
quadruple-3: quadruple r7c7-r7c8-r8c7-r8c8 digits [9]
quadruple-4: quadruple r2c2-r2c3-r3c2-r3c3 digits [8]
quadruple-5: quadruple r1c1-r1c2-r2c1-r2c2 digits [1]
quadruple-6: quadruple r1c8-r1c9-r2c8-r2c9 digits [2]
quadruple-7: quadruple r8c1-r8c2-r9c1-r9c2 digits [3]
quadruple-8: quadruple r8c8-r8c9-r9c8-r9c9 digits [4]
quadruple-9: quadruple r5c4-r5c5-r6c4-r6c5 digits [7]
quadruple-10: quadruple r4c5-r4c6-r5c5-r5c6 digits [1]
quadruple-11: quadruple r2c5-r2c6-r3c5-r3c6 digits [7]
```

Normal sudoku rules apply.

Box borders divide blue lines into segments with the same sum.

Digits in circles must appear in one of the four cells touching that circle.

X's separate two digits that sum to 10.
