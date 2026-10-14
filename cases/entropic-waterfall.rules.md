---
format: open-rules
title: Entropic Waterfall
setter: Sir Moose
source: https://sudokupad.app/jyy04kk9bt
case: https://sudoku-sleuth.com/cases/entropic-waterfall
library: https://rules.sudoku-sleuth.com/
status: read
exported: 4bd93909e4133464128a0689368bdf6e
---

```rules
sudoku 9x9
region-sum-1: region-sum r8c3-r7c3-r6c3 segments [["r8c3","r7c3"],["r6c3"]]
region-sum-2: region-sum r3c4-r4c4-r5c4 segments [["r3c4"],["r4c4","r5c4"]]
region-sum-3: region-sum r3c7-r4c6-r5c6 segments [["r3c7"],["r4c6","r5c6"]]
region-sum-4: region-sum r4c7-r5c7-r6c7-r7c7-r8c7 segments [["r4c7","r5c7","r6c7"],["r7c7","r8c7"]]
region-sum-5: region-sum r6c6-r7c5-r8c5 segments [["r6c6"],["r7c5","r8c5"]]
region-sum-6: region-sum r1c7-r2c6 segments [["r1c7"],["r2c6"]]
region-sum-7: region-sum r2c5-r2c4-r3c3 segments [["r2c5","r2c4"],["r3c3"]]
region-sum-8: region-sum r2c2-r3c1-r4c1 segments [["r2c2","r3c1"],["r4c1"]]
region-sum-9: region-sum r2c8-r3c8-r4c8-r5c8 segments [["r2c8","r3c8"],["r4c8","r5c8"]]
entropic-1: entropic r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r9c1
entropic-2: entropic r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2-r9c2
entropic-3: entropic r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3-r9c3
entropic-4: entropic r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4-r8c4-r9c4
entropic-5: entropic r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5
entropic-6: entropic r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6-r8c6-r9c6
entropic-7: entropic r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7-r9c7
entropic-8: entropic r1c8-r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8-r9c8
entropic-9: entropic r1c9-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9
```

Normal sudoku rules apply.

Entropy Columns: Every 3 consecutive cells along each column must contain a low digit (1,2,3), middle digit (4,5,6) and high digit (7,8,9).

Region Sum Lines: Box borders divide each blue line into segments with the same sum. Different lines may have different sums.
