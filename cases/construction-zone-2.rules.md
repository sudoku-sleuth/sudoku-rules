---
format: open-rules
title: Construction Zone
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/construction-zone-2
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r3c3=5 r3c6=4 r5c3=9 r5c6=2 r9c3=1 r9c6=8
exported: 6532bc6aa49c577ead4149ce37a82da7
---

```rules
sudoku 9x9
cage-1: cage r2c1-r3c1-r4c1 total 16 connected true
cage-2: cage r6c9-r7c9 total 6 connected true
cage-3: cage r4c7-r4c8 total 11 connected true
whispers r2c1-r3c1-r4c1 gap 5
allowed-digits-1: allowed-digits r3c9-r3c8-r3c7-r3c6-r3c5-r3c4-r3c3-r3c2-r3c1 digits [2,3,5,7]
allowed-digits-2: allowed-digits r5c9-r5c8-r5c7-r5c6-r5c5-r5c4-r5c3-r5c2-r5c1 digits [2,3,5,7]
allowed-digits-3: allowed-digits r9c9-r9c8-r9c7-r9c6-r9c5-r9c4-r9c3-r9c2-r9c1 digits [2,3,5,7]
allowed-digits-4: allowed-digits r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3-r9c3 digits [2,3,5,7]
```

```drawing
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[0.5,5.5],[1.5,5.5],[2.5,5.5],[3.5,5.5],[4.5,5.5],[5.5,5.5],[6.5,5.5],[7.5,5.5],[8.5,5.5]],"color":"#FAC000","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply. The SUM of any 2 neighbors on BLUE lines is a PRIME NUMBER. The sum of any 2 neighbors on the ORANGE line is NOT A PRIME NUMBER. Numbers on the green line are at least 5 apart from their neighbors on the line. Numbers in the cage sum to the number in the top left corner of the cage. Thanks to Flycatcher for the idea of prime consecutive pair sum lines.
