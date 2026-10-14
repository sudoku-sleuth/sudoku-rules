---
format: open-rules
title: Pinwheel
setter: EPH
source: ""
case: https://sudoku-sleuth.com/cases/pinwheel
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
exported: efa9bf59913b7b95ebb36a678709a368
---

```rules
sudoku 9x9
cage-1: cage r2c2-r2c3-r3c2 total 21 connected true
cage-2: cage r7c8-r8c7-r8c8 total 9 connected true
cage-3: cage r7c2-r8c2-r8c3 total 12 connected true
cage-4: cage r2c7-r2c8-r3c8 total 17 connected true
little-killer-1: little-killer r1c6-r2c5-r3c4-r4c3-r5c2-r6c1 sum 16
little-killer-2: little-killer r4c1-r5c2-r6c3-r7c4-r8c5-r9c6 sum 20
little-killer-3: little-killer r9c4-r8c5-r7c6-r6c7-r5c8-r4c9 sum 16
little-killer-4: little-killer r6c9-r5c8-r4c7-r3c6-r2c5-r1c4 sum 18
```

```drawing
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[1.5,4.5],[2.5,3.5],[3.5,2.5],[4.5,2.5]],"color":"#F03A52","thickness":9.6,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[2.5,4.5],[2.5,5.5],[3.5,6.5],[4.5,7.5]],"color":"#F03A52","thickness":9.6,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[4.5,6.5],[5.5,6.5],[6.5,5.5],[7.5,4.5]],"color":"#F03A52","thickness":9.6,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[6.5,4.5],[6.5,3.5],[5.5,2.5],[4.5,1.5]],"color":"#F03A52","thickness":9.6,"rounded":true}}
```

Standard sudoku rules apply.
Cells within a cage must sum to the number in the top left corner of the cage.
Cells along a diagonal indicated by an arrow outside the grid must sum to the number by the arrow.
The red line is an anti-palindrome line: cells equidistant from opposite ends must sum to 10.
