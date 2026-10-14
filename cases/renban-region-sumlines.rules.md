---
format: open-rules
title: Renban-Region Sumlines
setter: Meggen033
source: ""
case: https://sudoku-sleuth.com/cases/renban-region-sumlines
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - The source describes Renban lines that are not yet included in our reading.
exported: c181bd958de02e37956334e1f68c143c
---

```rules
sudoku 9x9
kropki-1: kropki r4c6-r4c7 white
kropki-2: kropki r2c9-r3c9 white
kropki-3: kropki r1c6-r2c6 black
kropki-4: kropki r6c1-r6c2 black
kropki-5: kropki r8c3-r9c3 black
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[5.5,2.5],[6.5,3.5],[6.5,4.5],[6.5,5.5],[5.5,6.5],[4.5,6.5],[3.5,6.5],[2.5,5.5],[2.5,4.5],[2.5,3.5],[3.5,2.5],[4.5,2.5]],"color":"#CFCFCF","thickness":16,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[5.5,0.5],[6.5,0.5],[6.5,1.5],[5.5,1.5]],"color":"#CFCFCF","thickness":16,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[0.5,5.5],[0.5,6.5],[1.5,6.5],[1.5,5.5]],"color":"#CFCFCF","thickness":16,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[0.5,3.5],[0.5,2.5],[1.5,1.5],[2.5,0.5],[3.5,0.5]],"color":"#CFCFCF","thickness":16,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[1.5,2.5],[2.5,2.5],[3.5,1.5],[4.5,0.5]],"color":"#CFCFCF","thickness":16,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[6.5,2.5],[7.5,3.5],[7.5,4.5],[7.5,5.5]],"color":"#CFCFCF","thickness":16,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[2.5,6.5],[3.5,7.5],[4.5,7.5]],"color":"#CFCFCF","thickness":16,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[8.5,4.5],[8.5,5.5],[8.5,6.5],[8.5,7.5],[8.5,8.5],[7.5,8.5],[6.5,8.5],[5.5,8.5],[4.5,8.5]],"color":"#CFCFCF","thickness":16,"rounded":true}}
```

Normal Sudoku rules apply.

A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are shown.

Renban Region Sumlines: The digits on a line within each region it passes through create a sum. The sums for each occurance of the line passing through the region creates a set of consecutive non-repeating integers in any order. i.e. If r4c1=7 and r1c4=8 the digits on that line in box 1 could sum to either 6 or 9.

Exported from sudokulab.net
