---
format: open-rules
title: Oddly summing regions
setter: Chip Sounder
source: https://sudokupad.app/mnw6pyzgac
case: https://sudoku-sleuth.com/cases/oddly-summing-regions
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
region-sum-1: region-sum r1c5-r1c4-r1c3-r1c2-r1c1-r2c1-r3c1-r4c2-r4c3-r3c2-r2c3-r2c4-r2c5-r2c6-r3c6-r3c5 segments [["r1c5","r1c4"],["r1c3","r1c2","r1c1","r2c1","r3c1"],["r4c2","r4c3"],["r3c2","r2c3"],["r2c4","r2c5","r2c6","r3c6","r3c5"]]
region-sum-2: region-sum r1c6-r1c7-r1c8-r1c9 segments [["r1c6"],["r1c7","r1c8","r1c9"]]
region-sum-3: region-sum r3c9-r4c8-r4c7-r5c6 segments [["r3c9"],["r4c8","r4c7"],["r5c6"]]
region-sum-4: region-sum r4c5-r4c4-r5c3 segments [["r4c5","r4c4"],["r5c3"]]
region-sum-5: region-sum r5c1-r6c1-r7c1 segments [["r5c1","r6c1"],["r7c1"]]
region-sum-6: region-sum r5c2-r6c2-r7c3-r6c4 segments [["r5c2","r6c2"],["r7c3"],["r6c4"]]
region-sum-7: region-sum r6c5-r7c4-r7c5-r7c6-r8c7 segments [["r6c5"],["r7c4","r7c5","r7c6"],["r8c7"]]
region-sum-8: region-sum r8c8-r7c7-r6c7-r6c8-r7c9-r8c9-r9c9-r9c8-r9c7-r9c6-r9c5 segments [["r8c8","r7c7"],["r6c7","r6c8"],["r7c9","r8c9","r9c9","r9c8","r9c7"],["r9c6","r9c5"]]
region-sum-9: region-sum r9c4-r9c3-r9c2-r9c1 segments [["r9c4"],["r9c3","r9c2","r9c1"]]
region-sum-10: region-sum r8c6-r9c7 segments [["r8c6"],["r9c7"]]
parity-cells r2c2-r2c1-r4c5-r9c5-r9c6 parity "odd"
```

Normal sudoku rules apply. Place the digits 1-9 once each in every row, column and 3x3 box.
For each blue line, digits on the line have an equal sum N within each box it passes through. Note. the red line is it's own region sum line.
Cells with these circles must contain odd numbers.
