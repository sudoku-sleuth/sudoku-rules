---
format: open-rules
title: Police Lineup(Identity Parade)
setter: Will Power
source: https://sudokupad.app/ya579kvqr7
case: https://sudoku-sleuth.com/cases/police-lineup-identity-parade
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r8c3-r9c3 total 17 connected true
cage-2: cage r4c5-r5c5 total 6 connected true
pair-1: pair r8c1-r9c1 relation {"op":"sum","value":5}
pair-2: pair r6c1-r7c1 relation {"op":"sum","value":5}
pair-3: pair r6c3-r7c3 relation {"op":"sum","value":5}
pair-4: pair r4c2-r5c2 relation {"op":"sum","value":5}
pair-5: pair r2c2-r3c2 relation {"op":"sum","value":5}
pair-6: pair r5c5-r6c5 relation {"op":"sum","value":5}
pair-7: pair r1c7-r2c7 relation {"op":"sum","value":5}
extremum r3c1-r4c4-r6c2-r2c6-r7c5 type "max" exhaustive false
```

```drawing
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[0.5,7.5],[1.5,6.5],[2.5,5.5],[3.5,4.5],[4.5,3.5],[5.5,2.5],[6.5,1.5]],"color":"#C77EFA","thickness":8,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[1.5,8.5],[2.5,7.5],[3.5,6.5],[4.5,5.5],[5.5,4.5],[6.5,3.5],[7.5,2.5],[8.5,1.5]],"color":"#C77EFA","thickness":8,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[0.5,5.5],[1.5,4.5],[2.5,3.5],[3.5,2.5],[4.5,1.5],[5.5,0.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[3.5,8.5],[4.5,7.5],[5.5,6.5],[6.5,5.5],[7.5,4.5],[8.5,3.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply.

DIFFERENCE LINES(+)- Numbers on both blue lines have the SAME DIFFERENCE BETWEEN ALL NEIGHBORS on the line. Numbers on both purple lines have the SAME DIFFERENCE BETWEEN ALL NEIGHBORS on the line. Neighbors on lines are never consecutive.

KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage.

V PAIRS- Numbers with a V between them sum to 5.

MAXIMUMS(+)- Cells highlighted gray, with maximum symbols, are greater than all orthogonal neighbors. Maximums are all the same number.
