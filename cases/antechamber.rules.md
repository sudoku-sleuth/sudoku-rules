---
format: open-rules
title: Antechamber
setter: Blobz
source: https://sudokupad.app/blobz/antechamber
case: https://sudoku-sleuth.com/cases/antechamber
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
region-sum-1: region-sum r9c6-r8c7-r7c8-r6c9 segments [["r9c6"],["r8c7","r7c8"],["r6c9"]]
region-sum-2: region-sum r7c4-r7c5-r6c6-r5c7-r4c7-r3c6-r2c5-r2c4-r3c3-r4c2-r5c2-r6c3 segments [["r7c4","r7c5"],["r6c6"],["r5c7","r4c7"],["r3c6","r2c5","r2c4"],["r3c3"],["r4c2","r5c2","r6c3"]]
renban-1: renban r8c9-r9c9-r9c8
renban-2: renban r5c3-r6c2-r7c3-r6c4
renban-3: renban r2c6-r3c5-r4c6-r3c7
renban-4: renban r3c2-r4c3-r3c4-r2c3
renban-5: renban r6c5-r7c6-r6c7-r5c6
quadruple-1: quadruple r4c4-r4c5-r5c4-r5c5 digits [1,2,3,4]
quadruple-2: quadruple r4c1-r4c2-r5c1-r5c2 digits [1,9]
quadruple-3: quadruple r4c7-r4c8-r5c7-r5c8 digits [2,9]
quadruple-4: quadruple r1c4-r1c5-r2c4-r2c5 digits [4,9]
quadruple-5: quadruple r7c4-r7c5-r8c4-r8c5 digits [3,9]
quadruple-6: quadruple r8c1-r8c2-r9c1-r9c2 digits [7,8]
quadruple-7: quadruple r1c8-r1c9-r2c8-r2c9 digits [7,9]
quadruple-8: quadruple r8c8-r8c9-r9c8-r9c9 digits [5]
```

Normal sudoku rules apply.

Box borders divide blue lines into segments with the same sum. 

Pink lines contain a non-repeating consecutive sequence, in any order.

Digits in circles must appear in a cell touching the circle.
