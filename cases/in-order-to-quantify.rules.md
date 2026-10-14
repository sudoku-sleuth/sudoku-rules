---
format: open-rules
title: In Order to Quantify
setter: Meggen033
source: ""
case: https://sudoku-sleuth.com/cases/in-order-to-quantify
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - The source describes Renban lines that are not yet included in our reading.
exported: 02966ca2f4b8d45e2bdcd73f39ef3e0b
---

```rules
sudoku 9x9
quadruple-1: quadruple r4c5-r4c6-r5c5-r5c6 digits [1,2]
quadruple-2: quadruple r1c1-r1c2-r2c1-r2c2 digits [4,6]
quadruple-3: quadruple r1c8-r1c9-r2c8-r2c9 digits [2,3]
quadruple-4: quadruple r4c1-r4c2-r5c1-r5c2 digits [6,8]
quadruple-5: quadruple r8c8-r8c9-r9c8-r9c9 digits [4,6]
quadruple-6: quadruple r8c5-r8c6-r9c5-r9c6 digits [7,9]
quadruple-7: quadruple r5c4-r5c5-r6c4-r6c5 digits [6,8]
quadruple-8: quadruple r8c1-r8c2-r9c1-r9c2 digits [1,5]
quadruple-9: quadruple r3c6-r3c7-r4c6-r4c7 digits [5,6]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[0.5,2.5],[0.5,3.5],[0.5,4.5],[0.5,5.5],[1.5,6.5],[2.5,7.5],[3.5,8.5],[4.5,8.5],[5.5,8.5],[6.5,8.5]],"color":"#FFA6E1","thickness":8,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[4.5,3.5],[3.5,3.5],[2.5,3.5],[2.5,4.5],[2.5,5.5],[3.5,5.5],[3.5,6.5],[4.5,6.5],[5.5,6.5],[5.5,5.5],[5.5,4.5]],"color":"#FFA6E1","thickness":8,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[1.5,5.5],[1.5,4.5],[1.5,3.5],[2.5,2.5],[2.5,1.5],[2.5,0.5],[3.5,0.5],[4.5,0.5],[5.5,0.5],[6.5,0.5],[7.5,0.5]],"color":"#FFA6E1","thickness":8,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[5.5,2.5],[6.5,2.5]],"color":"#FFA6E1","thickness":8,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[5.5,7.5],[6.5,6.5],[6.5,5.5],[6.5,4.5],[7.5,4.5],[7.5,3.5],[6.5,2.5]],"color":"#FFA6E1","thickness":8,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[8.5,3.5],[7.5,2.5],[6.5,1.5],[5.5,1.5],[4.5,2.5],[3.5,2.5]],"color":"#FFA6E1","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply.

Renban Region Sumlines: The digits on a pink line within each region it passes through create a sum. The sums for each occurance of the line passing through the region creates a set of consecutive non-repeating integers in any order. i.e. If r1c3=6 and r7c9=8 the digits on that line in boxes 2, 3, & 6 could sum to 7, 9, & 10 in any order

Circled digits where four cells meet must be present as values in at least one of those four cells.
