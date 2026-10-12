---
format: open-rules
title: Summary Report
setter: sujoyku
source: https://sudokupad.app/4ecdjtuchr
case: https://sudoku-sleuth.com/cases/summary-report
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - A source line layer still needs to be included in our reading.
---

```rules
sudoku 9x9
region-sum-1: region-sum r8c2-r8c1-r7c1-r6c1-r5c1-r4c1-r3c1-r2c1-r2c2-r3c2-r4c2-r4c3-r5c3-r6c3 segments [["r8c2","r8c1","r7c1"],["r6c1","r5c1","r4c1"],["r3c1","r2c1","r2c2","r3c2"],["r4c2","r4c3","r5c3","r6c3"]]
region-sum-2: region-sum r1c5-r1c4-r2c5-r3c6-r2c7-r2c8 segments [["r1c5","r1c4","r2c5","r3c6"],["r2c7","r2c8"]]
region-sum-3: region-sum r3c4-r4c4-r4c5-r4c6-r4c7-r5c7-r6c7 segments [["r3c4"],["r4c4","r4c5","r4c6"],["r4c7","r5c7","r6c7"]]
region-sum-4: region-sum r4c8-r5c9-r6c9-r7c9-r8c9-r9c9-r9c8 segments [["r4c8","r5c9","r6c9"],["r7c9","r8c9","r9c9","r9c8"]]
index-line-1: index-line r9c1-r9c2-r9c3-r8c3-r7c3-r7c2-r6c2-r5c2
index-line-2: index-line r3c3-r2c3-r1c3-r2c4-r3c5
index-line-3: index-line r9c4-r8c4-r7c4-r7c5-r7c6-r7c7
index-line-4: index-line r1c8-r1c9-r2c9
```

```drawing
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,0.5],"width":0.22,"height":0.22,"rounded":false,"fill":"#FFFFFF","thickness":0,"angle":45}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,3.5],"width":0.22,"height":0.22,"rounded":false,"fill":"#FFFFFF","thickness":0,"angle":45}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,2.5],"width":0.22,"height":0.22,"rounded":false,"fill":"#FFFFFF","thickness":0,"angle":45}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,7.5],"width":0.22,"height":0.22,"rounded":false,"fill":"#FFFFFF","thickness":0,"angle":45}}
```

- Normal sudoku rules apply, i.e. each row, column and 3x3 region has to contain the digits from 1 to 9 once each.

- Index Lines: Each hollow turquoise line is an Index Line, i.e. the digit in the Nth cell along such a line (starting from the diamond) indicates the position along the line where the digit N appears. For example, if a diamond cell contains a 3, the third cell along that line must have a 1.

- Region Sum Lines: Box borders divide blue lines into segments with equal sums. (Different lines may have different segment totals.)
