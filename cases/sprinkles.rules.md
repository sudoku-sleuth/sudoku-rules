---
format: open-rules
title: Sprinkles
setter: sujoyku
source: https://sudokupad.app/yaq8d21wlm
case: https://sudoku-sleuth.com/cases/sprinkles
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
region-sum-1: region-sum r7c1-r6c1-r5c1-r4c1-r3c2-r2c3-r1c4-r1c5-r1c6-r1c7 segments [["r7c1"],["r6c1","r5c1","r4c1"],["r3c2","r2c3"],["r1c4","r1c5","r1c6"],["r1c7"]]
region-sum-2: region-sum r9c3-r9c4-r9c5-r9c6-r8c7-r7c8-r6c9-r5c9-r4c9-r3c9 segments [["r9c3"],["r9c4","r9c5","r9c6"],["r8c7","r7c8"],["r6c9","r5c9","r4c9"],["r3c9"]]
region-sum-3: region-sum r2c5-r2c6-r2c7-r3c6-r4c7-r5c7 segments [["r2c5","r2c6"],["r2c7"],["r3c6"],["r4c7","r5c7"]]
region-sum-4: region-sum r8c5-r8c4-r8c3-r7c4-r6c4-r5c5 segments [["r8c5","r8c4"],["r8c3"],["r7c4"],["r6c4","r5c5"]]
region-sum-5: region-sum r4c2-r4c3-r4c4-r4c5 segments [["r4c2","r4c3"],["r4c4","r4c5"]]
region-sum-6: region-sum r6c5-r6c6-r6c7-r5c8 segments [["r6c5","r6c6"],["r6c7","r5c8"]]
```

- Normal sudoku rules apply, i.e. each row, column, and 3x3 box has to contain the digits from 1 to 9 once each.

- Region Sum Lines: Box borders divide blue lines into segments with equal sums. (Different lines may have different segment totals.)
