---
format: open-rules
title: Elephant In The Room
setter: sujoyku
source: https://sudokupad.app/7ekjm91cm5
case: https://sudoku-sleuth.com/cases/elephant-in-the-room
library: https://rules.sudoku-sleuth.com/
status: read
exported: c301d4253d84c000166cb928322147bd
---

```rules
sudoku 9x9
region-sum-1: region-sum r2c5-r3c5-r3c4-r2c4-r2c3-r3c3-r4c2-r4c3-r4c4-r4c5-r5c4-r6c4-r7c3-r8c3-r9c4-r8c4-r8c5-r8c6 segments [["r2c5","r3c5","r3c4","r2c4"],["r2c3","r3c3"],["r4c2","r4c3"],["r4c4","r4c5","r5c4","r6c4"],["r7c3","r8c3"],["r9c4","r8c4","r8c5","r8c6"]]
region-sum-2: region-sum r9c5-r9c6-r8c7-r7c7-r7c8-r8c9-r9c9 segments [["r9c5","r9c6"],["r8c7","r7c7","r7c8","r8c9","r9c9"]]
region-sum-3: region-sum r2c1-r3c1-r4c1-r5c1-r5c2-r5c3-r6c3-r7c2-r8c2 segments [["r2c1","r3c1"],["r4c1","r5c1","r5c2","r5c3","r6c3"],["r7c2","r8c2"]]
region-sum-4: region-sum r1c6-r1c7-r1c8-r1c9 segments [["r1c6"],["r1c7","r1c8","r1c9"]]
region-sum-5: region-sum r4c8-r3c7-r2c6 segments [["r4c8"],["r3c7"],["r2c6"]]
region-sum-6: region-sum r6c6-r6c7-r6c8-r5c8 segments [["r6c6"],["r6c7","r6c8","r5c8"]]
region-sum-7: region-sum r5c9-r4c9-r3c8-r2c9 segments [["r5c9","r4c9"],["r3c8","r2c9"]]
```

- Normal sudoku rules apply, i.e. each row, column and 3x3 region has to contain the digits from 1 to 9 once each.

- Region Sum Lines: Box borders divide the blue lines into segments with the same sum. (Different lines may have different sums.)
