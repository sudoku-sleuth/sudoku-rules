---
format: open-rules
title: Let's Get There Sloooowly
setter: sujoyku
source: https://sudokupad.app/nxe6ay1huj
case: https://sudoku-sleuth.com/cases/let-s-get-there-sloooowly
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
little-killer-1: little-killer r5c9-r6c8-r7c7-r8c6-r9c5 sum 30
little-killer-2: little-killer r8c1-r9c2 sum 10
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[0.5,0.5],[1.5,1.5],[2.5,1.5],[3.5,2.5],[5.5,0.5],[6.5,1.5],[7.5,1.5],[8.5,2.5],[8.5,3.5],[6.5,3.5],[6.5,4.5],[7.5,4.5],[7.5,6.5],[8.5,7.5],[7.5,7.5],[7.5,8.5],[5.5,8.5],[4.5,7.5],[4.5,6.5],[5.5,5.5],[4.5,4.5],[3.5,4.5],[4.5,3.5],[3.5,3.5],[0.5,6.5],[1.5,6.5],[1.5,8.5],[4.5,8.5],[3.5,7.5],[2.5,7.5],[2.5,6.5]],"color":"#FFFFFF","thickness":12.8,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[0.5,0.5],[1.5,1.5],[2.5,1.5],[3.5,2.5],[5.5,0.5],[6.5,1.5],[7.5,1.5],[8.5,2.5],[8.5,3.5],[6.5,3.5],[6.5,4.5],[7.5,4.5],[7.5,6.5],[8.5,7.5],[7.5,7.5],[7.5,8.5],[5.5,8.5],[4.5,7.5],[4.5,6.5],[5.5,5.5],[4.5,4.5],[3.5,4.5],[4.5,3.5],[3.5,3.5],[0.5,6.5],[1.5,6.5],[1.5,8.5],[4.5,8.5],[3.5,7.5],[2.5,7.5],[2.5,6.5]],"color":"#b0e7feff","thickness":9.6,"rounded":true}}
```

- Normal sudoku rules apply, i.e. each Row, Column, and 3x3 region has to contain the digits from 1 to 9 once each.

- Regionometer: Box borders divide the blue line into segments whose sums must strictly decrease from one end to the other. If the line enters a box more than once, each segment is considered separately. (In which direction it decreases is to be determined by the solver.)

- Little killer: Digits on a marked diagonal must sum to the clue outside the grid. (If there is no conflict with other rules, digits on such a diagonal may repeat.)
