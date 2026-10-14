---
format: open-rules
title: Broken Two
setter: FastSandals and Timotab
source: https://sudokupad.app/vg901kue24
case: https://sudoku-sleuth.com/cases/broken-two
library: https://rules.sudoku-sleuth.com/
status: read
exported: 67aa430a32eaf976b57278fbe6099fc8
---

```rules
sudoku 9x9
cage-1: cage r4c3-r4c4-r4c5-r5c3 total 10 connected true
cage-2: cage r4c8-r5c8 total 5 connected true
cage-3: cage r8c6-r8c7 total 5 connected true
cage-4: cage r8c1-r8c2 total 5 connected true
cage-5: cage r1c6-r2c6-r3c6 total 11 connected true
region-sum-1: region-sum r7c3-r6c3-r5c3-r4c4-r4c5-r4c6-r3c7 segments [["r7c3"],["r6c3","r5c3"],["r4c4","r4c5","r4c6"],["r3c7"]]
region-sum-2: region-sum r7c7-r7c6-r7c5-r8c4-r8c3 segments [["r7c7"],["r7c6","r7c5","r8c4"],["r8c3"]]
region-sum-3: region-sum r3c3-r2c4-r2c5-r2c6-r2c7 segments [["r3c3"],["r2c4","r2c5","r2c6"],["r2c7"]]
region-sum-4: region-sum r6c7-r7c8-r7c9 segments [["r6c7"],["r7c8","r7c9"]]
region-sum-5: region-sum r4c1-r3c2-r2c2 segments [["r4c1"],["r3c2","r2c2"]]
region-sum-6: region-sum r5c9-r4c9-r3c8-r2c8-r1c8 segments [["r5c9","r4c9"],["r3c8","r2c8","r1c8"]]
```

• Normal Sudoku rules apply: Place the digits 1 to 9 in every row, column, and box, without repetition.
• Digits in cages do not repeat and sum to the value in the top left corner.
• Box borders divide blue lines into segments of equal sum. Different lines can have different sums.
