---
format: open-rules
title: Once in a Blue Moon
setter: sujoyku
source: https://sudokupad.app/za41d6jj2b
case: https://sudoku-sleuth.com/cases/once-in-a-blue-moon
library: https://rules.sudoku-sleuth.com/
status: read
exported: 1e8b3adc15d3d5f88161e1c9ca2853e6
---

```rules
sudoku 9x9
region-sum-1: region-sum r6c4-r5c4-r4c4-r4c3-r4c2-r3c3-r2c4-r3c4-r4c5-r4c6-r4c7-r5c7-r6c6-r7c5-r7c4 segments [["r6c4","r5c4","r4c4"],["r4c3","r4c2"],["r3c3"],["r2c4","r3c4"],["r4c5","r4c6"],["r4c7","r5c7"],["r6c6"],["r7c5","r7c4"]]
region-sum-2: region-sum r8c7-r8c8-r7c9-r6c9-r5c9-r4c9-r3c9-r2c8-r3c7-r3c6 segments [["r8c7","r8c8","r7c9"],["r6c9","r5c9","r4c9"],["r3c9","r2c8","r3c7"],["r3c6"]]
region-sum-3: region-sum r1c6-r1c7-r1c8 segments [["r1c6"],["r1c7","r1c8"]]
region-sum-4: region-sum r9c6-r9c7-r9c8 segments [["r9c6"],["r9c7","r9c8"]]
region-sum-5: region-sum r9c5-r8c4-r8c3-r7c3-r7c2-r7c1-r6c1-r5c1-r4c1-r3c1-r2c1-r2c2-r1c3 segments [["r9c5","r8c4"],["r8c3","r7c3","r7c2","r7c1"],["r6c1","r5c1","r4c1"],["r3c1","r2c1","r2c2","r1c3"]]
```

- Normal sudoku rules apply, i.e. each row, column, and 3x3 region has to contain the digits from 1 to 9 once each.

- Region Sum Lines: Box borders divide the blue lines into segments with the same sum. (Different lines may have different sums.)
